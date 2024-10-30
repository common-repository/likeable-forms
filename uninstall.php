<?php
        if (! defined('WP_UNINSTALL_PLUGIN')) {
        exit;
        }

        // Uninstallation actions here

        global $wpdb;
        $lffes_table_to_delete = $wpdb->prefix . 'likeable_forms';
        $lffes_run_ext_uninstall = $wpdb->query( "DROP TABLE IF EXISTS $lffes_table_to_delete" );

        $lffes_table_to_delete = $wpdb->prefix . 'likeable_forms_keys';
        $lffes_run_ext_uninstall = $wpdb->query( "DROP TABLE IF EXISTS $lffes_table_to_delete" );

        $lffes_table_to_delete = $wpdb->prefix . 'likeable_forms_licenses';
        $lffes_run_ext_uninstall = $wpdb->query( "DROP TABLE IF EXISTS $lffes_table_to_delete" );

        $lffes_table_to_delete = $wpdb->prefix . 'likeable_forms_notifications';
        $lffes_run_ext_uninstall = $wpdb->query( "DROP TABLE IF EXISTS $lffes_table_to_delete" );

        $lffes_table_to_delete = $wpdb->prefix . 'likeable_forms_submissions';
        $lffes_run_ext_uninstall = $wpdb->query( "DROP TABLE IF EXISTS $lffes_table_to_delete" );

        $lffes_table_to_delete = $wpdb->prefix . 'likeable_forms_oauth';
        $lffes_run_ext_uninstall = $wpdb->query( "DROP TABLE IF EXISTS $lffes_table_to_delete" );


        $lffes_upload_dir = wp_upload_dir();
        $lffes_user_dirname = $lffes_upload_dir['basedir'].'/'.'likeable-forms';
        require_once  ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
        require_once  ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';
        $fileSystemDirect = new WP_Filesystem_Direct(false);
        $fileSystemDirect->rmdir($lffes_user_dirname, true);


        delete_site_option( 'lffes_db_version' );
