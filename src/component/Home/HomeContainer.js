import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from '../../action/action'
import Home from './Home'

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => {
  return {
    postGithubUserName: (userName) => {
      dispatch(action.github(userName))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
