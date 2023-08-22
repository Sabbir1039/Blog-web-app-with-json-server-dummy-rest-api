let form = document.querySelector('form');

const handleForm = async function(e) {
    e.preventDefault();

    const doc = {
        title: form.title.value,
        author: form.author.value,
        content: form.content.value,
    }

    try {
        await fetch('http://localhost:3000/blogs', {
            method:'POST',
            body: JSON.stringify(doc),
            headers: {'Content-type': 'application/json'}
        });
        window.location.replace('/index.html');
        
    } catch(error) {
        console.log('Server not responding!');
    }
}

window.addEventListener('submit', handleForm);