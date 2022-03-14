// Create the drumkit sound collection
class Drumkit
{
    constructor()
    {
        this.clap = new Audio("audio/clap.wav")
        this.hihat = new Audio("audio/hihat.wav")
        this.kick = new Audio("audio/kick.wav")
        this.openhat = new Audio("audio/openhat.wav")
        this.ride = new Audio("audio/ride.wav")
        this.snare = new Audio("audio/snare.wav")
        this.tink = new Audio("audio/tink.wav")
        this.tom = new Audio("audio/tom.wav")
    }
}
// Simplify name with a const so that it can more easily be reffered to later
const drum = new Drumkit()

// Array to store all valid keydowns to give flexibility of potentially changing keys
let validKeys = ["1", "2", "3", "4", "5", "6", "7", "8"]

// Define the body as the html body 
const body = document.querySelector("body")

// Text element that shows name of sound effect
const textEl = document.querySelector("#text-el")

// Listen for keydown events
body.addEventListener("keydown", (e) =>
{
    switch (e.key)
    {
        // Play drum sounds when user presses any valid key from the validKeys array
        case validKeys[0]: // Clap
            drum.clap.play()
            textEl.textContent = "Clap"
            break

        case validKeys[1]: // Hihat
            drum.hihat.play()
            textEl.textContent = "Hi-hat"
            break

        case validKeys[2]: // Kick
            drum.kick.play()
            textEl.textContent = "Kick"
            break

        case validKeys[3]: // Openhat
            drum.openhat.play()
            textEl.textContent = "Open hat"
            break

        case validKeys[4]: // Ride
            drum.ride.play()
            textEl.textContent = "Ride"
            break

        case validKeys[5]: // Snare
            drum.snare.play()
            textEl.textContent = "Snare"
            break

        case validKeys[6]: // Tink
            drum.tink.play()
            textEl.textContent = "Tink"
            break

        case validKeys[7]: // Tom
            drum.tom.play()
            textEl.textContent = "Tom"
            break

        default: // Return a message if user presses invalid keys
            console.log("Press any of the following keys: " + validKeys)
            textEl.textContent = ""
    }

    // Generate random background color when pressing any key from the validKeys array
    // 5 // Adding a validKeys array also solved this problem
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    e.key <= validKeys.length
    ? body.style.background = randomColor
    : body.style.background = body.style.background

    // 4 // Not working
    // const randomColor = Math.floor(Math.random()*16777215).toString(16)
    // Audio.play == true
    // ? body.style.background = "#" + randomColor
    // : body.style.background = "none"

    // 3 // Changes color on all keydowns
    // if (Audio.play = true)
    // {
    //     const randomColor = Math.floor(Math.random()*16777215).toString(16)
    //     body.style.background = "#" + randomColor
    // }

    // 2 // Not working
    // Audio.onplay = () =>
    // {
    //     const randomColor = Math.floor(Math.random()*16777215).toString(16)
    //     body.style.background = "#" + randomColor
    //     console.log("working")
    // }

    // 1 // Works, but not a very dynamic method
    // const randomColor = Math.floor(Math.random()*16777215).toString(16)
    // e.key === "1" || 
    // e.key === "2" || 
    // e.key === "3" ||
    // e.key === "4" || 
    // e.key === "5" || 
    // e.key === "6" ||
    // e.key === "7" || 
    // e.key === "8"
    // ? body.style.background = "#" + randomColor
    // : body.style.background = "none"
})

// Small message box with instructions
const messageEl = document.querySelector("#message-el")
messageEl.textContent = ["Press any of the following keys: " + validKeys.join(", ") + " 🥁"]