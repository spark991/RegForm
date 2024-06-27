const api =  'https://passgenapp.onrender.com/api/auth/';


//Register
document.getElementById('registerf').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formDataObject = {};

    formData.forEach((value, key) => {
        formDataObject[key] =  value;
    });

    fetch(api + 'register', {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formDataObject),
    })                                                                                                                    q
    .then(response => {
        if (!response.ok) {
            throw new Error ('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Registration Successful');
        console.log(data);
        window.location.href = "dashboard.html";
    })
    .catch(error => {
        console.error('Error registering user:', error);
        alert('Registration failed. try again');
    });
});