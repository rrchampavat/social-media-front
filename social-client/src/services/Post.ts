import { api } from "../utils/api";
import { endpoint } from "../utils/apiEndpoints";

export const getFollowingUserPosts = async () => {
  try {
    const response = await api.get(endpoint.getFollowingPosts);

    return response.data;
  } catch (error: any) {
    throw Error(error.message);
  }
};
