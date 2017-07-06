import React, { Component } from 'react'
class Space extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: []
    }
  }
  render () {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
  componentDidMount () {
    window.fetch('https://api.open-notify.org/astros.json')
      .then(meta => meta.json())
      .then(({people}) => {
        const nameList = people.map((person, idx) => <li key={idx}>{person.name}</li>)
        this.setState({name: nameList})
      })
  }
}
export default Space
