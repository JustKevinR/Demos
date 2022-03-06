fetch('https://official-joke-api.appspot.com/random_ten')
.then(response => {
    return response.json()
}).then(data => {
    console.log(data)
    const list = document.getElementById('joke')
    data.forEach(el => {
        console.log(el)
        let jokeDiv = document.createElement('div')
        jokeDiv.innerHTML = '<div class = "setup">' + el.setup + '<div class="punchline">' + el.punchline + '</div>'
        list.append(jokeDiv)
    });
})