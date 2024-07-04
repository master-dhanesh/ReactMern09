import React, { useState } from "react";

const App = () => {
    const [username, setusername] = useState("");
    const [names, setnames] = useState([]);

    // const SubmitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.name.value);
    // };

    const SubmitHandler = (e) => {
        e.preventDefault();

        const copynames = [...names];
        copynames.push(username);
        setnames(copynames);

        // setnames([...names, username]);

        setusername("");
    };

    console.log(names);
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                {/* <input type="text" placeholder="name" name="name" /> */}
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setusername(e.target.value)}
                    value={username}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default App;

// [{
//     title: "",
//     description: "",
//     status: ""
// }]
