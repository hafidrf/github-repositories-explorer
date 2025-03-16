import octokit from "@/utils/request";
import { PER_PAGE } from "@/constants";

export const searchUsersByQuery = async (
  q: string,
  page: number = 1,
): Promise<SearchUsersResponse> => {
  const data = await octokit.request("GET /search/users", {
    q,
    per_page: PER_PAGE,
    page,
  });
  return data;
};

export const getReposByUsername = async (
  username: string
): Promise<ListUserReposResponse> => {
  const data = await octokit.request(`GET /users/{username}/repos`, {
    username
  });
  return data;
};
