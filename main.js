
//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10) // cria numero randomico assim que a aplicação começar
let xAttempts = 1


// eventos
  btnTry.addEventListener('click', handleTryClick) // listener = o cara que vai reagir a esse evento
  btnReset.addEventListener('click', handleResetClick)
   // o argumento é: 1º nome do evento
   //2º é o qual o cara que vai reagir, qual a função que vai ser reagida


// funções (callback e métodos)
  function handleTryClick(event) {
    event.preventDefault() // essa linha basicamente diz "não faça o padrão desse evento". Que nesse caso é " não envie o formulário".
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value == randomNumber)){ // o .value é para pegar o valor do input
      toggleScreen()      
      screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas!`
      //acima adicionei texto dentro de um elemento
    }
    
    inputNumber.value = ""// para apagar o número que escrevi depois de enviar minha tentativa 
    xAttempts++
  }

  function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
  }


  function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
  }





  /* RASCUNHO DO COMEÇO DO CÓDIGO

  let myNumber = prompt("Adivinhe o número inteiro em que estou pensando, entre 0 e 10");
myNumber = Number(myNumber);
let attempts = 1;

let randomNumber = Math.round(Math.random() * 10);

while (myNumber != randomNumber){
  attempts = ++attempts; // o incremento deve vir antes, e não depois (attempts++)
  // alert(randomNumber) usei essa linha para testar e sabel qual número aleatório aparecia
  myNumber = prompt("Erro, tente novamente... ");
  
}

if (attempts == 1) {
  alert(`Parabéns! Você adivinhou em ${attempts} tentativa. \n O número escolhido foi: ${randomNumber}`);
} else {
  alert(`Parabéns! Você adivinhou em ${attempts} tentativas. \n O número escolhido foi: ${randomNumber}`);
}

*/