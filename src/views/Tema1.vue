<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 1
      h1 Fuentes de información
    
    .row.mb-5.justify-content-center
      .col-12.col-md-6.d-flex.align-items-center.bg_grad-01(data-aos="fade-right")
        div
          p Se entiende por fuentes de información, los procedimientos, equipos y programas informáticos que se emplean, diseñan, construyen, operan y mantienen para recoger, registrar, procesar, almacenar, recuperar, mostrar y transmitir información, incluyendo el talento humano.
          p Cualquier cosa que pueda informar a una persona sobre algo o proporcionar conocimientos es una fuente de información; estas pueden  ser: 
          .row  
            .col-12.col-md-4
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check.colr_2
                  | Observaciones.
                li.mb-2
                  i.fas.fa-check.colr_2
                  | Discursos de personas.
            .col-12.col-md-4
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check.colr_2
                  | Documentos.
                li.mb-2
                  i.fas.fa-check.colr_2
                  | Imágenes.
            .col-12.col-md-4
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check.colr_2
                  | Organizaciones, etc
      .col-12.col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/t1-1.png', alt='Texto que describa la imagen')

    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Tipología de fuentes de información
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
    
    p.mb-5 Las principales formas que se han propuesto para clasificar las fuentes de información en investigación se indican a continuación:

    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0
        .row  
          .col-12
            .bgr_1.pt-5.pb-3.position-relative
              p.mb-0.text-bold.text-center Formato
              img.pst_1(src='@/assets/curso/tema1/t1-2.svg' alt='AvatarTop')
            .bgr_2.p-5
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-paper-plane.colr_3
                  | Oral vs. documental.
                li.mb-2
                  i.fas.fa-paper-plane.colr_3
                  | Textual vs. audiovisual/multimedia.
                li.mb-2
                  i.fas.fa-paper-plane.colr_3
                  | Papel vs. electrónic0.
      .col-12.col-md-4.mb-3.mb-md-0
        .row  
          .col-12
            .bgr_3.pt-5.pb-3.position-relative
              p.mb-0.text-bold.text-center Estado
              img.pst_1(src='@/assets/curso/tema1/t1-3.svg' alt='AvatarTop')
            .bgr_4.p-5
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-paper-plane.colr_3
                  | Personal vs. impersonal.
                li.mb-2
                  i.fas.fa-paper-plane.colr_3
                  | Formal vs. informal.
                li.mb-2
                  i.fas.fa-paper-plane.colr_3
                  | Publicado/abierto vs. no publicado.
                li.mb-2
                  i.fas.fa-paper-plane.colr_3
                  | Confidencial/secreto.
      .col-12.col-md-4.mb-3.mb-md-0
        .row  
          .col-12
            .bgr_5.pt-5.pb-3.position-relative
              p.mb-0.text-bold.text-center Ubicación
              img.pst_1(src='@/assets/curso/tema1/t1-4.svg' alt='AvatarTop')
            .bgr_6.p-5
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-paper-plane.colr_3
                  | Interna vs. externa.

    p.mb-5 Por otro lado, también es clave aclarar que en investigación la información tiene varias fuentes y del origen de esta depende la calidad de la misma; por lo que a continuación, se describen las principales fuentes con sus características.

    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Fuentes primarias de información
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
    
    p.mb-5 Son los primeros registros publicados de la investigación original y el desarrollo o la descripción de una nueva aplicación o una nueva interpretación de un tema o idea antigua. Son documentos originales que representan ideas originales no filtradas, por lo que estos constituyen la última información disponible por lo que un investigador que produce contenido nuevo puede ponerlo a disposición de la comunidad particular a través de las fuentes primarias. A menudo, estas pueden ser la única fuente de información existente.

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las fuentes primarias no son organizadas, son bastante difíciles de utilizar porque requieren alto nivel de conocimiento técnico, académico y un alto desempeño en idiomas internacionales, además de tener competencias en investigación y manejo de información digital. Estas fuentes son muy importantes en todas las áreas en especial en ciencia, tecnología, innovación y desarrollo, por lo que son usadas, aquí un tema se convierte en una disciplina por derecho propio en especial cuando se empiezan a producir fuentes primarias independientes en esa área. 

    p.mb-5 Por lo anterior, el ritmo de crecimiento de una disciplina depende en gran medida de la cantidad de literatura que se produce en forma de fuentes primarias que dan cuenta del desarrollo en el campo en cuestión, es por eso que esta se constituye en el primer acceso a información disciplinar en investigación para describir el material de origen más cercano a la persona el periodo o la idea que se estudia.

    .row.mb-5.justify-content-center
      .col-12.col-md-10 
        .cajon.bgr_7.px-5.py-4
          p.mb-0 Una fuente primaria (también llamada fuente original) es un artefacto, un documento, una grabación u otra fuente de información que fue creada en la época que se estudia, si fue elaborada por una fuente humana, se trata de una fuente con conocimiento personal directo de los acontecimientos que se describen. 

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        p.text-bold Ejemplos de fuentes primarias: 
    
    .row.mb-5.justify-content-center
      .col-12.col-md-5
        .row
          .col-12(data-aos="fade-right")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-6.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Libros.
          .col-12(data-aos="fade-left")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-8.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Periódicos.
          .col-12(data-aos="fade-right")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-10.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Documentos de conferencias.
          .col-12(data-aos="fade-left")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-12.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Monografías de Investigación.
          .col-12(data-aos="fade-right")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-14.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Informes de Investigación.
      .col-12.col-md-5
        .row
          .col-12(data-aos="fade-left")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-7.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Patentes.
          .col-12(data-aos="fade-right")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-9.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Estándares.
          .col-12(data-aos="fade-left")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-11.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Tesis.
          .col-12(data-aos="fade-right")
            .row.justify-center
              hr.pst_2
              .col-4.col-lg-2.align-items-center
                figure.justify-center
                  img.img90(src='@/assets/curso/tema1/t1-13.svg' alt='AvatarTop')
              .col-8.col-lg-10.d-flex.align-items-center
                div
                  p.mb-0.text-bold Literatura industrial y comercial.

    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Fuentes de información secundarias
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
    
    p Las fuentes de información secundarias son aquellas que se recopilan a partir de las primarias o que hacen referencia a ellas. Por lo anterior, la información original ha sido modificada casualmente, seleccionada o reorganizada para servir a un propósito definido para un grupo de usuarios. Este tipo de fuentes contienen información dispuesta y organizada sobre la base de algún plan definido y contienen conocimientos organizados y reempaquetados más que conocimientos nuevos.  
    p.mb-5 La información contenida en las fuentes primarias está disponible en una forma más conveniente. Pero, por su propia naturaleza, las fuentes secundarias son más fáciles de conseguir que las primarias, ya que estas no solo proporcionan información digerida, sino que también sirven de clave bibliográfica de información en investigación, por lo que las fuentes primarias son las primeras en aparecer, a las que siguen las secundarias. 

    .row.mb-5.justify-content-center
      .col-12.col-md-10 
        .cajon.bgr_8.px-5.py-4
          p.mb-0 Es difícil encontrar información de fuentes primarias directamente. Por lo tanto, hay que consultar en primer lugar las fuentes secundarias, que nos llevarán a las fuentes primarias específicas. 
    
    p.text-bold.mb-0 Tipos de fuentes secundarias de información
    p.mb-5 Las fuentes de información secundarias se encuentran divididas en tres tipos que se pueden ver a continuación:

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        AcordionA.mb-5.bgr_9(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Índice").p-4
            .col-md-6.mb-4.mb-md-0.align-items-center.p-4
              p.mb-0 (a) Índice.
              p.mb-0 (b) Bibliografía.
              p.mb-0 (c) Indización de publicaciones periódicas.
              p.mb-0 (d) Abstracción de publicaciones periódicas.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/t1-15.png', alt='Texto que describa la imagen')
          .row(titulo="Encuesta").p-4
            .col-md-6.mb-4.mb-md-0.align-items-center.p-4
              p.mb-0 (a) Reseña.
              p.mb-0 (b) Tratado.
              p.mb-0 (c) Monografía.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/t1-16.png', alt='Texto que describa la imagen')
          .row(titulo="Referencia").p-4
            .col-md-6.mb-4.mb-md-0.align-items-center.p-4
              p.mb-0 (a) Enciclopedia.
              p.mb-0 (b) Diccionario.
              p.mb-0 (c) Libro de mano y manual.
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/t1-17.png', alt='Texto que describa la imagen')

    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Fuentes de información terciarias
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
    
    p.mb-5 Esta es la categoría más problemática de todas, sin embargo, rara vez se espera que la gente diferencie entre fuentes secundarias y terciarias. Por lo que existen materiales en los que la información de las fuentes secundarias ha sido digerida, reformateada y condensada para ponerla en una forma conveniente y fácil de leer, estas fuentes se alejan en el tiempo de las fuentes secundarias y de obras que indexan, organizan y recopilan las citas de las fuentes secundarias.
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10 
        .cajon.bgr_7.px-5.py-4
          p.mb-0 Las fuentes de información terciarias contienen información destilada y recopilada de fuentes primarias y secundarias. La función principal de las fuentes de información terciarias es ayudar al buscador de información a utilizar las fuentes de información primarias y secundarias. La mayoría de estas fuentes no contienen conocimientos sobre el tema . Ahora bien, debido al aumento de la literatura, las fuentes terciarias son cada vez más importantes ya que de los distintos tipos de fuentes, las terciarias son las últimas en aparecer y estas son:
    .row.mb-5
      .col-12.col-md-3.mb-3.mb-md-0
        .bgr_10.p-4.h-100
          span.text-bold.etiqueta 1
          p.mb-0 Bibliografía.
      .col-12.col-md-3.mb-3.mb-md-0
        .bgr_10.p-4.h-100
          span.text-bold.etiqueta 2
          p.mb-0 Directorios y anuarios.
      .col-12.col-md-3.mb-3.mb-md-0
        .bgr_10.p-4.h-100
          span.text-bold.etiqueta 3
          p.mb-0 Guía de la literatura.
      .col-12.col-md-3
        .bgr_10.p-4
          span.text-bold.etiqueta 4
          p.mb-0 Lista de investigaciones en curso.
    
    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Fuentes no documentales
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
    
    p.mb-5 Las fuentes de información no documentales constituyen una parte sustancial de la comunicación, especialmente en ciencia y tecnología. Los estudios de usuarios han subrayado la importancia, ya que proporcionan información que otras fuentes no lo hacen. Estos tipos de fuentes se pueden revisar a continuación:

    .row.mb-5.justify-content-center
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        p.text-bold.mb-0.etiqueta_1.text-center.p-3 Fuentes formales
        figure
          img(src='@/assets/curso/tema1/t1-18.png', alt='Texto que describa la imagen')
        div.p-3.bgr_13
          p.mb-0.text-small Universidad Nacional de Colombia, primera en generar conocimiento en el país.
        div.p-4.bgr_11
          ul.lista-ul--color
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Organizaciones de investigación.
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Sociedades.
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Industrias.
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Departamentos gubernamentales.
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Universidades.
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Consultores.
      .col-12.col-md-5(data-aos="fade-left")
        p.text-bold.mb-0.etiqueta_2.text-center.p-3 Fuentes informales 
        figure
          img(src='@/assets/curso/tema1/t1-19.png', alt='Texto que describa la imagen')
        div.p-3.bgr_13
          p.mb-0.text-small Aprendizaje a lo largo de la vida, actitud del profesional del siglo XXI.
        div.p-4.bgr_12
          ul.lista-ul--color
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Conversación con las universidades.
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Visitantes.
            li.mb-2
              i.fas.fa-angle-right.colr_3
              | Asistencia a reuniones profesionales.
            

    


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
