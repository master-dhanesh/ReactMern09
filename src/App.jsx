import "./App.css";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    return (
        <div className="w-[80%] mt-10 mx-auto ">
            <Create />
            <hr />
            <Show />
        </div>
    );
};

export default App;
