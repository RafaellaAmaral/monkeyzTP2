const clock=1;
const macaco=$("#macaco");


$("body").on("mousemove",(e)=>{
    macaco.css("left",e.pageX);
})

function criar (params) {
    
}

function atualizar() {
}

setInterval(atualizar(), clock);
