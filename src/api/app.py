from flask import Flask, send_from_directory,  render_template, request, jsonify
from flask_restful import Api, Resource, reqparse
import random
from salesforecasting import *

app = Flask(__name__)
api = Api(app)

arr1 = []
arr2 = []
arr3 = []
i = 1
while i < 23:
    arr1.append(random.randint(0, 2000))
    arr2.append(random.randint(0, 200000))
    arr3.append(random.randint(0, 2000))
    i += 1


class DataPredictor(Resource):
    def get(self):
        return {"beep":forecast(arr1,arr2,arr3)}

api.add_resource(DataPredictor, '/')

if __name__ == '__main__':
    app.run(debug=True)
