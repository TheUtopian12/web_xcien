import React from "react";
import InternetCard from "../../Components/InternetCard/InternetCard";
import "./InternetServices.css";
const InternetServices = () => {
  return (
    <div className="container1">
      <div id="contentText">
        <h3>Servicios de Internet</h3>
        <br />
        <p style={{ color: "white", fontSize: "20px" }}>
          <strong>Alta velocidad</strong>
          <br />
          Velocidad garantizada con una conexión de internet <br /> sin
          sobresuscripción, planes disponibles hasta 1 GB.
        </p>

        <br />
        <p style={{ color: "white", fontSize: "20px" }}>
          <strong>Seguridad y productividad</strong>
          <br />
          Mayor rendimiento del equipo de trabajo con un <br /> internet seguro
          (internet+firewall).
        </p>
        <br />
        <p style={{ color: "white", fontSize: "20px" }}>
          <strong>Flexibilidad</strong>
          <br />
          Planes personalizados de acuerdo a tus necesidades,
          <br /> nos adaptamos a tu crecimiento. .
        </p>

        <br />
        <p style={{ color: "white", fontSize: "20px" }}>
          <strong>Alta disponibilidad</strong>
          <br />
          Aseguramos la continuidad de tu negocio.
        </p>

        <br />
        <p style={{ color: "white", fontSize: "20px" }}>
          <strong>End to end</strong>
          <br />
          Despreocúpate, nos encargamos de todo. <br />
          Complementa tu servicio con nuestras soluciones <br />
          (wifi, firewall, orquestador de redes, G suite, telefonía , entre
          otros).
        </p>

        <br />
        <p style={{ color: "white", fontSize: "20px" }}>
          <strong>Soporte técnico</strong>
          <br />
          Asistencia personalizada, solucionamos tu problema al momento.
        </p>
      </div>
      <div id="contentCards">
        <InternetCard
          titulo={"Internet Dedicado"}
          url={
            "https://www.escueladeinternet.com/wp-content/uploads/2014/08/Imatge_Nominalia-Office-365-300x255.jpg"
          }
        />
        <br />
        <InternetCard
          titulo={"INTERNET MYPE"}
          url={
            "https://mypes.pe/sites/default/files/styles/1_columna_lg/public/2018-05/imagen-editada-5.jpg?itok=n7k9BbuE"
          }
        />
        <br />
        <InternetCard
          titulo={"INTERNET RESIDENCIAL PLUS"}
          url={
            "https://d500.epimg.net/cincodias/imagenes/2016/05/01/lifestyle/1462107416_170521_1462107510_noticia_normal.jpg"
          }
        />
        <br />
        <InternetCard
          titulo={"INTERNET PARA EVENTOS"}
          url={
            "https://zsf2bmwpkpm0.cdn.shift8web.ca/wp-content/uploads/2020/12/internet-para-eventos-1.jpg"
          }
        />

<InternetCard
          titulo={"Prueba"}
          url={
            "https://zsf2bmwpkpm0.cdn.shift8web.ca/wp-content/uploads/2020/12/internet-para-eventos-1.jpg"
          }
        />
        


        
      </div>
    </div>
  );
};

export default InternetServices;
