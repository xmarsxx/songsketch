import * as Tone from "tone";
import { MusicNote } from "./MusicNote";

export const DURATION_VALUES = (key: string) => {
  switch (key.toLocaleLowerCase()) {
    case "w":
      return "1n";
    case "h":
      return "2n";
    case "q":
      return "4n";
    case "8":
      return "8n";
    case "16":
      return "16n";
    case "32":
      return "32n";
    default:
      return 0;
  }
};

export const DURATION_TIME = (key: string) => {
  let durationTime = 0;
  switch (key.toLocaleLowerCase()) {
    case "w":
      durationTime = 2;
      break;
    case "h":
      durationTime = 1.5;
      break;
    case "q":
      durationTime = 1;
      break;
    case "8":
      durationTime = 0.5;
      break;
    case "16":
      durationTime = 0.25;
      break;
    case "32":
      durationTime = 0.125;
      break;
    default:
      return 0;
  }
  return durationTime / (Tone.Transport.bpm.value / 60);
};

export const getTotalDurationTime = (notes: MusicNote[]) => {
  let time = 0;
  notes.forEach((note) => {
    time += DURATION_TIME(note.getDuration());
  });
  return time;
};

export class AudioEngine {
  synth = new Tone.Sampler({
    urls: {
      A1: "A1.mp3",
      A2: "A2.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/casio/",
  }).toDestination();
  sequence: Tone.Sequence<MusicNote>;
  stopTimeout: NodeJS.Timeout | undefined;

  constructor() {
    this.sequence = new Tone.Sequence(this.onNotePlayed, []);
  }

  private onNotePlayed: Tone.ToneEventCallback<MusicNote> = (time, note) => {
    const svg = note.getSVGElement();
    const durationTime = DURATION_TIME(note.getDuration());
    svg?.classList.add("playing");
    this.synth.triggerAttackRelease(note.getAudioKey(), durationTime, time);
    setTimeout(() => {
      console.log("set timeout called");
      return svg?.classList.remove("playing");
    }, durationTime * 500);
  };

  playNotes = (notes: MusicNote[]) => {
    clearTimeout(this.stopTimeout);
    this.sequence = new Tone.Sequence(this.onNotePlayed, notes);
    this.sequence.loop = 1;

    this.sequence.start();
    Tone.Transport.start();

    this.stopTimeout = setTimeout(() => this.stop(), getTotalDurationTime(notes) * 500);
  };

  stop = () => {
    this.sequence.stop();
    Tone.Transport.stop();
    clearTimeout(this.stopTimeout);
  };
}
