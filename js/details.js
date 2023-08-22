let id = new URLSearchParams(window.location.search).get('id');
let delBtn = document.querySelector('.delete');

let postElement = document.getElementById("post-detail");

const postDetail = async function() {
    let uri = 'http://localhost:3000/blogs/' + id;
    try {
        let response = await fetch(uri);
        if(!response.ok) {
            throw new Error('Server not responding');
        }
        let post = await response.json();

        let template = `
            <div class="post-detail">
                <h2>Title: ${post.title}</h2>
                <h3>Author: <small>${post.author}</small></h3>
                <p>${post.content}</p>
            </div>
        `;

        postElement.innerHTML = template;


    } catch(error) {
        console.log(error);
    }
};

delBtn.addEventListener('click', async (e) => {
    await fetch("http://localhost:3000/blogs/" + id, {
        method: 'DELETE'
    });
    window.location.replace('/index.html');
})

window.addEventListener('DOMContentLoaded', () => postDetail());