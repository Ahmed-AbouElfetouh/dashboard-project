// Select the Email-Page Varialbles
const messageCategories = document.querySelectorAll(
  '.emails-box .sidebar-menu .messages-categories > div',
);

const allIcons = document.querySelector('#icons');

function show_hide_icons() {
  let checkBox = document.getElementById('select');
  if (checkBox) {
    checkBox.addEventListener('change', function () {
      if (checkBox.checked) {
        allIcons.classList.add('show-hide');
      } else {
        allIcons.classList.remove('show-hide');
      }
    });
  }
}
show_hide_icons();
if (messageCategories) {
  messageCategories.forEach((element) => {
    element.addEventListener('click', function () {
      messageCategories.forEach((el) => {
        el.classList.remove('active');
        this.classList.add('active');
      });
    });
  });
}

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
// Select Header Varialbles
const notificationsIcon = document.getElementById('notifications-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const toggleRightBtn = document.getElementById('toggle-right');
// Select Sidebar Varialbles
const sidebar = document.getElementById('sidebar');
const toggleLeftBtn = document.getElementById('toggle-left');

// Toggle Sidebar to Right
toggleRightBtn.addEventListener('click', () => {
  sidebar.style.left = '0';
});

// Toggle Sidebar to Left
toggleLeftBtn.addEventListener('click', () => {
  sidebar.style.cssText = '@media (max-width: 768px) {left: -240px}';
});

// Show - Hide Notifications List
notificationsIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show-menu');
});
