import { useContext, useRef, useState } from "react";
import { taskcontext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const titleref = useRef();
    const navigate = useNavigate();
    const [tasks, settasks] = useContext(taskcontext);

    const [title, settitle] = useState("");
    const [status, setstatus] = useState("incomplete");
    const [description, setdescription] = useState("");

    const submithandler = (e) => {
        e.preventDefault();
        const newtask = { title, status, description };

        const copytasks = [...tasks];
        copytasks.push(newtask);
        settasks(copytasks);

        navigate("/show");
    };

    return (
        <>
            <h1 className="typo mb-10 text-3xl font-extrabold">
                Two Way Binding | Rendering
            </h1>
            <form
                onSubmit={submithandler}
                className=" mx-auto bg-zinc-200 p-5 "
            >
                <input
                    ref={titleref}
                    type="text"
                    className="mb-5 block rounded-lg p-3 border w-1/2"
                    placeholder="Title"
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                />
                {titleref.current && titleref.current.value.length < 5 && (
                    <p className="text-red-400">
                        Title must have atlest 4 characters
                    </p>
                )}

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
        </>
    );
};

export default Create;
