document.addEventListener('DOMContentLoaded', function() {
    // Get the menu button and the primary menu
    var menuButton = document.getElementById('menu-button');
    var primaryMenu = document.getElementById('primary-menu');

    // Add a click event to the menu button
    menuButton.addEventListener('click', function() {
        var expanded = this.getAttribute('aria-expanded') === 'true' || false; // Get the value of the 'aria-expanded' attribute
        this.setAttribute('aria-expanded', !expanded); // Toggle the value of the 'aria-expanded' attribute
        primaryMenu.style.display = expanded ? 'none' : 'block'; // If the value of 'aria-expanded' is 'true', set the display of the primary menu to 'none', otherwise set it to 'block'
    });
});
