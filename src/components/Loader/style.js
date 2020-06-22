import styled from 'styled-components';

const MainLoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.pureWhite};
  margin: auto;
  z-index: 20;
  .icon {
    font-size: 40px;
    color: ${(props) => props.theme.astronautBlue};
  }
`;

export default MainLoaderWrapper;
