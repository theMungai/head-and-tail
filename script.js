const headButton = document.querySelector("#head");
const tailButton = document.querySelector("#tail");
let choice = ["head", "tail"]

let score = {
    wins : 0,
    losses : 0
}

let results 

// Updating Scores 
if(results === "You win"){
    score.wins = score.wins + 1
}
else if(results === "You Lose"){
    score.losses = score.losses + 1
}

headButton.addEventListener('click', () => {
    const computerChoice = Math.floor(Math.random() * choice.length);
    let finalChoice = choice[computerChoice];

    if(finalChoice === "tail"){
        results = "You win"
        console.log(results)
    }
    else if(finalChoice  === "head"){
        results = "You Lose"
        console.log(results)
    }

        // Updating Scores 
    if(results === "You win"){
        score.wins = score.wins + 1
    }
    else if(results === "You Lose"){
        score.losses = score.losses + 1
    }
    console.log(score)
})

tailButton.addEventListener('click', () => {
    const computerChoice = Math.floor(Math.random() * choice.length);
    let finalChoice = choice[computerChoice];

    if(finalChoice === "tail"){
        results = "You Lose"
        console.log(results)
    }

    else if(finalChoice === "head"){
        results = "You win"
        console.log(results)
    }

        // Updating Scores 
    if(results === "You win"){
        score.wins = score.wins + 1
    }
    else if(results === "You Lose"){
        score.losses = score.losses + 1
    }
    console.log(score)
})

