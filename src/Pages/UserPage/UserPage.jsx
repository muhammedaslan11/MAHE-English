
import {
  FaRegCalendarDays,
  FaPaintbrush,
  FaClipboardQuestion,
  FaFire,
} from "react-icons/fa6";

import {
  PageContainer,
  Container,
  Row,
  Column,
} from "../../Components/GridWiev";

import { PopularQuestion } from "../../Components/PopularQuestion";
import { RecentQuestion } from "../../Components/RecentQuestion";
import { UserComment } from "../../Components/UserComment";
import { useState } from "react";


import Sidebar from "../../Components/Sidebar/Sidebar";


export const UserPage = () => {
  const [state, setState] = useState(false);

  return (
  
      <div className="flex h-screen " style={{backgroundColor:"#131f24"}}>
        <Sidebar/>
       
        <div>
          <div width={"60%"}>
            <PopularQuestion />
          </div>
          <div >
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", backgroundColor:"#131f24", color: "white", width:"95.8%"
              }}
              className="  border flex rounded-[10px] flex-col p-5 gap-2 m-6"
            >
              sdfsdf
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center flex-col gap-3 ">
            <div className="w-40 h-40">
              <img
                className="w-full h-full rounded-full ml-3 mt-5"
                src="https://minio.asggrup.com/storage/Root/5239-glomil/MuhammedAslan2.png"
                alt="user"
              />
            </div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", backgroundColor:"#131f24", color:"white"
              }}
              className=" border ml-5 mt-10 flex rounded-[10px] flex-col p-5 gap-2"
            >
              <p>
              User's Stats
            </p>
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col gap-2">
                <span>Joined Date</span>
                <span className="flex gap-1 items-center justify-center">
                  <FaRegCalendarDays size={18} />
                  10/23/2000
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Created Questions</span>
                <span className="flex gap-1 items-center justify-center">
                  <FaPaintbrush size={18} />
                  10
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Answered Questions</span>
                <span className="flex gap-1 items-center justify-center">
                  <FaClipboardQuestion size={18} />
                  10
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>Awrage Point</span>
                <span className="flex gap-1 items-center justify-center">
                  <FaFire size={18} />
                  8.7
                </span>
              </div>
              <button onClick={() => setState(!state)}>a</button>
            </div>
          </div>
        </div>
      </div>
      </div>
   
  );
};
