<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5 fondo-4">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Técnicas de agrupación de datos</h1>
      </div>
      <div
        id="t_3_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>3.1 Definición de datos agrupados y no agrupados</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 col-8 mb-lg-0 mb-3">
          <div
            class="tarjeta p-4 border-dashed"
            style="background-color: #b0dcae"
          >
            <p class="mb-0">
              <b>Datos no agrupados:</b> son aquellos datos presentados
              individualmente, tal como se recolectan. Cada valor permanece sin
              clasificar, lo cual es útil en conjuntos de datos pequeños o
              cuando es importante mantener el valor exacto de cada observación.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-6 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/48.png" alt="" />
        </div>
        <div class="col-lg-4">
          <div class="col-3">
            <img class="mb-4" src="@/assets/curso/temas/49.svg" alt="" />
          </div>
          <p class="mb-0">
            <b>Datos agrupados:</b> consisten en datos organizados en clases o
            intervalos, lo que reduce el número de categorías a observar y
            permite una visión más clara de las tendencias generales. Este
            método es ideal para grandes volúmenes de datos y facilita la
            creación de tablas de frecuencias y gráficos.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_3_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>3.2 Criterios para agrupar datos</h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        La agrupación de datos debe realizarse de manera coherente, siguiendo
        ciertos criterios para garantizar su eficacia y precisión:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/50.svg" alt="" />
        </div>
        <div class="col-lg-9">
          <div class="p-4 py-3" style="background-color: #10314B">
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    <b>Naturaleza de la variable:</b> las variables
                    cuantitativas continuas se agrupan fácilmente en intervalos,
                    mientras que las variables cualitativas suelen agruparse en
                    categorías definidas.
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    <b>Rango de datos:</b> determinar el rango ayuda a decidir
                    el número de clases o intervalos. El rango se calcula como
                    la diferencia entre el valor máximo y el mínimo en el
                    conjunto de datos.
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    <b>Número de clases:</b> generalmente, se elige entre 5 y 20
                    clases para equilibrar la simplificación con el nivel de
                    detalle.
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    <b>Amplitud de los intervalos:</b> debe ser constante para
                    cada clase en la mayoría de los casos, lo cual facilita la
                    comparación entre intervalos.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_3_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>3.3 Métodos de agrupación de datos cuantitativos</h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Para las variables cuantitativas, las técnicas de agrupación más comunes
        incluyen:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div
            class="tarjeta dots2 p-4 h-100"
            style="background-color: #E2F4F9 "
          >
            <div class="row justify-content-center mb-3">
              <div class="col-4">
                <img src="@/assets/curso/temas/51.svg" alt="AvatarTop" />
              </div>
            </div>
            <div class="d-flex justify-content-center mb-4">
              <div
                class="p-1 px-5 d-inline-block"
                style="background-color: #73c8e2"
              >
                <h4 class="text-center mb-0">Intervalos de clase</h4>
              </div>
            </div>
            <p class="text-center">
              Consiste en dividir el rango de los datos en intervalos de igual
              amplitud. Cada intervalo representa un rango de valores en el
              conjunto de datos.<br /><b>Ejemplo:</b> en un conjunto de edades
              que va de 18 a 60, podríamos definir intervalos de 5 en 5 (18-22,
              23-27, etc.).
            </p>
          </div>
        </div>
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div
            class="tarjeta dots2 p-4 h-100"
            style="background-color: #E2F4F9 "
          >
            <div class="row justify-content-center mb-3">
              <div class="col-4">
                <img src="@/assets/curso/temas/51.svg" alt="AvatarTop" />
              </div>
            </div>
            <div class="d-flex justify-content-center mb-4">
              <div
                class="p-1 px-5 d-inline-block"
                style="background-color: #73c8e2"
              >
                <h4 class="text-center mb-0">
                  Agrupación de datos en frecuencias absolutas y relativas
                </h4>
              </div>
            </div>
            <p class="text-center">
              Se cuenta el número de observaciones en cada intervalo, generando
              una tabla de frecuencias absolutas (número de casos en cada
              intervalo) y una tabla de frecuencias relativas (proporción o
              porcentaje de casos en cada intervalo).
            </p>
          </div>
        </div>
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div
            class="tarjeta dots2 p-4 h-100"
            style="background-color: #E2F4F9 "
          >
            <div class="row justify-content-center mb-3">
              <div class="col-4">
                <img src="@/assets/curso/temas/51.svg" alt="AvatarTop" />
              </div>
            </div>
            <div class="d-flex justify-content-center mb-4">
              <div
                class="p-1 px-5 d-inline-block"
                style="background-color: #73c8e2"
              >
                <h4 class="text-center mb-0">
                  Intervalos de clase no uniformes
                </h4>
              </div>
            </div>
            <p class="text-center">
              A veces se eligen intervalos de distinta amplitud si ciertas
              partes del conjunto de datos requieren mayor detalle. Esto es útil
              en conjuntos con una gran concentración de datos en ciertos
              rangos.
            </p>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_3_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>3.4 Métodos de agrupación de datos cualitativos</h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Para las variables cualitativas, la agrupación se realiza mediante
        categorías o clases que representan cada valor único o grupo de valores
        en los datos. Las técnicas incluyen:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/52.png" alt="" />
        </div>
        <div class="col-lg-8">
          <h5>Clasificación por categorías</h5>
          <p class="mb-3" data-aos="fade-right">
            Los datos se agrupan en categorías o clases según el valor que
            representan. Por ejemplo, la variable “nivel educativo” puede
            agruparse en categorías como primaria, secundaria y superior.
          </p>
          <div class="tarjeta p-4 mb-4" style="background-color: #F3F0EA">
            <h5>Agrupación por frecuencias de Categorías</h5>
            <p class="mb-0">
              Similar a los datos cuantitativos, se cuenta el número de veces
              que cada categoría aparece y se presentan en tablas de
              frecuencias, que pueden ser absolutas o relativas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
