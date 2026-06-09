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
      "Entrenamiento ajustado a su punto de partida.",
      "Nutrición práctica sin extremos.",
      "Seguimiento para mantener la constancia.",
      "Ajustes cuando aparecían bloqueos reales."
    ],
    "result": [
      "Mejoró su físico.",
      "Ganó confianza.",
      "Aprendió a entrenar y comer con más criterio.",
      "Dejó de improvisar."
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
      "Entrenamiento ajustado a su punto de partida.",
      "Nutrición práctica sin extremos.",
      "Seguimiento para mantener la constancia.",
      "Ajustes cuando aparecían bloqueos reales."
    ],
    "result": [
      "Mejoró su físico.",
      "Ganó confianza.",
      "Aprendió a entrenar y comer con más criterio.",
      "Dejó de improvisar."
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
      "Entrenamiento ajustado a su punto de partida.",
      "Nutrición práctica sin extremos.",
      "Seguimiento para mantener la constancia.",
      "Ajustes cuando aparecían bloqueos reales."
    ],
    "result": [
      "Mejoró su físico.",
      "Ganó confianza.",
      "Aprendió a entrenar y comer con más criterio.",
      "Dejó de improvisar."
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
      "Entrenamiento ajustado a su punto de partida.",
      "Nutrición práctica sin extremos.",
      "Seguimiento para mantener la constancia.",
      "Ajustes cuando aparecían bloqueos reales."
    ],
    "result": [
      "Mejoró su físico.",
      "Ganó confianza.",
      "Aprendió a entrenar y comer con más criterio.",
      "Dejó de improvisar."
    ],
    "lesson": "La pérdida de grasa cambia tu físico. La confianza cambia cómo te relacionas contigo mismo."
  },
  {
    "name": "Carlos",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-12 kg",
      "40-50 años"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Miguel",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Javier",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "José",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-18 kg"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Rubén",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Antonio",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método",
      "Padre"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Sergio",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-24 kg"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "David",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método",
      "40-50 años"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Manuel",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Raúl",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-30 kg"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  },
  {
    "name": "Luis",
    "title": "El que tenía vida social",
    "age": "Hombre con vida social",
    "tags": [
      "Comer fuera",
      "Vida social",
      "Adherencia",
      "Padre"
    ],
    "problem": "Pensaba que para perder grasa tendría que renunciar a cenas, comidas familiares y planes sociales. Eso le hacía abandonar antes de empezar.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "Óscar",
    "title": "El que quería volver a la playa",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima"
    ],
    "problem": "Evitaba playa, piscina o vestuario porque no se sentía cómodo quitándose la camiseta. Su físico estaba condicionando sus planes.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Pedro",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-16 kg"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Andrés",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Fernando",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas",
      "40-50 años"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "Alberto",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-22 kg",
      "Padre"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Marcos",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Iván",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Álvaro",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-28 kg"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "Pablo",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Rafa",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina",
      "Padre"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Héctor",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-14 kg",
      "40-50 años"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  },
  {
    "name": "Víctor",
    "title": "El que tenía vida social",
    "age": "Hombre con vida social",
    "tags": [
      "Comer fuera",
      "Vida social",
      "Adherencia"
    ],
    "problem": "Pensaba que para perder grasa tendría que renunciar a cenas, comidas familiares y planes sociales. Eso le hacía abandonar antes de empezar.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "Francisco",
    "title": "El que quería volver a la playa",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima"
    ],
    "problem": "Evitaba playa, piscina o vestuario porque no se sentía cómodo quitándose la camiseta. Su físico estaba condicionando sus planes.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Juan",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-20 kg"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Jorge",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga",
      "Padre"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Nacho",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "Gonzalo",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-26 kg"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Santi",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación",
      "40-50 años"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Adrián",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Roberto",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-12 kg",
      "Padre"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "Tomás",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Ricardo",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Mario",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-18 kg"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  },
  {
    "name": "César",
    "title": "El que tenía vida social",
    "age": "Hombre con vida social",
    "tags": [
      "Comer fuera",
      "Vida social",
      "Adherencia"
    ],
    "problem": "Pensaba que para perder grasa tendría que renunciar a cenas, comidas familiares y planes sociales. Eso le hacía abandonar antes de empezar.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "Diego",
    "title": "El que quería volver a la playa",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima",
      "Padre",
      "40-50 años"
    ],
    "problem": "Evitaba playa, piscina o vestuario porque no se sentía cómodo quitándose la camiseta. Su físico estaba condicionando sus planes.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Enrique",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-24 kg"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Ángel",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Samuel",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "Ismael",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-30 kg"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Nicolás",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación",
      "Padre"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Hugo",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Bruno",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-16 kg",
      "40-50 años"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "Jaime",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Arturo",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Emilio",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-22 kg",
      "Padre"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  },
  {
    "name": "Germán",
    "title": "El que tenía vida social",
    "age": "Hombre con vida social",
    "tags": [
      "Comer fuera",
      "Vida social",
      "Adherencia"
    ],
    "problem": "Pensaba que para perder grasa tendría que renunciar a cenas, comidas familiares y planes sociales. Eso le hacía abandonar antes de empezar.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "Felipe",
    "title": "El que quería volver a la playa",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima"
    ],
    "problem": "Evitaba playa, piscina o vestuario porque no se sentía cómodo quitándose la camiseta. Su físico estaba condicionando sus planes.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Vicente",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-28 kg"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Álex",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga",
      "40-50 años"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Martín",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas",
      "Padre"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "Eloy",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-14 kg"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Carmelo",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Iker",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Eusebio",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-20 kg"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "Mateo",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método",
      "Padre"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Sebastián",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina",
      "40-50 años"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Lorenzo",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-26 kg"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  },
  {
    "name": "Félix",
    "title": "El que tenía vida social",
    "age": "Hombre con vida social",
    "tags": [
      "Comer fuera",
      "Vida social",
      "Adherencia"
    ],
    "problem": "Pensaba que para perder grasa tendría que renunciar a cenas, comidas familiares y planes sociales. Eso le hacía abandonar antes de empezar.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "Guillermo",
    "title": "El que quería volver a la playa",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima"
    ],
    "problem": "Evitaba playa, piscina o vestuario porque no se sentía cómodo quitándose la camiseta. Su físico estaba condicionando sus planes.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Agustín",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-12 kg"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Bernardo",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Damián",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "Ernesto",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-18 kg",
      "40-50 años"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Gabriel",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Hernán",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método",
      "Padre"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Julio",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-24 kg"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "Leandro",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Mauricio",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Noel",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-30 kg"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  },
  {
    "name": "Oriol",
    "title": "El que tenía vida social",
    "age": "Hombre con vida social",
    "tags": [
      "Comer fuera",
      "Vida social",
      "Adherencia",
      "Padre",
      "40-50 años"
    ],
    "problem": "Pensaba que para perder grasa tendría que renunciar a cenas, comidas familiares y planes sociales. Eso le hacía abandonar antes de empezar.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "Patricio",
    "title": "El que quería volver a la playa",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima"
    ],
    "problem": "Evitaba playa, piscina o vestuario porque no se sentía cómodo quitándose la camiseta. Su físico estaba condicionando sus planes.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Quique",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-16 kg"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Salva",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Teo",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "Ulises",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-22 kg",
      "Padre"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Valentín",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Xavi",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método",
      "40-50 años"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Yago",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-28 kg"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "Zacarías",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Carlos 81",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina",
      "Padre"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Miguel 82",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-14 kg"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  },
  {
    "name": "Javier 83",
    "title": "El que tenía vida social",
    "age": "Hombre con vida social",
    "tags": [
      "Comer fuera",
      "Vida social",
      "Adherencia"
    ],
    "problem": "Pensaba que para perder grasa tendría que renunciar a cenas, comidas familiares y planes sociales. Eso le hacía abandonar antes de empezar.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "José 84",
    "title": "El que quería volver a la playa",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima"
    ],
    "problem": "Evitaba playa, piscina o vestuario porque no se sentía cómodo quitándose la camiseta. Su físico estaba condicionando sus planes.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Rubén 85",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-20 kg",
      "40-50 años"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Antonio 86",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga",
      "Padre"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Sergio 87",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "David 88",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-26 kg"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Manuel 89",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Raúl 90",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Luis 91",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-12 kg",
      "Padre"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "Óscar 92",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método",
      "40-50 años"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Pedro 93",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Andrés 94",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-18 kg"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  },
  {
    "name": "Fernando 95",
    "title": "El que tenía vida social",
    "age": "Hombre con vida social",
    "tags": [
      "Comer fuera",
      "Vida social",
      "Adherencia"
    ],
    "problem": "Pensaba que para perder grasa tendría que renunciar a cenas, comidas familiares y planes sociales. Eso le hacía abandonar antes de empezar.",
    "thought": "“No quiero vivir a pechuga y lechuga.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas comer perfecto. Necesitas saber qué hacer la mayoría del tiempo."
  },
  {
    "name": "Alberto 96",
    "title": "El que quería volver a la playa",
    "age": "Hombre con complejos",
    "tags": [
      "Verano",
      "Camiseta",
      "Autoestima",
      "Padre"
    ],
    "problem": "Evitaba playa, piscina o vestuario porque no se sentía cómodo quitándose la camiseta. Su físico estaba condicionando sus planes.",
    "thought": "“Prefiero no ir antes que verme así.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de verte mejor. Se trata de dejar de esconderte."
  },
  {
    "name": "Marcos 97",
    "title": "Padre sin tiempo",
    "age": "Padre trabajador",
    "tags": [
      "Padre",
      "Poco tiempo",
      "Organización",
      "-24 kg"
    ],
    "problem": "Trabajo, familia y responsabilidades. Sentía que cada semana empezaba con buenas intenciones y terminaba igual: cansado, sin entrenar y comiendo lo primero que encontraba.",
    "thought": "“Cuando tenga menos lío, empezaré.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas más tiempo. Necesitas una estructura que encaje con tu vida real."
  },
  {
    "name": "Iván 98",
    "title": "El que vive sentado",
    "age": "Trabajo de oficina",
    "tags": [
      "Oficina",
      "Sedentarismo",
      "Barriga"
    ],
    "problem": "Pasaba demasiadas horas sentado entre coche, oficina y sofá. Había normalizado sentirse pesado, sin energía y con la barriga cada vez más presente.",
    "thought": "“A mi edad esto ya es lo normal.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tu trabajo no tiene por qué condenarte. Tus hábitos sí pueden cambiar."
  },
  {
    "name": "Álvaro 99",
    "title": "El que desconfiaba del online",
    "age": "Hombre escéptico",
    "tags": [
      "Desconfianza",
      "Online",
      "Experiencias malas",
      "40-50 años"
    ],
    "problem": "Había probado planes, PDFs y rutinas genéricas que acababan olvidadas. Llegó pensando que esto podía ser más de lo mismo.",
    "thought": "“Seguro que al final me dejan solo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "La diferencia no está en tener un plan. Está en tener un plan que se ajuste y se ejecute."
  },
  {
    "name": "Pablo 100",
    "title": "El que se escondía con ropa ancha",
    "age": "Hombre con complejos",
    "tags": [
      "Autoestima",
      "Ropa",
      "Vergüenza",
      "-30 kg"
    ],
    "problem": "Usaba ropa ancha para disimular y evitaba situaciones donde su cuerpo quedara demasiado expuesto. El problema no era solo físico, también era mental.",
    "thought": "“Prefiero que no se me note.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No se trata solo de perder barriga. Se trata de volver a estar cómodo contigo."
  },
  {
    "name": "Rafa 101",
    "title": "El que arrastraba dolor",
    "age": "Hombre con molestias",
    "tags": [
      "Dolor",
      "Fuerza",
      "Adaptación",
      "Padre"
    ],
    "problem": "Tenía molestias en rodillas, hombros o espalda y pensaba que entrenar fuerte ya no era para él. El miedo le hacía evitar ejercicios importantes.",
    "thought": "“Con esta lesión no puedo entrenar bien.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "A veces no hay que parar. Hay que adaptar, aprender y progresar con cabeza."
  },
  {
    "name": "Héctor 102",
    "title": "El que sabía mucho y aplicaba poco",
    "age": "Hombre informado",
    "tags": [
      "Información",
      "Ejecución",
      "Método"
    ],
    "problem": "Sabía de calorías, proteínas y entrenamiento, pero cambiaba de plan constantemente. Tenía mucha información y poca ejecución sostenida.",
    "thought": "“Me falta encontrar el método perfecto.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Saber no cambia tu cuerpo. Aplicar sí."
  },
  {
    "name": "Víctor 103",
    "title": "El viajero de trabajo",
    "age": "Profesional con viajes",
    "tags": [
      "Viajes",
      "Restaurantes",
      "Poco tiempo",
      "-16 kg"
    ],
    "problem": "Viajaba por trabajo, comía fuera con frecuencia y pensaba que eso hacía imposible perder grasa de forma seria.",
    "thought": "“Con tantos viajes no puedo seguir nada.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "No necesitas una vida sin imprevistos. Necesitas saber actuar dentro de ellos."
  },
  {
    "name": "Francisco 104",
    "title": "El que se estancaba siempre",
    "age": "Hombre frustrado",
    "tags": [
      "Estancamiento",
      "Constancia",
      "Método"
    ],
    "problem": "Empezaba fuerte, bajaba algo de peso y luego se quedaba parado. En ese punto solía abandonar o cambiarlo todo.",
    "thought": "“Mi cuerpo se acostumbra y ya no bajo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Un estancamiento no siempre exige cambiarlo todo. Muchas veces exige ajustar y seguir."
  },
  {
    "name": "Juan 105",
    "title": "El padre que quería ser ejemplo",
    "age": "Padre",
    "tags": [
      "Hijos",
      "Ejemplo",
      "Disciplina"
    ],
    "problem": "Quería que sus hijos vieran a un padre que cumple lo que promete. No buscaba solo perder grasa, buscaba recuperar coherencia.",
    "thought": "“No quiero que mis hijos me vean abandonar otra vez.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Tus hijos no necesitan un padre perfecto. Necesitan un padre que se cuide."
  },
  {
    "name": "Jorge 106",
    "title": "El que odiaba el gimnasio",
    "age": "Principiante",
    "tags": [
      "Gimnasio",
      "Vergüenza",
      "Principiante",
      "-22 kg",
      "Padre"
    ],
    "problem": "Entrar al gimnasio le daba vergüenza. No sabía qué hacer, sentía que todos miraban y eso le frenaba más que la propia barriga.",
    "thought": "“Voy a hacer el ridículo.”",
    "process": [
      "Definir una rutina realista según su vida actual.",
      "Eliminar la improvisación entre semana.",
      "Ajustar comida y entrenamiento sin medidas extremas.",
      "Revisar avances y corregir antes de abandonar."
    ],
    "result": [
      "Perdió grasa de forma progresiva.",
      "Ganó fuerza y seguridad.",
      "Mejoró su relación con el entrenamiento.",
      "Volvió a sentir que tenía el control."
    ],
    "lesson": "Nadie nace sabiendo entrenar. Se aprende, igual que todo lo importante."
  }
];