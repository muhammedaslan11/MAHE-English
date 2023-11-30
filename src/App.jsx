import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="appDiv">
      <ReactPlayer
        url="https://minio.asggrup.com/storage/Root/5239-glomil/TEKNOLOJI_WEB.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "-1",
        }}
      />
      <LoginSignUp />
    </div>
  );
}

export default App;
