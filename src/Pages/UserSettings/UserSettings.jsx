
import { Avatar } from "@chakra-ui/react";

import "./usersettings.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
const UserSettings = () => {
  return (
    <div className="flex flex-row h-screen   ">
    <Sidebar/>
      <div className="user-setting-information ">
        <div className="text-2xl font-bold mt-4">
          <h1> Hesap Ayarları</h1>
        </div>
        <div className="user-setting-information-profile-photo mt-4">
          <span className="flex items-center gap-40">
            <p className="text-lg font-semibold">Profil Resmi</p>
            <button className="button">Dosya Seç</button>
          </span>
          <div
            className="w-16 mt-4 float-right
          "
          >
            <Avatar src="https://bit.ly/broken-link" />
          </div>
        </div>
        <div className="flex flex-col justify-between items-end gap-5 mb-10">
          <span className="flex items-center gap-8">
            <p className="text-lg font-semibold">Ad</p>
            <div className="group ">
              <input
                required=""
                type="text"
                className="inputt"
                placeholder="user.name"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
            </div>
          </span>

          <span className="flex items-center gap-8">
            <p className="text-lg font-semibold">Kullanıcı Adı</p>
            <div className="group ">
              <input
                required=""
                type="text"
                className="inputt"
                placeholder="user.kullanıcıadı"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
            </div>
          </span>

          <span className="flex items-center gap-8 ">
            <p className="text-lg font-semibold">Email</p>
            <div className="group ">
              <input
                required=""
                type="text"
                className="inputt"
                placeholder="user.email"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
            </div>
          </span>

          <span className="flex items-center gap-8">
            <p className="text-lg font-semibold">Şifre</p>
            <div className="group ">
              <input
                required=""
                type="text"
                className="inputt"
                placeholder="user.password"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
            </div>
          </span>
          <span className="flex items-center gap-8">
            <p className="text-lg font-semibold"> Yeni Şifre</p>
            <div className="group ">
              <input
                required=""
                type="text"
                className="inputt"
                placeholder="newuser.password"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
            </div>
          </span>
          <button className="button">Kaydet</button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
