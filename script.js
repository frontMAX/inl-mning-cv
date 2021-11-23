window.addEventListener('load', main);
//  /** @type {HTMLElement} */
let Hello; 
/** @type {HTMLElement} */
let about
/** start of the program */
function main(){
 Hello = document.getElementById('Hello');
 about = document.getElementById('aboutMe')
}
/** Hover over Hello text and change that to About me */
function infoAboutMe () {
        Hello.style.display = 'none'
        aboutMe.style.display = 'block'
   }
/** hover out and the the text Hello shows again */
function showeAgain () {
    Hello.style.display = 'block'
    aboutMe.style.display = 'none'
}