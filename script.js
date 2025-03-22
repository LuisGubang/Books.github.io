let books = {
    "1984": "Available",
    "To Kill a Mockingbird": "Available",
    "The Great Gatsby": "Available",
    "Things Fall Apart": "Available"
};

function borrowBook(title) {
    let listItems = document.querySelectorAll("#book-list li");
    listItems.forEach(item => {
        if (item.innerText.includes(title)) {
            let statusSpan = item.querySelector(".status");
            if (books[title] === "Available") {
                books[title] = "Borrowed";
                statusSpan.innerText = "(Borrowed)";
                alert(`You have borrowed "${title}".`);
            } else {
                alert("This book is already borrowed.");
            }
        }
    });
}

function returnBook(title) {
    let listItems = document.querySelectorAll("#book-list li");
    listItems.forEach(item => {
        if (item.innerText.includes(title)) {
            let statusSpan = item.querySelector(".status");
            if (books[title] === "Borrowed") {
                books[title] = "Available";
                statusSpan.innerText = "(Available)";
                alert(`"${title}" has been returned.`);
            } else {
                alert("This book was not borrowed.");
            }
        }
    });
}
