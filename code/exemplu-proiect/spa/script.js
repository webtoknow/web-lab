const body = document.getElementById('body');
const main = document.getElementById('main');

// Form variables
const formTitle = document.getElementById('formTitle');
const formTag = document.getElementById('formTag');
const formAuthor = document.getElementById('formAuthor');
const formDate = document.getElementById('formDate');
const formImgUrl = document.getElementById('formImgUrl');
const formSummary = document.getElementById('formSummary');
const formContent = document.getElementById('formContent');

let saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');

const articleLink = document.getElementById('article-link');
const aboutLink = document.getElementById('about-link');

// Fetch the articles list
function getArticlesFromServer() {
    fetch('http://localhost:3000/articles')
        .then(function (response) {
            // Trasform server response to plain object
            response.json().then(function (articles) {
                renderArticlesListPage(articles);
            });
        });
};

function getArticleFromServer(id) {
    fetch(`http://localhost:3000/articles/${id}`)
        .then(function (response) {
            // Trasform server response to plain object
            response.json().then(function (articles) {
                renderArticlePage(articles);
            });
        });
};

// Add article
function addArticleToServer() {
    // creat post object
    const postObject = {
        title: formTitle.value,
        tag: formTag.value,
        author: formAuthor.value,
        date: formDate.value,
        imgUrl: formImgUrl.value,
        summary: formSummary.value,
        content: formContent.value
    }
    // Call post request to add a new article
    fetch('http://localhost:3000/articles', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
        // Get the new article list
        getArticlesFromServer();

        // Reset Form
        resetForm();

        // Close Modal
        closeModal();
    });
}

// Delete article from server
function deleteArticleFromServer(id) {
    // Call delete request to delete the article
    fetch(`http://localhost:3000/articles/${id}`, {
        method: 'DELETE',
    }).then(function () {
        // Get the new articles list
        getArticlesFromServer();
    });
}

// Update article
function updateArticleToServer(id) {
    // creat put object
    const putObject = {
        title: formTitle.value,
        tag: formTag.value,
        author: formAuthor.value,
        date: formDate.value,
        imgUrl: formImgUrl.value,
        summary: formSummary.value,
        content: formContent.value
    }
    // Call put request to update the article
    fetch(`http://localhost:3000/articles/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(putObject)
    }).then(function () {
        // Get the new article list
        getArticlesFromServer();

        // Reset Form
        resetForm();

        // Close Modal
        closeModal();
    });
}

// Copy edited article information to form and add event listener on update button
function openAddModal() {

    // clear all events save button events
    clearSaveButtonEvents();

    saveButton.addEventListener('click', function () {
        addArticleToServer()
    });

    body.className = 'show-modal';
}

// Copy edited article information to form and add event listener on update button
function openEditModal(article) {
    // Copy article information to form
    formTitle.value = article.title;
    formTag.value = article.tag;
    formAuthor.value = article.author;
    formDate.value = article.date;
    formImgUrl.value = article.imgUrl;
    formSummary.value = article.summary;
    formContent.value = article.content;

    // clear all events update button events
    clearSaveButtonEvents();

    saveButton.addEventListener('click', function () {
        updateArticleToServer(article.id)
    });

    body.className = 'show-modal';
}

// Remove articles list if exist
function removeOldArticlesFromDOM() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

// Create DOM Objects
function createArticleListDOMNodes(article) {

    // Add button
    let addButton = document.createElement('button');
    addButton.className = "button";
    // Add event on add button
    addButton.addEventListener('click', openAddModal);
    addButton.textContent = " + Add Article";

    // Add button container
    let addButtonContainer = document.createElement('div');
    addButtonContainer.className = "add__container";
    addButtonContainer.appendChild(addButton);


    // Title
    let title = document.createElement('h2');
    title.className = "title";
    title.textContent = article.title;

    // Tag
    let tag = document.createElement('li');
    tag.className = "info__item";
    tag.textContent = article.tag;

    // Author
    let author = document.createElement('span');
    author.className = "info__mark";
    author.textContent = article.author;

    let authorContainer = document.createElement('li');
    authorContainer.className = "info__item";
    authorContainer.textContent = 'Added By ';
    authorContainer.appendChild(author)

    // Date
    let date = document.createElement('li');
    date.className = "info__item";
    date.textContent = article.date;

    // Information container
    let infoContainer = document.createElement('ul');
    infoContainer.className = "info__container";
    infoContainer.appendChild(tag);
    infoContainer.appendChild(authorContainer);
    infoContainer.appendChild(date);

    // Edit button
    let editButton = document.createElement('button');
    editButton.className = "actions__btn";
    // Add event on edit button and pass article object to populate the form  more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
    editButton.addEventListener('click', function () {
        openEditModal(article);
    });
    editButton.textContent = 'Edit';

    // Delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = "actions__btn";
    // Add event on delete button and pass article id to delete it form server more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
    deleteButton.addEventListener('click', function () {
        deleteArticleFromServer(article.id);
    });
    deleteButton.textContent = 'Delete';

    // Buttons container
    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = "actions__container";
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);

    // Image
    let img = document.createElement('img');
    img.src = article.imgUrl;

    // Paragraph
    let paragraph = document.createElement('p');
    paragraph.textContent = article.content;

    // Paragraph container
    let paragraphContainer = document.createElement('div');
    paragraphContainer.className = "content__container";
    paragraphContainer.appendChild(paragraph);

    // Read more button
    let readMoreButton = document.createElement('button');
    readMoreButton.className = "button";
    // Add event on delete button and pass article id to delete it form server more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
    readMoreButton.addEventListener('click', function () {
        getArticleFromServer(article.id);
    });
    readMoreButton.textContent = "Read More";

    // Read more container
    let readMoreButtonContainer = document.createElement('div');
    readMoreButtonContainer.className = "button__container";
    readMoreButtonContainer.appendChild(readMoreButton);


    // Append all article nodes to container
    let articleListNode = document.createElement('article');
    articleListNode.appendChild(addButtonContainer);
    articleListNode.appendChild(title);
    articleListNode.appendChild(infoContainer);
    articleListNode.appendChild(buttonsContainer);
    articleListNode.appendChild(img);
    articleListNode.appendChild(paragraphContainer);
    articleListNode.appendChild(readMoreButtonContainer);
    return articleListNode;
}

function createArticleDOMNodes(article) {

    // Title
    let title = document.createElement('h2');
    title.className = "title";
    title.textContent = article.title;

    // Tag
    let tag = document.createElement('li');
    tag.className = "info__item";
    tag.textContent = article.tag;

    // Author
    let author = document.createElement('span');
    author.className = "info__mark";
    author.textContent = article.author;

    let authorContainer = document.createElement('li');
    authorContainer.className = "info__item";
    authorContainer.textContent = 'Added By ';
    authorContainer.appendChild(author)

    // Date
    let date = document.createElement('li');
    date.className = "info__item";
    date.textContent = article.date;

    // Information container
    let infoContainer = document.createElement('ul');
    infoContainer.className = "info__container";
    infoContainer.appendChild(tag);
    infoContainer.appendChild(authorContainer);
    infoContainer.appendChild(date);

    // Image
    let img = document.createElement('img');
    img.src = article.imgUrl;

    // Paragraph
    let paragraph = document.createElement('p');
    paragraph.textContent = article.content;

    // Paragraph container
    let paragraphContainer = document.createElement('div');
    paragraphContainer.className = "content__container";
    paragraphContainer.appendChild(paragraph);

    // Append all article nodes to container
    let articleNode = document.createElement('article');
    articleNode.appendChild(title);
    articleNode.appendChild(infoContainer);
    articleNode.appendChild(img);
    articleNode.appendChild(paragraphContainer);
    return articleNode;
}

function createAboutDOMNodes() {

    // Title
    let title = document.createElement('h2');
    title.className = "title title--spaced";
    title.textContent = 'Hi I am Alex!';

    // Image
    let img = document.createElement('img');
    img.src = "https://i.pravatar.cc/500";

    // Paragraph
    let paragraph = document.createElement('p');
    paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate";

    // Paragraph container
    let paragraphContainer = document.createElement('div');
    paragraphContainer.className = "content__container";
    paragraphContainer.appendChild(paragraph);

    // Append all article nodes to container
    let articleNode = document.createElement('article');
    articleNode.appendChild(title);
    articleNode.appendChild(img);
    articleNode.appendChild(paragraphContainer);
    return articleNode;
}


// Append DOM object them to DOM
function renderArticlesListPage(articles) {

    removeOldArticlesFromDOM();

    // Create and append tags
    for (let i = 0; i < articles.length; i++) {
        let articleDOMNode = createArticleListDOMNodes(articles[i]);
        main.appendChild(articleDOMNode);
    }
}

function renderArticlePage(article) {
    removeOldArticlesFromDOM();

    // Create and append tags
    let articleDOMNode = createArticleDOMNodes(article);
    main.appendChild(articleDOMNode);
}

function renderAboutPage() {
    removeOldArticlesFromDOM();

    // Create and append tags
    let aboutDOMNode = createAboutDOMNodes();
    main.appendChild(aboutDOMNode);
}


// Reset form values
function resetForm() {
    formTitle.value = '';
    formTag.value = '';
    formAuthor.value = '';
    formDate.value = '';
    formImgUrl.value = '';
    formSummary.value = '';
    formContent.value = '';
}

//  Remove Save Button to clear events more at https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
function clearSaveButtonEvents() {
    let newUpdateButton = saveButton.cloneNode(true);
    saveButton.parentNode.replaceChild(newUpdateButton, saveButton);
    saveButton = document.getElementById('save');
}

// Close modal
function closeModal() {
    body.className = '';
}

// Add event listener on Cancel button
cancelButton.addEventListener('click', closeModal);

articleLink.addEventListener('click', getArticlesFromServer);
aboutLink.addEventListener('click', renderAboutPage);

// Get all articles
getArticlesFromServer();