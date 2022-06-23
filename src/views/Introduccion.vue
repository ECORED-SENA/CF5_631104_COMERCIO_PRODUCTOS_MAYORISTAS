<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info.colr
      h1 Introducción
    
    p El siglo XXI ha impactado fuertemente el sector comercial con el uso de la tecnología, ya que como se ha evidenciado en la última década, la inteligencia artificial, el procesamiento de datos, las redes sociales y las plataformas como sistemas de información han llevado a que el usuario puede acceder al mercado desde cualquier lugar del mundo 24/7.
    p.mb-5 Por lo anterior, el país ha querido fortalecer o posicionar los productos marca Colombia a nivel internacional, lo que ha requerido, que desde el Estado se dé un empuje al sector empresarial en términos de cualificar al recurso humano en el tema. Es así como en este componente formativo adquirirá las competencias necesarias para ser parte del cambio en el campo laboral al cual se enfrente. A continuación, se invita a ver el siguiente video que da inicio a este proceso de aprendizaje:

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Rat5hN2rW_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
