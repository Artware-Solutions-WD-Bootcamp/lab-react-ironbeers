import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Beers from "../assets/beers.png";
import New from "../assets/new-beer.png";
import Random from "../assets/random-beer.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="beer-container">
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Beers}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              All Beers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              excepturi ab culpa, quos incidunt in numquam sint nesciunt
              eligendi ex aut maiores non maxime!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to="/beers">
            <Button size="small" color="primary">
              Enjoy all our beers
            </Button>
          </NavLink>
        </CardActions>
      </Card>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Random}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Random Beer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              excepturi ab culpa, quos incidunt in numquam sint nesciunt
              eligendi ex aut maiores non maxime!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <NavLink to="/beer-random">
            <Button size="small" color="primary">
              Enjoy a random beer
            </Button>
          </NavLink>
        </CardActions>
      </Card>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={New}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              New Beer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              excepturi ab culpa, quos incidunt in numquam sint nesciunt
              eligendi ex aut maiores non maxime!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <NavLink to="/beer-new">
            <Button size="small" color="primary">
              Create your own beer
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </div>
  );
}

export default Home;
