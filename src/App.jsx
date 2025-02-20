import { UpdateFollower } from "react-mouse-follower";
import "./App.css";
import {  BannerText, Blogs, Footer, Hero, Navbar } from "./index.js";

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
          <Hero />
        </UpdateFollower>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          {/* <Services /> */}
          {/* <Banner /> */}
          <BannerText />
          <Blogs />
          <Footer/>
        </UpdateFollower>
      </main>
    </>
  );
}

export default App;
