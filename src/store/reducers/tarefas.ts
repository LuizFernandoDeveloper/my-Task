import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/task'
import * as enums from '../../utils/enums/tarefa'
const tarefasSilce = createSlice({
  name: 'task',
  initialState: {
    itens: [
      new Task(
        'estudar javascript',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        '',
        1
      ),
      new Task(
        'estudar typescript',
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA,
        'rever aula 2 ',
        2
      ),
      new Task(
        'estudar React',
        enums.Prioridade.NORMAL,
        enums.Status.PENDENTE,
        'praticar o use efectts',
        3
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      //state.itens = state.itens.filter((task) => task.id !== action.payload)
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },

    editar: (state, action: PayloadAction<Task>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastra: (state, action: PayloadAction<Task>) => {
      const tarefasJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefasJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    },
    alteraState: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastra, alteraState } = tarefasSilce.actions

export default tarefasSilce.reducer
