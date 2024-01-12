import { MusicSheet } from "./components/MusicSheet";
import { MusicProvider } from "./context/MusicProvider";

function App() {
  return (
    <div className="App">
      <MusicProvider>
        <MusicSheet />
      </MusicProvider>
    </div>
  );
}

export default App;

// My second comment -Sam Wald