var lone=document.querySelector('.lone');
lone.addEventListener('click',function(){
     window.location.assign("http://127.0.0.1:5500/find-house/guo/beijing.html")
})

var lsecond=document.querySelector('.lsecond')
lsecond.ontouchstart=function(){
    window.location.assign("http://127.0.0.1:5500/find-house/guo/detail.html")
}
var lthird=document.querySelector('.lthird')
lthird.ontouchstart=function(){
    window.location.assign("http://127.0.0.1:5500/find-house/guo/housemessage.htm")
}
var lfourth=document.querySelector('.lfourth')
lfourth.ontouchstart=function(){
    window.location.assign("http://127.0.0.1:5500/find-house/guo/like.html")
}




