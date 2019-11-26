// http://keycode.info/
const keymap = {
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
  69: 'E',
  70: 'F',
  71: 'G',
  72: 'H',
  73: 'I',
  74: 'J',
  75: 'K',
  76: 'L',
  77: 'M',
  78: 'N',
  79: 'O',
  80: 'P',
  81: 'Q',
  82: 'R',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
  89: 'Y',
  90: 'Z',
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

// Typeform
(function() {
  let qs;
  let js;
  let q;
  let s;
  const d = document;
  const gi = d.getElementById;
  const ce = d.createElement;
  const gt = d.getElementsByTagName;
  const id = 'typef_orm_share';
  const b = 'https://embed.typeform.com/';
  if (!gi.call(d, id)) {
    js = ce.call(d, 'script');
    js.id = id;
    js.src = `${b}embed.js`;
    q = gt.call(d, 'script')[0];
    q.parentNode.insertBefore(js, q);
  }
})();
