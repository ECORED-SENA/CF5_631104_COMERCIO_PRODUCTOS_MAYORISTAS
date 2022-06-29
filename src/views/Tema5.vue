<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 5
      h1 Solicitudes
    
    .row.mb-5.justify-content-center
      .col-12.col-md-6.bg_grad-08.mb-3.mb-md-0.d-flex.align-items-center(data-aos="fade-right")
        p Una solicitud, en términos de gestión de clientes, hace referencia a cualquier requerimiento que realiza un cliente a una empresa a través de un canal oficial habilitado por la compañía. Estas, son muy importantes, dado que materializan las necesidades de los clientes y, en este orden de ideas, permiten a la empresa tener contacto efectivo con ellos. A continuación, se detallan algunas de las principales solicitudes que se gestionan dentro de una empresa en lo relacionado con clientes: 
      .col-12.col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/t5-1.png', alt='Texto que describa la imagen')
    
    AcordionA.mb-5.bgr_9(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-up-right")
      .row(titulo="Solicitudes informativas").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p A nivel general, son el tipo de solicitud más demandada (requerida) por los clientes. 
          p Son aquellas solicitudes que realizan los clientes cuando requieren obtener información respecto a la empresa, su portafolio, políticas y/o procedimientos. 
          p.mb-0 Generalmente, estos requerimientos de información son gestionados a través de: canales telefónicos, el asesor/ vendedor o canales digitales (páginas web, blog o redes sociales).       
        .col-md-4
          figure
            img(src='@/assets/curso/tema5/t5-2.png', alt='Texto que describa la imagen')
      .row(titulo="PQR").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p Las peticiones (P), quejas (Q) y reclamos (R), son en muchos casos el segundo tipo de solicitudes más gestionadas en las empresas. A nivel general, las PQR hacen alusión a inconformidades o dificultades con la empresa, su personal o los productos adquiridos.      
        .col-md-4
          figure
            img(src='@/assets/curso/tema5/t5-3.png', alt='Texto que describa la imagen')
      .row(titulo="PQR: petición").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p Hace referencia a una solicitud realizada por un cliente para obtener de manera consecuente una respuesta de la empresa ante un tema específico, por tanto, el fin de una petición es “obtener información formal”, lo que implica que para ambas partes debe existir un soporte.
          p Este debe quedar como evidencia de la trazabilidad, la cual se garantiza mediante documentación, grabación o registro en algún sistema de información. 
          p Dicho soporte que le queda al cliente, suele generar un número, el cual se conoce como radicado o consecutivo.
        .col-md-4
          figure
            img(src='@/assets/curso/tema5/t5-4.png', alt='Texto que describa la imagen')
      .row(titulo="PQR: queja").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p Se entiende como la manifestación del cliente sobre algo que considera injusto, un problema, dificultad o inconformidad. Se clasifica como queja cuando el motivo de la misma está asociado a cualquier temática, excepto el funcionamiento del producto o la prestación del servicio. 
          p En otras palabras, las quejas se dan cuando el cliente manifiesta insatisfacción en la forma como fue atendido o manejado su requerimiento, se debe asegurar que se tenga el registro de la acción interpuesta por parte del cliente, así como también el cliente/ usuario deberá tener alguna constancia de la presentación de la misma.       
        .col-md-4
          figure
            img(src='@/assets/curso/tema5/t5-5.png', alt='Texto que describa la imagen')
      .row(titulo="PQR: reclamo").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p También se entiende como una manifestación de inconformidad, solo que, en este caso, está directamente relacionado con el producto (si es una empresa de tangibles) o con la prestación del servicio (si es una empresa de intangibles). 
          p En Colombia los reclamos suelen estar relacionados por mal funcionamiento de los productos, incumplimiento de la promesa del servicio o temas asociados con cobros incorrectos (facturaciones erróneas). 
          p Al igual que en las peticiones y las quejas, deben quedar documentados o registrados en la empresa y el cliente debe tener algún tipo de soporte de la acción interpuesta.
        .col-md-4
          figure
            img(src='@/assets/curso/tema5/t5-6.png', alt='Texto que describa la imagen')
    
    p.mb-5 Respecto al rol de los vendedores mayoristas, usualmente ellos no son responsables de gestionarlas; sin embargo, sí deben tener muy claro cuáles son los procedimientos utilizados en la empresa para atender las peticiones, quejas y reclamos, ya que entregar la información al cliente hace parte del proceso de atención al cliente, a saber:

    .tarjeta.bgr_24.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row
          .col-md-4.p-4
            h4.mb-5 Soporte
            p Hace referencia a las solicitudes técnicas, tienen diferentes alcances:
            p.mb-0 1. Cuando los clientes tienen desconocimiento o dudas sobre el manejo de los productos o servicios de la empresa.
            p.mb-0 2. Cuando tienen dificultad para acceder a alguno de los canales digitales de la compañía.
            p 3. Cuando tienen problemas con sus servicios y requieren de la empresa para validar remotamente o en sitio su correcto funcionamiento.
          .col-md-8.p-4
            figure
              img(src='@/assets/curso/tema5/t5-7.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.p-4
            h4.mb-5 Transacciones comerciales 
            p Dentro de las transacciones u operaciones comerciales, las órdenes de pedido, constituyen los tipos de requerimientos donde los clientes de compras mayoristas le solicitan a la empresa el aprovisionamiento de cierta cantidad de productos.
          .col-md-8.p-4
            figure
              img(src='@/assets/curso/tema5/t5-8.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.p-4
            h4.mb-5 Solicitudes posventa  
            p Se refieren a los requerimientos de los clientes después de realizada la compra en la empresa, entre ellos se destacan: 
            p.mb-0 •	Devoluciones.
            p.mb-0 • Reclamos de facturación.
            p • Aclaraciones de entregas vs. solicitud de compra, entre otras.
          .col-md-8.p-4
            figure
              img(src='@/assets/curso/tema5/t5-9.png', alt='Texto que describa la imagen')
    

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
