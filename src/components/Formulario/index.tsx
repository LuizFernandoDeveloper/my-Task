import { FormEvent, useState } from 'react'
import { ButtonSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { AreaInput, Fieldset, Form } from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/tarefa'
import Task from '../../models/task'
import { cadastra } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'
const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)
  let id = 0
  const newTask = (event: FormEvent) => {
    id = id++
    event.preventDefault()
    const newTask = new Task(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      id
    )

    dispatch(cadastra(newTask))
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={newTask}>
        <Campo
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Fieldset>
          <legend>Prioridade</legend>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <AreaInput key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                title={prioridade}
                onChange={(event) =>
                  setPrioridade(event.target.value as enums.Prioridade)
                }
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </AreaInput>
          ))}
        </Fieldset>
        <ButtonSalvar type="submit">Cadastrar</ButtonSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
