let fullname = prompt("Lütfen Adınızı Giriniz!")
let myName = document.querySelector('#myName')
myName.innerHTML = `${fullname}`


function showTime(){

const dayName = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let secons = date.getSeconds()
let day = dayName[date.getDay()]
let myClock = document.querySelector('#myClock')
myClock.innerHTML = `${hours}:${minutes}:${secons} ${day}`

setTimeout(showTime,1000) 
}

showTime()