import React,{ Component} from 'react';

class StringAlgo extends Component {
  str = 'When the going gets tough, the tough get going';
  trimStr = this.str.replace(/\s/g, '');

  state={
    firstRepeat: '',
    lastRepeat: '',
    firstNonRepeat: '',
    lastNonRepeat: '',
    mostRepeated: '',
  }

  componentDidMount() {
    const chars = this.trimStr.split('');
    const reverseChars = chars.reverse();
    this.setState({
      firstRepeat: this.repeatingCharacter(this.trimStr, true),
      lastRepeat: this.repeatingCharacter(reverseChars.toString(), true),
      firstNonRepeat: this.repeatingCharacter(this.trimStr, false),
      lastNonRepeat: this.repeatingCharacter(reverseChars.toString(), false),
      mostRepeated: this.mostRepeated(this.trimStr),
    })
  }

  repeatingCharacter = (string, repeat) => {
    for(let i=0; i<string.length; i++){
      let c = string.charAt(i);
      if(repeat) {
        if(string.indexOf(c) === i && string.indexOf(c,i+1) !== -1)
        return c;
      } else {
        if(string.indexOf(c) === i && string.indexOf(c,i+1) === -1)
        return c;
      }
    }
  }

  mostRepeated = (string) =>{
    let max = 0,
    maxChar = '';
    string.split('').forEach(function(char){
      if(string.split(char).length > max) {
      max = string.split(char).length;
      maxChar = char;
      }
    });
    return maxChar;
  }

  render() {

    const { firstRepeat,
      lastRepeat,
      firstNonRepeat,
      lastNonRepeat,
      mostRepeated,
    } = this.state;
    
    return(
        <div>
          <h4> String Algorithm over : {this.str} </h4>
          <div>First Repeating Character: {firstRepeat} </div>
          <div>Last Repeating Character: {lastRepeat} </div>
          <div>First Non Repeating Character: {firstNonRepeat} </div>
          <div>Last Non Repeating Character: {lastNonRepeat} </div>
          <div>Most Repeating Character: {mostRepeated} </div>
        </div>
    )
  }
}
export default StringAlgo;