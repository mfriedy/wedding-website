document.getElementById('rsvp-password-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const req_type = document.getElementById('req_type').value;
    let formData = new FormData();
    formData.append('unlock_pw', password);
    formData.append('req_type', req_type);

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
                modalR.show();

            } else {
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

const unlockModal = document.getElementById('rsvpUnlockModalToggle')
if (unlockModal) {
    unlockModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const req_type = button.getAttribute('data-bs-rsvptype')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = unlockModal.querySelector('.modal-title')
        unlockModal.querySelector('input[name="req_type"]').value = req_type;
        if (req_type == 'rsvp') {
            modalTitle.textContent = 'RSVP unlock'
        } else {
            modalTitle.textContent = 'Soft RSVP unlock'
        }
    })
}

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
                passwordError.textContent = 'Success! You can close this window now';
                document.getElementById('accom-form').appendChild(passwordError);

            } else {
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

