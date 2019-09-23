import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
`

export const Header = styled.div`
  width: fit-content;
  margin: 8px auto;
  min-height: 200px;
  border: 1px solid black;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
`
export const FormItem = styled.div`
  display: flex;
`

export const Label = styled.div`
  width: 70%;
  padding: 10px;
  margin: 0px 0px 8px 0px;
  font-size: 13px;
`

export const HeaderLabel = styled.h2`
 background-color: rgb(40, 40, 154);
 color: white;
 text-align: center;
 padding: 8px;
`

export const Input = styled.input`
  width: ${props =>  props.type === 'button' ? '100%': '30%'};
  padding: 10px;
  margin: 0px 0px 8px 0px;
  font-size: 15px;
  box-sizing: border-box;
  background-color: ${props =>  {
    if (props.type === 'button'){
      if (props.value === 'Reset') return 'red';
      if (props.disabled === true) return 'rgba(40, 40, 154, 0.5)'
      return 'rgb(40, 40, 154)'
    }
    return 'white'
  }};
  color: ${props =>  props.type === 'button' ? 'white': 'black'};
  text-align: center;
  };
  cursor: ${props =>  props.type === 'button' ? 'pointer': 'auto'};
  border: 1px solid #ddd;
`
