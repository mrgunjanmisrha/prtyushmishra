const downloadBtn = document.getElementById("downloadBtn");
const getStartedBtn = document.getElementById("getStartedBtn");

const toast = document.createElement("div");
toast.className = "toast-message";
toast.textContent = "Thanks! Download starting soon...";
toast.style.position = "fixed";
toast.style.bottom = "1.5rem";
toast.style.right = "1.5rem";
toast.style.padding = "1rem 1.2rem";
toast.style.borderRadius = "14px";
toast.style.background = "rgba(15, 23, 42, 0.95)";
toast.style.color = "#f8fafc";
toast.style.boxShadow = "0 20px 40px rgba(0,0,0,0.18)";
toast.style.opacity = "0";
toast.style.transition = "opacity 0.25s ease, transform 0.25s ease";
toast.style.pointerEvents = "none";
document.body.appendChild(toast);

function showToast(message) {
  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(-10px)";
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(0)";
  }, 2400);
}

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    showToast("Thanks! Your download will begin shortly.");
  });
}

if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    showToast("Welcome! A free trial is being prepared for you.");
  });
}

const navLinks = document.querySelectorAll("header nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
