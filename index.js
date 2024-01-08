const feedbackBtn = document.querySelector('.feedback-btn');
const modal = document.querySelector('.modal');
const body = document.querySelector('.body');

feedbackBtn.addEventListener('pointerdown', () => {
  body.style.backgroundColor = 'gray'
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 0)
});

modal.querySelector('.close').addEventListener('pointerdown', () => {
  body.style.backgroundColor = 'white'
  hideModal();
});

modal.querySelector('.cancel').addEventListener('pointerdown', () => {
  body.style.backgroundColor = 'white'
  hideModal();
});

document.addEventListener('pointerdown', (e) => {
  if (!e.composedPath().includes(modal)) {
    hideModal();
  }
});

modal.addEventListener('transitionend', function (e) {
  if (!this.classList.contains('show')) {
    body.style.backgroundColor = 'white'
    if (e.propertyName == 'transform') {
      this.style.display = '';
    }
  }
});

function hideModal() {
  modal.classList.remove('show')
}
