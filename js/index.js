const blogsElement = document.querySelector('.blogs');
// console.log(blogsElement);
const searchForm = document.getElementById('search-form');

const renderPosts = async function(term) {
    let url = ' http://localhost:3000/blogs?';
    if(term) {
        url += `&q=${term}`;
    }

    try {
        // fetching data from server
        let response = await fetch(url);
        if(!response.ok) {
            throw new Error('Server response is not OK')
        }
        // convert response to json data
        const data = await response.json();
        // console.log(data);

        let template = '';
        data.forEach(post => {
        template += `
                    <div class="post">
                        <h3>Title: ${post.title}</h3>
                        <h4>Author: <small>${post.author}</small></h4>
                        <p>${post.content.slice(0, 100)}</p>
                        <a href='/details.html?id=${post.id}'>Read more ....</a>
                    </div>
                    `
                });
    blogsElement.innerHTML = template;

    } catch(error) {
        console.error("There was an error fetching data:", error);
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.search.value.trim());
})

// event listener for render all posts to homepage
window.addEventListener('DOMContentLoaded', () => renderPosts());
