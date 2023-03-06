import React, { useState } from 'react'
import Menu from './Menu'
import Header from './header'
import Content from './content';
import "../App.css";
import { Focus, playlists, browse, dummy, loginFocus1, loginFocus2 } from '../objects/content-header';
import { Focus1, Focus2, searchcard, logincard } from '../objects/content-images';
import { menu, loginMenu } from '../objects/menu';
import Logincontent from './loginContent';
import { searchArray, artistSearchSongs, artistSongs } from '../objects/searchArray';



const App = () => {
  const [isLogin, setLogin] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [index, setIndex] = useState(-1);
  // console.log(loginMenu);
  // console.log("up one is loginmenu")
  // console.log(menu);
  // console.log("up one is menu")
  // console.log(isLogin);
  // const loginNotConfirmed = [{login:"login",signup:"signup"}]
  // const loginConfirmed = [{login:"Explore Premium",signup:"Chandu Patel"}]

  console.log("the index of search is: ")
  console.log(index);
  // console.log(artistSearchSongs[index].artistName)
  // (index !== '')&&(artistSearchSongs[index].artistName)





  return (
    <>
      <Header isLogin={isLogin} setLogin={setLogin} isSearch={isSearch} setIndex={setIndex}
        artistSearchSongs={artistSearchSongs} />

      <div className='main'>
        <div className='menux'>
          {
            (isLogin === false) ? (<Menu menu={menu} isSearch={isSearch} setSearch={setSearch} isLogin={isLogin} />) :
              (<Menu menu={loginMenu} isSearch={isSearch} setSearch={setSearch} isLogin={isLogin} />)

          }

        </div>
        <div className='contentsx'>
          {


            (index!==-1 && isSearch===true) &&
            <><div className='search-array-list'>
              {
                searchArray.map((eachObj) => (
                  <a class="spotify-signin-btn">
                    <span class="spotify-label">{eachObj.whatToSearch}</span>
                  </a>
                ))

              }
            </div>
            <div className='song-results-container'>
              <div className='songs-results-container-left'>

                  <h3>Top result</h3>
              </div>
              <div className='songs-results-container-right'>
                  <h3>Songs</h3>
              </div>
            </div>

              <div className='artist-find'>
                <div className='artist-find-left-side'>
                  {/* <h1>Top result</h1> */}
                  <div className='artist-container'>
                    <img src={artistSearchSongs[index].artistPhoto} />
                    <h4>{artistSearchSongs[index].artistName}</h4>
                    <a class="spotify-signin-btn">
                    <span class="spotify-label">{artistSearchSongs[index].artistButton}</span>
                  </a>


                  </div>
                  

                </div>
                <div className='artist-find-right-side'>
                  {/* <h1>Songs</h1> */}
                  <div className='artistSongs-container'>
                    <div className='song-details-container'>
                      <h5>{artistSongs[index].song1}</h5>
                      <p>{artistSongs[index].artist}</p>
                    </div>
                    <div className='song-details-container'>
                      <h5>{artistSongs[index].song1}</h5>
                      <p>{artistSongs[index].artist}</p>
                    </div>
                    <div className='song-details-container'>
                      <h5>{artistSongs[index].song1}</h5>
                      <p>{artistSongs[index].artist}</p>
                    </div>
                    <div className='song-details-container'>
                      <h5>{artistSongs[index].song1}</h5>
                      <p>{artistSongs[index].artist}</p>
                    </div>

                  </div>

                </div>

              </div>
            </>
          }
          {
            (isLogin === true) && (<Logincontent isSearch={isSearch} />)
          }
          {

            (isSearch === false) ? ((isLogin) ?
              (<><Content Focus={Focus} FocusImages={Focus1} />
                <Content Focus={loginFocus1} FocusImages={logincard} />
                <Content Focus={loginFocus2} FocusImages={Focus1} /> </>) :
              (<>
                <Content Focus={Focus} FocusImages={Focus1} />
                <Content Focus={playlists} FocusImages={Focus2} />
                <Content Focus={Focus} FocusImages={Focus1} />
              </>))
              : (<><Content Focus={browse} FocusImages={searchcard} />
                <Content Focus={dummy} FocusImages={searchcard} />
                <Content Focus={dummy} FocusImages={searchcard} />
                <Content Focus={dummy} FocusImages={searchcard} />
                <Content Focus={dummy} FocusImages={searchcard} />
              </>)
          }
          {/* {
            (isLogin)?  (isSearch)?(<><Content Focus={browse} FocusImages={searchcard} />
            <Content Focus={dummy} FocusImages={searchcard} />
            <Content Focus={dummy} FocusImages={searchcard} />
            <Content Focus={dummy} FocusImages={searchcard} />
            <Content Focus={dummy} FocusImages={searchcard} />
            </>) : (<><Content Focus={Focus} FocusImages={Focus1} />
            <Content Focus={loginFocus1} FocusImages={logincard} />
            <Content Focus={loginFocus2} FocusImages={Focus1} /> </>) :  
            (isSearch)?(<><Content Focus={browse} FocusImages={searchcard} />
            <Content Focus={dummy} FocusImages={searchcard} />
            <Content Focus={dummy} FocusImages={searchcard} />
            <Content Focus={dummy} FocusImages={searchcard} />
            <Content Focus={dummy} FocusImages={searchcard} />
            </>) :  (<>
              <Content Focus={Focus} FocusImages={Focus1} />
              <Content Focus={playlists} FocusImages={Focus2} />
              <Content Focus={Focus} FocusImages={Focus1} />
            </>)
          } */}


        </div>


      </div>



    </>
  )
}

export default App


