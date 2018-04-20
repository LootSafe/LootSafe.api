# LootSafe.api

# Prerequisites 

### Ganache CLI
Ganache testrpc is required, install it globally using the following
`npm i -g ganache-cli`

### Mongo
Mongodb is also required, install instructions vary between systems.

### NodeJS and NPM
NodeJS is also required, install instructions vary between systems.

# Running

Install depenedancies 
```
git submodule update --init --recursive
npm i
```
Start Ganache
```
npm run testrpc
```
Start LootSafe API
```
npm run full
```

(optional)
Populate API with test data
```
npm run populate
```


Generate hash and add to config (this will allow you to authenticate to requests)
```
npm run init
npm run generate
```

# Verbose Running

Run mongodb

```
mongod
```

Generate the hash and config

```
npm run init
npm run generate
```

Start up Ganache & the API. I reccomend the latest version of ganache, the version specified in the repo may crash when populating due to too many calls at once.

```
npm i 
npm run testrpc
npm run full
```

While the API is running run

```
npm run populate
```

Test data should be loaded and server is now running!

Make sure that the generated config.js is also configurated correctly for authentication,url & url prefix.
