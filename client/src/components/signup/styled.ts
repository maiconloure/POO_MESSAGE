import styled from 'styled-components'

export const Component = styled.div`
  font-family: Inter;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`

export const SignUpForm = styled.form`
  margin: 50px auto; 
  width:350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  label {
    font: 600 1.2rem Inter;
  }

  input {
    border: none;
    border-radius: 2px;
    height: 30px;
    width: 300px;
    margin: 5px 0;
    outline: none;
  }

  input[type="submit"] {
    font: 700 1.3rem Inter;
    width: 160px;
    height: 40px;
    cursor: pointer;
  }
`
