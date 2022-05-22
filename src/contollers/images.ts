import { Request, Response } from 'express';
import {
  getAvailableImages,
  getImagePath,
  makeImageThumb
} from '../utils/image-manager';

interface ImageQueryParams {
  filename?: string;
  width?: string;
  height?: string;
}

export const getResizedImageApi = async (req: Request, res: Response) => {
  const imageQuery: ImageQueryParams = req.query;
  const fileName = imageQuery.filename || '';
  const availableImages: string[] = await getAvailableImages();
  const imageNameExists = availableImages.includes(fileName);

  if (!imageNameExists) {
    res.status(400).send(
      `Please pass a valid filename in the 'filename' query segment. 
      Available filenames are: ${availableImages.join(',')}.`
    );
    return;
  }

  const width = parseInt(imageQuery.width || '');
  const height = parseInt(imageQuery.height || '');

  if (!width && !height && fileName) {
    const imagePath = await getImagePath({ filename: fileName });
    res.sendFile(imagePath || '');
    return;
  }
  if (!width || width < 1 || !height || height < 1) {
    res
      .status(400)
      .send(
        `Please pass valid width and height in the 'width' and 'height' query segments.`
      );
    return;
  }

  let imagePath: string | null = await getImagePath({
    filename: fileName,
    width,
    height
  });

  if (!imagePath) {
    imagePath = await makeImageThumb({
      filename: fileName,
      width,
      height
    });
  }

  res.sendFile(imagePath || '');
};
