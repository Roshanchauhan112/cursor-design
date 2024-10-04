var main2 = document.querySelector("#main")

var crse = document.querySelector(".cursor")

main2.addEventListener("mousemove",function(dets){
    crse.style.left = dets.x+"px"
    crse.style.top = dets.y+"px"
})
// crse.style.backgroundColor = "red"
