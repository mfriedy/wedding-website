document.getElementById('rsvp-password-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    // Replace with your actual API endpoint
    let formData = new FormData();
    formData.append('unlock_pw', password);

    fetch('/unlock_form', {
        method: 'POST',
        body: formData

    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                var myModalEl = document.getElementById('rsvpUnlockModalToggle');
                var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
                modal.hide();
                document.getElementById('form_iframe').src = data.form_url;
                var modalR = new bootstrap.Modal(document.getElementById('rsvpFormModalToggle'));
                // var modalR = bootstrap.Modal.getOrCreateInstance(myModelR)
                modalR.show();

            } else {
                // document.getElementById('password-error').style.display = 'block';
                const passwordError = document.createElement('div');
                passwordError.id = 'password-error';
                passwordError.className = 'text-danger';
                passwordError.textContent = 'Incorrect password. Please try again.';
                document.getElementById('rsvp-unlock-form').appendChild(passwordError);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('accom-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    fetch('/accom', {
        method: 'POST',
        body: formData

    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const passwordError = document.createElement('div');
                passwordError.id = 'password-error';
                passwordError.className = 'text-success';
                passwordError.textContent = 'Success!.';
                document.getElementById('accom-form').appendChild(passwordError);

            } else {
                // document.getElementById('password-error').style.display = 'block';
                const passwordError = document.createElement('div');
                passwordError.id = 'password-error';
                passwordError.className = 'text-danger';
                passwordError.textContent = 'Incorrect password. Please try again.';
                document.getElementById('accom-form').appendChild(passwordError);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

