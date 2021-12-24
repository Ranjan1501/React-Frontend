
import './App.css';

function App() {
  const mobile = ["Samsung", "HTC", "Micromax", "Apple"];
  const os = ["Android", "Blackberry", "iPhone", "Window's Phone"];
  return (
    <div className="App" >
      <ld>
        <h1> Mobile Operating System </h1>
        {os.map((e) => (
          <li>
            {e}
          </li>
        ))}
      </ld>
      <ld>
        <h1>  Mobile Manufactures </h1>
        {mobile.map((e) => (
          <li>
            {e}
          </li>
        ))}

      </ld>
    </div>
  );
};



export { App };