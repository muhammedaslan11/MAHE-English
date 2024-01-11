
import { PopularQuestion } from "../../Components/PopularQuestion";
import Sidebar from "../../Components/Sidebar/Sidebar";

export const UserPage = () => {
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
              <p>Muhammad Kaplan</p>
              <span>d1 seviyesi</span>
            </div>
          </div>
        </div>
      </div>
   
  );
};
