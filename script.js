document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Replace this URL with your actual form submission endpoint
        const submitUrl = 'https://formspree.io/f/your-form-id';

        fetch(submitUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            formStatus.textContent = 'Thank you for your message. We will get back to you soon.';
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            formStatus.textContent = 'Oops! There was a problem submitting your form. Please try again later.';
        });
    });
});
