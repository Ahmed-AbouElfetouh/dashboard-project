// Select the Home-Page Varialbles
const theBullets = document.querySelectorAll('.controls > ul li');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');

let start = 1;
let numberOfBullets = theBullets.length;

function removeBulletsActiveClass() {
  theBullets.forEach((bullet) => {
    bullet.classList.remove('active');
  });
}

function addOrRemoveDisableClass() {
  if (start == 1) {
    previousBtn.classList.add('disabled');
  } else {
    previousBtn.classList.remove('disabled');
  }

  if (start == numberOfBullets) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (nextBtn.classList.contains('disabled')) {
      return;
    } else {
      start++;
      sliderHandler();
    }
  });
}

if(previousBtn) {
  previousBtn.addEventListener('click', () => {
    if (previousBtn.classList.contains('disabled')) {
      return;
    } else {
      start--;
      sliderHandler();
    }
  });
}

if (theBullets) {
  theBullets.forEach((bullet) => {
    bullet.addEventListener('click', function () {
      start = parseInt(this.dataset.number);
      sliderHandler();
    });
  });
}

function sliderHandler() {
  removeBulletsActiveClass();
  theBullets[start - 1].classList.add('active');
  addOrRemoveDisableClass();
}