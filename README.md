# Dash bookmarklet

## About

A javascript version of the [Dash gem](https://github.com/shift81/dash) that lets you generate passwords on the fly from your browser.

## Install

Just drag the bookmarklet (on the last tab) to your browser's bookmarks bar. 

## What do I do?

Then click on it whenever you need dash to get you a bookmark. 

## Bonus!

You can run your own version of this bookmarklet on Github. Just fork the repo and setup your own
Github Pages branch. Github has [some good info on this](http://pages.github.com/).

There's just one tricky part. The bookmarklet will automatically use my demo site for dash. If you want it to point to your install of dash, you'll need to edit some code. Figure out your Github pages URL for your fork. Then open up public/index.html. Near the bottom of the file you'll find the spot where your URL should go.

Replace

     "http://shift81.github.com/dash-bookmarklet?"

with

     "http://myname.github.com/dash-bookmarklet?"

Don't forget the quotes and the question mark.

## What's next?

I've only tested this on Google Chrome using OSX Lion and OSX Snow Leopard. Got it working in a different environment? Let me know!

## Contributing

Clone the repository, build some features and then submit a pull request.

