// http://keycode.info/
const keymap = {
  65: 'A',
  67: 'C',
  68: 'D',
  69: 'E',
  72: 'H',
  74: 'J',
  76: 'L',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition() {
  this.classList.remove('keydown');
  if (event.propertyName !== 'transform') return;
}

function clickHandler(key) {
  play(key);
}

function play(key) {
  const keyElement = document.querySelector(`.key[id="${key}"]`);
  const audioElement = document.querySelector(`audio[data-key="${key}"]`);

  keyElement.classList.add('keydown');
  audioElement.currentTime = 0;
  audioElement.play();
}

window.onkeydown = event => {
  const key = keymap[event.keyCode];
  if (key) {
    play(key);
  }
};

// Automatically update year in footer
const yyyy = new Date().getFullYear();
document.getElementById('year').innerHTML = `SFHsounds #${yyyy}`;
