import React, { useState } from 'react'
import "../App.css"
import Popup from 'reactjs-popup';

export default function Menu({ menu, isSearch, setSearch, isLogin }) {


    const [menuList, setMenuList] = useState(menu);

    const handleSearch = (val) => {
        (val === 'Search') && (isSearch === false) ? setSearch(true) : (setSearch(false))
        // console.log("the val is:")
        // console.log(val)

    }
    console.log("the login menu is: ");
    console.log(menu);

    const handleMouseOver = (displayName) => {
        let mouseOverArr = [...menuList];
        mouseOverArr.forEach(function (num) {
            if (num.display === displayName) {
                num.isMouseOver = true;
            }
            else {
                num.isMouseOver = false;

            }

        })
        setMenuList(mouseOverArr);


    }
    const handleMouseOut = (displayName) => {

        let mouseOutArr = [...menuList];
        mouseOutArr.forEach(function (num) {
            num.isMouseOver = false;

        })
        setMenuList(mouseOutArr);


    }
    
    function updateMenu(displayName) {
        let newArr = [...menuList]
        for (let each of newArr) {
            if (each.display === displayName) {
                each.isOpacity = true
            } else {
                each.isOpacity = false
            }
        }
        setMenuList(newArr)
    }
    return (
        <div className='menu'>
            <ul className='menu-ul'>
                {
                    menuList.map((eachObj, index) => (
                        <div className='menu-ul-li'>

                            {
                                (index>1 && isLogin===false) ? (<Popup trigger=
                                    {<li style={{ opacity: (eachObj.isOpacity || eachObj.isMouseOver) && "0.9" }}
                                        onClick={() => { handleSearch(eachObj.display); updateMenu(eachObj.display) }}
                                        onMouseOver={() => { handleMouseOver(eachObj.display) }}
                                        onMouseOut={() => { handleMouseOut(eachObj.display) }}>
                                        <i className={eachObj.class} style={{ width: "55%" }}></i>
                                        <h5>{eachObj.display}</h5></li>}
                                    position="right center">
                                    <div className='popup-container'>
                                        <h5>Enjoy Your Library</h5>
                                        <p>Login to see saved songs,podcasts,artists and playlists in your library </p>
                                        <button>Click here</button>
                                    </div>
                                </Popup>) : (<li style={{ opacity: (eachObj.isOpacity || eachObj.isMouseOver) && "0.9" }}
                                    onClick={() => { handleSearch(eachObj.display); updateMenu(eachObj.display) }}
                                    onMouseOver={() => { handleMouseOver(eachObj.display) }} 
                                    onMouseOut={() => { handleMouseOut(eachObj.display) }}>
                                    <i className={eachObj.class} style={{ width: "55%" }}></i>
                                    <h5>{eachObj.display}</h5></li>)

                            }


                        </div>
                    ))

                }
            </ul>
        </div>

    )
}
