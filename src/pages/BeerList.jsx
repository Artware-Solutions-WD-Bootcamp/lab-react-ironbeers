import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../components/Navbar";

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
    <Navbar />
      <h1>All our cool beers</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Tagline</TableCell>
              <TableCell>Contributed by</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {beers.map((eachBeer, index) => {
              return (
                <TableRow key={index + eachBeer._id}>
                <TableCell>
                  <img src={eachBeer.image_url} alt="" />
                  </TableCell>
                  <TableCell>
                  <Link to={`/beer-details/${eachBeer._id}`}>
                    {eachBeer.name}
                  </Link>
                  </TableCell>
                  <TableCell>
                  <p>{eachBeer.tagline}</p>
                  </TableCell>
                  <TableCell>
                  <p>{eachBeer.contributed_by}</p>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BeerList;
