import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GIITHUB_TOKEN,
});

export default octokit;
