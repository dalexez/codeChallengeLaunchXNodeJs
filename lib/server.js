const StudentController = require("./controllers/StudentController")
const express = require("express")
const app = express()
app.use(express.json())
const port = 3000
const path = "./data/students.json"

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api welcome!"})
})

app.get("/v1/students", (request, response) => {
    const allStudents = StudentController.getAllStudents(path)
    response.status(200).json(allStudents)
})

app.get("/v1/students/email/certification", (request, response) => {
    const studentsEmailCertification = StudentController.getStudentsByCertification(true, path)
    response.status(200).json(studentsEmailCertification)
})

app.get('/v1/students/credits/moreThan/:credits', (request, response) => {
    const  credits  = request.params.credits;
    const studentsCredits = StudentController.getStudentsByCredits(credits, path);
    response.status(200).json(studentsCredits);
  });

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`)
})

app.get('/v1/explorers/:mission', (request, response) => {
    const { mission } = request.params;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
  })