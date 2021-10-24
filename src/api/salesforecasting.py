import statistics
import numpy as np
import tensorflow as tf
tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)
import random

def forecast(p1, p2, p3):
    pastDaysSalesProduct1 = np.array(p1[:24])
    pastDaysSalesProduct2 = np.array(p2[:24])
    pastDaysSalesProduct3 = np.array(p3[:24])
    predictDaySalesProduct1 = np.array(p1[-8:])
    predictDaySalesProduct2 = np.array(p2[-8:])
    predictDaySalesProduct3 = np.array(p3[-8:])
    i = 1
    pD = []
    while i < 31:
        pD.append(i)
        i += 1

    pastDays = np.array(pD[:23])
    predictDays = np.array(pD[:-8])

    statement = ""

    layer1 = tf.keras.layers.Dense(units=8, input_shape=[1])
    layer2 = tf.keras.layers.Dense(units=4)
    layer3 = tf.keras.layers.Dense(units=1)
    modelProduct1 = tf.keras.Sequential([layer1, layer2, layer3])
    modelProduct1.compile(loss='mean_squared_error',
                          optimizer=tf.keras.optimizers.Adam(0.1))
    modelProduct1.fit(pastDays, pastDaysSalesProduct1,
                      epochs=500, verbose=False)

    std1 = statistics.stdev(pastDaysSalesProduct1)
    statement += ("Predicted sales for product 1 today: " +
                  str(modelProduct1.predict([23])[0]))
    statement += ("\n")
    statement += "How much was sold yesterday: "
    statement += str(predictDaySalesProduct1[23 - len(pastDaysSalesProduct1)])
    if((modelProduct1.predict([23]) - predictDaySalesProduct1[22 - len(pastDaysSalesProduct1)])) >= 2*std1:
        statement += ("\n")
        statement += ("Product 1 is not selling as well as predicted. Please consider taking action.")
    elif((modelProduct1.predict([23]) - predictDaySalesProduct1[22 - len(pastDaysSalesProduct1)])) <= -2*std1:
        statement += ("\n")
        statement += ("Your product is selling exceptionally well compared to its predictions! Please consider taking action.")
    else:
        statement += ("\n")
        statement += ("Your product is performing approximately as expected")

    modelProduct2 = tf.keras.Sequential([layer1, layer2, layer3])
    modelProduct2.compile(loss='mean_squared_error',
                          optimizer=tf.keras.optimizers.Adam(0.1))
    modelProduct2.fit(pastDays, pastDaysSalesProduct2,
                      epochs=500, verbose=False)

    std2 = statistics.stdev(pastDaysSalesProduct2)
    statement += ("\n")
    statement += ("\n")
    statement += ("Predicted sales for product 2 today: " +
                  str(modelProduct2.predict([23])[0]))
    statement += ("\n")
    statement += "How much was sold yesterday: "
    statement += str(predictDaySalesProduct2[23 - len(pastDaysSalesProduct2)])
    if((modelProduct2.predict([23]) - predictDaySalesProduct2[22 - len(pastDaysSalesProduct2)])) >= 2*std2:
        statement += ("\n")
        statement += ("Product 2 is not selling as well as predicted. Please consider taking action.")
    elif((modelProduct2.predict([23]) - predictDaySalesProduct2[22 - len(pastDaysSalesProduct2)])) <= -2*3:
        statement += ("\n")
        statement += ("Product 2 is selling exceptionally well compared to its predictions! Please consider taking action.")
    else:
        statement += ("\n")
        statement += ("Product 2 is performing approximately as expected")

    modelProduct3 = tf.keras.Sequential([layer1, layer2, layer3])
    modelProduct3.compile(loss='mean_squared_error',
                          optimizer=tf.keras.optimizers.Adam(0.1))
    modelProduct3.fit(pastDays, pastDaysSalesProduct3,
                      epochs=500, verbose=False)
    returnstatement = ""
    std3 = statistics.stdev(pastDaysSalesProduct3)
    returnstatement += ("\n")
    returnstatement+= ("\n")
    returnstatement += ("Predicted sales for product 3 today: " +
                  str(modelProduct3.predict([23])[0]))
    returnstatement += ("\n")
    returnstatement += "How much was sold yesterday: "
    returnstatement += str(predictDaySalesProduct3[23 - len(pastDaysSalesProduct3)])
    if((modelProduct3.predict([23]) - predictDaySalesProduct3[22 - len(pastDaysSalesProduct3)])) >= 2*std3:
        returnstatement += ("\n")
        returnstatement += ("Mushroom Risotto is not selling as well as predicted. Please consider taking action.")
    elif((modelProduct3.predict([23]) - predictDaySalesProduct3[22 - len(pastDaysSalesProduct3)])) <= -2*3:
        returnstatement += ("\n")
        returnstatement += ("Lasagna is selling exceptionally well compared to its predictions! Please consider taking action.")
    else:
        returnstatement += ("\n")
        returnstatement += ("Panzenella is performing approximately as expected")

    return returnstatement



arr1 = []
arr2 = []
arr3 = []
i = 0
while i < 23:
    arr1.append(random.randint(0, 300))
    arr2.append(random.randint(0, 300))
    arr3.append(random.randint(0, 300))
    i += 1

print(forecast(arr1, arr2, arr3))