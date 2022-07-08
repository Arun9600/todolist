import DigitalClock from "./DigitalClock";
import Header from "./Header";
import Lists from "./Lists";
const App = () => {
  return (
    <>
      <Header />
      <div className="listContainer">
        <div className="listsBox">
          <Lists />
        </div>
      </div>
      <DigitalClock />
    </>
  );
};

export default App;
