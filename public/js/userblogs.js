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

//call delete button form handler 
document.querySelector('.user-blogpost').addEventListener('click', delButtonHandler);

