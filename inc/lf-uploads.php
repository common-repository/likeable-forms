<?php
        if ( ! defined( 'ABSPATH' ) ) {
            die();
        }




            // Process Submission if Form Data Validated + Sanitized + No Errors Found + Form Id Valid
            if(!empty($lf_validated_sanitized_form_data) && empty($lf_form_errors) && $lf_form_id_valid === true) {
                // File Data
                $lf_file_data = $_FILES['multifiles'];




                require_once ABSPATH . 'wp-admin/includes/image.php';
                require_once ABSPATH . 'wp-admin/includes/file.php';
                require_once ABSPATH . 'wp-admin/includes/media.php';



                    
                // Handles All File Uploads
                $lf_attachment_url_notifications = array();
                $lf_attachment_id_and_url_array = array();




                // Loop Submission File(s) Uploads
                foreach ($lf_file_data['name'] as $key => $value) { 		
                    if ($lf_file_data['name'][$key]) { 
                        $lf_unique_id = uniqid();
                        $file = array( 
                            'name' => $lf_unique_id . $lf_file_data['name'][$key],
                            'type' => $lf_file_data['type'][$key], 
                            'tmp_name' => $lf_file_data['tmp_name'][$key], 
                            'error' => $lf_file_data['error'][$key],
                            'size' => $lf_file_data['size'][$key]
                        );


                        // Add File to Custom Uploads Directory
                        add_filter( 'upload_dir', 'lffes_temp_change_uploads_directory' );


                        // Create New Uploads Directory if not exist
                        $upload_dir   = wp_upload_dir();
                        $user_dirname = $upload_dir['basedir'].'/'.'likeable-forms';
                        if ( ! file_exists( $user_dirname ) ) {
                            wp_mkdir_p( $user_dirname );
                        }


                        // Uploads the File
                        $upload_overrides = array( 'test_form' => false );
                        wp_handle_upload( $file, $upload_overrides );


                        remove_filter('upload_dir', 'lffes_temp_change_uploads_directory');


                        // Prepare Attachment URL JSON
                        $lf_custom_file_name = $lf_unique_id . $lf_file_data['name'][$key];
                        $lf_trailing_slashit_destination = '/'.$lf_custom_file_name;


                        $lf_content_url = content_url();
                        $lf_attachment_url = $lf_content_url . '/uploads/likeable-forms/' . $lf_custom_file_name;


                        $lf_remove_unique_id = str_replace($lf_unique_id, '', $lf_custom_file_name);
                        $lf_current_field_id = array_column($lf_validated_sanitized_field_ids, 'fieldId', 'fileName' )[$lf_remove_unique_id];


                        // Create Attachment URL JSON
                        $lf_attachment_url_notifications[] = array(
                            'attachmentUrl' => $lf_attachment_url,
                        ); 
                        $lf_attachment_id_and_url_array[] = array( 
                            'fieldId' => $lf_current_field_id, 
                            'attachmentUrl' => $lf_attachment_url, 
                            'attachmentName' => $lf_custom_file_name, 
                            'abs_url_path' => $lf_trailing_slashit_destination,
                        );



                    }
                }




                // Prepare File Uploads for Saving + Do Action File Uploads Callback Function
                $lf_attachment_data_notifications = wp_json_encode($lf_attachment_url_notifications);
                if ( $lf_attachment_id_and_url_array != null ) {
                    $lf_attachment_data_json = wp_json_encode($lf_attachment_id_and_url_array);
                } else {
                    $lf_attachment_data_json = '';
                }
                $lf_attachment_data_to_send = addslashes($lf_attachment_data_json);




            }
