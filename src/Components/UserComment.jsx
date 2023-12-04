import { FaHouseUser } from "react-icons/fa6";
import { Column } from "./GridWiev";

export const UserComment = () => {
  return (
    <>
      <Column>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 10px",
          }}
          className="bg-gray-200 flex rounded-[10px] flex-col p-5 gap-2"
        >
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <div style={{ width: "75px", height: "75px" }}>
                <img
                  className="w-full h-full rounded-full"
                  src="https://minio.asggrup.com/storage/Root/5239-glomil/MuhammedAslan2.png"
                  alt="user"
                />
              </div>
              <div>
                <p>UserName</p>
                <span>User Lvl</span>
              </div>
            </div>

            <a
              style={{ fontSize: ".95rem" }}
              className="flex flex-row items-center justify-center align-middle gap-2"
              href="/userinfo"
            >
              Kullanıcıya Git
              <FaHouseUser size={25} />
            </a>
          </div>
          <p
            style={{
              borderTop: "1px solid lightGrey",
              borderBottom: "1px solid lightGrey",
              padding: "1rem 0",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam
            dolorum doloribus, incidunt dolores illo necessitatibus vero
            voluptas minima sint.
          </p>
        </div>
      </Column>
    </>
  );
};
