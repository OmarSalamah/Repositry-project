// Function to add a new recommendation
function addRecommendation() {
    const recommendationSection = document.getElementById("recommendations");
    const newRecommendation = document.createElement("div");
    newRecommendation.className = "recommendation";
    newRecommendation.innerHTML = `<p>“This is a new recommendation.” - New Recommender</p>`;
    recommendationSection.appendChild(newRecommendation);

    // Display confirmation pop-up
    alert("Thank you! Your recommendation has been submitted.");
}
