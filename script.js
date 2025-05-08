document.body.addEventListener("click", () => {
  const overlay = document.getElementById("crack-overlay");
  overlay.style.opacity = 1;

  setTimeout(() => {
    document.getElementById("message").style.display = "block";
  }, 5000);
});
