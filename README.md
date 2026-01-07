[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/g9wsLQz6)
# 📘 DWEC06 - Tarea de Evaluación

## 📝 Descripción general

En esta tarea, desarrollarás una aplicación web en Angular que se conecte a una API externa para realizar operaciones CRUD. 

La aplicación debe estar estructurada en **múltiples componentes, utilizar servicios para la comunicación con la API y gestionar la información mediante modelos de datos.**

La temática del proyecto es libre, lo que te permite elegir con qué tipo de infomación trabajarás. 

## 🎯Objetivos de Aprendizaje

- Desarrollar una aplicación web SPA con estructura modular utilizando un framework.

- Consumir una API REST externa y manejar datos dinámicos.

- Programar servicios para la gestión de datos y consultas HTTP.

- Implementar operaciones CRUD para interactuar con una API.

- Validar formularios y manejar entradas de datos de los usuarios.

- Asegurar una navegación fluida mediante una barra de navegación.

- Utilizar modelos de datos para gestionar la información.

## 📚 Recursos

###### Listado de APIs

Para facilitarte el trabajo de seleccionar la temática de tu aplicación, en los recursos te facilito un [documento](./recursos/2-lista-apis.md) con una lista de APIs.

Si lo prefieres, puedes utilizar otra API de tu eleccion que no figure entre los recursos facilitados.

La combinación de varias APIs también está permitida.

## 🛠️ Ejercicios

⚠️ ***Antes de Empezar:***

- *Las operaciones POST, PUT y DELETE **NO necesitan persistencia de datos real**; solo deben ejecutarse correctamente contra un endpoint.*

- *Si la API que eliges para la temática de tu proyecto no soporta todas las operaciones CRUD, puedes complementarla utilizarlo otros recursos como MockAPI para crear los endpoints que necesites.*

- *Ejemplo: si programas una aplicación sobre información meteorológica en diferentes ciudades europeas y tu API no tiene endpoints para hacer una operación de inserción de datos, podrías realizar las consultas GET a una API de información meteorológica especifica y por otro lado, añadir un módulo de "Login" usando otra API como [reqres](https://reqres.in/) para cubir la parte de las consultas POST.*

- *Si tienes dudas sobre si tu idea es válida, consúltalo conmigo.*

### Ejercicio 1: Creación de la Estructura y Componentes.

**Objetivo:** Construir una base para tu aplicación que contenga los apartados listados.

**Requisitos:**

- Crea un proyecto *no standalone* en Angular.

- Añade una barra de navegación con enlaces a las distintas secciones de la aplicación.

- Crea e incluye múltiples componentes que se carguen dinámicamente en función de lo que el usuario seleccione en la barra.

- Incorpora las entidades que necesites en el modelo de datos de tu aplicación para gestionar los datos que recibas de la API.

#### Ejercicio 2: Implementación de la Lógica CRUD con una API.

**Objetivo**: Integrar consultas HTTP utilizando una API externa.

**Requisitos:**

- Crear al menos un servicio para la gestión de las consultas.

- Implementar las siguientes operaciones CRUD en la aplicación:
  
  - *Create*: Agregar nuevos registros. Incluye en al menos uno de los componentes un formulario de entrada de datos.
  
  - *Read* : Visualizar datos obtenidos a través de la API en la interfaz gráfica. Debes incorporar además las entidades que necesites en el modelo de datos de tu aplicación para gestionar la información. Deberás implemntar los dos siguientes métodos:
    
    - *All*: Mostrar lista completa del elementos.
    
    - *ById*: Mostrar información de un elemento concreto en función a un identificador.
  
  - *Update*: Modificar registros existentes.
  
  - *Delete*: Eliminar registros existentes.

#### Ejercicio 3: Funcionalidad Extra.

- **Objetivo**: Incluir un elemento de ampliación de información o visualización de datos. 

⚠️ ***Importante:*** *Antes de desarrollar el elemento te recomiendo revisar los ejemplos que te facilito en el enunciado y consultar conmigo si tienes dudas.*
