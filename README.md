# Code Challenge Launch X 

## Este es un CodeChallenge propuesto por Launch X Backend Node Js

Para este code challenge se pide resolver lo siguiente :

Requerimientos:

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.


### Este seria un diagrama de como resolvere los requerimientos

```mermaid
graph TD
    A[Server] --> B
    B[StudentController] --> C
    C[StudentService] --> D
    D[Reader]
```

### Las clases tendran los siguientes metodos 

```mermaid
classDiagram
     class StudentController{
          +static getAllStudents(path)
          +static getStudentsByCertification(boolean, path)
          +static getStudentsByCredits(credits, path)
      }
      class StudentService{
          +static filterByCertification(students, boolean)
          +static filterByCredits(students, credits)
          +allStudents(students)
      }
      class Reader{
          +static readJsonFile(path)
      }
 ```
## Dependencias necesarias para poder correr el proyecto

- Jest

``
npm install jest@26.0.0 –save-dev
``

Si usas Windows tendras que cambiar la ruta en el package.json para correr jest

``
"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest"
``

- Express

``
npm install express --save
``

Cambiamos la ruta de igual manera en el package.json

``
"server": "node ./lib/server.js"
``

- Linter (Esto solo es para darle formato a el proyecto)

``
npm install eslint --save-dev
``
