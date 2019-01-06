# LocalProjectLocker
Simple and convenient password keeper from your projects

## What u need?

+ Node.js > v8.0.0
+ NPM
+ **running** MongoDB

## How to install 

At first clone that repository using 

`$ git clone`

try to do it without `sudo` - it's more easier to use in future

Next step u have to install node_modules

`$ npm install`

After start, please, check ur **MongoDB is running on port:27017**

Now we are ready to start:

`$ npm start`

After that command *pm2* demonize that app, if u need to stop just write it:

`$ npm stop`

Also, u can run it in nodemon with using

`$ npm test`

for exit nodemon use `Ctrl(Command) + C`

When app is running open `localhost:3000` - you will find it

## More info

By default app using `port:3000`, if you wnat to change u can do it in `/bin/www`

I will glad to see your commits if u got an idea how to do it better

Enjoy :)