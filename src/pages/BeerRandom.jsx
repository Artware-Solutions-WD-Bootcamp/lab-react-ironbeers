import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function BeerRandom() {
  //DO 1. Create status
  const [beerDetails, setBeerDetails] = useState(null);
  const navigate = useNavigate;

  //DO 2. Create useEffect
  useEffect(() => {
    getBeerDetails();
  }, []);

  //DO 3. Create the function to get the data from API
  const getBeerDetails = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeerDetails(response.data);
    } catch (err) {
      navigate("/error");
    }
  };

  //DO 4. ADD THE if CONDITION TO AVOID null ERROR OF REACT FIRST RENDER
  if (!beerDetails) {
    return (
      <div>
        <ClipLoader />
      </div>
    );
  }

  return (
    <div>
      <img src={beerDetails.image_url} alt="" />
      <h1>{beerDetails.name}</h1>
      <p>Tagline: {beerDetails.tagline}</p>
      <p>First brewed: {beerDetails.first_brewed}</p>
      <p>Attenuation Level: {beerDetails.attenuation_level}</p>
      <p>Description: {beerDetails.description}</p>
      <p>Contributed by: {beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerRandom;
