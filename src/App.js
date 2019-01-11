import React, { Component } from 'react';
import './App.css';
import data from './data.json';

import CategoryPane from './components/CategoryPane';
import SelectionOption from './components/SelectionOption';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			categorySelection: -1
		};
	}
  changeCategory(n){
    this.setState({categorySelection:n})
  }
  showCategoryPane(){
    if (this.state.categorySelection != -1){
      return <CategoryPane dataObject={data.data[this.state.categorySelection]}/>;
    }
    else{
      return <div></div>
    }
  }
  render() {
    return (
      <div className="App">
        <div className="main-body">
          <h1 className="text-center text-3x">matt's desk</h1>
          <p className="text-center">cool stuff that would be on my digital desk</p>
          <div className="text-center">
            {
              data.mediums.map((object,i) =>{
                return (
                  <span key={i}>
  									<SelectionOption
  										dataObject={object}
  										onClick={() => this.changeCategory(data.mediums[i].name)}
  										currentlySelected={this.state.categorySelection}
  										SelectionId={data.mediums[i].name}
  									/>
  									&nbsp;
  								</span>
                )
              })
            }
          </div>
          <br />
          {this.showCategoryPane()}
          <p className="text-center">
            Made with <a href="https://github.com/malsf21/liteweight">liteweight</a> and <a href="https://github.com/malsf21/desk"><FontAwesomeIcon icon={faGithub}/></a> <FontAwesomeIcon icon={faReact}/> <FontAwesomeIcon icon={faHeart} color="red"/>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
