<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 3
      h1 Normativa y confidencialidad de la información
  
    .row.mb-5.justify-content-center
      .col-12.col-md-5.bg_grad-04.mb-3.mb-md-0.d-flex.align-items-center
        p La autorización especial de datos personales sensibles se refiere a la implementación y uso de los diferentes medios disponibles para la obtención de la autorización de información de los titulares: es decir, el manejo de los datos sensibles; no obstante, la Ley 1581 de 2012, los decretos y normas reglamentarias, faculta el manejo de los datos, por tanto, no se tiene obligatoriedad de otorgar autorización para el tratamiento de los datos sensibles, tales como:  ciclo. 
      .col-12.col-md-3
        figure
          img(src='@/assets/curso/tema3/t3-1.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 2
          span Tratamiento de datos

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        figure
          img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')

    p Por información confidencial se entiende la comunicación personal o los datos relacionados con la actividad de una organización que es desconocida para el público y solo se comparte entre unas pocas personas. Esta llega a manos de las diferentes entidades a través de su trabajo.
    p.mb-5 Algunos ejemplos comunes de información confidencial son, entre otros, los siguientes:

    .row.mb-5.justify-content-between
      .col-12.col-md-7
        ul.lista-ul--color
          li.mb-2
            i.fas.fa-paper-plane
            | Información financiera no publicada.
          li.mb-2
            i.fas.fa-paper-plane
            | Listas y datos de clientes.
          li.mb-2
            i.fas.fa-paper-plane
            | Propiedad intelectual. como patentes. fórmulas y nuevas tecnologías.
          li.mb-2
            i.fas.fa-paper-plane
            | Datos de partes externas.
          li.mb-2
            i.fas.fa-paper-plane
            | Información sobre el negocio y los productos. como los precios. el marketing y otras estrategias.
          li.mb-2
            i.fas.fa-paper-plane
            | Documentos marcados como confidenciales.
          li.mb-2
            i.fas.fa-paper-plane
            | Objetivos y previsiones no publicados marcados como confidenciales.
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/tema3/t3-3.png', alt='Texto que describa la imagen')
    
    p Todas las empresas disponen de datos personales de su personal, usuarios y miembros, etc., que solo se utilizarán para los fines que fueron recogidos y no se divulgarán a nadie fuera de la organización sin permiso previo de acuerdo con la Ley de Protección de Datos en cada país.
    p.mb-5 Por lo anterior, es preciso aclarar las siguientes definiciones establecidas en la Ley 1581 de 2012:

    .row.mb-5
      .col-12
        .titulo-sexto.color-acento-botones.mb-5
          h5 Ley 1581. Elementos clave a tener en cuenta:

    .row.mb-5.justify-content-center
      .col-12.col-md-4.col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.bgr_17(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5.my-5
              p.mb-5.text-bold Titular de la información
              p.mb-0 “Persona natural cuyos datos personales sean objeto de tratamiento”.
            .tarjeta-slide__img.d-none.d-md-flex(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-4.png')})`}")
            .tarjeta-slide__img.d-flex.d-md-none(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-4-1.png')})`}")
      .col-12.col-md-4.col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.bgr_17(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5.my-5
              p.mb-5.text-bold Responsable del tratamiento
              p.mb-0 “Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el tratamiento de los datos”.
            .tarjeta-slide__img.d-none.d-md-flex(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-5.png')})`}")
            .tarjeta-slide__img.d-flex.d-md-none(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-5-1.png')})`}")
      .col-12.col-md-4.col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.bgr_17(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5.my-5
              p.mb-5.text-bold Encargado del tratamiento
              p.mb-0 “Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del responsable del tratamiento”.
            .tarjeta-slide__img.d-none.d-md-flex(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-6.png')})`}")
            .tarjeta-slide__img.d-flex.d-md-none(:style="{'background-image': `url(${require('@/assets/curso/tema3/t3-6-1.png')})`}")

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .cajon.bgr_18.p-5
          .row  
            .col-12.col-md-4.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema3/t3-7.svg', alt='Texto que describa la imagen')
            .col-12.col-md-8
              p Como parte de su proceso de aprendizaje autónomo le invito a revisar la ley que se mencionó con anterioridad con el fin de afianzar su conocimiento en el tema, la cual se encuentra a continuación:
              a.anexo.mb-4(:href="obtenerLink('downloads/ley1581_2012.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/componentes/icono-pdf.svg")
                .anexo__texto
                  p <b>Anexo.</b> Ley 1581 de 2012 constituye el marco general de la protección de los datos personales en Colombia.
    
    separador

    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.1 Base de datos
    
    .row.mb-5.justify-content-center
      .col-12.col-md-4.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema3/t3-8.svg', alt='Texto que describa la imagen')
      .col-12.col-md-6.d-flex.align-items-center.bg_grad-05
        p.mb-0 Esta se refiere a un conjunto de datos relacionados y a la forma en que están organizados. El acceso a estos suele ser proporcionado por un Sistema de Gestión de Bases de Datos (SGBD) que consiste en un conjunto integrado de programas informáticos que permite a los usuarios interactuar con una o varias bases de datos y proporciona acceso a todos los datos contenidos en la base de datos (aunque pueden existir restricciones que limiten el acceso a determinados datos ). 
    
    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0
        p El SGBD ofrece diversas funciones que permiten: introducir, almacenar y recuperar grandes cantidades de información y proporciona formas de gestionar cómo se organiza esa información. Debido a la estrecha relación entre ambos, el término "base de datos" se utiliza a menudo de forma casual para referirse tanto a una base de datos como al SGBD utilizado para manipularla.
        p.mb-0 Fuera del mundo de la informática profesional, el término base de datos se suele utilizar para referirse a cualquier colección de datos relacionados (como una hoja de cálculo o un fichero), ya que los requisitos de tamaño y uso suelen requerir el uso de un sistema de gestión de bases de datos.
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/tema3/t3-9.png', alt='Texto que describa la imagen')
    
    p.mb-5 Aquí es de vital importancia aclarar que una gran herramienta que apoya la analítica de datos son los diferentes softwares especializados o herramientas ofimáticas que se encuentran en el mercado, dado que los datos que generalmente se procesan en analítica de datos o el big data son semiestructurados o estructurados y tienen diferentes orígenes, por lo que hoy por hoy las empresas deben hacer uso de sistemas que les permitan manejar grandes cantidades de información con el objetivo de tomar decisiones a tiempo y estar a la vanguardia en un mundo totalmente globalizado, lo anterior lleva a que estás tenga grandes beneficios, tales como:

    ul.lista-ul--color.mb-3
      li.mb-2
        i.fas.fa-paper-plane
        | El incremento de ingresos. 
      li.mb-2
        i.fas.fa-paper-plane
        | Mejoras en los procesos.
      li.mb-2
        i.fas.fa-paper-plane
        | Maximización en las campañas publicitarias.
      li.mb-2
        i.fas.fa-paper-plane
        | Acceso permanente a la analítica de datos para dar impulso al rendimiento o beneficio empresarial. 

    p.mb-5 Las metodologías o técnicas aplicadas para una base de datos demandan realizar:

    .row.mb-5.justify-content-center
      .col-12.col-md-4.mb-3.mb-md-0
        .bgr_19.h-100
          figure.p-4.d-flex.justify-content-center
            img.img140(src='@/assets/curso/tema3/t3-10.svg', alt='Texto que describa la imagen')
          div.p-4
            h2.text-center 01.
            p.mb-0 Un análisis o exploración de datos, esto tiene como objeto identificar patrones y la relación que hay entre ellos.
      .col-12.col-md-4
        .bgr_20
          figure.p-4.d-flex.justify-content-center
            img.img140(src='@/assets/curso/tema3/t3-11.svg', alt='Texto que describa la imagen')
          div.p-4
            h2.text-center 02.
            p.mb-0 Un análisis confirmatorio de datos que permite la aplicación de técnicas estadísticas para establecer si las hipótesis lanzadas son verdaderas o falsas.

    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema3/t3-12.png', alt='Texto que describa la imagen')
      .col-12.col-md-8
        p El análisis de datos o <em>Big Data</em> es muy aplicado debido a los análisis cualitativos, ya que se realiza el análisis de datos numéricos, los cuales tienen variables que pueden ser cuantificables, pueden compararse y medirse a través de la estadística, es de anotar que el análisis cualitativo es de carácter interpretativo, es decir que se hace a través de interpretaciones de los resultados estadísticos, basados en la comprensión que se haga de los datos que no son numéricos. 
        p.mb-0 En el análisis de <em>Big Data</em>, se nos presentan los datos. No se puede diseñar un experimento que cumpla con un modelo estadístico favorito. En las aplicaciones de analítica a gran escala, se necesita una gran cantidad de trabajo, normalmente el 80% del esfuerzo solo para limpiar los datos, de modo que puedan ser utilizados por un modelo de aprendizaje automático.

    p No hay una metodología única a seguir en las aplicaciones reales a gran escala. Normalmente, una vez definido el problema de negocio, se necesita una etapa de investigación para diseñar la metodología a utilizar. Sin embargo, es relevante mencionar unas pautas generales que se aplican a casi todos los problemas.
    p Una de las tareas más importantes en el análisis de Big Data es el modelado estadístico, es decir, los problemas de clasificación o regresión supervisados y no supervisados. Una vez que los datos se han limpiado y pre-procesado, ya están disponibles para el modelado, se debe tener cuidado en la evaluación de diferentes modelos con métricas de pérdida razonables y luego, una vez que el modelo se implementa, se debe informar de la evaluación y los resultados. Un error común en la modelización predictiva es limitarse a implementar el modelo y no medir nunca su rendimiento.

    separador

    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.2 Manejo de datos personales
    
    .row.mb-5.justify-content-center
      .col-12.col-md-6.d-flex.align-items-center.bg_grad-06(data-aos="fade-right")
        div
          p El manejo de datos se regula mediante el derecho de <em>Habeas Data</em>, el cual por el cual en Colombia se autoriza a los habitantes residentes a actualizar, conocer, y rectificar toda la información que tengan las distintas entidades y bases de datos del territorio nacional.  Este derecho nació como parte importante de los artículos 15 y 20 de la Constitución Política, los cuales más adelante, fueron desarrollados como un derecho autosuficiente y sin dependencia, que disfrutan todos los colombianos hoy en día. 
      .col-12.col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/t3-13.png', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .cajon.bgr_21.p-5
          p.mb-0 Revisando la historia es desde 1995 cuando se comienza a tener esta excepción, no obstante, en el 2008 se crea la primera Ley de Habeas Data, la 1266, la cual tiene un carácter particular que solo aplica para la información financiera, por lo que los bancos usaban esta información para evaluar el peligro crediticio de una persona, como hábitos de pago, créditos tomados antes y sueldo o ingresos promedios.

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .bgr_30.p-5
          .row  
            .col-12.col-md-4.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema3/t3-7.svg', alt='Texto que describa la imagen')
            .col-12.col-md-8
              p La Ley 1266 de 2008, también conocida como Ley de Habeas Data, se aplica a todos los datos personales financieros, crediticios, comerciales y de servicios registrados en un banco de datos. En este sentido, la aplicación de la Ley 1266 de 2008 está encaminada a regular el uso de esa información y por tanto otro tipo de datos (por ejemplo: aquellos mantenidos en un ámbito exclusivamente personal o doméstico o lo que se incluyen en una historia clínica) se encuentran excluidos de la aplicación de esta norma. Para su consulta puede ingresar al siguiente enlace: 
              a.anexo.mb-4.mb-lg-0(href="https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema/leyes/ley_estatutaria_1266_2008" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> La Ley 1266 de 2008, también conocida como Ley de Habeas Data.
    
    p.mb-5 Por su lado, la ley más vigente del derecho de Habeas Data ha sido emitida en el 2012. La ley 1581 es de carácter general y se aplica en todos los espacios de recolección de datos de una persona y que, por lo tanto, no son financieros ni crediticios. Son usados por entidades de naturaleza pública o privada. En esta ley se resume todo el funcionamiento de la información de una persona; por ello, en la siguiente figura se mencionan los elementos que se tienen en cuenta de manera general:

    .row.mb-5
      .col-12
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 3
          span Responsabilidades manejo de datos

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        figure
          img(src='@/assets/curso/tema3/t3-14.svg', alt='Texto que describa la imagen')

    p.mb-5 Por otro lado, ninguna entidad puede hacer uso de esta información sin el permiso y autorización del dueño. La empresa o persona que sin la debida autorización realice uso de datos individuales recibirá una sanción y multa. Es por ello, que continuamente piden una aceptación una vez que se firma un contrato o se hace una compra.

    .row.justify-content-center
      .col-12.col-md-5
        a.anexo.mb-4.mb-lg-0(href="https://www.sic.gov.co/sites/default/files/files/2021/Guia%20CUIDA%20TU%20IDENTIDAD%20DIGITAL%20002.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Superintendencia de Industria y Comercio. (2021) Cuida tu identidad personal.
      .col-12.col-md-5
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/bvAH9ppBbbE?feature=oembed" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Legislación en protección de datos personales en Colombia. 

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
