import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './Result.scss'
import * as action from '../../action/action'

class Result extends React.Component {
  render() {
    let result = null
    if (this.props.isLoading) {
      result = (
        <div>正在请求中</div>
      )
    } else if (!this.props.isSuccess) {
      result = (
        <div>
          <div>该用户不存在或发生未知错误</div>
          <div><Link to="/" className={style.back}>返回</Link></div>
        </div>
      )
    } else {
      result = (
        <div>
          <div className={`${style.result} ${style.clearfix}`}>
            <img src={this.props.data.avatar_url} className={style['result-img']} />
            <span className={style['result-login']}>{this.props.data.login}</span>
          </div>
          <Link to="/" className={style.back}>返回</Link>
        </div>
      )
    }
    return result
  }
}

const mapStateToProps = state => ({
  data: state.data,
  isLoading: state.isLoading,
  isSuccess: state.isSuccess
})

export default connect(mapStateToProps, action)(Result)
