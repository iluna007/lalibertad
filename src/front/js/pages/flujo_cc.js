import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flujo_cc = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5" style={{ height: "100%" }}>
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
                  <div className="container text-justify">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-8 text-justify">
                        <p>
                          Abre CloudCompare y carga la nube de puntos en formato
                          `.las` o `.laz`. Ve a `Archivo > Abrir`, selecciona el
                          archivo y asegúrate de que la nube de puntos se
                          visualiza correctamente.
                          <div className="embed-responsive embed-responsive-4by3">
                            <iframe
                              className="embed-responsive-item"
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/QMm10_amcI0?si=lq5_Jo3z-ThtoYMB"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerpolicy="strict-origin-when-cross-origin"
                              allowfullscreen
                            ></iframe>
                          </div>
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
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/Ep0tkdeAsFA?si=Q6xawq6-ev3Fmnie"
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
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/xa7nA0BntDU?si=3kA9Q8Wvlbbc53xt"
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
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/ydgOtpGB5Ng?si=6ZUGO8g-EB8Wtsnk"
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
                  data-bs-target="#flush-collapse32"
                  aria-expanded="false"
                  aria-controls="flush-collapse32"
                >
                  Paso 5: Generar un Mesh para Rhino
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
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/dY8CADiensI?si=SL07nYGWkYbpedC6"
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
          </div>
        </div>
      </div>
    </div>
  );
};
