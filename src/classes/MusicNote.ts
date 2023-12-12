import { StaveNote } from "vexflow";

const keyList = ["c", "d", "e", "f", "g", "a", "b"];

export class MusicNote extends StaveNote {
  getAudioKey() {
    return this.keys[0].replaceAll("/", "");
  }

  onDragEnd(distance: number): MusicNote {
    // 5 for half step and 10 for full
    let transformer: (noteKey: string, steps: number) => string;
    if (distance < 0) {
      transformer = this.keyUp;
    } else {
      transformer = this.keyDown;
    }

    const keys = this.keys.map((key) => transformer(key, Math.abs(Math.round(distance / 5))));
    const duration = this.getDuration() + (this.isRest() === true ? "r" : "");
    return new MusicNote({ keys: keys, duration: duration });
  }

  keyUp(noteKey: string, steps: number): string {
    const [key, octaveString] = noteKey.toLowerCase().split("/");
    let octaveNumber = Number.parseInt(octaveString);
    const octaveShift = Math.floor(steps / keyList.length);
    octaveNumber += octaveShift;
    const startingIndex = keyList.indexOf(key);
    const endingIndex = (startingIndex + steps) % keyList.length;
    if (startingIndex > endingIndex) {
      octaveNumber++;
    }
    return `${keyList[endingIndex]}/${octaveNumber}`;
  }

  keyDown(noteKey: string, steps: number): string {
    const [key, octaveString] = noteKey.toLowerCase().split("/");
    let octaveNumber = Number.parseInt(octaveString);
    const octaveShift = Math.floor(steps / keyList.length);
    octaveNumber -= octaveShift;
    const startingIndex = keyList.indexOf(key);
    const endingIndex = (keyList.indexOf(key) + keyList.length - steps) % keyList.length;

    if (endingIndex > startingIndex) {
      octaveNumber--;
    }

    return `${keyList[endingIndex]}/${octaveNumber}`;
  }
}
