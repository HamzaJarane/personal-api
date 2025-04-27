import githubRepos from '@/assets/json/repos.json'

export function getOpenSource(): typeof githubRepos {
    const data = githubRepos;
    return data;
}