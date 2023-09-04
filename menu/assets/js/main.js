// Simulate content loading (remove this in your actual implementation)
window.addEventListener("load", function () {
  // Remove the loading overlay when the content is loaded
  const loadingOverlay = document.querySelector(".loading-overlay");
  loadingOverlay.style.display = "none";
});

fetch("./assets/menu.json")
  .then((response) => response.json())
  .then((data) => {
    const foodMenu = document.getElementById("foodMenu");
    const modal = document.getElementById("menuModal");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalDescription = document.getElementById("modalDescription");

    data.forEach((item) => {
      const foodItem = document.createElement("div");
      foodItem.classList.add("foodItem");
      foodItem.innerHTML = `
      <div class="list-item-content">
        <figure class="list-item-content-img"> 
          <img src="${item.image}" alt="${item.name}">
        </figure>
        <div class="list-item-content-info">
          <h3 class="list-item-content-title">${item.name}</h3>
          <!-- <a class="list-item-content-menu-linked" href="${item.menuLinked}">Menu</a> -->
        </div>

      </div>
     


    `;

      foodItem.addEventListener("click", () => {
        modalImage.src = item.menu;
        // modalName.textContent = item.name;
        // modalDescription.textContent = item.description;
        // Create and add link to modal content
        // const linkElement = document.createElement("a");
        // linkElement.href = item.menuLinked;
        // linkElement.textContent = "Learn More";
        // modalDescription.appendChild(linkElement);

        modal.style.display = "block";
      });

      foodMenu.appendChild(foodItem);
    });

    // Close modal when close button is clicked
    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching menu data:", error);
  });

// --------------------------------------------------
