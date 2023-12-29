let check = document.querySelector("#concordar");
check.addEventListener("click",function(){
    let mod = document.querySelector("#txtMod");
    let dt = document.querySelector("#dtDate");
    let tm = document.querySelector("#tmTime");
    let bt = document.querySelector("#agendar");
    if(check.checked){
        mod.removeAttribute("disabled");
        dt.removeAttribute("disabled");
        tm.removeAttribute("disabled");
        bt.setAttribute("class","visivel");

        if(bt.check){
            alert("Aula agendada com sucesso")
        }
        
    }
    else{
        mod.setAttribute("disabled","true");
        mod.value="";
        dt.setAttribute("disabled","true");
        dt.value="";
        tm.setAttribute("disabled","true");
        tm.value="";
        bt.setAttribute("class","oculto");
    }
})

let agendar = document.querySelector("#agendar");
agendar.addEventListener("click",function(event){
    alert('Aula agendada com sucesso')
},true);



