import styled from 'styled-components'

export const Component = styled.div`
    background-color: #282c34;
    color: #fff;
    height: 100vh;
    width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  center;
`

export const MainBox = styled.div`
    height: 70%;
    width: 60%;
    border-radius: 6px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    background-color: #4169E1;
    opacity: 0.9;
    box-shadow: 1px 1px 12px 6px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h1`
    font: 800 2rem Inter;
    color: #FFF;
`

export const Content = styled.div`

`

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export const OptionsBox = styled.button`
    background: #fff;
    font: 600 1.1rem Inter;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 4px;
    margin: 10px 5px;
    cursor: pointer;
    outline: none;

    &:hover  {
    background: #708090;
    box-shadow: 1px 1px 12px 6px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
`

export const Welcome = styled.div`
    margin: auto;
    h2 {
        font: 500 1.6rem Inter;
    }
`