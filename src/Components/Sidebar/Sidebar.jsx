
import { FaGift } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-row  ">
    <article className=" border-r border-white">
      <div className="logo">
        <h1 className="text-xl font-bold">
            <a href="/homepage">MAHE</a></h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            {" "}
            <FaGift />
            ÖĞREN
          </li>
          <li>
            <FaDumbbell />
            ALIŞTIRMA YAP
          </li>
          <li>
            {" "}
            <FaChartBar />
           <a href="/pointschart">PUAN TABLOLARI</a> 
          </li>
          <li>
            <FaCog />
            <a href="/usersettings">AYARLAR</a>
            
          </li>
          <li>
            <FaRegUser />
            <a href="/userinfo">PROFİL</a>
            
          </li>
          <li>
            <FaSignOutAlt />
            OTURUMU KAPAT
          </li>
        </ul>
      </div>
      <div>
      <div className="w-40 mt-16 ">
      <img
            className="w-full h-full rounded-full flex  items-center"
            src="https://minio.asggrup.com/storage/Root/5239-glomil/MuhammedAslan2.png"
            alt="user"
          />
          <p className="flex text-center justify-center mt-3 text-lg">Muhammad Kaplan</p>
       </div>
      </div>
    </article>

  </div>
  )
}

export default Sidebar
