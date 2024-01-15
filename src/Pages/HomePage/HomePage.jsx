import { useState } from "react";
import { PopularQuestion } from "../../Components/PopularQuestion";
import { RecentQuestion } from "../../Components/RecentQuestion";
import Sidebar from "../../Components/Sidebar/Sidebar";

export const HomePage = () => {
  const [level, setLevel] = useState("a1");
  const levels = ["a1", "a2", "b1", "b2", "c1", "c2"];
  console.log(level);
  return (
    
    <div
      style={{ backgroundColor: "#131f24" }}
      className="w-screen h-screen flex justify-center"
    >
      
      <div className="flex">
        <Sidebar/>
        <div className="flex flex-col" >
          {levels.map((level, key) => (
            <a href="/userinfo"
              onClick={() => setLevel(level)}
              key={key}
              style={{
                backgroundColor: "#131f24", color:"white",
              }}
              className="flex border  rounded-[10px] flex-col p-5 ml-6 mt-6 "
            >
              {level} Seviyesi
            </a>
          ))}
        </div>
        <div>

          <div className="flex ">
            <div className="overflow-y-scroll h-screen"   >
              <h1 className="m-6 text-lg font-medium  " style={{color: "white"}}>POPÜLER SORULAR</h1>
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
              <PopularQuestion />
            </div>
            <div className="overflow-y-scroll h-screen  "  style={{
                backgroundColor: "#131f24", color:"white",
              }}>
                  <h1 className="m-6 text-lg font-medium  " style={{color: "white"}}>GÜNCEL SORULAR</h1>
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
              <RecentQuestion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
