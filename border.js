document.addEventListener("DOMContentLoaded",()=>{

const container = document.querySelector(".container")
const allborder_radius = document.getElementById("allborder_radius")
const border = document.getElementById("border")
const changeradius = document.getElementById("changeradius")
const changeborder = document.getElementById("changeborder")
const area = document.getElementById("area")
const copy = document.getElementById("copy")
const options = document.getElementById("options")

var allradius =10
var coding 
var allborder=0
var border_style = "solid"

function updateradius(){
    allradius = allborder_radius.value 
    changeradius.innerText = allradius+"px"
    allborder =border.value
    changeborder.innerText = allborder+"px"
    coding = `
    border-radius:${allradius}px;
    border:${allborder}px ${border_style} red;`
    container.style.cssText = coding
    area.value = coding

    

}



allborder_radius.addEventListener("mousemove",updateradius)
allborder_radius.addEventListener("change", updateradius)

border.addEventListener("mousemove", updateradius)
border.addEventListener("change", updateradius)


copy.addEventListener("click",()=>{
    document.querySelector("#area").select()
    document.execCommand("copy")
})

options.addEventListener("change",function(){
    border_style = this.value
    updateradius()
})

})
