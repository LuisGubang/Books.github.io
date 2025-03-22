let books = {
    "1984": "Available",
    "To Kill a Mockingbird": "Available",
    "The Great Gatsby": "Available",
    "Things Fall Apart": "Available"
};

function updateMessage(message, color) {
    let messageDiv = document.getElementById("message");
    messageDiv.innerText = message;
    messageDiv.style.color = color;
    messageDiv.style.display = "block"; 
    setTimeout(() => messageDiv.style.display = "none", 3000); 
}

function borrowBook(title) {
    let bookItem = document.querySelector(`li[data-title='${title}']`);
    let statusSpan = bookItem.querySelector(".status");

    if (books[title] === "Available") {
        books[title] = "Borrowed";
        statusSpan.innerText = "(Borrowed)";
        statusSpan.style.color = "red"; 
        updateMessage(`You have borrowed "${title}".`, "red");
    } else {
        updateMessage(`"${title}" is already borrowed.`, "red");
    }
}

function returnBook(title) {
    let bookItem = document.querySelector(`li[data-title='${title}']`);
    let statusSpan = bookItem.querySelector(".status");

    if (books[title] === "Borrowed") {
        books[title] = "Available";
        statusSpan.innerText = "(Available)";
        statusSpan.style.color = "green"; 
        updateMessage(`"${title}" has been returned.`, "green");
    } else {
        updateMessage(`"${title}" was not borrowed.`, "red");
    }
}
