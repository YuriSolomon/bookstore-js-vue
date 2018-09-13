getBooks();

function getBooks() {
    var app = new Vue({
        el: '#newBook',
        data: {
            books: []
        },
        beforeCreate() {
            fetch("https://api.myjson.com/bins/8zpvs", {})
                .then(response => response.json())
                .then(realData => {

                    var data = realData;
                    this.books = data.books;
                })
        }
    })
}

function search() {

    let searchValue = document.getElementById("myInput");
    let allBooks = Array.from(document.getElementsByClassName("flip-container"));

    allBooks.forEach(item => {
        var match = item.innerHTML.toUpperCase().includes(searchValue.value.toUpperCase());

        if (match) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
        
    })
    console.log(searchValue.value);
}