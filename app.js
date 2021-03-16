function handleGenerate() {
  document.getElementById('generate-btn').addEventListener('click', function () {
    let randomNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    document.getElementById('display').value = randomNumber;

  })
}

//Calculator Part

//Display Calculator Number
function displayNum(num) {
  const input = document.getElementById('display-number');

  switch (num) {
    case 1:
      input.value += '1';
      break;
    case 2:
      input.value += '2';
      break;
    case 3:
      input.value += '3';
      break;
    case 4:
      input.value += '4';
      break;
    case 5:
      input.value += '5';
      break;
    case 6:
      input.value += '6';
      break;
    case 7:
      input.value += '7';
      break;
    case 8:
      input.value += '8';
      break;
    case 9:
      input.value += '9';
      break;
    case 0:
      input.value += '0';
      break;
  }
}

//submit btn
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',function(){
    pinNum = document.getElementById('display').value;
    calculatorDisplayNum = document.getElementById('display-number').value;

    if(pinNum == calculatorDisplayNum){
       document.getElementById('pin-matched').style.display = 'block';

       document.getElementById('display-number').value = '';
       document.getElementById('pin-mismatched').style.display = '';

    }else{
        document.getElementById('pin-mismatched').style.display = 'block';
        const actionLeft = document.getElementById('action-left').innerText;
        
        if(actionLeft > 0){
           var remainingAction = actionLeft - 1;
           document.getElementById('action-left').innerText = remainingAction;
            if(remainingAction == 0){
                document.getElementById('submit-btn').disabled = true;
            }
        }

        document.getElementById('display-number').value = '';
        document.getElementById('pin-matched').style.display = '';
    }
})