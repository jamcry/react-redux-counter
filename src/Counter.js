import React from "react";
import { connect } from "react-redux";
import CounterActions from "./CounterActions";
class Counter extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-dark has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Count:{" "}
                <span style={{ color: this.props.color }}>
                  {this.props.count}
                </span>
              </h1>
              <h2 className="subtitle">Color Code: {this.props.color}</h2>
            </div>
            <CounterActions />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    count: state.count,
    color: state.color
  };
};


export default connect(
  mapStateToProps,
)(Counter);
