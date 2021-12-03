window.addEventListener('load', main);
/** @type {HTMLElement} hover and change the word to about me */
let Hello; 
/** @type {HTMLElement} frome Hello and click go to about me page */
let about;
/** @type {HTMLElement} hover and change to experience  */
let thisIs;
/** @type {HTMLElement}  from this is to experience and click go to experience page*/
let work;
/** @type {HTMLElement} hover Max and change to contact */
let myName;
/** @type {HTMLElement} contact and click go to contact page */
let  contact;
/** @type {HTMLElement}  hover front end to portfolio */
let frontEnd;
/** @type {HTMLElement} click and go to portfolio page*/
let portfolio;

/** start of the program and get all the id */
function main(){
    
 Hello = document.getElementById('Hello');
 about = document.getElementById('aboutMe');
 thisIs = document.getElementById('thisIs');
 work = document.getElementById('workHistori');
 myName = document.getElementById('myName');
 contact = document.getElementById('myContact');
 frontEnd = document.getElementById('frontEnd');
 portfolio = document.getElementById('portfolio');
 navMenu = document.getElementById('navMenu');
 myLinks = document.getElementById('myLinks');
}
/** hide Hello And show About me */
function hideHello () {
    Hello.style.display = 'none'
    aboutMe.style.display = 'block'
}
/** show Hello again and hide About me */
function showeHello () {
    Hello.style.display = 'block'
    aboutMe.style.display = 'none'
}
/** hide This is and show Experience  */
function hideThisIs() {
    thisIs.style.display = 'none'
    work.style.display = 'block'
}
/** show This is again and hide Experience */
function showThisIs() {
thisIs.style.display = 'block'
work.style.display = 'none'
}
/** Hide name and show Contact */
function hideName() {
    myName.style.display = 'none'
    contact.style.display = 'block'
}
/** show name again and hide Experience  */
function showName() {
    myName.style.display = 'block'
    contact.style.display = 'none'
}
/** hide frontEnd and show portfolio */
    function FontEnd () {
    frontEnd.style.display = 'none'
    portfolio.style.display = 'block'
}
/** show frontEnd again */
function devoloper () {
    frontEnd.style.display = 'block'
    portfolio.style.display = 'none'
}


/** drop menu  */
const menuBtn = document.getElementById('menu-btn')
let menuOpen = false;
menuBtn.addEventListener ('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        document.getElementById('navbar').classList.add('show')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        document.getElementById('navbar').classList.remove('show')
        menuOpen = false;
    }
});





