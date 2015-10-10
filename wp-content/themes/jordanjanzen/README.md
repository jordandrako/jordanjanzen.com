# UZU Child Theme Template
### Version 1.0.3

## Installation Instructions

1. Make sure Git, Sass and Grunt are installed (these require node.js and ruby).
2. Clone this repository to the wp-themes directory using ("git clone git@bitbucket.org:uzumedia/uzuchild.git themeName").
2.1. Replace themeName with whatever you plan on naming the theme folder.
3. Open a command line, point to the theme folder and run "npm install --save-dev"
4. Open gruntfile.js and change the globalConfig src and dest to the new theme name folder.
5. On the command line, run grunt, or grunt watch (grunt watch is set to the default grunt task).

## Optional steps and tips

1. Install livereload browser extenstions. Grunt watch starts a livereload server automatically, and any changes to the files while grunt watch is running will trigger a compile and livereload.
2. Set up chrome inspector to map to your project folder to enable editing the code from the browser.
3. Update screenshot.png
4. Install yeoman (via "npm install -g yo"), and yeopress (via "npm install -g generator-wordpress"), and generate a wordpress install that has a custom wp-config which you can then make a custom local-config.php file. A sample of these files are included in the lib/sample folder. This way you can still upload the same wp-config.php file to the remote server without it breaking the connection to the database.

## Editing theme styles

All theme stylesheets are made in Sass and are stored in lib/scss/.  The main-style.scss acts as the table of contents that pulls in the scss partials. The main file to edit most css is located in the lib/scss/breakpoints/_base.scss file. This is a mobile first theme so style for the phone and add tablet and desktop specific styles into the appropriate breakpoint files.

1. Change the child theme name and parent theme in the main-style.scss comment.
2. Edit the partials/_variable.scss file. This contains the color and typeface and other variables for the site branding. For example: if the brands main color is red, edit the $red variable to match the right hex code. Then set the $primary variable to $red.
3. Follow the main-style.scss and edit the other partials according to what you need.