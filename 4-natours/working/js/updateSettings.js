import axios from "axios";
import { showAlert } from "./alerts.js";

export async function updateSettings(data, type) {
  try {
    const res = await axios({
      method: "PATCH",
      url:
        type === "password"
          ? "http://localhost:3000/api/v1/users/updateMyPassword"
          : "http://localhost:3000/api/v1/users/updateMyProfile",
      data,
    });
    if (res.data.status === "success") {
      showAlert("success", "Settings saved.");
      location.assign("/");
    }
  } catch (error) {
    showAlert("error", error.response.data.message);
  }
}
