//navigation bar
const nav = document.querySelector('.navigation');
nav.addEventListener('mouseover', ()=>{
    nav.style.width = '150px';
})
nav.addEventListener('mouseout', ()=>{
    nav.style.width = '70px';
})

//Home-Identity
var typed = new Typed(".identity", {
    strings:["Broadcasting Technician", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

//Introduction
const introNav = document.querySelector('.introduction-nav');
const txtColor = document.querySelector('.introduction-nav');

const contentIntro = document.querySelector('.introduction-content-intro');
const contentExp = document.querySelector('.introduction-content-Exp');
const contentSkills = document.querySelector('.introduction-content-Skills');
const contentLanguage = document.querySelector('.introduction-content-Language');

introNav.addEventListener('click', (e)=>{
    switch(e.target.innerText){
        case "Introduction":
            contentIntro.style.display = 'block';
            contentExp.style.display = 'none';
            contentSkills.style.display = 'none';
            contentLanguage.style.display = 'none';
            break;
        case "Experience":
            contentIntro.style.display = 'none';
            contentExp.style.display = 'block';
            contentSkills.style.display = 'none';
            contentLanguage.style.display = 'none';
            break;
        case "Skills":
            contentIntro.style.display = 'none';
            contentExp.style.display = 'none';
            contentSkills.style.display = 'block';
            contentLanguage.style.display = 'none';
            break;
        case "Language":
            contentIntro.style.display = 'none';
            contentExp.style.display = 'none';
            contentSkills.style.display = 'none';
            contentLanguage.style.display = 'flex';
            break;
    }
}) 

txtColor.addEventListener('mouseover', (e)=>{
    e.target.style.color = 'lightblue';
    e.target.style.transition = '0.5s';
})
txtColor.addEventListener('mouseout', (e)=>{
    e.target.style.color = 'white';
}) 

const backToTopBtn = document.querySelector('.backToTopBtn');
const contactBtn = document.querySelector('.contact-btn');
const popupWrapper = document.querySelector('.popup-wrapper');
const popup = document.querySelector('.popup');
const bodyBlur = document.querySelector('.bodyFilter');

backToTopBtn.addEventListener('click',()=>{
    location.reload();
    scrollTo(0,0);
})

contactBtn.addEventListener('click',()=>{
    popupWrapper.classList.remove('hide');
    bodyBlur.classList.add('bobyBlur');
})

popupWrapper.addEventListener('click',()=>{
    popupWrapper.classList.add('hide');
    bodyBlur.classList.remove('bobyBlur');
})

popup.addEventListener('click', (e)=>{
    e.stopPropagation();
}) 

let scrollToIntro  = document.getElementById('scrollToIntro');
let anchorIntro      = document.getElementById('idIntroduction');
scrollToIntro.addEventListener('click', (e) => { location.reload(); scrollTo(anchorIntro, e) }, false);

let scrollToCV  = document.getElementById('scrollToCV');
let anchorCV      = document.getElementById('idCV');
scrollToCV.addEventListener('click', (e) => { location.reload(); scrollTo(anchorCV, e) }, false);

let scrollToPortfolio  = document.getElementById('scrollToPortfolio');
let anchorPortfolio    = document.getElementById('idPortfolio');
scrollToPortfolio.addEventListener('click', (e) => { location.reload(); scrollTo(anchorPortfolio, e) }, false);

let scrollToContact  = document.getElementById('scrollToContact');
let anchorContact      = document.getElementById('aidContact');
scrollToContact.addEventListener('click', (e) => { location.reload(); scrollTo(anchorContact, e) }, false);