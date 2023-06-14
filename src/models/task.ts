import { StringLiteralLike } from 'typescript'
import * as enums from '../utils/enums/tarefa'

class Task {
  id: string
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string

  constructor(
    id: string,
    title: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    
  ) {
    this.id = id
    this.titulo = title
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
  }
}

export default Task
