import React, { Component} from 'react';
import './fibonacci.scss';

class Fibonacci extends Component {
  state={
    nNumber: 0,
    series: [],
    message: '',
  }

  generateSeries = () => {
    const { nNumber } = this.state;
    if(nNumber>0)
    { 
      this.setState({
        series: [...this.fibonacciSeries(nNumber)],
        message: '',
      }); 
    } else {
      this.setState({
        series: [],
        message: 'Enter a valid number'
      });
    }
  }

  fibonacciSeries = function *generator(n=null, current=0, next=1) {
    if(n===0){
      return current;
    }
    yield current;
    yield *generator(n-1, next, current+next);
  }

  render(){
    const { series, message } = this.state;
    return (
      <div>
        <h4>Fibonacci Series</h4>
        <label htmlFor="nInput"> Enter the n-th number for the series : </label>
        <input type="text" id="nInput" onKeyUp={e=>this.setState({nNumber:e.target.value})}/>
        <button onClick={this.generateSeries}> Generate Series </button>
        <p>{message}</p>
        <div>
          <ol>
            {series.map((number,i) => (
              <li key={i}>{number}</li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Fibonacci; 