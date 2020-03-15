import React from 'react';

class AddArticle extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {category: 'friction'};

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event: { target: { value: any; }; }) {
  //   this.setState({value: event.target.value});
  // }

  async handleSubmit(event: { preventDefault: () => void; }) {
    if(!this.state.author){
      alert('please enter author details');
      event.preventDefault();
      return;
    }
    if(!this.state.name){
      alert('please enter name of aticle');
      event.preventDefault();
      return;
    }
    if(!this.state.category){
      alert('please select category');
      event.preventDefault();
      return;
    }
    // call Api to save data
   await this.postData('http://docker-api.com.au:1880/api/articles/add', { 
      name: this.state.name,
      author: this.state.author,
      category: this.state.category })
    .then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });
  }

  async postData (url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })} id='name' />
        </label>
        <label>
          Author:
          <input type="text" value={this.state.author} 
          onChange={(e) => this.setState({ author: e.target.value })} id='author' />
        </label>
        <label>
          Pick your article category:
          <select value={this.state.category} 
          onChange={(e) => this.setState({ category: e.target.value })} id='category'>
            <option value="expository">expository</option>
            <option value="narrative">narrative</option>
            <option value="descriptive">descriptive</option>
            <option value="novel">novel</option>
            <option value="other">other</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddArticle;
