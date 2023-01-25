import { observer } from 'mobx-react-lite';
import counter from './store/counter';
import './App.css';

const Counter = observer(() => {
    return (
        <div className={'counter'}>
            {`Count = ${counter.count}`}
            <div className={'buttonsContainer'}>
                <button className={'button'} onClick={() => counter.increment()}>
                    +
                </button>
                <button className={'button'} onClick={() => counter.decrement()}>
                    -
                </button>
            </div>
        </div>
    );
});

export default Counter;
