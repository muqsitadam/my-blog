import './App.css';
import React, {useState, useEffect} from 'react';

const App = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=muqsitadam')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
            setLoading(false)
        })
    },[])
    console.log("Posts state", posts)
    return(
    <div className="App bg-slate-200 h-screen">
        <div className='flex flex-col justify-center items-center'>
            <div className='w-3/5 text-lg p-5'>
                <h1 className="text-3xl font-medium">Hello, Welcome to my blog</h1>
                <p className='mb-5'>Here are my posts and articles on different tech concepts I am opportuned to write on:</p>
                <div>
                    {/* If we are loading, show loading placeholder */}
                    {loading && <h1>loading posts...</h1>}

                    {/* If we have loaded the posts display them */}
                    {!loading &&
                    posts.map((post,id) => {
                        return (
                            <div className="flex my-5 justify-center border border-slate-800 rounded-lg" key={id}>
                                <img className="w-1/3 object-fill rounded-l-lg" src={post.cover_image} alt="Cover image of article"/>
                                <div className="w-2/3 h-60 px-4 py-2">                                
                                    <div className="text-black font-bold text-3xl mb-1">{post.title}</div>
                                    <p className="text-sm text-grey-dark flex items-center font-semibold">
                                    {post.published_at.slice(0, 10)}
                                    </p>
                                    <p className="text-grey-darker text-lg mt-2 mb-5">{post.description}</p>
                                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" target="blank" href={post.canonical_url}>Read More</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h3 className="text-sm flex items-center justify-center font-mono">Check back from time to time, More is to come!!!!</h3>
            </div>
        </div>
        </div>
    )
}
export default App;
