<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_1
        span 2
      h1 Procesamiento de datos

    .row.mb-5.justify-content-center
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/t2-1.png', alt='Texto que describa la imagen')
      .col-12.col-md-6.d-flex.align-items-center.bg_grad-02(data-aos="fade-left")
        p.mb-0 Los datos en bruto no son útiles para ninguna organización, ya que solos o no organizados no dicen nada o no aportan nada a la gestión de la misma; sin embargo, cuando se hace el procesamiento de datos se utiliza un método de recopilación de datos en bruto y se usa para hacer la traducción de estos en información utilizable, útil y organizada, es cuando realmente toman relevancia. Este suele realizarse en un proceso paso a paso por un equipo de científicos e ingenieros de datos. El proceso es el siguiente:
    
    .row.mb-5.justify-content-center
      .col-12.col-md-10 
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 1
          span Procesamiento de datos
        figure
          img(src='@/assets/curso/tema2/t2-2.svg', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center
      .col-12.col-md-7.bg_grad-03.mb-3.mb-md-0(data-aos="fade-up-right")
        p El procesamiento de datos es de gran importancia para que las organizaciones creen mejores estrategias de negocio y aumenten su ventaja competitiva. Al convertir los datos en un formato legible, como: gráficos, tablas y documentos, los empleados de toda la organización pueden entenderlos y utilizarlos para el beneficio de la empresa.
        p.mb-0 Por otro lado, el ciclo de procesamiento de datos consiste en una serie de pasos en los que los datos en bruto (entrada) se introducen en un proceso para producir información procesable (salida). Cada paso se realiza en un orden determinado, pero todo se repite de forma cíclica. El resultado del primer ciclo de procesamiento de datos puede almacenarse y utilizarse como entrada para el siguiente ciclo. 
      .col-12.col-md-3(data-aos="fade-up-left")
        figure
          img(src='@/assets/curso/tema2/t2-3.svg', alt='Texto que describa la imagen')
  
    p.mb-5 En general, el ciclo de procesamiento de datos consta de seis pasos principales que se describen de la siguiente manera:

    .row.mb-5.justify-content-center
      .col-12.col-md-10
        PasosA.color-acento-botones.mb-5.colr_5(tipo="n")
          .row
            .col-md-2.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img.img80(src='@/assets/curso/tema2/t2-4.svg', alt='Texto que describa la imagen')
            .col-md-10(data-aos="fade-left")
              h3 Recogida
              p La recogida de datos brutos es el primer paso del ciclo de procesamiento. El tipo de datos brutos recogidos tiene un gran impacto en el resultado obtenido. Por lo tanto, estos deben recogerse de fuentes definidas y precisas para que los resultados posteriores sean válidos y utilizables. 
              p.mb-0 Los datos brutos pueden incluir cifras monetarias, cookies de sitios web, estados de pérdidas y ganancias de una empresa, comportamiento de los usuarios, etc.
          .row
            .col-md-10.order-2.order-md-1(data-aos="fade-right")
              h3 Preparación
              p.mb-0 La preparación o limpieza de los datos es el proceso de clasificación y filtrado que se les hace para eliminar los datos innecesarios e inexactos. Los datos brutos se comprueban para detectar errores, duplicaciones, cálculos erróneos o datos que faltan, y se transforman en una forma adecuada para su posterior análisis y procesamiento. Esto se hace para garantizar que solo se introducen en la unidad de procesamiento los datos de mayor calidad.
            .col-md-2.mb-4.mb-md-0.order-1.order-md-2(data-aos="fade-left")
              figure
                img.img80(src='@/assets/curso/tema2/t2-5.svg', alt='Texto que describa la imagen')
          .row
            .col-md-2.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img.img80(src='@/assets/curso/tema2/t2-6.svg', alt='Texto que describa la imagen')
            .col-md-10(data-aos="fade-left")
              h3 Entrada
              p.mb-0 En este paso los datos brutos se convierten en un formato legible por la máquina y se introducen en la unidad de procesamiento. Puede ser en forma de entrada de datos a través de un teclado, un escáner o cualquier otra fuente de entrada. 
          .row
            .col-md-10.order-2.order-md-1(data-aos="fade-right")
              h3 Procesamiento de datos
              p.mb-0 En este paso, los datos brutos se someten a varios métodos de procesamiento de datos utilizando algoritmos de aprendizaje automático e inteligencia artificial para generar un resultado deseable. Este paso puede variar ligeramente de un proceso a otro en función de la fuente de datos que se procese (lagos de datos, bases de datos en línea, dispositivos conectados, etc.) y del uso previsto del resultado.
            .col-md-2.mb-4.mb-md-0.order-1.order-md-2(data-aos="fade-left")
              figure
                img.img80(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
          .row
            .col-md-2.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img.img80(src='@/assets/curso/tema2/t2-8.svg', alt='Texto que describa la imagen')
            .col-md-10(data-aos="fade-left")
              h3 Salida
              p.mb-0 Finalmente los datos se transmiten y se muestran al usuario en una forma legible como gráficos, tablas, archivos vectoriales, audio, vídeo, documentos, etc. Esta salida puede ser almacenada y procesada en el siguiente ciclo de procesamiento de datos. 
          .row
            .col-md-10.order-2.order-md-1(data-aos="fade-right")
              h3 Almacenamiento
              p.mb-0 El último paso del ciclo de procesamiento de datos es el almacenamiento, en el que se guardan los datos y metadatos para su posterior uso. Esto permite un rápido acceso y recuperación de la información siempre que se necesite, y utilizarla como entrada en el siguiente ciclo de procesamiento de datos directamente.
            .col-md-2.mb-4.mb-md-0.order-1.order-md-2(data-aos="fade-left")
              figure
                img.img80(src='@/assets/curso/tema2/t2-9.svg', alt='Texto que describa la imagen')
    
    p.mb-5 Tenga en cuenta que se distinguen tres métodos principales de procesamiento de datos que debe conocer para poder usarlos de forma adecuada, por lo que le invito a revisar el recurso que a continuación se muestra y los explica:

    .tarjeta.bgr_15.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row
          .col-md-4.p-4
            h4.mb-5 Procesamiento manual de datos 
            p En este método los datos se procesan manualmente. 
            p Todo el proceso de recopilación de datos, filtrado, clasificación, cálculo y otras operaciones lógicas se realiza con intervención humana, sin utilizar ningún otro dispositivo electrónico o software de automatización.
            p.mb-0 Es un método de bajo coste y no requiere apenas herramientas, pero produce grandes errores, altos costes de mano de obra y mucho tiempo.
          .col-md-8.p-4
            figure
              img(src='@/assets/curso/tema2/t2-10.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.p-4
            h4.mb-5 Procesamiento mecánico de datos 
            p Los datos se procesan mecánicamente mediante el uso de dispositivos y máquinas. 
            p Estos pueden incluir dispositivos simples como  calculadoras, máquinas de escribir, imprentas, etc. Con este método se pueden realizar operaciones sencillas de procesamiento de datos. 
            p.mb-0 Tiene muchos menos errores que el procesamiento manual de datos, pero el aumento de estos ha hecho que este método sea más complejo y difícil.
          .col-md-8.p-4
            figure
              img(src='@/assets/curso/tema2/t2-11.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.p-4
            h4.mb-5 Procesamiento electrónico de datos 
            p Los datos se procesan con tecnologías modernas utilizando <em>software</em> y programas de procesamiento de datos. Se da un conjunto de instrucciones al <em>software</em> para que  los procese  y produzca un resultado. 
            p.mb-0 Este método es el más caro, pero proporciona velocidades de procesamiento más rápidas con la mayor fiabilidad y precisión de los resultados.
          .col-md-8.p-4
            figure
              img(src='@/assets/curso/tema2/t2-12.png', alt='Texto que describa la imagen')
 
    p.mb-5 El procesamiento de datos se produce en cada parte de la vida cotidiana, por lo que a continuación se relacionan algunos ejemplos de su uso en la vida real:

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/K3U38rfBGWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.1 Características, tipos y técnicas

    p.mb-5 Una de las cosas más importantes que hay que recordar siempre es que no todos los datos pueden considerarse de buena calidad, por lo que su utilidad es limitada. Para aprovechar al máximo los beneficios de los datos, estos deben cumplir con algunos estándares, lo que significa que hay que buscar ciertas características en ellos, encontrando:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img.img140(src='@/assets/curso/tema2/t2-13.svg' alt='AvatarTop')
        .tarjeta.bgr_16
          .p-5
            .text-center
              p.text-bold Precisos
              span Los datos deben ser precisos, lo que significa que deben contener información exacta, esta ahorra tiempo y dinero al usuario.
      .tarjeta-avatar
        img.img140(src='@/assets/curso/tema2/t2-14.svg' alt='AvatarTop')
        .tarjeta.bgr_16
          .p-5
            .text-center
              p.text-bold Relevantes
              span Los datos deben ser relevantes y acordes con las necesidades del usuario. Por lo tanto, hay que comprobar su legitimidad antes de considerarlos para su uso.
      .tarjeta-avatar
        img.img140(src='@/assets/curso/tema2/t2-15.svg' alt='AvatarTop')
        .tarjeta.bgr_16
          .p-5
            .text-center
              p.text-bold Coherentes
              span Los datos deben ser coherentes y fiables. Los  datos falsos son peores que los datos incompletos o la ausencia de datos.
      .tarjeta-avatar
        img.img140(src='@/assets/curso/tema2/t2-16.svg' alt='AvatarTop')
        .tarjeta.bgr_16
          .p-5
            .text-center
              p.text-bold Accesibles
              span La relevancia de los datos es necesaria para que sean de buena calidad, útiles y accesibles en todo momento. 
      .tarjeta-avatar
        img.img140(src='@/assets/curso/tema2/t2-17.svg' alt='AvatarTop')
        .tarjeta.bgr_16
          .p-5
            .text-center
              p.text-bold Dato único
              span Un dato de alta calidad es único para las necesidades del usuario y pueden ser procesados con facilidad. 

    p.mb-5 Otro de los elementos clave que se debe tener en cuenta son las técnicas de recolección de información que se pueden usar en un proceso de investigación, las cuales son analizadas en el siguiente recurso:

    AcordionA.mb-5.bgr_9(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Observación").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p La simple observación es útil y factible cuando se trata de conocer hechos o situaciones que de alguna manera tienen cierto carácter público, o que al menos no pertenecen estrictamente a la esfera del comportamiento privado de los individuos. 
          p Es viable mediante este procedimiento conocer los hábitos de compra, el  comportamiento político o los hábitos de las personas observadas como son: 
          p.mb-0.text-bold •	Hábitos de vestimenta,
          p.mb-0.text-bold •	Asistencia a lugares públicos y
          p.text-bold •	Comportamiento social, etc. 
          p.mb-0 Los datos obtenidos apuntan casi siempre a los aspectos más superficiales o visibles de la realidad social, aunque  esto no significa que carezcan de importancia.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-18.png', alt='Texto que describa la imagen')
      .row(titulo="Entrevista").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p Desde el punto de vista del método, es una forma específica de interacción social cuya finalidad es recoger datos para una investigación.
          p Aquí el investigador hace preguntas a personas capaces de proporcionarle datos de interés, estableciendo un diálogo peculiar y asimétrico, donde una de las partes busca recoger información y la otra es la fuente de esa información. Por razones obvias, solo se utiliza, con raras excepciones en las ciencias humanas. 
          p.mb-0 La ventaja esencial de la entrevista radica en que son los propios actores sociales los que proporcionan los datos relativos a sus comportamientos, opiniones, deseos, actitudes y expectativas, que por su propia naturaleza son casi imposibles de observar desde el exterior. Nadie mejor que la persona implicada para contar lo que piensa y siente, lo que ha vivido o lo que piensa hacer.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-19.png', alt='Texto que describa la imagen')
      .row(titulo="Encuesta").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p Es un diseño que proporciona un plan para efectuar una descripción numérica de las tendencias, actitudes u opiniones de una población mediante el estudio de una muestra de la misma.
          p Es decir, en la literatura clásica sobre metodología de la investigación, la encuesta es considerada como una técnica cuantitativa para recoger, a través de preguntas, datos de un grupo seleccionado de personas; sin embargo, más recientemente algunos autores consideran que también puede ser utilizada para recoger datos cualitativos o mixtos. 
          p.mb-0 En realidad, las encuestas son diseños no experimentales que la mayoría de las veces son transversales, aunque si se repiten periódicamente desarrollan un formato longitudinal y consisten en preguntar a los individuos sobre cuestiones específicas y obtener sus respuestas.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-20.png', alt='Texto que describa la imagen')
      .row(titulo="Análisis documental").p-4
        .col-md-8.mb-4.mb-md-0.align-items-center.p-4
          p El análisis de documentos es un procedimiento sistemático para revisar o evaluar documentos, tanto impresos como lo son: los folletos, libros, periódicos, revistas, y los electrónicos (basados en el ordenador y transmitidos por internet).
          p Al igual que otros métodos analíticos de la investigación cualitativa, el análisis de documentos requiere que los datos sean examinados e interpretados con el fin de obtener significado, comprensión y desarrollar conocimiento empírico. Estos contienen texto (palabras) e imágenes que se han registrado sin la intervención del investigador. 
          p.mb-0 A efectos de este debate, no se incluyen otras pruebas mudas o de rastreo, como los artefactos se refieren a los documentos como “hechos sociales”, que se producen, se comparten y se utilizan de forma socialmente organizada.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-21.png', alt='Texto que describa la imagen')
     
    separador

    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.2 Instrumentos de recolección de datos
    
    .row.mb-5.justify-content-center
      .col-12.col-md-6.d-flex.align-items-center.bg_grad-01(data-aos="fade-right")
        div
          p Las herramientas o instrumentos de recopilación de datos se refieren a los dispositivos/instrumentos utilizados para recopilar datos, como un cuestionario en papel o un sistema de entrevistas asistido por ordenador, en adición los estudios de casos, las listas de comprobación, las entrevistas, la observación en ocasiones y las encuestas o cuestionarios son todas herramientas utilizadas para recoger datos. 
          p Es importante decidir las herramientas de recogida de datos porque la investigación se lleva a cabo de diferentes maneras y con diferentes fines. El objetivo de la recogida de datos es captar pruebas de calidad que permitan un análisis que conduzca a la formulación de respuestas convincentes y creíbles a las preguntas planteadas.
      .col-12.col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/t2-22.png', alt='Texto que describa la imagen')

    p.mb-5 Para la recogida de datos se cuenta con algunas herramientas que permiten recopilar información fácilmente, veámoslas:

    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Instrumentos de recolección de datos
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
                
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Entrevistas")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-23.png', alt='Texto que describa la imagen')
          .col-md-6
            p.mb-0.text-bold Grabadora de audio
            p Una grabadora de audio se utiliza para registrar el sonido en un disco, una cinta o una película. La información de audio puede satisfacer las necesidades de una amplia gama de personas, así como proporcionar alternativas a las herramientas de recogida de datos impresas.

            p.mb-0.text-bold Cámara digital
            p Una de las ventajas de una cámara digital es que puede utilizarse para transmitir esas imágenes a la pantalla de un monitor cuando sea necesario. 

            p.mb-0.text-bold Videocámara
            p Se utiliza para recoger datos mediante entrevistas. Es una combinación de grabadora de audio y cámara de vídeo. Los datos que proporciona son de naturaleza cualitativa y permiten a los encuestados responder exhaustivamente a las preguntas que se les formulan.

            p Si necesitas recopilar información sensible durante una entrevista, una videocámara podría no servirte, ya que tendrías que mantener la privacidad del sujeto.
      .py-4.py-md-5(titulo="La observación")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-24.png', alt='Texto que describa la imagen')
          .col-md-6
            p Esta implica la adquisición activa de información de una fuente primaria y el registro de datos mediante el uso de instrumentos científicos. Las mejores herramientas para la observación son:
            p.mb-0.text-bold Listas de comprobación
            p Criterios específicos del estado, permiten a los usuarios recopilar información y emitir juicios sobre lo que deben saber en relación con los resultados. Ofrecen formas sistemáticas de recoger datos sobre comportamientos, conocimientos y habilidades específicos.
            p.mb-0.text-bold Observación directa
            p Es un método de estudio observacional para recoger información evaluativa. El evaluador observa al sujeto en su entorno habitual sin alterar dicho entorno.
      .py-4.py-md-5(titulo="Los cuestionarios")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-25.png', alt='Texto que describa la imagen')
          .col-md-6
            p Hacen referencia al proceso de recogida de datos mediante un instrumento que consiste en una serie de preguntas e indicaciones para recibir una respuesta de los individuos a los que se administra. Los cuestionarios están diseñados para recoger datos de un grupo, ya sean en un sistema informático en línea o en papel.
            p.mb-0.text-bold Encuestas en línea
            p Existen diversas formas en la red que permiten  crear potentes formularios que le ayudarán a recoger la información que necesita. Podemos referenciar Google - documentos - formularios que ayuda a crear los formularios en línea que desee. La plantilla de formulario de cuestionario en línea de Formatos permite obtener tendencias procesables y respuestas medibles. 
            p.mb-0.text-bold Cuestionario en papel
            p Un cuestionario en papel es una herramienta de recopilación de datos que consiste en una serie de preguntas y/o avisos para recopilar información de los encuestados. Diseñados principalmente para el análisis estadístico de las respuestas, también pueden utilizarse como forma de recogida de datos.
      .py-4.py-md-5(titulo="Análisis documental")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-26.png', alt='Texto que describa la imagen')
          .col-md-6
            p Las herramientas de elaboración de informes o análisis documental, permiten extraer y presentar los datos en gráficos, tablas y otras visualizaciones para que los usuarios puedan encontrar información útil. Los datos para la elaboración de informes pueden proceder de documentos de Organizaciones No Gubernamentales (ONG), periódicos, artículos de sitios web.
            p.mb-0.text-bold Informes de ONG
            p Los informes de las ONG contienen datos exhaustivos y completos sobre las actividades realizadas por la ONG, que abarca ámbitos como los negocios y los Derechos Humanos. 
            p.mb-0.text-bold Periódicos
            p Los datos de los periódicos son relativamente fáciles de recopilar y a veces son la única fuente disponible de forma continua de datos sobre acontecimientos, aunque existe un problema de sesgo en los datos.
            p.mb-0.text-bold Artículos de sitios web
            p La recopilación y el uso de los datos contenidos en los artículos de los sitios web es también otra herramienta para la recogida de datos, es más rápida y menos costosa pero tiene sesgos y los posibles problemas de seguridad/confidencialidad.
   
    p.mb-5 El método de investigación combinada implica dos o más métodos de recogida de datos, por ejemplo: entrevistas y cuestionarios o una combinación de entrevistas telefónicas semiestructuradas y grupos de discusión. Las principales herramientas para la investigación combinada se pueden revisar a continuación:

    .row.mb-3(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr.text-center Investigación combinada Tipos
        img.pst(src='@/assets/componentes/hojas.svg' alt='AvatarTop')
    
    .tarjeta.bgr_15.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row
          .col-md-8.p-4
            h4.mb-5 Encuesta en línea 
            p Las dos herramientas combinadas aquí son las entrevistas en línea y el uso de cuestionarios. Se trata de un cuestionario que el público objetivo puede rellenar a través de internet. Es oportuno, eficaz y eficiente. Sobre todo, porque los datos que se recogen son de naturaleza cuantitativa.
          .col-md-4.p-4
            figure
              img(src='@/assets/curso/tema2/t2-27.png', alt='Texto que describa la imagen')
        .row
          .col-md-8.p-4
            h4.mb-5 Doble moderador 
            p Las dos herramientas que se combinan aquí son los grupos de discusión y los cuestionarios estructurados. Los cuestionarios estructurados marcan el rumbo de la investigación, mientras que dos moderadores se encargan de los procedimientos. 
            p Mientras uno se encarga de que la sesión del grupo de discusión se desarrolle sin problemas, el otro se asegura de que se traten todos los temas en cuestión. Los grupos focales con dos moderadores suelen dar lugar a una sesión más productiva y, fundamentalmente, a una recogida óptima de datos.
          .col-md-4.p-4
            figure
              img(src='@/assets/curso/tema2/t2-28.png', alt='Texto que describa la imagen')
    
    separador

    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.3 Parámetros de calidad
    
    p.mb-5 A estos se les conoce como el tamaño que caracteriza el nivel de calidad de determinados bienes de consumo, de producción y de los procesos que conducen a la producción de un determinado bien. La calidad de los datos tiene cinco características que son: 

    LineaTiempoD.color-primario
      .row(numero="1" titulo="Exactitud")
        .col-md-8.mb-4.mb-md-0.p-4
          p Esta característica de calidad de los datos significa que la información es correcta. Para determinar si estos son exactos o no, pregúntese si la información refleja una situación del mundo real. Por ejemplo, en el ámbito de los servicios financieros, ¿tiene un cliente realmente un millón de dólares en su cuenta bancaria?
          p La exactitud es una característica crucial de la calidad de los datos porque la información inexacta puede causar problemas importantes con graves consecuencias. En el ejemplo anterior: si hay un error en la cuenta bancaria de un cliente, podría ser porque alguien accedió a ella sin su conocimiento.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-29.png', alt='Texto que describa la imagen')
      .row(numero="2" titulo="Integridad")
        .col-md-8.mb-4.mb-md-0.p-4
          p Esta se refiere a la amplitud de la información. Al examinar la integridad de los datos, piense en si todos los que necesita están disponibles; puede necesitar el nombre y el apellido de un cliente, pero la inicial del segundo nombre puede ser opcional.
          p ¿Por qué es importante la integridad como característica de calidad de los datos? Si la información está incompleta, puede ser inutilizable. Suponga que va a enviar un correo, necesita el apellido del cliente para asegurarse que el correo va a la dirección correcta; sin él, los datos están incompletos.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-30.png', alt='Texto que describa la imagen')
      .row(numero="3" titulo="Fiabilidad")
        .col-md-8.mb-4.mb-md-0.p-4
          p En el ámbito de las características de la calidad de los datos, la fiabilidad significa que un dato no se contradice con otro en una fuente o sistema diferente. 
          p Un ejemplo del ámbito sanitario podría ser:  si la fecha de un pedido es el 1 de abril de 2022 en un sistema, pero es el 15 de abril de 2022 en otro, la información no es fiable. 
          p La fiabilidad es una característica vital de la calidad de los datos. Cuando las piezas de información se contradicen, no se puede confiar en los datos. Podría cometer un error que podría costar a su empresa dinero y daños a su reputación.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-31.png', alt='Texto que describa la imagen')
      .row(numero="4" titulo="Pertinencia")
        .col-md-8.mb-4.mb-md-0.p-4
          p Cuando se analizan las características de la calidad de los datos, la relevancia entra en juego porque tiene que haber una buena razón para recoger esta información en primer lugar. Debe considerar si realmente necesita esta información o si la está recopilando solo porque sí.
          p ¿Por qué es importante la pertinencia como característica de calidad de los datos? Si se recoge información irrelevante, se pierde tiempo y dinero; y sus análisis no serán tan valiosos. 
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-32.png', alt='Texto que describa la imagen')
      .row(numero="5" titulo="Puntualidad")
        .col-md-8.mb-4.mb-md-0.p-4
          p La puntualidad se refiere a la actualidad de la información. Si se ha recogido en la última hora, es oportuna, a menos que haya llegado información nueva que haga inútil la anterior. 
          p La puntualidad de la información es una característica importante de la calidad de los datos, porque la información que no es oportuna puede llevar a las personas a tomar decisiones equivocadas. A su vez, esto cuesta a las organizaciones tiempo, dinero y daños a la reputación.
          p "La puntualidad es una característica importante de la calidad de los datos: la información desactualizada cuesta tiempo y dinero a las empresas“.
        .col-md-4
          figure
            img(src='@/assets/curso/tema2/t2-33.png', alt='Texto que describa la imagen')


     


  



</template>

<script>
export default {
  name: 'Tema2',
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
