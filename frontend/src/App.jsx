import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AsideLeft } from './components/AsideLeft'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            {/* <MobileNavBar /> */}

            <div className="flex justify-center px-5 sm:px-32 md:mt-4">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="md:mx-4 w-full sm:basis-2/3">
{/* 
                        <header className="m-4 hidden sm:flex">
                            <h1 className="text-xl font-semi-bold">Home</h1>
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                            <Link to="/home" id="hero-logo"> ALCON </Link>
                        </header>

                        

                        <>
                            <div className="border sm:ml-3 sm:mr-0 flex px-2 py-3">

                                <div className="mt-3 w-12 h-12 text-lg flex-none">
                                    <img src={userData?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                                </div>

                                <div className="w-full px-4">
                                    <textarea
                                        value={content}
                                        placeholder="What's happening?"
                                        className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2"
                                        onChange={(e) => setContent(e.target.value)} >
                                    </textarea>
                                    <div className="max-w-xl max-h-80 mx-auto rounded-md">
                                        <img
                                            src={postImageUrl ? URL.createObjectURL(postImageUrl) : ""}
                                            className={postImageUrl ? "block max-w-full max-h-20 rounded-md my-2 cursor-pointer" : "hidden"}
                                            alt="avatar"
                                        />
                                    </div>

                                    <div className="flex justify-between">
                                        <label className="flex m-2">
                                            <input
                                                className="hidden"
                                                type="file"
                                                onChange={(e) => setPostImageUrl(e.target.files[0])}
                                            />
                                            <BsFillImageFill className="text-2xl mt-1 text-blue-700 cursor-pointer" />
                                        </label>
                                        <button
                                            disabled={!content.trim().length && !postImageUrl}
                                            className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed"
                                            onClick={postHandler}>
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>


                            

                            <div className="flex pl-0.5 pr-0.5 sm:pr-6 sm:px-5 py-3 justify-between relative">

                                <h1 className="text-xl">{sortPostBy} Posts</h1>

                                <GiSettingsKnobs
                                    className="fill-blue-600 stroke-0 hover:stroke-2 text-2xl cursor-pointer"
                                    onClick={() => setShowFilterModal(prev => !prev)}>
                                </GiSettingsKnobs>

                               

                                {showFilterPostModal && <div className="w-30 h-22 px-1 shadow-xl bg-slate-100 border border-slate-300 text-slate-600 font-semibold absolute right-11 top-4 z-20 rounded-xl">
                                    <ul className="p-2 cursor-pointer text-start">
                                        <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Latest"); setShowFilterModal(false); }}>Latest</li>
                                        <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Oldest"); setShowFilterModal(false); }}>Oldest</li>
                                        <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Trending"); setShowFilterModal(false); }}>Trending</li>
                                    </ul>
                                </div>
                                }
                            </div>

                            

                            {isLoading ? (
                                <div className="z-20">
                                    <Loader show={isLoading} />
                                </div>
                            ) : (
                                !sortedPosts.length ?
                                    <h1 className="text-2xl font-bold text-center mt-8">No Posts, Add one!</h1> :
                                    sortedPosts?.map(post => <Post key={post._id} post={post} />
                                    )
                            )}

                        </> */}

                    </main>

                    {/* <AsideRight />
                    <a href="#">
                        <AiOutlineArrowUp className="hidden sm:block fixed bottom-0 right-20 bg-blue-300 text-slate-50 text-5xl p-3 rounded-full mb-2 mr-20 hover:bg-blue-500" />
                    </a> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default App
