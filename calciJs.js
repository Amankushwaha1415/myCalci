let screenData="";
let btns=document.querySelectorAll
("button");
let inputdata=document.querySelector("input");
console.log(inputdata);
console.log(screenData);
console.log(btns);

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.innerText==="="){
            let idx=screenData.indexOf("%*");
            console.log(idx);
            if(idx>0&&idx<screenData.length-1){
                let num1=Number(screenData.slice(0,idx));
                console.log(num1);
                let num2=Number(screenData.slice(idx+2,screenData.length));
                console.log(num2);
                let output=(num1/100)*num2;
                console.log(output);
                inputdata.value=output;
            }
            else if(screenData.includes("/*")||screenData.includes("/+")||screenData.includes("/-")||screenData.includes("/%")||screenData.includes("*/")||screenData.includes("*+")||screenData.includes("*-")||screenData.includes("*%")||screenData.includes("+/")||screenData.includes("+-")||screenData.includes("+*")||screenData.includes("+%")||screenData.includes("-*")||screenData.includes("-/")||screenData.includes("-+")||screenData.includes("-%")||screenData.includes("%/")||screenData.includes("%+")||screenData.includes("%-")||screenData.includes("%%")||screenData.includes("//")||screenData.includes("**")||screenData.includes("++")||screenData.includes("--")){
                screenData="";
                inputdata.value="Error"
            }
            else{
                screenData=eval(screenData);
                inputdata.value=screenData;
            }
        }
        else if(btn.innerText==="C"){
            screenData="";
            inputdata.value=screenData;
        }
        else if(btn.innerText==="<--"){
            screenData=screenData.slice(0,-1);
            inputdata.value=screenData;
        }
        else{
            screenData=screenData+btn.innerText;
            inputdata.value=screenData;
        }
    });
});
