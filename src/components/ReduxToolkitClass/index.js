import { connect } from 'react-redux';
import { increment, decrement } from '../../ReduxToolkit/CounterReducer';
import { clearData, fetchData } from '../../ReduxToolkit/FetchDataReducer';
import { Component } from 'react';

const mapStateToProps = (state) => ({counterState: state.counter, asyncData: state.fetchData});

const mapDispatchToProps = (dispatch) => ({
    add: (num=5) => dispatch(increment(num)),
    substract: (num=5) => dispatch(decrement(num)),
    getData: () => dispatch(fetchData()),
    clear: () => dispatch(clearData())
})

class ReduxToolkitClass extends Component {
    componentDidMount() {
        this.props.getData();
    }
  render() {
      return (
        <div>
          <button onClick={() => this.props.substract()}>Decrement 5</button>
          <span>{this.props.counterState.count}</span>
          <button onClick={() => this.props.add()}>Increment 5</button>
          <button type="button" onClick={() => this.props.clear()}>Clear List</button>
          {this.props.asyncData.loading ? (<p>Loading</p>) : (
            this.props.asyncData.data.map(eachTodo => <p key={eachTodo.id}>{eachTodo.title}</p>)
          )}
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxToolkitClass);
