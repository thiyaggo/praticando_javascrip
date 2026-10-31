const c1=document.getElementById("c1")
const c2=document.getElementById("c2")
const c3=document.getElementById("c3")
const c4=document.getElementById("c4")
const c5=document.getElementById("c5")

const arrayElement=[c1, c2, c3, c4, c5]
// for(d of arrayElement)
    // d.innerHTML="cfgcursos"
arrayElement.map((e,i,a)=>{
    console.log(e.innerHTML)
})
