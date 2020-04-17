const textBoxDiv = document.getElementById("text-box")
const typingArea = document.getElementById("typing-area")
const feedbackDiv = document.getElementById("feedback")


const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra semper nibh non ornare. Quisque nec sodales libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean semper justo neque, eget pretium erat gravida pulvinar. Nam suscipit volutpat sapien, non pellentesque arcu porttitor et. Cras nec urna nec purus sollicitudin ultricies at non metus. Sed ornare cursus tempus. Mauris eros lacus, sollicitudin et lobortis sed, finibus id odio. Quisque vitae ex quis diam lacinia pharetra. Donec quis leo congue, luctus magna rutrum, iaculis diam. Proin sagittis luctus erat, sed porta mauris viverra nec. Sed efficitur nec magna eget vestibulum. Vivamus vehicula ligula nibh, gravida euismod odio aliquet eget. Fusce at nulla libero. Integer quis sodales sapien."
textBoxDiv.innerText = text
let wordCount= 0
highlight()

let errorCount = 0
feedbackDiv.innerText= errorCount


typingArea.focus()
typingArea.addEventListener("keydown",event => {
    console.log(event.keyCode)
    if (event.keyCode == 32) {
        if (text.split(' ')[wordCount] !=typingArea.value.split(' ')[wordCount]){
            errorCount++
            feedbackDiv.innerText = errorCount


        }

        wordCount++
        highlight()


    }
})

function highlight() {
    let wordsArray =text.split(" ")
    wordsArray[wordCount] = '<span class="highlight">'+wordsArray[wordCount] + '</span>'
    textBoxDiv.innerHTML = wordsArray.join(' ')
    }
