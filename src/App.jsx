import { UpdateFollower } from "react-mouse-follower";
import "./App.css";
import { Hero, Navbar } from "./index.js";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Navbar />
        </UpdateFollower>
        <Hero />
      </main>
    </>
  );
}

export default App;
