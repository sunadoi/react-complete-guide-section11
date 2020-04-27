import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: null
  }

  componentDidMount () {
    this.parseQueryParams();
  }

  componentDidUpdate () {
    this.parseQueryParams();
  }
  
  parseQueryParams = () => {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (param[1] !== this.state.title)
      this.setState({title: param[1]})
    }
  }
  
  render () {
    let title = "Loading..."
    if (this.props.location.search) {
      title = this.state.title
    }

    console.log(this.props)
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;