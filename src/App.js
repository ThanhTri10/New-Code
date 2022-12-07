
import './App.css';
import React, { useEffect, useState } from 'react';
import {FaSpotify} from  "react-icons/fa"
import {AiFillHome} from  "react-icons/ai"
import {RiPlayListFill} from  "react-icons/ri"
import {AiFillPlayCircle} from  "react-icons/ai"
import {useNavigate, Routes, Route, Outlet} from "react-router-dom"
const DadApp = () => {
  return(
    <div>
      <h1>Hello</h1>
      <Outlet/>
    </div>  
  )
}

function App() {
  return (
    <div>  
      <Routes>  
        <Route path="/" element={<DadApp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/artist" element={<Artist/>}/>
      </Routes>  
    </div>  
  );
}


const Artist = () => {
  const navigate = useNavigate()
  let artistId = localStorage.getItem("artistId")
  let [FollowingList, setFollowingList] = useState([])
  let artist = ArtistList.find(
    o => JSON.stringify(o.id)===artistId)
  // const userId = localStorage.getItem("userId");
  const Follow = (event) => {
    event.preventDefault()
    FollowingList.push(artist.name)
    setFollowingList(FollowingList)
    console.log(FollowingList)
    // setFollowingList(FollowingList)
    // FollowingList = JSON.parse(localStorage.getItem("name"))
  }
// if (localStorage.getItem("name")) {
//     FollowingList = JSON.parse(localStorage.getItem("name"));
//     // console.log(FollowingList)
// }
  return(
      <div className="home" style={{display:"flex"}}>
          <div className="menu_side">
          <div className="menu" style={{overflow: "hidden"}}>
          <h1 className="app-name" style={{marginTop: 20, marginBottom: 10}}><FaSpotify className="music-icon"/> Music</h1>
          <div className="side_content_1">
                  <h4 className="side_content-home" onClick={() => {navigate("/")}}> <AiFillHome className="content-icon"/> Home</h4>
                  <h4 className="side_content-playlist"> <RiPlayListFill className="content-icon"/> My Playlist</h4>
          </div>
          <div className="side_content_2">
                  <h1 style={{width: 300, height: 40, marginBottom:0}}>Following Artists</h1>
                  <div>
                      {FollowingList.map((following) => (
                          <li id={following} style={{visibility: "visible"}}>{following}</li>
                      ))}
                  </div>
    </div>
      </div>
          </div>
          <div className="main_side">
          <div className="info">
            
            <div>
                <div className="header">
                    <img src={artist.picture} alt={artist.name} style={{marginLeft: "5%", height:"200px", width:"200px"}}/>
                    <h1 style={{color: "white", marginLeft: "3%", marginTop: "5%", fontSize:"80px"}}>{artist.name}</h1>
                </div>  
            </div>

            <div className="taskbar" style={{height: 70}}>
                <AiFillPlayCircle className="raise" style={{color: "white", marginLeft:"5%"}}/>
                <button className="follow" style={{margin:0, padding: 0, height: 62, width:120, marginLeft: 10}} onClick={Follow}>Follow</button>
            </div>
                    
            <div>
                    {artist.songList.map((song) => (
                        <div className="song-list"> 
                            <li className="song" style={{display: "flex", flexDirection:"row", width: 1050}}>
                                <h4 style={{marginLeft: 5, width: 10, height: 10}}>{song.id}</h4>
                                <img src={song.image} alt={song.name} style={{marginLeft: 20, marginTop:5, height: 50, width: 50}}/>
                                <h4 style={{marginLeft: 40, width: 900 }}>{song.name}</h4>
                                <h4>...</h4>
                        </li>
                    </div>
                    ))}
            </div>
           
        </div>
          </div>
          
      </div>
  )    
}

const Home = () => {
  // const userId = localStorage.getItem("userId");

  return(
      <div className="home" style={{display:"flex"}}>
          {/* <div className="menu_side">
              <MenuSide/>
          </div> */}
          <div className="main_side">
              <MainSide/>
          </div>
          
      </div>
  )    
}

const AvatarList = [
  {
      id: "1",
      name: "Ed Sheeran",
      image: "https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6",
  },
  {
      id: "2",
      name: "Justin Bieber",
      image: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
  },
  {
      id: "3",
      name: "The Weeknd",
      image: "https://i.scdn.co/image/ab6761610000e5ebb5f9e28219c169fd4b9e8379",
  },
  {
      id: "4",
      name: "Taylor Swift",
      image: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0",
  },
  {
      id: "5",
      name: "Drake",
      image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
  },
  {
      id: "6",
      name: "Sam Smith",
      image: "https://i.scdn.co/image/ab6761610000e5eb10ca40ea0b0b5082dba0ff75",
  },
  {
      id: "7",
      name: "Rihanna",
      image: "https://i.scdn.co/image/ab6761610000e5eb99e4fca7c0b7cb166d915789",
  },
  {
      id: "8",
      name: "Post Malone",
      image: "https://i.scdn.co/image/ab6761610000e5ebb894ef9fa437b0389c5567cc",
  },
  {
      id: "9",
      name: "Ariana Grande",
      image: "https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952",
  },
  {
      id: "10",
      name: "Imagine Dragons",
      image: "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
  },
  {
      id: "11",
      name: "Dua Lipa",
      image: "https://i.scdn.co/image/ab6761610000e5ebd42a27db3286b58553da8858",
  },
]



let ArtistList = [
  {
      id: "1",
      name: "Ed Sheeran",
      picture: "https://i.scdn.co/image/ab67706f000000030373b03502fba84b91dac8e8",
      songList: [
          {
              id: "1",
              name: "Shape of You",
              image: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
          },
          {
              id: "2",
              name: "Perfect",
              image: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
          },
          {
              id: "3",
              name: "Bad Habits",
              image: "https://i.scdn.co/image/ab67616d0000b273ef24c3fdbf856340d55cfeb2"
          },
          {
              id: "4",
              name: "Photograph",
              image: "https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd"
          },
          {
              id: "5",
              name: "Thinking out Loud",
              image: "https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd"
          },
          {
              id: "6",
              name: "I Don't Care",
              image: "https://i.scdn.co/image/ab67616d0000b27357cc434093fd4b6af7500fd8"
          },
      ]
  },
  {
      id: "2",
      name: "Justin Bieber",
      picture: "https://i.scdn.co/image/ab67706f000000039cf2e21a96f217de5d3abf60",
      songList: [
          {
              id: "1",
              name: "STAY",
              image: "https://i.scdn.co/image/ab67616d0000b2738e6551a2944764bc8e33a960"
          },
          {
              id: "2",
              name: "Love Yourself",
              image: "https://i.scdn.co/image/ab67616d0000b273c34f510fcf86aae4aad9c305"
          },
          {
              id: "3",
              name: "Sorry",
              image: "https://i.scdn.co/image/ab67616d0000b273c34f510fcf86aae4aad9c305"
          },
          {
              id: "4",
              name: "Let Me Love You",
              image: "https://i.scdn.co/image/ab67616d0000b2738b360b89f6e4cef876018f3b"
          },
          {
              id: "5",
              name: "Peaches",
              image: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431"
          },
          {
              id: "6",
              name: "What Do You Mean?",
              image: "https://i.scdn.co/image/ab67616d0000b273c34f510fcf86aae4aad9c305"
          },
      ]
  },
  {
      id: "3",
      name: "The Weeknd",
      picture: "https://i.scdn.co/image/ab67706f00000003387c0ddfa4c7553ce24edba5",
      songList: [
          {
              id: "1",
              name: "Blinding Lights",
              image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
          },
          {
              id: "2",
              name: "Starboy",
              image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"
          },
          {
              id: "3",
              name: "The Hills",
              image: "https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b"
          },
          {
              id: "4",
              name: "I Feel It Coming",
              image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"
          },
          {
              id: "5",
              name: "Can't Feel My Face",
              image: "https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b"
          },
          {
              id: "6",
              name: "Save Your Tears",
              image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
          },
      ]
  },
  {
      id: "4",
      name: "Taylor Swift",
      picture: "https://i.scdn.co/image/ab67706f00000003b0c066c63921e8d43068982c",
      songList: [
          {
              id: "1",
              name: "Shake It Off",
              image: "https://i.scdn.co/image/ab67616d0000b273b7e976d2b35c767f9012cb72"
          },
          {
              id: "2",
              name: "Blank Space",
              image: "https://i.scdn.co/image/ab67616d0000b273b7e976d2b35c767f9012cb72"
          },
          {
              id: "3",
              name: "Bad Blood",
              image: "https://i.scdn.co/image/ab67616d0000b273b7e976d2b35c767f9012cb72"
          },
          {
              id: "4",
              name: "You Belong With Me",
              image: "https://i.scdn.co/image/ab67616d0000b2737b25c072237f29ee50025fdc"
          },
          {
              id: "5",
              name: "Look What You Made Me Do",
              image: "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b"
          },
          {
              id: "6",
              name: "I Don't Wanna Live Forever",
              image: "https://i.scdn.co/image/ab67616d0000b2732ae921f082ae5db4d3da818f"
          },
      ]
  },
  {
      id: "5",
      name: "Drake",
      picture: "https://i.scdn.co/image/ab67706f0000000387bff188c40608c48b82068f",
      songList: [
          {
              id: "1",
              name: "Hotline Bling",
              image: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c"
          },
          {
              id: "2",
              name: "God's Plan",
              image: "https://i.scdn.co/image/ab67616d0000b273f9a9abe8ed9ffaba55412384"
          },
          {
              id: "3",
              name: "One Dance",
              image: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c"
          },
          {
              id: "4",
              name: "In My Feelings",
              image: "https://i.scdn.co/image/ab67616d0000b273f9a9abe8ed9ffaba55412384"
          },
          {
              id: "5",
              name: "Life Is Good",
              image: "https://i.scdn.co/image/ab67616d0000b2738a01c7b77a34378a62f46402"
          },
          {
              id: "6",
              name: "MIA",
              image: "https://i.scdn.co/image/ab67616d0000b2734d382194384bc6e08eb090f6"
          },
      ]
  },
  {
      id: "6",
      name: "Sam Smith",
      picture: "https://i.scdn.co/image/ab67706f000000030cba2da68d7e7c2555eb581d",
      songList: [
          {
              id: "1",
              name: "Too Good At Goodbyes",
              image: "https://i.scdn.co/image/ab67616d0000b273f3ea7140c4a8ba597d0b276b"
          },
          {
              id: "2",
              name: "I'm Not The Only One",
              image: "https://i.scdn.co/image/ab67616d0000b273b11bdc91cb9ac6b14f5c1dae"
          },
          {
              id: "3",
              name: "Stay With Me",
              image: "https://i.scdn.co/image/ab67616d0000b273b11bdc91cb9ac6b14f5c1dae"
          },
          {
              id: "4",
              name: "Dancing With A Stranger",
              image: "https://i.scdn.co/image/ab67706c0000bebb6cbd3d69604ffebafd0f2b31"
          },
          {
              id: "5",
              name: "Promises",
              image: "https://i.scdn.co/image/ab67616d0000b273ccdcbd450e42fc7b27a82a1f"
          },
          {
              id: "6",
              name: "How Do You Sleep?",
              image: "https://i.scdn.co/image/ab67616d0000b27376bc1c851462191faec76bf8"
          },
      ]
  },
  {
      id: "7",
      name: "Rihanna",
      picture: "https://i.scdn.co/image/ab67706f00000003efdcaeb6d5a53f0628022192",
      songList: [
          {
              id: "1",
              name: "This Is What You Came For",
              image: "https://i.scdn.co/image/ab67616d0000b273d9aa52355e062f5de060adbf"
          },
          {
              id: "2",
              name: "Diamonds",
              image: "https://i.scdn.co/image/ab67616d0000b2736ede83cf8307a1d0174029ac"
          },
          {
              id: "3",
              name: "Love The Way You Lie",
              image: "https://i.scdn.co/image/ab67616d0000b273c08d5fa5c0f1a834acef5100"
          },
          {
              id: "4",
              name: "Work",
              image: "https://i.scdn.co/image/ab67616d0000b27333c6b920eabcf4c00d7a1093"
          },
          {
              id: "5",
              name: "We Found Love",
              image: "https://i.scdn.co/image/ab67616d0000b2731c5eacf6965d328c2c795cef"
          },
          {
              id: "6",
              name: "Wild Thoughts",
              image: "https://i.scdn.co/image/ab67616d0000b273eac94393568883ab1e9d6c7d"
          },
      ]
  },
  {
      id: "8",
      name: "Post Malone",
      picture: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1aBeik-large.jpg",
      songList: [
          {
              id: "1",
              name: "Sunflower",
              image: "https://i.scdn.co/image/ab67616d0000b27391bf597d2ed7528de53f71be"
          },
          {
              id: "2",
              name: "rockstar",
              image: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268"
          },
          {
              id: "3",
              name: "Circles",
              image: "https://i.scdn.co/image/ab67616d0000b27391bf597d2ed7528de53f71be"
          },
          {
              id: "4",
              name: "Better Now",
              image: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268"
          },
          {
              id: "5",
              name: "Congratulations",
              image: "https://i.scdn.co/image/ab67616d0000b27309a51bd361845073cbd501b7"
          },
          {
              id: "6",
              name: "Psycho",
              image: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268"
          },
      ]
  },
  {
      id: "9",
      name: "Ariana Grande",
      picture: "https://i.scdn.co/image/ab67706f000000034a54a41a2760b74e1d68d100",
      songList: [
          {
              id: "1",
              name: "7 rings",
              image: "https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8"
          },
          {
              id: "2",
              name: "thank u, next",
              image: "https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8"
          },
          {
              id: "3",
              name: "Side To Side",
              image: "https://i.scdn.co/image/ab67616d0000b2732e651648db439a9b5995e065"
          },
          {
              id: "4",
              name: "Bang Bang",
              image: "https://i.scdn.co/image/ab67616d0000b27334933308ad8af9d87cd504dc"
          },
          {
              id: "5",
              name: "no tears left to cry",
              image: "https://i.scdn.co/image/ab67616d0000b273c3af0c2355c24ed7023cd394"
          },
          {
              id: "6",
              name: "positions",
              image: "https://i.scdn.co/image/ab67616d0000b2735ef878a782c987d38d82b605"
          },
      ]
  },
  {
      id: "10",
      name: "Imagine Dragons",
      picture: "https://i.scdn.co/image/ab67706f0000000338c83ba021da82c253665473",
      songList: [
          {
              id: "1",
              name: "Believer",
              image: "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a"
          },
          {
              id: "2",
              name: "Thunder",
              image: "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a"
          },
          {
              id: "3",
              name: "Radioactive",
              image: "https://i.scdn.co/image/ab67616d0000b273b2b2747c89d2157b0b29fb6a"
          },
          {
              id: "4",
              name: "Demons",
              image: "https://i.scdn.co/image/ab67616d0000b273b2b2747c89d2157b0b29fb6a"
          },
          {
              id: "5",
              name: "Bad Liar",
              image: "https://i.scdn.co/image/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd"
          },
          {
              id: "6",
              name: "Enemy",
              image: "https://i.scdn.co/image/ab67616d0000b273aa597e50829169e6994eb403"
          },
      ]
  },
  {
      id: "11",
      name: "Dua Lipa",
      picture: "https://i.scdn.co/image/ab67706f00000003880da7c5be289f2c7787ccd2",
      songList: [
          {
              id: "1",
              name: "Don't Start Now",
              image: "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946"
          },
          {
              id: "2",
              name: "Break My Heart",
              image: "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946"
          },
          {
              id: "3",
              name: "Cold Heart (PNAU Remix)",
              image: "https://i.scdn.co/image/ab67616d0000b2739f5cce8304c42d3a5463fd23"
          },
          {
              id: "4",
              name: "New Rules",
              image: "https://i.scdn.co/image/ab67616d0000b273a13ac79ec7e3ac62bd4ca4e8"
          },
          {
              id: "5",
              name: "IDGAF",
              image: "https://i.scdn.co/image/ab67616d0000b273a13ac79ec7e3ac62bd4ca4e8"
          },
          {
              id: "6",
              name: "One Kiss",
              image: "https://i.scdn.co/image/ab67616d0000b273d09f96d82310d4d77c14c108"
          },
      ]
  },
  
]

// const MenuSide = () => {
//   const navigate = useNavigate()
  // const ChangeMainSide = (event) => {
  //     navigate("/artist");
  //     console.log(event.currentTarget.id);
  //     localStorage.setItem("followingId", JSON.stringify(event.currentTarget.id))
  // }

  // let FollowingList = JSON.parse(localStorage.getItem("name"))
  // let [FollowingList, setFollowingList] = useState(([]) => JSON.parse(localStorage.getItem("name")));
  // setFollowingList(JSON.parse(localStorage.getItem("name")))
  
//   return(

         
//       <div className="menu" style={{overflow: "hidden"}}>
//           <h1 className="app-name" style={{marginTop: 20, marginBottom: 10}}><FaSpotify className="music-icon"/> Music</h1>
//           <div className="side_content_1">
//                   <h4 className="side_content-home" onClick={() => {navigate("/")}}> <AiFillHome className="content-icon"/> Home</h4>
//                   <h4 className="side_content-playlist"> <RiPlayListFill className="content-icon"/> My Playlist</h4>
//           </div>
//           <div className="side_content_2">
//                   <h1 style={{width: 300, height: 40, marginBottom:0}}>Following Artists</h1>
//                   <div>
//                       {FollowingList.map((following) => (
//                           <li id={following} style={{visibility: "visible"}}>{following}</li>
//                       ))}
//                   </div>
//           </div>
//       </div>
//   )        
// }

const MainSide = () => {
  return(
  
          
              <div>
                  <div className="avatar">
                      <Avatar/>
                  </div>
              </div>
          
       
      
      
  )
}

const Avatar = () => {
  const navigate = useNavigate();
  const ChangeMainSide = (event) => {
      navigate("/artist");
      console.log(event.currentTarget.id)
      localStorage.setItem("artistId", JSON.stringify(event.currentTarget.id))
  }
  
  return(
      <div>
          <h1 className="avatar-title">Artists</h1>
          <div className="avatars"  style={{display: "flex", flexDirection:"row", flexWrap: "wrap"}}>
      
              {AvatarList.map((avatar) => (
                  <li className="avatar-list" style={{display: "flex", flexDirection:"column", position:"relative", alignItems:"center", justifyContent: "center"}} id={avatar.id} onClick={ChangeMainSide}>
                      <img src={avatar.image} alt={avatar.name} className="profile-picture"></img>
                      <AiFillPlayCircle className="play-icon" style={{position:"absolute", fontSize:"40px", cursor:"pointer", marginBottom: "20%", transition: ".3s"}}/>
                      <h4>{avatar.name}</h4>
                  </li>
              ))}

          </div>
      </div>
  )
}



// const Info = () => {
//     let artistId = localStorage.getItem("artistId")

//     let artist = ArtistList.find(
//         o => JSON.stringify(o.id)===artistId)
//     const Follow = (event) => {
//         event.preventDefault()
//         FollowingList.push(artist.name)
//         localStorage.setItem("name", JSON.stringify(FollowingList))
//         FollowingList = JSON.parse(localStorage.getItem("name"))
//     }
//     if (localStorage.getItem("name")) {
//         FollowingList = JSON.parse(localStorage.getItem("name"));
//         console.log(FollowingList)
//     }
    

//         return(
//         <div className="info">
            
//             <div>
//                 <div className="header">
//                     <img src={artist.picture} alt={artist.name} style={{marginLeft: "5%", height:"200px", width:"200px"}}/>
//                     <h1 style={{color: "white", marginLeft: "3%", marginTop: "5%", fontSize:"80px"}}>{artist.name}</h1>
//                 </div>  
//             </div>

//             <div className="taskbar" style={{height: 70}}>
//                 <AiFillPlayCircle className="raise" style={{color: "white", marginLeft:"5%"}}/>
//                 <button className="follow" style={{margin:0, padding: 0, height: 62, width:120, marginLeft: 10}} onClick={Follow}>Follow</button>
//             </div>
                    
//             <div>
//                     {artist.songList.map((song) => (
//                         <div className="song-list"> 
//                             <li className="song" style={{display: "flex", flexDirection:"row", width: 1050}}>
//                                 <h4 style={{marginLeft: 5, width: 10, height: 10}}>{song.id}</h4>
//                                 <img src={song.image} alt={song.name} style={{marginLeft: 20, marginTop:5, height: 50, width: 50}}/>
//                                 <h4 style={{marginLeft: 40, width: 900 }}>{song.name}</h4>
//                                 <h4>...</h4>
//                         </li>
//                     </div>
//                     ))}
//             </div>
           
//         </div>
//     )
// } 

export default App;