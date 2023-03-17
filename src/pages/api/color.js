import { readFile } from 'fs/promises';
import { join } from 'path';
import xlsx from 'xlsx';


export default async function handler(req, res) {
    const filePath = join(process.cwd(), '/public/excel/data_streamer.xlsx');
    const fileData = await readFile(filePath);
    const workbook = xlsx.read(fileData, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const cellValue = worksheet['B22']?.v;
    const color = cellValue === 'green' ? 'green' : 'red';


    res.status(200).json({ color });
}

