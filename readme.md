# Nextjs handson : PWA
Along with SSR 
Nextjs provide default routing, page setup and layouting

## mainfest.json
## icons
## meta tags
## service workers
- sw-precache-webpack-plugin : webpack plugin

# setup
- nvm use 14
- npm i
- npm start or
- npm run start-next

# Deployment to "heroku"

URL: https://nextjs-pwa.herokuapp.com/ 


- login to heroku
- crete new app
- heroku cli steps
If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Create a new Git repository
Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a nextjs-pwa
Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master

You can now change your main deploy branch from "master" to "main" for both manual and automatic deploys, please follow the instructions here.
Existing Git repository
For existing repositories, simply add the heroku remote

$ heroku git:remote -a nextjs-pwa
we can deploy nodejs, static stie, and many other using "heroku"
