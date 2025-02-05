
# Leaf Disease Classification API

## Introduction
This project is a **FastAPI-based web service** for **potato leaf disease classification** using a **deep learning model**. The API processes uploaded images and predicts whether a leaf is **Healthy or not**. The backend is designed for real-time inference and can be easily integrated with a frontend application.

## Features
### **1. API Endpoints**
#### **Health Check**
- **Endpoint:** `GET /ping`
- **Response:**
  ```json
  "Hello, I am alive"
  ```
- **Purpose:** Used to check if the server is running.

#### **Leaf Disease Prediction**
- **Endpoint:** `POST /predict`
- **Request:**
  - Accepts an **image file** (PNG, JPG, JPEG)
- **Response:**
  ```json
  {
      "class": "Early Blight",
      "confidence": 0.98
  }
  ```
- **Purpose:**
  - Reads the image, processes it, and predicts the disease class.
  - Returns the predicted label and confidence score.

### **2. Model Details**
- **Model Path:** `../saved_models/3`
- **Framework:** TensorFlow
- **Classes:**
  - `Early Blight`
  - `Late Blight`
  - `Healthy`

### **3. CORS Configuration**
- **Allows requests from:**
  - `http://localhost`
  - `http://localhost:3000`
  - Currently set to allow **all origins** for debugging.

## Future Improvements
- **Frontend Integration:** A frontend interface will be added for user-friendly interaction.
- **Expanded Model Scope:** The model will be improved to classify diseases in other types of leaves beyond potatoes.
- **Enhanced Visualizations:** Additional visualizations will be developed to better understand the model training process and feature importance.

## Requirements
- **Python Libraries:**
  - FastAPI
  - Uvicorn
  - TensorFlow
  - NumPy
  - Pillow (PIL for image processing)

## Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/leaf-disease-api.git
   cd leaf-disease-api
   ```
2. **Create a virtual environment** (optional but recommended)
   ```sh
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. **Install dependencies**
   ```sh
   pip install -r requirements.txt
   ```
4. **Run the API server**
   ```sh
   uvicorn main:app --host localhost --port 8000
   ```

## Usage
### **1. Test with cURL**
```sh
curl -X 'POST' \
  'http://localhost:8000/predict' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@path/to/image.jpg'
```

### **2. Test with Postman**
- Select **POST** request.
- Set URL: `http://localhost:8000/predict`
- Upload an **image file** in the `form-data` section.
- Send the request and receive the prediction.

## Deployment
- **Local Deployment:** Run the API using `uvicorn`.
- **Docker Deployment:**
  1. Create a `Dockerfile`.
  2. Build the image:
     ```sh
     docker build -t leaf-disease-api .
     ```
  3. Run the container:
     ```sh
     docker run -p 8000:8000 leaf-disease-api
     ```

## Learning Outcomes
- **Machine Learning Inference:** Implemented a **FastAPI backend** for real-time predictions.
- **Computer Vision:** Integrated **TensorFlow** for image-based classification.
- **API Development:** Built a REST API for model interaction.
- **Deployment & Scalability:** Designed API for **Dockerized deployment**.

## License
This project is for educational purposes and follows best practices in **machine learning deployment**.

---
