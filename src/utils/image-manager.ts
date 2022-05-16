import { promises as fs } from 'fs';
import path from 'path';
import resizeImage from './resize-image';

const fullImagesPath = path.resolve(__dirname, '../../assets/images/full');
const thumbImagesPath = path.resolve(__dirname, '../../assets/images/thumb');

interface ImageParams {
  filename: string;
  width: number;
  height: number;
}

export const getAvailableImages = async (): Promise<string[]> => {
  const fileNames: string[] = await fs.readdir(fullImagesPath);
  return fileNames.map((fileName: string) => fileName.split('.')[0]);
};

export const getImagePath = async (
  imageParams: ImageParams
): Promise<null | string> => {
  try {
    if (!imageParams.filename) {
      throw new Error("Image's filename is required");
    }

    let filePath = '';
    if (imageParams.width && imageParams.height) {
      filePath = `${thumbImagesPath}/${imageParams.filename}-${imageParams.width}x${imageParams.height}.jpg`;
    } else {
      filePath = `${fullImagesPath}/${imageParams.filename}.jpg`;
    }
    await fs.access(filePath);
    return filePath;
  } catch {
    return null;
  }
};

export const makeImageThumb = async (
  imageParams: ImageParams
): Promise<null | string> => {
  try {
    if (!imageParams.filename || !imageParams.width || !imageParams.height) {
      throw new Error("Image's filename, width and height are required");
    }
    const imageFullPath = path.resolve(
      fullImagesPath,
      `${imageParams.filename}.jpg`
    );
    const imageThumbPath = path.resolve(
      thumbImagesPath,
      `${imageParams.filename}-${imageParams.width}x${imageParams.height}.jpg`
    );
    return await resizeImage({
      source: imageFullPath,
      target: imageThumbPath,
      width: imageParams.width,
      height: imageParams.height
    });
  } catch {
    return null;
  }
};
