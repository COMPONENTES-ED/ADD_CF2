<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5 fondo-2">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Definición de variable y clasificación</h1>
      </div>
      <div
        id="t_1_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>1.1 Concepto de variable en estadística</h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        En estadística, una <b>variable</b> es cualquier característica,
        atributo o propiedad que puede asumir diferentes valores dentro de una
        población o muestra. Las variables se usan en la recolección y análisis
        de datos, dado que permiten identificar y medir los fenómenos de interés
        en un estudio.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 col-7 mb-lg-0 mb-3">
          <img src="@/assets/curso/temas/4.png" alt="" />
        </div>
        <div class="col-lg-8">
          <p class="mb-3">
            Una variable representa cualquier aspecto que pueda variar en un
            estudio. Los valores que toman las variables pueden ser cualitativos
            (descriptivos) o cuantitativos (numéricos). Las variables se
            estudian para identificar patrones, realizar comparaciones y extraer
            conclusiones estadísticas sobre una población.
          </p>
          <div
            class="tarjeta p-4 border-dashed"
            style="background-color: #b0dcae"
          >
            <p class="mb-0">
              Las variables en estadística se pueden clasificar de diferentes
              maneras según el tipo de valores que toman, su escala de medición
              o su función en un análisis. Esta clasificación es importante
              porque el tipo de variable determina los métodos estadísticos que
              se aplicarán para su análisis.
            </p>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>1.2 Variables cualitativas (categóricas)</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-1 mb-lg-0 mb-3 d-lg-block d-none">
          <img src="@/assets/curso/temas/5.svg" alt="" />
        </div>
        <div class="col-lg-11">
          <p class="mb-0">
            Las variables cualitativas, también conocidas como categóricas, son
            aquellas que representan características o atributos de los
            individuos o elementos de un estudio que no se expresan en términos
            numéricos. En lugar de valores numéricos, estas variables asignan a
            los individuos en categorías o grupos con base en sus atributos. Las
            variables cualitativas son fundamentales en investigaciones donde el
            interés principal radica en clasificar y entender distribuciones de
            características específicas dentro de una población.
          </p>
        </div>
      </div>
      <TabsB class="color-acento-contenido mb-5">
        <div
          class="py-4 py-md-5 px-5"
          titulo="Variables nominales"
          :icono="require('@/assets/curso/temas/7.svg')"
        >
          <div class="row">
            <div class="col-lg-6 col-7 mb-4 mb-md-0">
              <img src="@/assets/curso/temas/13.png" alt="" />
            </div>
            <div class="col-lg-6">
              <h3>Variables nominales</h3>
              <p class="mb-5" data-aos="fade-right">
                Este tipo de variable cualitativa clasifica los datos en
                categorías sin un orden o jerarquía específica entre ellas. En
                otras palabras, las categorías son mutuamente exclusivas y
                colectivamente exhaustivas, pero no tienen un nivel de
                superioridad o inferioridad respecto a otras. Las variables
                nominales se emplean comúnmente en estudios donde se necesita
                una clasificación básica sin intención de establecer un orden.
              </p>
              <ul class="lista-ul--color ms-4">
                <li class="d-flex">
                  <i class="fas fa-check"></i>
                  <h4>Ejemplos</h4>
                </li>
              </ul>
              <div class="ms-4">
                <p>
                  Algunas variables nominales comunes incluyen el género
                  (masculino, femenino, otro), el tipo de sangre (A, B, AB, O),
                  el color de ojos (azul, marrón, verde, negro) y el estado
                  civil (soltero, casado, divorciado, viudo). En estos casos,
                  cada categoría es única y no existe una relación jerárquica
                  entre ellas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="py-4 py-md-5 px-5"
          titulo="Variables ordinales"
          :icono="require('@/assets/curso/temas/7.svg')"
        >
          <div class="row">
            <div class="col-lg-6 col-7 mb-4 mb-md-0">
              <img src="@/assets/curso/temas/14.png" alt="" />
            </div>
            <div class="col-lg-6">
              <h3>Variables ordinales</h3>
              <p class="mb-5" data-aos="fade-right">
                Las variables ordinales, a diferencia de las nominales, no solo
                agrupan datos en categorías, sino que también establecen un
                orden o jerarquía entre estas categorías. Sin embargo, las
                diferencias cuantitativas entre las categorías no son precisas
                ni consistentes. Aunque se puede identificar un orden, no es
                posible medir numéricamente las distancias entre categorías de
                manera uniforme.
              </p>
              <ul class="lista-ul--color ms-4">
                <li class="d-flex">
                  <i class="fas fa-check"></i>
                  <h4>Ejemplos</h4>
                </li>
              </ul>
              <div class="ms-4">
                <p>
                  En el contexto educativo, una variable ordinal puede ser la
                  denominación (primaria, secundaria, terciaria), donde existe
                  una progresión en el grado de educación alcanzado, y el nivel
                  de satisfacción (bajo, medio, alto), que indica una jerarquía
                  en la percepción del usuario. En ambos casos, las categorías
                  siguen un orden, pero no podemos cuantificar la diferencia
                  exacta entre cada nivel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsB>
      <p class="mb-5" data-aos="fade-right">
        Las variables cualitativas se usan en estudios de mercado, encuestas de
        satisfacción y ciencias sociales, ya que permiten segmentar a la
        población y analizar la distribución de ciertos atributos o
        características en un conjunto de datos.
      </p>
      <Separador></Separador>
      <div
        id="t_1_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>1.3 Variables cuantitativas (numéricas)</h2>
      </div>
      <div class="mb-5" style="background-color: #e2f4f9 ">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-8">
            <div class="p-4">
              <p class="mb-0">
                Las variables cuantitativas son aquellas que se expresan en
                términos numéricos y permiten realizar operaciones matemáticas.
                Estas variables representan cantidades o medidas que pueden
                manipularse aritméticamente para proporcionar información sobre
                la distribución, tendencia central y dispersión de los datos.
                Las variables cuantitativas suelen aparecer en estudios donde se
                busca medir y analizar fenómenos con precisión numérica.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-7 d-lg-block d-none">
            <img src="@/assets/curso/temas/8.png" alt="" />
          </div>
        </div>
      </div>
      <TabsB class="color-acento-contenido mb-5">
        <div
          class="py-4 py-md-5 px-5"
          titulo="Variables discretas"
          :icono="require('@/assets/curso/temas/7.svg')"
        >
          <div class="row">
            <div class="col-lg-6 col-7 mb-4 mb-md-0">
              <img src="@/assets/curso/temas/15.png" alt="" />
            </div>
            <div class="col-lg-6">
              <h3>Variables discretas</h3>
              <p class="mb-5" data-aos="fade-right">
                Son aquellas que pueden tomar solo un conjunto finito o contable
                de valores, generalmente números enteros. Estas variables suelen
                representar conteos o eventos que no permiten fraccionamientos,
                lo que significa que los valores que asumen son enteros. Las
                variables discretas se utilizan comúnmente en estudios donde se
                cuntifican eventos o entidades individuales.
              </p>
              <ul class="lista-ul--color ms-4">
                <li class="d-flex">
                  <i class="fas fa-check"></i>
                  <h4>Ejemplos</h4>
                </li>
              </ul>
              <div class="ms-4">
                <p>
                  Una representación de variable discreta es el número de hijos
                  en una familia (0, 1, 2, ...), la cantidad de productos
                  vendidos en una tienda (1, 2, 3, ...), y el número de autos
                  que posee una familia (1, 2, 3, ...). En estos casos, las
                  cantidades representadas no pueden dividirse en fracciones.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="py-4 py-md-5 px-5"
          titulo="Variables continuas"
          :icono="require('@/assets/curso/temas/7.svg')"
        >
          <div class="row">
            <div class="col-lg-6 col-7 mb-4 mb-md-0">
              <img src="@/assets/curso/temas/16.png" alt="" />
            </div>
            <div class="col-lg-6">
              <h3>Variables continuas</h3>
              <p class="mb-5" data-aos="fade-right">
                Las variables continuas, a diferencia de las discretas, pueden
                tomar cualquier valor dentro de un rango específico, incluidos
                valores decimales. Estas variables son empleadas para medir
                fenómenos que pueden fraccionarse y que requieren un alto grado
                de precisión. Las variables continuas permiten medir con gran
                exactitud, y son fundamentales en estudios donde es importante
                captar variaciones sutiles.
              </p>
              <ul class="lista-ul--color ms-4">
                <li class="d-flex">
                  <i class="fas fa-check"></i>
                  <h4>Ejemplos</h4>
                </li>
              </ul>
              <div class="ms-4">
                <p>
                  Una representación de variable continua es el peso de una
                  persona (como 70.5 kg), la altura (como 1.75 m), el tiempo
                  (como 12.34 segundos), y la temperatura (como 36.7°C). En
                  estos casos, los valores pueden tomar infinitos puntos en el
                  rango de medición, lo cual proporciona una precisión que es
                  particularmente útil en ciencias experimentales, medicina y
                  física.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsB>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-1 mb-lg-0 mb-3 d-lg-block d-none">
          <img src="@/assets/curso/temas/9.svg" alt="" />
        </div>
        <div class="col-lg-11">
          <p class="mb-0">
            Las variables cuantitativas se usan en estudios que requieren
            análisis estadísticos precisos, como el cálculo de la media,
            mediana, moda y desviación estándar. La posibilidad de realizar
            operaciones matemáticas permite que los investigadores obtengan
            información detallada sobre la dispersión y centralización de los
            datos en la muestra o población estudiada.
          </p>
        </div>
      </div>
      <div class="titulo-sexto color-acento-contenido" data-aos="fade-right">
        <h5>Figura 1.</h5>
        <span>Clasificación de variables</span>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 col-8 mb-lg-0 mb-3">
          <img
            src="@/assets/curso/temas/10b.svg"
            alt="La Figura 1 se denomina «Clasificación de variables» expone los tipos de variables cualitativas y cuantitativas con su respectiva descripción."
          />
          <figcaption class="mt-1">Fuente: OIT, 2024</figcaption>
        </div>
        <div class="col-lg-5 col-7">
          <img src="@/assets/curso/temas/11.svg" alt="" />
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_4"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>1.4 Escalas de medición</h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        Las variables también se pueden clasificar según la escala de medición
        que se utilice. Las escalas de medición determinan qué tipo de
        operaciones matemáticas o comparaciones se pueden realizar con los
        datos.
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-4">
          <img
            class="d-lg-block d-none"
            src="@/assets/curso/temas/12.png"
            alt=""
          />
        </div>
        <div class="col-lg-8">
          <CarouselCard class="mb-5" columnas="col-lg-6 col-xl-6">
            <div class="tarjeta bg-white shadow p-4 h-100">
              <div class="row justify-content-center mb-3">
                <div class="col-4">
                  <img src="@/assets/curso/temas/17.svg" alt="AvatarTop" />
                </div>
              </div>
              <div class="d-flex justify-content-center mb-4">
                <div
                  class="p-2 px-5 d-inline-block"
                  style="background-color: #73c8e2"
                >
                  <h4 class="text-center mb-0">Escala nominal</h4>
                </div>
              </div>
              <p class="text-center">
                Clasifica los datos en categorías que no tienen un orden. Es
                usada para variables cualitativas nominales.<br /><b
                  >Ejemplo:</b
                >
                estado civil (soltero, casado, divorciado).
              </p>
            </div>
            <div class="tarjeta bg-white shadow p-4 h-100">
              <div class="row justify-content-center mb-3">
                <div class="col-4">
                  <img src="@/assets/curso/temas/17.svg" alt="AvatarTop" />
                </div>
              </div>
              <div class="d-flex justify-content-center mb-4">
                <div
                  class="p-2 px-5 d-inline-block"
                  style="background-color: #73c8e2"
                >
                  <h4 class="text-center mb-0">Escala ordinal</h4>
                </div>
              </div>
              <p class="text-center">
                Ordena los datos en categorías, pero no permite cuantificar las
                diferencias entre estas categorías. Es usada para variables
                cualitativas ordinales.<br />Ejemplo: nivel de satisfacción
                (bajo, medio, alto).
              </p>
            </div>
            <div class="tarjeta bg-white shadow p-4 h-100">
              <div class="row justify-content-center mb-3">
                <div class="col-4">
                  <img src="@/assets/curso/temas/17.svg" alt="AvatarTop" />
                </div>
              </div>
              <div class="d-flex justify-content-center mb-4">
                <div
                  class="p-2 px-5 d-inline-block"
                  style="background-color: #73c8e2"
                >
                  <h4 class="text-center mb-0">Escala de intervalo</h4>
                </div>
              </div>
              <p class="text-center">
                Mide la diferencia entre valores de manera cuantitativa, pero no
                tiene un "cero absoluto". Es usada para variables cuantitativas
                continuas.<br />Ejemplo: temperatura en grados Celsius o
                Fahrenheit.
              </p>
            </div>
            <div class="tarjeta bg-white shadow p-4 h-100">
              <div class="row justify-content-center mb-3">
                <div class="col-4">
                  <img src="@/assets/curso/temas/17.svg" alt="AvatarTop" />
                </div>
              </div>
              <div class="d-flex justify-content-center mb-4">
                <div
                  class="p-2 px-5 d-inline-block"
                  style="background-color: #73c8e2"
                >
                  <h4 class="text-center mb-0">Escala de razón</h4>
                </div>
              </div>
              <p class="text-center">
                Es similar a la escala de intervalo, pero con un "cero
                absoluto", lo que permite multiplicar o dividir los valores. Es
                usada para variables cuantitativas continuas.<br />Ejemplo:
                peso, altura, ingresos.
              </p>
            </div>
          </CarouselCard>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_5"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>1.5 Variables dependientes e independientes</h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        En los estudios experimentales o de investigación, las variables pueden
        clasificarse según su papel en el análisis:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-6 mb-lg-0 mb-3">
          <div class="tarjeta overflow-hidden shadow bg-white rounded-2 h-100">
            <img src="@/assets/curso/temas/25.png" alt="" />
            <div class="p-4 text-center">
              <h4>Variable independiente</h4>
              <p class="mb-0">
                Es la variable que se manipula o cambia para observar su efecto
                en otra variable. También se la conoce como "predictora" o
                "explicativa".
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-lg-0 mb-3">
          <div class="tarjeta overflow-hidden shadow bg-white rounded-2 h-100">
            <img src="@/assets/curso/temas/26.png" alt="" />
            <div class="p-4 text-center">
              <h4>Variable dependiente</h4>
              <p class="mb-0">
                Es la variable que se mide para ver cómo responde a los cambios
                en la variable independiente. También se la conoce como
                "respuesta" o "resultado".
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10 mb-lg-0 mb-3">
          <div class="tarjeta p-4" style="background-color: #10314b ">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-1 col-3">
                <img src="@/assets/curso/temas/27.svg" alt="" />
              </div>
              <div class="col-lg-11">
                <p class="mb-0 text-white">
                  Ejemplo: en una investigación sobre el efecto de horas de
                  estudio en el rendimiento académico, la variable independiente
                  sería las "horas de estudio", mientras que la variable
                  dependiente sería el "rendimiento académico".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="fw-bold mb-5">
        Al representar esta información en una figura, se puede observar lo
        siguiente:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-5 col-7 mb-lg-0 mb-3">
          <div
            class="titulo-sexto color-acento-contenido"
            data-aos="fade-right"
          >
            <h5>Figura 2.</h5>
            <span>Ejemplo variables dependientes e independientes</span>
          </div>
          <img
            class="mb-4"
            src="@/assets/curso/temas/28.png"
            alt="La Figura 2 se denomina «Ejemplo variables dependientes e independientes» presenta un ejemplo gráfico de la relación entre las dos variables."
          />
          <figcaption>Fuente: OIT, 2024.s</figcaption>
        </div>
        <div class="col-lg-7">
          <p class="mb-4 fw-bold">
            Variable Independiente (Eje X - Horas de Estudio)
          </p>
          <div class="p-4 py-3" style="background-color: #C6E9F3">
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    Es la variable que el estudiante puede controlar o manipular
                    directamente.
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">Se representa en el eje horizontal (X).</p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    Va aproximadamente de 1 a 8 horas de estudio diarias.
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    Es independiente porque su valor no está condicionado por
                    otros factores en nuestro estudio.
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    El estudiante decide libremente cuántas horas dedicar al
                    estudio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-4 fw-bold">
        Variable Dependiente (Eje Y - Rendimiento Académico)
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 mb-lg-0 mb-3">
          <div class="p-4 py-3" style="background-color: #10314B">
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    Es la variable que se ve afectada o "depende" de la variable
                    independiente.
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">Se representa en el eje vertical (Y).</p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    Se mide en una escala de rendimiento (puntos).
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    Es dependiente porque su valor está influenciado por las
                    horas de estudio.
                  </p>
                </li>
              </ul>
            </div>
            <div class="p-2 bg-white mb-3 rounded-3">
              <ul class="lista-ul--color mb-0">
                <li class="d-flex mb-0">
                  <i class="fas fa-check"></i>
                  <p class="mb-0">
                    El rendimiento "depende" de cuánto tiempo estudia el alumno.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-7">
          <img src="@/assets/curso/temas/29.png" alt="" />
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_6"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>
          1.6 Relación entre los tipos de variables y los métodos estadísticos
        </h2>
      </div>
      <p class="mb-5" data-aos="fade-right">
        El tipo de variable influye directamente en los métodos estadísticos que
        se pueden aplicar. Por ejemplo:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div
            class="tarjeta dots p-5 h-100"
            style="background-color: #E5E9EB "
          >
            <div class="col-3">
              <img class="mb-4" src="@/assets/curso/temas/30.svg" alt="" />
            </div>
            <p class="mb-0">
              Para
              <span class="color-primario"
                >variables cualitativas nominales</span
              >, se usan frecuencias y porcentajes para resumir los datos, y
              pruebas como el chi-cuadrado para analizar relaciones.
            </p>
          </div>
        </div>
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div
            class="tarjeta dots p-5 h-100"
            style="background-color: #C6E9F3 "
          >
            <div class="col-3">
              <img class="mb-4" src="@/assets/curso/temas/31.svg" alt="" />
            </div>
            <p class="mb-0">
              Para <span class="color-primario">variables ordinales</span>, se
              pueden usar medidas de tendencia central (como la mediana) y
              pruebas no paramétricas como la prueba de rangos de Wilcoxon.
            </p>
          </div>
        </div>
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div
            class="tarjeta dots p-5 h-100"
            style="background-color: #E2DACC "
          >
            <div class="col-3">
              <img class="mb-4" src="@/assets/curso/temas/32.svg" alt="" />
            </div>
            <p class="mb-0">
              Para
              <span class="color-primario"
                >variables cuantitativas discretas y continuas</span
              >, se usan medidas como la media, la desviación estándar, y
              pruebas estadísticas paramétricas como la t de Student o ANOVA,
              dependiendo del contexto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema1',
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
