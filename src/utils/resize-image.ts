import sharp from 'sharp';

interface imageInputParams {
  source: string;
  target: string;
  width: number;
  height: number;
}

const resizeImage = async (
  params: imageInputParams
): Promise<null | string> => {
  try {
    // console.log('[souce, target, width, height]', params);
    await sharp(params.source)
      .resize(params.width, params.height)
      .toFormat('jpeg')
      .toFile(params.target);

    return params.target;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default resizeImage;
