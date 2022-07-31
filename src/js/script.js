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
