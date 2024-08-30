import React, { Component } from "react";

export const flujoweb = () => (
  <div className="container text-center">
    <div className="row">
      <div className="col">
        <h1>Leaflet</h1>
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

      <div className="col">
        <h1>Ellipsis Drive</h1>
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
                Imagen Ráster en Ellipsis Drive - Paso 1: Preparación de la
                Imagen Ráster
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
                        esté en un formato compatible, como{" "}
                        <strong>.tif</strong> (GeoTIFF) o <strong>.jpg</strong>.
                        Verifica las coordenadas geográficas y la proyección de
                        la imagen ráster. Asegúrate de que la imagen tenga la
                        información geoespacial correcta, ya que Ellipsis Drive
                        requiere que los datos estén georreferenciados. Si es
                        necesario, reproyecta la imagen ráster utilizando
                        software GIS como QGIS o ArcGIS para asegurarte de que
                        la proyección esté correcta.
                      </p>
                      <img
                        src="../../img/ellipsis/ellipsis1.png"
                        className="img-thumbnail"
                        alt="text"
                      />
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
                Imagen Ráster en Ellipsis Drive - Paso 2: Crear una Cuenta en
                Ellipsis Drive
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
                Imagen Ráster en Ellipsis Drive - Paso 3: Crear un Nuevo
                Proyecto
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
                Imagen Ráster en Ellipsis Drive - Paso 4: Subir la Imagen Ráster
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
                Imagen Ráster en Ellipsis Drive - Paso 5: Verificación de la
                Imagen Ráster
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
                        la imagen ráster dentro del proyecto en Ellipsis Drive.
                        Verifica que la imagen se muestre correctamente en el
                        visor de mapas de Ellipsis Drive, comprobando que esté
                        georreferenciada y proyectada de manera adecuada. Si es
                        necesario, ajusta la visualización utilizando las
                        herramientas que Ellipsis Drive proporciona para
                        modificar parámetros como el brillo, el contraste, o la
                        transparencia de la imagen.
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
                Imagen Ráster en Ellipsis Drive - Paso 6: Publicar y Compartir
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
                Imagen Ráster en Ellipsis Drive - Paso 7: Mantenimiento y
                Actualización
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
                Nube de Puntos en Ellipsis Drive - Paso 1: Preparación de la
                Nube de Puntos
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
                Nube de Puntos en Ellipsis Drive - Paso 2: Crear una Cuenta en
                Ellipsis Drive
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
                Nube de Puntos en Ellipsis Drive - Paso 3: Crear un Nuevo
                Proyecto
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
                Nube de Puntos en Ellipsis Drive - Paso 4: Subir la Nube de
                Puntos
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
                Nube de Puntos en Ellipsis Drive - Paso 5: Verificación de la
                Nube de Puntos
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
                        la nube de puntos dentro del proyecto en Ellipsis Drive.
                        Verifica que la nube de puntos se muestre correctamente
                        en el visor 3D de Ellipsis Drive. Asegúrate de que los
                        puntos estén en las ubicaciones correctas y de que no
                        haya problemas de visualización. Utiliza las
                        herramientas de Ellipsis Drive para explorar la nube de
                        puntos, ajustar la visualización, y verificar que todos
                        los datos se hayan cargado correctamente.
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
                Nube de Puntos en Ellipsis Drive - Paso 6: Publicar y Compartir
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
                Nube de Puntos en Ellipsis Drive - Paso 7: Mantenimiento y
                Actualización
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

      <div className="col">
        <h1>Speckle</h1>
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
  </div>
);

export default flujoweb;
