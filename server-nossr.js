//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/browser'));

app.get('*', function(req,res) {
  // this is for i18n
  const supportedLocales = ['ru', 'en'];
  const defaultLocale = 'en';
  const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);

  // check if the requested url has a correct format '/locale' and matches any of the supportedLocales
  const locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;
  res.sendFile(path.join(__dirname + `/dist/browser/${locale}/index.html`));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
