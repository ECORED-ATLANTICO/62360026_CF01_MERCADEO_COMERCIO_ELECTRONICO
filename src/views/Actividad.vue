<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconociendo entornos digitales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos, características y aplicaciones del comercio electrónico, la comunicación online y el lenguaje web, mediante la resolución de preguntas de selección múltiple con única respuesta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué permite comercializar productos mediante internet utilizando tecnologías digitales actualmente disponibles?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar intercambios comerciales mediante plataformas digitales conectadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Organizar inventarios físicos en establecimientos comerciales tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Controlar exclusivamente procesos internos de manufactura empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Gestionar transporte terrestre sin interacción comercial digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué aspecto caracteriza principalmente las tendencias actuales del comercio electrónico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducción permanente del acceso digital para usuarios globales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evolución tecnológica que transforma interacción y procesos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminación completa de contenidos publicados mediante internet actualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustitución exclusiva de plataformas digitales por medios impresos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo comercial relaciona directamente empresas con consumidores finales digitales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'C2B',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'B2B',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'B2C',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'C2C',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál beneficio aportan herramientas utilizadas dentro del comercio electrónico actualmente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limitar actualización permanente de información comercial disponible digitalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restringir interacción entre usuarios y organizaciones participantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente contenidos utilizados para exhibir productos digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitar gestión organizada de procesos comerciales digitales empresariales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué función cumplen dispositivos utilizados dentro del comercio electrónico digital?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir acceso a contenidos comerciales mediante diferentes entornos digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar completamente plataformas utilizadas para comercializar productos digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Gestionar exclusivamente actividades administrativas fuera de internet empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar necesidades tecnológicas asociadas a procesos comerciales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué propósito cumplen aplicaciones utilizadas dentro del comercio electrónico actualmente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limitar actualización de contenidos publicados en plataformas digitales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar gestión organizada de información y procesos comerciales digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente dispositivos utilizados para acceder a internet actualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar interacción entre usuarios y organizaciones mediante canales digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué caracteriza principalmente la comunicación <em>online</em> desarrollada mediante internet actualmente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Intercambio de información utilizando medios digitales conectados permanentemente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Exclusión de usuarios durante procesos comunicativos desarrollados digitalmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustitución completa de contenidos informativos por documentos impresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Restricción permanente del acceso a plataformas utilizadas comercialmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál elemento fortalece principalmente las estrategias de comunicación <em>online</em> organizacional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminación de contenidos utilizados para informar a usuarios digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestión organizada de información relevante para públicos específicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustitución de interacción digital por mecanismos exclusivamente presenciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducción permanente de la visibilidad de contenidos publicados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función cumple un <em>marketplace</em> dentro del comercio electrónico actual?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar buscadores utilizados para localizar información digital disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestionar únicamente contenidos internos de organizaciones comerciales digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Integrar vendedores y compradores dentro de misma plataforma digital.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Almacenar archivos requeridos para funcionamiento de sitios web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Por qué resulta importante utilizar <em>marketplace</em> para exhibir productos digitalmente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque disminuye disponibilidad de información para potenciales compradores digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque elimina interacción comercial entre vendedores y consumidores participantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque amplía visibilidad comercial dentro de entornos digitales compartidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque sustituye completamente plataformas utilizadas para comercio electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué función principal cumplen los buscadores dentro del entorno <em>web</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Almacenar contenidos utilizados por plataformas de comercio electrónico digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar localización de información mediante consultas realizadas por usuarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Gestionar dominios utilizados para identificar sitios web empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir aplicaciones utilizadas para administrar contenidos digitales comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué permite el servicio <em>hosting</em> dentro de un sitio <em>web</em>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar organizaciones mediante nombres utilizados dentro de internet actualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar campañas desarrolladas mediante correo electrónico empresarial digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener disponibles contenidos digitales publicados para usuarios conectados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Organizar resultados mostrados por buscadores durante consultas realizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir identificación y acceso sencillo a sitios web digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Almacenar contenidos requeridos para funcionamiento de páginas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Gestionar procesos comerciales desarrollados mediante plataformas especializadas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar campañas promocionales utilizando mecanismos de comunicación electrónica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué aporte realizan plataformas utilizadas dentro del comercio electrónico actualmente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Restringir publicación de contenidos utilizados para exhibir productos digitales..',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar gestión organizada de información y recursos comerciales digitales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente dominios empleados para identificar sitios web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar acceso de usuarios a contenidos publicados mediante internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué elemento facilita navegación organizada dentro de anatomía web estructurada?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dominio utilizado para identificar organizaciones dentro de internet actualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '<em>Hosting</em> encargado de almacenar contenidos digitales publicados permanentemente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Menú navegación que conecta secciones disponibles para usuarios digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Buscador empleado para localizar información externa al sitio web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué propósito tiene SEO dentro de la visibilidad digital organizacional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar almacenamiento permanente de contenidos publicados mediante internet actualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar visibilidad de contenidos mediante resultados de buscadores digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Gestionar exclusivamente correos electrónicos enviados a usuarios registrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir plataformas utilizadas para administrar comercio electrónico empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál función caracteriza principalmente las acciones desarrolladas mediante SEM actualmente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar estructura interna de páginas utilizadas para exhibición digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar promoción de contenidos dentro de buscadores utilizados digitalmente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Almacenar información requerida para funcionamiento continuo de sitios web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar organizaciones mediante nombres asociados a dominios comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué medio utiliza <em>email marketing</em> para compartir información comercial digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Buscadores empleados para localizar información publicada mediante internet actualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Plataformas destinadas exclusivamente a exhibición de productos digitales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Correo electrónico utilizado para comunicar contenidos a usuarios específicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Servicios <em>hosting</em> encargados del almacenamiento de contenidos empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué beneficio aporta <em>email marketing</em> a organizaciones presentes digitalmente actualmente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar interacción establecida entre usuarios y organizaciones mediante internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar comunicación directa mediante distribución organizada de información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir mecanismos utilizados para localizar contenidos mediante buscadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar plataformas digitales utilizadas para exhibición de productos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cómo contribuye lenguaje web a procesos comerciales desarrollados digitalmente actualmente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilita acceso, organización y visibilidad de contenidos publicados digitalmente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Limita interacción entre usuarios y organizaciones presentes en internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituye completamente herramientas utilizadas dentro del comercio electrónico actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elimina necesidad de comunicación <em>online</em> en entornos comerciales digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
