const player = document.getElementById('player');
const buttons = document.getElementsByTagName('button');
const activeBtn = document.getElementsByClassName('activeSong');

function playSong(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;

  activeBtn.item(0)?.classList.remove('activeSong');
  for (songButton of buttons) {
    if (songButton.onclick.toString().includes(id)) {
      songButton.classList.add('activeSong');
    }
  }
}

playSong('1qYz7rfgLWE');
