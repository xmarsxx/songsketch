import { createContext, useContext, useEffect, useState } from "react";
import { RenderContext, Renderer } from "vexflow";
import { MUSIC_SHEET } from "../constants";
import * as Tone from "tone";
import { AudioEngine } from "../classes/AudioEngine";

type MusicProviderType = {
  context: RenderContext | undefined;
  audio: AudioEngine;
};

const MusicScoreContext = createContext<MusicProviderType>({
  context: undefined,
  audio: new AudioEngine(),
});

export const useMusicContext = () => {
  return useContext(MusicScoreContext);
};

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState<RenderContext>();

  useEffect(() => {
    Tone.Transport.bpm.value = 90;
    const renderer = new Renderer("musicContainer", Renderer.Backends.SVG);
    const renderContext = renderer.getContext();
    renderContext.resize(MUSIC_SHEET.BASE_WIDTH, MUSIC_SHEET.BASE_HEIGHT);
    setContext(renderContext);
  }, []);

  return (
    <MusicScoreContext.Provider value={{ context, audio: new AudioEngine() }}>
      <div id="musicContainer">{children}</div>
    </MusicScoreContext.Provider>
  );
};
