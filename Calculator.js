
const btn = document.querySelectorAll(".btn");

const inputText = document.getElementsByTagName("input");

const subContainer = document.querySelector(".sub-container");
const calculatorText = document.querySelector("#calculator-text");

for(item of btn){
    item.addEventListener("click" , (e)=>{
        if(e.currentTarget.textContent==="Delete"){
            const tempStr = inputText[0].value;
            inputText[0].value = tempStr.slice(0 , tempStr.length-1);
        }else if(e.currentTarget.textContent==="Clear"){
            inputText[0].value = "";
        }else if(e.currentTarget.textContent==="Dark"){
            subContainer.style.backgroundColor = "slategray";
            e.currentTarget.textContent = "Light";
            calculatorText.style.color = "white";
        }else if(e.currentTarget.textContent==="Light"){
            subContainer.style.backgroundColor = "white";
            e.currentTarget.textContent = "Dark";
            calculatorText.style.color = "black";
        }else if(e.currentTarget.textContent==="+/-"){
           
        }else if(e.currentTarget.textContent==="="){
            const expression = inputText[0].value;
            try{
                const result = eval(expression);
                inputText[0].value += " = "+result;
            }catch(error){
                // console.log(error)
            }
        }else{
            inputText[0].value += e.currentTarget.textContent;
        }
        
    })
}