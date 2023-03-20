import { dayjs } from "svelte-time";

const data: { label: string, key: string, link: string, format?: (x: string) => string }[] = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/ave1995/portfolio/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/ave1995/portfolio/watchers',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/ave1995/portfolio/commits',
    format: (x: string) => dayjs(x).format('MMMM DD, YYYY'),
  }
];

export default data;