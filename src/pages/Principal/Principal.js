import "./Principal.css";
import bgVideo from "../../assets/green.mp4";
const Home = () => {
  return (
    <div className="main">
      <video src={bgVideo} loop autoPlay muted />
      <div className="content">
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
          Ya conoces nuestros <br></br> servicios?
        </h1>
        <br />
        <p style={{ fontSize: "25px" }}>
          Te ofrecemos servicios especializados de internet <br /> dedicado
          empresarial y/o corporativo
        </p>

          <button className="btn btn-primary" style={{width:"200px", backgroundColor:"white", color:"#102E5C", borderRadius:"10px" , fontWeight:"bold"}}>Más Información</button>
      </div>
    </div>
  );
};
export default Home;
