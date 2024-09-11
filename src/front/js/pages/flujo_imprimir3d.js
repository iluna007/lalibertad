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
                Paso 1: Creación de Cuadrícula en Rhino
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
                        Definir el Tamaño de los Cuadrantes: Decide el tamaño de
                        cada cuadrante en el que deseas dividir el terreno. Esto
                        dependerá de la escala de impresión y el tamaño total
                        del terreno.{" "}
                      </p>
                      <p>
                        Dibujar la Cuadrícula: Usa el comando Array para crear
                        una cuadrícula sobre el terreno. Primero, dibuja una
                        línea que representará el ancho de la cuadrícula.{" "}
                      </p>
                      <p>
                        Luego, usa el comando Array para replicar esta línea a
                        lo largo de la longitud del terreno en la dirección
                        deseada. Repite el proceso para crear una cuadrícula
                        completa en la dirección perpendicular. Comando Array:
                        Línea de Cuadrícula: Dibuja una línea horizontal (o
                        vertical) que será la base de la cuadrícula. Array en
                        Dirección X: Usa Array para replicar la línea horizontal
                        a lo largo del terreno.
                      </p>

                      <p>
                        Especifica el número de copias y la distancia entre
                        ellas. Array en Dirección Y: Dibuja una línea vertical y
                        usa Array para replicarla a lo largo del terreno en la
                        dirección perpendicular a la primera línea.
                      </p>

                      <br />
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Yt_DJfkOIRE?si=ZXhVlLUizECB7R7x"
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
                        Selecciona las lineas creadas y extruye en dirección del
                        eje Z. Luego, selecciona las lineas y utiliza el comando
                        `mesh trim` para cortas el mesh con las superficies
                        creadas con las lineas. De tal forma que el terreno se
                        divida en las secciones deseadas.
                      </p>
                      <p>
                        Selecciona cualquier división del proceso anterior y
                        duplica el contorno del área abierta con el comando
                        `dubBorder`. Una vez seleccionado el contorno duplicado,
                        selecciona la herramienta `Mesh from close curve` para
                        cerrar el contorno. Este comando generará una malla
                        nueva, une esta nueva malla con la malla del terreno.
                      </p>
                      <p>
                        Ahora selecciona las divisiones en el sentido contrario
                        y vuelve a repetir los pasos anteriores.
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

                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/q-vvP2jLsj0?si=yR0r4vfcaj8knwlq"
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
                data-bs-target="#flush-collapse45"
                aria-expanded="false"
                aria-controls="flush-collapse45"
              >
                Paso 3: Automatización del proceso usando Grasshopper
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
                        Para agilizar este proceso y automatizar la subdivisión,
                        puedes utilizar Grasshopper, un plugin de Rhino que
                        permite crear algoritmos visuales para generar y
                        manipular geometría paramétrica. Crea un script en
                        Grasshopper que tome como entrada el terreno y genere
                        automáticamente las subdivisiones y las envolventes
                        ajustadas.
                      </p>
                      <p>
                        Puedes descargar el archivo de Grasshopper en el
                        siguiente enlance:
                        <br />
                        <a
                          href="https://drive.google.com/drive/folders/1WCLHMwIUhuJ0E1LJBk5Kvhhoi0uw7ejY?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Descargar archivo de Grasshopper
                        </a>
                        <br />
                        <a
                          href="https://drive.google.com/drive/folders/1WCLHMwIUhuJ0E1LJBk5Kvhhoi0uw7ejY?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Descargar archivo de Rhino
                        </a>
                      </p>
                      <div className="image-container">
                        <img
                          src="https://i.ibb.co/gv43NNM/gh1.jpg"
                          alt="Casa"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
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
                      <p>
                        Para esta prueba se utilizó una impresora Ultimaker 3
                        Extended y se tardo 4hrs con 50 minutos en imprimir.
                        Utilizando 121 gramos de filamento de 1.75mm.
                      </p>
                      <p>
                        La recomendación del laboratio de fabricación digital de
                        la EAQ es que, en caso de proceder con los demas 46
                        cuadrantes bajo el mismo protocol, se realice la compra
                        de los filamentos (15 unidades de 1Kg) directamente con
                        su{" "}
                        <a
                          href="https://dgtalic.com/categoria-producto/filamentos-todos/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          proveedor
                        </a>{" "}
                        de confianza.
                      </p>

                      <div class="container text-center">
                        <div class="row">
                          <div class="col">
                            <div className="image-container">
                              <img
                                src="https://i.ibb.co/djWkkgQ/g1.gif"
                                alt="impresión3d"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div className="image-container">
                              <img
                                src="https://i.ibb.co/bJyfmCt/g2.gif"
                                alt="impresión3d"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <br></br>
                        <div class="row">
                          <div class="col">
                            <div className="image-container">
                              <img
                                src="https://i.ibb.co/QJftDnb/proceso-2.jpg"
                                alt="impresión3d"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div className="image-container">
                              <img
                                src="https://i.ibb.co/hCx3t9B/proceso-4.jpg"
                                alt="impresión3d"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div className="image-container">
                              <img
                                src="https://i.ibb.co/1JLpJ4d/proceso-3.jpg"
                                alt="impresión3d"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
