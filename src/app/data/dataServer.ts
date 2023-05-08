import jsonfile from 'jsonfile';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.json');

export type DialogType = {
  id: string;
  text: string;
};

export const updateDialogText = async (dialog: DialogType): Promise<void> => {
  try {
    const data = await jsonfile.readFile('./Albatross_vol009of055-050-0.json');

    const updatedData = data[0].text_regions[
      'textregion_Albatross_vol009of055-050-0'
    ].text_lines.map((item: DialogType) => {
      if (item.id === dialog.id) {
        return {
          ...item,
          text: dialog.text,
        };
      }

      return item;
    });

    await jsonfile.writeFile(dataFilePath, updatedData, { spaces: 2 });

    console.log(`Dialog with id ${dialog.id} updated successfully.`);
  } catch (error) {
    console.error('Error updating dialog:', error);
  }
};
