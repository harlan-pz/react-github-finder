import { connect } from 'react-redux'
import Result from './Result'

const mapStateToProps = state => ({
  data: state.data,
  isLoading: state.isLoading,
  isSuccess: state.isSuccess
})

export default connect(mapStateToProps)(Result)
