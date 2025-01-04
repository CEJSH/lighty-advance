import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      {images.map((image) => (
        <img
          src={image}
          alt="image"
          className="w-full h-full overflow-hidden"
        />
      ))}
    </div>
  );
}

export default App;

const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];
