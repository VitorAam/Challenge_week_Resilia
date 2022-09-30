export class ValidationService {

    static notEmpty(parameter) {
        if(!parameter == '') return true
    }

    static ifString(parameter){
        if( typeof parameter == 'string') return true
    }

    static ifNumber(parameter){
        if( typeof parameter == "number") return true
    }

    static ifStringNotEmpty(parameter) {
        if(this.ifString(parameter) && this.notEmpty(parameter)) return true
    }

    static validNewStudent (nome, turma, idade) {
        const nameValid = this.ifStringNotEmpty(nome)
        const classGroupValid = this.ifStringNotEmpty(turma)
        const ageValid = this.ifNumber(idade)

        if (nameValid && classGroupValid && ageValid) { 
            return true 
        } else {
            return false    
        }
    }
}