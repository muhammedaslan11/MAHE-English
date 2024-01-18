import PropTypes from "prop-types";
import {
  FaHouseUser,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaFire,
  FaRegCalendarDays,
} from "react-icons/fa6";

export const RecentQuestion = ({ width }) => {
  return (
    <div
      style={{
        width: width ? width : "",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
      className=" flex border-b flex-col p-5 gap-3 m-6"
    >
      <div className="flex items-center justify-center gap-4">
        <div className="w-14">
          <img
            className="w-full h-full rounded-full"
            src="https://minio.asggrup.com/storage/Root/5239-glomil/MuhammedAslan2.png"
            alt="user"
          />
        </div>
        <div>
          <p style={{ fontSize: ".9rem" }}>Muhammad Kaplan</p>
          <a
            className="flex gap-2 items-center"
            style={{ fontSize: ".85rem" }}
            href="/userinfo"
          >
            Kişiye Git
            <FaHouseUser size={18} />
          </a>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid lightGrey",
          padding: ".6rem 0",
        }}
      >
        <p style={{ fontSize: ".9rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          aliquid fugit voluptatem impedit doloremque tenetur!
        </p>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="flex items-center gap-2">
            <FaRegThumbsUp size={15} />
            <span style={{ fontSize: "1rem", color: "#2cba27" }}>10</span>
          </p>
          <p className="flex items-center gap-2">
            <FaRegThumbsDown size={15} />
            <span style={{ fontSize: "1rem", color: "#ff1717" }}>7</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="flex gap-2">
            <FaFire size={15} />
            <span style={{ fontSize: "1rem", color: "#db9239" }}>8.5</span>
          </p>
          <p className="flex items-center gap-2">
            <FaRegCalendarDays size={15} />
            <span style={{ fontSize: "1rem", color: "#818281" }}>
              10/04/2023
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

RecentQuestion.propTypes = {
  width: PropTypes.node,
};
