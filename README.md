<div style="display: flex; align-items: center;">
  <img src="data_wizard_logo.png" alt="Data Wizard Logo" width="100" height="100" align="left">
  <h1>Data Wizard - Server</h1>
</div>

<p align="center">

  <img alt="GitHub" src="https://img.shields.io/static/v1?label=GitHub&message=deploy&color=blue&style=for-the-badge&logo=github"/>
<img alt="Python" src="https://img.shields.io/static/v1?label=Python&message=3.10&color=blue&style=for-the-badge&logo=python"/>
<img alt="BentoML" src="https://img.shields.io/static/v1?label=BentoML&message=1.1.0&color=blue&style=for-the-badge&logo=python"/>

  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=TESTES&message=%3E100&color=GREEN&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=VERSAO&message=1.0.0&color=GREEN&style=for-the-badge"/>
   
</p>

### Topics 
:small_blue_diamond: [Project Description](#project-description)

:small_blue_diamond: [Dataset Manipulation](#dataset-manipulation)

:small_blue_diamond: [Analyzed Models](#analyzed-models)

:small_blue_diamond: [Used Metrics](#used-metrics)

:small_blue_diamond: [Insights from Analysis](#insights-from-analysis)

## Project Description 

<p align="justify">
  The project aims to detect frauds and its goal is to identify unusual activities or patterns. For example, check signature forgery, credit card cloning, money laundering, intentional bankruptcy declaration, etc.
</p>

<p align="justify">
    The server is responsible for analyzing the dataset deeply, and from it, data manipulations were made to use only appropriate parameters in model training. We analyzed various fraud detection models, and each one had its strengths and weaknesses weighted. The models are then used by the frontend through calls.
</p>

## How to Run the Application :arrow_forward:

##### In the terminal, clone the project:

```
git clone git@github.com:enzodpaiva/Deteccao-Fraude-pantanal.dev-Backend.git
```
##### Create a .env file in the project root based on .env.example
```bash 
Run the instructions in the tutorial.ipynb
```

##### Run the application using Docker on the API network

```bash 
docker run --rm -p 3000:3000 --network deteccao-fraude-pantanaldev-api_fraud_network credit_card_fraud_detection:zyieiornuowrafis
```
##### Shutdown the application using Docker

```bash 
ctrl+c
``` 

## Dataset Manipulation

Dataset used: 

[Keggle - Credit Card Fraud Detection](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud) 

Applied manipulations:

Log10 on values
Distribution of transactions according to day/hour/minute
Pruning of unimportant attributes based on their [Analysis of Variation](https://blog.minitab.com/en/adventures-in-statistics-2/understanding-analysis-of-variance-anova-and-the-f-test)
All models were trained and analyzed with 30, 25, and 20 attributes, with under or over-sampling, or with SMOTE.

## Analyzed Models

- Decision trees with depths 3, 4, and 5
- XGBoost

## Used Metrics

- Precision
- Recall
- Specificity
- F1 Score
- Geometric Mean


## Insights from Analysis
### Models :
Neural networks, especially deeper ones, can achieve better metrics, but due to their complexity and black-box nature, they are particularly challenging to analyze and explain how and why a particular transaction is classified.

On the other hand, decision trees are easy to analyze and explain, and when applied in ensemble methods like XGBoost, they can achieve metrics comparable to those of neural networks.

### Metrics:

### Precision
Due to the dataset's imbalance, it is a less illustrative metric of model quality.

### Recall and Specificity
Highly illustrative metrics of model quality for this application as they analyze each classification group individually, thus addressing the imbalance in group composition.

### F1 Score
Low representativeness of model quality for imbalanced datasets due to its composition with precision as one of the components.

### Geometric Mean
Highly illustrative metric of model quality for this application as it normalizes the imbalance between different groups before evaluating model quality.


## Languages, Dependencies, and Libraries Used :books:

- [SKLearn](https://scikit-learn.org/stable/)
- [IMBLearn](https://imbalanced-learn.org/stable/)
- [XGBoost](https://xgboost.readthedocs.io/en/stable/index.html)
- [PyTorch](https://pytorch.org/)
- [GraphViz](https://graphviz.org/)
- [NumPy](https://numpy.org/)
- [Seaborn](https://seaborn.pydata.org/)
- [Matplotlib](https://matplotlib.org/)
- [Keggle](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud) 

## Future Improvements We Aim to Implement

:memo: Possibility to search for past frauds.

:memo: Implement authentication and access control to ensure user security.

:memo: Add support for different types of data sources for fraud detection, such as social media feeds, additional financial transaction data, etc.

:memo: Integrate the application with email or messaging notification services to alert users of suspicious activities.

:memo: Implement a user feedback system to collect suggestions and continuously improve the application.

:memo: Perform rigorous performance testing to ensure the application can handle large volumes of data efficiently.

:memo: Integrate the application with third-party systems, such as databases, to obtain additional information for fraud analysis.

## Developers

| [<img src="https://github.com/enzodpaiva.png?size=460u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Enzo Paiva</sub>](https://github.com/enzodpaiva) |  [<img src="https://github.com/AlexandreSh.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Alexandre Shimizu</sub>](https://github.com/AlexandreSh) |  [<img src="https://github.com/edu010101.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Eduardo Lopes</sub>](https://github.com/edu010101) | [<img src="https://github.com/TuskNinja.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Vitor Yuske</sub>](https://github.com/TuskNinja) |
| :---: | :---: | :---: | :---: |


## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2023 - Data Wizard - Back-end
