import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { taskcontext } from "../context/TaskContext";

const Update = () => {
    const navigate = useNavigate();
    const [tasks, settasks] = useContext(taskcontext);
    const { index } = useParams();
    console.log(tasks[index]);
    return (
        <div>
            <h1 className="text-3xl">Update</h1>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default Update;
