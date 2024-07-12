import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="mb-10 flex gap-x-10">
            {/* <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/show">Show</Link> */}
            <NavLink
                style={(s) => ({ fontWeight: s.isActive ? "bold" : "normal" })}
                className={(s) => (s.isActive ? "text-red-400" : "")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                style={(s) => ({ fontWeight: s.isActive ? "bold" : "normal" })}
                className={(s) => (s.isActive ? "text-red-400" : "")}
                to="/create"
            >
                Create
            </NavLink>
            <NavLink
                style={(s) => ({ fontWeight: s.isActive ? "bold" : "normal" })}
                className={(s) => (s.isActive ? "text-red-400" : "")}
                to="/show"
            >
                Show
            </NavLink>
            <NavLink
                style={(s) => ({ fontWeight: s.isActive ? "bold" : "normal" })}
                className={(s) => (s.isActive ? "text-red-400" : "")}
                to="/scroll"
            >
                Infinite Scroll
            </NavLink>
        </nav>
    );
};

export default Nav;
