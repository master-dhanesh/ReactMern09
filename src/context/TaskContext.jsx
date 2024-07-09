import { createContext, useState } from "react";

export const taskcontext = createContext(null);
export const taskcontext1 = createContext(null);

const TaskContext = (props) => {
    const [tasks, settasks] = useState([]);
    const [info, setinfo] = useState("hello");
    return (
        <taskcontext.Provider value={[tasks, settasks]}>
            <taskcontext1.Provider value={[info, setinfo]}>
                {props.children}
            </taskcontext1.Provider>
        </taskcontext.Provider>
    );
};

export default TaskContext;
