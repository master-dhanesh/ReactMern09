import { useDispatch, useSelector } from "react-redux";
import { asyncDecrease, increase } from "./store/actions/counterActions";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counterReducer);

    const increasevalue = () => {
        dispatch(increase(1));
    };
    const decreasevalue = () => {
        dispatch(asyncDecrease(1));
    };

    return (
        <div className="p-10">
            <h1 className="text-5xl mb-5">{value}</h1>
            <button
                onClick={increasevalue}
                className="mr-5 bg-blue-300 px-4 py-2"
            >
                Increase Value By 1
            </button>
            <button onClick={decreasevalue} className="bg-blue-300 px-4 py-2">
                Decrease Value By 1
            </button>
        </div>
    );
};

export default App;
