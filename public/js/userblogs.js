//This form will handle updating and deleting blogposts
// since these are the two buttons on each div that displays a user's blogposts

// const updateBlogpostButton = document.getElementById('update-post-btn');
// const updatedBlogpostContent = document.getElementById('update-blogpost-content');
// select all update blogpost buttons (because it is in a loop)
// const updateBlogpostButtons = document.querySelectorAll('.update-post-btn');

const updateParentElement = document.querySelector('.update-parent-container')

//When you update a blogpost, the update form appears and the button disappears
// updateBlogpostButton.addEventListener('click', function() {
//     document.getElementById('update-post-btn').style.display = 'none';
//     document.getElementById('update-blogpost-form').style.display= 'block';
// });

//Use deletegation to handle events on a parent element
updateParentElement.addEventListener('click', function(event) {
    if(event.target.classList.contains('update-post-btn')) {
        document.getElementById('update-post-btn').style.display = 'none';
        document.getElementById('update-blogpost-form').style.display= 'block';
    }
});

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

