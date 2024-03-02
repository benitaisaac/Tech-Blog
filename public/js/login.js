const loginFormHandler = async (event) => {
  event.preventDefault();

  //collect values from login form
  const userName = document.querySelector("#name-login").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (userName && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    //Make sure variable name aligns with model name 
    const userName = document.querySelector('#signup-name').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if( userName && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok){
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);