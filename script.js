// Jordan Local Trip - shared scripts

// Itinerary: expand / collapse all days (tour pages)
const toggleAllBtn = document.getElementById("toggleAll");
if (toggleAllBtn) {
  const days = document.querySelectorAll(".itinerary details");
  toggleAllBtn.addEventListener("click", () => {
    const shouldOpen = Array.from(days).some((d) => !d.open);
    days.forEach((d) => (d.open = shouldOpen));
    toggleAllBtn.textContent = shouldOpen ? "Collapse All" : "Expand All";
  });
}

// Sign in: demo validation only (no backend)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  const message = document.getElementById("loginMessage");

  const show = (text, type) => {
    message.textContent = text;
    message.className = type;
  };

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      show("Please fill in all fields.", "error");
      return;
    }

    if (email === "rahaf@example.com" && password === "123456") {
      show("Welcome back, Rahaf!", "ok");
    } else {
      show("Invalid email or password.", "error");
    }
  });

  document.querySelectorAll("[data-unavailable]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      show("This feature is not available in the demo version.", "error");
    });
  });
}
