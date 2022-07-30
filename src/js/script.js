// Select the Header Varialbles
const notificationsIcon = document.getElementById('notifications-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

// Show - Hide Notifications List
notificationsIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show-menu');
});
