import { FaMedium, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import dataJson from './Albatross_vol009of055-050-0.json';

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

export interface TextRegionTextLine {
  id: string;
  baseline: { x: number; y: number }[];
  contour: {
    exterior: { x: number; y: number }[];
    interiors: never[];
  };
  text: string;
  structure_type: string;
}

export const textRegionTextLines: TextRegionTextLine[] = Object.values(
  dataJson[0].text_regions['textregion_Albatross_vol009of055-050-0'].text_lines
);

//console.log(textRegionTextLines);
//console.log(JSON.stringify(textRegionTextLines[18].contour));
