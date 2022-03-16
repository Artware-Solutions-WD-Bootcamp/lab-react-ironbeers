import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";

function BeerNew() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewerTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState("");
  const [contributed_by, setContributedBy] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // prevenir comportamiento por defecto
    e.preventDefault();

    // enviar los estados al endpoint
    const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);

    // redireccionar al usuario a "/beers"
    navigate("/beers")
  };
  return (
    <div>
    <Navbar />
    <h1 className="new-beer-title">Customize my beer</h1>
    <form className="new-beer-form-container" onSubmit={handleSubmit}>
      <TextField name="name" type="text" id="outlined-basic" label="Name:" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
      <TextField name="tagline" type="text" id="outlined-basic" label="Tagline:" variant="outlined" value={tagline} onChange={(e) => setTagline(e.target.value)}/>
      <TextField name="description" type="text" id="outlined-basic" label="Description:" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <TextField name="first_brewed" type="text" id="outlined-basic" label="First Brewed:" variant="outlined" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
      <TextField name="brewers_tips" type="text" id="outlined-basic" label="Brewer Tips:" variant="outlined" value={brewers_tips} onChange={(e) => setBrewerTips(e.target.value)}/>
      <TextField name="attenuation_level" type="number" id="outlined-basic" label="Attenuation Level:" variant="outlined" value={attenuation_level} onChange={(e) => setAttenuationLevel(e.target.value)}/>
      <TextField name="contributed_by" type="text" id="outlined-basic" label="Contributed By:" variant="outlined" value={contributed_by} onChange={(e) => setContributedBy(e.target.value)}/>
      <Button variant="outlined" type="submit">Add my beer</Button>
    </form>
  </div>

  )
}

export default BeerNew