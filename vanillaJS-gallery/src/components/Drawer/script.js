const drawer = document.getElementById('drawer');
const openBtn = document.getElementById('openDrawer');
const closeBtn = document.getElementById('closeDrawer');
const radioButtons = document.querySelectorAll('input[name="placement"]');

let currentPlacement = 'left'; // Default placement

// Show Drawer
openBtn.addEventListener('click', () => {
    drawer.className = `drawer ${currentPlacement} open`;
});

// Close Drawer
closeBtn.addEventListener('click', () => {
    drawer.classList.remove('open');
});

// Change Drawer Placement
radioButtons.forEach(radio => {
    radio.addEventListener('change', (e) => {
        currentPlacement = e.target.value;
        drawer.className = `drawer ${currentPlacement}`;
    });
});
