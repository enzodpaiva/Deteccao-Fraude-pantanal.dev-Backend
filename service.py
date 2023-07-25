import numpy as np
import sqlite3
import subprocess
import bentoml
from bentoml.io import NumpyNdarray, JSON
from streamlit.web import cli as stcli
import random

fraud_detection_runner = bentoml.sklearn.get("fraud_detection_tree:latest").to_runner()
fraud_detection = bentoml.Service("credit_card_fraud_detection", runners=[fraud_detection_runner])

@fraud_detection.api(input=JSON(), output=JSON(), route="/random-transaction")
def random_transaction(input) -> dict:
    conn = sqlite3.connect('credit_card_transactions.db')
    cursor = conn.cursor()

    random_transaction = cursor.execute('''SELECT * FROM transactions ORDER BY RANDOM() LIMIT 1''')
    random_transaction = [float(value) for value in random_transaction.fetchall()[0]]
    transaction_class = fraud_detection_runner.predict.run([random_transaction[:-1]])
    random_transaction = {"Time": random_transaction[0],"V1": random_transaction[1],"V2": random_transaction[2],"V3": random_transaction[3],"V4": random_transaction[4],"V5": random_transaction[5],"V6": random_transaction[6],"V7": random_transaction[7],"V8": random_transaction[8],"V9": random_transaction[9],"V10": random_transaction[10],"V11": random_transaction[11],"V12": random_transaction[12],"V13": random_transaction[13],"V14": random_transaction[14],"V15": random_transaction[15],"V16": random_transaction[16],"V17": random_transaction[17],"V18": random_transaction[18],"V19": random_transaction[19],"V20": random_transaction[20],"V21": random_transaction[21],"V22": random_transaction[22],"V23": random_transaction[23],"V24": random_transaction[24],"V25": random_transaction[25],"V26": random_transaction[26],"V27": random_transaction[27],"V28": random_transaction[28],"Amount": random_transaction[29],"Class": transaction_class[0]}

    conn.commit()
    conn.close()
    return random_transaction

@fraud_detection.api(input=NumpyNdarray(), output=NumpyNdarray())
def classify(input_series: np.ndarray) -> np.ndarray:
    return fraud_detection_runner.predict.run(input_series)


@fraud_detection.api(input=JSON(), output=JSON(), route="/sample-view")
def sample_view(sample) -> dict:
    app_port = random.randint(1000, 9000)
    sample['Class'] = int(sample['Class'])
    print(sample)

    values = [str(value) for value in sample.values()]

    subprocess.Popen(["streamlit", "run", "--browser.serverAddress", "localhost", "--server.port", str(app_port), "sample_analysis.py", "--", "--transaction_values", *values])
    return {"url": f"http://localhost:{app_port}"}


# from flask import Flask

# app = Flask(__name__)

# # Rota para transaction sample
# @app.route('/transaction-sample' , methods=['POST'])
# def transaction_sample():
#     return "Esta é uma mensagem de exemplo."

# if __name__ == "__main__":
#     app.run(port=5500, debug=True)