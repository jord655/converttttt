import converToYen from "./yen.js"
import convertToCanadianDollar from "./canadian dollar.js"
import convertToEuro from "./euro.js"
import convertToPounds from "./pounds.js"
import convertToR from "./russian ruble.js"
import convertTodollar from "./dollar.js"





let select = document.getElementById("converter")
let number=document.getElementById("number")
let btn=document.getElementById("btn")
let output=document.getElementById("output")


let naira ;

btn.addEventListener("click",()=>{
    let selected=select.value
    let input=number.value
    if(selected==='do'){
        naira=convertTodollar(input)
        output.innerHTML=`$${input}=₦${naira}`
    } else if(selected==='po'){
        naira=convertToPounds(input)
        output.innerHTML=`₤${input}=₦${naira}`
    } else if(selected==='eu'){
        naira=convertToEuro(input)
        output.innerHTML=`€${input} =₦${naira}`
    } else if(selected==='cd'){
        naira=convertToCanadianDollar(input)
        output.innerHTML=`$${input}=₦${naira}`
    } else if(selected==='rr'){
        naira=convertToR(input)
        output.innerHTML=`₱${input}=₦${naira}`
    } else if(selected==='ye'){
        naira=converToYen(input)
        output.innerHTML=`¥${input}=₦${naira}`
    }
}

)