<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Agrupación de datos',
          significado:
            'Proceso de organizar datos en categorías o intervalos para facilitar su análisis.',
        },
        {
          termino: 'Amplitud de intervalos',
          significado:
            'Rango o tamaño de cada clase en una agrupación de datos cuantitativos.',
        },
        {
          termino: 'Análisis estadístico',
          significado:
            'Estudio detallado de datos mediante técnicas estadísticas para extraer conclusiones.',
        },
        {
          termino: 'Categorización',
          significado:
            'Clasificación de datos en grupos específicos según sus características.',
        },
        {
          termino: 'Clasificación',
          significado: 'Organización de datos o variables en grupos o tipos.',
        },
        {
          termino: 'Coherencia de datos',
          significado:
            'Consistencia en la organización de los datos para evitar errores en el análisis.',
        },
        {
          termino: 'Control de calidad',
          significado:
            'Procedimientos para asegurar la precisión y confiabilidad de los datos.',
        },
        {
          termino: 'Datos agrupados',
          significado:
            'Datos organizados en clases o intervalos, ideales para volúmenes grandes.',
        },
        {
          termino: 'Datos cualitativos',
          significado:
            'Datos que representan categorías o atributos sin valores numéricos.',
        },
        {
          termino: 'Datos cuantitativos',
          significado:
            'Datos numéricos que representan cantidades y permiten operaciones matemáticas.',
        },
        {
          termino: 'Escala de intervalo',
          significado:
            'Nivel de medición para variables cuantitativas sin un cero absoluto; permite suma y resta.',
        },
        {
          termino: 'Escala de medición',
          significado:
            'Tipo de escala utilizada para medir una variable, como nominal, ordinal, intervalo o razón.',
        },
        {
          termino: 'Escala nominal',
          significado:
            'Nivel de medición que clasifica datos en categorías sin orden ni jerarquía.',
        },
        {
          termino: 'Escala ordinal',
          significado:
            'Nivel de medición que organiza datos en categorías con un orden pero sin cuantificar las diferencias.',
        },
        {
          termino: 'Escala de razón',
          significado:
            'Nivel de medición con un cero absoluto que permite todas las operaciones matemáticas.',
        },
        {
          termino: 'Frecuencia',
          significado:
            'Número de veces que ocurre una categoría o valor en un conjunto de datos.',
        },
        {
          termino: 'Intervalo',
          significado:
            'Rango de valores dentro de un conjunto de datos agrupados.',
        },
        {
          termino: 'Medición',
          significado:
            'Proceso de asignar valores a una variable de acuerdo con una escala específica.',
        },
        {
          termino: 'Variable independiente',
          significado:
            'Variable que se manipula para observar su efecto en otra variable dependiente.',
        },
        {
          termino: 'Variable dependiente',
          significado:
            'Variable cuyo valor depende de la manipulación de otra variable, llamada independiente.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
