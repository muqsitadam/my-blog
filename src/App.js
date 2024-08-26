import './App.css';
import React, {useState, useEffect} from 'react';

const App = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=notharshhaa')
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
            <div className='w-full xl:w-3/5 2xl:w-1/2  text-lg p-5'>
                <h1 className="text-3xl font-medium">Hello, Welcome to my blog</h1>
                <p className='mb-5'>Here are my posts and articles on different tech concepts I am opportuned to write on:</p>
                <div>
                    {/* If we are loading, show loading placeholder */}
                    {loading && <h1>loading posts...</h1>}

                    {/* If we have loaded the posts display them */}
                    {!loading &&
                    posts.map((post,id) => {
                        return (
                            <div className="flex flex-col lg:flex-row my-7 justify-center border border-slate-800 rounded-lg overflow-hidden" key={id}>
                                <img className="w-full lg:w-1/3 object-cover rounded-l-lg" src={post.cover_image} alt="Cover image of article"/>
                                <div className="flex flex-col justify-between w-full lg:w-2/3 px-4 pt-2 pb-5 lg:pb-10">                                
                                    <div>
                                    <div className="text-black font-bold text-1xl md:text-2xl mb-1">{post.title}</div>
                                    <p className="text-sm text-grey-dark flex items-center font-semibold">
                                        {post.published_at.slice(0, 10)}
                                    </p>
                                    <p className="text-grey-darker text-lg mt-2 mb-3">{post.description}</p>
                                    </div>
                                    <div className="mt-auto">
                                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full inline-block mt-4 shadow-md" target="_blank" href={post.canonical_url}>Read More</a>
                                    </div>
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
