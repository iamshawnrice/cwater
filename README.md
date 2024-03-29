# **c**water

This is a simple marketing site for a fictional beverage. It was built as a code exercise to practice a little rails. Feel free to clone and modify as you see fit.

## Local Setup Instructions
1. clone this repo
2. run `bundle install`, `bower install` and `npm install` from the root of this repo to install all dependencies
3. run `bin/rails server` to start the rails dev server
4. the site should now be reachable at [localhost:3000](http://localhost:3000)
5. (optional) If you'd like to leverage the power of browsersync, open a new terminal tab/window, `cd` into the root of this app and run `gulp`

## Notes
I've disabled the rails asset pipeline and am managing the asset compilation/concatenation via gulp. This may seem counterintuitive, but I chose to do this for a few reasons:

1. [Gulp (lib)](https://www.npmjs.com/package/gulp-sass) sass is a lot faster than the built-in rails sass compiler.
2. [Browsersync](http://www.browsersync.io/) significantly speeds up debugging/troubleshooting and exposes a public IP for simultaneous on-device testing.
3. Using gems to manage front-end dependencies (like bootstrap and jquery) always struck me as odd.
4. All the rails devs at my [previous employer](http://corp.izea.com/) insisted that using gulp instead of the asset pipeline would be a tremendous amount of work. I wanted to see for myself. It was definitely more effort than I expected. But now that a clear path has been found, implementing this technique on future apps will be exceedingly simple. And the time saved by gulp & browsersync during the build out will be tangible.
