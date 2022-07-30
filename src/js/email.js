// Select the Email-Page Varialbles
const messageCategories = document.querySelectorAll(
  '.emails-box .sidebar-menu .messages-categories > div',
);

if (messageCategories) {
  messageCategories.forEach((element) => {
    element.addEventListener('click', function() {
      messageCategories.forEach((el) => {
        el.classList.remove('active');
        this.classList.add('active')
      });
    });
  });
}
