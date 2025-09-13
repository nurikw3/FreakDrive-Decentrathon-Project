from fastapi import FastAPI
import pandas as pd
import joblib

app = FastAPI()

# Загружаем артефакты при старте
pickup_centers = pd.read_pickle("pickup_centers.pkl")
driver_recommendations = pd.read_pickle("driver_recommendations.pkl")
demand_grid_predicted = pd.read_pickle("demand_grid_predicted.pkl")
anomalous_trips = pd.read_pickle("anomalous_trips.pkl")
rf_model = joblib.load("rf_model.pkl")

@app.get("/pickup_centers")
def get_pickup_centers():
    return pickup_centers.to_dict(orient="records")

@app.get("/driver_recommendations")
def get_driver_recommendations():
    return driver_recommendations.to_dict(orient="records")

@app.get("/demand_grid")
def get_demand_grid():
    return demand_grid_predicted.to_dict(orient="records")

@app.get("/anomalies")
def get_anomalies():
    return anomalous_trips.to_dict(orient="records")

@app.get("/predict")
def predict(lat: float, lng: float, hour: int):
    # пример использования модели
    features = [[lat, lng, hour]]
    y_pred = rf_model.predict(features)
    return {"predicted_demand": float(y_pred[0])}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=4000)