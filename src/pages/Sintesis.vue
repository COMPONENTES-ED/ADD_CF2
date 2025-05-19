<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/62.png" alt="" />
        </div>
        <div class="col-lg-8">
          <div class="row justify-content-center mb-3">
            <div class="col-lg-8 mb-lg-0 mb-3">
              <div class="p-4" style="background-color: #10314B">
                <p class="mb-0 text-white">
                  El siguiente diagrama proporciona una visión general
                  sintetizada de los principales temas abordados en este
                  componente sobre la organización de la muestra de datos de
                  acuerdo a las metodologías estadísticas. Este mapa está
                  diseñado para ayudar al lector a visualizar la interrelación
                  entre las diversas áreas que constituyen el proceso de
                  organización y estructuración de datos en el contexto
                  estadístico, permitiendo un análisis más coherente y efectivo.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-7">
              <img src="@/assets/curso/temas/63.png" alt="" />
            </div>
          </div>
          <div
            class="tarjeta p-4 border-dashed"
            style="background-color: #b0dcae"
          >
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-2 col-3 mb-lg-0 mb-3">
                <img src="@/assets/curso/temas/64.svg" alt="" />
              </div>
              <div class="col-lg-10">
                <p class="mb-0">
                  En el origen del diagrama se encuentra el concepto principal
                  de "Organización de la muestra de datos de acuerdo a las
                  metodologías estadísticas", del cual se derivan temas
                  fundamentales: definición de variable y clasificación, niveles
                  de medición, técnicas de agrupación de datos y organización de
                  la muestra de datos. cada una de estas áreas se desglosa en
                  conceptos clave, reflejando la estructura y el contenido del
                  componente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-4">
        Este diagrama actúa como una guía visual para explorar los conceptos
        presentados en el texto, permitiendo al lector comprender rápidamente la
        amplitud y la organización de los temas tratados, así como sus
        conexiones. Al revisar este mapa, el lector podrá observar cómo los
        diferentes aspectos de la estadística se entrelazan para formar un
        proceso integral y sistemático en la organización de datos. Se invita a
        utilizar este diagrama como un complemento al contenido detallado del
        componente, sirviendo como una referencia rápida y un recordatorio
        visual de los conceptos esenciales en la organización y manejo de datos
        en estudios estadísticos.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5">
          <figure>
            <img
              src="@/assets/curso/temas/sintesis.svg"
              alt="La imagen muestra la «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre la organización de la muestra de datos de acuerdo a las metodologías estadísticas y algunos subtemas que los integran."
            />
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
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
