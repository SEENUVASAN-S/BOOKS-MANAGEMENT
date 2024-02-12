var popu=document.querySelector('.popu')
var popupBox=document.querySelector('.popup-box')
var addbook=document.getElementById('addbookk')
addbook.addEventListener("click",function(){
    popu.style.display="block"
    popupBox.style.display="block"
})
var cancelbtn=document.querySelector('.cancel')
cancelbtn.addEventListener("click",(event)=>{
    event.preventDefault()
    popu.style.display="none"
    popupBox.style.display="none"
})
//use .add .title .author .description .main-->(append to this main at last)
var faddo=document.querySelector('.add')
var titleo=document.querySelector('.title')
var authoro=document.querySelector('.author')
var descriptiono=document.querySelector('.description')
var wholediv=document.querySelector('.main')
faddo.addEventListener("click",(event)=>{
    event.preventDefault()
    //console.log("hello1")
    var div=document.createElement("div")
    //console.log('hello2')
    div.setAttribute("class","item1")
    //console.log("hello3")
    div.innerHTML=`<h3>${titleo.value}</h3>
    <h6>${authoro.value}</h6>
    <p>${descriptiono.value}</p>
    <button onclick="del(event)">delete</button>`
    wholediv.append(div)
    popu.style.display="none"
    popupBox.style.display="none"
})
function del(event){
    event.target.parentElement.remove()
}

