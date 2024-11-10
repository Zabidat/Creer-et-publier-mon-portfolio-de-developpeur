// https://redux-toolkit.js.org/rtk-query/overview
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Config ===> getting the usersname 
import { githubUsername } from "../config";

//Create API to handle the operation between github and portfolio
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
    //Query get information about user in github
    getUsers: builder.query({
      query: () => `/users/${githubUsername}`,
    }),
    // https://docs.github.com/en/rest/users/social-accounts?apiVersion=2022-11-28#list-social-accounts-for-a-user
    //Query get list of social media in github
    getSocials: builder.query({
      query: () => `/users/${githubUsername}/social_accounts`,
    }),
    // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
     //Query get list of project  in github
    getProjects: builder.query({
      query: () => `/users/${githubUsername}/repos`,
    }),
  }),
});

export const { useGetUsersQuery, useGetSocialsQuery, useGetProjectsQuery } =
  apiSlice;
