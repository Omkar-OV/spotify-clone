import React,{useEffect} from "react";
import { FaUsers } from "react-icons/fa";
import "../Styles/MainContainer.css";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";

function MainContainer() {

    useEffect(() => {
        const allli = document.querySelector('.menuList')
        .querySelectorAll("li");
         
       function changeMenuActive(){
           allli.forEach(n => n.classList.remove('active'));
           this.classList.add("active");
       }

        allli.forEach( n => n.addEventListener('click',changeMenuActive))
    },[])

  return (
    <div className="mainContainer">
      <Banner />
      <div className="menuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>
      <AudioList />
    </div>
  );
}

export { MainContainer };
