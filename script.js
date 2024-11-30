document.addEventListener("mousemove", function (e) {
    const ghostCursor = document.querySelector(".ghost-cursor");

    // Create ghost cursor if not already present
    if (!ghostCursor) {
        const newGhostCursor = document.createElement("div");
        newGhostCursor.classList.add("ghost-cursor");
        document.body.appendChild(newGhostCursor);
    }

    const cursor = document.querySelector(".ghost-cursor");

    // Position the cursor at mouse coordinates and add a 3D rotation effect
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate the angle of cursor in 3D space
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const rotateX = (deltaY / window.innerHeight) * 30; // Max rotation of 30 degrees in X axis
    const rotateY = (deltaX / window.innerWidth) * -30; // Max rotation of -30 degrees in Y axis

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    cursor.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Optional: Create interactive effect when clicking on the screen
document.body.addEventListener("click", function () {
    const cursor = document.querySelector(".ghost-cursor");
    if (cursor) {
        cursor.style.transform = "scale(2) rotateX(0deg) rotateY(0deg)";
        setTimeout(() => {
            cursor.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
        }, 300);
    }
});
