import numpy as np
import bentoml
from bentoml.io import NumpyNdarray

fraud_detection_runner = bentoml.sklearn.get("fraud_detection_tree:latest").to_runner()

fraud_detection = bentoml.Service("credit_card_fraud_detection", runners=[fraud_detection_runner])

@fraud_detection.api(input=NumpyNdarray(), output=NumpyNdarray())
def classify(input_series: np.ndarray) -> np.ndarray:
    return fraud_detection_runner.predict.run(input_series)


