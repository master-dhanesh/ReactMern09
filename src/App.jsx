import { useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    const [tasks, settasks] = useState([]);

    return (
        <div className="w-[80%] mt-10 mx-auto ">
            <Create tasks={tasks} settasks={settasks} />
            <hr />
            <Show tasks={tasks} settasks={settasks} />
        </div>
    );
};

export default App;
