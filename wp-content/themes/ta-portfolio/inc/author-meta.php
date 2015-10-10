<?php
/**
 * Get Author Meta
 *
 * @package TA Portfolio
 */

function ta_modify_contact_methods( $profile_fields ) {

	// Add new fields
	$profile_fields['twitter'] = __( 'Twitter Username', 'ta-portfolio' );
	$profile_fields['facebook'] = __( 'Facebook URL', 'ta-portfolio' );
	$profile_fields['gplus'] = __( 'Google+ URL', 'ta-portfolio' );

	return $profile_fields;
}
add_filter('user_contactmethods', 'ta_modify_contact_methods');