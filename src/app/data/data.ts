import { FaMedium, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export const pathData: PathData[] = [
  { name: 'HOME', link: '/' },
  { name: 'ABOUT', link: '/' },
  { name: 'CONTACT US', link: '/' },
];

export interface PathData {
  name: string;
  link: string;
}

export const socialMediaItems: SocialMediaItems[] = [
  {
    icon: FaMedium,
    name: 'Medium',
    link: '#',
  },
  {
    icon: FaTwitter,
    name: 'Twitter',
    link: '#',
  },
  {
    icon: FaGithub,
    name: 'Github',
    link: '#',
  },
  {
    icon: FaDiscord,
    name: 'Discor',
    link: '#',
  },
];

export interface SocialMediaItems {
  icon: IconType;
  name: string;
  link: string;
}
