<div style="display: flex; align-items: center;">
  <img src="data_wizard_logo.png" alt="Data Wizard Logo" width="100" height="100" align="left">
  <h1>Data Wizard - Servidor</h1>
</div>

<p align="center">

  <img alt="GitHub" src="https://img.shields.io/static/v1?label=GitHub&message=deploy&color=blue&style=for-the-badge&logo=github"/>
<img alt="Python" src="https://img.shields.io/static/v1?label=Python&message=3.10&color=blue&style=for-the-badge&logo=python"/>
<img alt="BentoML" src="https://img.shields.io/static/v1?label=BentoML&message=1.1.0&color=blue&style=for-the-badge&logo=python"/>

  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=TESTES&message=%3E100&color=GREEN&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
   
</p>

### Tópicos 
:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Manipulações do Dataset](#manipulações-do-dataset)

:small_blue_diamond: [Modelos Analisados](#modelos-analisados)

:small_blue_diamond: [Métricas Utilizadas](#metricas-utilizadas)

:small_blue_diamond: [Insights Obtidos na Análise](#insights-obtidos-na-analise)

## Descrição do projeto 

<p align="justify">
  O projeto visa detecção de fraudes e tem como objetivo identificar atividades ou padrões não usuais (incomuns). Como por exemplo, falsificação de assinaturas em cheques, clonagem de cartões de crédito, lavagem de dinheiro, declarar falência propositalmente (bankruptcy), etc.
</p>

<p align="justify">
    O servidor é responsavel por analisar o dataset profundamente, e à partir dele foram feitas manipulações nos dados para que fossem utilizados apenas parâmetros adequados no treinamento dos modelos.
    Analisamos variados modelos para detecção de fraude e em cada um foram poderados seus pontos fortes e pontos fracos. Os modelos são então utilizados pelo frontend por chamadas.
</p>

## Manipulações do Dataset

Dataset utilizado: 

[Keggle - Credit Card Fraud Detection](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud) 

Manipulações aplicadas:

- Log10 sobre os valores
- Distribuição das transações de acordo com dia/hora/minuto
- Poda de atributos pouco importantes de acordo com sua [Análise de Variação](https://blog.minitab.com/en/adventures-in-statistics-2/understanding-analysis-of-variance-anova-and-the-f-test)
- Todos os modelos foram treinados e analisados com 30, 25 e 20 atributos, com under ou over sampling ou com SMOTE

## Modelos Analisados

- Árvores de decisão de profundidade 3, 4 e 5
- XGBoost
- Redes Neurais


## Métricas Utilizadas

- Precisão
- Revocação
- Especifidade
- Pontuação F1
- Média Geométrica


## Insights Obtidos na Análise
### Modelos :
Redes neurais, especialmente as mais profundas conseguem ter melhores métricas, mas por conta de sua complexidade e características de caixa-preta são especialmente desafiadoras ao análisar e relatar como e por que é realisada a classificação de determinada transação.

Árvores de decisão em contrapartida são de fácil análise e explicação, e quando aplicadas em métodos conjuntos como o do XGBoost conseguém alcançar métricas comparáveis às das redes neurais.

### Métricas:

#### Precisão
Por conta do desbalanceamento do dataset trata-se de uma métrica pouco ilustrativa da qualidade dos modelos.

#### Revocação e Especifidade
Métricas altamente ilustrativas da qualidade do modelo para esta aplicação por análisar cada grupo de classificação individualmente, assim contornando o desbalanceamento da composição dos grupos. 

#### Pontuação F1
Baixa representatividade da qualidade do modelo para datasets desbalanceados por conta de sua composição com a precisão como um dos componentes.

#### Média Geométrica
Métrica altamente ilustrativa da qualidade do modelo para esta aplicação por normalizar o desbalanceamento entre diferentes grupos antes de avaliar a qualidade do modelo.


## Linguagens, dependencias e libs utilizadas :books:

- [SKLearn](https://scikit-learn.org/stable/)
- [IMBLearn](https://imbalanced-learn.org/stable/)
- [XGBoost](https://xgboost.readthedocs.io/en/stable/index.html)
- [PyTorch](https://pytorch.org/)
- [GraphViz](https://graphviz.org/)
- [NumPy](https://numpy.org/)
- [Seaborn](https://seaborn.pydata.org/)
- [Matplotlib](https://matplotlib.org/)
- [Keggle](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud) 

## Desenvolvedores

| [<img src="https://github.com/enzodpaiva.png?size=460u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Enzo Paiva</sub>](https://github.com/enzodpaiva) |  [<img src="https://github.com/AlexandreSh.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Alexandre Shimizu</sub>](https://github.com/AlexandreSh) |  [<img src="https://github.com/edu010101.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Eduardo Lopes</sub>](https://github.com/edu010101) | [<img src="https://github.com/TuskNinja.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Vitor Yuske</sub>](https://github.com/TuskNinja) |
| :---: | :---: | :---: | :---: |


## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2023 - Data Wizard - Back-end
