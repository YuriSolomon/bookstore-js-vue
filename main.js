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