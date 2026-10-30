const idade=[1,4, 69, 50, 20, 45,18, 13, 14]

const  maior=idade.filter((val,i,arr)=>{
    if(val >= 18){
         return val
    }
   
})
const  menor=idade.filter((val,i,arr)=>{
    if(val < 18){
         return val
    }
   
})
console.log(maior)
console.log(menor)