import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Navbar from "../components/Navbar";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
      <Navbar />
      <div className="beer-container">
        <div>
          <Card className="beer-img-card">
            <CardContent>
              <img src={beerDetails.image_url} alt="beerimage" />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="beer-card">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {beerDetails.name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Tagline: {beerDetails.tagline}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                First brewed: {beerDetails.first_brewed}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Attenuation Level: {beerDetails.attenuation_level}
              </Typography>
              <br />
              <Typography variant="body3" color="text.secondary">
                Description: {beerDetails.description}
              </Typography>
              <br />
              <br />
              <Typography variant="body4" color="text.secondary">
                Contributed by: {beerDetails.contributed_by}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BeerRandom;
