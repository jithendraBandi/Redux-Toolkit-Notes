import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../ReduxToolkit/CounterReducer';
import { clearData, fetchData } from '../../ReduxToolkit/FetchDataReducer';
import { useEffect } from 'react';

const ReduxToolkitFunc = () => {
  const counterState = useSelector(state => state.counter);
  const asyncData = useSelector(state => state.fetchData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(decrement(5))}>Decrement 5</button>
      <span>{counterState.count}</span>
      <button onClick={() => dispatch(increment(5))}>Increment 5</button>
      <button type="button" onClick={() => dispatch(clearData())}>Clear List</button>
      {asyncData.loading ? (<p>Loading</p>) : (
        asyncData.data.map(eachTodo => <p key={eachTodo.id}>{eachTodo.title}</p>)
      )}
    </div>
  );
}

export default ReduxToolkitFunc;
