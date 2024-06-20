let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')
let box5 = document.querySelector('.box5')
let box6 = document.querySelector('.box6')
let box7 = document.querySelector('.box7')
let box8 = document.querySelector('.box8')
let box9 = document.querySelector('.box9')
let btn = document.querySelector('button')

let boxes  = document.querySelectorAll(".box")
let count = 0

let h5 = document.querySelector("h5")

let h1 = document.querySelectorAll("h1")

box1.addEventListener("click",function(){
    clicked(0)
    checker()
},{once:true})
box2.addEventListener("click",function(){
    clicked(1)
    checker()
},{once:true})
box3.addEventListener("click",function(){
    clicked(2)
    checker()
},{once:true})
box4.addEventListener("click",function(){
    clicked(3)
    checker()
},{once:true})
box5.addEventListener("click",function(){
    clicked(4)
    checker()
},{once:true})
box6.addEventListener("click",function(){
    clicked(5)
    checker()
},{once:true})
box7.addEventListener("click",function(){
    clicked(6)
    checker()
},{once:true})
box8.addEventListener("click",function(){
    clicked(7)
    checker()
},{once:true})
box9.addEventListener("click",function(){
    clicked(8)
    checker()
},{once:true})


function clicked(num){
    if(count % 2 == 1){
        boxes[num].innerText = "X"
        count++
    }else if( count % 2 == 0){
        boxes[num].innerText = "O"
        count++
    }else{}
}

// let one = "false"

btn.addEventListener("click",()=>{
    location.reload()
})



let winningComb = [[box1.innerText,box2.innerText,box3.innerText],
[box4.innerText,box5.innerText,box6.innerText],
[box7.innerText,box8.innerText,box9.innerText],
[box1.innerText,box4.innerText,box7.innerText],
[box2.innerText,box5.innerText,box8.innerText],
[box3.innerText,box6.innerText,box9.innerText],
[box1.innerText,box5.innerText,box9.innerText],
[box3.innerText,box5.innerText,box7.innerText]

]

// if(winningComb[0] == "X")

let checker = ()=>{
    if(box1.innerText && box2.innerText && box3.innerText == "X" || box1.innerText && box2.innerText && box3.innerText == "O"){
        h5.innerText =  box1.innerText +"-you win"
    }else if(box4.innerText && box5.innerText && box6.innerText == "X" || box4.innerText && box5.innerText && box6.innerText == "O"){
        h5.innerText = box4.innerText + "-you win"
    }else if(box7.innerText && box8.innerText && box9.innerText == "X" || box7.innerText && box8.innerText && box9.innerText == "O"){
        h5.innerText = box7.innerText +"-you win"
    }else if(box1.innerText && box5.innerText && box9.innerText == "X" || box1.innerText && box5.innerText && box9.innerText == "O"){
        h5.innerText = box1.innerText +"-you win"
    }else if(box3.innerText && box5.innerText && box7.innerText == "X" || box3.innerText && box5.innerText && box7.innerText == "O"){
        h5.innerText = box3.innerText +"-you win"
    }
}