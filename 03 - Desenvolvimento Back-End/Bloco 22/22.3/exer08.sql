USE Hr;

ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);

ALTER TABLE regions CHANGE COLUMN region_name region VARCHAR(25);
