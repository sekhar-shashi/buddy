import React, { Component } from 'react';
import getArtcile from './article.service';
import BlogView from './view';
import { post } from 'model/blog-post';


export default class BlogPost extends React.Component<{}, { value: [] }>  {

    constructor(props: any) {
      super(props);

      this.state = {
        value : []
      };
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData() {
        fetch('http://localhost:/api/articles/get')
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ value : responseJson })
            })
            .catch((error) => {
              console.error(error);
            });
    }

    render(){
        return(
          <div>
          {this.state.value.map((item: post) => (
            <div className="station" key={item.name}>{item.name}</div>
          ))}
        </div>
        );
    }
}