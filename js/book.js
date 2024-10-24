let allBooks=[
    {
        bookId:101,
        bookTitle:"Harry Potter and the Order of Phoenix",
        bookPrice:250,
        bookGenre:"Fantasy",
        bookPublished:"2010-10-10",
        bookDescription:"Harry Potter is a series of novels by British author J. K. Rowling. The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry.",
        bookImageUrl:"https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bookAuthor:{
            authorId:501,
            authorFirstName:"Rowling",
            authorLastName:"J.K"
        }
    },
    {
        bookId:102,
        bookTitle:"Harry Potter and the Prizoner of Azkaban",
        bookPrice:250,
        bookGenre:"Fantasy",
        bookPublished:"2008-10-10",
        bookDescription:"Harry Potter is a series of novels by British author J. K. Rowling. The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry.",
        bookImageUrl:"https://m.media-amazon.com/images/I/81NQA1BDlnL._SL1500_.jpg",
        bookAuthor:{
            authorId:501,
            authorFirstName:"Rowling",
            authorLastName:"J.K"
        }
    },
    {
        bookId:103,
        bookTitle:"Famous Five",
        bookPrice:250,
        bookGenre:"Mystery",
        bookPublished:"2018-10-10",
        bookDescription:"The Famous Five book series by Enid Blyton is about the adventures of five siblings and their dog during their summer holidays. The books are known for their thrilling stories, secrets, and sense of adventure.",
        bookImageUrl:"https://m.media-amazon.com/images/I/91DqypRy+4L._SL1500_.jpg",
        bookAuthor:{
            authorId:502,
            authorFirstName:"Enid",
            authorLastName:"Blyton"
        }
    }
];

let allAuthors=[
    {
        authorId:501,
            authorFirstName:"J.K",
            authorLastName:"Rowling"
    },
    {
        authorId:502,
            authorFirstName:"Enid",
            authorLastName:"Blyton"
    }
];

function loadAllBooks() {
    let content = `<tr>`;
    allBooks.forEach((eachBook) => {
        content += `<td>${eachBook.bookId}</td>`;
        content += `<td><img src="${eachBook.bookImageUrl}" width="80" height="150" style="object-fit: contain;"></td>`;
        content += `<td>${eachBook.bookTitle}</td>`;
        content += `<td><button type="button" class="btn btn-warning" onclick="loadABook(${eachBook.bookId})">VIEW</button></td>`;
        content += `<td><button type="button" class="btn btn-primary">EDIT</button></td>`;
        content += `<td><button type="button" class="btn btn-danger" onclick="deleteBook('${eachBook.bookId}')">REMOVE</button></td>`;
        content += `</tr>`;
    });
    document.getElementById("display").innerHTML = content;
}

function loadABook(bookId) {
    // Find the book by its ID
    let selectedBook = allBooks.find(book => book.bookId === bookId);

    if (selectedBook) {
        let content = `
            <div class="card text-center">
                <img width="200px" height="150px" src="${selectedBook.bookImageUrl}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${selectedBook.bookTitle}</h3>
                    <p class="card-text">${selectedBook.bookDescription}</p>
                    <p class="card-text"><strong>Price:</strong> Rs.${selectedBook.bookPrice}</p>
                    <p class="card-text"><strong>Published:</strong> ${selectedBook.bookPublished}</p>
                    <p class="card-text"><strong>Genre:</strong> ${selectedBook.bookGenre}</p>
                    <p class="card-text"><strong>Author:</strong> ${selectedBook.bookAuthor.authorFirstName} ${selectedBook.bookAuthor.authorLastName}</p>
                </div>
            </div>
            <button class="btn btn-warning mt-3" onclick="closeView()">CLOSE</button>
        `;
        // Inject the content into the view container
        document.getElementById("view").innerHTML = content;
        // Show the view container
        document.getElementById("view").style.display = 'block';
    }
}

let toggleForm = false; // Ensure toggleForm is initialized

function showBookForm() {
    let content = ``; // Initialize content

    let authorContent = ``;
    allAuthors.forEach((eachAuthor) => {
        authorContent += `<option value='${eachAuthor.authorId}'>${eachAuthor.authorId} - ${eachAuthor.authorLastName}, ${eachAuthor.authorFirstName}</option>`;
    });

    if (toggleForm) {
        content = `
        <div class="card">
            <div class="card-header bg-success text-light"><h3>ADD A NEW BOOK</h3></div>
            <div class="card-body">
                <div class="form-control-group">
                    <label for="bTitle">Book Title</label>
                    <input type="text" id="bTitle" class="form-control">
                </div>
                <div class="form-control-group">
                    <label for="bPrice">Book Price</label>
                    <input type="text" id="bPrice" class="form-control">
                </div>
                <div class="form-control-group">
                    <label for="bGenre">Book Genre</label>
                    <select id="bGenre" class="form-control">
                        <option>--select--</option>
                        <option value="Comedy">Comedy</option> <!-- Fixed spelling -->
                        <option value="Fantasy">Fantasy</option>
                        <option value="Mystery">Mystery</option>
                    </select>
                </div>
                <div class="form-control-group">
                    <label for="bPublished">Book Published</label>
                    <input type="date" id="bPublished" class="form-control">
                </div>
                <div class="form-control-group">
                    <label for="bDescription">Book Description</label>
                    <textarea id="bDescription" class="form-control"></textarea>
                </div>
                <div class="form-control-group">
                    <label for="bImageUrl">Book Image URL</label>
                    <input type="text" id="bImageUrl" class="form-control">
                </div>
                <div class="form-control-group">
                    <label for="bAuthor">Book Author:</label>
                    <select id="bAuthor" class="form-control">
                        <option>--select--</option>
                        ${authorContent}
                    </select>
                </div>
            </div>
            <div class="card-footer bg-success text-light">
                <button type="button" class="btn btn-light" onclick="addBook()">ADD BOOK</button>
                <button type="button" class="btn btn-light mx-5" onclick="clearForm()">CLEAR</button> <!-- Clear button -->
            </div>
        </div>
        `;
    } else {
        content = ``; // Clear content to hide the form
    }

    toggleForm = !toggleForm; // Toggle the state
    document.getElementById("add-form").innerHTML = content; // Update the inner HTML
}



function addBook() {
    // Get the values from the input fields
    const title = document.getElementById("bTitle").value;
    const price = document.getElementById("bPrice").value;
    const genre = document.getElementById("bGenre").value;
    const published = document.getElementById("bPublished").value;
    const description = document.getElementById("bDescription").value;
    const imageUrl = document.getElementById("bImageUrl").value;
    const authorId = parseInt(document.getElementById("bAuthor").value, 10); // Get selected author ID

    // Simple validation
    if (!title || !price || !genre || !published || !description || !imageUrl || isNaN(authorId)) {
        alert("All fields are required.");
        return;
    }

    // Create a new book object
    const newBook = {
        bookId: allBooks.length + 101, // Assuming IDs start from 101
        bookTitle: title,
        bookPrice: parseFloat(price),
        bookGenre: genre,
        bookPublished: published,
        bookDescription: description,
        bookImageUrl: imageUrl,
        bookAuthor: allAuthors.find(author => author.authorId === authorId) // Get author details from allAuthors
    };

    // Add the new book to the array
    allBooks.push(newBook);

    // Reload the books list to display the new book
    loadAllBooks();

    // Optionally, reset the fields after adding
    clearForm();
    alert("Book added successfully!");
}

function deleteBook(bookId){
    allBooks=allBooks.filter((eachBook)=>eachBook.bookId!=bookId);
    loadAllBooks();
}

function updateBook(){

}

function loadAllAuthors(){

}

function closeView(){
    document.getElementById("view").innerHTML="";
}

function clearForm() {
    document.getElementById("bTitle").value = '';
    document.getElementById("bPrice").value = '';
    document.getElementById("bGenre").selectedIndex = 0; // Reset to the first option
    document.getElementById("bPublished").value = '';
    document.getElementById("bDescription").value = '';
    document.getElementById("bImageUrl").value = '';
    document.getElementById("bAuthor").selectedIndex = 0; // Reset to the first option
}

let authorFormVisible = false; // Initialize a flag for the author form visibility

function toggleAuthorForm() {
    authorFormVisible = !authorFormVisible; // Toggle the visibility state

    if (authorFormVisible) {
        showAuthorForm(); // Show the form if it's not visible
    } else {
        document.getElementById("author-form").innerHTML = ''; // Hide the form
    }
}

function addAuthor() {
    // Get the values from the input fields
    const authorFirstName = document.getElementById("authorFirstName").value;
    const authorLastName = document.getElementById("authorLastName").value;

    // Simple validation
    if (authorFirstName.trim() === "" || authorLastName.trim() === "") {
        alert("Both first and last names are required.");
        return;
    }

    // Create an author object
    const newAuthor = {
        authorId: allAuthors.length + 501, // Assuming IDs start from 501
        authorFirstName: authorFirstName,
        authorLastName: authorLastName
    };

    // Add the new author to the array
    allAuthors.push(newAuthor);
    console.log("New Author Added:", newAuthor);

    // Optionally, reset the fields after adding
    clearAuthorForm();
    alert("Author added successfully!");
}

function showAuthorForm() {
    let content = `
        <div class="card">
            <div class="card-header bg-dark text-light"><h3>ADD A NEW AUTHOR</h3></div>
            <div class="card-body">
                <div class="form-control-group">
                    <label for="authorFirstName">Author First Name:</label>
                    <input type="text" id="authorFirstName" class="form-control">
                </div>
                <div class="form-control-group">
                    <label for="authorLastName">Author Last Name:</label>
                    <input type="text" id="authorLastName" class="form-control">
                </div>
            </div>
            <div class="card-footer bg-dark text-light">
                <button type="button" class="btn btn-light" onclick="addAuthor()">ADD AUTHOR</button>
                <button type="button" class="btn btn-light mx-5" onclick="clearAuthorForm()">CLEAR</button>
            </div>
        </div>
    `;

    // Show the author form
    document.getElementById("author-form").innerHTML = content; 
}

// Optional function to clear the author form
function clearAuthorForm() {
    document.getElementById("authorFirstName").value = '';
    document.getElementById("authorLastName").value = '';
}