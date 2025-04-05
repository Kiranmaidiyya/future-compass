document.addEventListener("DOMContentLoaded", () => {
    const careerOptions = JSON.parse(localStorage.getItem("careerOptions")) || [];
    const resultContainer = document.getElementById("career-result");

    if (careerOptions.length === 0) {
        resultContainer.innerHTML = "<p>No recommendations found. Please complete the quiz.</p>";
        return;
    }

    resultContainer.innerHTML = "<h3>Based on your answers, we recommend:</h3>";

    careerOptions.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;

        button.onclick = () => {
            console.log("Saving career:", option);  // Debug log
            localStorage.setItem("selectedCareer", option);
            console.log("Career saved in localStorage:", localStorage.getItem("selectedCareer")); // Verify

            window.location.href = "roadmap.html"; // Redirect to roadmap page
        };

        resultContainer.appendChild(button);
        resultContainer.appendChild(document.createElement("br"));
    });
});
