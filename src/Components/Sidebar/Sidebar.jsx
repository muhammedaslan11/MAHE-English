import { Avatar } from "@chakra-ui/avatar";
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
            PUAN TABLOLARI
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
      <div className="w-40 mt-16">
      <Avatar src="https://bit.ly/broken-link" />
       </div>
      </div>
    </article>

  </div>
  )
}

export default Sidebar
