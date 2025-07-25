// 1. Fetch the extensions data from JSON
async function getExtensions() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

document.body.classList.add("dark-mode"); // default

function renderExtensions(data, container) {
  container.innerHTML = ""; // Clear old content

  data.forEach((extension) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Build card HTML
    card.innerHTML = `
      <div class="card-header">
        <img src="${extension.logo}" alt="${extension.name}" />
        <div>
          <h3>${extension.name}</h3>
          <p>${extension.description}</p>
        </div>
      </div>
      <div class="card-footer">
        <button class="remove-btn">Remove</button>
        <label class="switch">
          <input type="checkbox" ${extension.isActive ? "checked" : ""} />
          <span class="slider"></span>
        </label>
      </div>
    `;

    // Add switch toggle logic
    const toggle = card.querySelector("input[type='checkbox']");
    toggle.addEventListener("change", () => {
      extension.isActive = toggle.checked;
      console.log(
        `${extension.name} is now ${extension.isActive ? "active" : "inactive"}`
      );
    });

    // Add remove button logic
    const removeBtn = card.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      container.removeChild(card); // Remove from DOM
      console.log(`${extension.name} removed`);
    });


    // Add card to container
    container.appendChild(card);
  });
}

// 3. Setup filter buttons
function setupFilters(extensions, container) {
  const allBtn = document.getElementById("all");
  const activeBtn = document.getElementById("active");
  const inactiveBtn = document.getElementById("inActive");
  const filterBtn = document.getElementsByClassName("filter-btn");


  function updateSeclectedBtn(clickedBtn) {
    Array.from(filterBtn).forEach(btn => {
      btn.classList.remove("selected");
        clickedBtn.classList.add("selected");
    });
  }
  allBtn.addEventListener("click", () => {
    renderExtensions(extensions, container);
    updateSeclectedBtn(allBtn)
  });

  activeBtn.addEventListener("click", () => {
    const activeOnly = extensions.filter(ext => ext.isActive);
    renderExtensions(activeOnly, container);
    updateSeclectedBtn(activeBtn)

  });

  inactiveBtn.addEventListener("click", () => {
    const inactiveOnly = extensions.filter(ext => !ext.isActive);
    renderExtensions(inactiveOnly, container);
    updateSeclectedBtn(inactiveBtn)
  });


}



const toggleThemeBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

toggleThemeBtn.addEventListener("click" , () =>
{
  const isDark = document.body.classList.contains("dark-mode");

  if(isDark)
  {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    themeIcon.src = "assets/images/icon-moon.svg";
    themeIcon.alt = "Switch to Dark Mode"
    console.log("Light Mode is now On")
    
    
  }
  else
    {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      themeIcon.src = "assets/images/icon-sun.svg";
    themeIcon.alt = "Switch to Light Mode"
    console.log("Dark Mode is now On")

  }
})

// 4. Main initializer function
async function init() {
  const container = document.getElementById("extensions");
  const extensions = await getExtensions(); // Get data from JSON
  renderExtensions(extensions, container);  // Show all extensions
  setupFilters(extensions, container);      // Add filter logic
}

init(); // Start the app
