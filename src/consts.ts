import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Goodchart',
  description:
    'for excel enthusiast',
  href: 'https://vincentwidyan.vercel.app',
  author: 'vincentwidyan',
  locale: 'en-US',
  featuredPostCount: 5,
  postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/vincentwidyan',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/goodchartdev?s=21',
    label: 'Twitter',
  },
  {
    href: 'vincentwidyan@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
