import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url('/src/front/img/diagrama.jpg')`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      </div>

      <h1>Introducción</h1>

      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-8 text-justify">
            <p>
              El parque, como un espacio de integración social que desempeña un
              rol esencial en el bienestar de las comunidades aledañas. En un
              esfuerzo por explorar y potenciar este impacto, hemos desarrollado
              una plataforma web que presenta los resultados de un detallado
              levantamiento de nube de puntos del parque, utilizando tecnologías
              avanzadas de visualización y modelado en 3D. Este proyecto no solo
              se centra en la representación visual, sino en la creación de un
              puente entre los datos técnicos y las comunidades que interactúan
              con el territorio.
            </p>
            <p>
              La web tiene como fin mostrar la interoperabilidad entre
              diferentes softwares especializados, tales como{" "}
              <a href="https://www.danielgm.net/cc/" target="_blank">
                Cloud Compare
              </a>
              ,{" "}
              <a href="https://www.rhino3d.com/" target="_blank">
                Rhinoceros
              </a>
              ,{" "}
              <a href="https://leafletjs.com/" target="_blank">
                Leaflet
              </a>
              ,{" "}
              <a href="https://ellipsis-drive.com/" target="_blank">
                Ellipse Drive
              </a>{" "}
              y{" "}
              <a href="https://speckle.systems/" target="_blank">
                Speckle
              </a>
              , y cómo cada uno contribuye al proceso de visualización, análisis
              y vinculación territorial. Cloud Compare permite la gestión y
              procesamiento de la nube de puntos, proporcionando una base sólida
              para la generación de modelos precisos. Rhinoceros, con su
              capacidad para el modelado 3D, facilita la creación de
              representaciones volumetricas detalladas y manipulables del
              parque, que pueden ser exploradas desde múltiples perspectivas.
              Leaflet, por su parte, integra estas visualizaciones en un entorno
              geoespacial interactivo, permitiendo una navegación intuitiva y
              accesible para los usuarios.
            </p>
            <p>
              La elección de Speckle y Ellipse Drive se enfoca en la
              colaboración y la retroalimentación. Speckle posibilita la
              compartición de datos de manera fluida entre equipos
              multidisciplinarios, facilitando la colaboración en tiempo real y
              el acceso a diferentes versiones del modelo. Ellipse Drive se
              convierte en la herramienta clave para la organización y gestión
              de los archivos, garantizando que toda la información esté al
              alcance de las partes interesadas. Todas estas plataformas se
              integran y funcionan conjuntamente haciendo uso de tecnologías y
              lenguajes de programación como HTML, CSS, Bootstrap, JavaScript,
              React y Flux, que permiten una interacción dinámica y flexible con
              los datos.
            </p>
            <p>
              En resumen, esta plataforma no solo es una vitrina de las
              capacidades técnicas avanzadas en el campo de la geografía social
              y la arquitectura, sino también una herramienta para fortalecer la
              relación entre las comunidades y su territorio. Al utilizar
              tecnologías digitales para representar y explorar el parque, se
              abre un espacio para la participación ciudadana, la educación y la
              colaboración. Este sitio web es un primer borrador y un trabajo en
              progreso, diseñado con la intención de que otros profesionales
              puedan contribuir a su desarrollo continuo, aportando nuevas ideas
              y mejoras al código y a la construcción del mismo.
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
