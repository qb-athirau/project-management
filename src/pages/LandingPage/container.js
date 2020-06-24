import { connect } from 'react-redux';
import { addProject, getProjects } from './helper';
import LandingPage from './component';

const mapStateToProps = (state) => {
  return {
    projectList: state.landing.projects,
    loading: state.landing.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProject: (payload) => dispatch(addProject(payload)),
    getProjects: () => dispatch(getProjects()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
