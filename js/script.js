
document.getElementById('hamburger').addEventListener('click', function () {
  const nav = document.getElementById('navLinks');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '60px';
    nav.style.right = '20px';
    nav.style.padding = '1rem';
    nav.style.borderRadius = '0.5rem';
  }
});
