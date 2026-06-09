const CASES = [
  {
    "name": "Blas",
    "title": "Cuatro hijos y 25 kilos menos",
    "age": "Padre de familia",
    "tags": [
      "Padre",
      "4 hijos",
      "-25 kg",
      "Poco tiempo"
    ],
    "problem": "Trabajo, casa, cuatro hijos y la sensación de que no había tiempo para cuidarse. Durante mucho tiempo pensó que necesitaba una vida más tranquila para empezar.",
    "thought": "“Con cuatro hijos es imposible organizarme.”",
    "process": [
      "Entrenamientos realistas, no interminables.",
      "Organización semanal sencilla.",
      "Comidas pautadas sin eliminar alimentos normales.",
      "Seguimiento constante para no perder el foco."
    ],
    "result": [
      "Más de 25 kilos menos.",
      "Más energía en el día a día.",
      "Volvió a ponerse ropa que llevaba años sin usar.",
      "Recuperó confianza sin vivir esclavo del gimnasio."
    ],
    "lesson": "No necesitas una vida perfecta para cambiar. Necesitas dejar de esperar a que llegue."
  },
  {
    "name": "Ramón",
    "title": "Pensaba que nunca volvería a hacer sentadillas",
    "age": "Más de 50 años",
    "tags": [
      "Rodillas",
      "Fuerza",
      "Sentadillas",
      "Dolor"
    ],
    "problem": "Arrastraba una dolencia importante en las rodillas y tenía asumido que ciertos ejercicios ya no eran para él. La sentadilla le daba respeto y miedo.",
    "thought": "“Con mis rodillas no puedo hacer eso.”",
    "process": [
      "Empezar desde movimientos muy controlados.",
      "Elegir variantes seguras.",
      "Mejorar técnica y rango poco a poco.",
      "Progresar sin prisas y sin ego."
    ],
    "result": [
      "Volvió a hacer sentadillas.",
      "Ganó confianza entrenando pierna.",
      "Mejoró su fuerza.",
      "Dejó de ver sus rodillas como una sentencia."
    ],
    "lesson": "Muchas veces no necesitas dejar de entrenar. Necesitas aprender a entrenar mejor."
  },
  {
    "name": "Dani",
    "title": "21 kilos menos desconfiando del entrenamiento online",
    "age": "Hombre ocupado",
    "tags": [
      "-21 kg",
      "Desconfianza",
      "Online",
      "6 meses"
    ],
    "problem": "Dani llegó con muchas dudas. Desconfiaba de los entrenadores online porque había visto demasiadas promesas y poca realidad.",
    "thought": "“Seguro que esto es otro programa más.”",
    "process": [
      "Estructura clara desde el primer día.",
      "Entrenamiento adaptado a su contexto.",
      "Nutrición práctica y medible.",
      "Comunicación y seguimiento para ejecutar, no improvisar."
    ],
    "result": [
      "21 kilos menos en seis meses.",
      "Muchísima más confianza.",
      "Mejor relación con el entrenamiento.",
      "Entendió que no necesitaba más información, sino aplicar bien."
    ],
    "lesson": "El problema rara vez es la falta de información. Normalmente es la falta de aplicación."
  },
  {
    "name": "Edu",
    "title": "El hombre que dejó de esconderse detrás de una sudadera",
    "age": "Hombre con inseguridad corporal",
    "tags": [
      "Autoestima",
      "Vergüenza",
      "Ropa",
      "Confianza"
    ],
    "problem": "Edu no solo quería perder barriga. Quería dejar de sentirse incómodo con su cuerpo. Le daba vergüenza quitarse la sudadera incluso en el trabajo.",
    "thought": "“Prefiero taparme para que no se note.”",
    "process": [
      "Pérdida de grasa progresiva.",
      "Entrenamiento de fuerza para mejorar el físico.",
      "Control semanal sin obsesionarse.",
      "Pequeñas victorias visibles en ropa y espejo."
    ],
    "result": [
      "Dejó de esconderse.",
      "Ganó seguridad.",
      "Empezó a sentirse cómodo con ropa más ajustada.",
      "Pasó de taparse a querer enseñar su cambio."
    ],
    "lesson": "La pérdida de grasa cambia tu físico. La confianza cambia cómo te relacionas contigo mismo."
  },
  {
    "name": "Manuel",
    "title": "El padre que decía que no tenía tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Poco tiempo",
      "3 días",
      "Organización",
      "Padre"
    ],
    "problem": "Manuel pensaba que para cambiar necesitaba entrenar casi todos los días y tener mucho tiempo libre. Como no lo tenía, siempre posponía el cambio.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Rutina de 3 días semanales.",
      "Sesiones eficientes.",
      "Pautas simples de comida.",
      "Priorizar constancia por encima de perfección."
    ],
    "result": [
      "Empezó a entrenar de forma sostenible.",
      "Perdió grasa sin vivir en el gimnasio.",
      "Mejoró su energía.",
      "Dejó de usar el tiempo como excusa."
    ],
    "lesson": "No necesitas entrenar más. Necesitas entrenar mejor."
  },
  {
    "name": "José",
    "title": "Quince años sentado no son una condena",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga",
      "Hábitos"
    ],
    "problem": "Coche, oficina, sofá. Ese era el ciclo. Después de tantos años sentado, había normalizado la barriga y la falta de energía.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Aumentar movimiento diario.",
      "Entrenamiento de fuerza adaptado.",
      "Nutrición sin extremos.",
      "Revisiones para ajustar poco a poco."
    ],
    "result": [
      "Perdió grasa.",
      "Mejoró su postura y energía.",
      "Recuperó sensación de control.",
      "Entendió que su edad no era el problema."
    ],
    "lesson": "Nunca es demasiado tarde para empezar, pero siempre es demasiado pronto para rendirse."
  },
  {
    "name": "Carlos",
    "title": "Quería ser un mejor ejemplo para sus hijos",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Salud",
      "Disciplina"
    ],
    "problem": "Carlos quería perder grasa, pero detrás había algo más profundo: quería que sus hijos vieran a un padre que se cuida y cumple lo que promete.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Crear rutina realista.",
      "Cuidar alimentación sin aislarse de la familia.",
      "Entrenar sin descuidar sus responsabilidades.",
      "Convertir el cambio en una decisión familiar, no en castigo."
    ],
    "result": [
      "Perdió grasa.",
      "Ganó disciplina.",
      "Mejoró su ejemplo en casa.",
      "Dejó de esperar el momento perfecto."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Rubén",
    "title": "Sabía mucho, pero aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Constancia",
      "Método"
    ],
    "problem": "Rubén sabía de calorías, proteínas y entrenamiento. El problema es que pasaba más tiempo buscando información que ejecutando un plan.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Simplificar decisiones.",
      "Seguir una estructura clara.",
      "Medir lo importante.",
      "Dejar de cambiar de plan cada dos semanas."
    ],
    "result": [
      "Empezó a ser constante.",
      "Progresó sin buscar atajos.",
      "Dejó de marearse con teorías.",
      "Entendió que aplicar vence a saber."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Antonio",
    "title": "Venía de programas que acabaron olvidados",
    "age": "40-50 años",
    "tags": [
      "Experiencias malas",
      "Online",
      "Seguimiento",
      "Confianza"
    ],
    "problem": "Había comprado programas antes. Rutinas, PDFs, planes genéricos. Todo acababa igual: una carpeta olvidada y cero resultados.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Seguimiento real.",
      "Ajustes cuando algo no encajaba.",
      "Pautas claras.",
      "Responsabilidad semanal."
    ],
    "result": [
      "Dejó de improvisar.",
      "Fue constante por primera vez en mucho tiempo.",
      "Recuperó confianza en el proceso.",
      "Entendió la diferencia entre tener un PDF y tener acompañamiento."
    ],
    "lesson": "Un plan no sirve si no lo ejecutas. Y ejecutar es más fácil cuando no estás solo."
  },
  {
    "name": "Sergio",
    "title": "Más de 15 kilos menos sin vivir a dieta",
    "age": "Hombre con vida social",
    "tags": [
      "Vida social",
      "-15 kg",
      "Comer fuera",
      "Adherencia"
    ],
    "problem": "Sergio pensaba que para perder grasa tendría que renunciar a comer fuera, a planes sociales y a alimentos que le gustaban.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Aprender a encajar comidas reales.",
      "Controlar cantidades.",
      "Priorizar proteína y pasos.",
      "No convertir una comida libre en un fin de semana libre."
    ],
    "result": [
      "Más de 15 kilos menos.",
      "Mejor relación con la comida.",
      "Más control en restaurantes.",
      "Menos culpa y más estrategia."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "David",
    "title": "De evitar la playa a disfrutar del verano",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima",
      "Barriga"
    ],
    "problem": "David evitaba situaciones donde tuviera que quitarse la camiseta. Playa, piscina o vestuario eran momentos incómodos.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Objetivo claro de pérdida de grasa.",
      "Entrenamiento de fuerza para cambiar el físico.",
      "Revisión de medidas y fotos.",
      "Constancia sin prisas."
    ],
    "result": [
      "Perdió barriga.",
      "Volvió a sentirse cómodo en verano.",
      "Ganó seguridad.",
      "Dejó de condicionar sus planes por su cuerpo."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Miguel",
    "title": "Trabajaba 10 horas al día y vivía agotado",
    "age": "Profesional ocupado",
    "tags": [
      "Trabajo",
      "Cansancio",
      "Energía",
      "Rutina"
    ],
    "problem": "Miguel terminaba cada día sin energía. Entrenar le parecía una carga más dentro de una vida ya demasiado llena.",
    "thought": "“No me da la vida para cuidarme.”",
    "process": [
      "Entrenos cortos y medibles.",
      "Objetivos semanales concretos.",
      "Pautas de comida fáciles de repetir.",
      "Reducir decisiones innecesarias."
    ],
    "result": [
      "Más energía.",
      "Menos sensación de caos.",
      "Mejor físico.",
      "Más control sobre sus semanas."
    ],
    "lesson": "Cuidarte no te quita energía. Bien planteado, te la devuelve."
  },
  {
    "name": "Javier",
    "title": "De no tener tiempo a entrenar 3 días por semana",
    "age": "Padre y trabajador",
    "tags": [
      "3 días",
      "Padre",
      "Organización",
      "Constancia"
    ],
    "problem": "Javier pensaba que entrenar tres días era poco y que, si no podía hacerlo perfecto, no merecía la pena empezar.",
    "thought": "“Para hacerlo a medias, mejor no lo hago.”",
    "process": [
      "Rutina simple de 3 días.",
      "Progresión de cargas.",
      "Control de pasos.",
      "Nutrición flexible pero medida."
    ],
    "result": [
      "Perdió grasa.",
      "Ganó fuerza.",
      "Fue constante.",
      "Dejó de esperar condiciones perfectas."
    ],
    "lesson": "Tres días bien hechos valen más que seis semanas de intención sin acción."
  }
];