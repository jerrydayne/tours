import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data'
//const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState(data)

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }


//encountered issues with the API so I resolved to using local data
/*  const fetchTours = async () => {
    setLoading(true) //checks to verify and ensure the loading state is true

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false); // loading state back to false after fetching data from url/api
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
*/
  if (loading) {
    return(
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <div className="underline"></div>
          <button className="btn" >Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours 
        tours={tours}
        removeTours={removeTours}
      />
    </main>
  );
}

export default App
