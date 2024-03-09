const createBlogpostButton = document.getElementById("create-blogpost-btn");
const updateBlogpostButtons = document.querySelectorAll(".update-post-btn");

updateBlogpostButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.style.display = "none";
    const id = btn.dataset.id;
    document.getElementById(`update-blogpost-form-${id}`).style.display =
      "block";
  });
});

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

//create delete button form handler
const delButtonHandler = async (event) => {
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

//call delete button form handler
// document.querySelector('.delete-post-btn').addEventListener('click', delButtonHandler);

// document.querySelector('.submit-update-blogpost').addEventListener('click', updateButtonHandler);

document.querySelectorAll(".update-blogpost-form").forEach((form) => {
  form.addEventListener("submit", updateFormHandler);
});

document
  .querySelector(".create-blogpost-form")
  .addEventListener("submit", createBlogFormHandler);
