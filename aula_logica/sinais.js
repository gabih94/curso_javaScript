/*
Operadores de comparação

> maior que
< menor que
>= maior ou igual
<= menor ou igual
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== difernete estrito (valor e tipo)


Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

// condição com AND
function falarOi() {
    return "oi";
}

const variExecutar = false;

console.log(variExecutar && falarOi());

// consição com OR

const corUsuario = null;
const corPadrao = corUsuario || 'preto'

console.log(corPadrao);
