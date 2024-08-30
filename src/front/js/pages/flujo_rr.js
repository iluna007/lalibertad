import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flujo_rr = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5" style={{ height: "100vh" }}>
      <h1>RHINOCEROS + RHINOLANDS</h1>

      <div className="container text-center">
        <div className="col">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse38"
                  aria-expanded="false"
                  aria-controls="flush-collapse38"
                >
                  Paso 1: Importar el Mesh desde CloudCompare
                </button>
              </h2>
              <div
                id="flush-collapse38"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Abre Rhino y selecciona `Archivo > Importar`. Elige el
                          archivo `.obj` o `.ply` exportado desde CloudCompare.
                          Asegúrate de que las unidades y la escala sean
                          correctas para comenzar a trabajar con el mesh en el
                          entorno de Rhino.
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
                  data-bs-target="#flush-collapse39"
                  aria-expanded="false"
                  aria-controls="flush-collapse39"
                >
                  Paso 2: Verificación y Limpieza del Mesh
                </button>
              </h2>
              <div
                id="flush-collapse39"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Revisa el mesh importado para detectar cualquier error
                          o irregularidad. Usa herramientas como `RebuildMesh`
                          para simplificar el mesh si es necesario. Asegúrate de
                          que no hay duplicados o triángulos mal formados antes
                          de proceder a la extracción de puntos.
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
                  data-bs-target="#flush-collapse40"
                  aria-expanded="false"
                  aria-controls="flush-collapse40"
                >
                  Paso 3: Extracción de Puntos del Mesh
                </button>
              </h2>
              <div
                id="flush-collapse40"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Selecciona el mesh y usa el comando `ExtractPt` para
                          extraer los puntos del mesh. Los puntos resultantes se
                          convertirán en una nube de puntos lista para ser
                          manipulada en RhinoLands.
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
                  data-bs-target="#flush-collapse41"
                  aria-expanded="false"
                  aria-controls="flush-collapse41"
                >
                  Paso 4: Preparación de la Nube de Puntos para RhinoLands
                </button>
              </h2>
              <div
                id="flush-collapse41"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Organiza los puntos extraídos en capas o grupos si es
                          necesario para facilitar su manipulación. Asegúrate de
                          que la nube de puntos esté limpia y lista para ser
                          modelada en RhinoLands, sin puntos duplicados o fuera
                          de lugar.
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
                  data-bs-target="#flush-collapse42"
                  aria-expanded="false"
                  aria-controls="flush-collapse42"
                >
                  Paso 5: Modelado y Subdivisión en RhinoLands
                </button>
              </h2>
              <div
                id="flush-collapse42"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Abre RhinoLands e importa la nube de puntos. Utiliza
                          las herramientas de RhinoLands para modelar y
                          subdividir la topografía según las necesidades del
                          proyecto. Asegúrate de que el modelo resultante sea
                          preciso y esté listo para las etapas posteriores de
                          diseño.
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
    </div>
  );
};
