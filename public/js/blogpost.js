//TODO: grab data from form and send to backend using a fetch request

const commentHandler = async (event) => {
  event.preventDefault();
  //collect values from the form

  const content = document.querySelector("#comment").value.trim();
  //TODO: get the id of the blogpost so we can render the correct page when data is sent 
  const blogpost_id = event.target.dataset.id;

  if (content) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content, blogpost_id }),
      headers: { "content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/blogPost/${blogpost_id}`);
    } else {
      alert(response.statusText);
    }
  }
};

//Add event listener to commentHandler function 
document.querySelector('.add-comment-form').addEventListener("submit", commentHandler);