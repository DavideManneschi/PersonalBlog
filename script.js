




const skills = ["frontend dev...", "backend dev...", "fullstack dev..."]
let increaing = false
let curr_skill = -1
let n = skills.length

function insertText(){
  const span_el = document.getElementById("dynamic-text");
  let text = span_el.textContent
  let time = 100
  if(text.length == 0){
    increasing  = true
    curr_skill = (curr_skill+1)%n
  }
  else if(text.length == skills[curr_skill].length){
    increasing = false
    time = 500
  }
  if(increasing){
    text += skills[curr_skill].charAt(text.length);
  }
  else{
    text = text.slice(0,-1);
  }
  span_el.textContent = text
  setTimeout(insertText, time);

}

insertText()

const para = document.createElement("p");
para.textContent = "This para is created using DOM APIs!";
const spanEl = document.createElement("span");
spanEl.className = "span1 span2";
spanEl.id = "span3"
spanEl.innerHTML = "abc<em>xyz</em>";
spanEl.style.backgroundColor="yellow";
spanEl.classList.add("span4")
para.appendChild(spanEl);
document.body.appendChild(para);


function hello(){
    console.log("hello world!");

}


let event_click=document.getElementById("click");
event_click.onclick=hello;

let third=document.getElementById("listener_click");

third.addEventListener("click",()=>{

    console.log("hello");
})
