import React, { Component } from 'react';
import './App.css';
import data from './data.json';

import CategoryPane from './components/CategoryPane';

class App extends Component {
  constructor(props) {
		super(props);
    var arr = [];
    Object.keys(data).forEach(function(key) {
      arr.push(
        {
          key: key,
          data: data[key]
        }
      );
    });
		this.state = {
			categorySelection: arr[0].key,
      categoryArr: arr
		};
	}
  changeCategory(n){
    this.setState({categorySelection:n})
  }
  render() {
    return (
      <div className="App">
        <div className="main-body">
          <h1 className="text-center text-3x">desk</h1>
          <div className="text-center">
            {
              this.state.categoryArr.map((object,i) => {
                return (
                  <button 
                    className="button button-primary"
                    onClick={() => this.changeCategory(this.state.categoryArr[i].key)}
                    key={i}> {this.state.categoryArr[i].key}
                  </button>
                )
              })
            }
          </div>
          <CategoryPane dataObject={data[this.state.categorySelection]}/>
        </div>
      </div>
    );
  }
}

export default App;
