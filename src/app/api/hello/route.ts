export async function GET(request: Request) {
  return new Response('Hello, Next.js!');
}

import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  id: string;
  text: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    const filePath: string = path.join(
      process.cwd(),
      'data',
      'Albatross_vol009of055-050-0.json'
    );
    const fileContents: string = fs.readFileSync(filePath, 'utf8');
    const data: Data = JSON.parse(fileContents);
    res.status(200).json({ data });
  } else if (method === 'POST') {
    console.log(req);
    // const filePath: string = path.join(
    //   process.cwd(),
    //   'data',
    //   '../../data/Albatross_vol009of055-050-0.json'
    // );
    // const { id, text }: { id: string; text: string } = req.body;
    // const fileContents: string = fs.readFileSync(filePath, 'utf8');
    // const data: Data[] = JSON.parse(fileContents);

    // // Busca el elemento con el id correspondiente y actualiza el texto
    // const updatedData: Data[] = data.map((item: Data) => {
    //   if (item.id === id) {
    //     return { ...item, text };
    //   } else {
    //     return item;
    //   }
    // });

    // // Guarda el JSON actualizado en el archivo
    // fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
    // res.status(200).json({ message: 'Data updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
