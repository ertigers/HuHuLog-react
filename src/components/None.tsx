import styled from 'styled-components';

const NoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-top:40px;
`

function None() {
  return (    
    <NoneWrapper>空空如也~</NoneWrapper>    
  )
}

export default None;