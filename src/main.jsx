import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import TaskContext from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <TaskContext>
        <App />
    </TaskContext>
);
