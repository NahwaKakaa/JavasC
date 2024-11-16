function calculatorArea(){
    const side = parseInt(document.getElementById('sideInput').value);

    if(isNaN(side) || side <= 0) {
        document.getElementById('result').innerText = "Masukkan panjang sisi yang valid!!";
    }

    const area = side * side;

    document.getElementById('result').innerText = `Luas persegi dengan sisi ${side} adalah ${area}`;
}