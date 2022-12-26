import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../../components/posts/Posts";
import { api_url } from '../../config';

export default function SearchPage() {
    const [posts, setPosts] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [isLoading, setLoading] = useState(false);

    const fetchPosts = async () => {
        const res = await axios.get(`${api_url}/posts` + searchKey);
        setPosts(res.data);
    };

    useEffect(() => {  
        fetchPosts();
    }, [searchKey]);

    const handleChange = (event) => {
        let keys = event.target.value;
        setSearchKey(keys);

        if (keys.length > 1) {
            const filtered = posts.filter((item) => {
                // return item.title.indexOf(searchKey.toUpperCase()) > -1;
                return item.title.toLowerCase().includes(searchKey.toLowerCase());
            });
            
            if (filtered.length > 0) {
                setPosts(filtered);
            }
        }else {
            // fetchPosts();
            setLoading(true);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Your Content"
                    value={searchKey}
                    onChange={(event) => handleChange(event)}
                />

                <div>
                  {
                    !posts.length ? 
                        (
                            <>
                                <h3>Loading..</h3>
                            </>
                        ):
                        (
                            <Posts posts={posts} />
                        )
                  }
                </div>
            </div>
        </>
    )
}
