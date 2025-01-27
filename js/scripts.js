document.getElementById('password-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    // Replace with your actual API endpoint
    let formData = new FormData();
    formData.append('unlock_pw', password);

    fetch('https://wedding.shannon-and-matt.com/unlock_form', {
        method: 'POST',
        body: formData

    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                $('#password-modal').modal('hide');
                document.getElementById('form_iframe').src = data.form_url;
                $('#rsvp-modal-form').modal('show');

            } else {
                document.getElementById('password-error').style.display = 'block';
            }
            const passwordError = document.createElement('div');
            passwordError.id = 'password-error';
            passwordError.className = 'text-danger';
            passwordError.style.display = 'none';
            passwordError.textContent = 'Incorrect password. Please try again.';
            document.getElementById('password-form').appendChild(passwordError);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});