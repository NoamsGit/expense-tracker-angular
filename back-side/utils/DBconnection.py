import os
from pymongo import MongoClient

### ------------------------------------- TO-DO --------------------------------------------
# 1) Make "initialize_connection" not accessible from outside the script
#

db_handler = None

def initialize_connection():
    global db_handler
    try:
        print('Connecting to MongoDB...')
        cluster = MongoClient(os.environ.get('MONGODB_URI'))
        db_handler = cluster["expense-tracker"]

    except Exception as err:
        print("An exception occurred while trying to connect to MongoDB!")
        print(err)

    else:
        print('The connection to MongoDB was successful!')


def connect_to_DB():
    if not (db_handler):
        initialize_connection()
    else:
        print('Using cached MongoDB connection!')
    return db_handler

    







