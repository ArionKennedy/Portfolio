function fillHexGrid() {
    const frontPage = document.querySelector('.frontPage');
    // Remove only hex rows, not the text
    const oldRows = frontPage.querySelectorAll('.hex-row');
    oldRows.forEach(row => row.remove());

    const containerWidth = frontPage.offsetWidth;
    const containerHeight = frontPage.offsetHeight;
    const hexWidth = 100;
    const hexHeight = 110;

    const hexPerRow = Math.ceil(containerWidth / hexWidth) + 1;
    const rowCount = Math.ceil(containerHeight / hexHeight) + 1;

    for (let row = 0; row < rowCount; row++) {
        //Create a new row for hexagons
        const hexRow = document.createElement('div');
        hexRow.className = 'hex-row';

        //Add hexagons to the row
        for (let i = 0; i < hexPerRow; i++) {

            // Create a hexagon element
            const hex = document.createElement('div');
            hex.className = 'hexagon';

            // Set the position of the hexagon (1px offset for odd rows)
            if (row % 2 === 1 && i === 0) {
                hex.style.marginLeft = `1px`;
            }

            // Add the hexagon to the row
            hexRow.appendChild(hex);
        }

        // Add the row to the frontPage container
        frontPage.appendChild(hexRow);
    }
}

function onSidebarClick() {
    // Your sidebar logic here
    alert("Sidebar button clicked!");
}

document.addEventListener("DOMContentLoaded", function() {
    fillHexGrid();

    const sidebarBtn = document.querySelector('.sidepanelButton');
    if (sidebarBtn) {
        sidebarBtn.addEventListener('click', onSidebarClick);
    }
});

window.addEventListener("resize", fillHexGrid);
