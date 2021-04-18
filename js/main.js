/*____afficher le menu____*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav =  document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle','nav-menu')

/*____changer l'onglet active____*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  //Active link
  navLink.forEach( n => n.classList.remove('active'))
  this.classList.add('active')

  //Faire disparaitre me menu
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*____gestion des animations avec scrollreveal____*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/*____animations home____*/
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:150})
sr.reveal('.home__img',{delay: 300})
sr.reveal('.home__social-icon',{interval: 200})


/*____animations A propos____*/
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:150})
sr.reveal('.abou__text',{delay:150})

/*____animations  skills____*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:150})
sr.reveal('.skills__text',{interval:200})
sr.reveal('.skills__img',{delay:150})

/*____animations  projets____*/

sr.reveal('.work__img',{interval:200})
/*____animations  projets____*/
sr.reveal('.contact__input',{interval:200})
