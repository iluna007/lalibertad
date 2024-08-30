import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flujo_cc = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5" style={{ height: "100vh" }}>
      <h1>CLOUD COMPARE</h1>

      <div className="container text-center">
        <div className="row">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse27"
                  aria-expanded="false"
                  aria-controls="flush-collapse27"
                >
                  Paso 1: Cargar la Nube de Puntos en CloudCompare
                </button>
              </h2>
              <div
                id="flush-collapse27"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Abre CloudCompare y carga la nube de puntos en formato
                          `.las` o `.laz`. Ve a `Archivo > Abrir`, selecciona el
                          archivo y asegúrate de que la nube de puntos se
                          visualiza correctamente.
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
                  data-bs-target="#flush-collapse28"
                  aria-expanded="false"
                  aria-controls="flush-collapse28"
                >
                  Paso 2: Aplicar Filtro de Simulación de Tela (CSF)
                </button>
              </h2>
              <div
                id="flush-collapse28"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Selecciona la nube de puntos y ve a `Plugins > CSF
                          Filter`. Configura los parámetros, selecciona `Relief`
                          y activa `Slope processing`. Haz clic en `OK` para
                          aplicar el filtro, lo que creará dos nuevas nubes de
                          puntos: suelo (`ground points`) y no suelo
                          (`off-ground points`).
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
                  data-bs-target="#flush-collapse29"
                  aria-expanded="false"
                  aria-controls="flush-collapse29"
                >
                  Paso 3: Corrección Manual de la Separación
                </button>
              </h2>
              <div
                id="flush-collapse29"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Selecciona la nube de puntos `off-ground points` y
                          utiliza la herramienta de segmentación (`Segment
                          tool`) para corregir manualmente áreas mal
                          clasificadas. Fusiona las nubes corregidas con la nube
                          de puntos del suelo (`ground points`) usando la
                          herramienta de `Merge`.
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
                  data-bs-target="#flush-collapse30"
                  aria-expanded="false"
                  aria-controls="flush-collapse30"
                >
                  Paso 4: Simplificación de la Nube de Puntos
                </button>
              </h2>
              <div
                id="flush-collapse30"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Selecciona la nube de puntos combinada y aplica un
                          submuestreo (`Edit > Subsample`) para reducir la
                          densidad de la nube de puntos, ajustando la cantidad
                          de puntos según las necesidades del proyecto.
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
                  data-bs-target="#flush-collapse31"
                  aria-expanded="false"
                  aria-controls="flush-collapse31"
                >
                  Paso 5: Exportar a Rhino
                </button>
              </h2>
              <div
                id="flush-collapse31"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Guarda la nube de puntos simplificada en formato
                          `.obj` o `.ply`. Luego, importa este archivo en Rhino
                          (`Archivo > Importar`) y verifica la escala y
                          orientación para comenzar a trabajar en el modelo 3D.
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
                  data-bs-target="#flush-collapse32"
                  aria-expanded="false"
                  aria-controls="flush-collapse32"
                >
                  Paso 6: Generar un Mesh para Rhino
                </button>
              </h2>
              <div
                id="flush-collapse32"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Selecciona la nube de puntos en CloudCompare y ve a
                          `Edit > Mesh > Delaunay 2.5D (Best fitting plane)`
                          para generar un mesh. Simplifica el mesh si es
                          necesario y expórtalo en formato `.obj` o `.ply`.
                          Luego, importa el mesh en Rhino y verifica su
                          integridad para continuar con el trabajo de modelado.
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
