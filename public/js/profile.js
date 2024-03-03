const createBlogpostButton = document.getElementById('create-blogpost-btn');

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

document.querySelector('.create-blogpost-form').addEventListener('submit', createBlogFormHandler);