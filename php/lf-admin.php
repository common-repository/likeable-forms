<?php





        if ( ! defined( 'ABSPATH' ) ) {
            die();
        }




        // Adds top level menu item
        add_action('admin_menu', 'lffes_plugin_settings');
        function lffes_plugin_settings()
        {
            $lf_admin_icon = plugin_dir_url(__DIR__) . 'assets/likeable-forms-admin-icon.png';
            add_menu_page('Likeable Forms', 'Likeable Forms', 'manage_options', 'likeable-forms', 'lffes_welcome_to_likeable', $lf_admin_icon, 80);
        }


        


        // HTML for fields editor
        function lffes_welcome_to_likeable()
        {
            include plugin_dir_path( __DIR__ ) . 'inc/lf-editor.php';
        }
            





        // Creates custom tables and columns on activation -- likeable_forms (1)
        global $lffes_db_version;
        $lffes_db_version = '1.0';
        function lffes_install()
        {
            global $wpdb;
            global $lffes_db_version;
            $table_name = $wpdb->prefix . 'likeable_forms';
            $charset_collate = $wpdb->get_charset_collate();
            $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            fields text NOT NULL,
            title tinytext NOT NULL,
            form_description tinytext NOT NULL,
            PRIMARY KEY  (id)
            ) $charset_collate;";
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
            add_option('lffes_db_version', $lffes_db_version);

            // Updates Database Structure When Necessary
            $installed_ver = get_option( "lffes_db_version" );
            if ( $installed_ver != $lffes_db_version ) {
                $table_name = $wpdb->prefix . 'likeable_forms';
                $charset_collate = $wpdb->get_charset_collate();
                $sql = "CREATE TABLE $table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
                fields text NOT NULL,
                title tinytext NOT NULL,
                form_description tinytext NOT NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";
                require_once ABSPATH . 'wp-admin/includes/upgrade.php';
                dbDelta( $sql );
                update_option( "lffes_db_version", $lffes_db_version );
            }
        }





        // Automatically Adds Form Data On Activation -- likeable_forms (2)
        function lffes_install_data()
        {
            global $wpdb;
            $lf_on_activation_fields = 'NULL';
            $lf_on_activation_title = 'NULL';
            $lf_on_activation_description = 'NULL';
            $table_name = $wpdb->prefix . 'likeable_forms';
            $wpdb->insert(
                $table_name,
                array(
                    'time' => current_time('mysql'),
                    'fields' => $lf_on_activation_fields,
                    'title' => $lf_on_activation_title,
                    'form_description' => $lf_on_activation_description,
                )
            );
        }
        register_activation_hook(__FILE__, 'lffes_install');
        register_activation_hook(__FILE__, 'lffes_install_data');





        // Creates custom tables and columns on activation -- likeable_forms_submissions (1)
        function lffes_install_submissions()
        {
            global $wpdb;
            global $lffes_db_version;
            $table_name = $wpdb->prefix . 'likeable_forms_submissions';
            $charset_collate = $wpdb->get_charset_collate();
            $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            form_id text NOT NULL,
            submissions text NOT NULL,
            attachment_urls text NOT NULL,
            PRIMARY KEY  (id)
            ) $charset_collate;";
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
            add_option('lffes_db_version', $lffes_db_version);

            // Updates Database Structure When Necessary
            $installed_ver = get_option( "lffes_db_version" );
            if ( $installed_ver != $lffes_db_version ) {
                $table_name = $wpdb->prefix . 'likeable_forms_submissions';
                $charset_collate = $wpdb->get_charset_collate();
                $sql = "CREATE TABLE $table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
                form_id text NOT NULL,
                submissions text NOT NULL,
                attachment_urls text NOT NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";
                require_once ABSPATH . 'wp-admin/includes/upgrade.php';
                dbDelta( $sql );
                update_option( "lffes_db_version", $lffes_db_version );
            }
        }





        // Automatically Adds Submission Data On Activation -- likeable_forms_submissions (2)
        function lffes_install_data_submissions()
        {
            global $wpdb;
            $lf_on_activation_form_id = 'NULL';
            $lf_on_activation_submissions = 'NULL';
            $lf_on_activation_attachment_urls = 'NULL';
            $table_name = $wpdb->prefix . 'likeable_forms_submissions';
            $wpdb->insert(
                $table_name,
                array(
                    'time' => current_time('mysql'),
                    'form_id' => $lf_on_activation_form_id,
                    'submissions' => $lf_on_activation_submissions,
                    'attachement_urls' => $lf_on_activation_attachment_urls
                )
            );
        }
        register_activation_hook(__FILE__, 'lffes_install_submissions');
        register_activation_hook(__FILE__, 'lffes_install_data_submissions');





        // Creates custom tables and columns on activation -- likeable_forms_notifications (1)
        function lffes_install_notifications()
        {
            global $wpdb;
            global $lffes_db_version;
            $table_name = $wpdb->prefix . 'likeable_forms_notifications';
            $charset_collate = $wpdb->get_charset_collate();
            $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            form_id text NOT NULL,
            notifications text NOT NULL,
            PRIMARY KEY  (id)
            ) $charset_collate;";
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
            add_option('lffes_db_version', $lffes_db_version);

            // Updates Database Structure When Necessary
            $installed_ver = get_option( "lffes_db_version" );
            if ( $installed_ver != $lffes_db_version ) {
                $table_name = $wpdb->prefix . 'likeable_forms_notifications';
                $charset_collate = $wpdb->get_charset_collate();
                $sql = "CREATE TABLE $table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
                form_id text NOT NULL,
                notifications text NOT NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";
                require_once ABSPATH . 'wp-admin/includes/upgrade.php';
                dbDelta( $sql );
                update_option( "lffes_db_version", $lffes_db_version );
            }
        }





        // Automatically Adds Notifications Data On Activation -- likeable_forms_notifications (2)
        function lffes_install_data_notifications()
        {
            global $wpdb;
            $lf_on_activation_form_id = 'NULL';
            $lf_on_activation_notifications = 'NULL';
            $table_name = $wpdb->prefix . 'likeable_forms_notifications';
            $wpdb->insert(
                $table_name,
                array(
                    'time' => current_time('mysql'),
                    'form_id' => $lf_on_activation_form_id,
                    'notifications' => $lf_on_activation_notifications
                )
            );
        }
        register_activation_hook(__FILE__, 'lffes_install_notifications');
        register_activation_hook(__FILE__, 'lffes_install_data_notifications');





        // Creates custom tables and columns on activation -- likeable_forms_licenses (1)
        function lffes_install_licenses()
        {
            global $wpdb;
            global $lffes_db_version;
            $table_name = $wpdb->prefix . 'likeable_forms_licenses';
            $charset_collate = $wpdb->get_charset_collate();
            $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            lf_license text NOT NULL,
            lf_extension text NOT NULL,
            PRIMARY KEY  (id)
            ) $charset_collate;";
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
            add_option('lffes_db_version', $lffes_db_version);

            // Updates Database Structure When Necessary
            $installed_ver = get_option( "lffes_db_version" );
            if ( $installed_ver != $lffes_db_version ) {
                $table_name = $wpdb->prefix . 'likeable_forms_licenses';
                $charset_collate = $wpdb->get_charset_collate();
                $sql = "CREATE TABLE $table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
                lf_license text NOT NULL,
                lf_extension text NOT NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";
                require_once ABSPATH . 'wp-admin/includes/upgrade.php';
                dbDelta( $sql );
                update_option( "lffes_db_version", $lffes_db_version );
            }
        }





        // Automatically Adds License Data On Activation -- likeable_forms_licenses (2)
        function lffes_install_data_licenses()
        {
            global $wpdb;
            $lf_on_activation_license = 'NULL';
            $lf_on_activation_extension = 'NULL';
            $table_name = $wpdb->prefix . 'likeable_forms_licenses';
            $wpdb->insert(
                $table_name,
                array(
                    'time' => current_time('mysql'),
                    'lf_license' => $lf_on_activation_license,
                    'lf_extension' => $lf_on_activation_extension,
                )
            );
        }
        register_activation_hook(__FILE__, 'lffes_install_licenses');
        register_activation_hook(__FILE__, 'lffes_install_data_licenses');





        // Creates custom tables and columns on activation -- likeable_forms_keys (1)
        function lffes_install_keys()
        {
            global $wpdb;
            global $lffes_db_version;
            $table_name = $wpdb->prefix . 'likeable_forms_keys';
            $charset_collate = $wpdb->get_charset_collate();
            $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            lf_key text NOT NULL,
            lf_extension text NOT NULL,
            PRIMARY KEY  (id)
            ) $charset_collate;";
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
            add_option('lffes_db_version', $lffes_db_version);

            // Updates Database Structure When Necessary
            $installed_ver = get_option( "lffes_db_version" );
            if ( $installed_ver != $lffes_db_version ) {
                $table_name = $wpdb->prefix . 'likeable_forms_keys';
                $charset_collate = $wpdb->get_charset_collate();
                $sql = "CREATE TABLE $table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
                lf_key text NOT NULL,
                lf_extension text NOT NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";
                require_once ABSPATH . 'wp-admin/includes/upgrade.php';
                dbDelta( $sql );
                update_option( "lffes_db_version", $lffes_db_version );
            }
        }





        // Automatically Adds Key Data On Activation -- likeable_forms_keys (2)
        function lffes_install_data_keys()
        {
            global $wpdb;
            $lf_on_activation_key = 'NULL';
            $lf_on_activation_extension = 'NULL';
            $table_name = $wpdb->prefix . 'likeable_forms_keys';
            $wpdb->insert(
                $table_name,
                array(
                    'time' => current_time('mysql'),
                    'lf_key' => $lf_on_activation_key,
                    'lf_extension' => $lf_on_activation_extension,
                )
            );
        }
        register_activation_hook(__FILE__, 'lffes_install_keys');
        register_activation_hook(__FILE__, 'lffes_install_data_keys');





        // Creates custom tables and columns on activation -- likeable_forms_oauth (1)
        function lffes_install_oauth()
        {
            global $wpdb;
            global $lffes_db_version;
            $table_name = $wpdb->prefix . 'likeable_forms_oauth';
            $charset_collate = $wpdb->get_charset_collate();
            $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            lf_oauth text NOT NULL,
            lf_extension text NOT NULL,
            PRIMARY KEY  (id)
            ) $charset_collate;";
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
            add_option('lffes_db_version', $lffes_db_version);

            // Updates Database Structure When Necessary
            $installed_ver = get_option( "lffes_db_version" );
            if ( $installed_ver != $lffes_db_version ) {
                $table_name = $wpdb->prefix . 'likeable_forms_oauth';
                $charset_collate = $wpdb->get_charset_collate();
                $sql = "CREATE TABLE $table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
                lf_oauth text NOT NULL,
                lf_extension text NOT NULL,
                PRIMARY KEY  (id)
                ) $charset_collate;";
                require_once ABSPATH . 'wp-admin/includes/upgrade.php';
                dbDelta( $sql );
                update_option( "lffes_db_version", $lffes_db_version );
            }
        }





        // Automatically Adds Key Data On Activation -- likeable_forms_oauth (2)
        function lffes_install_data_oauth()
        {
            global $wpdb;
            $lf_on_activation_key = 'NULL';
            $lf_on_activation_extension = 'NULL';
            $table_name = $wpdb->prefix . 'likeable_forms_oauth';
            $wpdb->insert(
                $table_name,
                array(
                    'time' => current_time('mysql'),
                    'lf_oauth' => $lf_on_activation_key,
                    'lf_extension' => $lf_on_activation_extension,
                )
            );
        }
        register_activation_hook(__FILE__, 'lffes_install_oauth');
        register_activation_hook(__FILE__, 'lffes_install_data_oauth');





        // Check Global Database Version -- Call Database Updater When Necessary
        function lffes_update_db_check() {
            global $wpdb;
            global $lffes_db_version;
            if ( get_site_option( 'lffes_db_version' ) != $lffes_db_version  ) {
                lffes_install(); // likeable_forms table
                lffes_install_submissions(); // likeable_forms_submissions table
                lffes_install_notifications(); // likeable_forms_notification table
                lffes_install_licenses(); // likeable_forms_licenses table
                lffes_install_keys(); // likeable_forms_keys table
                lffes_install_oauth(); // likeable_forms_oauth table
                

               // Deletes Specific Columns When Necessary
                $table_name = $wpdb->prefix . ''; // table name string
                $column_name = ''; // column name string
                $drop_ddl = ( "ALTER TABLE $table_name DROP COLUMN $column_name" ); // statement to drop column
                foreach ( $wpdb->get_col( "DESC $table_name", 0 ) as $column ) {
                    if ( $column === $column_name ) {
                        $wpdb->query( $drop_ddl );
                    }
                }


            }
        }
        add_action( 'plugins_loaded', 'lffes_update_db_check' );





        // Enqueues scripts and styles for field editor
        function lffes_editor_enqueue_scripts_styles( $hook ) {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            if ( 'toplevel_page_likeable-forms' != $hook ) {
                return;
            } 
            wp_enqueue_style('lf_field_editor_css', plugin_dir_url(__DIR__) . 'css/lf-field-editor.css', array(), LFFES_VERSION, 'all');
            wp_enqueue_script('lf_field_editor_js', plugin_dir_url(__DIR__) . 'js/lf-field-editor.js', array(), LFFES_VERSION);


            if ( ! function_exists( 'get_plugins' ) ) {
                require_once ABSPATH . 'wp-admin/includes/plugin.php';
            }
            

            $lf_active_list = get_option('active_plugins');
            $lf_plugin_names_array = array();
            $lf_all_plugins = get_plugins();
            foreach($lf_all_plugins as $key => $object) {
                $lf_plugin_is_active = ( in_array( $key, $lf_active_list ) ) ? true : false;
                $lf_plugin_data_array = array(
                    'path' => $key,
                    'name'    => $object['Name'],
                    'version'  => $object['Version'],
                    'description'  => $object['Description'],
                    'documentation'  => $object['PluginURI'],
                    'active'  => $lf_plugin_is_active,
                );
                array_push($lf_plugin_names_array, $lf_plugin_data_array);
            }    


            $lf_site_icon_id = get_option( 'site_icon' );
            $lf_favicon_url = wp_get_attachment_image_url( $lf_site_icon_id );


            $lf_media_urls_array = array();
            $lf_attachments = get_posts( array(
                'post_type' => 'attachment',
                'posts_per_page' => -1,
            ) );
            foreach ( $lf_attachments as $att ) {
                $lf_media_library_url = array( 'media_library_urls' => wp_get_attachment_image_src( $att->ID, 'medium' ) );
                array_push($lf_media_urls_array, $lf_media_library_url);
            }


            global $wpdb;
            $lf_prefix = $wpdb->prefix;

            $lf_content_url = content_url();


            $translation_array = array(
                'isAjax' => 'bool',
                'lfNonce' => wp_create_nonce('lf_field_editor_js_nonce'),
                'plugins' => $lf_plugin_names_array,
                'wpPrefix' => $lf_prefix,
                'lfPluginUrl' => plugin_dir_url(__DIR__),
                'lfIcon' => $lf_favicon_url,
                'lfMediaUrls' => $lf_media_urls_array,
                'contentUrl' => $lf_content_url,
            );
            wp_localize_script( 'lf_field_editor_js', 'lfEditorData', $translation_array );
        }
        add_action('admin_enqueue_scripts', 'lffes_editor_enqueue_scripts_styles');





        // Registers Likeable Forms Shortcode 
        function lffes_register_shortcode_plus_attributes( $atts ) {
            global $wpdb;
            $lf_prefix = $wpdb->prefix;
            $lf_attributes = shortcode_atts( array(
                'id' => '0',
                'ajax' => '',
            ), $atts );
            $lf_current_form_id = $lf_attributes['id'];

            $lf_form_data = $wpdb->get_results($wpdb->prepare('SELECT * FROM ' . $wpdb->prefix . 'likeable_forms WHERE id = %d',
            $lf_current_form_id));
            if( $lf_form_data ){


                $lf_fields_data = stripslashes($lf_form_data[0]->fields);
                $lf_form_title = $lf_form_data[0]->title;
                $lf_form_description = $lf_form_data[0]->form_description;

                $lf_notifications_json = stripslashes($wpdb->get_var($wpdb->prepare('SELECT notifications FROM ' . $wpdb->prefix . 'likeable_forms_notifications WHERE form_id = %d',
                $lf_current_form_id)));

                $lf_site_icon_id = get_option( 'site_icon' );
                $lf_favicon_url = wp_get_attachment_image_url( $lf_site_icon_id );

                wp_enqueue_style('lf_field_editor_css', plugin_dir_url(__DIR__) . 'css/lf-frontend.css', array(), LFFES_VERSION, 'all');
                wp_enqueue_script( 'lf_field_creator_js', plugin_dir_url(__DIR__) . 'js/creator-js.js', array(), LFFES_VERSION, true );
                $lf_field_editor_data_array = array(
                    'isAjax' => 'bool',
                    'formID' => $lf_current_form_id,
                    'lfJSON' => $lf_fields_data,
                    'lfTitle' => $lf_form_title,
                    'lfDescription' => $lf_form_description,
                    'lfIcon' => $lf_favicon_url,
                    'lfPluginUrl' => plugin_dir_url(__DIR__),
                    'lfNotificationsJSON' => $lf_notifications_json,
                    'lfNonce' => wp_create_nonce('lf_field_creator_js_nonce'),
                    'ajax_url' => admin_url( 'admin-ajax.php' ),
                    'wpPrefix' => $lf_prefix,
                );
                wp_localize_script( 'lf_field_creator_js', 'lfCreatorData', $lf_field_editor_data_array );

                // Trigger Callback Functions + Re-Organize Variables
                ob_start();
                $lfFormId = $lf_current_form_id;
                $lfFormTitle = $lf_form_title;
                do_action( 'lffes_get_extension_data', $lfFormId, $lfFormTitle );
                $lfExtensionData = ob_get_contents();
                ob_end_clean();

                $lf_form = '<div id="lf_Form_Global_Container_' . $lf_current_form_id . '" class="lf-form-container"></div>';
                $lf_form .= $lfExtensionData;
                return $lf_form;
            }

        }
        add_shortcode( 'likeableforms', 'lffes_register_shortcode_plus_attributes' );





        // Save Form Submission (Validate & Sanitize + Handle Form Uploads + Save)
        add_action('wp_ajax_lffes_save_form_submission', 'lffes_save_form_submission');
        add_action('wp_ajax_nopriv_lffes_save_form_submission', 'lffes_save_form_submission');
        function lffes_save_form_submission() {
            check_ajax_referer('lf_field_creator_js_nonce');
            global $wpdb;


            // Validates Form Data
            include plugin_dir_path( __DIR__ ) . 'inc/lf-validate.php';


            // Processes Form Uploads
            include plugin_dir_path( __DIR__ ) . 'inc/lf-uploads.php';

            
            // Save Submission
            if( !empty($lf_validated_sanitized_form_data) && empty($lf_form_errors) && $lf_form_id_valid === true ) {
                $lf_query = $wpdb->insert(
                    $wpdb->prefix . 'likeable_forms_submissions', 
                    array( 
                        'time' => current_time( 'mysql' ), 
                        'form_id' => $lf_form_id, 
                        'submissions' => addslashes(wp_json_encode($lf_validated_sanitized_form_data)), 
                        'attachment_urls' => $lf_attachment_data_to_send,
                        ) 
                    );
                if( $lf_query ){
                    $lf_response = array(
                        'error_found' => false,
                        'error_message' => "No Error(s) Detected.",
                        'success_response' => 'Your form submission was successfully sent.',
                        'attachment_urls' => $lf_attachment_data_notifications,
                    );
                    echo wp_json_encode($lf_response);
                } else {
                    $lf_response = array(
                        'error_found' => true,
                        'error_message' => "There was a problem saving your submission.",
                        'attachment_urls' => $lf_attachment_data_notifications,
                    );
                    echo wp_json_encode($lf_response);
                }


                // Share Sanitized Form Data with Extensions/Trigger Callback Functions + Re-Organize Variables
                $lfFormData = $lf_validated_sanitized_form_data;
                $lfFormTitle = $lf_form_title;
                $lfFormId = $lf_form_id;
                $lfFormUploads = $lf_attachment_data_json;
                do_action( 'lffes_get_submission_data', $lfFormData, $lfFormTitle, $lfFormId, $lfFormUploads );
            }
    

            wp_die();
        }





        // Triggered from ajax save in LF Editor in JS for new form, grabs data from form  ---------- saves data to database (New Form)
        add_action('wp_ajax_lffes_save_editor_form_data', 'lffes_save_editor_form_data');
        function lffes_save_editor_form_data()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_data_to_send = map_deep( $_POST['lfdatatosend'], 'sanitize_text_field' );
            $lf_existing_form_title = sanitize_text_field($_POST['lfexistingformtitle']);
            $lf_updated_form_title = sanitize_text_field($_POST['lfupdatedformtitle']);
            $lf_updated_form_description = sanitize_text_field($_POST['lfformdescription']);
            $wpdb->insert(
                $wpdb->prefix . 'likeable_forms', 
                array(
                    'time' => current_time( 'mysql' ),
                    'fields' => $lf_data_to_send,
                    'title' => $lf_updated_form_title, 
                    'form_description' => $lf_updated_form_description,
                    ) 
                ); 
            $lf_form_id = $wpdb->insert_id;
            echo wp_json_encode(array($lf_updated_form_title, $lf_form_id));
            wp_die();
        }
        




        // Triggered from ajax save in JS grabs data from form, saves to database ---------- saves/updates data to database for specific form (updates existing form)
        add_action('wp_ajax_lffes_update_editor_form_data', 'lffes_update_editor_form_data');
        function lffes_update_editor_form_data()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_data_to_send = map_deep( $_POST['lfdatatosend'], 'sanitize_text_field' );
            $lf_existing_form_title = sanitize_text_field($_POST['lfexistingformtitle']);
            $lf_updated_form_title = sanitize_text_field($_POST['lfupdatedformtitle']);
            $lf_existing_form_id = intval($_POST['lfexistingformid']);
            $lf_updated_form_description = sanitize_text_field($_POST['lfformdescription']);
            $wpdb->update(
                $wpdb->prefix . 'likeable_forms', 
                array(
                    'id' => $lf_existing_form_id, 
                    'time' => current_time( 'mysql' ), 
                    'fields' => $lf_data_to_send, 
                    'title' => $lf_updated_form_title, 
                    'form_description' => $lf_updated_form_description,
                ), 
                array(
                    'title' => $lf_existing_form_title
                )
            );
            echo wp_json_encode(array($lf_updated_form_title, $lf_existing_form_id));
            wp_die();
        }





        // Triggered from ajax duplicate in LF Editor in JS for duplicating form, grabs data from form  ---------- saves data to database (Duplicates Form)
        add_action('wp_ajax_lffes_duplicate_editor_form_data', 'lffes_duplicate_editor_form_data');
        function lffes_duplicate_editor_form_data()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_data_to_send = map_deep( $_POST['lfdatatosend'], 'sanitize_text_field' );
            $lf_existing_form_title = sanitize_text_field($_POST['lfexistingformtitle']);
            $lf_updated_form_title = sanitize_text_field($_POST['lfupdatedformtitle']);
            $lf_form_description = sanitize_text_field($_POST['lfformdescription']);
            $wpdb->insert(
                $wpdb->prefix . 'likeable_forms', 
                array( 'time' => current_time( 'mysql' ), 
                'fields' => $lf_data_to_send, 
                'title' => $lf_updated_form_title,
                'form_description' => $lf_form_description,
                ) 
            ); 
            $lf_form_id = $wpdb->insert_id;
            echo wp_json_encode(array($lf_updated_form_title, $lf_form_id));
            wp_die();
        }





        // Triggered from form title dropdown ajax request in JS grabs data back for form, sends back to JS response ---------- sends back data from database for specific form to recreate fields (existing form)
        add_action('wp_ajax_lffes_create_editor_form_fields', 'lffes_create_editor_form_fields');
        function lffes_create_editor_form_fields()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_form_title = sanitize_text_field($_POST['lfformtitle']);
            $lf_fields_data = $wpdb->get_var($wpdb->prepare(' SELECT fields FROM ' . $wpdb->prefix . 'likeable_forms WHERE title = %s',
            $lf_form_title));
            $lf_data_to_send = map_deep( $lf_fields_data, 'sanitize_text_field' );
            echo wp_json_encode($lf_data_to_send);
            wp_die();
        }





        // Triggered from form delete button in JS, deletes row/form in table/db ---------- sends back form success response
        add_action('wp_ajax_lffes_delete_editor_form_data', 'lffes_delete_editor_form_data'); 
        function lffes_delete_editor_form_data()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;

            $lf_form_title = sanitize_text_field($_POST['lfformtitle']);
            $lf_form_id = intval($_POST['lfformid']);

            $table = $wpdb->prefix . 'likeable_forms';
            $wpdb->delete( $table, array( 'title' => $lf_form_title ) ); 

            $lf_notifications_table = $wpdb->prefix . 'likeable_forms_notifications';
            $wpdb->delete( $lf_notifications_table, array( 'form_id' => $lf_form_id ) ); 

            $lf_submissions_table = $wpdb->prefix . 'likeable_forms_submissions';
            $lf_data = $wpdb->get_row($wpdb->prepare('SELECT * FROM ' . $wpdb->prefix . 'likeable_forms_submissions WHERE form_id = %d', 
            $lf_form_id));
            foreach ($lf_data as $lf_datas) {
                $wpdb->delete( $lf_submissions_table, array( 'form_id' => $lf_datas ) );
            }

            echo wp_json_encode($lf_form_id);
            wp_die();
        }





        // Triggered from ajax LF Editor on load  ---------- Grabs all form titles and form Ids from database to populate choose a form dropdown in LF Editor
        add_action('wp_ajax_lffes_form_title_editor_dropdown', 'lffes_form_title_editor_dropdown');
        function lffes_form_title_editor_dropdown()
            {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            global $wpdb;
            $lf_form_titles_array = array();
            $lf_data = $wpdb->get_col($wpdb->prepare("SELECT title FROM ".$wpdb->prefix."likeable_forms"));
            foreach ($lf_data as $lf_datas) {
                $lf_form_title = array(
                    'title' => $lf_datas,
                );
                array_push($lf_form_titles_array, $lf_form_title);
            }
            echo wp_json_encode($lf_form_titles_array);
            wp_die();
        }





        // Triggered from form title dropdown ajax request in JS grabs form Id, sends back to JS response  ---------- sends back form Id from database for specific form to update shortcode
        add_action('wp_ajax_lffes_update_editor_shortcode_id', 'lffes_update_editor_shortcode_id'); 
        function lffes_update_editor_shortcode_id()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_form_title = sanitize_text_field($_POST['lfformtitle']);
            $lf_data = $wpdb->get_var($wpdb->prepare(' SELECT id FROM ' . $wpdb->prefix . 'likeable_forms WHERE title = %s',
            $lf_form_title));
            echo wp_json_encode($lf_data);
            wp_die();
        }





        // Triggered from submission modal click in JS  ---------- Grabs all form submissions to populate form submissions in submissions modal  (update after front end form work)
        add_action('wp_ajax_lffes_editor_form_submissions_modal', 'lffes_editor_form_submissions_modal');
        function lffes_editor_form_submissions_modal()
            {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_form_id = intval($_POST['lfformid']);
            $lf_form_submission_array = array();
            $lf_submission_data_array = array();
            $lf_file_array;
            $lf_multi_files_array = array();




            // Get Individual Submission/Entry Ids
            $lf_entry_ids = array();
            $lf_data_entry_id = $wpdb->get_col($wpdb->prepare('SELECT id FROM ' . $wpdb->prefix . 'likeable_forms_submissions WHERE form_id = %d ORDER BY id DESC',
            $lf_form_id));
            foreach ( $lf_data_entry_id as $lf_datas_entry_ids ) {
                $lf_submission_ids_array = array(
                    'id' => intval($lf_datas_entry_ids),
                );
                array_push($lf_entry_ids, $lf_submission_ids_array);
            }




            // Re-Sanitize Submissions Data
            global $wpdb;
            $lf_get_all_form_submissions_data = $wpdb->get_col($wpdb->prepare('SELECT submissions FROM ' . $wpdb->prefix . 'likeable_forms_submissions WHERE form_id = %d ORDER BY id DESC',
            $lf_form_id));


            

            $lf_encoded_all_submissions = json_encode($lf_get_all_form_submissions_data);
            $lf_stripslashes_all_submissions = stripslashes($lf_encoded_all_submissions);
            $lf_decoded_all_submissions = json_decode($lf_stripslashes_all_submissions);
            


            
            foreach($lf_decoded_all_submissions as $key => $val) {
                $lf_form_data = json_decode($val, true);




                // Isolate Each Fields Array
                foreach($lf_form_data as $key => $val) {
                    if($val['fieldType']){


        
        
                        // Extract & Isolate Values
                        $lf_value;
                        $lf_checked_values;
                        $lf_field_type = $val['fieldType'];
                        $lf_input_id = array_column($lf_form_data, 'currentIncrement', 'fieldType' )[$lf_field_type];
                        $lf_required = array_column($lf_form_data, 'required', 'currentIncrement' )[$lf_input_id];
                        $lf_field_label = array_column($lf_form_data, 'labelContent', 'currentIncrement' )[$lf_input_id];
                        $lf_month = array_column($lf_form_data, 'month', 'currentIncrement' )[$lf_input_id];
                        $lf_time = array_column($lf_form_data, 'time', 'currentIncrement' )[$lf_input_id];
                        
        
        
        
                        // Re-Sanitize + Re-Build Form Data JSON
                        switch ($lf_field_type) {
                            case "lfAddEmail":
                                $lf_value = sanitize_email(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                break;
        
                            case "lfAddTextarea":
                                $lf_cleaned_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_value = sanitize_text_area($lf_cleaned_value);
                                break;
        
                            case "lfAddPass":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                break;
        
                            case "lfAddText":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                break;
        
                            case "lfAddFile":
                                $lf_file_name = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                $lf_value = sanitize_file_name($lf_file_name);
                                break;
        
                            case "lfAddNumber":
                                $lf_value = intval(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                break;
        
                            case "lfAddDate":
                                $lf_input_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                $lf_remove_slashses_value  = explode('-', $lf_input_value);
                                $lf_value = sanitize_text_field($lf_remove_slashses_value[1] . '-' . $lf_remove_slashses_value[2] . '-' . $lf_remove_slashses_value[0]);
                                break;
        
                            case "lfAddRadio":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_checked_values = wp_strip_all_tags(array_column($lf_form_data, 'checkedValue', 'currentIncrement' )[$lf_input_id]);
                                break;
        
                            case "lfAddCheckbox":
                                $lf_extracted_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                $lf_value = array();
                                foreach( $lf_extracted_value as $val ){
                                    $lf_sanitize_selected_input_value = wp_strip_all_tags($val);
                                    array_push($lf_value, $lf_sanitize_selected_input_value);
                                }
                                $lf_value_ids = array_column($lf_form_data, 'checkedValues', 'currentIncrement' )[$lf_input_id];
                                $lf_checked_values = array();
                                foreach( $lf_value_ids as $val ){
                                    $lf_sanitize_selected_input_row_id_value = wp_strip_all_tags($val);
                                    array_push($lf_checked_values, $lf_sanitize_selected_input_row_id_value);
                                }
                                break;
        
                            case "lfAddPhone":
                                $lf_value;
                                $lf_clean_value = preg_replace('/[^0-9]/', '', array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_value = $lf_clean_value;
                                break;
        
                            case "lfAddUrl":
                                $lf_value = sanitize_text_field(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                break;
        
                            case "lfAddFiles":
                                $lf_file_values = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                foreach ( $lf_file_values as $key => $value ) { 	
                                    $lf_file_name = $lf_file_values[0]->fileName;
                                    array_push($lf_multi_files_array, $lf_file_array);
                                    $lf_value = sanitize_file_name($lf_file_name);
                                }                                
                                break;
        
                            case "lfAddDropdown":
                                $lf_cleaned_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_value = sanitize_text_field($lf_cleaned_value);
                                break;
        
                            case "lfAddSingleProduct":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_checked_values = wp_strip_all_tags(array_column($lf_form_data, 'checkedValue', 'currentIncrement' )[$lf_input_id]);
                                break;
        
                            case "lfAddMultipleProducts":
                                $lf_extracted_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                $lf_value = array();
                                foreach( $lf_extracted_value as $val ){
                                    $lf_sanitize_selected_input_value = wp_strip_all_tags($val);
                                    array_push($lf_value, $lf_sanitize_selected_input_value);
                                }
                                $lf_value_ids = array_column($lf_form_data, 'checkedValues', 'currentIncrement' )[$lf_input_id];
                                $lf_checked_values = array();
                                foreach( $lf_value_ids as $val ){
                                    $lf_sanitize_selected_input_row_id_value = wp_strip_all_tags($val);
                                    array_push($lf_checked_values, $lf_sanitize_selected_input_row_id_value);
                                }
                                break;
                                default:
                            }
        
        
        
        
                            // Re-Build Json
                            if ( $lf_field_type === "lfAddRadio" || $lf_field_type === "lfAddCheckbox" || $lf_field_type === "lfAddSingleProduct" || $lf_field_type === "lfAddMultipleProducts" ) {
                                $lf_input_value_array = array(
                                    'fieldType' => sanitize_text_field($lf_field_type),
                                    'currentIncrement' => intval($lf_input_id),
                                    'currentCounter' => intval($lf_input_id),
                                    'required' => sanitize_text_field($lf_required),
                                    'labelContent' => sanitize_text_field($lf_field_label),
                                    'value' => $lf_value,
                                    'checkedValues' => $lf_checked_values,
                                    'month' => sanitize_text_field($lf_month),
                                );
                                array_push($lf_submission_data_array, $lf_input_value_array);
                            } else {
                                $lf_input_value_array = array(
                                    'fieldType' => sanitize_text_field($lf_field_type),
                                    'currentIncrement' => intval($lf_input_id),
                                    'currentCounter' => intval($lf_input_id),
                                    'required' => sanitize_text_field($lf_required),
                                    'labelContent' => sanitize_text_field($lf_field_label),
                                    'value' => $lf_value,
                                    'month' => sanitize_text_field($lf_month),
                                    'time' => sanitize_text_field($lf_time),
                                );
                                array_push($lf_submission_data_array, $lf_input_value_array);
                            }
                        }
                    }


                    // Adds Individual Submission into Named Array
                    $lf_encode_submission_array = json_encode($lf_submission_data_array);
                    $new_array = array(
                        'submission' => $lf_encode_submission_array
                    );
                    // Add Submission Array to Global Json Array
                    array_push($lf_form_submission_array, $new_array); 
                    $lf_submission_data_array = array();
                }
        
        
        
        
                // Re-Build File Attachments Json
                global $wpdb;
                $lf_file_data = $wpdb->get_col($wpdb->prepare('SELECT attachment_urls FROM ' . $wpdb->prefix . 'likeable_forms_submissions WHERE form_id = %d ORDER BY id DESC',
                $lf_form_id));

                $lf_submission_attachment_urls = array();
                foreach( $lf_file_data as $lf_decode_file_datas){
                    $lf_attachment_data = json_decode(str_replace('\"', '"', $lf_decode_file_datas), true);
                    
                    $lf_field_id = $lf_attachment_data[0]['fieldId'];
                    $lf_attachment_url = $lf_attachment_data[0]['attachmentUrl'];
                    $lf_attachment_name = $lf_attachment_data[0]['attachmentName'];
                    $lf_attachment_abc_path = $lf_attachment_data[0]['abs_url_path'];
            
                    $lf_attachment_url_array = array(array(
                        'fieldId' => intval($lf_field_id),
                        'attachmentUrl' => sanitize_url($lf_attachment_url),
                        'attachmentName' => sanitize_file_name($lf_attachment_name),
                        'abs_url_path' => sanitize_text_field($lf_attachment_abc_path),
                    ));

                    array_push( $lf_submission_attachment_urls, $lf_attachment_url_array );
                }
         


            echo wp_json_encode(array($lf_entry_ids, $lf_form_submission_array, $lf_submission_attachment_urls));
            wp_die();
        }





        // Triggered from delete button in submission row in submission modal, deletes row/submission in table/db ---------- sends back form success response (update after front end form work)
        add_action('wp_ajax_lffes_delete_editor_individual_submission', 'lffes_delete_editor_individual_submission');
        function lffes_delete_editor_individual_submission()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_row_id = intval($_POST['lfrowid']);
            $lf_submissions_table = $wpdb->prefix . 'likeable_forms_submissions';
            $wpdb->delete( $lf_submissions_table, array( 'id' => $lf_row_id ) );
            echo wp_json_encode($lf_row_id);
            wp_die();
        }





        // Triggered from delete button in submission modal top bar, deletes all selected rows/submissions in table/db ---------- sends back form success response (update after front end form work)
        add_action('wp_ajax_lffes_delete_editor_all_submissions', 'lffes_delete_editor_all_submissions');
        function lffes_delete_editor_all_submissions()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_submission_row_id = intval($_POST['lfsubmissionrowid']);
            $lf_submissions_table = $wpdb->prefix . 'likeable_forms_submissions';
            foreach ($lf_submission_row_id as $lf_submission_row_ids ) {
                $wpdb->delete( $lf_submissions_table, array( 'id' => $lf_submission_row_ids ) );
            }
            $lf_response = 'Deleted';
            echo wp_json_encode($lf_response);
            wp_die();
        }



  

        // Triggered from lffes_save_form_submission ---------- temp changes upload directory for files
        function lffes_temp_change_uploads_directory( $dir ){ 
            return array(
                'path'   => $dir['basedir'] . '/likeable-forms',
                'url'    => $dir['baseurl'] . '/likeable-forms',
                'subdir' => '/likeable-forms'
            ) + $dir;
        }

       
    


        // Triggered from form title dropdown ajax request in JS grabs form notications, sends back to JS response  ---------- sends back form notifications from database for specific form
        add_action('wp_ajax_lffes_get_editor_form_notifications', 'lffes_get_editor_form_notifications');
        function lffes_get_editor_form_notifications()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_form_id = intval($_POST['lfformid']);
            $lf_data = $wpdb->get_var($wpdb->prepare(' SELECT notifications FROM ' . $wpdb->prefix . 'likeable_forms_notifications WHERE form_id = %s',
            $lf_form_id));
            echo wp_json_encode($lf_data);
            wp_die();
        }




        // Triggered from ajax LF Editor on load  ---------- Grabs all administrator email address from database to populate LF Notifications From and ReplyTo Dropdowns
        add_action('wp_ajax_lffes_get_editor_admin_emails', 'lffes_get_editor_admin_emails');
        function lffes_get_editor_admin_emails() 
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            global $wpdb;
            $lf_all_admin_emails = array();
            $lf_admin_users = get_users('role=Administrator');
            foreach ($lf_admin_users as $lf_admin_user) {
                $lf_admin_email_array = array(
                    'adminEmail' => sanitize_email($lf_admin_user->user_email),
                );
            array_push($lf_all_admin_emails, $lf_admin_email_array);
            }
            echo wp_json_encode($lf_all_admin_emails);
            wp_die();
        }





        // Triggered from ajax save/update in LF Editor Notifications Modal in JS for new form, grabs notifications data   ---------- saves or updates notifications data to database (New Form)
        add_action('wp_ajax_lffes_save_update_editor_form_notifications', 'lffes_save_update_editor_form_notifications');
        function lffes_save_update_editor_form_notifications()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;


            $lf_notifications_data_decoded = json_decode(str_replace('\"', '"', $_POST['lfdatatosend']), true);


            // From
            $lf_sanitized_from_email = sanitize_email($lf_notifications_data_decoded['FromValues'][0]['from']);
            $lf_from_array = array(
                array(
                    'from' => $lf_sanitized_from_email,
                )
            );


            // To
            $lf_to_array = array();
            $lf_data_to = $lf_notifications_data_decoded['ToValues'];
            foreach($lf_data_to as $key => $val){
                $lf_to_id_array = array(
                    'to' => sanitize_text_field($val['to']),
                    'id' => strval($val['id']),
                );
                array_push($lf_to_array,$lf_to_id_array);
            }


            // Subject
            $lf_sanitized_subject = sanitize_text_field($lf_notifications_data_decoded['SubjectValues'][0]['subject']);
            $lf_subject_array = array(
                array(
                    'subject' => $lf_sanitized_subject,
                )
            );


            // Reply-to
            $lf_sanitized_reply_to_email = sanitize_email($lf_notifications_data_decoded['ReplyToValues'][0]['replyto']);
            $lf_reply_to_array = array(
                array(
                    'replyto' => $lf_sanitized_reply_to_email,
                )
            );


            // Bcc
            $lf_bcc_array = array();
            $lf_data_bcc = $lf_notifications_data_decoded['BccValues'];
            foreach($lf_data_bcc as $key => $val){
                $lf_bcc_id_array = array(
                    'bcc' => sanitize_text_field($val['bcc']),
                    'id' => strval($val['id']),
                );
                array_push($lf_bcc_array,$lf_bcc_id_array);
            }


            // Subject
            $lf_sanitized_subject = sanitize_text_field($lf_notifications_data_decoded['SubjectValues'][0]['subject']);
            $lf_subject_array = array(
                array(
                    'subject' => $lf_sanitized_subject,
                )
            );


            // Body
            $lf_allowed_data_body_html = array(
                'div' => array(),
                'p' => array(),
                'b' => array(),
                'i' => array(),
                'u' => array(),
                'font' => array(
                    'color' => true,
                    'face' => true,
                    'size' => true,
                ),
                'a' => array(
                    'href' => array(),
                ),
                'span' => array(),
                'hr' => array(),
                'h1' => array(),
                'h2' => array(),
                'h3' => array(),
                'h4' => array(),
                'h5' => array(),
                'h6' => array(),
                'ul' => array(
                    'type' => true,
                ),
                'li' => array(
                    'align' => true, 
                    'valie' => true,
                ),
                'button' => array(
                    'value' => true,
                ),
                'header' => array(),
                'footer' => array(),
                'img' => array(
                    'height' => true,
                    'weidth' => true,
                    'src' => true,
                    'alt' => true,
                ),
                'table' => array(
                    'align'       => true,
                    'bgcolor'     => true,
                    'border'      => true,
                    'cellpadding' => true,
                    'cellspacing' => true,
                    'rules'       => true,
                    'summary'     => true,
                    'width'       => true,
                ),
                'tbody' => array(
                    'align'   => true,
                    'char'    => true,
                    'charoff' => true,
                    'valign'  => true,
                ),
                'td'  => array(
                    'abbr'    => true,
                    'align'   => true,
                    'axis'    => true,
                    'bgcolor' => true,
                    'char'    => true,
                    'charoff' => true,
                    'colspan' => true,
                    'headers' => true,
                    'height'  => true,
                    'nowrap'  => true,
                    'rowspan' => true,
                    'scope'   => true,
                    'valign'  => true,
                    'width'   => true,
                ),
                'tfoot' => array(
                    'align'   => true,
                    'char'    => true,
                    'charoff' => true,
                    'valign'  => true,
                ),
                'th' => array(
                    'abbr'    => true,
                    'align'   => true,
                    'axis'    => true,
                    'bgcolor' => true,
                    'char'    => true,
                    'charoff' => true,
                    'colspan' => true,
                    'headers' => true,
                    'height'  => true,
                    'nowrap'  => true,
                    'rowspan' => true,
                    'scope'   => true,
                    'valign'  => true,
                    'width'   => true,
                ),
                'thead' => array(
                    'align'   => true,
                    'char'    => true,
                    'charoff' => true,
                    'valign'  => true,
                ),
                'tr' => array(
                    'align'   => true,
                    'bgcolor' => true,
                    'char'    => true,
                    'charoff' => true,
                    'valign'  => true,
                ),
            );

            $lf_allowed_protocols = array( 'http', 'https', 'ftp', 'ftps', 'mailto', 'news', 'irc', 'irc6', 'ircs', 'gopher', 'nntp', 'feed', 'telnet', 'mms', 'rtsp', 'sms', 'svn', 'tel', 'fax', 'xmpp', 'webcal', 'urn' );
            $lf_sanitized_body = wp_kses($lf_notifications_data_decoded['BodyValues'][0]['body'], $lf_allowed_data_body_html, $lf_allowed_protocols);
            $lf_body_array = array(
                array(
                    'body' => $lf_sanitized_body,
                )
            );


            // Files
            $lf_sanitized_file = sanitize_text_field($lf_notifications_data_decoded['FileValues'][0]['file']);
            $lf_file_array = array(
                array(
                    'file' => $lf_sanitized_file,
                )
            );

            
            // Re-built Notifications JSON
            $lf_from_values = array(
                'FromValues' => $lf_from_array,
                'ToValues' => $lf_to_array,
                'ReplyToValues' => $lf_reply_to_array,
                'BccValues' => $lf_bcc_array,
                'SubjectValues' => $lf_subject_array,
                'BodyValues' => $lf_body_array,
                'FileValues' => $lf_file_array,
            );
            $lf_data_to_send = addslashes(wp_json_encode($lf_from_values));


            // Save/Update Notifications Db Query
            $lf_condition = sanitize_text_field($_POST['lfcondition']);
            if($lf_condition === "save") {
                $lf_existing_form_id = intval($_POST['lfexistingformid']); 
                $lf_data = $wpdb->insert(
                    $wpdb->prefix . 'likeable_forms_notifications', 
                    array( 
                        'time' => current_time( 'mysql' ), 
                        'form_id' => $lf_existing_form_id, 
                        'notifications' => $lf_data_to_send,
                        ) 
                    );
                echo wp_json_encode($lf_data);
            } else {
                $lf_existing_form_id = intval($_POST['lfexistingformid']); 
                $lf_data = $wpdb->update(
                    $wpdb->prefix . 'likeable_forms_notifications', 
                    array( 
                        'time' => current_time( 'mysql' ), 
                        'form_id' => $lf_existing_form_id, 
                        'notifications' => $lf_data_to_send,
                    ),
                    array(
                        'form_id' => $lf_existing_form_id
                    )
                );
                echo wp_json_encode($lf_data);
            }


            wp_die();
        }



        

        // Triggered from ajax form submit button, sends email notifications  ---------- send email notifications (Notification Front End)
        add_action('wp_ajax_lffes_send_outgoing_form_notifications', 'lffes_send_outgoing_form_notifications');
        add_action('wp_ajax_nopriv_lffes_send_outgoing_form_notifications', 'lffes_send_outgoing_form_notifications'); 
        function lffes_send_outgoing_form_notifications()
        {
            check_ajax_referer('lf_field_creator_js_nonce');
            global $wpdb;


            $headers[] = 'Content-Type: text/html; charset=UTF-8'; // Content-Type


            // Notifications Data from AJAX request
            $lf_sanitized_from_email = sanitize_email($_POST['lfdatafrom']);
            $lf_data_from = 'From ' . $lf_sanitized_from_email;
            $headers[] = $lf_data_from; // From

            
            $lf_sanitized_data_to_emails = array();
            $lf_data_to_emails = json_decode(str_replace('\"', '"', $_POST['lfdatato']));
            foreach($lf_data_to_emails as $lf_email_string){
                $lf_santize_email_string = sanitize_email($lf_email_string);
                array_push($lf_sanitized_data_to_emails,$lf_santize_email_string);
            }
            $lf_data_to = implode(', ', $lf_sanitized_data_to_emails);
            $to = $lf_data_to; // To


            $lf_sanitized_reply_to_email = sanitize_email($_POST['lfdatareplyto']);
            $lf_data_reply_to = 'Reply-to' . $lf_sanitized_reply_to_email;
            $headers[] = $lf_data_reply_to; // Reply-To


            $lf_sanitized_data_bcc_emails = array();
            $lf_data_bcc_emails = json_decode(str_replace('\"', '"', $_POST['lfdatabcc']));
            foreach($lf_data_bcc_emails as $lf_email_string){
                $lf_santize_email_string = sanitize_email($lf_email_string);
                $headers[] = 'Cc' . $lf_santize_email_string; // CC
            }
            
           
            $lf_data_subject = sanitize_text_field($_POST['lfdatasubject']);
            $subject = stripslashes($lf_data_subject); // Subject


            $lf_allowed_data_body_html = array(
                'div' => array(),
                'p' => array(),
                'b' => array(),
                'i' => array(),
                'u' => array(),
                'font' => array(
                    'color' => true,
                    'face' => true,
                    'size' => true,
                ),
                'a' => array(
                    'href' => array(),
                ),
                'span' => array(),
                'hr' => array(),
                'h1' => array(),
                'h2' => array(),
                'h3' => array(),
                'h4' => array(),
                'h5' => array(),
                'h6' => array(),
                'ul' => array(
                    'type' => true,
                ),
                'li' => array(
                    'align' => true, 
                    'valie' => true,
                ),
                'button' => array(
                    'value' => true,
                ),
                'header' => array(),
                'footer' => array(),
                'img' => array(
                    'height' => true,
                    'weidth' => true,
                    'src' => true,
                    'alt' => true,
                ),
                'table' => array(
                    'align'       => true,
                    'bgcolor'     => true,
                    'border'      => true,
                    'cellpadding' => true,
                    'cellspacing' => true,
                    'rules'       => true,
                    'summary'     => true,
                    'width'       => true,
                ),
                'tbody' => array(
                    'align'   => true,
                    'char'    => true,
                    'charoff' => true,
                    'valign'  => true,
                ),
                'td'  => array(
                    'abbr'    => true,
                    'align'   => true,
                    'axis'    => true,
                    'bgcolor' => true,
                    'char'    => true,
                    'charoff' => true,
                    'colspan' => true,
                    'headers' => true,
                    'height'  => true,
                    'nowrap'  => true,
                    'rowspan' => true,
                    'scope'   => true,
                    'valign'  => true,
                    'width'   => true,
                ),
                'tfoot' => array(
                    'align'   => true,
                    'char'    => true,
                    'charoff' => true,
                    'valign'  => true,
                ),
                'th' => array(
                    'abbr'    => true,
                    'align'   => true,
                    'axis'    => true,
                    'bgcolor' => true,
                    'char'    => true,
                    'charoff' => true,
                    'colspan' => true,
                    'headers' => true,
                    'height'  => true,
                    'nowrap'  => true,
                    'rowspan' => true,
                    'scope'   => true,
                    'valign'  => true,
                    'width'   => true,
                ),
                'thead' => array(
                    'align'   => true,
                    'char'    => true,
                    'charoff' => true,
                    'valign'  => true,
                ),
                'tr' => array(
                    'align'   => true,
                    'bgcolor' => true,
                    'char'    => true,
                    'charoff' => true,
                    'valign'  => true,
                ),
            );

            $lf_allowed_protocols = array( 'http', 'https', 'ftp', 'ftps', 'mailto', 'news', 'irc', 'irc6', 'ircs', 'gopher', 'nntp', 'feed', 'telnet', 'mms', 'rtsp', 'sms', 'svn', 'tel', 'fax', 'xmpp', 'webcal', 'urn' );
            $lf_data_body = wp_kses($_POST['lfdatabody'], $lf_allowed_data_body_html, $lf_allowed_protocols);
            $body = stripslashes($lf_data_body); // Body
            

            // Loop Through Each Upload File Path
            $attachments = array(); // Attachments
            $lf_data_attachment_urls = json_decode(str_replace('\"', '"', $_POST['lfdataattachmenturls']));
            foreach($lf_data_attachment_urls as $key => $val) {
                $lf_attactment_url = sanitize_url($val->lfattachmenturl);
                $lf_abs_file_url = WP_CONTENT_DIR . $lf_attactment_url;
                array_push($attachments, $lf_abs_file_url);
            }


            // Prevents call to Mail function If Notifications Incomplete
            if( !$lf_sanitized_data_to_emails && $lf_sanitized_from_email !== "" && $lf_sanitized_reply_to_email !== "" && $lf_data_subject !== "" ){
                // Call wp_mail function
                wp_mail( $to, $subject, $body, $headers, $attachments );
            }


            // Return Response
            $lf_response_object = array(
                'lfStringResponse' => 'Your form submission was successfully sent.',
            );
            echo wp_json_encode($lf_response_object);


            wp_die();
        }





        // Triggered from ajax Activate Extension Button in LF Editor  ---------- activates extension (Activate LF Extension)
        add_action('wp_ajax_lffes_activate_extension', 'lffes_activate_extension');
        function lffes_activate_extension()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_plugin_to_activate = sanitize_text_field($_POST['lfplugintoactivate']);
            activate_plugin( $lf_plugin_to_activate );
            $lf_response = 'Activated';
            echo wp_json_encode($lf_response);
            wp_die();
        }





        // Triggered from ajax Deactivate Extension Button in LF Editor  ---------- deactivates extension (Deactivate LF Extension)
        add_action('wp_ajax_lffes_deactivate_extension', 'lffes_deactivate_extension');
        function lffes_deactivate_extension()
        {
            if (!current_user_can('administrator') && !is_admin()) {
                exit();
            }
            check_ajax_referer('lf_field_editor_js_nonce');
            global $wpdb;
            $lf_plugin_to_deactivate = sanitize_text_field($_POST['lfplugintodeactivate']);
            deactivate_plugins( $lf_plugin_to_deactivate );
            $lf_response = 'Deactivated';
            echo wp_json_encode($lf_response);
            wp_die();
        }

        



        // Adds styles to admin menu icon
        add_action('admin_head', 'lffes_add_admin_menu_icon_styles');
        function lffes_add_admin_menu_icon_styles() 
        {
        echo '<style>
            .wp-not-current-submenu.menu-top.toplevel_page_likeable-forms.menu-top-last img {
                padding-top: 7px !important;
                width: 20px !important;
                height: 19px !important;
                opacity: 1 !important;
            }
            .current.menu-top.toplevel_page_likeable-forms.menu-top-last img {
                padding-top: 7px !important;
                width: 20px !important;
                height: 19px !important;
                opacity: 1 !important;
            } 
        </style>';
        }
