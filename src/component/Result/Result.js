import React from 'react'
import { Link } from 'react-router-dom'
import style from './Result.scss'

const Result = (props) => {
  let result = null
    if (props.isLoading) {
      result = (
        <div>正在请求中</div>
      )
    } else if (!props.isSuccess) {
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
            <img src={props.data.avatar_url} className={style['result-img']} />
            <span className={style['result-login']}>{props.data.login}</span>
          </div>
          <Link to="/" className={style.back}>返回</Link>
        </div>
      )
    }
  return result
}

export default Result
