import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

interface Data {
  id: string;
  text: string;
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

export function GET(req: NextApiRequest, res: NextApiResponse) {
  const filePath: string = path.join(
    process.cwd(),
    'data',
    'Albatross_vol009of055-050-0.json'
  );
  const fileContents: string = fs.readFileSync(filePath, 'utf8');
  const data: Data = JSON.parse(fileContents);
  res.status(200).json({ data });
}

export async function POST(req: NextRequest) {
  const { id, text }: { id: string; text: string } = await req.json();

  const filePath: string = path.join(
    process.cwd(),
    'src/app/data',
    'Albatross_vol009of055-050-0copy.json'
  );
  const fileContents: string = fs.readFileSync(filePath, 'utf8');
  const data: TextRegionTextLine[] = JSON.parse(fileContents);
  const newData: TextRegionTextLine = {
    id,
    baseline: [], // reemplaza con un valor adecuado
    contour: { exterior: [], interiors: [] }, // reemplaza con un valor adecuado
    text: text,
    structure_type: '', // reemplaza con un valor adecuado
  };
  console.log(data);
  const newDataArray: TextRegionTextLine[] = data.map(
    (d: TextRegionTextLine) => {
      if (d.id === newData.id) {
        return newData;
      } else {
        return d;
      }
    }
  );
  fs.writeFileSync(filePath, JSON.stringify(newDataArray, null, 2), 'utf8');
  return new Response(JSON.stringify({ message: 'Text updated' }));
}
