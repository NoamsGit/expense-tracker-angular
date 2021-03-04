import json
import os
from pymongo import MongoClient
from utils.DBconnection import connect_to_DB

### ---------------------------------- Questions ----------------------------------------
# 1) Do I need to check if there are the correct fields in the body of the event?

### ------------------------------------- TO-DO --------------------------------------------
# 1) If mongo connection failed stop the lambda end return the right message
#

collection = connect_to_DB()["expenses"]

def create(event, context):

    ## event_body = json.loads(event['body'])
    expense = json.loads(event['body'])

    try:
        collection.insert_one(expense)
        # ans = collection.insert_one(expense)
        # print(ans.acknowledged)

    except Exception as err:
        print("An exception occurred while trying to insert the expense to MongoDB!")
        print(err)
        success = False
    else:
        print('The expense insert was successful!')
        success = True

    body = {
        "message": "The expense insert was successful!",
        "success": success
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
    create('', '')