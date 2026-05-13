// // // // import React, { useState } from "react";
// // // // import axios from "axios";
// // // // export default function App(){
// // // //     let[news,setnews]=useState([]);
// // // //     let handleClick=()=>{
// // // //         axios.get("http://localhost:5098/news")
// // // //         .then((res)=>{
// // // //             setnews(res.data)
// // // //         })
// // // //         .catch((err)=>{
// // // //             console.log(err)
// // // //         })
    
// // // //     }
// // // //     let handlePost=()=>{
// // // //          axios.post("http://localhost:5098/news",{  
// // // //       "id": 15,
// // // //       "title": "Startups Driving Innovation",
// // // //       "category": "Business",
// // // //       "author": "BBC Startup",
// // // //       "publishedAt": "2026-04-27"
    
// // // //     }).then((res)=>{
// // // //         console.log(res.data)
// // // //     })
// // // //     .catch((err)=>{
// // // //         console.log(err)
// // // //     })}
// // // //     return(
// // // //         <div>
// // // //             <h1>Display on the web page</h1>
            
// // // //                 <ol>
// // // //                     {news.map((cv,index)=>(
// // // //                         <li key={index}>
// // // //                             <img src={cv.image} alt="news" height="400px" width="500px"/>

// // // //                             <p>Title:{cv.title}</p>
// // // //                         </li>
// // // //                     ))}
// // // //                 </ol>
// // // //         <button onClick={handleClick}>Get Method</button>
// // // //         <button onClick={handlePost}>Post Method</button>
// // // //         </div>
// // // //     )
// // // // }


// // // import React from "react";
// // // import axios from "axios";
// // // export default function AxiosCrudEx(){
// // //     let handleDelete=()=>{
// // //         axios.delete(`http://localhost:5098/news/${15}`)
// // //         .then((res)=>{
// // //             console.log(res.data)
// // //         })
// // //         .catch((err)=>{
// // //             console.log(err)
// // //         })
// // //     }
// // //    let handlePost=()=>{ axios.post("http://localhost:5098/news", {
// // //   id: 15,
// // //   title: "Restored News",
// // //   category: "Business",
   
// // // })};
// // //     return(
// // //         <div>
// // //             <button onClick={handleDelete}>Delete</button>
// // //             <button onClick={handlePost}>Post</button>
// // //         </div>
// // //     )
// // // }



// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // export default function AxiosCrudEx() {

// //   const [news, setNews] = useState([]);

// //   const [form, setForm] = useState({
// //     title: "",
// //     category: "",
// //     author: ""
// //   });

// //   const [editId, setEditId] = useState(null);

// //   const URL = "http://localhost:5098/news";

// //   // ✅ GET data
// //   const fetchData = () => {
// //     axios.get(URL)
// //       .then((res) => setNews(res.data))
// //       .catch((err) => console.log(err));
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   // ✅ Handle input change
// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   // ✅ POST / UPDATE
// //   const handleSubmit = () => {

// //     if (editId) {
// //       // ✏️ UPDATE
// //       axios.patch(`${URL}/${editId}`, {
// //         author: form.author
// //       })
// //       .then(() => {
// //         fetchData();
// //         setEditId(null);
// //         setForm({ title: "", category: "", author: "" });
// //       });
// //     } else {
// //       // ➕ CREATE
// //       axios.post(URL, {
// //         ...form,
// //         id: Date.now(),
// //         image: "https://picsum.photos/300/200"
// //       })
// //       .then(() => {
// //         fetchData();
// //         setForm({ title: "", category: "", author: "" });
// //       });
// //     }
// //   };

// //   // ❌ DELETE
// //   const handleDelete = (id) => {
// //     axios.delete(`${URL}/${id}`)
// //       .then(() => {
// //         fetchData(); // refresh UI
// //       });
// //   };

// //   // ✏️ SET EDIT MODE
// //   const handleEdit = (item) => {
// //     setEditId(item.id);
// //     setForm(item);
// //   };

// //   return (
// //     <div>
// //       <h1>News CRUD App</h1>

// //       {/* ✅ FORM */}
// //       <input
// //         type="text"
// //         name="title"
// //         placeholder="Title"
// //         value={form.title}
// //         onChange={handleChange}
// //       />

// //       <input
// //         type="text"
// //         name="category"
// //         placeholder="Category"
// //         value={form.category}
// //         onChange={handleChange}
// //       />

// //       <input
// //         type="text"
// //         name="author"
// //         placeholder="Author"
// //         value={form.author}
// //         onChange={handleChange}
// //       />

// //       <button onClick={handleSubmit}>
// //         {editId ? "Update" : "Add"}
// //       </button>

// //       <hr />

// //       {/* ✅ DISPLAY */}
// //       {news.map((item) => (
// //         <div key={item.id} style={{ marginBottom: "20px" }}>
// //           <img src={item.image} width="200" alt="" />
// //           <p><b>{item.title}</b></p>
// //           <p>Category: {item.category}</p>
// //           <p>Author: {item.author}</p>

// //           <button onClick={() => handleDelete(item.id)}>
// //             Delete
// //           </button>

// //           <button onClick={() => handleEdit(item)}>
// //             Edit
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AxiosEx.css";
// const URL = "http://localhost:5098/news";
// export default function AxiosCrudEx() {
//   const [news, setNews] = useState([]);
//   const [form, setForm] = useState({ title: "", category: "", author: "" });
//   const [editId, setEditId] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const fetchData = () => {
//     axios.get(URL)
//       .then((res) => setNews(res.data))
//       .catch((err) => {
//         console.error(err);
//         showToast("Failed to fetch news", "error");
//       });
//   };

//   useEffect(() => { fetchData(); }, []);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = () => {
//     if (!form.title || !form.author || !form.category) {
//       showToast("Please fill in all fields", "error");
//       return;
//     }
//     setLoading(true);

//     if (editId) {
//       // ✅ BUG FIX: patch all changed fields, not just author
//       // Then update local state directly so UI reflects change immediately
//       axios.patch(`${URL}/${editId}`, {
//         title: form.title,
//         category: form.category,
//         author: form.author,
//       })
//         .then(() => {
//           // Update local state directly — avoids stale re-fetch race condition
//           setNews(prev =>
//             prev.map(item =>
//               item.id === editId ? { ...item, ...form } : item
//             )
//           );
//           setEditId(null);
//           setForm({ title: "", category: "", author: "" });
//           showToast("Article updated successfully");
//         })
//         .catch(() => showToast("Update failed", "error"))
//         .finally(() => setLoading(false));
//     } else {
//       const newItem = {
//         ...form,
//         id: Date.now(),
//         image: `https://picsum.photos/seed/${Date.now()}/600/400`,
//       };
//       axios.post(URL, newItem)
//         .then(() => {
//           // Optimistically add to local state
//           setNews(prev => [newItem, ...prev]);
//           setForm({ title: "", category: "", author: "" });
//           showToast("Article added successfully");
//         })
//         .catch(() => showToast("Failed to add article", "error"))
//         .finally(() => setLoading(false));
//     }
//   };

//   const handleDelete = (id) => {
//     setDeletingId(id);
//     setTimeout(() => {
//       axios.delete(`${URL}/${id}`)
//         .then(() => {
//           setNews(prev => prev.filter(item => item.id !== id));
//           showToast("Article deleted");
//         })
//         .catch(() => showToast("Delete failed", "error"))
//         .finally(() => setDeletingId(null));
//     }, 350); // wait for exit animation
//   };

//   const handleEdit = (item) => {
//     setEditId(item.id);
//     setForm({ title: item.title, category: item.category, author: item.author });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleCancel = () => {
//     setEditId(null);
//     setForm({ title: "", category: "", author: "" });
//   };

//   const categories = [...new Set(news.map(n => n.category).filter(Boolean))];

//   return (
//     <>
//       <style>{styles}</style>
//       <div className="app">

//         {/* HEADER */}
//         <div className="header">
//           <div className="header-accent" />
//           <div>
//             <h1>The Newsroom</h1>
//             <p className="header-sub">Content Management System</p>
//           </div>
//         </div>

//         {/* FORM */}
//         <div className="form-card">
//           <div className="form-tag"><span />{ editId ? "Edit Mode" : "New Article" }</div>

//           {editId && (
//             <div className="edit-badge">
//               <div className="edit-dot" />
//               Editing article — only author is sent via PATCH
//             </div>
//           )}

//           <div className="form-grid">
//             <div className="field full">
//               <label>Title</label>
//               <input
//                 name="title"
//                 placeholder="Enter article title..."
//                 value={form.title}
//                 onChange={handleChange}
//                 disabled={!!editId}
//               />
//             </div>
//             <div className="field">
//               <label>Category</label>
//               <input
//                 name="category"
//                 placeholder="e.g. Technology"
//                 value={form.category}
//                 onChange={handleChange}
//                 disabled={!!editId}
//               />
//             </div>
//             <div className="field">
//               <label>Author</label>
//               <input
//                 name="author"
//                 placeholder="Author name"
//                 value={form.author}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="form-actions">
//             <button
//               className={`btn-submit ${editId ? "update" : "add"}`}
//               onClick={handleSubmit}
//               disabled={loading}
//             >
//               {loading ? "Saving…" : editId ? "Update Article" : "Publish Article"}
//             </button>
//             {editId && (
//               <button className="btn-cancel" onClick={handleCancel}>
//                 Cancel
//               </button>
//             )}
//           </div>
//         </div>

//         {/* STATS */}
//         {news.length > 0 && (
//           <div className="stats">
//             <div className="stat">
//               <div className="stat-n">{news.length}</div>
//               <div className="stat-l">Articles</div>
//             </div>
//             <div className="stat">
//               <div className="stat-n">{categories.length}</div>
//               <div className="stat-l">Categories</div>
//             </div>
//             <div className="stat">
//               <div className="stat-n">
//                 {[...new Set(news.map(n => n.author))].length}
//               </div>
//               <div className="stat-l">Authors</div>
//             </div>
//           </div>
//         )}

//         {/* DIVIDER */}
//         <div className="section-divider"><span>Latest Articles</span></div>

//         {/* EMPTY */}
//         {news.length === 0 && (
//           <div className="empty">
//             <div className="empty-icon">📰</div>
//             <p>No articles yet. Publish your first one above.</p>
//           </div>
//         )}

//         {/* GRID */}
//         <div className="news-grid">
//           {news.map((item) => (
//             <div
//               key={item.id}
//               className={`news-card${editId === item.id ? " editing" : ""}${deletingId === item.id ? " deleting" : ""}`}
//               style={{ animationDelay: "0.05s" }}
//             >
//               <div className="card-img-wrap">
//                 <img src={item.image} alt={item.title} loading="lazy" />
//                 {item.category && (
//                   <span className="card-category">{item.category}</span>
//                 )}
//               </div>
//               <div className="card-body">
//                 <p className="card-title">{item.title}</p>
//                 <p className="card-author">
//                   <span className="author-dot" />
//                   {item.author}
//                 </p>
//                 <div className="card-actions">
//                   <button className="btn-edit" onClick={() => handleEdit(item)}>
//                     Edit
//                   </button>
//                   <button className="btn-delete" onClick={() => handleDelete(item.id)}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* TOAST */}
//       {toast && (
//         <div className={`toast ${toast.type}`}>
//           <div className="toast-dot" />
//           {toast.msg}
//         </div>
//       )}
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AxiosEx.css";

const URL = "http://localhost:9000/news";  

export default function AxiosCrudEx() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ title: "", category: "", author: "" });
  const [editId, setEditId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchData = () => {
    axios.get(URL)
      .then((res) => setNews(res.data))
      .catch((err) => {
        console.error(err);
        showToast("Failed to fetch news", "error");
      });
  };

  useEffect(() => { fetchData(); }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.title || !form.author || !form.category) {
      showToast("Please fill in all fields", "error");
      return;
    }
    setLoading(true);

    if (editId) {
      axios.patch(`${URL}/${editId}`, {
        title: form.title,
        category: form.category,
        author: form.author,
      })
        .then(() => {
          setNews(prev =>
            prev.map(item =>
              item.id === editId ? { ...item, ...form } : item
            )
          );
          setEditId(null);
          setForm({ title: "", category: "", author: "" });
          showToast("Article updated successfully");
        })
        .catch(() => showToast("Update failed", "error"))
        .finally(() => setLoading(false));
    } else {
      const newItem = {
        ...form,
        id: Date.now(),
        image: `https://picsum.photos/seed/${Date.now()}/600/400`,
      };
      axios.post(URL, newItem)
        .then(() => {
          setNews(prev => [newItem, ...prev]);
          setForm({ title: "", category: "", author: "" });
          showToast("Article added successfully");
        })
        .catch(() => showToast("Failed to add article", "error"))
        .finally(() => setLoading(false));
    }
  };

  const handleDelete = (id) => {
    setDeletingId(id);
    setTimeout(() => {
      axios.delete(`${URL}/${id}`)
        .then(() => {
          setNews(prev => prev.filter(item => item.id !== id));
          showToast("Article deleted");
        })
        .catch(() => showToast("Delete failed", "error"))
        .finally(() => setDeletingId(null));
    }, 350);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setForm({ title: item.title, category: item.category, author: item.author });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancel = () => {
    setEditId(null);
    setForm({ title: "", category: "", author: "" });
  };

  const categories = [...new Set(news.map(n => n.category).filter(Boolean))];

  return (
    <>
      <div className="app">

        
        <div className="header">
          <div className="header-accent" />
          <div>
            <h1>The Newsroom</h1>
            <p className="header-sub">Content Management System</p>
          </div>
        </div>

        
        <div className="form-card">
          <div className="form-tag">
            <span />
            {editId ? "Edit Mode" : "New Article"}
          </div>

          {editId && (
            <div className="edit-badge">
              <div className="edit-dot" />
              Editing article — title, category and author will be updated
            </div>
          )}

          <div className="form-grid">
            <div className="field full">
              <label>Title</label>
              <input
                name="title"
                placeholder="Enter article title..."
                value={form.title}
                onChange={handleChange}
                disabled={!!editId}
              />
            </div>
            <div className="field">
              <label>Category</label>
              <input
                name="category"
                placeholder="e.g. Technology"
                value={form.category}
                onChange={handleChange}
                disabled={!!editId}
              />
            </div>
            <div className="field">
              <label>Author</label>
              <input
                name="author"
                placeholder="Author name"
                value={form.author}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              className={`btn-submit ${editId ? "update" : "add"}`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Saving…" : editId ? "Update Article" : "Publish Article"}
            </button>
            {editId && (
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
            )}
          </div>
        </div>

     
        {news.length > 0 && (
          <div className="stats">
            <div className="stat">
              <div className="stat-n">{news.length}</div>
              <div className="stat-l">Articles</div>
            </div>
            <div className="stat">
              <div className="stat-n">{categories.length}</div>
              <div className="stat-l">Categories</div>
            </div>
            <div className="stat">
              <div className="stat-n">
                {[...new Set(news.map(n => n.author))].length}
              </div>
              <div className="stat-l">Authors</div>
            </div>
          </div>
        )}

     
        <div className="section-divider"><span>Latest Articles</span></div>

        
        {news.length === 0 && (
          <div className="empty">
            <div className="empty-icon">📰</div>
            <p>No articles yet. Publish your first one above.</p>
          </div>
        )}

        <div className="news-grid">
          {news.map((item) => (
            <div
              key={item.id}
              className={`news-card${editId === item.id ? " editing" : ""}${deletingId === item.id ? " deleting" : ""}`}
              style={{ animationDelay: "0.05s" }}
            >
              <div className="card-img-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
                {item.category && (
                  <span className="card-category">{item.category}</span>
                )}
              </div>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <p className="card-author">
                  <span className="author-dot" />
                  {item.author}
                </p>
                <div className="card-actions">
                  <button className="btn-edit" onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      {toast && (
        <div className={`toast ${toast.type}`}>
          <div className="toast-dot" />
          {toast.msg}
        </div>
      )}
    </>
  );
}