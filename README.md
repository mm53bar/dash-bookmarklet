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

Now for the tricky part. The bookmarklet will automatically use my demo site for dash. If you want it to point to your install of dash, you'll need to edit some code. Grab the URL for your copy of dash on Heroku. Near the bottom of public/index.html you'll find the spot where your URL should go.

Replace

     "http://dash.heroku.com?"

with

     "http://myappname.heroku.com?"

Don't forget the quotes and the question mark.

## What's next?

I've only tested this on Google Chrome using OSX Lion and OSX Snow Leopard. Got it working in a different environment? Let me know!

## Contributing

Clone the repository, build some features and then submit a pull request.

