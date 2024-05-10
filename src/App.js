import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data'
//const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState(data)

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
  return (
    <main>
      <Tours tours={tours}/>
    </main>
  );
}

export default App
