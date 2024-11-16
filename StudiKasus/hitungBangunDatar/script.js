const shapeSelector = document.getElementById("shapeSelector");
const inputFields = document.getElementById("inputFields");

shapeSelector.addEventListener("change", () => {
    const shape = shapeSelector.value;
    inputFields.innerHTML = "";

    if(shape === "square"){
        inputFields.innerHTML = `<p>Masukkan Panjang sisi : </p>
                                <input type="number" id="side" placeholder="Sisi">`;
    }else if(shape === "rectangle"){
        inputFields.innerHTML = `<p>Masukkan Panjang : </p>
                                <input type="number" id="length" placeholder="Panjang">
                                <p>Masukkan Lebar : </p>
                                <input type="number" id="width" placeholder="Lebar">`;
    }else if(shape === "triangle"){
        inputFields.innerHTML = `<p>Masukkan Alas : </p>
                                <input type="number" id="base" placeholder="Alas">
                                <p>Masukkan Tinggi : </p>
                                <input type="number" id="height" placeholder="Tinggi"></input>
                                `;
    }else if(shape === "circle"){
        inputFields.innerHTML = `<p>Masukkan jari-jari : </p>
                                <input type="number" id="radius" placeholder="Jari-jari">`;
    }
})

function calculatorArea() {
    const shape = shapeSelector.value;
    let area = 0;

    if(shape === "square"){
        const side = parseInt(document.getElementById("side").value);
        if(isNaN(side) || side <= 0){
            document.getElementById("result").innerText = "Masukkan sisi yang valid!!";
            return;
        }
        area = side * side;
        document.getElementById("result").innerText = `Luas persegi adalah ${area}.`;
    }else if(shape === "rectangle"){
        const length = parseInt(document.getElementById("length").vale);
        const width = parseInt(document.getElementById("width").vale);

        if(isNaN(length) || length <= 0 || isNaN(width) || width <= 0){
            document.getElementById("result").innerText = "Masukkan panjang dan lebar yang valid!!";
            return;
        }
        area = length * width;
        document.getElementById("result").innerText = `Luas persegi panjang adalah ${area}`;
    }else if(shape === "triangle"){
        const base = parseInt(dosument.getElementById("base").value);
        const height = parseInt(dosument.getElementById("height").value);
        if(isNaN(base) || base <= 0 || isNaN(height) || height <= 0){
            document.getElementById("result").innerText = "Masukkan alas dan tinggi yang valid!!";
            return;
        }

        area = 0.5 * base * height;
        document.getElementById("result").innerText = `Luas seigitiga adalah ${area}.`;
    }else if(shape === "circle"){
        const radius = parseInt(document.getElementById("radius").value);
        if(isNaN(radius) || radius <= 0){
            document.getElementById("result").innerText = "Masukkan jari-jari yang valid.";
            return;
        }
        area = Math.PI * radius * radius;
        document.getElementById("result").innerText = `Luas lingkaran adalah ${area}.`;
    }
}