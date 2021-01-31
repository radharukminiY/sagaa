import React,{Component} from 'react';
import {getMovies} from '../actions';
import {connect} from 'react-redux';
import PropTypes from 'props-Types';
import Movies from '../component/displayComponent';
import Loading from './loading';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getMovies())
  }
  render(){
    return(
      <div>
      <Loading/>
      <Movies moviesData = {this.props.mydata.movies}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(State)
  return{
    mydata:state.movies
  }
}

App.protoTypes={
  dispatch:PropsTypes.func
}
export default connect(mapStateToProps,)(App)
