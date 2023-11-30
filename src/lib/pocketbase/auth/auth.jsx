import { pb } from "../pocketbase";

export const login = async (email, password) => {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
    return true;
  } catch (error) {
    console.error("Login failed:", error.message);
    return false;
  }
};

export const logout = () => {
  pb.authStore.clear();
  console.clear();
  console.log("Logout successful");
};

export const SignUp = async (data) => {
  try {
    const record = await pb.collection("users").create(data);
    console.log("Record created successfully:", record);
    return record;
  } catch (error) {
    console.error("Record creation failed:", error.message);
    throw error;
  }
};
