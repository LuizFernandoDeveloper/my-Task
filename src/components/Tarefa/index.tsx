import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraState } from '../../store/reducers/tarefas'
import Task from '../../models/task'
import { ButtonSalvar } from '../../styles/index'
import * as enums from '../../utils/enums/tarefa'
type Props = Task

const Tarefa = ({
  id,
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) setDescricao(descricaoOriginal)
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEditando(false)
    setDescricao(descricaoOriginal)
  }

  function changeStatus(event: ChangeEvent<HTMLInputElement>) {
    const { id, checked } = event.target
    dispatch(alteraState({ id, checked }))
  }

  return (
    <S.Card>
      <S.TitleTask>
        <input
          id={id}
          type="checkbox"
          checked={status === enums.Status.CONCLUIDA ? true : false}
          onChange={changeStatus}
        />
        <label htmlFor="checkbox">
          <S.Title>{titulo}</S.Title>
        </label>
      </S.TitleTask>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        placeholder="description for your taask"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
        disabled={!editando}
      />
      <S.ActionBar>
        {editando ? (
          <>
            <ButtonSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao,
                    id
                  })
                )

                setEditando(false)
              }}
            >
              Salvar
            </ButtonSalvar>
            <S.ButtonCancelarRemover onClick={() => cancelarEdicao()}>
              Cancelar
            </S.ButtonCancelarRemover>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditando(true)}>Editar</S.Button>
            <S.ButtonCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonCancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
