import { useContext } from "react";
import css from "../App.module.css";
import { taskcontext } from "../context/TaskContext";
import { Link, Outlet, useLocation } from "react-router-dom";

const Show = () => {
    const location = useLocation();
    console.log(location);
    // const tasks = props.tasks;
    // const settasks = props.settasks;
    const [tasks, settasks] = useContext(taskcontext);

    const deletehandler = (i) => {
        const copytasks = [...tasks];
        copytasks.splice(i, 1);
        settasks(copytasks);
    };

    const mycss = {
        color: "royalblue",
    };

    let rendertasks = <h1>Loading...</h1>;
    if (tasks.length > 0) {
        rendertasks = tasks.map((t, i) => {
            return (
                <li
                    key={i}
                    className="rounded mb-3 p-2 w-[25%] flex justify-between bg-zinc-200"
                >
                    <span style={{ color: "tomato", fontSize: "28px" }}>
                        {t.title}
                    </span>
                    <span className="text-xl flex gap-x-3">
                        <Link
                            to={`${location.pathname}/${i}`}
                            style={mycss}
                            className="ri-pencil-line"
                        ></Link>
                        <i
                            onClick={() => deletehandler(i)}
                            className="ri-close-fill"
                        ></i>
                    </span>
                </li>
            );
        });
    }

    return (
        <>
            <h1 className={`${css.typoWord} mb-10 text-3xl font-extrabold`}>
                Pending Tasks
            </h1>
            <ul className="list-decimal">{rendertasks}</ul>
            <hr />
            <Outlet />
        </>
    );
};

export default Show;
