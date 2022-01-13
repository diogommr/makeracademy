const mainNav = document.getElementById('main-nav');
const mainNavLinks = mainNav.querySelectorAll('.link');
const toggleNavMenuBtn = document.getElementById('nav-toggle-btn');

for (let i = 0; i < mainNavLinks.length; i++) {
  const linkEl = mainNavLinks[i];

  const re = new RegExp(`/?${linkEl.attributes.href.value}`, 'gi'); 
  const match = location.pathname.match(re) == location.pathname;

  if (match) {
    linkEl.classList.add('active');
  } else {
    linkEl.classList.remove('active');
  }
}


toggleNavMenuBtn.addEventListener('click', function(event){
  mainNav.classList.toggle('open');
});