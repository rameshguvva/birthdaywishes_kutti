function openModal() {
  document.getElementById("modal").style.display = "block";
  generateDates();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function generateDates() {
  const list = document.getElementById("dateList");
  list.innerHTML = "";

  let startYear = 2005;
  let currentYear = new Date().getFullYear();

  for (let year = startYear; year <= currentYear; year++) {
    let date = new Date(year, 2, 25); // March = 2
    let options = { weekday: 'long' };
    let day = date.toLocaleDateString('en-US', options);

    let li = document.createElement("li");
    li.textContent = `March 25, ${year} - ${day}`;
    list.appendChild(li);
  }
}

// Floating Hearts Animation for love.html
function initHearts() {
  const heartsContainer = document.querySelector('.hearts');
  if (!heartsContainer) return;

  const hearts = ['❤️', '💖', '💕', '💗', '💝', '♥️'];
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}

// Initialize on load
if (document.querySelector('.hearts')) {
  initHearts();
}
