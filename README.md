# Simple Image Processing API
First project of Udacity full stack developer nanodegree program.

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm run dev`
* build the project for production with `npm run build`
* lint the code with `npm run lint`
* run tests with `npm run test`

### Usage
The server will listen on port 3000:

#### Brief instructions
http://localhost:3000/

#### Endpoint to resize images
http://localhost:3000/api/images

Vaild query params are:
- filename: Available filenames are:
  - test
  - nature
  - beach
- width: numerical pixel value > 0
- height: numerical pixel value > 0

### Generral information
- Original Images are served from `assets/images/full`.
- Image thumbs will be stored in `assets/images/thumb` and can be deleted from
  there to verify that in that case they will be re-created on subsequent calls.
