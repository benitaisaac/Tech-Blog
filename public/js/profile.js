const createBlogpostButton = document.getElementById("create-blogpost-btn");
//create variable for getting all update and delete buttons
const updateBlogpostButtons = document.querySelectorAll(".update-post-btn");
const deleteBlogpostButtons = document.querySelectorAll(".delete-post-btn");

// add event listener on each update blogpost button to display form and hide button
updateBlogpostButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.style.display = "none";
    const id = btn.dataset.id;
    document.getElementById(`update-blogpost-form-${id}`).style.display =
      "block";
  });
});

// add event listener to delete the blogpost with the specific delete button that was chosen 
deleteBlogpostButtons.forEach((btn) => {
  btn.addEventListener("click", async function() {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/blogPosts/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to delete project");
      }
    }
  } )
})

//When you click create blogpost, the form appears and the button disappears
createBlogpostButton.addEventListener("click", function () {
  document.getElementById("create-blogpost-btn").style.display = "none";
  document.getElementById("create-blogpost-form").style.display = "block";
});

// Sending values from new blogpost to the database by collecting it from the form
const createBlogFormHandler = async (event) => {
  event.preventDefault();
  //collect values from the form
  const title = document.querySelector("#blogpost-title").value.trim();
  const content = document.querySelector("#blogpost-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/blogPosts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};


//create update button form handler
const updateFormHandler = async (event) => {
  event.preventDefault();

  // console.log(event.target);

  const id = event.target.dataset.id;
  //collect updated values from the form
  const title = document
    .querySelector(`#update-blogpost-title-${id}`)
    .value.trim();
  const content = document
    .querySelector(`#update-blogpost-content-${id}`)
    .value.trim();
  //collect id data to add in route fetch request
  // const id = event.target.getAttribute('data-id');

  // Create fetch request, sending over all data
  if (title && content) {
    const response = await fetch(`api/blogPosts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelectorAll(".update-blogpost-form").forEach((form) => {
  form.addEventListener("submit", updateFormHandler);
});

document
  .querySelector(".create-blogpost-form")
  .addEventListener("submit", createBlogFormHandler);
