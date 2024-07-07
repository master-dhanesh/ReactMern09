import { useState } from "react";
import "./App.css";
import css from "./App.module.css";

const App = () => {
    const [title, settitle] = useState("");
    const [status, setstatus] = useState("incomplete");
    const [description, setdescription] = useState("");

    const [tasks, settasks] = useState([
        {
            title: "title 1",
            description: "A normal description",
            status: "incomplete",
        },
    ]);

    const submithandler = (e) => {
        e.preventDefault();
        const newtask = { title, status, description };

        const copytasks = [...tasks];
        copytasks.push(newtask);
        settasks(copytasks);

        settitle("");
        setstatus("incomplete");
        setdescription("");
    };

    const mycss = {
        color: "royalblue",
    };

    return (
        <div className="w-[80%] mt-10 mx-auto ">
            <h1 className="typo mb-10 text-3xl font-extrabold">
                Two Way Binding | Rendering
            </h1>
            <form
                onSubmit={submithandler}
                className=" mx-auto bg-zinc-200 p-5 "
            >
                <input
                    type="text"
                    className="mb-5 block rounded-lg p-3 border w-1/2"
                    placeholder="Title"
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="" className="block mb-5">
                    <input
                        name="status"
                        type="radio"
                        placeholder="Title"
                        onChange={(e) => setstatus("complete")}
                        checked={status === "complete" ? true : false}
                    />
                    Complete
                    <input
                        type="radio"
                        name="status"
                        className="ml-5"
                        placeholder="Title"
                        onChange={(e) => setstatus("incomplete")}
                        checked={status === "incomplete" ? true : false}
                    />
                    InComplete
                </label>

                <textarea
                    type="text"
                    className="mb-5 block rounded-lg p-3 border w-1/2"
                    placeholder="Enter Description here..."
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                ></textarea>

                <button className="rounded px-5 py-2 text-white bg-black">
                    Submit
                </button>
            </form>
            <hr />
            <h1 className={`${css.typoWord} mb-10 text-3xl font-extrabold`}>
                Pending Tasks
            </h1>

            <ul className="list-decimal">
                {tasks.map((t, i) => {
                    return (
                        <li
                            key={i}
                            className="rounded mb-3 p-2 w-[25%] flex justify-between bg-zinc-200"
                        >
                            <span style={{ color: "tomato", fontSize: "28px" }}>
                                {t.title}
                            </span>
                            <span className="text-xl flex gap-x-3">
                                <i style={mycss} className="ri-pencil-line"></i>
                                <i className="ri-close-fill"></i>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
