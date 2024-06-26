let shumaKrediBiznesi = 2000000;


function krediBiznesi() {
    
    
    let withdrawAmount = document.getElementById('withdraw-input').value;
    let withdraw = withdrawAmount;

    if(withdraw > shumaKrediBiznesi) {
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: red"> Your apply exeeds the maxim amount of loan for a Business. The maximum loan amount is ${shumaKrediBiznesi}$.</p>`;
    } else if (withdraw < 100000 ){
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: red">You must apply between values 100000 and ${shumaKrediBiznesi}$</p>`;
    }else {
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: #4CAF50">The loan you applied for is processing. Please wait!  😊</p>`;
    }
    
}


     let shumaKrediPersonale = 200000;
    function krediPersonale() {
    
    
    let withdrawAmount = document.getElementById('withdraw-input').value;
    let withdraw = withdrawAmount;

    if(withdraw > shumaKrediPersonale) {
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: red">Your apply exeeds the maxim amount of Personal Loan. The maximum loan amount is ${shumaKrediPersonale}$.</p>`;
    } else if (withdraw < 20000 ){
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: red">You must apply between values 20000$ and ${shumaKrediPersonale}$</p>`;
    }else {
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: #4CAF50">The loan you applied for is processing. Please wait!  😊</p>`;
    }
    
}