const form = document.getElementById('contactForm');
const status = document.getElementById('form-status');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Get and encode form values
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    // Compose the mailto link
    const mailto = `mailto:theophiluspraise67@gmail.com?subject=Portfolio Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    // Open the user's email client
    window.location.href = mailto;

    // Optionally show a status message
    if(status) {
      status.textContent = "Your email client should now open. If it doesn't, please email theophiluspraise67@gmail.com directly.";
      setTimeout(()=>status.textContent = "", 6000);
    }

    form.reset();
  });
}
