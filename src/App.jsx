import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Update from "./components/Update";
import Gallery from "./components/Gallery";

const App = () => {
    return (
        <div className="w-[80%] mt-10 mx-auto ">
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/scroll" element={<Gallery />} />
                {/* <Route path="/show" element={<Show />} />
                <Route path="/show/:index" element={<Update />} /> */}

                <Route path="/show" element={<Show />}>
                    <Route path="/show/:index" element={<Update />} />
                </Route>

                <Route
                    path="*"
                    element={<h1 className="text-5xl">Page Not Found</h1>}
                />
            </Routes>
        </div>
    );
};

export default App;
