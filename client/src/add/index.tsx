import React from 'react';

class AddArticle extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {category: 'friction', name: '', author: ''};

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // call Api to save data
    handleSubmit = async (e: { preventDefault: () => void; }) => {
      if(!this.state.author){
            alert('please enter author details');
            e.preventDefault();
            return;
          }
          if(!this.state.name){
            alert('please enter name of aticle');
            e.preventDefault();
            return;
          }
          if(!this.state.category){
            alert('please select category');
            e.preventDefault();
            return;
          }
    try{
        e.preventDefault();
        const response = await fetch('http://localhost:1880/api/articles/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: this.state.name, 
          author: this.state.author,
          category: this.state.category }),
      });
      console.log('waiting for res');
      const body = await response.text();
      console.log('got the res', body);

      this.setState({ responseToPost: body });
    }catch(ex)
    {
      throw ex;
    }
    };


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
