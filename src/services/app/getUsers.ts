import api from "../api";

export async function getUsers() {
  try {
    const response = await api.get("/users?size=100");

    return response;
  } catch (error) {
    console.log("---> error: ");
  }
}
