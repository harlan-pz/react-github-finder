import React from 'react'
import style from './Home.scss'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  search = () => {
    this.props.history.push('/result')
    this.props.postGithubUserName(this.state.value)
  }

  render() {
    return (
      <div className={style.search}>
        <input type="search" onChange={this.handleInput} className={style['search-input']} placeholder="请输入Github用户名..." />
        <button type="button" className={style['btn-search']} onClick={this.search}>搜索</button>
      </div>
    )
  }
}

export default Home
