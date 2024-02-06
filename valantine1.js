// Define function to ask again
function askAgain() {
    // Check the current dialogue displayed
    var currentDialogue = document.querySelector('h2').textContent;

    // Set new dialogue based on the current one
    var newDialogue;
    if (currentDialogue === "Aw, please be my valentine?") {
        newDialogue = "Are you sure? Think about it!";
    } else if (currentDialogue === "Are you sure? Think about it!") {
        newDialogue = "Okay, maybe next time?";
    } else if (currentDialogue === "Okay, maybe next time?") {
        newDialogue = "I'll keep asking until you say yes!";
    }else if (currentDialogue === "I'll keep asking until you say yes!") {
        newDialogue = "So click yess";
    }else if (currentDialogue === "So click yess") {
        newDialogue = "Accept my proposal";
    }else if (currentDialogue === "Accept my proposal") {
        newDialogue = "I really love youu... say yess";
    }else if (currentDialogue === "I really love youu... say yess") {
        newDialogue = "Say YES if you are good girl";
    } else if (currentDialogue === "Say YES if you are good girl") {
        newDialogue = "Say YES if you are beautiful";
    } else if (currentDialogue === "Say YES if you are beautiful") {
        newDialogue = "So will you be my valantine?";
    } else {
        // If none of the above conditions match, default to the first dialogue
        newDialogue = "Aw, please be my valentine?";
    }

    // Construct new HTML with the updated dialogue
    var newHTML = `
        <h2>${newDialogue}</h2>
        <button id="yesButton">Yes</button>
        <button id="noButton">No</button>
    `;

    // Set inner HTML of body
    document.body.innerHTML = newHTML;

    // Reattach event listeners for the new buttons
    document.getElementById("yesButton").addEventListener("click", function() {
        document.body.innerHTML = "<h2>Yay! I love youuuuuuuu......</h2>";
    });

    document.getElementById("noButton").addEventListener("click", function() {
        askAgain();
    });
}

// Set up initial event listeners
document.getElementById("yesButton").addEventListener("click", function() {
    document.body.innerHTML = "<h2>Yay! Happy Valentine's Day!</h2>";
});

document.getElementById("noButton").addEventListener("click", function() {
    askAgain();
});
