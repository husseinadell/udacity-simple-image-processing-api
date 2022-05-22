import supertest from 'supertest';
import { app } from '../../index';
import { getImagePath } from '../../utils/image-manager';
import { promises as fs } from 'fs';
const request = supertest(app);

describe('Test responses from /images API', () => {
  describe('GET /', () => {
    it('should return 200', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/images', () => {
    it('GET /api/images?filename=test should return 200', async () => {
      const response = await request.get('/api/images?filename=test');
      expect(response.status).toBe(200);
    });

    it('GET /api/images?filename=test&width=100&height=100 should return 200', async () => {
      const response = await request.get(
        '/api/images?filename=test&width=100&height=100'
      );
      expect(response.status).toBe(200);
    });

    it('GET /api/images?filename=test&width=-100&height=100 should return 400', async () => {
      const response = await request.get(
        '/api/images?filename=test&width=-100&height=100'
      );
      expect(response.status).toBe(400);
    });

    it('GET /api/images should return 400', async () => {
      const response = await request.get('/api/images');
      expect(response.status).toBe(400);
    });
  });

  describe('Non existing endpoints', () => {
    it('should return 404', async () => {
      const response = await request.get('/test');
      expect(response.status).toBe(404);
    });
  });
});

afterAll(async () => {
  const testedImageTumbPath = await getImagePath({
    filename: 'test',
    width: 100,
    height: 100
  });

  try {
    await fs.access(testedImageTumbPath || '');
    await fs.unlink(testedImageTumbPath || '');
  } catch {
    return;
  }
});
