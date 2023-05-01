import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"
import { apiUrl, filterData } from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setloading] = useState(true);
  const [category, setCategory]= useState(filterData[0].title)

  async function fetchData() {
    setloading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (e) {
      toast.error("Something Went Wrong!")
    }
    setloading(false);
  }

  useEffect(() => { fetchData() }, []);
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar />
      </div>

      <div>

        <div>
          <Filter filterData={filterData}
                  category={category}
                  setCategory={setCategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)}
        </div>

      </div>

    </div>
  );
};

export default App;
