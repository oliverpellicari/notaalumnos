Aquí tienes una propuesta para la documentación de tu proyecto, que puedes agregar al archivo `README.md`:

---

# Proyecto de Gestión de Centro Formativo

Este proyecto es una aplicación para gestionar las notas de los estudiantes en un centro formativo. Se ha desarrollado utilizando **Node.js**, **Express**, **EJS** para las vistas, y **CSS** para la interfaz visual. En esta sección de la aplicación se incluye la funcionalidad para introducir y visualizar las notas de los alumnos.

## Descripción del Proyecto

El objetivo de este proyecto es permitir a los usuarios introducir las notas de los estudiantes, validarlas, calcular la nota media, y mostrar tanto las notas individuales como la media de un grupo de alumnos.

La aplicación cuenta con una interfaz sencilla donde se introducen las notas a través de un formulario. Se verifican mediante validación, y se guardan en un objeto que pertenece a la clase `Grupo`. Este objeto almacena el número de alumnos, las notas de todos ellos, y la media de dichas notas.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
/public
    /css
        styles.css  <-- Estilos del formulario de notas

/views
    introducirNotas.ejs  <-- Vista principal para la introducción de notas

/models
    grupo.js  <-- Clase Grupo que gestiona las notas y la media

/routes
    usuario.js  <-- Controlador de la sección de introducción de notas

app.js  <-- Archivo principal que configura la aplicación y las rutas
README.md  <-- Documentación del proyecto
```

## Clase `Grupo`

La clase `Grupo` se encuentra en el archivo `grupo.js` dentro de la carpeta `models`. Esta clase es fundamental para gestionar los datos de los alumnos. Sus atributos y métodos son los siguientes:

- **Atributos:**
  - `numeroAlumnos`: Número total de alumnos (en este caso, 4).
  - `notas`: Un array que contiene las notas de todos los alumnos.
  - `notaMedia`: Calcula automáticamente la media de las notas al instanciar la clase.

- **Métodos:**
  - `calcularMedia()`: Calcula la media de las notas.
  - `visualizarMedia()`: Muestra la nota media del grupo.
  - `visualizarNotas()`: Muestra las notas de todos los alumnos.

## Instalación y Configuración

Sigue estos pasos para instalar y configurar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/oliverpellicari/nombre-de-tu-repo.git
   ```

2. **Instalar dependencias:**
   Navega hasta la carpeta del proyecto e instala las dependencias con el siguiente comando:
   ```bash
   npm install
   ```

3. **Estructura de archivos:**
   - Asegúrate de tener la siguiente estructura:
     ```
     /public
         /css
             styles.css
     /views
         introducirNotas.ejs
     /models
         grupo.js
     /routes
         usuario.js
     app.js
     ```

4. **Iniciar el servidor:**
   Una vez instaladas las dependencias, puedes iniciar el servidor con el comando:
   ```bash
   npm start
   ```

5. **Abrir en el navegador:**
   Abre tu navegador y navega a `http://localhost:3000/introducirNotas` para acceder a la aplicación.

## Uso de la Aplicación

1. **Introducción de Notas:**
   - Al acceder a la vista de introducción de notas, verás un formulario con cuatro campos para ingresar las notas de los alumnos. 
   - Introduce valores numéricos entre 0 y 9.95 para cada alumno y presiona el botón **"Guardar Notas"**. Las notas serán validadas antes de guardarse.
   
2. **Visualización de las Notas y Media:**
   - Después de guardar las notas, podrás presionar el botón **"Mostrar Notas y Media"** para ver la media de las notas y las notas individuales.

## Validación

Se utiliza un bloque `try-catch` para validar las notas. Si se introduce un valor fuera del rango permitido (0 a 9.95), el programa lanzará un error y mostrará un mensaje indicando el problema. Las notas deben ser corregidas antes de poder guardarlas correctamente.

## Estilos

El archivo `styles.css` en la carpeta `public/css` contiene los estilos visuales de la sección de introducción de notas. Este archivo se encarga de darle un diseño moderno y atractivo a la interfaz, incluyendo sombras suaves, bordes redondeados, y botones interactivos que cambian de color al hacer hover.

## Contribuciones

Si deseas contribuir al proyecto, puedes hacer un **fork** del repositorio, realizar tus cambios y enviar un **pull request** para que lo revisemos.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes consultar los detalles completos en el archivo `LICENSE`.

---

