document.addEventListener("DOMContentLoaded", () => {
    const library = document.getElementById("library");

    // Sample books
    const books = [
        {
            title: "JavaScript Basics",
            description: "An introduction to JavaScript programming.",
            isBorrowed: false
        },
        {
            title: "CSS Mastery",
            description: "Learn advanced CSS techniques.",
            isBorrowed: false
        },
        {
            title: "New Book: Web Development",
            description: "A comprehensive guide to modern web development.",
            isBorrowed: false
        }
    ];

    function displayBooks() {
        library.innerHTML = ""; // Clear previous books before re-rendering
        books.forEach((book, index) => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");

            bookElement.innerHTML = `
                <h2>${book.title}</h2>
                <p>${book.description}</p>
                <button class="borrow" onclick="borrowBook(${index})" ${book.isBorrowed ? "disabled" : ""}>
                    ${book.isBorrowed ? "Borrowed" : "Borrow"}
                </button>
                <button class="return" onclick="returnBook(${index})" ${!book.isBorrowed ? "disabled" : ""}>
                    ${!book.isBorrowed ? "Return Disabled" : "Return"}
                </button>
            `;

            library.appendChild(bookElement);
        });
    }

    window.borrowBook = function(index) {
        books[index].isBorrowed = true;
        displayBooks();
    };

    window.returnBook = function(index) {
        books[index].isBorrowed = false;
        displayBooks();
    };

    displayBooks();
});
