let h=document.querySelectorAll('.h')
let m=document.querySelectorAll('.m')
let s=document.querySelectorAll('.s')
let am=document.querySelectorAll('.am span')

let days=document.querySelectorAll('.days span')
let month=document.querySelectorAll('.month span')
let date=document.querySelectorAll('.date')
function runclock()
{
    var time=new Date();
    days[time.getDay()].classList.add('active')
    month[time.getMonth()].classList.add('active')
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    if(hrs>=12){
        hrs=hrs-12;
        am[1].classList.add('active')
    }
    else
    {
        if(hrs==0){
            hrs=12;
        }
        am[0].classList.add('active')
    }  
}
runclock()