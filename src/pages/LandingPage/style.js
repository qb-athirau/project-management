import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  width: ${(props) => (props.isOpen ? '236px' : '55px')};
  transition: width 1s;
`;

export const ArrowContainer = styled.div`
  height: 88px;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  width: ${(props) => (props.isOpen ? '236px' : '55px')};
  transition: width 1s;
`;
export const ContentSection = styled.section`
  overflow: auto;
  height: calc(100vh - 70px);
`;
export const LandingSection = styled.section`
  &.container {
    display: flex;
  }
  .content-section-wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: calc(100% - 83px);
  }
`;
