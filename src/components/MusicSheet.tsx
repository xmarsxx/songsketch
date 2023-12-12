import { useEffect, useState } from "react";
import { useMusicContext } from "../context/MusicProvider";
import { Formatter, Stave, Voice } from "vexflow";
import { MUSIC_SHEET } from "../constants";
import { MusicNote } from "../classes/MusicNote";
import * as Tone from "tone";

export const MusicSheet = () => {
  const { context, audio } = useMusicContext();
  const [notes, setNotes] = useState<MusicNote[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const startDrag = (svg: SVGElement, index: number, event: MouseEvent) => {
    svg.classList.add("dragging");
    svg.onmousemove = (e) => drag(svg, index, event, e);
  };
  const drag = (svg: SVGElement, index: number, startEvent: MouseEvent, moveEvent: MouseEvent) => {
    const distance = moveEvent.y - startEvent.y;
    svg.setAttribute("transform", `translate(0, ${distance})`);
    svg.onmouseup = (e) => endDrag(svg, index, distance);
    svg.onmouseleave = (e) => endDrag(svg, index, distance);
  };
  const endDrag = (svg: SVGElement, index: number, distance: number) => {
    svg.classList.remove("dragging");
    const newNotes: MusicNote[] = [];
    for (let i = 0; i < notes.length; i++) {
      const duration = notes[i].getDuration() + (notes[i].isRest() === true ? "r" : "");
      newNotes.push(new MusicNote({ keys: notes[i].keys, duration: duration }));
    }
    newNotes[index] = newNotes[index].onDragEnd(distance);
    setNotes(newNotes);
    svg.onmousemove = null;
    svg.onmouseup = null;
    svg.onmouseleave = null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying(Tone.Transport.state === "started");
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (context) {
      // let logs = notes.reduce<Array<Array<string>>>(
      //   (accumulator, currentValue) => [...accumulator, currentValue.keys],
      //   []
      // );
      context.clear();
      const width = MUSIC_SHEET.BASE_WIDTH + notes.length * 50;
      context.resize(width, MUSIC_SHEET.BASE_HEIGHT);
      const stave = new Stave(10, 40, width).addClef("treble").addTimeSignature("4/4");
      stave.setContext(context).draw();
      if (notes.length > 0) {
        const voice = new Voice({ num_beats: notes.length, beat_value: 4 }).addTickables(notes);
        new Formatter().format([voice], width - MUSIC_SHEET.BASE_WIDTH, { context: context });
        voice.draw(context, stave);
        for (let i = 0; i < notes.length; i++) {
          const svgNote = notes[i].getSVGElement();
          if (svgNote != null) {
            svgNote.setAttribute("draggable", "true");
            svgNote.setAttribute("pointer-events", "bounding-box");
            svgNote.onmousedown = (e) => startDrag(svgNote, i, e);
          }
        }
      }
    }
  }, [context, notes, startDrag]);

  return (
    <div className="flex flex-col place-items-start">
      <button
        className="bg-pink-300 hover:bg-pink-400 text-white ml-1 my-2 py-1 px-2 rounded"
        onClick={(e) => {
          setNotes([...notes, new MusicNote({ keys: ["c/4"], duration: "q" })]);
        }}
      >
        Add Note
      </button>
      <button
        className="bg-pink-300 hover:bg-pink-400 text-white ml-1 my-2 py-1 px-2 rounded"
        onClick={async (e) => {
          if (Tone.Transport.state === "started") {
            audio.stop();
          } else {
            await Tone.start();
            audio.playNotes(notes);
          }
        }}
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
    </div>
  );
};
