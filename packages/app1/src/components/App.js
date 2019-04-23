import React, {Component, Fragment} from 'react';
import Hello from "@myscope/common/heading"
import Button from './Button';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {welcome:'Hello Visitor!'};
  }

  render() {
    return(
      <Fragment>
         <Hello title="Hello, World! 2" />
         <h1>{this.state.welcome}</h1>
         <Button />
      </Fragment>
     
    )
  }
}

export default App;