import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice  ';

const Counter = () => {

    const counter = useSelector(state => state.counter.counter)
    const showModal = useSelector(state=>state.counter.showCounter)

    const dispatch = useDispatch();

    const incHandler = () => {
        dispatch(counterActions.increment())
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10))
    };


    const decHandler = () => {
        dispatch(counterActions.decrement())
    };

    const toggleHandler = () => {
        dispatch(counterActions.toggle())
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
         {showModal &&    <div className={classes.value}>{counter}</div>}
            <button onClick={incHandler}>increment</button>
            <button onClick={increaseHandler}>increase by 10 </button>
            <button onClick={decHandler}>decrement</button>
           <button onClick={toggleHandler}>counter</button>
        </main>
    );
};

export default Counter;