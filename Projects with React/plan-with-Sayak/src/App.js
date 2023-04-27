import React, {useState} from "react";
import data from './data'
import Tours from "./component/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if( tours.length === 0)
  return(
    <div className="h-[100vh] flex items-center justify-center flex-col cursor-pointer">
      <h2 className="text-[26px] font-bold">No Tours Left</h2>
      <button className="my-[18px] py-[10px] px-[80px] border-[1px] border-solid border-white bg-[#f0f0f0]
      hover:bg-white hover:text-black hover:transition-all" 
      onClick={()=> setTours(data)}>Refresh</button>
    </div>
  );

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
