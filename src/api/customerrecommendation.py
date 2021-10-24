import tensorflow_datasets as tfds
import tensorflow_recommenders as tfrs

import numpy as np
import tensorflow as tf

from typing import Dict, Text

rating = tfds.load('movielens/100k-ratings', split='train')
movies = tfds.load('movielens/100k-movies', split='train')

rating = rating.map(lambda
                    x: {'movie_title': x['movie_title'], 'user_id': x['user_id']}) #filter the ratings data 
movies = movies.map(lambda x: x['movie_title'])

user_id_vocabulary = tf.keras.layers.experimental.preprocessing.StringLookup(
    mask_token=None)
user_id_vocabulary.adapt(rating.map(lambda x: x['user_id']))  #converting map into a vector space, allows us to use embeddings instead of dense neural networks (much faster for a problem like this for reasons that are too complex for us to understand)
movies_title_vocabulary = tf.keras.layers.experimental.preprocessing.StringLookup( 
    mask_token=None)
movies_title_vocabulary.adapt(movies)


class MovieLensModel(tfrs.Model):
    def __init__(
            self,
            user_model: tf.keras.Model,
            movie_model: tf.keras.Model,
            task: tfrs.tasks.Retrieval):
        super().__init__()

        self.user_model = user_model
        self.movie_model = movie_model

        self.task = task

    def compute_loss(self, features: Dict[Text, tf.Tensor], training=False) -> tf.Tensor:
        user_embeddings = self.user_model(features["user_id"])
        movie_embeddings = self.movie_model(features["movie_title"])

        return self.task(user_embeddings, movie_embeddings)


users_model = tf.keras.Sequential([user_id_vocabulary,
                                   tf.keras.layers.Embedding(user_id_vocabulary.vocab_size(), 64)])

movie_model = tf.keras.Sequential([movies_title_vocabulary, tf.keras.layers.Embedding(
    movies_title_vocabulary.vocab_size(), 64)])

task = tfrs.tasks.Retrieval(metrics=tfrs.metrics.FactorizedTopK(
    movies.batch(128).map(movie_model)))

model = MovieLensModel(users_model, movie_model, task)
model.compile(optimizer=tf.keras.optimizers.Adagrad(0.5))
model.fit(rating.batch(4096), epochs=3)

recommends = tfrs.layers.factorized_top_k.BruteForce(model.user_model)
recommends.index_from_dataset(movies.batch(100).map(
    lambda title: (title, model.movie_model(title))))

id_ = input('Enter the user_id: ')
_, titles = recommends(np.array([str(id_)]))
print('Top recommendation for user', id_, titles[0, :3])
