async function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const preview = document.getElementById('preview');
    const resultDiv = document.getElementById('result');

    if (!fileInput.files[0]) {
        alert("Please select an image first!");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    // Show image preview
    const reader = new FileReader();
    reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
    };
    reader.readAsDataURL(fileInput.files[0]);

    // Send the image to FastAPI backend
    try {
        const response = await fetch("http://localhost:8000/predict", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Prediction failed!");
        }

        const data = await response.json();
        resultDiv.innerHTML = `<h2>Prediction: ${data.class}</h2><p>Confidence: ${(data.confidence * 100).toFixed(2)}%</p>`;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}
