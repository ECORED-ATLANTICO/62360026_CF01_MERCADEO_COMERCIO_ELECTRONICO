<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") El comercio electrónico constituye uno de los pilares fundamentales de la transformación digital de los procesos comerciales, permitiendo que organizaciones de diferentes tamaños interactúen con sus clientes mediante entornos digitales; su comprensión facilita la identificación de herramientas, aplicaciones y dinámicas que intervienen en la exhibición y comercialización de productos en internet.
        .cajon.color-acento-botones.p-4
          p.mb-0 Este componente aborda los conceptos esenciales del comercio electrónico, la comunicación online y el lenguaje web, mediante explicaciones técnicas, ejemplos empresariales y casos aplicados. A través de un enfoque estratégico y contextualizado, el aprendiz reconocerá los elementos que intervienen en los ecosistemas digitales y su relación con la exhibición de productos en entornos comerciales electrónicos.

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
