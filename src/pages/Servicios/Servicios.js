import bgVideo from "../../assets/aqua.mp4";
import "./Servicios.css";
import "./responsive.css";
import Card from "../../Components/Card/Card";
import antena from '../../assets/Images/antenas-telefonia-telecomunicaciones (1).jpg'
import movil from '../../assets/Images/asia-telefonia-movil-blockchain.jpeg'
import dataCenter from '../../assets/Images/Data-Center-.jpg'
import internet from '../../assets/Images/Internet.webp'

const Services = () => {
  return (
    <div>
      <div className="container">
        <video
          src={bgVideo}
          loop
          autoPlay
          muted
          style={{ height: "700px" }}
        ></video>
        <h1>Servicios</h1>
        <div id="content1">
          <Card imagen={internet} titulo={"Internet"} descripcion={"Mejoramos la seguridad de tu empresa con una conexion interna"}/>
        </div>
        <div id="content2">
          <Card imagen={antena} titulo={"VPN"} descripcion={"Mejoramos la seguridad de tu empresa con una conexion interna"} />
        </div>
        <div id="content3">
          <Card imagen={dataCenter} titulo={"Administrados" } descripcion={"Nos encargamos de tus servicios con personal especializado "}/>
        </div>
        <div id="content4">
          <Card imagen={movil} titulo={"Telefonia IP"} descripcion={"Logra una comunicacion efectiva sobre internet en tu negocio"} />
        </div>
      </div>
      ////////////////FOOTER////////////////////
    </div>
  );
};
export default Services;
