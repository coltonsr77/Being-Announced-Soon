document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const datetime = document.getElementById("datetime");
  const xLink = document.getElementById("x-link");

  message.textContent = "🚧 To be announced soon. 🚧";

  // Set your event date & time here
  const target = new Date("October 3, 2025 21:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = target - now;

    if (distance <= 0) {
      clearInterval(timer);
      datetime.textContent = "Check the X Account.";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      datetime.textContent = `📅 Being Announced in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);

  // X link (replace with your username)
  const xUsername = "md_tfd_project";
  xLink.href = `https://x.com/${xUsername}`;
});

// Password check for secret
function checkPassword() {
  const input = document.getElementById("password").value;
  const secretSection = document.getElementById("secret-section");

  const correctPassword = "LASTUPDATE"; // change this

  if (input === correctPassword) {
    secretSection.classList.add("show");
  } else {
    alert("❌ Wrong password. Try again!");
  }
}
