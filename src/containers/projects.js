import { connect } from 'react-redux'
import Operations from '../components/content/operations'

// import {
//   onNextPage,
//   onPrevPage,
// } from '../redux/projects/actions'

import { sagaActions } from '../redux/projects/constants'

const mapStateToProps = ({ projects }) => {
  return {
    projects: projects.items,
    pagination: projects.pagination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: (pagination) => dispatch({ type: sagaActions.PROJECTS_REQUESTED, pagination }),
    onNextPage: () => dispatch({ type: sagaActions.SAGA_PROJECTS_NEXT_PAGE }),
    onPrevPage: () => dispatch({ type: sagaActions.SAGA_PROJECTS_PREV_PAGE }),
    onSearch: (filter) => dispatch({ type: sagaActions.SEARCH_PROJECTS, filter }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operations.Projects)
