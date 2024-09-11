import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flujo_web_ellipsis = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5" style={{ height: "100%" }}>
      <h1>ELLIPSIS</h1>

      <div className="container text-center">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse8"
                aria-expanded="false"
                aria-controls="flush-collapse8"
              >
                Imagen Ráster - Paso 1: Preparación de la Imagen Ráster
              </button>
            </h2>
            <div
              id="flush-collapse8"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Asegúrate de que la imagen ráster que deseas integrar
                        esté en un formato compatible. Verifica las coordenadas
                        geográficas y la proyección de la imagen ráster.
                        Asegúrate de que la imagen tenga la información
                        geoespacial correcta, ya que Ellipsis Drive requiere que
                        los datos estén georreferenciados. Si es necesario,
                        reproyecta la imagen ráster utilizando software GIS como
                        QGIS o ArcGIS para asegurarte de que la proyección esté
                        correcta.
                      </p>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3lE7MJRB5rE?si=D_FMPuypIO8MIUOj"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                      s
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
                data-bs-target="#flush-collapse9"
                aria-expanded="false"
                aria-controls="flush-collapse9"
              >
                Imagen Ráster - Paso 2: Crear una Cuenta en Ellipsis Drive
              </button>
            </h2>
            <div
              id="flush-collapse9"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Accede a{" "}
                        <a href="https://ellipsis-drive.com/" target="_blank">
                          Ellipsis Drive
                        </a>{" "}
                        y crea una cuenta si aún no tienes una. Inicia sesión en
                        tu cuenta para acceder al tablero de Ellipsis Drive.
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
                data-bs-target="#flush-collapse10"
                aria-expanded="false"
                aria-controls="flush-collapse10"
              >
                Imagen Ráster - Paso 3: Crear un Nuevo Proyecto
              </button>
            </h2>
            <div
              id="flush-collapse10"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Dentro del tablero, selecciona la opción para crear un
                        nuevo proyecto. Asigna un nombre al proyecto que sea
                        descriptivo para la imagen ráster que estás integrando.
                        Configura los parámetros básicos del proyecto, como la
                        proyección y el sistema de coordenadas, si es necesario.
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
                data-bs-target="#flush-collapse11"
                aria-expanded="false"
                aria-controls="flush-collapse11"
              >
                Imagen Ráster - Paso 4: Subir la Imagen Ráster
              </button>
            </h2>
            <div
              id="flush-collapse11"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        En el proyecto creado, selecciona la opción para subir
                        un nuevo archivo. Arrastra y suelta la imagen ráster o
                        usa el botón de búsqueda para seleccionar el archivo
                        desde tu ordenador. Configura las opciones de carga,
                        como la escala o la resolución deseada, si Ellipsis
                        Drive lo permite. Inicia la carga del archivo y espera a
                        que el proceso se complete. Esto puede tomar tiempo
                        dependiendo del tamaño del archivo y de la velocidad de
                        tu conexión a internet.
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
                data-bs-target="#flush-collapse12"
                aria-expanded="false"
                aria-controls="flush-collapse12"
              >
                Imagen Ráster - Paso 5: Verificación de la Imagen Ráster
              </button>
            </h2>
            <div
              id="flush-collapse12"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Una vez completada la carga, navega hasta el archivo de
                        la imagen ráster dentro del proyecto . Verifica que la
                        imagen se muestre correctamente en el visor de mapas de
                        Ellipsis Drive, comprobando que esté georreferenciada y
                        proyectada de manera adecuada. Si es necesario, ajusta
                        la visualización utilizando las herramientas que
                        Ellipsis Drive proporciona para modificar parámetros
                        como el brillo, el contraste, o la transparencia de la
                        imagen.
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
                data-bs-target="#flush-collapse13"
                aria-expanded="false"
                aria-controls="flush-collapse13"
              >
                Imagen Ráster - Paso 6: Publicar y Compartir
              </button>
            </h2>
            <div
              id="flush-collapse13"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Si deseas compartir la imagen ráster, selecciona las
                        opciones de compartir dentro del proyecto. Configura los
                        permisos de acceso, determinando si otros usuarios
                        pueden visualizar, editar o descargar la imagen. Genera
                        un enlace de acceso público o privado que puedas
                        compartir con otros colaboradores o clientes.
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
                data-bs-target="#flush-collapse14"
                aria-expanded="false"
                aria-controls="flush-collapse14"
              >
                Imagen Ráster - Paso 7: Mantenimiento y Actualización
              </button>
            </h2>
            <div
              id="flush-collapse14"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Monitorea el rendimiento de la imagen ráster en el
                        proyecto para asegurarte de que se cargue correctamente
                        en todas las visualizaciones. Si necesitas actualizar la
                        imagen, sube una nueva versión siguiendo los mismos
                        pasos y asegúrate de eliminar versiones anteriores si ya
                        no son necesarias.
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
                data-bs-target="#flush-collapse15"
                aria-expanded="false"
                aria-controls="flush-collapse15"
              >
                Nube de Puntos - Paso 1: Preparación de la Nube de Puntos
              </button>
            </h2>
            <div
              id="flush-collapse15"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Asegúrate de que la nube de puntos que deseas integrar
                        esté en un formato compatible, como{" "}
                        <strong>.las</strong>, <strong>.laz</strong>, o{" "}
                        <strong>.e57</strong>. Verifica que la nube de puntos
                        esté georreferenciada con las coordenadas geográficas
                        correctas. Si no está georreferenciada, utiliza software
                        especializado como CloudCompare o cualquier GIS para
                        corregirlo. Si es necesario, reduce la resolución de la
                        nube de puntos o subdivídela en partes más manejables
                        utilizando herramientas como CloudCompare, especialmente
                        si se trata de un archivo muy grande.
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
                data-bs-target="#flush-collapse16"
                aria-expanded="false"
                aria-controls="flush-collapse16"
              >
                Nube de Puntos - Paso 2: Crear una Cuenta en Ellipsis Drive
              </button>
            </h2>
            <div
              id="flush-collapse16"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Accede a{" "}
                        <a href="https://ellipsis-drive.com/" target="_blank">
                          Ellipsis Drive
                        </a>{" "}
                        y crea una cuenta si aún no tienes una. Inicia sesión en
                        tu cuenta para acceder al tablero de Ellipsis Drive.
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
                data-bs-target="#flush-collapse17"
                aria-expanded="false"
                aria-controls="flush-collapse17"
              >
                Nube de Puntos - Paso 3: Crear un Nuevo Proyecto
              </button>
            </h2>
            <div
              id="flush-collapse17"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Dentro del tablero, selecciona la opción para crear un
                        nuevo proyecto. Asigna un nombre al proyecto que sea
                        descriptivo para la nube de puntos que estás integrando.
                        Configura los parámetros básicos del proyecto, como la
                        proyección y el sistema de coordenadas, si es necesario.
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
                data-bs-target="#flush-collapse18"
                aria-expanded="false"
                aria-controls="flush-collapse18"
              >
                Nube de Puntos - Paso 4: Subir la Nube de Puntos
              </button>
            </h2>
            <div
              id="flush-collapse18"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        En el proyecto creado, selecciona la opción para subir
                        un nuevo archivo. Arrastra y suelta el archivo de la
                        nube de puntos o utiliza el botón de búsqueda para
                        seleccionar el archivo desde tu ordenador. Configura las
                        opciones de carga según lo permita Ellipsis Drive, como
                        la resolución o la compresión de los datos. Inicia la
                        carga del archivo y espera a que el proceso se complete.
                        Esto puede tomar tiempo dependiendo del tamaño del
                        archivo y de la velocidad de tu conexión a internet.
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
                data-bs-target="#flush-collapse19"
                aria-expanded="false"
                aria-controls="flush-collapse19"
              >
                Nube de Puntos - Paso 5: Verificación de la Nube de Puntos
              </button>
            </h2>
            <div
              id="flush-collapse19"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Una vez completada la carga, navega hasta el archivo de
                        la nube de puntos dentro del proyecto . Verifica que la
                        nube de puntos se muestre correctamente en el visor 3D
                        de Ellipsis Drive. Asegúrate de que los puntos estén en
                        las ubicaciones correctas y de que no haya problemas de
                        visualización. Utiliza las herramientas de Ellipsis
                        Drive para explorar la nube de puntos, ajustar la
                        visualización, y verificar que todos los datos se hayan
                        cargado correctamente.
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
                data-bs-target="#flush-collapse20"
                aria-expanded="false"
                aria-controls="flush-collapse20"
              >
                Nube de Puntos - Paso 6: Publicar y Compartir
              </button>
            </h2>
            <div
              id="flush-collapse20"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Si deseas compartir la nube de puntos, selecciona las
                        opciones de compartir dentro del proyecto. Configura los
                        permisos de acceso, determinando si otros usuarios
                        pueden visualizar, editar o descargar la nube de puntos.
                        Genera un enlace de acceso público o privado que puedas
                        compartir con otros colaboradores o clientes.
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
                data-bs-target="#flush-collapse21"
                aria-expanded="false"
                aria-controls="flush-collapse21"
              >
                Nube de Puntos - Paso 7: Mantenimiento y Actualización
              </button>
            </h2>
            <div
              id="flush-collapse21"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8 text-justify">
                      <p>
                        Monitorea el rendimiento de la nube de puntos en el
                        proyecto para asegurarte de que se cargue y visualice
                        correctamente en todas las sesiones. Si necesitas
                        actualizar la nube de puntos, sube una nueva versión
                        siguiendo los mismos pasos y asegúrate de eliminar
                        versiones anteriores si ya no son necesarias.
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
