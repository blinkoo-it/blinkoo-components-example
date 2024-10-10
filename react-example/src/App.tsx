import "./App.css";
import Feed from "./feed";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Feed
        apiKey="YOUR_API_KEY"
        title="Explore"
        assetsPath="blinkoo-feed/"
      ></Feed>
    </div>
  );
}

export default App;
