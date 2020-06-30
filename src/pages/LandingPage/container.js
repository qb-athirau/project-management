import { connect } from 'react-redux';
import { addProject, getProjects, updateProject } from './helper';
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
    updateProject: (payload, id) => dispatch(updateProject(payload, id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
