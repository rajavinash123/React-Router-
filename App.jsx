// import { useState } from "react";
// import "./App.css";
// import { createBrowserRouter ,RouterProvider} from "react-router-dom";
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Dashboard from "./Component/Dashboard";
// import Navbar from "./Component/Navbar";


// const router=createBrowserRouter(
//   [
//     {path:"/",
//       element:
//       <div>
//           <Home/>,<Navbar/>
//       </div>
  
//     },
//     {
//       path:"/About",
//       element:
//       <div>
//           <About/>,<Navbar/>
//       </div>
//     },
//     {
//        path:"/Dashboard",
//       element:<div>
//           <Dashboard/>,<Navbar/>
//       </div>
//     },

//     {
//       path:"/student/:id",
//       element:<div>
//           <Dashboard/>,<Navbar/>
//       </div>
//     }
//   ]
// );


// function App() {
//   return(
//     <div>
//   <RouterProvider router={router}/>

//     </div>
//   )
// }

// export default App;

//Student dayamic router
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Dashboard from "./Component/Dashboard";
// import Navbar from "./Component/Navbar";
// import Student from "./Component/Student"; // 👈 dynamic route component
// import "./App.css";
// import { Children } from "react";
// import Course from "./Component/Course";
// import MockTest from "./Component/MockTest";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Navbar />
//         <Home />
//       </div>,
//       Children:[
//         {path:"/course",
//           element:<Course/>
//         },
//       {
//       path:"/mock-test",
//       element:<MockTest/>
//       },
//     {
//       path:"/report",
//       element:<Report/>
//     },
//   ]
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <div>
//         <Navbar />
//         <About />
//       </div>
//     ),
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <div>
//         <Navbar />
//         <Dashboard />
//       </div>
//     ),
//   },
//   {
//     path: "/student/:id",
//     element: (
//       <div>
//         <Navbar />
//         <Student />
//       </div>
//     ),
  
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Dashboard from "./Component/Dashboard";
import Student from "./Component/Student";
import Course from "./Component/Course";
import MockTest from "./Component/MockTest";
import Report from "./Component/Report"; // Make sure this exists
import "./App.css";
import NotFound from "./Component/NotFound";

// ✅ Layout for Home and its nested children
const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* 👈 This renders nested routes */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // ✅ Parent layout
    children: [
      {
        index: true, // 👈 This makes "/" render <Home />
        element: <Home />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "mock-test",
        element: <MockTest />,
      },
      {
        path: "report",
        element: <Report />,
      },
    ],
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <Student />
      </div>
    ),
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

