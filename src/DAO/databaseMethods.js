import Database from '../infra/bd.js'

export class DbMethods {
  static createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS students(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR,
      turma VARCHAR,
      idade INTERGER
      )
    `;
    return new Promise((resolve, reject) => {
      Database.run(query, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Tabela de alunos criada com sucesso!");
        }
      });
    });
  }

  static getStudents() {
    const query = `SELECT * FROM students`

    return new Promise((resolve, reject)=> {
      Database.all(query, (e, result)=>{
          if(e){
              reject(e.message)
          } else {
              resolve(result)
          }
      })
    })
  }

  static postStudent(item) {

    const query = `INSERT INTO students (nome, turma, idade) VALUES (?,?,?)`

    const body = Object.values(item)

      return new Promise((resolve, reject)=>{
        Database.run(query, [...body], (e)=>{
          if(e){
            reject(e.message)
          } else {
            resolve({message: "Registered successfully!"})
          }
        })
      })
    
  }

  static deletStudent(id) {
    const query = `DELETE FROM students WHERE id = ?`
    return new Promise((resolve, reject) => {
      Database.run(query, id, (e)=>{
          if(e){
              reject(e.message)
          } else {
              resolve({message: `Record with Id ${id} successfully deleted.`})
          }
      })
    })
  }

}
