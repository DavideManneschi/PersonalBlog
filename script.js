AOS.init({

  period:2400
});
let inside_container_description=document.getElementById("description_website");
let container_description=document.getElementById("hello_container");
let menu_hamburger_flag=false;
let menu_hamburger=document.getElementById('menu_hamburger');
let button_hamburger=document.getElementById('button_hamburger');
let body=document.getElementById("menu_body_container");

container_description.addEventListener('mouseover',()=>{
  inside_container_description.classList.add("animation_hello_container");
})
container_description.addEventListener('touchstart',()=>{
  inside_container_description.classList.add("animation_hello_container");
})
container_description.addEventListener('mouseout',()=>{
  inside_container_description.classList.remove("animation_hello_container");
})
container_description.addEventListener('touchend',()=>{
  inside_container_description.classList.remove("animation_hello_container");
})


// utilized to reveal components while scrolling down




function reveal_elements(){
  let elements_to_reveal=document.querySelector("")


}

button_hamburger.addEventListener('click',function(){
  console.log("the button has been clicked!");


  if (!menu_hamburger_flag){

    menu_hamburger_flag=true;
    menu_hamburger.style.display='none';
    menu_hamburger.classList.add("close");
    body.classList.remove("hide_body");
    button_hamburger.style.right='0';





  }else if(menu_hamburger_flag) {

    menu_hamburger.style.display = 'none';

    menu_hamburger_flag = false;
    menu_hamburger.style.display = 'flex';
    menu_hamburger.classList.add("open");
    body.classList.add("hide_body");

  }
})
document.addEventListener("DOMContentLoaded", function () {

  const dynamicContent = document.getElementById("dynamic_text");

  const phrases = ["Software Engineer...", " Lifelong Learner...", "Karateka..."]
  let pharseIndex = 0;
  let letterIndex = 0;
  const typingSpeed = 150;
  const erasingSpeed = 75

  function printLetters(phrase) {

    if (letterIndex == phrase.length) {
      // clear letter which have been typed
      clearLetters();
    }
    else if (letterIndex < phrase.length) {
      dynamicContent.textContent += phrase.charAt(letterIndex);
      letterIndex += 1;
      setTimeout(function () {
        printLetters(phrase)
      }, typingSpeed)
    }
  }

  function clearLetters() {
    if (letterIndex == -1) {
      pharseIndex = (pharseIndex + 1) % phrases.length;
      letterIndex = 0;
      printLetters(phrases[pharseIndex])
    }
    else if (letterIndex > -1) {
      let updatedPhrase = "";
      for (let index = 0; index < letterIndex; index++) {
        updatedPhrase += phrases[pharseIndex].charAt(index);

      }
      console.log(updatedPhrase);
      dynamicContent.textContent = updatedPhrase;
      letterIndex -= 1;
      setTimeout(clearLetters, erasingSpeed)
    }
  }

  printLetters(phrases[pharseIndex])
})



