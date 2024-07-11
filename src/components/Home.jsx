import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Home = () => {
    const [images, setimages] = useState(null);
    const getImages = async () => {
        try {
            const { data } = await axios.get("/v2/list?page=1&limit=12");
            setimages(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // create /mount
        console.log("Create.jsx Mounted");
        if (!images) getImages();
        return () => {
            // destroy / unmount
            // alert("DO you want to leave this site?");
            console.log("Create.jsx Unmounted");
        };
    }, [images]);
    console.log("state >>>>", images);
    return (
        <div>
            <h1 className="mb-5 text-3xl">Home</h1>
            {/* <button
                className="px-5 py-2 bg-red-300 text-white"
                onClick={getImages}
            >
                Get Images
            </button> */}
        </div>
    );
};

export default Home;
