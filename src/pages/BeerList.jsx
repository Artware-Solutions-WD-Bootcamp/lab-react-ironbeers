import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BeerList() {
  //DO 1. Create info management state
  const [beers, setBeers] = useState(null);

  //DO 2. Call the state through component mount
  useEffect(() => {
    getBeers();
  }, []);

  //DO 3. Create the function to get the data from API
  const getBeers = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    setBeers(response.data);
  };

  //DO 4. ADD THE if CONDITION TO AVOID null ERROR OF REACT FIRST RENDER
  if (!beers) {
    return (
      <div>
        <ClipLoader />
      </div>
    );
  }

  return (
    <div>
      <h1>All our cool beers</h1>
      {beers.map((eachBeer, index) => {
        return (
          <div key={index + eachBeer._id}>
            <img src={eachBeer.image_url} alt="" />
            <Link to={`/beer-details/${eachBeer._id}`}>{eachBeer.name}</Link>
            <p>{eachBeer.tagline}</p>
            <p>{eachBeer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BeerList;
