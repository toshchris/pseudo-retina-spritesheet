Grunt setup

First make sure you do the following:

1. Install Node Package Manager: https://www.npmjs.com. This allows you to download the Grunt 'package'
2. Open the Terminal or Command Line and type this:

npm install -g grunt-cli

3. The basics are setup in the Package.js and Gruntfile.js

See more at: http://gruntjs.com/getting-started

4. Navigate to the project folder Run "npm install" 

******************************
Project specific setup
******************************

Sprites
**********

Images can be compiled into a single spritesheet to reduce the HTTP overheads assosiated with using multiple images.

The spritesheet is generated automatically by grunt and it builds 2 sheets, one for normal displays and one for double DPI screens (Retina).

You will need to add 2 versions of the same icon to the /css/images/icons/ folder.

Keeps the same names but add a @2x suffix to the filename:

icon.png
icon@2x.png

Using the Terminal/Command line, change to the current project directory and run:

grunt sprite

The Grunt task will run and add the new images to the spritesheets in /css/

It will also update the Sass file "spritesmith-build.scss" with the image dimentions and position information (you should never touch this file but always make sure it is added to the main base.scss as a partial import)

To add the images to the page, create the HTML markup and then open up the "_sprites.scss" partial file.

Here, all you need to do is add the Sass below:

.your-html-class {
  @include sprite('image-name-here');
}

The code will add your sprite as a psuedo element and position the image correctly from the spritesheet. It will also include the retina version on hi DPI screens.