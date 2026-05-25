const botonesPerfil =
document.querySelectorAll(
".btnPerfil"
);

const detallePerfil =
document.getElementById(
"detallePerfil"
);

botonesPerfil.forEach(

function(boton){

boton.addEventListener(

"click",

function(){

const perfil=

boton.getAttribute(
"data-perfil"
);

detallePerfil.innerHTML=

`

<h3>

Información del perfil

</h3>

<p>

<strong>

Perfil seleccionado:

</strong>

${perfil}

</p>

<p>

Este perfil es ficticio
y pertenece a una práctica
académica.

</p>

<p>

No corresponde a una
elección real.

</p>

`;

}

);

}

);