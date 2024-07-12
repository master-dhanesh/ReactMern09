import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../utils/axios";

const Gallery = () => {
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);
    const [images, setimages] = useState([]);
    const getImages = async () => {
        try {
            const { data } = await axios.get(`/v2/list?page=${page}&limit=12`);
            setimages([...images, ...data]);
            setpage(page + 1);
            if (data.length === 0) {
                sethasmore(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div>
            <h1 className="mb-5 text-3xl">Gallery</h1>
            <InfiniteScroll
                className="min-h-[70vh] flex gap-5 images flex-wrap"
                dataLength={images.length}
                next={getImages}
                hasMore={hasmore}
                loader={<h1 className="text-5xl text-center my-5 ">Loading</h1>}
                endMessage={
                    <p className="text-center my-5">
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {images.length > 0 &&
                    images.map((i) => (
                        <img
                            className="w-[23%]"
                            key={i.id}
                            src={i.download_url}
                        />
                    ))}
            </InfiniteScroll>
        </div>
    );
};

export default Gallery;
