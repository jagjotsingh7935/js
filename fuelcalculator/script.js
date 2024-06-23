function calculateFuelCost() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    const fuelCost = parseFloat(document.getElementById('fuelCost').value);

    if (isNaN(distance) || isNaN(fuelEfficiency) || isNaN(fuelCost)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const totalFuelNeeded = distance / fuelEfficiency;
    const totalCost = totalFuelNeeded * fuelCost;

    document.getElementById('result').textContent = `Total Fuel Cost: $${totalCost.toFixed(2)}`;
}
