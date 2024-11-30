// Get canvas element and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set some constants for colors and the astronaut effect
const neonBlue = "rgb(0, 255, 255)";
const neonPink = "rgb(255, 20, 147)";
const glowEffect = 10;  // The intensity of the glow effect

// Function to create a glowing astronaut
function drawAstronaut(x, y) {
    // Glowing effect for the helmet
    ctx.shadowBlur = glowEffect;
    ctx.shadowColor = neonBlue;
    
    // Draw astronaut's helmet (a simple circle for now)
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.fillStyle = neonBlue;
    ctx.fill();
    
    // Glowing effect for the suit
    ctx.shadowBlur = glowEffect / 2;
    ctx.shadowColor = neonPink;
    
    // Draw the astronaut's body (rectangle)
    ctx.beginPath();
    ctx.rect(x - 25, y + 60, 50, 100);
    ctx.fillStyle = neonPink;
    ctx.fill();
    
    // Reset shadow effect for other elements
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
}

// Animate the astronaut's movement and glowing effect
let angle = 0; // For rotation effect

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas
    
    // Calculate the astronaut's position based on mouse movements (optional)
    let x = canvas.width / 2 + Math.sin(angle) * 150;
    let y = canvas.height / 2 + Math.cos(angle) * 150;
    
    // Draw astronaut
    drawAstronaut(x, y);
    
    angle += 0.02;  // Control the speed of rotation
    
    // Call the animate function again for the next frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Make canvas size responsive to window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
