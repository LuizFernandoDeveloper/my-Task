import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0px;
  }
`
export const Fieldset = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  border-radius: 10px;
  border: solid 1px;
  justify-content: center;
`
export const AreaInput = styled.div`
  display: inline;
  text-transform: capitalize;
  width: 120px;
  padding: 10px 0px;
  padding-left: 5px;
  input {
    margin-right: 10px;
  }
`
