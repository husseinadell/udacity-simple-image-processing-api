import path from 'path';
import {
  thumbImagesPath,
  getAvailableImages,
  getImagePath,
  makeImageThumb
} from '../../utils/image-manager';

describe('Test image manager', (): void => {
  it('should list available images in full path', async (): Promise<void> => {
    const availableImages = await getAvailableImages();
    expect(availableImages).toHaveSize(2);
  });

  it('should should get image Path', async (): Promise<void> => {
    const imagePath = await getImagePath({
      filename: 'test',
      width: 100,
      height: 100
    });
    const expectedPath =
      (await path.resolve(thumbImagesPath, 'test-100x100.jpg')) || '';

    expect(imagePath).toBe(expectedPath);
  });

  it('should make an image thumb', async (): Promise<void> => {
    const thumbImagePath = await makeImageThumb({
      filename: 'test',
      width: 100,
      height: 100
    });
    const expectedPath =
      (await path.resolve(thumbImagesPath, 'test-100x100.jpg')) || '';

    expect(thumbImagePath).toBe(expectedPath);
  });
});
