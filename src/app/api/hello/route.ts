import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

export interface TextLine {
  id: string;
  baseline: { x: number; y: number }[];
  contour: {
    exterior: { x: number; y: number }[];
    interiors: never[];
  };
  text: string;
  structure_type: string;
}

export interface TextRegion {
  id: string;
  contour: {
    exterior: { x: number; y: number }[];
    interiors: never[];
  };
  text_lines: {
    [key: string]: TextLine;
  };
}

export interface TextRegionTextLine {
  image: { name: 'string'; height: number; width: number };
  text_regions: {
    [key: string]: TextRegion;
  };
}

export function GET(req: NextApiRequest, res: NextApiResponse) {
  const filePath: string = path.join(
    process.cwd(),
    'src/app/data',
    'Albatross_vol009of055-050-0.json'
  );
  const fileContents: string = fs.readFileSync(filePath, 'utf8');
  const data: TextRegionTextLine[] = JSON.parse(fileContents);
  return new Response(JSON.stringify({ data }));
}

export async function POST(req: NextRequest) {
  const { id, text }: { id: string; text: string } = await req.json();

  const filePath: string = path.join(
    process.cwd(),
    'src/app/data',
    'Albatross_vol009of055-050-0.json'
  );
  const fileContents: string = fs.readFileSync(filePath, 'utf8');
  const data: TextRegionTextLine = JSON.parse(fileContents);

  for (const regionId in data.text_regions) {
    const region = data.text_regions[regionId];
    for (const lineId in region.text_lines) {
      const line = region.text_lines[lineId];
      if (line.id === id) {
        line.text = text;
        break;
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  return new Response(JSON.stringify({ message: 'Text updated' }));
}
