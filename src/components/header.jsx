import React, { useState } from 'react'
import "../App.css"

export default function Header({ isLogin, setLogin, isSearch, artistSearchSongs, setIndex }) {

    const loginNotConfirmed = [{ login: "login", signup: "signup" }]
    const loginConfirmed = [{ login: "Explore Premium", signup: "Chandu Patel" }]
    const [serachTerm, setSearchTerm] = useState('');

    const handleLogin = () => {
        (isLogin === false) ? setLogin(true) : setLogin(false)
    }
    const handleSearch = (event) => {

        event.preventDefault();
        const searchTerm = event.target.value.toLowerCase();

        let index = -1;
        let flag = 0;
        artistSearchSongs.forEach((element, i) => {
            if (element.artistName.toLowerCase().includes(searchTerm)) {
                index = i;
                flag = 1;
                return;
            }
        });

        (flag===1)?setIndex(index):setIndex(-1);
        
        setSearchTerm(searchTerm);

    };

    return (
        <nav className='navbar'>
            <div className='left-side'>
                <div className='spotifyAndIconsDiv'>

                    <div className='spotify-div'>
                        <i className="fa fa-spotify"></i>
                        <h1>Spotify</h1>
                    </div>
                    <div className='left-right-icons'>
                        <i className={"fa fa-angle-left"}></i>
                        <i className={"fa fa-angle-right"}></i>
                    </div>
                </div>
                <div class="search-bar">
                    <form>
                        {
                            (isSearch) && <input type={"text"}
                                placeholder={"What do you want to listen to ?"}
                                onChange={handleSearch}
                            />

                        }
                    </form>
                </div>

            </div>
            <div className='right-side'>

                <ul className='right-nav'>
                    {
                        (isLogin === false) ? (<li onClick={handleLogin}> <a class="spotify-signin-btn">
                            <span class="spotify-label">{loginNotConfirmed[0].login}</span>
                        </a></li>) :
                            (<li>
                                <a class="spotify-signin-btn">
                                    <span class="spotify-label">{loginConfirmed[0].login}</span>
                                </a>
                            </li>)

                    }
                    {

                        (isLogin === false) ? (<li><p onClick={handleLogin}>{loginNotConfirmed[0].signup}</p></li>) :
                            (<li><select>
                                <option value="">{loginConfirmed[0].signup}</option>
                                <option value="">Account</option>
                                <option value="">Account</option>
                                <option value=""><p onClick={handleLogin}>logout</p></option>
                            </select></li>)
                    }
                </ul>
            </div>
        </nav>
    )
}




