window.addEventListener('load', main);
/** @type {HTMLElement} */
let Hello; 
/** @type {HTMLElement} */
let about;
/** @type {HTMLElement} */
let thisIs;
/** @type {HTMLElement} */
let work;
/** @type {HTMLElement} */
let myName;
/** @type {HTMLElement} */
let  contact;
/** @type {HTMLElement}  */
let frontEnd;
/** @type {HTMLElement} portfolio page*/
let portfolio;
/** burgerMenu @type {HTMLElement} */
let navMenu;
/** @type {HTMLElement} */
let myLinks;
/** start of the program */
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
function hideThisIs(){
    thisIs.style.display = 'none'
    work.style.display = 'block'
}
/** show This is again and hide Experience */
function showThisIs(){
thisIs.style.display = 'block'
work.style.display = 'none'
}
/** Hide name and show Contact */
function hideName(){
    myName.style.display = 'none'
    contact.style.display = 'block'
}
/** show name again and hide Experience  */
function showName(){
    myName.style.display = 'block'
    contact.style.display = 'none'
}
/** hide frontEnd and show portfolio */
    function FontEnd (){
    frontEnd.style.display = 'none'
    portfolio.style.display = 'block'
}
/** show frontEnd again */
function devoloper (){
    frontEnd.style.display = 'block'
    portfolio.style.display = 'none'
}
/** dropMenu */
function menuDown (){
   navMenu.style.display = 'block'
    navMenu.style.display = 'none'
    myLinks.style.display = 'block'
}

function menuUpp (){
    myLinks.style.display = 'block'
    myLinks.style.display = 'none'
    navMenu.style.display = 'block'
}

