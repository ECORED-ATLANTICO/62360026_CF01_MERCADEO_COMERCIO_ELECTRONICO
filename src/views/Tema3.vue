<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Lenguaje WEB
    
    .bg-fondo-1.bg-full-width
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-11.px-5.py-4
                  p.mb-0 El lenguaje web integra diversos elementos técnicos que permiten el funcionamiento, acceso y visibilidad de los contenidos disponibles en internet. Su comprensión facilita la identificación de componentes fundamentales para la presencia digital de organizaciones y productos en entornos electrónicos, al proporcionar las bases sobre las cuales se estructuran los sitios web y los diferentes servicios que hacen posible la comunicación y el intercambio de información en línea. Estos elementos permiten que las plataformas digitales sean accesibles, organizadas y funcionales para los usuarios.
            .bg-color-10.px-5.py-4
              p.mb-0 En el contexto del comercio electrónico, el lenguaje web constituye un componente esencial para el desarrollo de espacios digitales orientados a la promoción y comercialización de productos y servicios. Aspectos como los nombres de dominio, el alojamiento web, las direcciones URL y las estrategias de optimización para motores de búsqueda contribuyen a que los contenidos puedan ser localizados, consultados y utilizados de manera eficiente por los usuarios, favoreciendo la presencia digital y el alcance de las organizaciones.
        
        .cajon.color-acento-botones.bg-color-7.p-4
          p.mb-0 Reconocer estos elementos permite comprender cómo los usuarios encuentran información, cómo se alojan los contenidos digitales y cómo se estructuran los espacios virtuales utilizados dentro de los procesos de comercio electrónico. Asimismo, proporciona una visión general sobre la importancia de organizar adecuadamente los recursos digitales para facilitar la navegación, mejorar la experiencia del usuario y fortalecer la visibilidad de productos y servicios en los diferentes canales electrónicos.

        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Buscadores
        
        .bloque-texto-g.color-primario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los buscadores son sistemas diseñados para localizar y organizar información disponible en internet, su función consiste en facilitar a los usuarios el acceso a contenidos digitales mediante consultas realizadas a través de palabras clave; gracias a estos mecanismos, es posible encontrar sitios web, productos, servicios y diferentes tipos de información alojados en la red de manera rápida y organizada.
        
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-0(data-aos="fade-right") El funcionamiento de los buscadores se basa en procesos de recopilación, clasificación y presentación de información, estos sistemas analizan permanentemente los contenidos disponibles en internet para construir índices que permitan responder a las consultas realizadas por los usuarios. Como resultado, facilitan la localización de información relevante dentro de grandes volúmenes de contenido digital.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Características de los buscadores
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-9 Característica
                th.bg-color-9 Descripción

            tbody
              tr.bg-color-white
                td Localización de información
                td Permite encontrar contenidos digitales mediante consultas realizadas por los usuarios.

              tr.bg-color-8
                td Organización de contenidos
                td Clasifica información disponible en internet para facilitar su consulta.

              tr.bg-color-white
                td Acceso digital
                td Favorece la localización rápida de sitios web, productos y servicios.

              tr.bg-color-8
                td Visibilidad
                td Contribuye a que los contenidos sean encontrados por potenciales usuarios.

              tr.bg-color-white
                td Actualización permanente
                td Incorpora y reorganiza constantemente información digital para mantener vigentes los resultados de búsqueda.

              tr.bg-color-8
                td Cobertura de contenidos
                td Permite acceder a información proveniente de múltiples fuentes disponibles en internet.

              tr.bg-color-white
                td Rapidez de consulta
                td Facilita la obtención de resultados en tiempos reducidos mediante procesos automatizados de búsqueda.

              tr.bg-color-8
                td Relación entre contenidos
                td Vincula información relacionada para ampliar las posibilidades de consulta de los usuarios.

              tr.bg-color-white
                td Interacción con usuarios
                td Responde a consultas específicas mediante mecanismos de búsqueda basados en palabras clave.

    img(src="@/assets/curso/tema3/5.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Desde una perspectiva comercial, los buscadores constituyen una herramienta fundamental para la visibilidad de productos y organizaciones en internet. Su adecuada comprensión permite reconocer cómo los usuarios encuentran información relacionada con productos y servicios, contribuyendo al fortalecimiento de la presencia digital y al acceso de potenciales clientes a los contenidos comerciales.

    .row.justify-content-center
      .col-lg-8
        .tarjeta.bg-fondo-5.p-3
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/common/3.svg").mx-auto
            .col-lg
              h5.d-inline-block.bg-color-6.text-white.p-2  Clave estratégica
              p.mb-0 Los buscadores facilitan el acceso de los usuarios a la información y fortalecen la visibilidad digital de productos y organizaciones.
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Hosting
    
    .bg-fondo-1.bg-full-width
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
          .col-lg-8
            p El hosting corresponde al servicio que permite almacenar y mantener disponibles los contenidos de un sitio web dentro de internet, su función principal consiste en proporcionar los recursos tecnológicos necesarios para que páginas, imágenes, documentos y demás elementos digitales puedan ser consultados por los usuarios cuando acceden a un entorno web.
            .bg-fondo-3.tarjeta.px-5.py-3
              p.mb-0 La disponibilidad permanente de los contenidos digitales depende de la existencia de servicios de hosting capaces de gestionar la información almacenada. Gracias a estos servicios, las organizaciones pueden publicar información, exhibir productos y mantener operativos sus espacios digitales. Esta capacidad resulta fundamental para garantizar el acceso continuo a los contenidos utilizados dentro de los procesos de comercio electrónico.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Funciones del hosting
        
        .bg-fondo-slider.tarjeta.mb-5
          .p-4.p-lg-5
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/7.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Almacenamiento
                  p.mb-0 El hosting proporciona el espacio donde se almacenan los archivos, imágenes, bases de datos y demás recursos que conforman un sitio web. Esta función permite conservar la información organizada y disponible, garantizando que los usuarios puedan acceder a los contenidos digitales y que el sitio web funcione correctamente.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/8.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Disponibilidad
                  p.mb-0 El hosting mantiene el sitio web accesible para los usuarios durante el mayor tiempo posible, facilitando el acceso continuo a la información, productos y servicios publicados. Esta función contribuye a ofrecer una experiencia de navegación estable y confiable, permitiendo que los contenidos digitales permanezcan disponibles desde cualquier lugar con conexión a internet.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/9.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Infraestructura tecnológica
                  p.mb-0 El hosting proporciona la infraestructura tecnológica necesaria para el funcionamiento de un sitio web, incluyendo recursos de almacenamiento, procesamiento, conectividad y seguridad. Estos elementos favorecen la estabilidad, el rendimiento y la administración de la plataforma, garantizando el adecuado funcionamiento de los servicios digitales.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/10.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Publicación de contenidos
                  p.mb-0 El hosting permite publicar y mantener disponibles en internet los contenidos que conforman un sitio web, como información institucional, productos, servicios e imágenes. Esta función favorece la permanencia y actualización de la información digital, facilitando que los usuarios consulten los contenidos de forma oportuna y permanente.
    
    .cajon.color-acento-botones.bg-color-7.p-4.mb-5
      p.mb-0 Desde una perspectiva estratégica, el hosting constituye uno de los componentes esenciales para la presencia digital de cualquier organización. Su adecuada selección contribuye a mantener la disponibilidad de los contenidos, facilitar el acceso de los usuarios y respaldar las actividades asociadas a la exhibición de productos y servicios en internet.
    
    .row.justify-content-center
      .col-lg-8
        .tarjeta.bg-fondo-6.mb-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/common/6.png").mx-auto
            .col-lg
              h5 Pregunta de aplicación
              p.mb-0 ¿Cómo contribuye un servicio de hosting al funcionamiento de un sitio web utilizado para exhibir productos?
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Dominio
    
    .bg-fondo-1.bg-full-width
      .px-4.px-lg-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") El dominio corresponde al nombre único que identifica un sitio web dentro de internet y permite a los usuarios acceder a sus contenidos de forma sencilla, su función consiste en reemplazar direcciones numéricas complejas por denominaciones más fáciles de recordar y utilizar. Gracias a esta característica, los dominios facilitan la localización de páginas web y fortalecen la identidad digital de organizaciones, productos y servicios.
        
        .bg-fondo-2.tarjeta.px-5.py-3.mb-5
          p.mb-0 La utilización de dominios permite establecer una referencia clara para la presencia digital de una organización. Cuando los usuarios realizan consultas en internet, el dominio actúa como un elemento de identificación que facilita el acceso a la información publicada. Esta condición contribuye a mejorar la visibilidad de los contenidos y favorece el reconocimiento de la organización dentro del entorno interactivo.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Funciones del dominio
        
        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
          .col-lg-8
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Identificación")
                h4 Identificación
                p.mb-0 El dominio identifica de manera única un sitio web dentro de internet, permitiendo diferenciarlo de otros espacios digitales. Su uso facilita el reconocimiento de la organización y ayuda a los usuarios a acceder al sitio mediante un nombre fácil de recordar.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Acceso")
                h4 Acceso
                p.mb-0 El dominio facilita el acceso a los contenidos publicados en un sitio web mediante una dirección única y comprensible. Esto permite localizar información, productos y servicios de forma rápida, favoreciendo una navegación más sencilla y eficiente.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Presencia digital")
                h4 Presencia digital
                p.mb-0 Contar con un dominio propio fortalece la presencia digital de una organización al consolidar su identidad en internet. Además de proyectar una imagen profesional, contribuye a generar confianza y respaldo frente a usuarios y clientes.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Visibilidad")
                h4 Visibilidad
                p.mb-0 El dominio favorece la localización del sitio web y respalda las estrategias de posicionamiento en buscadores. Esto incrementa las posibilidades de que los usuarios encuentren la organización, sus productos y sus servicios en los diferentes canales digitales.

        .row.justify-content-center
          .col-lg-8
            .tarjeta.bg-fondo-5.p-3
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/common/3.svg").mx-auto
                .col-lg
                  h5.d-inline-block.bg-color-6.text-white.p-2  Clave estratégica
                  p.mb-0 El dominio fortalece la identidad digital y facilita el acceso de los usuarios a los contenidos publicados en internet.
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Plataformas
    
    .bloque-texto-g.color-primario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las plataformas corresponden a entornos tecnológicos que permiten gestionar, organizar y publicar contenidos digitales en internet, su utilización facilita la creación de espacios virtuales donde las organizaciones pueden exhibir información, presentar productos y desarrollar actividades asociadas al comercio electrónico; estas herramientas constituyen uno de los componentes fundamentales para la administración de contenidos en entornos digitales.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-0(data-aos="fade-right") Las plataformas permiten integrar diferentes recursos tecnológicos dentro de una misma estructura operativa, gracias a ellas es posible organizar información, actualizar contenidos y administrar elementos asociados a la exhibición de productos; esta capacidad favorece el desarrollo de actividades comerciales digitales y fortalece la interacción entre organizaciones y usuarios.
    
    .tarjeta.bg-fondo-4.p-3.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/common/2.svg").mx-auto
        .col-lg
          h5.d-inline-block.bg-color-5.p-2  Ejemplo aplicado
          p.mb-0 Una empresa dedicada a la venta de artículos deportivos implementó una plataforma digital para administrar su catálogo de productos. Gracias a esta herramienta logró organizar la información comercial, mantener actualizados los contenidos y facilitar la consulta de productos por parte de los usuarios. Como resultado, fortaleció la gestión de su canal digital y mejoró la experiencia de navegación dentro de su entorno comercial.
    
    .cajon.color-acento-botones.bg-color-7.p-4.mb-5
      p.mb-0 Desde una perspectiva estratégica, las plataformas facilitan la gestión eficiente de la presencia digital y contribuyen al fortalecimiento de los procesos de exhibición comercial. Su adecuada utilización permite organizar contenidos de manera estructurada, mejorar la disponibilidad de información y optimizar la experiencia de navegación dentro de los entornos utilizados para la comercialización digital.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Aportes de las plataformas al comercio electrónico
        .tabla-a.color-secundario.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-9 Aporte
                th.bg-color-9 Descripción

            tbody
              tr.bg-color-white
                td Administración 
                td Facilita el control de diferentes elementos dentro de entornos comerciales electrónicos.

              tr.bg-color-8
                td Experiencia de navegación
                td Contribuye a mejorar la interacción de los usuarios con los contenidos digitales.

              tr.bg-color-white
                td Exhibición de productos
                td Favorece la presentación estructurada de información comercial para los usuarios.

              tr.bg-color-8
                td Gestión de contenidos
                td Permite organizar y actualizar información relacionada con productos y servicios.

              tr.bg-color-white
                td Integración de recursos
                td Facilita la articulación de diferentes herramientas y contenidos utilizados en los procesos de comercio electrónico.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Anatomía
    
    img(src="@/assets/curso/tema3/15.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La anatomía web corresponde a la estructura básica que conforma un sitio web y permite organizar la información de manera lógica para facilitar la navegación de los usuarios. Cada elemento cumple una función específica dentro del entorno digital, contribuyendo a la presentación de contenidos, la interacción con los visitantes y el acceso a la información disponible. 
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") La organización estructurada de una página web facilita la localización de información y mejora la experiencia de navegación, elementos como encabezados, áreas de contenido, menús de navegación y espacios informativos permiten distribuir la información de manera coherente, favoreciendo la consulta de productos y servicios. Esta estructura contribuye a que los usuarios encuentren con facilidad los contenidos que buscan dentro de un entorno digital.
    
    .bg-fondo-2.tarjeta.px-5.py-3.mb-5
      p.mb-0 La siguiente imagen interactiva presenta los principales elementos que conforman la anatomía de un sitio web. Al seleccionar cada punto de interacción, podrá conocer la función que cumple cada componente dentro de la estructura digital y su aporte a la organización de la información, la navegación y la experiencia del usuario. 
    
    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/17.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="96%" y="9%" numero="1")
            .h5.mb-2 Encabezado
            p Sección ubicada en la parte superior del sitio web que contiene elementos de identificación y acceso. Generalmente incorpora el nombre de la organización, logotipo, menú principal y recursos que facilitan la navegación inicial.

          .tarjeta.color-acento-botones.p-3(x="50%" y="12%" numero="2")
            .h5.mb-2 Barra de búsqueda
            p Herramienta que permite localizar información específica dentro del sitio web mediante palabras clave. Facilita la navegación, optimiza el acceso a contenidos relevantes y mejora la experiencia de los usuarios al reducir los tiempos de consulta.
          .tarjeta.color-acento-botones.p-3(x="96%" y="21%" numero="3")
            .h5.mb-2 Menú de navegación
            p Conjunto estructurado de opciones que permite acceder a las distintas secciones del sitio web. Su organización facilita la localización de contenidos, mejora la orientación del usuario y fortalece la usabilidad del entorno digital.
          .tarjeta.color-acento-botones.p-3(x="96%" y="50%" numero="4")
            .h5.mb-2 Área de contenido
            p Corresponde al espacio principal donde se presenta la información de interés para los usuarios. En esta sección se integran textos, imágenes, productos, servicios y recursos digitales que constituyen el propósito central del sitio web.
          .tarjeta.color-acento-botones.p-3(x="56%" y="75%" numero="5")
            .h5.mb-2 Zona multimedia
            p Área destinada a la integración de recursos visuales y audiovisuales como imágenes, videos, animaciones o elementos interactivos. Su utilización fortalece la presentación de contenidos y facilita la comprensión de la información publicada.
          .tarjeta.color-acento-botones.p-3(x="8%" y="50%" numero="6")
            .h5.mb-2 Sección lateral
            p Espacio complementario ubicado en uno de los lados de la página web que permite incorporar información adicional, accesos rápidos, recursos relacionados o contenidos de apoyo que enriquecen la experiencia de navegación.
          .tarjeta.color-acento-botones.p-3(x="90%" y="90%" numero="7")
            .h5.mb-2 Pie de página
            p Sección ubicada al final del sitio web que reúne información complementaria relacionada con la organización. Puede incluir datos de contacto, enlaces adicionales, políticas de uso y otros recursos de apoyo para los usuarios.
          .tarjeta.color-acento-botones.p-3(x="33%" y="40.5%" numero="8")
            .h5.mb-2 Enlaces de navegación
            p Elementos interactivos que conectan diferentes páginas, secciones o recursos dentro del entorno web. Su función consiste en facilitar el desplazamiento entre contenidos y favorecer una experiencia de navegación organizada y eficiente.

    
    .row.justify-content-center
      .col-lg-8
        .tarjeta.bg-fondo-6.mb-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/common/6.png").mx-auto
            .col-lg
              h5 Pregunta de aplicación
              p.mb-0 ¿Cómo puede una adecuada organización de la anatomía web contribuir a mejorar la consulta de productos por parte de los usuarios?
    
    separador
    
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 SEO
    
    .bg-fondo-1.bg-full-width
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/19.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-11.px-5.py-4
                  p.mb-0 SEO (<em>Search Engine Optimization</em>) corresponde al conjunto de acciones orientadas a favorecer la visibilidad de los contenidos dentro de los resultados presentados por los buscadores, su propósito consiste en facilitar que los usuarios encuentren información relacionada con productos, servicios u organizaciones cuando realizan consultas en internet; este elemento se ha convertido en un componente relevante para la presencia digital de los sitios web.
            .bg-color-10.px-5.py-4
              p.mb-0 La aplicación de SEO contribuye a mejorar la localización de contenidos dentro de los motores de búsqueda, cuando la información está organizada de manera adecuada, los buscadores pueden identificar con mayor facilidad los contenidos disponibles y presentarlos a los usuarios durante sus consultas. Esta condición favorece la accesibilidad de la información y fortalece la visibilidad digital de las organizaciones.
        
        .tarjeta.bg-fondo-4.p-3.mb-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/common/2.svg").mx-auto
            .col-lg
              h5.d-inline-block.bg-color-5.p-2  Ejemplo aplicado
              p.mb-0 Una empresa dedicada a la comercialización de productos ecológicos observó que los usuarios tenían dificultades para encontrar información sobre sus productos mediante buscadores. Después de organizar adecuadamente los contenidos de su sitio web y mejorar la estructura de la información publicada, logró incrementar la visibilidad de sus productos dentro de los resultados de búsqueda y facilitar el acceso de los usuarios a sus contenidos digitales.

        .row.justify-content-center
          .col-lg-8
            .tarjeta.bg-fondo-5.p-3
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/common/3.svg").mx-auto
                .col-lg
                  h5.d-inline-block.bg-color-6.text-white.p-2  Clave estratégica
                  p.mb-0 SEO fortalece la visibilidad de los contenidos digitales y facilita que los usuarios encuentren información relevante mediante buscadores.
    
    separador
    
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.7 SEM
    
    .bg-fondo-1.bg-full-width
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
          .col-lg-8
            p SEM (<em>Search Engine Marketing</em>) corresponde a las acciones orientadas a incrementar la visibilidad de contenidos digitales mediante mecanismos de promoción en buscadores, su finalidad consiste en facilitar que productos, servicios y organizaciones obtengan una mayor exposición dentro de los resultados presentados a los usuarios cuando realizan consultas en internet. Este componente complementa otros procesos relacionados con la presencia digital y la exhibición de información en entornos electrónicos.
            .bg-fondo-3.tarjeta.px-5.py-3
              p.mb-0 La aplicación de SEM permite fortalecer la difusión de contenidos mediante estrategias que favorecen la aparición de información comercial dentro de los buscadores, gracias a ello, las organizaciones pueden incrementar la exposición de productos y servicios ante usuarios interesados en determinados temas o categorías. Esta capacidad contribuye a fortalecer la visibilidad digital y ampliar las oportunidades de interacción comercial.

        .tarjeta.bg-fondo-4.p-3.mb-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/common/2.svg").mx-auto
            .col-lg
              h5.d-inline-block.bg-color-5.p-2  Ejemplo aplicado
              p.mb-0 Una empresa dedicada a la comercialización de equipos tecnológicos buscaba incrementar la visibilidad de sus productos en internet. Para ello implementó acciones de promoción asociadas a buscadores, logrando que la información relacionada con sus referencias comerciales obtuviera una mayor exposición frente a usuarios interesados en este tipo de productos. Como resultado, fortaleció la presencia digital de su catálogo comercial.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Aportes de SEM a la visibilidad digital
        .tabla-a.color-secundario.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-9 Aporte
                th.bg-color-9 Descripción

            tbody
              tr.bg-color-white
                td Promoción digital 
                td Incrementa la exposición de productos, servicios y contenidos mediante anuncios patrocinados en motores de búsqueda, facilitando que lleguen a usuarios que realizan consultas relacionadas con la oferta de la organización.

              tr.bg-color-8
                td Visibilidad comercial
                td Favorece la presencia de productos y servicios en entornos digitales al posicionarlos en espacios destacados de los resultados de búsqueda, aumentando las oportunidades de atraer clientes potenciales.

              tr.bg-color-white
                td Difusión de contenidos
                td Facilita que la información llegue a usuarios interesados en categorías, productos o servicios específicos, contribuyendo a ampliar el alcance de las campañas y fortalecer la comunicación digital de la organización.

              tr.bg-color-8
                td Presencia en buscadores
                td Complementa las estrategias de posicionamiento al mejorar la localización de contenidos mediante campañas de publicidad en buscadores, fortaleciendo la presencia digital y apoyando el logro de objetivos comerciales.
    
    .row.justify-content-center
      .col-lg-8
        .tarjeta.bg-fondo-5.p-3
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/common/3.svg").mx-auto
            .col-lg
              h5.d-inline-block.bg-color-6.text-white.p-2  Clave estratégica
              p.mb-0 SEM fortalece la exposición de contenidos digitales y contribuye a incrementar la visibilidad comercial en buscadores.
    
    separador
    
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.8 Email marketing
    
    img(src="@/assets/curso/tema3/21.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El email marketing corresponde a una forma de comunicación digital que utiliza el correo electrónico para compartir información con usuarios y públicos de interés, su aplicación permite difundir contenidos relacionados con productos, servicios y actividades organizacionales mediante mensajes estructurados y dirigidos a destinatarios específicos; esta herramienta constituye uno de los recursos más utilizados dentro de los procesos de comunicación digital.
    
    .bg-fondo-1.bg-full-width
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
          .col-lg-8
            p La utilización del correo electrónico como canal de comunicación facilita la distribución de información de manera organizada y directa, gracias a este mecanismo, las organizaciones pueden mantener contacto con sus usuarios y compartir contenidos relevantes relacionados con sus actividades comerciales; esta capacidad favorece la circulación de información y fortalece los procesos de comunicación dentro de los entornos digitales.
            .bg-fondo-3.tarjeta.px-5.py-3
              p.mb-0 El lenguaje web reúne los componentes técnicos y comunicativos que hacen posible la publicación, organización, acceso y visibilidad de los contenidos en internet. Elementos como los buscadores, el hosting, el dominio, las plataformas y la anatomía web permiten estructurar espacios digitales funcionales en los que los usuarios pueden localizar información, navegar entre contenidos y consultar productos y servicios.

        .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
          p.mb-0 Por su parte, las acciones de SEO, SEM y email marketing contribuyen a ampliar el alcance de la información y a fortalecer la comunicación con públicos específicos. La articulación de estos recursos permite construir una presencia digital organizada, accesible y coherente con los objetivos comerciales. Comprender su función ayuda a reconocer que la efectividad de un sitio web depende tanto de su infraestructura tecnológica como de la forma en que organiza, comunica y posiciona sus contenidos.

    .row.justify-content-center
      .col-lg-8
        .tarjeta.bg-fondo-4.mb-5.p-3
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/common/4.svg").mx-auto
            .col-lg
              h5.d-inline-block.bg-color-5.p-2  Frase de reflexión 
              p.mb-0 La presencia digital de una organización no depende únicamente de la tecnología utilizada, sino de la responsabilidad con la que administra la información, facilita el acceso a los contenidos y genera confianza en quienes interactúan con sus entornos digitales.
    
    .tarjeta.bg-color-4.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-auto.position-relative
          img.d-none.d-lg-block(src="@/assets/curso/common/1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5 Caso de estudio: fortalecimiento de la presencia digital de una empresa
              p.mb-0 Lo invitamos a ver el siguiente casa de estudio de la empresa ficticia Café Montaña, dedicada a la producción y comercialización de café especial, comercializaba sus productos únicamente a través de un punto de venta físico.  
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_01_Caso_de_estudio_fortalecimiento_de_la_presencia_digital_de_una_empresa.pdf')" target="_blank" type="application/pdf")
                span.bg-color-13 Ir al recurso
                i.fas.fa-link.bg-color-13

    .row.justify-content-center
      .col-lg-8
        .tarjeta.bg-fondo-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/common/7.png").mx-auto
            .col-lg
              h5.d-inline-block.bg-color-6.text-white.p-2   Reflexión final
              p.mb-0 La efectividad de la exhibición digital surge de integrar tecnología, comunicación y organización visual para facilitar que los usuarios encuentren, comprendan y valoren la oferta comercial.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
