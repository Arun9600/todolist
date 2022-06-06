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
    </>
  );
}

export default App;
