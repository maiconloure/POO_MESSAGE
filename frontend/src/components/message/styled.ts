import styled from 'styled-components'

export const Component = styled.div`
  font-family: Inter;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`
export const Select = styled.div`
  label {
      font: 600 1.2rem Inter;
  }
  select {
      outline: none;
      font: 500 1rem Inter;
      margin: 10px;
      max-width: 400px;
  }
`

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 

  input {
      font: 600 1rem Inter;
      width: 350px;
      height: 24px;
      outline: none;
  } 

  textarea {
      outline: none;
      font: 500 0.9rem Inter;
      margin: 10px;
      width: 460px;
      height: 140px;
  }  
`

export const MainComponent = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 400px;
  height: 200px;
  background: #FF6347;
  padding: 5px 20px;
  border-radius: 5px;
`

export const Message = styled.h2`
  font: 600 1.6rem Inter;

`

export const Button = styled.button`
  font: 700 1.4rem Inter;
  padding: 5px 10px;
  cursor: pointer;
  margin: 10px 20px;
`
