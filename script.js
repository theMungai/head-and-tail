const headButton = document.querySelector("#head");
const tailButton = document.querySelector("#tail");
let choice = ["head", "tail"]

headButton.addEventListener('click', () => {
    const computerChoice = Math.floor(Math.random() * choice.length);
    let finalChoice = choice[computerChoice];

    if(finalChoice === "tail"){
        console.log("You win")
    }
    else if(finalChoice  === "head"){
        console.log("You Lose")
    }
})

tailButton.addEventListener('click', () => {
    const computerChoice = Math.floor(Math.random() * choice.length);
    let finalChoice = choice[computerChoice];

    if(finalChoice === "tail"){
        console.log("You Lose")
    }

    else if(finalChoice === "head"){
        console.log("You win")
    }
})