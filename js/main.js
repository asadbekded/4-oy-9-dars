const elImg = document.querySelector('.img-box')
const elTotal = document.querySelector('.js-num')


elImg.addEventListener('click', function() {
   elImg.style.opacity = "1";

   let interVal = setInterval(() => {
      elTotal.textContent--
   }, 1000)
   setInterval(() => {
      clearInterval(interVal)
      elTotal.textContent = 'X';
   }, 10000)


   if(elTotal.textContent == 'X'){
      elImg.style.opacity = "0";
      elImg.style.display = 'none';
   }
})








//--------------------1-masala sinif ishi------------------------

// let array = [3, 5, 9, 12, 15];

// let result = array.reduce((debt, el) => {
//    if(el % 3 == 0 && el % 5 == 0){
//       debt.push('FizzBuzz')
//    }
//    else if(el % 3 == 0 ){
//       debt.push('Fizz')
//    }
//    else if(el % 5 == 0 ){
//       debt.push('Buzz')
//    }
//    return debt
// }, [])
// console.log(result);


//--------------------2-masala sinif ishi------------------------

// let count = 1

// let interVal = setInterval(() => {
//    console.log(count++);
// }, 2000)

// setInterval(() => {
//    clearInterval(interVal)
// }, 10000)

//--------------------3-masala sinif ishi------------------------

// let elForm = document.querySelector('.js-form')
// let elInp = document.querySelector('.js-inp')
// let elText = document.querySelector('.js-text')

// elForm.addEventListener('submit', function(evt) {
//    evt.preventDefault('')
//    let elInpVal = elInp.value
//    elText.textContent = elInpVal

//    let interVal = setInterval(() => {
//       elText.textContent--
//    }, 1000)

//    let stop = 1000 * elInpVal

//    setInterval(() => {
//    clearInterval(interVal)
//    }, stop)
// })