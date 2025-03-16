import { Endpoints } from "@octokit/types";

export {};

declare global {
  type FormQueryHook = {
    query: string;
    isLoading: boolean;
    handleSubmit: (...args: any[]) => void;
    handleLoading: (...args: any[]) => void;
  };

  type PaginationHook = {
    currentPage: number;
    handlePageChange: (...args: any[]) => void;
    resetPage: () => void;
  };

  type SearchUsersResponse = Endpoints["GET /search/users"]["response"];
  type SearchUsersItemResponse =
    Endpoints["GET /search/users"]["response"]["data"]["items"];
  type ListUserReposResponse =
    Endpoints["GET /users/{username}/repos"]["response"];
}
