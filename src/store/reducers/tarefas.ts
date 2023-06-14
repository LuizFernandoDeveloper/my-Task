import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/task'
import * as enums from '../../utils/enums/tarefa'
import { v4 as uuidv4 } from 'uuid'

const tarefasSlice = createSlice({
  name: 'task',
  initialState: {
    itens: [
      {
        id: uuidv4(),
        descricao: 'test 01',
        titulo: 'estudar javascript',
        prioridade: enums.Prioridade.IMPORTANTE,
        status: enums.Status.CONCLUIDA
      },
      {
        id: uuidv4(),
        descricao: 'test 02',
        titulo: 'estudar typescript',
        prioridade: enums.Prioridade.IMPORTANTE,
        status: enums.Status.PENDENTE
      }
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
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
      action: PayloadAction<{ id: string; checked: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      action.payload.checked
        ? (state.itens[indexDaTarefa].status = enums.Status.CONCLUIDA)
        : (state.itens[indexDaTarefa].status = enums.Status.PENDENTE)
    }
  }
})

export const { remover, editar, cadastra, alteraState } = tarefasSlice.actions

export default tarefasSlice.reducer
