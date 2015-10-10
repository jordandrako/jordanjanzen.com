<?php
// Local server settings

// Local Database
define('DB_NAME', 'wordpress');
define('DB_USER', 'jordan');
define('DB_PASSWORD', '1234');
define('DB_HOST', 'localhost');

// Overwrites the database to save keep editing the DB
define('WP_HOME','http://localhost/efl');
define('WP_SITEURL','http://localhost/efl');

// Turn on debug for local environment
define('WP_DEBUG', true);
