import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
// step1 creation of context
export  const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null); 

    // data filling 
    async function fetchPostData(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        // console.log( url);
        try {
            
            const result = await fetch(url);
            const data =await result.json();
            // console.log( data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log('error fetching data', error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchPostData(page);
    }
    const value = {
        loading, 
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages, 
        setTotalPages,
        fetchPostData,
        handlePageChange,
    }
    // step 2 return context provide 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}