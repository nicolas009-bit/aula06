const NOME_COMPLETO = "Nicolas Pataro De Sousa"
let variaveis_temporarias = 1
var variaveis_globais = 2

console.log(variaveis_temporarias);
console.log(variaveis_globais);

variaveis_temporarias = 3
var variaveis_globais = 4


console.log(NOME_COMPLETO);
console.log(variaveis_temporarias);
console.log(variaveis_globais);



// operadores logicos

//and = &&


// com o "and"
var num1 = -101
if(num1 <=100 && num1 >=0){
    console.log("seu numero é valido, estando entre 1 a 100, sendo " + num1 )

    }
    else{
        console.log("seu numero esta invalido, nao estando entre 1 a 100, sendo " + num1)
    }
// Escreva um programa que leia o salário de um funcionário e aplique um aumento de acordo com a seguinte
//  regra: salários menores que R$1000 recebem 20% de aumento, entre R$1000 e R$2000 recebem 15%, e acima de
//  R$2000 recebem 10%.

var salario = 1000
var salarioAumentado = 0

if (salario > 1000 && salario <= 2000){
    salarioAumentado = (salario * 0.15) + salario
    if(salario>2000){
        salarioAumentado = (salario * 0.10) + salario

    }
}
else {
    salarioAumentado = (salario * 0.20) + salario

}
console.log(salarioAumentado)


// sem o "and"
var num1 = -101
if(num1 <=100){
    if(num1 >= 0){
        console.log("seu numero é valido, estando entre 1 a 100, sendo " + num1 )

    }
    else{
        console.log("seu numero esta invalido, nao estando entre 1 a 100, sendo " + num1)
    }
}
else{
        console.log("seu numero esta invalido, nao estando entre 1 a 100, sendo " + num1)
    }



//or = ||

//sem o "or"
var letraUsuario = "A"
if(letraUsuario == "A"){
    console.log("1 sua letra é uma vogal");
}
else{
    if(letraUsuario == "E"){
        console.log("1 sua letra é uma vogal");
        }
    else{
        if(letraUsuario == "I"){
            console.log("1 sua letra é uma vogal");
        }
        else{
            if(letraUsuario == "O"){
                console.log("1 sua letra é uma vogal");
            }
            else{
                if(letraUsuario == "U"){
                    console.log("1 sua letra é uma vogal");
                }
                else{
                    console.log("1 sua letra consoante");
                    
                }
            }
        }
    }1 
}


// com o "or"

if(letraUsuario=="A"||letraUsuario == "E"||letraUsuario == "I"||letraUsuario == "O"||letraUsuario == "U"){
    console.log("2 sua letra é uma vogal");
}
else{
    console.log("2 sua letra e uma consoante ");
    
}
