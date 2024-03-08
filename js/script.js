// Toggle class active
const navbarNav = document.querySelektor(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu");
onclick = () => {
  navbarNav.classlist.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburber = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNavNav.classlist.remove("active");
});
