This is a simple carousel slideshow, that cycles through some of the
nice comments that Inkscape's donors have made over the years.

Some sample data is included in src/cheers.json, but replace this with
newer data as it's available.

For the working version of this, please see:

  http://alpha.inkscape.org/cheers/

### Regenerating CSS

The CSS file is generated manually from a SCSS source like this:

  sassc src/App.scss > src/App.css 


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

Copy the built files to the server:

  rsync -avP build/ alpha.inkscape.org:/tmp/cheers/

Then, on Alpha, move it into the web space via:

  cp -v /var/www/alpha.inkscape.org/public_html/cheers/cheers.json /tmp/cheers/
  sudo chown -R www-data:board /tmp/cheers
  sudo chmod -R g+w /tmp/cheers
  sudo rm -rf /tmp/cheers-backup
  sudo mv -v /var/www/alpha.inkscape.org/public_html/cheers /tmp/cheers-backup
  sudo mv -v /tmp/cheers /var/www/alpha.inkscape.org/public_html/

Yes, this could be better automated.  .gitlab-ci is on the todo list...
