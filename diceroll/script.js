function diceroll(player){
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const result = document.getElementById("result");

    const player1 = document.getElementById("player1-name").value || "Player1";   //Je koi name ni metion kr rhe tn playuer 1 show hoyu

    const player2 = document.getElementById("player2-name").value || "Player 2";

    //Generates number between 1 to 6
    const randomdice1 = Math.floor(Math.random()*6)+1;
    const randomdice2 = Math.floor(Math.random()*6)+1;

    dice1.src = `images/dice-${randomdice1}.png`;
    dice2.src = `images/dice-${randomdice2}.png`;

    const total = randomdice1 + randomdice2;

    //Display the results
    if(player===1){
        player1total = total;
        result.textContent = `${player1} rolled ${randomdice1} and ${randomdice2} . Total : ${total}`;
    }
    else{
        player2total = total;
        result.textContent = `${player2} rolled ${randomdice1} and ${randomdice2} . Total : ${total}`
    }
    if(player1total>player2total){
        winner.textContent = `${player1} wins! against ${player2} with a total of ${total}`
    }
    else{
        winner.textContent = `${player2} wins! against ${player1} with a total of ${total}`
    }

    

}