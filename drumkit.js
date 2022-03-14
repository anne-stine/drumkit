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

// Define the body as the html body 
const body = document.querySelector("body")

// Text element that shows name of sound effect
const textEl = document.querySelector("#text-el")

// Array to store all valid keydowns to give flexibility of potentially changing keys
let validKeys = ["1", "2", "3", "4", "5", "6", "7", "8"]

// Background colors
let colorArray = ["AliceBlue", "Coral", "Crimson", "Yellow", "Lavender", "Chartreuse", "Fuchsia", "PaleGreen"]

// Listen for keydown events
body.addEventListener("keydown", (e) =>
{
    switch (e.key)
    {
        // Play drum sounds when user presses any valid key from the validKeys array
        case validKeys[0]: // Clap
            drum.clap.currentTime = 0
            drum.clap.play()
            textEl.textContent = "Clap"
            body.style.background = colorArray[0]
            break

        case validKeys[1]: // Hihat
            drum.hihat.play()
            textEl.textContent = "Hi-hat"
            body.style.background = colorArray[1]
            break

        case validKeys[2]: // Kick
            drum.kick.currentTime = 0
            drum.kick.play()
            textEl.textContent = "Kick"
            body.style.background = colorArray[2]
            break

        case validKeys[3]: // Openhat
            drum.openhat.currentTime = 0
            drum.openhat.play()
            textEl.textContent = "Open hat"
            body.style.background = colorArray[3]
            break

        case validKeys[4]: // Ride
            drum.ride.currentTime = 0
            drum.ride.play()
            textEl.textContent = "Ride"
            body.style.background = colorArray[4]
            break

        case validKeys[5]: // Snare
            drum.snare.currentTime = 0
            drum.snare.play()
            textEl.textContent = "Snare"
            body.style.background = colorArray[5]
            break

        case validKeys[6]: // Tink
            drum.tink.currentTime = 0
            drum.tink.play()
            textEl.textContent = "Tink"
            body.style.background = colorArray[6]
            break

        case validKeys[7]: // Tom
            drum.tom.currentTime = 0
            drum.tom.play()
            textEl.textContent = "Tom"
            body.style.background = colorArray[7]
            break

        default: // Return a message if user presses invalid keys
            console.log("Press any of the following keys: " + validKeys)
            textEl.textContent = ""
            body.style.background = body.style.background
    }
})

// Small message box with instructions
const messageEl = document.querySelector("#message-el")
messageEl.textContent = ["Press any of the following keys: " + validKeys.join(", ") + " 🥁"]