import React, { Component } from 'react'

class test extends Component {

  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    console.log('Component did mount...')
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json())
      .then(json => this.setState({
        title: json.title,
        body: json.body
      }))
  }



  /* componentWillMount() {
    console.log('ComponentWillMount')
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate')
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('ComponentWillReceiveProps')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  } */

  render() {
    const { title, body } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default test
