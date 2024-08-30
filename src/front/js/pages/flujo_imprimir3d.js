import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flujo_imprimir3d = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5" style={{ height: "100vh" }}>
      <h1>IMPRIMIR 3D</h1>

      <div className="container text-center">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse43"
                aria-expanded="false"
                aria-controls="flush-collapse43"
              >
                Paso 1: Generación del Terreno en RhinoLands
              </button>
            </h2>
            <div
              id="flush-collapse43"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Abre RhinoLands y carga la nube de puntos que preparaste
                        en los pasos anteriores. Utiliza las herramientas de
                        RhinoLands para generar un terreno a partir de la nube
                        de puntos, asegurándote de que la topografía resultante
                        es precisa y que representa fielmente los datos
                        originales.
                      </p>
                      <p>
                        Una vez generado el terreno, realiza una revisión visual
                        para asegurarte de que no existen irregularidades o
                        errores en la topografía. Ajusta los parámetros de
                        RhinoLands si es necesario para mejorar la calidad del
                        terreno generado.
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
                data-bs-target="#flush-collapse44"
                aria-expanded="false"
                aria-controls="flush-collapse44"
              >
                Paso 2: Subdivisión del Terreno para Impresión
              </button>
            </h2>
            <div
              id="flush-collapse44"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Con el terreno generado seleccionado, usa el comando
                        `Contour` para crear líneas de contorno que subdividan
                        el terreno en secciones más pequeñas. Define la
                        distancia entre las líneas de contorno según el tamaño
                        máximo que tu impresora 3D puede manejar.
                      </p>
                      <p>
                        Luego, utiliza el comando `Split` para dividir el
                        terreno a lo largo de estas líneas de contorno, creando
                        las distintas secciones que se imprimirán
                        individualmente. Asegúrate de que cada sección tiene la
                        escala y dimensiones adecuadas para ser impresa en tu
                        dispositivo.
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
                data-bs-target="#flush-collapse45"
                aria-expanded="false"
                aria-controls="flush-collapse45"
              >
                Paso 3: Preparación de Cada Subdivisión con ShrinkWrap
              </button>
            </h2>
            <div
              id="flush-collapse45"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Selecciona una de las subdivisiones del terreno que
                        creaste en el paso anterior. Asegúrate de que la
                        superficie está limpia y no tiene irregularidades que
                        puedan causar problemas en la impresión.
                      </p>
                      <p>
                        Usa el comando `ShrinkWrap` en Rhino para crear una
                        envolvente ajustada alrededor de la subdivisión del
                        terreno. Este comando genera una malla que sigue la
                        superficie exterior del objeto, reduciendo la
                        complejidad del modelo y optimizando la geometría para
                        la impresión 3D.
                      </p>
                      <p>
                        Ajusta los parámetros de `ShrinkWrap` para obtener el
                        mejor balance entre detalle y simplicidad, dependiendo
                        de las capacidades de tu impresora 3D y los requisitos
                        del proyecto. Repite este proceso para cada una de las
                        subdivisiones del terreno.
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
                data-bs-target="#flush-collapse46"
                aria-expanded="false"
                aria-controls="flush-collapse46"
              >
                Paso 4: Verificación y Ajustes Finales
              </button>
            </h2>
            <div
              id="flush-collapse46"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Después de aplicar `ShrinkWrap` a todas las
                        subdivisiones, revisa cada una de ellas para asegurarte
                        de que la malla es continua y no tiene agujeros o
                        imperfecciones que puedan afectar la impresión. Utiliza
                        herramientas de visualización como `Shade` y `Wireframe`
                        para inspeccionar detalladamente cada sección.
                      </p>
                      <p>
                        Realiza cualquier ajuste necesario, como el suavizado de
                        bordes o la eliminación de vértices innecesarios, para
                        garantizar que las subdivisiones estén listas para ser
                        impresas. Asegúrate de que cada sección encaje bien con
                        las adyacentes, lo que facilitará el ensamblaje después
                        de la impresión.
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
                data-bs-target="#flush-collapse47"
                aria-expanded="false"
                aria-controls="flush-collapse47"
              >
                Paso 5: Exportación para Impresión 3D
              </button>
            </h2>
            <div
              id="flush-collapse47"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Una vez que todas las subdivisiones estén listas,
                        exporta cada una en formato `.stl`, que es el estándar
                        para la impresión 3D. Ve a `Archivo > Exportar
                        Selección`, selecciona el formato `.stl`, y guarda cada
                        subdivisión con un nombre descriptivo que indique su
                        posición o número de parte.
                      </p>
                      <p>
                        Antes de proceder a la impresión, revisa los archivos
                        `.stl` en un software de preimpresión 3D (como Cura,
                        PrusaSlicer, o Meshmixer) para asegurarte de que no haya
                        errores y de que las dimensiones sean correctas. Ajusta
                        los parámetros de impresión según sea necesario y
                        prepara los archivos para el proceso de impresión 3D.
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
