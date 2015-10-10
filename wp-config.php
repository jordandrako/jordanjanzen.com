<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
// Include local configuration
if (file_exists(dirname(__FILE__) . '/local-config.php')) {
	include(dirname(__FILE__) . '/local-config.php');
}

// Global DB config
if (!defined('DB_NAME')) {
	define('DB_NAME', 'jordanjanzen');
}
if (!defined('DB_USER')) {
	define('DB_USER', 'jordan');
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', '1234');
}
if (!defined('DB_HOST')) {
	define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'z-<a(`oMbtfDiNaXU6}J9Fv1Q+2Btd~Ogu$%~<_k5&Ea%|UR;o/A6xEYq$UdER5P');
define('SECURE_AUTH_KEY',  '>BC}O-s5><UKk(.$k$HlgKvJ%jL9245)Y+k9s8vl|2pDs<S7:dCxAD9@w `G&cc#');
define('LOGGED_IN_KEY',    '(<39xr.w^=p/D8xY>M([=LzQ)z6`=$%/OwxK<u}jzN6ICY[n@bjEH7}`xBi`DIwb');
define('NONCE_KEY',        'y]qRwPl[2!} js]o{0 vkeRE(6|/SYJL|dK -9VSp^y:Ac-shn($4qX!?rr B/ZQ');
define('AUTH_SALT',        '0?3%F9jI;eLx2MZhMY?H`A2DL{R6,-m|a@A6}X8+&PUuJpY~wHpm~:5|_IP~JyhZ');
define('SECURE_AUTH_SALT', 'S4G|^Y(1bSx()<s+W*LsepU-y+D$cEt~+QhfiR;-/GyfS51eVo{Xt:SQz@1nhNXS');
define('LOGGED_IN_SALT',   '02d:i|)guoF%{?$uY!V1k=Fpd.N+3k-8<=Y;>~eq*$fqoZ!,);1j#ZB:S48+[k0e');
define('NONCE_SALT',       '+q6 >+zTpIxB+PN)FN%LU@Q4NQWL,|>o#j4iUYzOv6|a,QX{nvx|}z>@y1@;D$ Q');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', false);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
