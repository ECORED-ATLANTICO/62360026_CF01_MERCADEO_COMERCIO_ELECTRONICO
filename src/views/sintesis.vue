<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-fondo-1.bg-full-width
      .px-4.px-lg-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/2.png", data-aos="zoom-in")
          .col-lg-9
            P El componente formativo <b>Tendencias del comercio electrónico</b>, ofrece al aprendiz los conocimientos fundamentales relacionados con el comercio electrónico, abordando aspectos asociados con su concepto, tendencias, tipos, herramientas, dispositivos y aplicaciones. Asimismo, permite reconocer cómo las organizaciones utilizan los entornos digitales para exhibir productos y desarrollar procesos comerciales apoyados en tecnologías de información y comunicación, fortaleciendo la comprensión de los ecosistemas digitales utilizados actualmente en diferentes sectores económicos.
            p.mb-0(data-aos="fade-right") De igual manera, el componente desarrolla elementos relacionados con la comunicación online y el lenguaje web, facilitando la comprensión de conceptos como <em>marketplace</em>, buscadores, <em>hosting</em>, dominio, plataformas, anatomía web, SEO, SEM y <em>email marketing</em>. Estos conocimientos contribuyen al reconocimiento de los recursos que intervienen en la visibilidad digital, el acceso a la información y la interacción entre organizaciones y usuarios dentro de escenarios de comercio electrónico orientados a la exhibición de productos .
        

        .row.justify-content-center
          .col-lg-10.mb-5.bgs.p-4.brad
            figure
              img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
          .col-auto
            a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/bullets/icono-pdf.svg")
              .anexo__texto
                p Anexo. Síntesis

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
