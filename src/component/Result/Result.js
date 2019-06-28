import React from 'react'
import { Link } from 'react-router-dom'
import style from './Result.scss'

const Result = (props) => {
  let result = null
  console.log(props.data)
  if (props.isLoading) {
    result = (
      <div className={style.tips}>正在请求中</div>
    )
  } else if (!props.isSuccess) {
    result = (
      <div>
        <div className={style.tips}>该用户不存在</div>
        <div><Link to="/" className={style.back}>返回</Link></div>
      </div>
    )
  } else {
    result = (
      <div className={`${style.result} ${style.clearfix}`}>
        <img src={props.data.avatar_url} className={style['result-img']} />
        <ul className={style['info']}>
          <li>{props.data.login}</li>
          <li><a href={props.data.html_url} className={style['info-title-url']}>个人主页</a></li>
          <li>创建时间: {new Date(props.data.created_at).toLocaleString()}</li>
          <li>Followers: {props.data.followers}</li>
          <li><Link to="/" className={style.back}>返回</Link></li>
        </ul>
        
      </div>

    )
  }
  return result
}

export default Result
