import brokenBeer from "../assets/broken-beer.jpg";
import Navbar from "../components/Navbar";

function Error() {
  return (
    <div>
      <Navbar />
      <h2>Ouch... something went wrong</h2>
      <img className="broken-beer" src={brokenBeer} alt="error_image" />
    </div>
  );
}

export default Error;
