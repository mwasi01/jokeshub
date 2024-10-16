const jokes = [];

function postJoke() {
    const jokeInput = document.getElementById('jokeInput').value;
    if (jokeInput === "") {
        alert("Please write a joke.");
        return;
    }
    
    const newJoke = {
        text: jokeInput,
        likes: 0,
        comments: []
    };
    jokes.push(newJoke);
    displayJokes();
}

function displayJokes() {
    const jokesList = document.getElementById('jokesList');
    jokesList.innerHTML = '';

    jokes.forEach((joke, index) => {
        jokesList.innerHTML += `
            <div class="joke-item">
                <p>${joke.text}</p>
                <button class="like-btn" onclick="likeJoke(${index})">Like (${joke.likes})</button>
                <div class="comment-section">
                    <input type="text" id="commentInput${index}" placeholder="Add a comment">
                    <button onclick="addComment(${index})">Comment</button>
                    <div class="comments-list">
                        ${joke.comments.map(comment => `<p>${comment}</p>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });
}

function likeJoke(index) {
    jokes[index].likes += 1;
    displayJokes();
}

function addComment(index) {
    const commentInput = document.getElementById(`commentInput${index}`).value;
    if (commentInput === "") {
        alert("Please write a comment.");
        return;
    }

    jokes[index].comments.push(commentInput);
    displayJokes();
}
