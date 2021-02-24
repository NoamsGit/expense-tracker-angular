import json
import os
from pymongo import MongoClient

### ---------------------------------- Questions ----------------------------------------
# 1) Do I need to check if there are the correct fields in the body of the event?
# 2) In my code ther is 2 sections of try-except. is it ok?

### ------------------------------------- TO-DO --------------------------------------------
# 1) If mongo connection failed stop the lambda end return the right message
#

try:
    cluster = MongoClient(os.environ.get('MONGODB_URI')) 
    db = cluster["expense-tracker"]
    collection = db["expenses"]

except Exception as err:
    print("An exception occurred while trying to connect to MongoDB!") 
    print(err)
else:
    print('The connection to MongoDB was successful!')

def create(event, context):

    # event_body = json.loads(event['body'])
    # expense = {
    #     'category': event['body']['category'],
    #     'sum': event['body']['sum'],
    #     'method': event['body']['method'],
    #     'date': event['body']['date']
    # }

    expense = json.loads(event['body'])

    try:
        collection.insert_one(expense)
        # ans = collection.insert_one(expense)
        # print(ans.acknowledged)



    except Exception as err:
        print("An exception occurred while trying to insert the expense to MongoDB!")
        print(err)
        insert_success = False
    else:
        print('The expense insert was successful!')
        insert_success = True



    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
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

   
