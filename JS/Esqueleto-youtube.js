document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const videosContainer = document.getElementById("videos-container");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const videos = videosContainer.getElementsByClassName("video");

        Array.from(videos).forEach(function (video) {
            const title = video.querySelector("h2").textContent.toLowerCase();
            const description = video.querySelector("p").textContent.toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                video.style.display = "block";
            } else {
                video.style.display = "none";
            }
        });
    });
});  