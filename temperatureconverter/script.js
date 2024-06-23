function temperatureConverter() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const ouputUnit = document.getElementById("outputUnit").value;


    if (isNaN(inputTemperature)) {
        alert("Please Enter a valid temperature");
        return;
    }

    //Converting input Temperature to Celsius

    let resultTemperature;

    if (inputUnit === "Celsius") {
        resultTemperature = inputTemperature;
    }
    else if (inputUnit === "Farenheiht") {
        resultTemperature = (inputTemperature - 32) * 5 / 9;
    }
    else if (inputUnit === "Kelvin") {
        resultTemperature = inputTemperature - 273.15;
    }


    //Converting input unit from Celsius to ouputUnit

    if (ouputUnit === "Celsius") {
        //Already a result
    }
    else if (ouputUnit === "Farenheiht") {
        resultTemperature = resultTemperature * 9 / 5 + 32;
    }
    else if (ouputUnit === "kelvin") {
        resultTemperature = resultTemperature + 273.15;
    }

    document.getElementById("result").textContent = `Converted Temperature from ${inputTemperature} ${inputUnit} to ${ouputUnit} is : ${resultTemperature} ${ouputUnit}`;
}
