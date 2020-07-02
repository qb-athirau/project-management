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
    // overflow: auto;
    background-color: ${(props) => props.theme.ghostWhite};
  }
  .toolbar-wrapper {
    overflow: hidden;
    min-height: 72;
    background-color: ${(props) => props.theme.pureWhite};
    margin: 5px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
  }
  .selected-project {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
  }
  .case-label {
    font-size: 12px;
  }
  .case-name {
    font-family: Poppins-Bold;
    font-size: 12px;
  }
  .tabpanel {
    background-color: #fff;
    margin: 10px 5px;
    height: 100%;
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
  &.basic-info-submit {
    button {
      border-radius: 20px;
      height: 25px;
      font-size: 10px;
    }
  }
  button {
    border-radius: 5px;
    height: 35px;
    font-size: 15px;
  }
`;
export const Heading = styled.div`
  text-align: center;
  font-family: Poppins-Bold;
  font-size: 16px;
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
    font-family: Poppins-Medium;
    font-size: 12px;
    text-align: left;
    width: 300px;
    margin-top: 17px;
  }
  .wrapper {
    input,
    .MuiFormLabel-root {
      font-family: Poppins-Medium;
      font-size: 12px;
    }
  }
`;
export const BasicFormLayout = styled.div`
  // label + .MuiInput-formControl {
  //   margin-top: 10px;
  // }
  input {
    font-family: Poppins-Medium;
    font-size: 12px;
  }
  .MuiFormLabel-root {
    font-family: Poppins-Medium;
    font-size: 12px;
  }
  .field-width {
    width: 100%;
  }
  .multi-field-width {
    width: 48%;
  }
  .sales-select .MuiInput-formControl {
    margin-top: 14px !important;
  }
  .message {
    padding-left: 5px;
    color: ${(props) => props.theme.errorRed};
    font-size: 10px;
  }
  .select-margin {
    margin: 5px;
  }
  .radio-btn {
    display: flex;
    flex-direction: row;
    margin: 5px;
    label {
      width: 35%;
      .MuiFormControlLabel-label {
        font-family: Poppins-Medium;
        font-size: 11px;
      }
    }
    .MuiRadio-colorSecondary.Mui-checked {
      color: ${(props) => props.theme.speechBlue};
    }
    .MuiSvgIcon-root {
      width: 1rem;
      height: 1rem;
    }
  }
`;
export const FirstPanelLayout = styled.div`
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
    height: 32px;
    font-size: 12px;
    font-family: Poppins-Medium;
    background-color: ${(props) => props.theme.aliceBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 13px 3px 13px;
  }
`;
