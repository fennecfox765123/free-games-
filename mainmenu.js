// Demo featured games data
const featuredGames = [
  {
    title: "Space Blaster",
    image: "https://cdn-icons-png.flaticon.com/512/1082/1082600.png",
    desc: "Shoot asteroids and aliens in this fast-paced arcade game."
  },
  {
    title: "Puzzle Quest",
    image: "https://cdn-icons-png.flaticon.com/512/3522/3522090.png",
    desc: "Solve challenging puzzles to level up your mind."
  },
  {
    title: "Racing Rivals",
    image: "https://cdn-icons-png.flaticon.com/512/1082/1082608.png",
    desc: "Race your car against players all over the world."
  },
  {
    title: "Mystic Adventure",
    image: "https://cdn-icons-png.flaticon.com/512/1082/1082606.png",
    desc: "Embark on a magical quest and discover hidden treasures."
  }
];

function renderFeaturedGames() {
  const gamesList = document.getElementById('gamesList');
  gamesList.innerHTML = '';
  featuredGames.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title} logo">
      <h4>${game.title}</h4>
      <p>${game.desc}</p>
    `;
    gamesList.appendChild(card);
  });
}

// Button interaction: scroll to featured games section
document.getElementById('exploreBtn').onclick = function() {
  document.querySelector('.featured').scrollIntoView({behavior: 'smooth'});
};

window.onload = renderFeaturedGames;
