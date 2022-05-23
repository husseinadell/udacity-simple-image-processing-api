import resizeImage from '../../utils/resize-image';
import { fullImagesPath, thumbImagesPath } from '../../utils/image-manager';
import path from 'path';

describe('Test resizing images via sharp', (): void => {
  it('invaild path should raise an error ', async (): Promise<void> => {
    const imageParams = {
      source: 'test.jpg',
      target: 'test.jpg',
      width: 100,
      height: 100
    };

    const imageThumbPathResult = await resizeImage(imageParams);
    expect(imageThumbPathResult).toBe(null);
  });

  it('should return null if the image does not exist', async (): Promise<void> => {
    const source = path.resolve(fullImagesPath, `test.jpg`);
    const target = path.resolve(thumbImagesPath, `test.jpg`);
    const imageParams = {
      source,
      target,
      width: -100,
      height: 100
    };

    const imageThumbPathResult = await resizeImage({
      source: `${fullImagesPath}/test.jpg`,
      target: `${thumbImagesPath}/test-${imageParams.width}x${imageParams.height}.jpg`,
      width: imageParams.width,
      height: imageParams.height
    });

    expect(imageThumbPathResult).toBe(null);
  });

  it('should suceeds to write thumb file', async (): Promise<void> => {
    const source = path.resolve(fullImagesPath, `test.jpg`);
    const target = path.resolve(thumbImagesPath, `test-100x100.jpg`);
    const imageParams = {
      source,
      target,
      width: 100,
      height: 100
    };

    const imageThumbPathResult = await resizeImage({
      source: path.resolve(fullImagesPath, `test.jpg`),
      target: path.resolve(
        thumbImagesPath,
        `test-${imageParams.width}x${imageParams.height}.jpg`
      ),
      width: imageParams.width,
      height: imageParams.height
    });

    expect(imageThumbPathResult).toBe(target);
  });
});
