import React from 'react';
import {connect} from 'react-redux';

import '../style/components/modal.scss';

class Form extends React.Component{

  constructor(props){
    super(props);

    this.state = this.props.category || {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  render(){
    return(
      <div className="overlay">
        <div className="modal">
          <form onSubmit={this.handleSubmit}>
            <a className="close-button" onClick={this.props.toggleForm}>x</a>
            <label className="form-field" htmlFor="name">Name:
              <input type="text" id="name" onChange={this.handleChange} defaultValue={this.state.name}/>
            </label>
            <label className="form-field" htmlFor={this.props.type}>{this.props.type}:
              <input type="number" id={this.props.type} onChange={this.handleChange} defaultValue={this.state.Budget} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
