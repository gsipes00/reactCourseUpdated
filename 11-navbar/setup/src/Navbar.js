import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  // state variable to toggle showLinks true and false, when toggle button is clicked
  const [showLinks, setShowLinks] = useState(false);
  // useRef will add a "current" property to whatever object it is referencing and pass the value of the property in the curly braces.
  // linksContainerRef object has a "current" property of null, same is true for the linkRef object. The linksContainerRef object is placed
  // in the links container div node, and the linksRef variable is placed in the <ul> node
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // if the showLinks value is changed to true, the links <ul> node is checked for box height, and then the links container div node's height property is
  // changed to the links height value. Inline CSS
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='a logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url} target='_blank'>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// *****************Different Approaches to Maintaining the Links Toggle Animation *************************

// First Approach, works but doesn't maintain toggle animation. This has to do with the component mounting and unmounting. It happens immediately.
// Basically the entire links div container is placed in a boolean expression, and returned when showlinks is true.
// {showLinks && (
//   <div className='links-container show-container'>
//     <ul className='links'>
//       {links.map((link) => {
//         const { id, url, text } = link;
//         return (
//           <li key={id}>
//             <a href={url}>{text}</a>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// }

// my approach. I set up the className with a ternary operator, to return the proper attribute depending on whether show links is true or false. This approach
// does maintain the toggle animation, because the component jsx isn't unmounting, rather it is controlled by removing the CSS property to show links when true
// and to not show them when false. Only issue with this approach is that the size of the links container is hard coded in the CSS. If more links are added or removed
// the CSS would have to be manually updated to properly display all of the links. The solutio presented above, uncommented, using useRef is how we are dynamically
// sizing the links container div, based on the number and size of links in the container.

// <div
// className={showLinks ? "links-container show-container" : "links-container"}
// >
//   <ul className='links'>
//     {links.map((link) => {
//       const { id, url, text } = link;
//       return (
//         <li key={id}>
//           <a href={url}>{text}</a>
//         </li>
//       );
//     })}
//   </ul>
// </div>;
