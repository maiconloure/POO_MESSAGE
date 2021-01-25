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
  }
`

export const MessagesBox = styled.div`
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    min-height: 50px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const SectionBox = styled.div`
    position: absolute;
    top: 0;
    font: 600 1.1rem Inter;
    width: 100%;
    height: 25px;
    background: #DC143C;
    border-radius: 4px 4px 0 0;
`
export const Messages = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    justify-content: flex-start;
`

export const Message = styled.div`
    width: 100%;
    font: 500 0.9rem Arial;
    color: #000;

    p {
      margin: 2px;
    }
`
