const notificationsIcon = document.getElementById('notifications-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
notificationsIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show-menu')
})