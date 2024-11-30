// Get canvas element and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load astronaut image
const astronautImage = new Image();
astronautImage.src = "4286dcad-ca1f-4317-9076-523e1f0e3ac9.webp";  // Make sure to place your astronaut image here

// Lighting and reflections parameters
const glowEffect = 30;  // Intensity of the glow
const neonBlue = "rgb(0, 255, 255)";  // Neon blue glow color
const neonPink = "rgb(255, 20, 147)"; // Neon pink for reflection highlights

// Astronaut position and movement variables
let astronautX = canvas.width / 2;
let astronautY = canvas.height / 2;
let rotationAngle = 0;

// Function to apply glowing effect around the astronaut
function applyLightingEffect(x, y) {
    ctx.shadowBlur = glowEffect;
    ctx.shadowColor = neonBlue;

    // Draw the glowing helmet area (optional, can be improved later)
    ctx.beginPath();
    ctx.arc(x, y, 60, 0, Math.PI * 2);  // Glowing effect for the helmet
    ctx.fillStyle = neonBlue;
    ctx.fill();
}

// Function to animate astronaut with glowing effects and floating movement
function animateAstronaut() {
    // Clear canvas for the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply lighting effect
    applyLightingEffect(astronautX, astronautY);

    // Draw astronaut image
    ctx.save();  // Save the current state of the canvas
    ctx.translate(astronautX, astronautY);  // Move the origin to astronaut position
    ctx.rotate(rotationAngle);  // Apply rotation for a 3D-like effect
    ctx.drawImage(astronautImage, -60, -120, 120, 240);  // Draw the astronaut
    ctx.restore();  // Restore the canvas to its original state

    // Animate astronaut floating up and down
    astronautY += Math.sin(Date.now() / 1000) * 2;  // Floating effect using sine function

    // Create subtle reflections with shadow effect
    ctx.shadowBlur = 15;
    ctx.shadowColor = neonPink;
    ctx.fillStyle = neonPink;
    ctx.beginPath();
    ctx.arc(astronautX, astronautY + 150, 20, 0, Math.PI * 2);  // Reflecting on the ground
    ctx.fill();

    // Rotate astronaut for dynamic movement
    rotationAngle += 0.01;  // Adjust the speed of rotation

    // Call the next animation frame
    requestAnimationFrame(animateAstronaut);
}

// Wait for the astronaut image to load, then start the animation
astronautImage.onload = () => {
    animateAstronaut();
};

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
