// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App



// import React from "react";
// import AxiosEx from "./hookies/AxiosEx"
// export default function App(){
//   return(
//   <div>
//      <AxiosEx/>
//   </div>
//   )
// }



// import React from "react";
// import { BrowserRouter, Link, Route, Routes} from "react-router-dom"

// import Login from "./pages/login";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import RegigsterEx from "./pages/RegigsterEx";
// import Home from "./pages/Home";
// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<Home/>}/>
//       <Route path="/ab" element={<About/>}/>
//       <Route path="/lo" element={<Login/>}/>
//       <Route path="/co" element={<Contact/>}/>
//       <Route path="/res" element={<RegigsterEx/>}/>
//     </Routes>
//     <Link to="/lo">Login</Link>
//     <Link to="/ab">About</Link>
//     <Link to="/co">Contact</Link>
//     <Link to="/">Home</Link>
//     <Link to="/res">Regigster</Link>
    
//     </BrowserRouter>
//   )
// }

// import React from "react";
// import axios from "axios";
// import Task from "./hookies/task";

// export default function App() {
//   return (
//     <div>
//       <Task />
//     </div>
//   );
// }



//  import React from "react";
// import {BrowserRouter} from "react-router-dom"
// import About from "./pages/About";
// import Contact from "./pages/Contact"
// import Regigster from "./pages/Regigster"
// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path="/c" element={<Contact/>}/>
//       <Route path="/r" element={<Regigster/>}/>
//       <Route path="/a" element={<About/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }


// import React from "react";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Sidebar from "./pages/Sidebar";
// import Nav from "./pages/Nav";
// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path="/s" element={<Sidebar/>}/>
//       <Route path="/n" element={<Nav/>}/>

//       </Routes></BrowserRouter>
//   )
// }



import React, { useEffect, useState } from "react";
import axios from "axios"
export default function App(){
  let[sai,satya]=useState([])
  useEffect(()=>{
    axios.get("https://bbc-news-1.onrender.com/news")
    .then((res)=>{
      // console.log(res.data);
      satya(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return(
    <div>
      <h1>Welcome to the React Depolyment</h1>
      {sai.map((cv)=>{
        return(
          <div key={cv.id}>
          <h1>Id:{cv.id}</h1>
          <h2>Author:{cv.author}</h2>
<img src={cv.image} alt="news" width="200px" />          </div>
        )
      })}
    </div>
  )}