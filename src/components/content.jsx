import React from 'react'
import "../App.css"

export default function Content({ Focus, FocusImages }) {
    console.log("the searchArray is: ")
    // console.log(searchArray)
    return (
        <>
        {/* <div className='search-array-list'>
            {
                searchArray.map((eachObj) => (
                    <a class="spotify-signin-btn">
                            <span class="spotify-label">{eachObj.whatToSearch}</span>
                        </a>
                ))

            }

        </div> */}
        {/* <div className='artist-find'>
            <div className='artist-find-left-side'>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>

            </div>
            <div className='artist-find-right-side'>
                <h1>world</h1>
                <h1>world</h1>
                <h1>world</h1>
                <h1>world</h1>

            </div>

        </div> */}
            <div className='content'>
                <div className='content-header'>
                    {/* <ul className='content-header-ul'> */}
                    {
                        Focus.map((eachObj) => (
                            <>
                                <p>{eachObj.main}</p>
                                <p className='show'>{eachObj.show}</p>
                            </>

                        ))
                    }
                    {/* </ul> */}
                </div>
                <div className='demo'>
                    {
                        FocusImages.map((eachObj) => (
                            <img src={eachObj.img} alt={""} />
                        ))
                    }
                </div>
                {/* <div className='box-model'>
                    <div className='card'>
                        <div className='card-content'>
                            {
                                FocusImages.map((eachObj) => (
                                    <img src={eachObj.img} alt={""} />
                                ))
                            }

                        </div>

                    </div>
                </div> */}
            </div>
        </>
    )
}
