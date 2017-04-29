BEGIN TRANSACTION;
CREATE TABLE `employee` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`firstName`	TEXT,
	`lastName`	INTEGER,
	`mobile`	INTEGER UNIQUE,
	`email`	TEXT UNIQUE
);
INSERT INTO `employee` VALUES (1,'Foo','Bar',9542233872,'foobar@email.com');
COMMIT;
