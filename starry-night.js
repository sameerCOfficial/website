function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.width = `${Math.random() * 2}px`;
  star.style.height = star.style.width;
  return star;
}

function addStars(count) {
  const starryNight = document.querySelector('.starry-night');
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      starryNight.appendChild(createStar());
    }, Math.random() * 5000); 
  }
}

addStars(100);
