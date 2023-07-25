import csv
import sqlite3

# Function to create the database and table
def create_db_and_table():
    conn = sqlite3.connect('credit_card_transactions.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS transactions (
            Time TEXT,
            V1 REAL,
            V2 REAL,
            V3 REAL,
            V4 REAL,
            V5 REAL,
            V6 REAL,
            V7 REAL,
            V8 REAL,
            V9 REAL,
            V10 REAL,
            V11 REAL,
            V12 REAL,
            V13 REAL,
            V14 REAL,
            V15 REAL,
            V16 REAL,
            V17 REAL,
            V18 REAL,
            V19 REAL,
            V20 REAL,
            V21 REAL,
            V22 REAL,
            V23 REAL,
            V24 REAL,
            V25 REAL,
            V26 REAL,
            V27 REAL,
            V28 REAL,
            Amount REAL,
            Class INTEGER
        )
    ''')

    conn.commit()
    conn.close()

# Function to insert data into the table
def insert_data_into_table():
    conn = sqlite3.connect('credit_card_transactions.db')
    cursor = conn.cursor()

    with open('/home/eduardo/Desktop/Pantanal_Dev/Onca_Pintada/kaggle_dataset_credit_card_fraud_detection/creditcard.csv', 'r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            cursor.execute('''
                INSERT INTO transactions (Time, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10, V11, V12, V13, V14, V15, V16, V17, V18, V19, V20, V21, V22, V23, V24, V25, V26, V27, V28, Amount, Class)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (row['Time'], row['V1'], row['V2'], row['V3'], row['V4'], row['V5'], row['V6'], row['V7'], row['V8'], row['V9'],
                  row['V10'], row['V11'], row['V12'], row['V13'], row['V14'], row['V15'], row['V16'], row['V17'], row['V18'],
                  row['V19'], row['V20'], row['V21'], row['V22'], row['V23'], row['V24'], row['V25'], row['V26'], row['V27'],
                  row['V28'], row['Amount'], row['Class'], row['ID'], row['ID']))

    conn.commit()
    conn.close()

# Call the functions to create the database and insert data into the table
create_db_and_table()
insert_data_into_table()
