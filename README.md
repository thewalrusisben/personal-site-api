### What is this?

This is the API for my personal projects, and generally a sandbox for me to learn and test out new ideas. It's about as lightweight as can be, utilizing only Restify, Sequelize, and Mysql packages, at time of writing this Readme. 

### How do I set this up locally?

1. Set up a local Mysql database, and configure the following environment variables in your `.bash_profile`:

```
+ DB - Name of your database
+ DB_USER - Your database user
+ DB_PW - Your user's password
+ DB_HOST - localhost
```

2. `npm install`

3. `npm start`

### What else should I know?

This early version of the API only has two directories: your controllers and your models. You can find some guidance on which fields should be in your tables by taking a look through the models. At this point, there's no functionality in the models beyond the model definitions. All logic and processing happens at this stage in the controllers. 
