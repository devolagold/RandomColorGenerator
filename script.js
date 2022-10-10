const generateBtn = document.getElementById("generate-btn")
const copyBtn = document.getElementById("copy-icon")
const hexCode = document.getElementById("hex-code")
let generatedHex = ""
copyBtn.style.display = "none"

generateBtn.addEventListener('click', () => {
    copyBtn.style.display = "block"
    let randomcode = ""
    let characters = "ABCDEF123456789"
    for (let i = 0; i < 6; i++) {
        randomcode += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    generatedHex =  `#${randomcode}`
    hexCode.textContent = generatedHex
    document.body.style.background = generatedHex
})

copyBtn.addEventListener('click', () => {
    const copy = hexCode.textContent
    if (copy) {
        navigator.clipboard.writeText(copy)
        alert("Hex Code succesfully copied!")
    }else{
        alert("Click the Button to Generate a code!")
    }
})