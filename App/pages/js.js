function BMI_berechnen(){
    var kg = document.getElementById('input_kg').value;
    var m = document.getElementById('input_m').value;
    var bmi;
    if (kg >= 0.1){
    if (m >= 0.1) {
        bmi = kg / (m * m)
        bmi = bmi.toFixed(2);
        document.getElementById('bmi').innerHTML = bmi;
        if (bmi <= 18){
            document.getElementById('output').classList.add("Untergewicht");
            document.getElementById('output').classList.remove("Übergewicht");
            document.getElementById('output').classList.remove("Normalgewicht");
            document.getElementById('output').innerHTML = "Untergewicht";
            document.cookie = "BMI=" + bmi
            console.log("[BMI-Rechner]: " + bmi + " = Untergewicht");
        }
        else if(bmi >=25.5){{
            document.getElementById('output').classList.add("Übergewicht");
            document.getElementById('output').classList.remove("Untergewicht");
            document.getElementById('output').classList.remove("Normalgewicht");
            document.getElementById('output').innerHTML = "Übergewicht";
            document.cookie = "BMI=" + bmi
            console.log("[BMI-Rechner]: " + bmi + " = Übergewicht");
        }}
        else {
            document.getElementById('output').classList.add("Normalgewicht");
            document.getElementById('output').classList.remove("Untergewicht");
            document.getElementById('output').classList.remove("Übergewicht");
            document.getElementById('output').innerHTML = "Normalgewicht";
            document.cookie = "BMI=" + bmi
            console.log("[BMI-Rechner]: " + bmi + " = Normalgewicht");
        }
    } else {
        window.alert("Überprüfe deine Eingabe bei Größe");
        console.log("[BMI-Rechner]: " + "Falsche Eingabe bei Größe");
    }} else {
        window.alert("Überprüfe deine Eingabe bei Gewicht");
        console.log("[BMI-Rechner]: " + "Falsche Eingabe bei Gewicht");
    }
}

function onEnter(e){
      if (e.key == 'Enter')
        BMI_berechnen();
}

function loadcookies(){
    if(document.cookie != ""){
    let bmi = document.cookie.slice(4)
    document.getElementById('bmi').innerHTML = bmi;
        if (bmi <= 18){
            document.getElementById('output').classList.add("Untergewicht");
            document.getElementById('output').classList.remove("Übergewicht");
            document.getElementById('output').classList.remove("Normalgewicht");
            document.getElementById('output').innerHTML = "Untergewicht";
            console.log("[BMI-Rechner]: " + bmi + " = Untergewicht");
        }
        else if(bmi >=25.5){
            document.getElementById('output').classList.add("Übergewicht");
            document.getElementById('output').classList.remove("Untergewicht");
            document.getElementById('output').classList.remove("Normalgewicht");
            document.getElementById('output').innerHTML = "Übergewicht";
            console.log("[BMI-Rechner]: " + bmi + " = Übergewicht");
        }
        else {
            document.getElementById('output').classList.add("Normalgewicht");
            document.getElementById('output').classList.remove("Untergewicht");
            document.getElementById('output').classList.remove("Übergewicht");
            document.getElementById('output').innerHTML = "Normalgewicht";
            console.log("[BMI-Rechner]: " + bmi + " = Normalgewicht");
        }
}}