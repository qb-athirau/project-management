import styled from 'styled-components';

export const Mask = styled.div`
  min-height: calc(100vh - 73px);
  background: ${(props)=>props.theme.pureWhite};
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    max-width: 544px;
  }
`;

export const PlaceholderWrap = styled.div`
  margin: 2rem;
`;
export const Message = styled.div`
  padding: 2rem;
  width: 100%;
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: center;
  color: '#f00'
  box-sizing: border-box;
`;
