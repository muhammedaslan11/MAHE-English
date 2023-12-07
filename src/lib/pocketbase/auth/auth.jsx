import { pb } from "../pocketbase";
import toast from "react-hot-toast";

export const login = async (email, password) => {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    toast.success("Login Successful");
    // console.log(pb.authStore.isValid);
    // console.log(pb.authStore.model.id)
    console.log("Giriş Başarılı!");
    localStorage.setItem("user", JSON.stringify(authData));
    setTimeout(() => {
      window.location.href = "/homepage";
    }, 2500);
    return true;
  } catch (error) {
    toast.error(error.message);
    window.location.reload();
    return false;
  }
};

export const logout = () => {
  pb.authStore.clear();
  console.clear();
  console.log("Logout successful");
  localStorage.clear();
};

export const SignUp = async (data) => {
  try {
    const record = await pb.collection("users").create(data);
    console.log("Record created successfully:", record);
    toast.success("Record created successfully");
    return record;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

export const ff = async () => {
  const res = await pb.collection("users").getFullList();
  console.log("object", res);
};
