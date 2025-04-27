import githubProfile from '@/assets/json/profile.json'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// interface GithubUserData {
//     avatar_url: string;
//     bio: string | null;
//     blog: string;
//     company: string;
//     created_at: string;
//     email: null | string;
//     events_url: string;
//     followers: null | number;
//     followers_url: string;
//     following: null | number;
//     following_url: string;
//     gists_url: string;
//     gravatar_id: string;
//     hireable: null | boolean;
//     html_url: string;
//     id: number;
//     location: string;
//     login: string;
//     name: null | string;
//     node_id: string;
//     organizations_url: string;
//     public_gists: number;
//     public_repos: number;
//     received_events_url: string;
//     repos_url: string;
//     site_admin: false
//     starred_url: string;
//     subscriptions_url: string;
//     twitter_username: null | string;
//     type: string;
//     updated_at: string;
//     url: string;
// }

export function getProfileData(): {
    general: {
        key: string,
        link: string,
        name: string,
        icon: IconProp    
    }[],
    github: typeof githubProfile,
} {
    const data = {
        general: [
            {
                key: 'Linkedin',
                link: 'https://www.linkedin.com/in/hamza-jarane-b05511264/',
                name: 'Hamza Jarane',
                icon: faLinkedin
            },
            {
                key: 'Email',
                link: 'mailto:contact@hamza.im',
                name: 'contact@hamza.im',
                icon: faEnvelope
            }
        ],
        github: githubProfile,
    };

    return data;
}