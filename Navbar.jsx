// import React from "react";
// import Home from "./Home";
// import About from "./About";
// import Dashboard from "./Dashboard";
// const Navbar = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>

//         <li>
//           <a href="/About">About</a>
//         </li>

//          <li>
//           <a href="/Dashboard">Dashboard</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { Link,NavLink } from "react-router-dom"; // ✅ Import Link from react-router-dom
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({isActive})=>isActive?"active-link":""}>Home</NavLink> {/* ✅ Correct tag is <Link> */}
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
