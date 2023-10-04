document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menu-button');
    var primaryMenu = document.getElementById('primary-menu');

    menuButton.addEventListener('click', function() {
        var expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        primaryMenu.style.display = expanded ? 'none' : 'block';
    });
});
