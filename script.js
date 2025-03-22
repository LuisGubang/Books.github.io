function addBook() {
    let bookInput = document.getElementById("newBook").value;
    if (bookInput.trim() !== "") {
        let bookList = document.getElementById("bookList");
        let li = document.createElement("li");
        li.textContent = bookInput;
        bookList.appendChild(li);
        document.getElementById("newBook").value = ""; // Clear input field
    } else {
        alert("Please enter a book title and author.");
    }
}
