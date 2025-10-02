//navegacin del menu
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remover clase active de todos los items
            menuItems.forEach(i => i.classList.remove('active'));
            // Agregar clase active al item clickeado
            this.classList.add('active');
        });
    });
});