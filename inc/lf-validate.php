<?php
        if ( ! defined( 'ABSPATH' ) ) {
            die();
        }


            // Validate + Sanitize Form Data
            $lf_validated_sanitized_form_data = array();
            $lf_validated_sanitized_file_name = array();
            $lf_validated_sanitized_file_ids = array();
            $lf_validated_sanitized_field_ids = array();
            $lf_form_errors = array();





            // Form Validation + Sanitization
            $lf_form_title = sanitize_text_field($_POST['lfformtitle']);
            $lf_form_id = sanitize_text_field($_POST['lfformid']); 
            




            $lf_form_id_valid = is_numeric($lf_form_id);
            if($lf_form_id_valid === true){
                




                // Get Form Settings
                $lf_form_settings_json = $wpdb->get_var($wpdb->prepare('SELECT fields FROM ' . $wpdb->prefix . 'likeable_forms WHERE id = %d',
                $lf_form_id));





                // Form Settings + Form Data
                $lf_form_settings;
                $lf_form_data;
                if(is_array(json_decode(str_replace('\"', '"', $lf_form_settings_json))) && is_array(json_decode(str_replace('\"', '"', $_POST['lfdatatosend'])))){
                    $lf_form_settings = json_decode(str_replace('\"', '"', $lf_form_settings_json));
                    $lf_form_data = json_decode(str_replace('\"', '"', $_POST['lfdatatosend']));
                } else {
                    $lf_error_found = true;
                    $lf_error_message = 'Malformed Values. There was a problem processing your submission.';
                    $lf_response->error_found = $lf_error_found;
                    $lf_response->error_message = $lf_error_message;
                    echo wp_json_encode($lf_response);
                    wp_die();
                }
                

               

                // Isolate Each Fields Array
                foreach($lf_form_settings as $key => $value){
                    if($value->fieldType) {
                        $lf_field_type = sanitize_text_field($value->fieldType);
                        $lf_current_increment = intval($value->currentIncrement);
                


                        // Extract & Isolate Values
                        $lf_value;
                        $lf_checked_values;
                        $lf_input_id = $lf_current_increment;
                        $lf_required = sanitize_text_field(array_column($lf_form_settings, 'required', 'currentIncrement' )[$lf_input_id]);
                        $lf_field_label = sanitize_text_field(array_column($lf_form_settings, 'labelContent', 'currentIncrement' )[$lf_input_id]);




                        // Validate + Sanitize + Build Form Data JSON
                        switch ($lf_field_type) {
                            case "lfAddEmail":
                                $lf_value = sanitize_email(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_validate;
                                if ( !filter_var(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id], FILTER_VALIDATE_EMAIL) ) {
                                    $lf_validate = 'false';
                                } else {
                                    $lf_validate = 'true';
                                }


                                $lf_min_length;
                                $lf_min_length_value = intval(array_column($lf_form_settings, 'min', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_min_length_value !== "") {
                                    $lf_min_length = $lf_min_length_value;
                                } else {
                                    $lf_min_length = 3;
                                }
                                $lf_max_length;
                                $lf_max_length_value = intval(array_column($lf_form_settings, 'max', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_max_length_value !== "") {
                                    $lf_max_length = $lf_max_length_value;
                                } else {
                                    $lf_max_length = 254;
                                }


                                $lf_maxlength_validate;
                                $lf_minlength_validate;
                                if( strlen($lf_value) > $lf_min_length && $lf_value !== "N/A" ){
                                    $lf_minlength_validate = 'valid';
                                } else {
                                    $lf_minlength_validate = 'invalid';
                                }
                                if( strlen($lf_value) <= $lf_max_length && $lf_value !== "N/A" ){
                                    $lf_maxlength_validate = 'valid';
                                } else {
                                    $lf_maxlength_validate = 'invalid';
                                }

                                
                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }


                                // Test Against Input Conditions
                                if( $lf_required === "true" && $lf_value === "N/A" ) {
                                    $lf_error_message = 'Required but no value entered.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_validate === 'false' ) {
                                    $lf_error_message = 'Valid email address required.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_validate === 'false' ) {
                                    $lf_error_message = 'Please supply valid email address.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Minimum of '.$lf_min_length.' characters required.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Maximum of '.$lf_max_length.' characters allowed.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a maximum of '.$lf_max_length.' characters.';
                                } else {
                                    // No Errors
                                }


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddTextarea":
                                $lf_isolated_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                $lf_value = wp_strip_all_tags($lf_isolated_value);


                                $lf_min_length;
                                $lf_min_length_value = intval(array_column($lf_form_settings, 'min', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_min_length_value !== "") {
                                    $lf_min_length = $lf_min_length_value;
                                } else {
                                    $lf_min_length = 0;
                                }
                                $lf_max_length;
                                $lf_max_length_value = intval(array_column($lf_form_settings, 'max', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_max_length_value !== "") {
                                    $lf_max_length = $lf_max_length_value;
                                } else {
                                    $lf_max_length = 2000;
                                }


                                $lf_maxlength_validate;
                                $lf_minlength_validate;
                                if( strlen($lf_value) > $lf_min_length && $lf_value !== "N/A" ){
                                    $lf_minlength_validate = 'valid';
                                } else {
                                    $lf_minlength_validate = 'invalid';
                                }
                                if( strlen($lf_value) <= $lf_max_length && $lf_value !== "N/A" ){
                                    $lf_maxlength_validate = 'valid';
                                } else {
                                    $lf_maxlength_validate = 'invalid';
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }


                                // Test Against Input Conditions
                                if( $lf_required === "true" && $lf_value === "N/A" ) {
                                    $lf_error_message = 'Required but no value entered.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Minimum of '.$lf_min_length.' characters required.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a minimum of '.$lf_min_length.' characters.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Maximum of '.$lf_max_length.' characters allowed.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a maximum of '.$lf_max_length.' characters.';
                                } else {
                                    // No Errors
                                }


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddPass":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                

                                $lf_min_length;
                                $lf_min_length_value = intval(array_column($lf_form_settings, 'min', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_min_length_value !== "") {
                                    $lf_min_length = $lf_min_length_value;
                                } else {
                                    $lf_min_length = 8;
                                }
                                $lf_max_length;
                                $lf_max_length_value = intval(array_column($lf_form_settings, 'max', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_max_length_value !== "") {
                                    $lf_max_length = $lf_max_length_value;
                                } else {
                                    $lf_max_length = 64;
                                }


                                $lf_maxlength_validate;
                                $lf_minlength_validate;
                                if( strlen($lf_value) > $lf_min_length && $lf_value !== "N/A"){
                                    $lf_minlength_validate = 'valid';
                                } else {
                                    $lf_minlength_validate = 'invalid';
                                }
                                if( strlen($lf_value) <= $lf_max_length && $lf_value !== "N/A"){
                                    $lf_maxlength_validate = 'valid';
                                } else {
                                    $lf_maxlength_validate = 'invalid';
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }


                                // Test Against Input Conditions
                                if( $lf_required === "true" && $lf_value === "N/A" ) {
                                    $lf_error_message = 'Required but no value entered.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Minimum of '.$lf_min_length.' characters required.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a minimum of '.$lf_min_length.' characters.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Maximum of '.$lf_max_length.' characters allowed.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a maximum of '.$lf_max_length.' characters.';
                                } else {
                                    // No Errors
                                }


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddText":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);


                                $lf_min_length;
                                $lf_min_length_value = intval(array_column($lf_form_settings, 'min', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_min_length_value !== "") {
                                    $lf_min_length = $lf_min_length_value;
                                } else {
                                    $lf_min_length = 0;
                                }
                                $lf_max_length;
                                $lf_max_length_value = intval(array_column($lf_form_settings, 'max', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_max_length_value !== "") {
                                    $lf_max_length = $lf_max_length_value;
                                } else {
                                    $lf_max_length = 128;
                                }


                                $lf_maxlength_validate;
                                $lf_minlength_validate;
                                if( strlen($lf_value) > $lf_min_length && $lf_value !== "N/A" ){
                                    $lf_minlength_validate = 'valid';
                                } else {
                                    $lf_minlength_validate = 'invalid';
                                }
                                if( strlen($lf_value) <= $lf_max_length && $lf_value !== "N/A" ){
                                    $lf_maxlength_validate = 'valid';
                                } else {
                                    $lf_maxlength_validate = 'invalid';
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }


                                // Test Against Input Conditions
                                if( $lf_required === "true" && $lf_value === "N/A" ) {
                                    $lf_error_message = 'Required but no value entered.';
                                } else if( $lf_required === "true" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Minimum of '.$lf_min_length.' characters required.';
                                } else if( $lf_required === "false" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a minimum of '.$lf_min_length.' characters.';
                                } else if( $lf_required === "true" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Maximum of '.$lf_max_length.' characters allowed.';
                                } else if( $lf_required === "false" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a maximum of '.$lf_max_length.' characters.';
                                } else {
                                    // No Errors
                                }


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddFile":
                                $lf_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                $lf_file_values = array_column($lf_form_data, 'fileValue', 'currentIncrement' )[$lf_input_id];

                                
                                $lf_all_files_validated = array();
                                $lf_file_name;
                                $lf_file_size;
                                $lf_file_type;
                                // Validate + Sanitize Each File
                                foreach ($lf_file_values as $key => $value) { 	
                                    $lf_file_name = $lf_file_values[0]->fileName;
                                    $lf_file_size = $lf_file_values[0]->fileSize;
                                    $lf_file_type = $lf_file_values[0]->fileType;
                                }


                                $lf_sanitized_file_name = sanitize_file_name($lf_file_name);
                                $lf_max_upload_file_size = wp_max_upload_size();
                                $lf_allowed_file_types = get_allowed_mime_types();
                                $lf_sanitized_file_type = sanitize_mime_type($lf_file_type);


                                $lf_validate;
                                if($lf_file_size < $lf_max_upload_file_size && is_numeric($lf_file_size) && in_array($lf_sanitized_file_type, $lf_allowed_file_types) && $lf_value !== "N/A") {
                                    $lf_validate = 'true';
                                } else {
                                    $lf_validate = 'false';
                                }

                                
                                // Determine Dynamic Error Response
                                $lf_dynamic_error_message;
                                if($lf_file_size > $lf_max_upload_file_size) {
                                    $lf_dynamic_error_message = 'Maximum file size exceeded.';
                                } elseif(!is_numeric($lf_file_size)){
                                    $lf_dynamic_error_message = 'Incorrect file size format.';
                                } else {
                                    $lf_dynamic_error_message = 'Unsupported file type.';
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }


                                // Test Against Input Conditions
                                if($lf_required === "true" && $lf_value === "N/A") {
                                    $lf_error_message = 'Required but no file uploaded.';
                                } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                    $lf_error_message = $lf_dynamic_error_message;
                                } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                    $lf_error_message = $lf_dynamic_error_message;
                                } else {
                                    // No Errors
                                    // Push File Data into Globals for Pending Upload
                                    $lf_value = $lf_sanitized_file_name;
                                    array_push($lf_validated_sanitized_file_ids, $lf_input_id);
                                    array_push($lf_validated_sanitized_file_name, $lf_sanitized_file_name);
                                    $lf_file_field_id = array(
                                        'fileName' => $lf_sanitized_file_name,
                                        'fieldId' => $lf_input_id,
                                    );
                                    array_push($lf_validated_sanitized_field_ids, $lf_file_field_id); 
                                }


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddNumber":
                                $lf_validate;
                                $lf_value = intval(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                if(!filter_var(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id], FILTER_SANITIZE_NUMBER_INT)) {
                                    $lf_validate = 'false';
                                } else {
                                    $lf_validate = 'true';
                                }


                                $lf_min_length;
                                $lf_min_length_value = intval(array_column($lf_form_settings, 'min', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_min_length_value !== "") {
                                    $lf_min_length = $lf_min_length_value;
                                } else {
                                    $lf_min_length = 0;
                                }
                                $lf_max_length;
                                $lf_max_length_value = intval(array_column($lf_form_settings, 'max', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_max_length_value !== "") {
                                    $lf_max_length = $lf_max_length_value;
                                } else {
                                    $lf_max_length = 1000000000;
                                }


                                $lf_maxlength_validate;
                                $lf_minlength_validate;
                                if( $lf_value > $lf_min_length && $lf_value !== "N/A" ){
                                    $lf_minlength_validate = 'valid';
                                } else {
                                    $lf_minlength_validate = 'invalid';
                                }
                                if($lf_value <= $lf_max_length && $lf_value !== "N/A" ){
                                    $lf_maxlength_validate = 'valid';
                                } else {
                                    $lf_maxlength_validate = 'invalid';
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }

                                
                                // Test Against Input Conditions
                                if( $lf_required === "true" && $lf_value === "N/A" ) {
                                    $lf_error_message = 'Required but no value entered.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_validate === 'false' ) {
                                    $lf_error_message = 'Must supply valid number/integer.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_validate === 'false' ) {
                                    $lf_error_message = 'Valid number/integer required.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Value must equal or be greater than '.$lf_min_length.'.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a value equal or greater than '.$lf_min_length.'.';
                                } elseif( $lf_required === "true" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Value must not exceed '.$lf_max_length.'.';
                                } elseif( $lf_required === "false" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid' ) {
                                    $lf_error_message = 'Please enter a valid value. Must be less than or equal to '.$lf_max_length.'.';
                                } else {
                                    // No Errors
                                }


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddDate":
                                $lf_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];


                                if(!date('Y-m-d', strtotime(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id])) == array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]) {
                                    $lf_value = "not valid date";
                                } else {
                                    $lf_input_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                    $lf_remove_slashses_value  = explode('-', $lf_input_value);
	                                $lf_value = sanitize_text_field($lf_remove_slashses_value[1] . '-' . $lf_remove_slashses_value[2] . '-' . $lf_remove_slashses_value[0]);
                                }


                                $lf_validate;
                                $lf_remove_slashses_value  = explode('-', $lf_value);
                                if (count($lf_remove_slashses_value) === 3 && $lf_value !== "not valid date" ) {
                                    if (checkdate($lf_remove_slashses_value[0], $lf_remove_slashses_value[1], $lf_remove_slashses_value[2])) {
                                        $lf_validate = 'true';
                                    } else {
                                        $lf_validate = 'false';
                                    }
                                } else {
                                    $lf_validate = 'false';
                                }

                                
                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }


                                // Test Against Input Conditions
                                if($lf_required === "true" && $lf_value === "N/A") {
                                    $lf_error_message = 'Required but no date selected.';
                                } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                    $lf_error_message = 'Requires selection. Invalid format. Must select a valid Date.';
                                } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                    $lf_error_message = 'Invalid Format. Valid Date required.';
                                } else {
                                    // No Errors
                                } 


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddRadio":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_selected_row_id_value = wp_strip_all_tags(array_column($lf_form_data, 'checkedValue', 'currentIncrement' )[$lf_input_id]);


                                // Determine if Field has Pre-selected Requirement
                                $lf_pre_selected;
                                $lf_all_radio_options = array_column($lf_form_settings, 'radioLabels', 'currentIncrement' )[$lf_input_id];
                                $lf_is_radio_checked = array();
                                foreach ($lf_all_radio_options as $key => $value) { 	
                                    $lf_radio_checked = $lf_file_values[0]->radiochecked;
                                    array_push($lf_is_radio_checked, $lf_radio_checked);
                                }
                                if (in_array("true", $lf_is_radio_checked)){
                                    $lf_pre_selected = 'true';
                                } else {
                                    $lf_pre_selected = 'false';
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                // Test Against Input Conditions
                                if($lf_required === "true" && $lf_value === "N/A") { 
                                    $lf_error_message = 'Requires selection. No selection made.';
                                } elseif($lf_pre_selected === 'true' && $lf_value === "N/A") {
                                    $lf_error_message = 'Requires selection. No selection made.';
                                } else {
                                    // No Errors
                                } 


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }


                                // Update Globals
                                $lf_checked_values = $lf_selected_row_id_value;
                                break;

                            case "lfAddCheckbox":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_option_labels = explode(',', $lf_value);
                                $lf_selected_input_values = array();
                                foreach($lf_option_labels as $val){
                                    $lf_sanitize_selected_input_value = $val;
                                    array_push($lf_selected_input_values, $lf_sanitize_selected_input_value);
                                }
                                

                                $lf_value_ids = wp_strip_all_tags(array_column($lf_form_data, 'checkedValues', 'currentIncrement' )[$lf_input_id]);
                                $lf_option_ids = explode(',', $lf_value_ids);
                                $lf_selected_row_ids_values = array();
                                foreach($lf_option_ids as $val){
                                    $lf_sanitize_selected_input_row_id_value = $val;
                                    array_push($lf_selected_row_ids_values, $lf_sanitize_selected_input_row_id_value);
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                // Test Against Input Conditions
                                if($lf_required === "true" && empty($lf_selected_input_values) ) { 
                                    $lf_error_message = 'Requires selection. No selection made.';
                                } else {
                                    // No Errors
                                } 


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }


                                // Update Globals
                                $lf_value = $lf_selected_input_values;
                                $lf_checked_values = $lf_selected_row_ids_values;
                                break;

                            case "lfAddPhone":
                                $lf_value = preg_replace('/[^0-9]/', '', array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                if(strlen($lf_value) !== 15 && filter_var($lf_value, FILTER_VALIDATE_INT) === false) {
                                    $lf_validate = 'false';
                                } else {
                                    $lf_validate = 'true';
                                }


                                $lf_min_length;
                                $lf_min_length_value = intval(array_column($lf_form_settings, 'min', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_min_length_value !== "") {
                                    $lf_min_length = $lf_min_length_value;
                                } else {
                                    $lf_min_length = 7;
                                }
                                $lf_max_length;
                                $lf_max_length_value = intval(array_column($lf_form_settings, 'max', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_max_length_value !== "") {
                                    $lf_max_length = $lf_max_length_value;
                                } else {
                                    $lf_max_length = 15;
                                }


                                $lf_maxlength_validate;
                                $lf_minlength_validate;
                                if( strlen($lf_value) > $lf_min_length && $lf_value !== "N/A" ){
                                    $lf_minlength_validate = 'valid';
                                } else {
                                    $lf_minlength_validate = 'invalid';
                                }
                                if( strlen($lf_value) <= $lf_max_length && $lf_value !== "N/A" ){
                                    $lf_maxlength_validate = 'valid';
                                } else {
                                    $lf_maxlength_validate = 'invalid';
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }

                                
                                // Test Against Input Conditions
                                if($lf_required === "true" && $lf_value === "N/A") {
                                    $lf_error_message = 'Required but no value entered.';
                                } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                    $lf_error_message = 'Valid phone number required.';
                                } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                    $lf_error_message = 'Please enter a valid phone number.';
                                } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid') {
                                    $lf_error_message = 'Valid phone numbers require a minimum of '.$lf_min_length.' digits.';
                                } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid') {
                                    $lf_error_message = 'Please enter a number with at least '.$lf_min_length.' digits.';
                                } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid') {
                                    $lf_error_message = 'Maximum of '.$lf_max_length.' digits allowed.';
                                } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid') {
                                    $lf_error_message = 'Please enter a number that does not exceed '.$lf_max_length.' digits.';
                                } else {
                                    // No Errors
                                } 


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddUrl":
                                $lf_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                $lf_validate;
                                if (!preg_match('%^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@|\d{1,3}(?:\.\d{1,3}){3}|(?:(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)(?:\.(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)*(?:\.[a-z\x{00a1}-\x{ffff}]{2,6}))(?::\d+)?(?:[^\s]*)?$%iu', array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id])) {
                                    $lf_validate = 'false';
                                } else {
                                    $lf_validate = 'true';
                                    $lf_unsanitized_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                    $lf_value = sanitize_url($lf_unsanitized_value);
                                }


                                $lf_min_length;
                                $lf_min_length_value = intval(array_column($lf_form_settings, 'min', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_min_length_value !== "") {
                                    $lf_min_length = $lf_min_length_value;
                                } else {
                                    $lf_min_length = 4;
                                }
                                $lf_max_length;
                                $lf_max_length_value = intval(array_column($lf_form_settings, 'max', 'currentIncrement' )[$lf_input_id]);
                                if( $lf_max_length_value !== "") {
                                    $lf_max_length = $lf_max_length_value;
                                } else {
                                    $lf_max_length = 2000;
                                }


                                $lf_maxlength_validate;
                                $lf_minlength_validate;
                                if(strlen($lf_value) > $lf_min_length && $lf_value !== "N/A" ){
                                    $lf_minlength_validate = 'valid';
                                } else {
                                    $lf_minlength_validate = 'invalid';
                                }
                                if(strlen($lf_value) <= $lf_max_length && $lf_value !== "N/A" ){
                                    $lf_maxlength_validate = 'valid';
                                } else {
                                    $lf_maxlength_validate = 'invalid';
                                }

                                    
                                // Store All Field Errors
                                $lf_error_message = null;


                                if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                    $lf_value = "N/A";
                                }


                                // Test Against Input Conditions
                                if($lf_required === "true" && $lf_value === "N/A") {
                                    $lf_error_message = 'Required but no value entered.';
                                } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                    $lf_error_message = 'Must supply valid URL.';
                                } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                    $lf_error_message = 'Valid URL required.';
                                } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid') {
                                    $lf_error_message = 'Minimum of '.$lf_min_length.' characters required.';
                                } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_minlength_validate === 'invalid') {
                                    $lf_error_message = 'Please enter a minimum of '.$lf_min_length.' characters.';
                                } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid') {
                                    $lf_error_message = 'Maximum of '.$lf_max_length.' characters allowed.';
                                } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_maxlength_validate === 'invalid') {
                                    $lf_error_message = 'Please enter a URL that does not exceed '.$lf_max_length.' characters.';
                                } else {
                                    // No Errors
                                } 


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddFiles":
                                $lf_value = array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id];
                                $lf_file_values = array_column($lf_form_data, 'fileValue', 'currentIncrement' )[$lf_input_id];


                                $lf_validate_number = is_numeric($lf_value); 
                                $lf_validate;
                                if($lf_validate_number === true && $lf_value !== "N/A" ){
                                    $lf_validate = 'true';
                                } else {
                                    $lf_validate = 'false';
                                }
                                

                                $lf_all_files_validated = array();
                                // Validate + Sanitize Each File
                                foreach ($lf_file_values as $key => $value) { 	
                                    $lf_file_name = $lf_file_values[0]->fileName;
                                    $lf_file_size = $lf_file_values[0]->fileSize;
                                    $lf_file_type = $lf_file_values[0]->fileType;


                                    $lf_sanitized_file_name = sanitize_file_name($lf_file_name);
                                    $lf_max_upload_file_size = wp_max_upload_size();
                                    $lf_allowed_file_types = get_allowed_mime_types();
                                    $lf_sanitized_file_type = sanitize_mime_type($lf_file_type);
                                    $lf_sanitized_input_id = $lf_input_id;


                                    $lf_validate;
                                    if($lf_file_size < $lf_max_upload_file_size && is_numeric($lf_file_size) && in_array($lf_sanitized_file_type, $lf_allowed_file_types) && $lf_value !== "N/A" ) {
                                        $lf_validate = true;
                                    } else {
                                        $lf_validate = false;
                                    }


                                    // Determine Dynamic Error Response
                                    $lf_dynamic_error_message;
                                    if($lf_file_size > $lf_max_upload_file_size) {
                                        $lf_dynamic_error_message = 'Maximum file size exceeded.';
                                    } elseif(!is_numeric($lf_file_size)){
                                        $lf_dynamic_error_message = 'Incorrect file size format.';
                                    } else {
                                        $lf_dynamic_error_message = 'Unsupported file type.';
                                    }


                                    // Store All Field Errors
                                    $lf_error_message = null;


                                    if(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id] === "N/A") {
                                        $lf_value = "N/A";
                                    }


                                    // Test Against Input Conditions
                                    if($lf_required === "true" && $lf_value === "N/A") {
                                        $lf_error_message = 'Required but no file uploaded.';
                                    } elseif($lf_required === "true" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                        $lf_error_message = $lf_dynamic_error_message;
                                    } elseif($lf_required === "false" && $lf_value !== "N/A" && $lf_validate === 'false') {
                                        $lf_error_message = $lf_dynamic_error_message;
                                    } else {
                                        // No Errors
                                        $lf_value = $lf_sanitized_file_name;
                                        array_push($lf_all_files_validated, "true");
                                        array_push($lf_validated_sanitized_file_name, $lf_sanitized_file_name);  
                                        $lf_file_field_id = array(
                                            'fileName' => $lf_sanitized_file_name,
                                            'fieldId' => $lf_input_id,
                                        );
                                        array_push($lf_validated_sanitized_field_ids, $lf_file_field_id);  
                                    }
                                }


                                // Push Field Data into Global Field Data JSON Once per Multiple Files
                                if(!in_array('false', $lf_all_files_validated)) {
                                    // Push File Data into Globals for Pending Upload
                                    array_push($lf_validated_sanitized_file_ids, $lf_input_id);
                                }


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddDropdown":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                

                                // Store All Field Errors
                                $lf_error_message = null;


                                // Test Against Input Conditions
                                if($lf_required === "true" && $lf_value === "N/A") {
                                    $lf_error_message = 'Required but no value selected';
                                } else {
                                    // No Errors
                                } 


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }
                                break;

                            case "lfAddSingleProduct":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_selected_row_id_value = wp_strip_all_tags(array_column($lf_form_data, 'checkedValue', 'currentIncrement' )[$lf_input_id]);
                                

                                // Determine if Field has Pre-selected Requirement
                                $lf_pre_selected;
                                $lf_all_radio_options = array_column($lf_form_settings, 'radioLabels', 'currentIncrement' )[$lf_input_id];
                                $lf_is_radio_checked = array();
                                foreach ($lf_all_radio_options as $key => $value) { 	
                                    $lf_radio_checked = $lf_file_values[0]->radiochecked;
                                    array_push($lf_is_radio_checked, $lf_radio_checked);
                                }
                                if (in_array("true", $lf_is_radio_checked)){
                                    $lf_pre_selected = "true";
                                } else {
                                    $lf_pre_selected = "false";
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                // Test Against Input Conditions
                                if($lf_required === "true" && $lf_value === "N/A") { 
                                    $lf_error_message = 'Requires selection. No selection made.';
                                } elseif($lf_pre_selected === "true" && $lf_value === "N/A") {
                                    $lf_error_message = 'Requires selection. No selection made.';
                                } else {
                                   // No Errors
                                } 


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }


                                // Update Globals
                                $lf_checked_values = $lf_selected_row_id_value;
                                break;

                            case "lfAddMultipleProducts":
                                $lf_value = wp_strip_all_tags(array_column($lf_form_data, 'value', 'currentIncrement' )[$lf_input_id]);
                                $lf_option_labels = explode(',', $lf_value);
                                $lf_selected_input_values = array();
                                foreach($lf_option_labels as $val){
                                    $lf_sanitize_selected_input_value = wp_strip_all_tags($val);
                                    array_push($lf_selected_input_values, $lf_sanitize_selected_input_value);
                                }
                                

                                $lf_value_ids = array_column($lf_form_data, 'checkedValues', 'currentIncrement' )[$lf_input_id];
                                $lf_option_ids = explode(',', $lf_value_ids);
                                $lf_selected_row_ids_values = array();
                                foreach($lf_value_ids as $val){
                                    $lf_sanitize_selected_input_row_id_value = wp_strip_all_tags($val);
                                    array_push($lf_selected_row_ids_values, $lf_sanitize_selected_input_row_id_value);
                                }


                                // Store All Field Errors
                                $lf_error_message = null;


                                // Test Against Input Conditions
                                if($lf_required === "true" && empty($lf_selected_input_values) ) {
                                    $lf_error_message = 'Required but no value entered.';
                                } else {
                                    // No Errors
                                }


                                // Update Form Errors Array
                                if( $lf_error_message !== null ) {
                                    $lf_field_errors = array(
                                        'fieldId' => $lf_input_id,
                                        'fieldError' => $lf_error_message,
                                        'fieldType' => $lf_field_type,
                                    );
                                    array_push($lf_form_errors, $lf_field_errors);
                                }


                                // Update Globals
                                $lf_value = $lf_selected_input_values;
                                $lf_checked_values = $lf_selected_row_ids_values;
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
                                'month' => date("m-d-Y"),
                                'time' => date("h:i a"),
                            );
                            array_push($lf_validated_sanitized_form_data, $lf_input_value_array);
                        } else {
                            $lf_input_value_array = array(
                                'fieldType' => sanitize_text_field($lf_field_type),
                                'currentIncrement' => intval($lf_input_id),
                                'currentCounter' => intval($lf_input_id),
                                'required' => sanitize_text_field($lf_required),
                                'labelContent' => sanitize_text_field($lf_field_label),
                                'value' => $lf_value,
                                'month' => date("m-d-Y"),
                                'time' => date("h:i a"),
                            );
                            array_push($lf_validated_sanitized_form_data, $lf_input_value_array);
                        }
                    }
                }




            } else {
                // Field Validation Incomplete (Form Id Invalid)
                $lf_response = array(
                    'error_found' => true,
                    'error_message' => "Form Id Invalid.",
                );
                echo wp_json_encode($lf_response);
                wp_die();
            }


            // Field Validation Complete (If Errors Return Errors)
            if( !empty($lf_form_errors) ) {
                $lf_response = array(
                    'error_found' => true,
                    'error_message' => "Field Errors",
                    'field_errors' => $lf_form_errors,
                );
                echo wp_json_encode($lf_response);
                wp_die();
            } 
        