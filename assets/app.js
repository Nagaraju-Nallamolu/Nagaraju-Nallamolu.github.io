
document.addEventListener("DOMContentLoaded", () => {
  const config = window.NEXORA_CONFIG || {};
  const appUrl = config.APP_URL || "";

  document.querySelectorAll("[data-page]").forEach(link => {
    const page = link.getAttribute("data-page");

    if (appUrl && !appUrl.includes("PASTE_YOUR")) {
      link.href = appUrl + "?page=" + encodeURIComponent(page);
    } else {
      link.href = "#contact";
    }
  });

  const employeeLink = document.getElementById("employeeLogin");

  if (employeeLink && config.EMPLOYEE_PORTAL_URL) {
    employeeLink.href = config.EMPLOYEE_PORTAL_URL;
    employeeLink.hidden = false;
  }

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      navigation.classList.toggle("open");
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
