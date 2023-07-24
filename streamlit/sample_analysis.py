import streamlit as st
import pandas as pd
import seaborn as sns
from matplotlib import pyplot as plt
import sqlite3

def violin(data_frame):
    column = st.select_slider('Selecione a variável que se deseja analisar', options=data_frame.columns)
    fig = plt.figure(figsize=(10, 10))
    sns.violinplot(data=data_frame, x=data_frame.columns[-1], y=column)
    st.pyplot(fig)

def scatter(data_frame):
    option = st.selectbox('Selecione a variável que se deseja analisar',options=data_frame.columns)
    fig = plt.figure(figsize=(10, 10))
    sns.scatterplot(data=data_frame, x=option, y=option, hue=data_frame.columns[-1])
    st.pyplot(fig)

def histogram(data_frame):
    column = st.select_slider('Selecione a variável que se deseja analisar', options=data_frame.columns)
    bins = st.slider('Selecione a quantidade de bins', 1, 101, 21, 10)
    fig = plt.figure(figsize=(10, 10))
    sns.histplot(data=data_frame, x=column, hue=data_frame.columns[-1], multiple="layer", bins=bins, stat="density", common_norm=False)
    st.pyplot(fig)

def data_visualization(data_frame):
    st.title("Data Wizard- Análise da Amostra")
    option = st.selectbox('Selecione uma maneira de visualizar os dados',('scatter', 'violin', 'histogram'))

    if option == "violin":
        violin(data_frame)
    elif option == "scatter":
        scatter(data_frame)
    elif option == "histogram":
        histogram(data_frame)
    else:
        st.write("Opção não implementada")
    
def main():
    conn = sqlite3.connect('../database/credit_card_transactions.db')
    cursor = conn.cursor()

    random_example = cursor.execute('''SELECT * FROM transactions LIMIT 1''')
    random_example_dataframe = pd.DataFrame(random_example.fetchall(), columns=["Time", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17", "V18", "V19", "V20", "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28", "Amount", "Class"])
    random_example_dataframe['Class'] = 'Amostra'

    random_fraud_rows = cursor.execute('''SELECT * FROM transactions WHERE Class=1 ORDER BY RANDOM() LIMIT 300''')
    fraud_dataframe = pd.DataFrame(random_fraud_rows.fetchall(), columns=["Time", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17", "V18", "V19", "V20", "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28", "Amount", "Class"])
    fraud_dataframe['Class'] = 'Fraude'

    random_non_fraud_rows = cursor.execute('''SELECT * FROM transactions WHERE Class=0 ORDER BY RANDOM() LIMIT 700''')
    non_fraud_dataframe = pd.DataFrame(random_non_fraud_rows.fetchall(), columns=["Time", "V1", "V2", "V3", "V4", "V5", "V6", "V7","V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15","V16", "V17", "V18", "V19", "V20", "V21", "V22", "V23","V24", "V25", "V26", "V27", "V28", "Amount", "Class"])
    non_fraud_dataframe['Class'] = 'Não Fraude'    

    conn.commit()
    conn.close()
    data_frame = pd.concat([fraud_dataframe, non_fraud_dataframe, random_example_dataframe], ignore_index=True)
    
    data_frame["Time"] = data_frame["Time"].astype("int32")
    data_frame["Time"] = (data_frame["Time"]/3600.0)%24.0
    data_frame["Class"] = data_frame["Class"].astype("str")
    data_visualization(data_frame)

if __name__ == "__main__":
    main()