
import './App.css';
function App() {
  return (
    <div >
      <MobileOs />
      <MobileManufacturer />
    </div>
  );
};

function MobileManufacturer() {
  return (
    <div className="App">
      <ld>

        < h1>
          Mobile Manufactures
        </h1>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ld>
    </div>

  );
};

function MobileOs() {
  return (
    <div className="App">
      <ld>
        < h1>
          Mobile Operating System
        </h1>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Window's Phone</li>
      </ld>
    </div>
  );

}

export { App };