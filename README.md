<<<<<<< HEAD
[![Waffle.io - Columns and their card count](https://badge.waffle.io/BootcampersCollective/bc-freestyle-api.svg?columns=all)](http://waffle.io/BootcampersCollective/bc-freestyle-api)

# Freestyle Hackathon: API
Repository for the Freestyle Hackathon Food Tracker website.

## Technologies Used:
* NodeJS
* ExpressJS
* Passport

## Contribute
* To contribute to this part of the Freestyle API contact Charlie or Yukio on the BootcampersCollective Slack Channel.  

* Once you have been added to the project, clone this repo to your local machine.

  * git clone


* Next you will need to install the dependencies.

  * yarn  


* Finally, to begin working on a particular issue, you'll need to branch off of the development branch, write the code to solve the issue, then submit a PR into the development branch. You should use the naming convention [issue-number]-[page]-[quick description].  

  * git checkout -b [new branch name]


* Once you have finished building a feature, you will need to submit a PR to the development branch and add Yukio Yamamoto, Charlie Beck, or Alvaro Gomez to review.  

  * git push origin [branch name]
  * On code page of repo, you can submit PR


* Please check the issues page at [waffle.io]("https://waffle.io/BootcampersCollective/bc-freestyle-api")

## Routes:
coming soon

To install data.json and fakeUsers.json in your local mongo database do the following.


In your terminal initialize `mongod`, open a new tab and type

```
mongoimport --db <nameOfDB> --collection <nameOfCollection> --drop --file path/to/file/file.json
```

To see if it worked go to the MongoShell by typing `mongo` then `show dbs`, the shell will display a list of all the dbs that are running locally.

To use the newly created one type `use <nameOfDB>`, now you should be able to interact with the database.

To take a look at all the records type

```
db.<nameOfCollectio>.find().pretty()
```

This will show all the records inside that collection
=======
[![Waffle.io - Columns and their card count](https://badge.waffle.io/BootcampersCollective/bc-freestyle-api.png?columns=all)](https://waffle.io/BootcampersCollective/bc-freestyle-api?utm_source=badge)
# bc-freestyle-api
>>>>>>> origin
