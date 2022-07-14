import bgVideo from "../../assets/aqua.mp4";
import "./Servicios.css";
import Card from "../../Components/Card/Card";
const Services = () => {
  return (
    <div className="main">
      <video src={bgVideo} loop autoPlay muted style={{ height: "700px" }} />
      <div className="content2">
    
        <h1>Servicios</h1>

        <Card />
        
      </div>
    </div>
  );
};
export default Services;
