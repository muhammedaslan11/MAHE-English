import PropTypes from "prop-types";
import {
  FaRegThumbsUp,
  FaHouseUser,
  FaFire,
  FaRegCalendarDays,
} from "react-icons/fa6";

export const PopularQuestion = ({ url }) => {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "#131f24",
        color: "white",
      }}
      className="flex border  rounded-[10px] flex-col p-5 gap-3 m-6"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div style={{ width: "65px", height: "65px" }}>
            <img
              className="w-full h-full rounded-full"
              src="https://minio.asggrup.com/storage/Root/5239-glomil/MuhammedAslan2.png"
              alt="user"
            />
          </div>
          <div>
            <p style={{ fontSize: "1.1rem" }}>Muhammad Kaplan</p>
            <span style={{ fontSize: ".8rem", color: "grey" }}>
              kişinini seviyesi
            </span>
          </div>
        </div>
        {url !== "userinfo" && (
          <a
            style={{ fontSize: ".95rem" }}
            className="flex flex-row items-center justify-center align-middle gap-2"
            href="/userinfo"
          >
            Kullanıcıya Git
            <FaHouseUser size={25} />
          </a>
        ) || null}
      </div>
      <div
        style={{
          borderTop: "1px solid lightGrey",
          borderBottom: "1px solid lightGrey",
          padding: "1rem 0",
        }}
        className="h-26"
      >
        <p style={{ fontSize: "1rem" }}>
          Today is Tense day so we are looking for the best way to use Future
          Tense! Here we are at it again and this time the level went up even
          further!
        </p>
      </div>
      <div className="flex justify-between">
        <p className="flex items-center gap-2">
          <FaRegThumbsUp size={16} />
          <span style={{ fontSize: "1rem", color: "#2cba27" }}> 7</span>
        </p>
        <p className="flex items-center gap-2">
          <FaRegThumbsUp size={16} />
          <span style={{ fontSize: "1rem", color: "#ff1717" }}> 9</span>
        </p>
        <p className="flex items-center gap-2">
          <FaFire size={16} />
          <span style={{ fontSize: "1rem", color: "#db9239  " }}> 7.8</span>
        </p>
        <p className="flex items-center gap-2">
          <FaRegCalendarDays size={16} />
          <span style={{ fontSize: "1rem", color: "#818281" }}>26/04/2023</span>
        </p>
      </div>
    </div>
  );
};

PopularQuestion.propTypes = {
  url: PropTypes.node,
};
