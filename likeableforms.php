<?php

/**
 * Plugin Name:       Likeable Forms
 * Plugin URI:        https://www.likeableforms.com
 * Description:       Create advanced contact forms with easy-to-use features like drag and drop and advanced features like conditional logic.
 * Version:           1.0.5
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Likeable Forms
 * License:           GPL v3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       likeable-forms-plugin
 * Domain Path:       /languages
 **/




/*
Copyright 2024 Likeable Forms

Likeable Forms is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.

Likeable Forms is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Likeable Forms.  If not, see <https://www.gnu.org/licenses/>.
*/




if ( ! defined( 'ABSPATH' ) ) {
    die();
}





// Plugin version
define('LFFES_VERSION', '1.0.5');
        




include plugin_dir_path( __FILE__ ) . 'php/lf-admin.php';    