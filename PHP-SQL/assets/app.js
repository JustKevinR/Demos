const bookIdInput = document.getElementById('book-id')

bookIdInput.addEventListener('change', e => {
    fetchBookData(e.currentTarget.valu)
})

function fetchBookData(bookid) {
    fetch('http://localhost:8080/book.php?id=3')
        .then(res => {
            return res.json()
        })
        .then(book => {
            console.log(book)
        })
}
