import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import {
  MainContainer as Container,
  Titulo as Resultado
} from '../../styles/index'
import { RootReducer } from '../../store'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const ListaDeTarefas = () => {
  const { itens: task } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = task
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (task) => task.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (task) => task.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return task
    }
  }

  const exibeResultado = (quantidade: number) => {
    let mensagem: string

    const constTermo =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) com: todas ${constTermo}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterio} = ${valor}`}" ${constTermo}`
    }
    return mensagem
  }
  const mensagem = exibeResultado(task.length)
  const filtrotask = filtraTarefas()
  return (
    <Container>
      <Resultado as="p">{mensagem}</Resultado>
      <ul>
        {filtrotask.map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
      <BotaoAdicionar />
    </Container>
  )
}

export default ListaDeTarefas
