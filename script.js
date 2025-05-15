const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

// Ensure music starts if allowed (some browsers require interaction)
window.addEventListener("DOMContentLoaded", () => {
  bgMusic.volume = 1.0;
  bgMusic.loop = true;
  bgMusic.play().catch(err => {
    console.warn("Autoplay was blocked. Music will play on user interaction.");
  });
});

function startGame() {
  alert("Starting Redline Rush... (load game screen here)");
  // window.location.href = 'game.html';
}

function resumeGame() {
  alert("Resuming saved game...");
}

function toggleOptions() {
  alert("Options menu coming soon!");
}

function showControls() {
  alert("Controls:\nArrow Keys or WASD to fly\nSpacebar to shoot");
}

function restartGame() {
  alert("Game restarted.");
}

function exitGame() {
  const confirmExit = confirm("Are you sure you want to quit?");
  if (confirmExit) {
    alert("Thanks for playing Redline Rush!");
    // window.close(); // Won't work unless opened via JavaScript
  }
}

function toggleMusic() {
  if (bgMusic.paused || bgMusic.muted) {
    bgMusic.play();
    bgMusic.muted = false;
    musicToggle.textContent = "🔊 Mute";
  } else {
    bgMusic.muted = true;
    musicToggle.textContent = "🔇 Unmute";
  }
}
