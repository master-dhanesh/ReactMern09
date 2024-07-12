import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Home = () => {
    const [page, setpage] = useState(1);
    const [images, setimages] = useState(null);
    const getImages = async () => {
        try {
            const { data } = await axios.get(`/v2/list?page=${page}&limit=12`);
            setimages(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getImages();
    }, [page]);

    console.log("state >>>>", images);
    return (
        <div>
            <h1 className="mb-5 text-3xl">Gallery</h1>
            <div className="min-h-[70vh] flex gap-5 images flex-wrap">
                {images
                    ? images.map((i) => (
                          <img
                              className="w-[23%]"
                              key={i.id}
                              src={i.download_url}
                          />
                      ))
                    : "Loading..."}
            </div>
            <div className="my-10 flex justify-center gap-x-3">
                <button onClick={() => page > 1 && setpage(page - 1)}>
                    Prev
                </button>
                <p>{page}</p>
                <button onClick={() => setpage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Home;
