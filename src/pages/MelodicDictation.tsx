import { MusicProvider } from "../context/MusicProvider";
import { MusicSheet } from "../components/MusicSheet";

export const MelodicDictation = () => {
  return (
    <MusicProvider>
      <MusicSheet />
    </MusicProvider>
  );
};
