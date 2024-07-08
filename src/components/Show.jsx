import css from "../App.module.css";

const Show = (props) => {
    // const tasks = props.tasks;
    // const settasks = props.settasks;
    const { tasks, settasks } = props;

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
                        <i style={mycss} className="ri-pencil-line"></i>
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
        </>
    );
};

export default Show;
