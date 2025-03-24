// src/utils/soundManager.js
import { Howl } from "howler";

// Vous pouvez importer vos fichiers audio depuis le dossier public (ou un autre dossier)
export const sounds = {
  goodAnswer: new Howl({
    src: ["/sounds/goodAnswer.mp3"],
    volume: 0.5,
  }),
  wrongAnswer: new Howl({
    src: ["/sounds/wrongAnswer.mp3"],
    volume: 0.5,
  }),
  buttonClick: new Howl({
    src: ["/sounds/buttonClick.mp3"],
    volume: 0.5,
  }),
};

export function playSound(soundKey) {
  if (sounds[soundKey]) {
    sounds[soundKey].play();
  }
}