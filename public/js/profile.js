const createBlogpostButton = document.getElementById('create-blogpost-btn');

const updateBlogpostButton = document.getElementById('update-post-btn');

updateBlogpostButton.addEventListener('click', function() {
    document.getElementById('update-post-btn').style.display = 'none';
    document.getElementById('update-blogpost-form').style.display= 'block';
});



//When you click create blogpost, the form appears and the button disappears 
createBlogpostButton.addEventListener('click', function() {
    document.getElementById('create-blogpost-btn').style.display = 'none';
    document.getElementById('create-blogpost-form').style.display= 'block';
});


const createBlogFormHandler = async (event) => {
    event.preventDefault();
//collect values from the form 
const title = document.querySelector("#blogpost-title").value.trim();
const content = document.querySelector("#blogpost-content").value.trim();

if (title && content) {
    const response = await fetch("/api/blogPosts", {
        method: "POST",
        body: JSON.stringify({ title, content}),
        headers: {"Content-Type": "application/json"},
    });

    if (response.ok) {
        document.location.replace("/profile");
    } else {
        alert(response.statusText);
    }
}
};
//create delete button form handler
const delButtonHandler = async(event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/blogPosts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

//create update button form handler 
const updateButtonHandler = async(event) => {
    event.preventDefault();
    //collect updated values from the form
    const title = document.querySelector('#update-blogpost-title').value.trim();
    const content = document.querySelector('#update-blogpost-content').value.trim();
    //collect id data to add in route fetch request
    const id = event.target.getAttribute('data-id');

// Create fetch request, sending over all data
    if(title && content) {
        const response = await fetch(`api/blogPosts/${id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content}),
            headers: {"Content-Type": "application/json"},
        });

        if (response.ok){
            document.location.replace("/profile");
        } else {
            alert(response.statusText);
        }
    }
};


//call delete button form handler 
document.querySelector('#delete-post-btn').addEventListener('click', delButtonHandler);

document.querySelector('#submit-update-blogpost').addEventListener('click', updateButtonHandler);


document.querySelector('.create-blogpost-form').addEventListener('submit', createBlogFormHandler);