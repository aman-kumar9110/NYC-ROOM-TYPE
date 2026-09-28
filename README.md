# 🏙️ StayType — NYC Room Type Predictor

A machine learning-powered web application that predicts the most likely room type of a New York City accommodation listing based on its location, price, availability, reviews, and host information.

Built with Python, Machine Learning, FastAPI, HTML, CSS, and JavaScript.

## 🌐 Live Demo

**[Try StayType](https://staytype-api.onrender.com/app/)**

## 📌 Project Overview

StayType is an end-to-end Machine Learning web application designed to predict the room type of NYC accommodation listings.

Users enter property and host details through an interactive web interface. The information is sent to a FastAPI backend, where a trained machine learning model processes the listing attributes and returns a predicted room type.

The project demonstrates the integration of machine learning with backend API development and frontend web technologies.

## ✨ Key Features

- Machine learning-based NYC room type prediction
- Interactive and responsive web interface
- FastAPI backend for serving predictions
- REST API integration using JavaScript
- Prediction results displayed directly on the website
- Model confidence displayed in the prediction interface
- Input validation and reset functionality
- Deployed online using Render

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Programming Language | Python |
| Machine Learning | ML classification model |
| Backend | FastAPI |
| Frontend | HTML, CSS, JavaScript |
| API | REST API |
| Deployment | Render |

## 📊 Input Features

The model uses the following ten listing attributes:

1. Latitude
2. Longitude
3. Price per night
4. Minimum nights
5. Total number of reviews
6. Reviews per month
7. Host listing count
8. Availability per year
9. Borough
10. Neighbourhood

## ⚙️ How It Works

1. The user enters accommodation listing information.
2. JavaScript collects the input values and sends them to the FastAPI backend.
3. The backend processes the input data and passes it to the trained machine learning model.
4. The model predicts the most likely room type.
5. The predicted room type and available confidence information are displayed on the website.

## 🏗️ System Architecture

```text
       User
        |
        v
 HTML / CSS / JavaScript
        |
        v
   FastAPI Backend
        |
        v
   Data Preprocessing
        |
        v
 Machine Learning Model
        |
        v
  Room Type Prediction
        |
        v
    Web Interface
```

## 🚀 Live Application

The application is deployed on Render.

**Website:** https://staytype-api.onrender.com/app/

### How to Use

1. Open the live application.
2. Enter the listing's location, price, reviews, host information, and availability.
3. Select the borough and enter the neighbourhood.
4. Click **Predict room type**.
5. View the predicted room type and confidence displayed by the application.

## 🔌 API Integration

The application uses a FastAPI prediction endpoint.

```http
POST /predict
```

The frontend sends listing information to the backend as JSON and displays the prediction returned by the model.

## 🎯 Project Objectives

- Apply machine learning classification to real-world accommodation listing data.
- Build an end-to-end ML application.
- Integrate a trained ML model with a FastAPI backend.
- Develop an interactive frontend using HTML, CSS, and JavaScript.
- Deploy a machine learning application for public access.

## 🔮 Future Improvements

- Compare multiple machine learning classification algorithms.
- Add feature importance visualizations.
- Improve prediction accuracy through hyperparameter tuning.
- Add interactive charts for NYC accommodation data.
- Provide additional insights into room types across different boroughs.

## 👨‍💻 Author

**Aman Kumar**

Built as an end-to-end Machine Learning and Web Development project.

---

⭐ If you find this project useful, consider giving the repository a star.
