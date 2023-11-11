const keys = document.querySelectorAll(".key"),
  volume = document.querySelector(".volume"),
  check = document.querySelector(".checkbox");

const arrayOfKeys = [];

const audio = new Audio("music/a.wav");

const playPiano = (key) => {
  audio.src = `music/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => clickedKey.classList.remove("active"), 100);
};

keys.forEach((key) => {
  arrayOfKeys.push(key.dataset.key);
  key.addEventListener("click", () => playPiano(key.dataset.key));
});

const playMusic = (e) => {
  if (arrayOfKeys.includes(e.key)) playPiano(e.key);
};

const checkMusic = () => {
  keys.forEach((key) => key.classList.toggle("hide"));
};

const volumeMusic = (e) => {
  audio.volume = e.target.value;
};

check.addEventListener("input", checkMusic);
volume.addEventListener("input", volumeMusic);
document.addEventListener("keydown", playMusic);
