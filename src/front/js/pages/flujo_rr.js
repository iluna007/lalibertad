import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flujo_rr = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5" style={{ height: "100vh" }}>
      <h1>RHINOCEROS + RHINOLANDS + GRASSHOPPER</h1>

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
                  Paso 1: Creación de Contornos en CloudCompare
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
                      <div className="col-8 text-centered">
                        <p>
                          Abrir la Nube de Puntos: Inicia CloudCompare y abre el
                          archivo de nube de puntos mediante el menú File > Open
                          o arrastrando el archivo a la ventana principal.
                          Aplicar el Filtro de Rasterización: Selecciona la nube
                          de puntos en el árbol de objetos y accede a Tools >
                          Projection > Rasterize. Ajusta los parámetros del
                          filtro, como el tamaño del raster y la altura del
                          contorno, para definir cómo se generará el contorno.
                          Generar Contornos: Con la nube de puntos rasterizada,
                          ve a Tools > Contour > Extract Contours. Esto
                          convertirá el raster en contornos vectoriales a partir
                          de la nube de puntos. Guardar los Contornos en DXF:
                          Selecciona los contornos generados y utiliza el menú
                          File > Save As. En el diálogo de guardado, elige el
                          formato DXF y guarda el archivo en la ubicación
                          deseada.
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/vgOB0guXii8?si=6q_5tJVTcHT228zW"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
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
                  Paso 2: Importa y agrupa los contornos en Rhino
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
                      <div className="col-8 text-centered">
                        <p>
                          Importar las Líneas de Contorno Guardadas en DXF: En
                          Rhino, abre el archivo DXF que contiene las líneas de
                          contorno mediante el comando Import. Selecciona el
                          archivo DXF y sigue las instrucciones para importar
                          las geometrías a tu modelo de Rhino. Seleccionar y
                          Agrupar las Líneas de Contorno: Una vez importadas las
                          líneas de contorno, selecciona todas las geometrías
                          relevantes. Usa el comando Group para agruparlas en un
                          solo grupo. Esto facilitará el manejo y control de las
                          líneas en el proceso de modelado y análisis.
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/thEQ9_PAzqM?si=wQUc4HQPMxHyRGq0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
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
                  Paso 3: Crea un terreno en RhinoLands
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
                      <div className="col-8 text-centered">
                        <p>
                          Seleccionar las Líneas Vectoriales: En el modelo de
                          Rhino, selecciona todas las líneas vectoriales que
                          representan los contornos del terreno. Usa la
                          herramienta de selección para asegurarte de que todas
                          las líneas necesarias están incluidas. Convertir las
                          Líneas en Superficie: Utiliza el comando Contour en
                          Rhino.Lands para convertir las líneas vectoriales en
                          una superficie. Este comando genera un modelo de
                          superficie a partir de las líneas de contorno
                          seleccionadas. Crear el Modelo de Terreno: Con las
                          líneas vectoriales convertidas en una superficie,
                          utiliza el comando Terrain en Rhino.Lands para generar
                          un modelo de terreno. Esto crea una malla o superficie
                          basada en las líneas de contorno. Ajustar Parámetros
                          del Terreno: Durante el proceso de creación del
                          terreno, puedes ajustar varios parámetros: Resolución:
                          Controla la densidad de la malla para obtener un
                          terreno más detallado o simplificado. Altura: Modifica
                          la altura del terreno para ajustar la precisión del
                          modelo con respecto a la realidad. Suavizado: Aplica
                          opciones de suavizado para mejorar la apariencia del
                          terreno y eliminar irregularidades. Revisar y Ajustar
                          el Terreno: Una vez creado el terreno, revisa el
                          modelo en el espacio 3D. Ajusta la malla o la
                          superficie según sea necesario para obtener una
                          representación precisa del terreno. Observaciones
                          sobre las Opciones en Rhino.Lands: Resolución de la
                          Malla: Puedes seleccionar diferentes niveles de
                          resolución para equilibrar la precisión y el
                          rendimiento. Opciones de Suavizado: Aplicar suavizado
                          puede ayudar a suavizar las transiciones entre las
                          líneas de contorno, creando una superficie más
                          natural. Herramientas de Edición: Rhino.Lands ofrece
                          herramientas para editar la superficie generada, como
                          ajustar la altura y modificar áreas específicas del
                          terreno.
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/1mgW0cb9mJY?si=vD7FlNvM7PwvOcUA"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
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
                  Paso 4: Ajusta el terreno según limites
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
                      <div className="col-8 text-centered">
                        <p>
                          Cortar el Terreno con laTerrainBoundary: Seleccionar
                          el Polígono de Corte: Asegúrate de que el polígono que
                          deseas usar para cortar el terreno esté presente en el
                          modelo de Rhino. Este polígono debe representar el
                          límite deseado para el terreno. Ejecutar el Comando
                          laTerrainBoundary: En Rhino, ingresa el comando
                          laTerrainBoundary en la línea de comandos. Selecciona
                          el terreno generado y luego el polígono de corte. Este
                          comando ajustará el terreno para que se ajuste al área
                          definida por el polígono. Cambiar la Opción de
                          Visualización del Viewport: Acceder al Panel de
                          Edición: Abre el panel de edición de Rhino.Lands y
                          selecciona la pestaña Viewport para ajustar las
                          opciones de visualización. Cambiar a Vista 3D: En el
                          panel de edición, ve a la sección 3D para cambiar la
                          visualización del viewport a una vista en 3D. Esto te
                          permitirá observar el terreno desde diferentes ángulos
                          y evaluar su precisión. Comparar el Terreno con la
                          Nube de Puntos Original: Cargar la Nube de Puntos
                          Original: Asegúrate de que la nube de puntos original
                          esté cargada en el modelo de Rhino. Usa el comando
                          Import si es necesario para cargar el archivo DXF con
                          la nube de puntos. Superponer el Terreno y la Nube de
                          Puntos: Ajusta la visibilidad y los colores del
                          terreno y la nube de puntos para facilitar la
                          comparación. Usa herramientas de visualización para
                          ver ambos modelos en la misma vista 3D. Comparar
                          Visualmente: Examina cómo se alinea el terreno cortado
                          con la nube de puntos original. Verifica que el
                          terreno corresponda con precisión a los datos de la
                          nube de puntos y realiza ajustes si es necesario.
                          Observaciones: Precisión del Corte: Asegúrate de que
                          el polígono de corte esté correctamente posicionado y
                          dimensionado para obtener un terreno que se ajuste
                          bien a la forma deseada. Configuración del Viewport:
                          Ajustar las opciones de visualización en el viewport
                          ayuda a obtener una vista clara del terreno y facilita
                          la comparación con la nube de puntos.
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/NRC5yz16-vk?si=FrxzrFgAziwGJVYL"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                          ></iframe>
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
