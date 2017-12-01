import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  position: 'relative',
};

class HomeView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Paper style={style} zDepth={3} rounded={false} />
        <Paper style={style} zDepth={3} rounded={false} />
        <Paper style={style} zDepth={3} rounded={false} />
      </div>
    );
  }
}

export default HomeView;