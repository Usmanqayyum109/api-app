 import React from 'react';
 import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
         <ul> 
          {/* <li>
            <Link to="/Create">Create</Link>
           </li>   */}
          {/* <li>  */}
         <div>
           <Link to="/Read">
            <span className='link'> Read </span>
           </Link>
         </div>
          {/* </li>  */}
          {/* <li> */}
             <Link to="/Update"><span className='link'>Update </span></Link>
           {/* </li>  */}
          </ul> 
       </nav>
     </>
      
    
  );
};

export default Layout;
