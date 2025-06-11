<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <p class="mb-5" data-aos="fade-right">
        En el ámbito de la estadística aplicada, la correcta organización de la
        muestra de datos siguiendo metodologías estadísticas debe asegurar que
        el análisis sea representativo, preciso y relevante. La estructura de
        los datos recolectados y la aplicación de técnicas estadísticas
        adecuadas son determinantes en la interpretación de resultados, puesto
        que una muestra desorganizada o sin criterios claros puede llevar a
        conclusiones imprecisas o sesgadas.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/1.png" alt="" />
        </div>
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div class="p-4 h-100" style="background-color: #e2f4f9 ">
            <p class="mb-0">
              <span class="color-secundario"
                >¿Cómo se organiza una muestra de datos para garantizar la
                coherencia y utilidad en el análisis estadístico?</span
              >
              Este componente formativo profundiza en los principios y
              metodologías para la organización de datos en muestras, explorando
              técnicas de clasificación, agrupación y segmentación de acuerdo
              con el tipo de variable y el contexto del estudio. Se abarcarán
              enfoques prácticos que permiten estructurar los datos de manera
              que respalden un análisis eficaz y riguroso.
            </p>
          </div>
        </div>
        <div class="col-lg-5 col-7">
          <img src="@/assets/curso/temas/2.png" alt="" />
        </div>
      </div>
      <p class="mb-5" data-aos="fade-right">
        A lo largo de este componente, el aprendiz desarrollará habilidades para
        organizar muestras de datos de acuerdo con principios estadísticos,
        identificando las mejores prácticas para cada tipo de variable y
        objetivo analítico. Se aprenderán técnicas que optimizan la organización
        de datos y mejoran la precisión y claridad en los resultados
        estadísticos.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10 mb-lg-0 mb-3">
          <div class="tarjeta p-4" style="background-color: #10314b ">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-1 col-3">
                <img src="@/assets/curso/temas/3.svg" alt="" />
              </div>
              <div class="col-lg-11">
                <p class="mb-0 text-white">
                  La organización de la muestra de datos es una etapa
                  indispensable para cualquier análisis exitoso, pues un
                  principio básico en estadística señala que "la exactitud de
                  las conclusiones es tan buena como la calidad de la
                  organización de los datos".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-5 fw-bold" data-aos="fade-right">
        ¡Bienvenido a recorrer este camino por la organización estructurada y
        eficiente de muestras de datos para el análisis estadístico!
      </p>
      <figure>
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/i1nsZvidIFg?si=6nw0aUh-jKN1lSJA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <figcaption>
          Video. Organización de la muestra de datos de acuerdo a las
          metodologías estadísticas
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
