import json
import os
from pymongo import MongoClient
from utils.DBconnection import connect_to_DB

### ---------------------------------- Questions ----------------------------------------
# 1) Do I need to check if there are the correct fields in the body of the event?


### ------------------------------------- TO-DO --------------------------------------------
# 1) If mongo connection failed stop the lambda end return the right message
#

collection = connect_to_DB()["categories"]

def list(event, context):

    try:
        categorys = collection.find()

    except Exception as err:
        print("An exception occurred while trying to find all categories!")
        print(err)
        success = False
    else:
        print('Find all categories action was successful!')
        success = True

    categorys = [category['name'] for category in categorys]


    body = {
        "message": 'Find all categories action was successful!',
        "success": success,
        "categorys": categorys
    }

    response = {
        "statusCode": 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        "body": json.dumps(body)
    }

    return response


if __name__ == "__main__":
    list('', '')