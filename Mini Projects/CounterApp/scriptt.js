const counterValue=document.querySelector("#counter");

let incriment=()=>{
    //get the value from UI
    let value=parseInt(counterValue.innerText);
    //Update the value
    value= value+1;
    //set the value onto UI
    counterValue.innerText=value;
}

let decrement=()=>{
    let value=parseInt(counterValue.innerText);
    value= value-1;
    counterValue.innerText=value;
}