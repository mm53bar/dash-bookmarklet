# Dash bookmarklet

## About

A javascript version of the [Dash gem](https://github.com/shift81/dash) that lets you generate passwords on the fly from your browser.

## Install

Just drag the bookmarklet (on the last tab) to your browser's bookmarks bar. 

## What do I do?

Then click on it whenever you need dash to get you a bookmark. 

## Bonus!

You can run your own version of this bookmarklet on Heroku. Install the Heroku gem first.

     $ gem install heroku

Then clone the repository and add heroku as a remote. 

     $ git clone git://github.com/Shift81/dash-bookmarklet.git
     $ cd dash-bookmarklet
     $ heroku create -s bamboo

Then push the repository to heroku and open it in your browser.

     $ git push heroku master
     $ heroku open

## What's next?

I've only tested this on Google Chrome using OSX Lion and OSX Snow Leopard. Got it working in a different environment? Let me know!

## Contributing

Clone the repository, build some features and then submit a pull request.

