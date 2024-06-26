let shumaKrediBiznesi = 2000000;


function krediBiznesi() {
    
    
    let withdrawAmount = document.getElementById('withdraw-input').value;
    let withdraw = withdrawAmount;

    if(withdraw > shumaKrediBiznesi) {
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: red">Aplikimi qe ju keni bere e kalon maksimumin e lejuar. Vlera maksimale per kete kredi eshte ${shumaKrediBiznesi}$.</p>`;
    } else if (withdraw < 100000 ){
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: red">Ju duhet te aplikoni midis vlerave 100000$ dhe ${shumaKrediBiznesi}$</p>`;
    }else {
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: #4CAF50">Aplikimi per kredi qe ju keni kryer po procesohet. Ju lutem prisni!  😊</p>`;
    }
    
}


     let shumaKrediPersonale = 200000;
    function krediPersonale() {
    
    
    let withdrawAmount = document.getElementById('withdraw-input').value;
    let withdraw = withdrawAmount;

    if(withdraw > shumaKrediPersonale) {
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: red">Aplikimi qe ju keni bere e kalon maksimumin e lejuar. Vlera maksimale per kete kredi eshte ${shumaKrediPersonale}$.</p>`;
    } else if (withdraw < 20000 ){
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: red">Ju duhet te aplikoni midis vlerave 100000$ dhe ${shumaKrediPersonale}$.<p>`;
    }else {
        document.getElementById("js-withdraw-message").innerHTML = `<p style = "color: #4CAF50">Aplikimi per kredi qe ju keni kryer po procesohet. Ju lutem prisni!  😊</p>`;
    }
    
}
