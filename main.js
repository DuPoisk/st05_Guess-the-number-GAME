
//VARIABLES
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


//EVENTS
  btnTry.addEventListener('click', handleTryClick) 
  btnReset.addEventListener('click', handleResetClick)


// FUNCTIONS (callback e methods)
  function handleTryClick(event) {
    event.preventDefault() 
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value == randomNumber)){ 
      toggleScreen()      
      screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas!`
      //acima adicionei texto dentro de um elemento
    }
    
    inputNumber.value = ""
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
