import { api } from "../utils/api";
import { endpoint } from "../utils/apiEndpoints";

export const getUserFollowers = async () => {
  try {
    const response = await api.get(endpoint.getUserFollowers);

    return response.data;
  } catch (error) {
    throw Error("Could not fetch followers !");
  }
};

export const getUserFollowing = async () => {
  try {
    const response = await api.get(endpoint.getUserFollowing);

    return response.data;
  } catch (error) {
    throw new Error("Could not fetch following");
  }
};
