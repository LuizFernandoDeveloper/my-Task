import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Button } from '../componets/Tarefa/styles'
const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style-type:none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 10px 40px;
  height: 80vh;
  overflow-y: auto;
`
export const Titulo = styled.h2`
  display: block;
  margim-top: 40px;
  margim-bottom: 40px;
  font-size: 18px;
  font-weght: bold;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const ButtonSalvar = styled(Button)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
