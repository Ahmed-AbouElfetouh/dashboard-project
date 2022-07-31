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
