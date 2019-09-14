import React from 'react'
import { incrementCount, decrementCount, resetCount, setColor } from "./actions";
import { connect } from "react-redux"

class CounterActions extends React.Component {
  render() {
    return (
      <div className="">
        <hr/>
        <button className="button is-large is-success" onClick={() => this.props.incrementCount(1)}><i className="fa fa-plus-circle" /></button>
        {" "}
        <button className="button is-large is-warning" onClick={this.props.resetCount}><i className="fa fa-undo-alt" /></button>
        {" "}
        <button className="button is-large is-danger" onClick={() => this.props.decrementCount(1)}><i className="fa fa-minus-circle" /></button>
        <hr/>
        <b>Change Color: </b>
        <input className="button is-medium is-info" style={{width:"6rem", height: "1.5rem"}} ref={color=>this.color=color} type="color" onChange={() => this.props.setColor(this.color.value)} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (amount) => { dispatch(incrementCount(amount)) },
    decrementCount: (amount) => { dispatch(decrementCount(amount)) },
    resetCount    : ()       => { dispatch(resetCount())}, 
    setColor      : (color)  => { dispatch(setColor(color))}
  }
}

// Connect only with mapDispatchToProps (mapStateToProps is null)
export default connect(null, mapDispatchToProps)(CounterActions);