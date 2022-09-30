import { ValidationService } from '../service/validationService.js'
import { DbMethods } from '../DAO/databaseMethods.js';
import { estudanteModel } from '../model/studentsModel.js'

DbMethods.createTable()

export class StudentsController {
  static rotas(app){
    app.get("/", async (req, res) => {
      try {
        const response = await DbMethods.getStudents()
        res.status(200).json(response)
      } catch (error) {
        res.status(400).send(error)
      }  
    });

    app.post("/", async (req, res) => {
      try {
        const body = req.body
        const itemValid = ValidationService.validNewStudent(body.nome, body.turma, body.idade)
        if (itemValid) {
          const item = new estudanteModel(...Object.values(req.body))
          const response = await DbMethods.postStudent(item)
          res.status(201).json(response)
        } else {
          res.status(401).json("Check the item. Object not registered.")
        }
      } catch  (error) {
        res.status(401).send({error:error.message})
      }      
    })

    app.delete("/:id", async (req, res) => {
      try {                
        const item = await DbMethods.deletStudent(req.params.id)
        res.status(200).json(item)
      } catch (error) {    
        res.status(404).json({Error: error.message})
      }
    })
    ;
  }

};