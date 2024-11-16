function checkOddEven() {
    const number = parseInt(document.getElementById('numberInput').value);
    
    if(isNaN(number)){
        document.getElementById('result').innerText = "Masukkan Angka yang Valid!!";
        return;
    }

    if(number % 2 == 0){
        document.getElementById('result').innerText = `${number}Meupakan Bilangan Genap.`;
    }else{
        document.getElementById('result').innerText = `${number} Merupakan Bilangan Ganjil.`;
    }
}