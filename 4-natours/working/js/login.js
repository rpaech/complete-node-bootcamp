import axios from "axios";
import { showAlert } from "./alerts.js";

export async function login(email, password) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
    if (res.data.status === "success") {
      showAlert("success", "Login successful.");
      location.assign("/");
    }
  } catch (error) {
    showAlert("error", "Login failed.");
  }
}

export async function logout() {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:3000/api/v1/users/logout",
    });
    if (res.data.status === "success") {
      showAlert("success", "Logout successful.");
      location.reload(true);
    }
  } catch (error) {
    showAlert("error", "Logout failed.");
  }
}
