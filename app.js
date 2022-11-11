//crear funcion que recibe un elemento(elm)
function moverposicionrandom(elm){
    elm.style.position="absolute";// posicion que queramos poner 
    elm.style.top=Math.random() * (window.innerHeight - elm.offsetHeight)+ 'px'
    elm.style.left=Math.random() * (window.innerWidth - elm.offsetWidth)+ 'px'
}

let btnSI=document.getElementById("btn_si");
let btnNO=document.getElementById("btn_no");
let divmodo_sexo=document.getElementsByClassName("modo_sexo")[0];

btnNO.addEventListener('mouseenter',function(e){ moverposicionrandom(e.target) })

btnSI.addEventListener('click',function(e){
    alert('sabia que DIRIAS que SI,casemonos ya y tengamos hijos. TE AMO!!!! ❤️ ')
    
    divmodo_sexo.style.display='block'
    const cancion=new Audio('images\\img_modo_hot.mp3')
    cancion.play();
})