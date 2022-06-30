<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 4
      h1 Mediciones
    
    .row.mb-5.justify-content-center
      .col-12.col-md-6.mb-3.mb-md-0(data-aos="fade-right")
        p La palabra medición viene del verbo medir que, a su vez viene de la palabra latina metriri que significa “comparar un resultado o cantidad con una unidad de medida previa”, por lo que son muy importantes, ya que posibilitan conocer cómo están funcionando hechos o fenómenos de interés. Las mediciones son relevantes específicamente en una empresa porque permiten: 
        ul.lista-ul--color.mb-3
          li.mb-2
            i.fas.fa-paper-plane
            | Conocer información específica respecto a un tema de interés.
          li.mb-2
            i.fas.fa-paper-plane
            | Realizar comparaciones entre variables o entre períodos.
          li.mb-2
            i.fas.fa-paper-plane
            | Validar si frente a un presupuesto se cumple lo esperado.
          li.mb-2
            i.fas.fa-paper-plane
            | Incluso medir desempeños de las personas o los procesos, lo que en cualquiera de los escenarios previos permite tomar decisiones.
      .col-12.col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/t4-1.png', alt='Texto que describa la imagen')
    
    p.mb-5 Respecto a la forma como se expresan las mediciones, se denotan de forma cuantitativa; es decir, a través de números y es posible mostrarlas de dos formas a través de:

    .row.mb-5.justify-content-center
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-right")
        p.text-bold.mb-0.etiqueta_1.text-center.p-3 Frecuencias absolutas
        figure
          img(src='@/assets/curso/tema4/t4-2.png', alt='Texto que describa la imagen')  
        div.p-4.bgr_11
          p (Cantidad de veces que se repite un suceso al realizar un número).
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-left")
        p.text-bold.mb-0.etiqueta_2.text-center.p-3 Frecuencias relativas
        figure
          img(src='@/assets/curso/tema4/t4-2.png', alt='Texto que describa la imagen')  
        div.p-4.bgr_22
          p (Porcentualmente).
    
    p.mb-5 Para entender mejor las formas de representar una medición se referencia el siguiente ejemplo: 

    .row.mb-5.justify-content-center
      .col-12.col-md-10(data-aos="flip-up")
        .row.bgr_23.p-4
          .col-12.col-md-2.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema4/t4-4.svg', alt='Texto que describa la imagen')  
          .col-12.col-md-10.d-flex.align-items-center
            p.mb-0 Si ocho clientes indican que les gusta la empresa, este sería un dato expresado en frecuencia absoluta; sin embargo, también podrían decir esto en términos relativos indicando que el 80% de los clientes sienten agrado por la empresa.
    
    p En este apartado, se detalla el tema de las mediciones desde la perspectiva de experiencia al cliente (<em>Customer Experience</em>) también conocida como CX (por sus siglas en inglés), la cual se interpreta como la relación de una empresa con sus clientes en todos los aspectos del recorrido de compra; en resumen, es la suma total de todas las interacciones que un cliente tiene con la marca. 

    separador

    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 4.1 Tipos de mediciones
    
    p.mb-5 En términos de experiencia al cliente existen muchos tipos de medición; sin embargo, hay dos de ellos que son los más utilizados en el contexto empresarial: los estudios de satisfacción y los de recomendación, los cuales se describen a continuación. 

    .row.mb-5(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Estudios de satisfacción de clientes
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
    
    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-right")
        p Estos corresponden a investigaciones de mercado que realizan las empresas para medir el nivel de satisfacción de sus clientes con la marca, sus productos, sus procesos e incluso sus colaboradores. Usualmente, se realizan de forma periódica para poder comparar la evolución, por lo general se recomienda que se realice mínimo una vez al año y ojalá a través de una agencia de investigación de mercados para transmitir mayor transparencia y respaldo de las cifras.
        p.mb-0 Los estudios de satisfacción de clientes tienen por  fin revelar un índice de satisfacción, el cual como se mencionó previamente podrá ser un número expresado en frecuencia absoluta, que dependiendo de la metodología abordada podrá ser una cifra entre: 1 a 5, o entre 1 a 10; en términos porcentuales dicho valor podrá estar entre 0% y 100%, en este sentido, cuanto más alto sea el número implicará mayor nivel de satisfacción por parte de los clientes. 
      .col-12.col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/t4-5.png', alt='Texto que describa la imagen')   

    p.mb-5 Por ejemplo, dos empresas dedicadas a las ventas mayoristas, revelan sus indicadores de satisfacción del año 2021, en el cual la empresa Multiventas Ltda. manifiesta que su resultado fue de 3,9, mientras que la empresa Distribuidora Los Máximos S.A.S. revela que su dato fue de 4,4; en este sentido, se presume que la medición de ambas empresas fue realizada con escalas de 1 a 5, y que la empresa Los Máximos S.A.S. es aquella que es mejor evaluada por parte de los clientes. 

    .row.mb-5.justify-content-center
      .col-12.col-md-6.d-flex.align-items-center.bg_grad-07.mb-3.mb-md-0
        div
          p Otro ejemplo muestra lo siguiente: la empresa Importados E.U. informa en medios que su indicador fue del 82%, mientras que la organización Mayoreo S.A.S. menciona que su índice fue del 77%, en este sentido, la empresa Importados E.U. tiene mejores indicadores de cliente.
          p.mb-0 Desde esta perspectiva de estudios de satisfacción, se tienen algunas bases, para comprender mejor los resultados, clasificando los diferentes tipos de resultados posibles en niveles. Para mejor comprensión, en la siguiente figura se detallan estos referentes, tanto desde la perspectiva de frecuencias absolutas como relativas:
      .col-12.col-md-4
        .titulo-sexto.color-acento-botones.mb-3
          h5 Figura 4
          span Asociación entre rangos y escalas de satisfacción
        figure
          img(src='@/assets/curso/tema4/t4-6.svg', alt='Texto que describa la imagen')   
  
    .row.mb-5(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Estudios de recomendación de clientes
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
    
    .row.justify-content-center
      .col-12.col-md-10(data-aos="flip-up")
        .cajon.bgr_21.p-5
          p.mb-0 La recomendación es una variable de alto interés dentro de la experiencia al cliente y en general dentro del mercadeo y las ventas, dado que cuando un cliente lo hace, significa que no solo está satisfecho con ella, sino que, además, es un cliente prescriptor; es decir, aquel  que genera una voz a voz positivo para la marca. 
    
    separador

    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 4.2 Herramientas
    
    p.mb-5 Se tienen varias herramientas para medir la experiencia de los clientes, los cuales se conocen por estandarizar desde un punto de vista metodológico la forma como se realiza la medición. Dos de las herramientas más usadas a nivel mundial se describen en el siguiente video:

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-Et6zWzTtzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 
    p.mb-5 Ahora bien, en la siguiente video clase podrá reforzar su aprendizaje con los conceptos sobre las mediciones que se pueden hacer en el proceso comercial: 

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/g_pyR7_Pxsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
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
