//JS code for index.html

//Pseudocode
//1 - get elements off page
//2 - make the button on the page run our code
//3 - get data from those elements
//4 - add two numbers together
//5 - display that on the page

//get elements off the page

const num1_element = document.querySelector("input#num1")
const num2_element = document.querySelector("input#num2")
const button = document.querySelector("button#add")
const answer = document.querySelector("div#answer")
debugger
//make the button run our code
button.addEventListener("click",()=>{
    //get data
    const num1 = num1_element.value;
    const num2 = num2_element.value;
    //add
    const sum = Number(num1)+Number(num2)
    //put on page
    answer.innerText = sum
})