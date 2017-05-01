# purenoderestservice

Purenoderestservice is a sample rest api developed under pure node.js enviornment. It is using offline-storage like SQLite database.

# Sample REST API usage (localhost) - endpoints
    - http://localhost:9000/employees GET (fetch/read/query)
    - http://localhost:9000/employees/1 GET (fetch/read/query)
    - http://localhost:9000/employees POST (insert)
    - http://localhost:9000/employees PUT (update)
    - http://localhost:9000/employees DELETE (delete)

### Tech

purenoderestservice uses a open source projects to work properly:
* [node.js] - evented I/O for the backend
* [sqlite] - offline storage - npm package url https://www.npmjs.com/package/sqlite3

And of course purenoderestservice itself is open source with a [public repository][https://github.com/praveenkumarv/purenoderestservice]
 on GitHub.

### SQLite table information
BEGIN TRANSACTION;
CREATE TABLE `employee` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`firstName`	TEXT,
	`lastName`	INTEGER,
	`mobile`	INTEGER UNIQUE,
	`email`	TEXT UNIQUE
);
INSERT INTO `employee` VALUES (1,'Foo','Bar',1234567890,'foobar@email.com');
COMMIT;

### Installation

Purenoderestservice requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd purenoderestservice
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ npm run predeploy
$ NODE_ENV=production node app
```

License
----
MIT

**Free Software, Hell Yeah!**
