const form = document.getElementById('form');

function toggleDropdown(event) {
    let navbarToggle = document.getElementById("navbar-toggle");
    event.preventDefault();
    navbarToggle.classList.toggle("open");
}

function showForm() {
    form.style.display = 'block';
    document.body.classList.add('no-scroll'); //prevent scrolling
}

function hideForm() {
    form.style.display = 'none'; // Hide the form
    document.body.classList.remove('no-scroll'); // Re-enable scrolling
}

function submitForm() {
    hideForm(); // make this call for now until adding actual submit functionality
}