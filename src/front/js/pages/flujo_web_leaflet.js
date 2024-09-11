import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flujo_web_leaflet = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5" style={{ height: "100vh" }}>
      <h1>LEAFLET</h1>

      <div className="container text-center">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse1"
                aria-expanded="false"
                aria-controls="flush-collapse1"
              >
                Paso 1: Configurar el Entorno de Desarrollo
              </button>
            </h2>
            <div
              id="flush-collapse1"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Asegúrate de tener un entorno de desarrollo React
                        configurado. Si aún no lo has hecho, puedes crear un
                        nuevo proyecto de React utilizando el comando{" "}
                        <code>npx create-react-app nombre-del-proyecto</code>.
                        Instala las dependencias necesarias:
                      </p>
                      <ul>
                        <li>
                          Instala <strong>Leaflet</strong> utilizando el comando{" "}
                          <code>npm install leaflet</code>.
                        </li>
                        <li>
                          Si aún no tienes <strong>react-leaflet</strong>,
                          puedes instalarlo con{" "}
                          <code>npm install react-leaflet</code>.
                        </li>
                      </ul>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wVnimcQsuwk?si=jMT-H_W2puSzfoWj"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse2"
                aria-expanded="false"
                aria-controls="flush-collapse2"
              >
                Paso 2: Crear el Componente de Mapa
              </button>
            </h2>
            <div
              id="flush-collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Crea un componente nuevo llamado <code>Map_1.js</code>{" "}
                        en la carpeta <code>src</code> de tu proyecto React.
                        Copia el código proporcionado en este componente. Este
                        código inicializa un mapa de Leaflet, establece la vista
                        inicial y añade capas de basemap (mapa base) y de ráster
                        proveniente de Ellipsis Drive.
                      </p>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse3"
                aria-expanded="false"
                aria-controls="flush-collapse3"
              >
                Paso 3: Obtener la URL del Ráster desde Ellipsis Drive
              </button>
            </h2>
            <div
              id="flush-collapse3"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Accede a tu cuenta de Ellipsis Drive y selecciona el
                        proyecto que contiene el ráster que deseas integrar.
                        Genera una URL para la capa ráster:
                      </p>
                      <ul>
                        <li>
                          En Ellipsis Drive, localiza el botón o la opción para
                          "Compartir" el ráster o "Obtener URL".
                        </li>
                        <li>
                          Copia la URL que se genera. Esta URL incluirá
                          parámetros como el <code>path</code>, el{" "}
                          <code>timestamp</code>, y el <code>token</code>, que
                          son necesarios para integrar el ráster en Leaflet.
                        </li>
                      </ul>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse4"
                aria-expanded="false"
                aria-controls="flush-collapse4"
              >
                Paso 4: Integrar el Ráster en el Mapa
              </button>
            </h2>
            <div
              id="flush-collapse4"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Sustituye o añade la capa de ráster en el componente{" "}
                        <code>Map_1.js</code>:
                      </p>
                      <ul>
                        <li>
                          Reemplaza la URL de ejemplo en <code>rgb</code> con la
                          URL del ráster que obtuviste de Ellipsis Drive.
                        </li>
                        <li>
                          Asegúrate de que la URL esté bien formateada y que los
                          parámetros como <code>z</code>, <code>x</code>,{" "}
                          <code>y</code>, y <code>token</code> estén
                          correctamente incluidos.
                        </li>
                      </ul>
                      <p>
                        Asegúrate de que la línea <code>rgb.addTo(map);</code>{" "}
                        esté incluida para que la capa ráster se muestre en el
                        mapa cuando se cargue la página.
                      </p>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse5"
                aria-expanded="false"
                aria-controls="flush-collapse5"
              >
                Paso 5: Configurar Capas y Controles
              </button>
            </h2>
            <div
              id="flush-collapse5"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Configura las capas de base y las superposiciones
                        (overlays) en el mapa:
                      </p>
                      <ul>
                        <li>
                          El código ya incluye un control para cambiar entre
                          diferentes capas de base (<code>baselayers</code>) y
                          superposiciones (<code>overlays</code>).
                        </li>
                        <li>
                          Asegúrate de que el ráster esté correctamente agregado
                          a las <code>overlays</code> bajo la clave{" "}
                          <strong>Raster</strong>.
                        </li>
                      </ul>
                      <p>
                        La línea{" "}
                        <code>{`L.control.layers(baselayers, overlays, { position: "topright" }).addTo(map);`}</code>{" "}
                        añade un control que permite a los usuarios cambiar
                        entre las capas de base y las superposiciones
                        disponibles.
                      </p>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse6"
                aria-expanded="false"
                aria-controls="flush-collapse6"
              >
                Paso 6: Verificar y Personalizar el Mapa
              </button>
            </h2>
            <div
              id="flush-collapse6"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Inicia el servidor de desarrollo utilizando el comando{" "}
                        <code>npm start</code> y abre el mapa en el navegador.
                        Verifica que el ráster se muestre correctamente en el
                        mapa y que las capas de base y las superposiciones
                        funcionen como se espera. Personaliza la apariencia y la
                        funcionalidad del mapa según tus necesidades, ajustando
                        el estilo del ráster, añadiendo más controles, o
                        configurando eventos de mapa.
                      </p>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse7"
                aria-expanded="false"
                aria-controls="flush-collapse7"
              >
                Paso 7: Despliegue y Mantenimiento
              </button>
            </h2>
            <div
              id="flush-collapse7"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Si todo funciona correctamente, despliega tu proyecto en
                        un servidor web para que esté accesible en línea.
                        Realiza actualizaciones periódicas del ráster en
                        Ellipsis Drive y ajusta la URL en el código si es
                        necesario, especialmente si cambia el <code>token</code>{" "}
                        o el <code>timestamp</code>.
                      </p>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
