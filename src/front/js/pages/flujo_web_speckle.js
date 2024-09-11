import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flujo_web_speckle = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5" style={{ height: "100%" }}>
      <h1>SPECKLE</h1>

      <div className="container text-center">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse22"
                aria-expanded="false"
                aria-controls="flush-collapse22"
              >
                Paso 1: Instalación de Speckle Connector en Rhino
              </button>
            </h2>
            <div
              id="flush-collapse22"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Antes de subir tu modelo 3D a Speckle, asegúrate de que
                        tienes instalado el Speckle Connector para Rhino. Puedes
                        descargarlo desde la [página oficial de
                        Speckle](https://speckle.systems/). Sigue las
                        instrucciones de instalación para agregar el conector a
                        Rhino.
                      </p>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/v56nxXBbtfI?si=1zJDu0EkCd18HJO6"
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
                data-bs-target="#flush-collapse23"
                aria-expanded="false"
                aria-controls="flush-collapse23"
              >
                Paso 2: Configuración del Conector Speckle en Rhino
              </button>
            </h2>
            <div
              id="flush-collapse23"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Abre Rhino y ve a la pestaña Speckle. Si es la primera
                        vez que usas el conector, deberás iniciar sesión con tu
                        cuenta de Speckle. Luego, selecciona o crea un nuevo
                        Stream en la plataforma de Speckle, donde se almacenará
                        el modelo 3D.
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
                data-bs-target="#flush-collapse24"
                aria-expanded="false"
                aria-controls="flush-collapse24"
              >
                Paso 3: Envío del Modelo 3D desde Rhino a Speckle
              </button>
            </h2>
            <div
              id="flush-collapse24"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Selecciona los objetos del modelo 3D que deseas enviar a
                        Speckle. Haz clic en el botón Send dentro de la pestaña
                        Speckle en Rhino. Esto subirá el modelo al Stream
                        seleccionado en la plataforma de Speckle, creando una
                        nueva versión del modelo.
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
                data-bs-target="#flush-collapse25"
                aria-expanded="false"
                aria-controls="flush-collapse25"
              >
                Paso 4: Obtener el Enlace para Integrar el Modelo 3D en la Web
              </button>
            </h2>
            <div
              id="flush-collapse25"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Una vez que el modelo esté subido a Speckle, accede a la
                        plataforma web de Speckle y selecciona el Stream y la
                        versión del modelo que acabas de enviar. Busca la opción
                        Share o Embed y copia el código del `iframe` o el enlace
                        público que se generará para integrar el modelo 3D en tu
                        página web.
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
                data-bs-target="#flush-collapse26"
                aria-expanded="false"
                aria-controls="flush-collapse26"
              >
                Paso 5: Integración del Modelo 3D en la Web
              </button>
            </h2>
            <div
              id="flush-collapse26"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        En tu archivo HTML, utiliza la etiqueta `iframe` para
                        incrustar el modelo 3D en tu página web. Pega el enlace
                        o código `iframe` que copiaste de Speckle. Ajusta las
                        dimensiones y otros parámetros según sea necesario para
                        que el modelo se visualice correctamente en la web.
                      </p>
                      <pre>
                        <code>
                          &lt;iframe src="URL_DE_TU_MODELO" width="600"
                          height="400" allowfullscreen&gt;&lt;/iframe&gt;
                        </code>
                      </pre>
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
