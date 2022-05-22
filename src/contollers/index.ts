import { Request, Response } from 'express';

export const getHomePage = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send(`
    <h1>Udacity Image Processing API</h1>
    <p>
      Listening at <code><a href="/api/images">/api/images</a></code> 
      for queries containing at least a valid filename. 
      Optionally use both width and height to set the size.
    </p>
    <p>
      Parameters:
      <ul>
        <li><code>filename</code> - (string) the name of the image file to process</li>
        <li><code>width</code> - (positive integer) the width of the resized image</li>
        <li><code>height</code> - (positive integer) the height of the resized image</li>
      </ul>
    </p>
    <p>
      Examples:
        <ul>
          <li><a href="/api/images?filename=test">/api/images?filename=test</a></li>
          <li><a href="/api/images?filename=test&width=100&height=100">/api/images?filename=test&width=100&height=100</a></li>
        </ul>
    </p>`);
};
