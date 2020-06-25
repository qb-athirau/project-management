import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  width: ${(props) => (props.isOpen ? '236px' : '20px')};
  transition: width 1s;
  padding-top: 15px;
  .left-sidebar {
    width: ${(props) => (props.isOpen ? '236px' : '20px')};
  }
`;

export const ArrowContainer = styled.div`
  height: 35px;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  width: ${(props) => (props.isOpen ? 'auto' : '20px')};
  transition: width 1s;
`;
export const ContentSection = styled.section`
  &.content {
    overflow: auto;
    height: calc(100vh - 70px);
    background-color: ${(props) => props.theme.snow};
  }
  .toolbar-wrapper {
    overflow: hidden;
    min-height: 72;
    background-color: ${(props) => props.theme.pureWhite};
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tabpanel {
    background-color: #fff;
    margin: 5px;
    height: calc(100% - 80px);
  }
  .flex-wrap {
    display: flex;
  }
  .column-wrap {
    display: flex;
    flex-direction: column;
  }
`;
export const LandingSection = styled.section`
  &.container {
    display: flex;
  }
  .content-section-wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;
export const ButtonWrap = styled.div`
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 auto !important;
  width: 60px;
  text-align: inherit;
  button {
    border-radius: 5px;
    height: 35px;
    font-size: 15px;
  }
`;
export const Heading = styled.h2`
  text-align: center;
`;
export const ProjectFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .textarea-wrapper {
    width: 280px;
  }
  .textarea-label {
    font-size: 16px;
    text-align: left;
    width: 300px;
    margin-top: 34px;
  }
`;
export const BasicFormLayout = styled.div`
  label + .MuiInput-formControl {
    margin-top: 10px;
  }
`;
export const FirstPanel = styled.div`
  &.panel-one-wrapper {
    display: flex;
    padding: 5px;
    justify-content: space-between;
  }
  .basic-info {
    padding: 5px;
    width: 33%;
  }
  .panel-header {
    height: 35px;
    background-color: ${(props) => props.theme.whisper};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 13px 3px 13px;
  }
`;
