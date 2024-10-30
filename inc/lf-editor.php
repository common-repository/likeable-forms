<?php
        if ( ! defined( 'ABSPATH' ) ) {
            die();
        }
    ?> 
        <!-- LF Form Builder -->
        <div class="LF-Form-Builder">
                <div class="lf-builder-grid">
                    <!-- Lf Form Top Navigation -->
                    <div class="lf-top-form-nav item">
                        <img src="" id="lf_Logo" class="lflogo">
                        <ul class="lf-top-nav-ul">
                            <li class="lf-search-li"><button id="lf_Search" class="lf-search">Search</button></li>
                            <li class="lf-duplicate-li" title="Duplicate Form"><button id="lf_Clone_Form" class="lf-clone-form"></button></li>
                            <li class="lf-delete-form-li" title="Delete Form"><button id="lf_Delete_Form" class="lf-delete-form"></button></li>
                            <li id="lf_Changelog" class="notification-bell-li"></li>
                        </ul>
                        <ul class="lf-top-nav-ul-links">
                        <li class="lf-marketplace-li"><button id="lf_Marketplace" class="lf-marketplace">Marketplace</button></li>
                        <li class="lf-community-li"><button id="lf_Community" class="lf-community">Community</button></li>
                        </ul>
                    </div>
                    <div class="lf-secondary-top-navigation item">
                        <!-- Lf Form Dropdown -->                       
                        <div class="form-title-container">                       
                            <div class="lf-add-new-form" title="Create New Form">
                                <img src="" id="lf_Add_New" class="lf-add-new">
                            </div> 
                            
                        <li class="lf-name-li"><div class="lf-drop-menu-name">
                            <button class="lf-name">Select a Form <span class="lf-name-down-arrow">▼</span></button>
                            <div id="lf_Drop_Menu" class="lf-drop-menu">
                                <div id="lf_No_Titles_Container">
                                    <p id="lf_No_Form_Titles" class="no-form-title-display-message">There are currently no forms.</p>
                                </div>
                            <ul id="lf_Form_Title_Container">
                            </ul>
                            </div>
                        </div> 
                        </li>
                        <ul class="lf-nav-title-ul">
                            <li>
                            <input type="text" id="lf_Form_Title" class="lf-form-title" value="Add Title">
                            </li>
                        </ul>
                    </div> 


                    <!-- Lf Form Secondary Navigation -->
                        <ul class="lf-secondary-top-nav-ul">
                            <li class="lf-preview-li"><button id="lf_Preview" class="lf-preview">Preview</button><p class="lf-preview-tab-plus">+</p><p class="lf-preview-tab-hover">See front-end form styles.</p></li>
                            <li class="lf-notifications-li"><button id="lf_Notifications" class="lf-notifications">Notifications</button><p class="lf-notifications-tab-plus">+</p><p class="lf-notifications-tab-hover">Setup outgoing email notifications.</p></li>
                            <li class="lf-submissions-li"><button id="lf_Submissions" class="lf-submissions">Submissions</button><p class="lf-submissions-tab-plus">+</p><span id="lf_Submissions_Tab_Count" class="lf-submissions-tab-count">0</span><p class="lf-submission-tab-hover">View current form submissions.</p></li>
                        </ul>
                    </div>


                    <!-- Lf Form Dropzone -->
                    
                    <div id="lf_Dropzone" class="lf-field-editor item">
                        <form id="lf_Form_Container" class="lf-dropzone" novalidate></form>
                    </div>
                    <div class="lf-editor-container-bg">
                    <img src="" id="lf_Editor_Bg" class="lf-editor-bg">
                        <p id="lf_Editor_Get_Started_Text" class="lf-editor-get-started-text">Click or drag a field here to get started.</p>
                    </div>


                    <!-- Lf Form Advanced Settings Panel -->
                    <div id="lf_Advanced_Settings_Panel" class="lf-advanced-settings-panel">
                        <ul class="lf-advanced-menu-ul">
                            <li id="lf_Advanced_Tab_0" class="lf-advanced-menu-item-view-all is-active">View All</li>
                            <li id="lf_Advanced_Tab_1" class="lf-advanced-menu-item" data-tab-id="1">Logic</li>
                            <li id="lf_Advanced_Tab_2" class="lf-advanced-menu-item" data-tab-id="2">MinLength</li>
                            <li id="lf_Advanced_Tab_3" class="lf-advanced-menu-item" data-tab-id="3">MaxLength</li>
                            <li id="lf_Advanced_Tab_4" class="lf-advanced-menu-item" data-tab-id="4">Regex</li>
                            <li id="lf_Advanced_Tab_5" class="lf-advanced-menu-item" data-tab-id="5">Placeholder</li>
                            <li id="lf_Advanced_Tab_6" class="lf-advanced-menu-item" data-tab-id="6">Value</li>
                            <li id="lf_Advanced_Menu_Dismiss" class="lf-advanced-menu-dismiss">Dismiss Settings</li>
                        </ul>

                    <div id="lf_Advanced_Settings_Container" class="lf-advanced-settings-container">
                        <!-- Lf Form Dynamic JS Advanced Settings Fields -->
                    </div>

                    </div>


                    <!-- Lf Form Footer -->
                    <div class="lf-footer-nav item">

                        <!-- Lf Form Footer Left -->
                        <ul class="lf-footer-nav-description-ul">
                            <li><input type="text" id="lf_Form_Description" class="lf-form-description" placeholder="Add Description" value="Add Description"></li>
                        </ul>

                        <!-- Lf Form Footer Right -->
                        <ul class="lf-footer-nav-ul">
                            <li class="lf-field-count-li">
                                <p id="lf_Field_Count" class="lf-field-count-text">Field Count <span id="lf_Current_Field_Count" class="lf-field-count">+0</span></p>
                            </li>
                            <li class="lf-copy-shortcode-li">
                                <p id="lf_Copy_Shortcode" class="lf-copy-shortcode">Copy Shortcode<span id="lf_Shortcode_Copied" class="tooltiptext">Copy</span></p>
                            </li>
                            <li class="lf-shortcode-li">
                                <p id="lf_Shortcode" class="lf-shortcode" data-id="1">[likeableforms id="1"]</p>
                            </li>
                        </ul>
                    </div>
                </div>



                <div id="lf_Container" class="lf-container item">
                    <!-- Lf Fields Basic Collapsible Section -->
                    <button type="button" id="lf_Collapsible_1" class="lf-collapsible" data-id="1" data-collapsible-state="open">Fields</button>
                    <div id="lf_Fields_Container_1" class="lf-field-grid">




                        <!-- New LF Field -->
                        <div id="lf_Email_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Email" draggable="true" data-field-type="Email Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Email</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Email_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Pass_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Pass" draggable="true" data-field-type="Password Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Password</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Pass_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Phone_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Phone" draggable="true" data-field-type="Phone Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Phone</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Phone_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Radio_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Radio" draggable="true" data-field-type="Radio Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Radio</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Radio_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Checkbox_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Checkbox" draggable="true" data-field-type="Checkbox Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Checkbox</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Checkbox_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Dropdown_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Dropdown" draggable="true" data-field-type="Email Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Dropdown</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Dropdown_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Number_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Number" draggable="true" data-field-type="Number Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Number</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Number_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Url_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Url" draggable="true" data-field-type="URL Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Website</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Url_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Date_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Date" draggable="true" data-field-type="Date Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Date</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Date_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Single_Product_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Single_Product" draggable="true" data-field-type="Radio Product Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Product</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Single_Product_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Multiple_Products_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Multiple_Products" draggable="true" data-field-type="Checkbox Product Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Products</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Multiple_Products_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_File_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_File" draggable="true" data-field-type="File Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">File</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_File_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Files_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Files" draggable="true" data-field-type="Multi-File Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Multi-file</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Files_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->
                        

                        <!-- New LF Field -->
                        <div id="lf_Text_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Text" draggable="true" data-field-type="Text Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Text</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Text_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->


                        <!-- New LF Field -->
                        <div id="lf_Textarea_Container" class="lf-field-wrapper">
                        <!-- LF Field Overlay -->
                        <span class="lf-field" id="lf_Add_Textarea" draggable="true" data-field-type="Textarea Field"></span>
                            <div class="lf-field-text-wrapper">
                                <p class="lf-field-text-type">Textarea</p>
                            </div>

                            <div class="lf-field-drag-wrapper">
                                <img src="" alt="drag Icon" id="lf_Textarea_Field_Drag_Icon" class="lf-field-drag-icon">
                            </div>
                        </div>
                        <!-- End New LF Field -->

                        
                    </div>
                </div>
               <!-- End Lf Fields Basic Collapsible Section -->




                    <!-- Lf Nested Save Form Container -->
                        <div id="lf_Save" class="lf-save-form-container"><span id="lf_Prevent_Save_Overlay" class="lf-prevent-save-overlay"></span><button id="lf_Save_Form" class="lf-save" data-condition="save">Save</button></div>
                </div>


                    <!-- Lf Addons Sidebar -->
                    <div id="lf_Addons_Container item" class="lf-addons-grid">
                        <ul id="lf_Addons_Ul" class="lf-addons-ul">

                            <!-- Lf Extensions -->

                        </ul>
                    </div>
                </div>


                    <!-- LF Off-Screen Drag Images -->
                    <div class="lf-drag-images-container">
                    <div id="lf_Drag_Email" class="lf-drag-email">Email <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Textarea" class="lf-drag-textarea">Textarea <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Pass" class="lf-drag-pass">Pass <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Text" class="lf-drag-text">Text <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_File" class="lf-drag-file">File <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Number" class="lf-drag-number">Number <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Date" class="lf-drag-date">Date <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Radio" class="lf-drag-radio">Radio <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Checkbox" class="lf-drag-checkbox">Checkbox <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Phone" class="lf-drag-phone">Phone <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Url" class="lf-drag-url">Website <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Files" class="lf-drag-files">Files <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Dropdown" class="lf-drag-dropdown">Dropdown <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Single_Product" class="lf-drag-single-product">Product <span class="lf-grab-dots">⋮⋮</span></div>
                    <div id="lf_Drag_Multiple_Products" class="lf-drag-multiple-products">Products <span class="lf-grab-dots">⋮⋮</span></div>
                    </div>


                    <!-- OffScreen Pre-loader -->
                    <div id="lf_Pre_Loader" class="lf-pre-loader-overlay">
                        <div class="lf-pre-loader-container">
                            <div class="lf-pre-loader-bar">
                                <div></div>
                            </div>
                        </div>
                    </div>


                    <!-- OffScreen Saving Loader -->
                    <div id="lf_Overlay" class="lf-saving-overlay">
                        <div class="lf-saving-container">
                            <div class="lf-saving-bar">
                                <div></div>
                            </div>
                        </div>
                    </div>


                    <!-- OffScreen Delete Form Confirmation -->
                    <div id="lf_Delete_Overlay" class="lf-delete-overlay">
                        <div class="lf-delete-container">
                            <p class="lf-delete-confirmation-text">Are you sure?</p>
                            <div class="lf-delete-confirmation-grid">
                                <button class="lf-do-not-delete">Cancel</button>
                                <button class="lf-delete-confirm">Delete Form</button>
                            </div>
                        </div>
                    </div>


                    <!-- OffScreen Add New Form  -->
                    <div id="lf_Add_New_Overlay" class="lf-add-new-overlay">
                        <div class="lf-add-new-container">
                            <p class="lf-add-new-text">Are you sure?</p>
                            <div class="lf-add-new-grid">
                                <button class="lf-do-not-add-new">Cancel</button>
                                <button class="lf-add-new-confirm">New Form</button>
                            </div>
                        </div>
                    </div>


                    <!-- OffScreen Preview  -->
                    <div id="lf_Preview_Overlay" class="lf-preview-overlay"> 
                        <div id="lf_Preview_Container" class="lf-preview-container">
                            <div id="lf_Preview_Top_Bar" class="lf-preview-top-bar">
                                <ul class="lf-preview-media-queries-ul">
                                    <li><p class="lf-preview-desktop-media-query">Desktop</p></li>
                                    <li><p class="lf-preview-laptop-media-query">Laptop</p></li>
                                    <li><p class="lf-preview-mobile-media-query">Mobile</p></li>
                                </ul>
                                <button id="lf_Preview_Close" class="lf-preview-close" title="close">X</button>
                            </div>
                            <div id="lf_Preview_HTML" class="lf-preview-frame">
                                <form id="lf_Preview_Form" class="lf-preview-form-container"></form>
                            </div>
                        </div>
                    </div>


                    <!-- OffScreen Marketplace  -->
                    <div id="lf_Marketplace_Overlay" class="lf-marketplace-overlay"> 
                        <div id="lf_Marketplace_Container" class="lf-marketplace-container">
                            <div id="lf_Marketplace_Top_Bar" class="lf-marketplace-top-bar">
                                <ul class="lf-marketplace-media-queries-ul">
                                    <li><p class="lf-marketplace-full-screen-media-query">Maximize</p></li>
                                    <li><p class="lf-marketplace-minimize-media-query">Minimize</p></li>
                                </ul>
                                <button id="lf_Marketplace_Close" class="lf-marketplace-close" title="close">X</button>
                            </div>
                            <div id="lf_Marketplace_Frame" class="lf-marketplace-frame" src="">
                                <!-- Extensions Container -->
                                <div id="lf_Marketplace_Flex_Container" class="lf-marketplace-flex-container">
                                <!-- Extensions -->
                                </div>
                                <!-- End Extensions Container -->
                            </div>
                        </div>
                    </div>


                    <!-- OffScreen Community  -->
                    <div id="lf_Community_Overlay" class="lf-community-overlay"> 
                        <div id="lf_Community_Container" class="lf-community-container">
                            <div id="lf_Community_Top_Bar" class="lf-community-top-bar">
                                <ul class="lf-community-media-queries-ul">
                                    <li><p class="lf-community-full-screen-media-query">Maximize</p></li>
                                    <li><p class="lf-community-minimize-media-query">Minimize</p></li>
                                </ul>
                                <button id="lf_Community_Close" class="lf-community-close" title="close">X</button>
                            </div>
                            <iframe id="lf_Community_Frame" class="lf-community-frame" src=""></iframe>
                        </div>
                    </div>


                <!-- OffScreen View All Extensions  -->
                <div id="lf_Extensions_Overlay" class="lf-extensions-overlay"> 
                    <div id="lf_Extensions_Container" class="lf-extensions-container">
                        <div id="lf_Extensions_Top_Bar" class="lf-extensions-top-bar">
                            <ul class="lf-extensions-media-queries-ul">
                                <li><p class="lf-extensions-full-screen-media-query">Maximize</p></li>
                                <li><p class="lf-extensions-minimize-media-query">Minimize</p></li>
                            </ul>
                            <button id="lf_Extensions_Close" class="lf-extensions-close" title="close">X</button>
                        </div>
                        <div id="lf_Extensions_Frame" class="lf-extensions-frame">
                            <div id="lf_Extension_Flex_Grid" class="lf-extension-flex-grid"> 
                            </div>
                            <div id="lf_Extensions_Row_Container" class="lf-extensions-row-container">
                            </div>
                        </div>
                    </div>
                </div>


                    


                    <!-- OffScreen Notifications  -->
                    <div id="lf_Notifications_Overlay" class="lf-notifications-overlay"> 
                    <div id="lf_Notifications_Container" class="lf-notifications-container">
                        <div id="lf_Notifications_Top_Bar" class="lf-notifications-top-bar">
                            <ul class="lf-notifications-media-queries-ul">
                                <li><p class="lf-notifications-full-screen-media-query">Maximize</p></li>
                                <li><p class="lf-notifications-minimize-media-query">Minimize</p></li>
                            </ul>
                            <button id="lf_Notifications_Close" class="lf-notifications-close" title="close">X</button>
                        </div>
                        <div id="lf_Notifications_Frame" class="lf-notifications-frame">


                            <!-- Lf Notifcations Inputs -->
                            <div class="lf-notifications-selections-container">


                                <!-- LF Notifications From -->
                                <div id="lf_Drop_Container" class="lf-drop-container">
                                    <p class="lf-ms-label">From:<span class="lf-ms-label-req">*</span></p>
                                    <input type="email" id="lf_Drop_Input_1" class="lf-drop-input" placeholder="Select Email" autocomplete="off" data-increment="1" required>
                                    <span></span>
                                    <ul id="lf_Drop_1" class="lf-drop">
                                    </ul>
                                </div>


                                <!-- LF Notifications To -->
                                <div class="lf-global-ms-container">
                                    <p class="lf-ms-label">To:<span class="lf-ms-label-req">*</span></p>
                                    <div class="lf-ms-container" contentEditable="true">
                                        <input type="text" id="lf_Ms_Input_1" class="lf-ms-input" placeholder="Choose Recipients" autocomplete="off" data-increment="1">
                                    <ul id="lf_Ms_Selected_Container_1" class="lf-ms-selected-container lf-ms-hide-selected" contentEditable="false">
                                    </ul>
                                    <ul id="lf_Ms_Drop_1" class="lf-ms-drop" data-increment="1" contentEditable="false">

                                    </ul>
                                    </div>
                                </div>


                                <!-- LF  Notifications ReplyTo -->
                                <div id="lf_Drop_Container" class="lf-drop-container">
                                    <p class="lf-ms-label">ReplyTo:<span class="lf-ms-label-req">*</span></p>
                                    <input type="email" id="lf_Drop_Input_2" class="lf-drop-input" placeholder="Select Email" autocomplete="off" data-increment="2" required>
                                    <span></span>
                                    <ul id="lf_Drop_2" class="lf-drop">
                                    </ul>
                                </div>


                                <!-- LF Notifications BCC -->
                                <div class="lf-global-ms-container">
                                    <p class="lf-ms-label">BCC:</p>
                                    <div class="lf-ms-container" contentEditable="true">
                                        <input type="text" id="lf_Ms_Input_2" class="lf-ms-input" placeholder="Choose Recipients" autocomplete="off" data-increment="2">
                                    <ul id="lf_Ms_Selected_Container_2" class="lf-ms-selected-container lf-ms-hide-selected" contentEditable="false">
                                    </ul>
                                    <ul id="lf_Ms_Drop_2" class="lf-ms-drop" data-increment="2" contentEditable="false">
                                    </ul>
                                    </div>
                                </div>
                                <div id="lf_Notification_Input_Container_Subject" class="lf-notifications-input-container">
                                    <p class="lf-notifications-label">Subject:<span class="lf-ms-label-req">*</span></p>
                                    <input type="text" id="lf_Subject" class="lf-notification-input" placeholder="Enter Subject" autocomplete="off" required>
                                </div>
                            </div>


                            <!-- Toolbar Visual/HTML Message Editor -->
                            <div class="lf-visual-html-editor-buttons">
                                <div class="lf-text-editor-toolbar">
                                    <ul class="lf-text-editor-field-actions">
                                        <li class="lf-notifications-tool-tip"><img id="lf_Bold" class="lf-bold" src=""><p class="lf-bold-tool-tip">Bold</p></li>
                                        <li class="lf-notifications-tool-tip"><img id="lf_Italic" class="lf-italic" src=""><p class="lf-italic-tool-tip">Italic</p></li>
                                        <li class="lf-notifications-tool-tip"><img id="lf_Underline" class="lf-underline" src=""><p class="lf-underline-tool-tip">Underline</p></li>
                                        <li class="lf-notifications-tool-tip"><img id="lf_Hyperlink" class="lf-hyperlink" src=""><p class="lf-hyperlink-tool-tip">Link</p></li>
                                        <li class="lf-notifications-tool-tip"><img id="lf_Undo_Hyperlink" class="lf-undo-hyperlink" src=""><p class="lf-undo-hyperlink-tool-tip">Unlink</p></li>
                                        <span class="lf-tool-tip-color"><li class="lf-tool-tip-color-li"><input type="color" value="#1743f3" id="lf_Text_Color" class="lf-color"></li><p class="lf-text-color-tool-tip">Text Color</p></span>
                    

                                        <!--Dynamic Data Button -->
                                        <div class="lf-dynamic-data-options-container">
                                        <button class="lf-dynamic-tags-buttons">Dynamic Tags</button>
                                            <!-- Dynamic Data Options -->
                                            <ul id="lf_Dynamic_Data_Options_Ul_Notifications" class="lf-dynamic-data-options-ul">
                                                
                                            </ul>
                                        </div>


                                    </ul>
                                </div>
                                <ul id="lf_Visual_Editor_Buttons" class="lf-visual-editor-buttons">
                                    <li><button id="lf_Notifications_Insert_HTML" class="lf-notifications-insert-html">HTML</button></li>
                                    <li><button id="lf_Notifications_Clear_Message" class="lf-notifications-clear-message">Clear Message</button></li>
                                </ul>
                            </div>

                            <div id="lf_Notifications_Text_Content" class="lf-notifications-text-content" contentEditable="true">
                                <div>
                                    <p>type here</p>
                                </div>
                            </div>
                            
                            <div class="lf-add-file-notifications-attachment-container">
                            <input type="checkbox" name="add-files-notifications" id="lf_Add_File_Notifications_Attachment_Input" class="lf-add-file-notifications-attachment-input"><label for="lf_Add_File_Notifications_Attachment_Input" class="lf-add-file-notifications-label">Add File Uploads as Attachments</label>
                            </div>

                        </div>
                    </div>
                </div>


                <!-- OffScreen Submissions  -->
                <div id="lf_Submissions_Overlay" class="lf-submissions-overlay"> 
                    <div id="lf_Submissions_Container" class="lf-submissions-container">
                        <div id="lf_Submissions_Top_Bar" class="lf-submissions-top-bar">
                            <ul class="lf-notifications-media-queries-ul">
                                <li><p class="lf-submissions-full-screen-media-query">Maximize</p></li>
                                <li><p class="lf-submissions-minimize-media-query">Minimize</p></li>
                            </ul>
                            <button id="lf_Submissions_Close" class="lf-submissions-close" title="close">X</button>
                        </div>
                        <div id="lf_Submissions_Frame" class="lf-submissions-frame">
                        <img src="" id="lf_Submissions_Empty" class="lf-submissions-empty-logo">
                        <p id="lf_Submission_Empty_Text" class="lf-submissions-empty-text">There are currently no submissions.</p>
                            <div id="lf_Submissions_Row_Container" class="lf-submissions-row-container">
                            </div>
                            <div id="lf_Submissions_Bottom_Bar" class="lf-submissions-bottom-bar">
                                <button id="lf_Submissions_Delete" class="lf-submissions-delete" title="delete">Delete Selected</button>
                            </div>
                        </div>
                    </div>
                </div>


               <!-- OffScreen Media Library  -->
               <div id="lf_Media_Library_Overlay" class="lf-media-library-overlay"> 
                    <div id="lf_Media_Library_Container" class="lf-media-library-container">
                        <div id="lf_Media_Library_Top_Bar" class="lf-media-library-top-bar">
                            <ul class="lf-media-library-media-queries-ul">
                                <li><p class="lf-media-library-full-screen-media-query">Maximize</p></li>
                                <li><p class="lf-media-library-minimize-media-query">Minimize</p></li>
                            </ul>
                            <button id="lf_Media_Library_Close" class="lf-media-library-close" title="close">X</button>
                        </div>
                        <div id="lf_Media_Library_Frame" class="lf-media-library-frame">
                        </div>
                    </div>
                </div>


                <!-- OffScreen Changelog  -->
                <div id="lf_Changelog_Container" class="lf-changelog-container">
                    <ul class="lf-changelog-header">
                        <li><button class="lf-changelog-dismiss">Dismiss</button></li>
                         <li><p class="lf-changelog-title">Changelog</p></li>
                    </ul>
                    <p class="lf-changelog-version">Version 1.0</p>
                    <ul class="lf-changelog-ul">
                        <li>• Bug fixes & various improvements.<li>
                    </ul>
                    <a href="https://likeableforms.com/changelog#1.0" class="lf-changelog-view-more">View 1.0</a>
                </div>  


                <!-- OffScreen Documentation Search  -->
                <div id="lf_Search_Overlay" class="lf-search-overlay"> 
                        <div id="lf_Search_Result_Container" class="lf-search-result-container" style="display:none;">
                            <div class="lf-search-result-flex">
                                <p class="lf-search-result-text">Result</p>
                                <a href="" id="lf_Follow_Link" target="_blank">
                                    <button class="lf-search-result-link">Follow Link</button>
                                </a>
                            </div>
                            <p id="lf_Search_Response_Text" class="lf-search-response-text">This is the current result</p>
                            <p class="lf-search-response-link-text"><a href="" target="_blank" id="lf_Search_Response_Link_Text" class="lf-search-response-link">https://youtube.com</a></p>
                        </div>
                        <div id="lf_Search_Container" class="lf-search-container">
                                <input type="text" id="lf_Search_Results_Input" placeholder="Search.." class="lf-search-questions-input">
                                <ul id="lf_Search_Drop_Ul" class="lf-search-drop-ul">
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=ZfbL8IuIav8" data-text="Here's a step-by-step video to watch">Watch Stripe Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://support.stripe.com/questions/locate-api-keys-in-the-dashboard" data-text="Here's an article published directly by Stripe on how to obtain your Stripe API Keys.">Where do I find my Stripe publishable and secret API Key?</li>
                                    <li class="lf-search-item" data-link="https://stripe.com/pricing" data-text="Stripe charges per transaction. See Stripe pricing for more information.">How much does Stripe charge?</li>
                                    <li class="lf-search-item" data-link="https://docs.stripe.com/no-code/subscriptions" data-text="Stripe subscription plans can be created inside your Stripe dashboard. See creating a Stripe subscription plan for step-by-step instructions.">How do I setup a Stripe subscription plan?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Using the query string option requires two steps. The first step is adding the querystring 'parameter' or 'word'. For example: you can type in the word 'price' or 'charge' minus the '' quotation marks into the query string field. Example: price Example: charge The next step is adding a link to your payment form with the querystring and the price. If you have a link/button on your website that links to your payment form, the link/button should include a ?, the query string 'parameter' or 'word' you've added into the query string field, and the price. Example: https://yourwebsite.com/payment-form?price=10 Example: yourwebsite.com/the-page-your-form-is-on?price=10 Now, when a customer clicks the link and visits your payment form, the forms total will now be updated to 10.00.">How do I populate the total with a query string for Stripe?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=baxn9sHNcoY" data-text="Here's a step-by-step video to watch.">Watch PayPal Braintree Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.braintreegateway.com/login" data-text="Start by logging into your Braintree account. Once logged in, select the 'settings icon' in the top navigation menu, and then select 'API' from the dropdown menu. From here you can copy & paste your public & private key. Lastly, scroll down to the Client-Side Encryption Key section to locate your 'Merchant Id'.">Where do I find my Braintree Id and keys?</li>
                                    <li class="lf-search-item" data-link="https://www.braintreepayments.com/braintree-pricing" data-text="Braintree charges per transaction. See Braintree pricing for more information.">How much does Braintree charge?</li>
                                    <li class="lf-search-item" data-link="https://developer.paypal.com/braintree/docs/guides/recurring-billing/overview" data-text="Braintree subscription plans can be created inside your Braintree dashboard. See creating a Braintree subscription plan for step-by-step instructions.">How do I setup a Braintree subscription plan?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Using the query string option requires two steps. The first step is adding the querystring 'parameter' or 'word'. For example: you can type in the word 'price' or 'charge' minus the '' quotation marks into the query string field. Example: price Example: charge The next step is adding a link to your payment form with the querystring and the price. If you have a link/button on your website that links to your payment form, the link/button should include a ?, the query string 'parameter' or 'word' you've added into the query string field, and the price. Example: https://yourwebsite.com/payment-form?price=10 Example: yourwebsite.com/the-page-your-form-is-on?price=10 Now, when a customer clicks the link and visits your payment form, the forms total will now be updated to 10.00.">How do I populate the total with a query string for Braintree?</li>
                                    <li class="lf-search-item" data-link="https://www.braintreegateway.com" data-text="PayPal Braintree is an enterprise API solution offered by Braintree. While Braintree is a PayPal company, you will need to create a Braintree account.">Do I need a PayPal account or a Braintree account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=MbrEBbK_XMg" data-text="Here's a step-by-step video to watch.">Watch Square Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://squareup.com/help/us/en/article/7627-get-started-with-subscriptions-in-dashboard" data-text="Square subscription plans can be created inside your Square dashboard. See creating a Square subscription plan for step-by-step instructions.">How do I setup a Square subscription plan?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Using the query string option requires two steps. The first step is adding the querystring 'parameter' or 'word'. For example: you can type in the word 'price' or 'charge' minus the '' quotation marks into the query string field. Example: price Example: charge The next step is adding a link to your payment form with the querystring and the price. If you have a link/button on your website that links to your payment form, the link/button should include a ?, the query string 'parameter' or 'word' you've added into the query string field, and the price. Example: https://yourwebsite.com/payment-form?price=10 Example: yourwebsite.com/the-page-your-form-is-on?price=10 Now, when a customer clicks the link and visits your payment form, the forms total will now be updated to 10.00.">How do I populate the total with a query string for Square?</li>
                                    <li class="lf-search-item" data-link="https://developer.squareup.com/us/en/case-studies/index" data-text="In order to process one-time paymens or recurring subscriptions via the Square payments API, you first need to create a Square app. To get started, login to your Square developer dashboard. If you do not have a Square developer account, please register for a new account and follow the prompts to sync your Square seller account. Once logged into your Square developer dashboard, select the '+ icon' in the applications section and give your application a name. Then select the 'accept payments' option and click next. Lastly, select the 'a company' option option and click confirm.">Do I need to create a Square app?</li>
                                    <li class="lf-search-item" data-link="https://developer.squareup.com/us/en/case-studies/index" data-text="To get started, login to your Square developer dashboard. One logged into your Square developer dashboard, select the 'open' button inside your application card. Copy & paste both your Square Application Id & Square Access token, which can be found in the credentials tab and should also be visible to you on the current page. Lastly, you can copy & paste your location id, by selecting the 'Locations' link in the left-hand side admin menu.">Where do I find my Square token and Ids?</li>
                                    <li class="lf-search-item" data-link="https://squareup.com/us/en/pricing" data-text="Square charges per transaction. See Square pricing for more information.">How much does Square charge?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=Ysc_Km8ncnU" data-text="Here's a step-by-step video to watch.">Watch Dropbox Sign Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://app.hellosign.com/account/logIn" data-text="Start by logging into your Dropbox Sign account. Once logged in, select 'API' in the left-hand side admin bar.">Where do I find my Dropbox Sign API Key?</li>
                                    <li class="lf-search-item" data-link="https://sign.dropbox.com/products/dropbox-sign-api/pricing" data-text="You will need a paid Dropbox Sign API plan to interact with the Dropbox Sign API. See Dropbox Sign API plans. for more information.">Do I need a free of paid Dropbox Sign account?</li>
                                    <li class="lf-search-item" data-link="https://help.dropbox.com/create-upload/signature-request-templates" data-text="In order to create documents, you first need to create a template. Here's an article published by Dropbox Sign on how to create a Dropbox Sign Template.">Do I need to create a Dropbox Sign Template?</li>
                                    <li class="lf-search-item" data-link="https://app.hellosign.com/account/logIn" data-text="Start by logging into your Dropbox Sign account. Once logged in, select 'Documents' in the left-hand side admin bar.">Where do I view and download Dropbox Sign signed documents?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=pzRQR_2uyIk" data-text="Here's a step-by-step video to watch.">Watch PandaDoc Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://developers.pandadoc.com/reference/api-key-authentication-process" data-text="Here's an article published directly by PandaDoc on how to obtain your Pandadoc API Key.">Where do I find my PandaDoc Production API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.pandadoc.com/api/pricing/" data-text="You will need a paid Pandadoc API plan to interact with the Pandadoc API. See PandaDoc API plans. for more information.">Do I need a free of paid PandaDoc account?</li>
                                    <li class="lf-search-item" data-link="https://support.pandadoc.com/hc/en-us/articles/360041230753-Save-time-with-templates" data-text="In order to create documents, you first need to create a template. Here's an article published by Pandadoc on how to create a PandaDoc Template.">Do I need to create a PandaDoc Template?</li>
                                    <li class="lf-search-item" data-link="https://support.pandadoc.com/hc/en-us/articles/360060797713-How-documents-signed-from-embeds-are-stored#:~:text=If%20you'd%20like%20to,is%20within%20the%20form%20itself." data-text="Signed documents can be found inside your Pandadoc account. See quickly access signed documents for more information.">Where do I view PandaDoc signed documents?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=taDaquRbqVM" data-text="Here's a step-by-step video to watch.">Watch BoldSign Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://developers.boldsign.com/authentication/api-key/?region=us" data-text="Here's an article published directly by BoldSign on how to create and obtain your BoldSign API Key.">Where do I find my BoldSign API Key?</li>
                                    <li class="lf-search-item" data-link="https://boldsign.com/electronic-signature-pricing/?plan=api" data-text="You will need a paid BoldSign API plan to interact with the BoldSign API. See Boldsign API plans. for more information.">Do I need a free of paid BoldSign account?</li>
                                    <li class="lf-search-item" data-link="https://support.boldsign.com/kb/article/20/creating-templates#:~:text=You%20can%20create%20a%20Template,or%20from%20your%20cloud%20drive" data-text="In order to create documents, you first need to create a template. Here's an article published by BoldSign on how to create a BoldSign Template.">Do I need to create a BoldSign Template?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Auto-reminders are currently set up to be sent every 3 days for one-month.">How often are BoldSign auto-reminders sent?</li>
                                    <li class="lf-search-item" data-link="https://support.boldsign.com/kb/article/122/download-signed-documents" data-text="Signed documents can be found inside your BoldSign account. See downloading signed documents for more information.">Where do I view and download BoldSign signed documents?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=IW1sanAE61A" data-text="Here's a step-by-step video to watch.">Watch Help Scout Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.helpscout.com/pricing/" data-text="You will need a paid Help Scout account as currently Help Scout offers only paid plans. See Help Scout pricing.">Do I need a free or paid Help Scout account?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Yes, in order to obtain your Help Scout App Id and Help Scout Client Id you will need to create a Help Scout App.">Do I need to create a Help Scout App?</li>
                                    <li class="lf-search-item" data-link="https://secure.helpscout.net/members/login/" data-text="Start by logging into your Help Scout account. Once logged in, click your profile picture, then 'Your Profile' from the dropdown. In the left hand side bar, click 'My Apps' then 'Create My App'. Give your app a name. For the 'Redirection Url' replace 'yourwebsite.com' in the following URL. https://yourwebsite.com/wp-admin/admin.php?page=likeable-forms.">How do I create a Help Scout App</li>
                                    <li class="lf-search-item" data-link="https://secure.helpscout.net/members/login/" data-text="Start by logging into your Help Scout account. Once logged in, click your profile picture, then 'Your Profile' from the dropdown. In the left hand side bar, click 'My Apps'. Lastly, select the App Name you setup in the previous step.">Where do I find my Help Scout App Id and Client Id?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes.">How long does it take for the ticket to be created in Help Scout after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=dbeiLDtBiH4" data-text="Here's a step-by-step video to watch.">Watch FreshDesk Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://support.freshdesk.com/en/support/solutions/articles/215517-how-to-find-your-api-key" data-text="Start by logging into your FreshDesk account. Once logged in, click your profile picture on the top right, then 'Profile Settings'. Lastly, in the right sidebar click 'View API Key' and complete the captcha. Or visit FreshDesk for instructions on finding your API Key.">Where do I find my Freshdesk API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.freshworks.com/freshdesk/pricing/" data-text="You will need a paid FreshDesk account as currently FreshDesk only offers API Keys for paid plans. See paid Freshdesk plans.">Do I need a free or paid Freshdesk account?</li>
                                    <li class="lf-search-item" data-link="https://support.freshdesk.com/en/support/solutions/articles/237264-how-do-i-find-my-freshdesk-account-url-using-my-email-address-" data-text="Start by logging into your FreshDesk account. Once logged in, select the 'gear icon' in the left hand side bar, then 'Portals'. Here you can see your FreshDesk/HelpDesk URL. Or visit FreshDesk for instructions on finding your FreshDesh/HelpDesk URL.">Where do I find my FreshDesk domain?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes.">How long does it take for the ticket to be created in Freshdesk after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=mUX8sdnMBis" data-text="Here's a step-by-step video to watch.">Watch Hubspot Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.hubspot.com/pricing/marketing/enterprise?term=annual" data-text="This extension works with both free or paid Hubspot plans.">Do I need a free or paid Hubspot account?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Yes, in order to obtain your HubSpot Auth Token you will need to create a HubSpot App.">Do I need to create a Hubspot App?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Start by logging into your HubSpot account. Click the 'gear icon' in the top right navigation bar. In the left hand sidebar click 'Integrations' then 'Private Apps'. Click the 'Create a private app' button. In the new top navigation bar that appears, select 'Scopes'. Scroll down to the 'Find a scope' input. Next, individually copy & paste each of the following scopes into the 'Find a scope' input field and then select the corresponding checkboxes. Scopes crm.objects.contacts.write and select the 'read and write checkboxes'. crm.schemas.contacts.write and select the 'read and write checkboxes'. files and select the 'files checkbox'. Lastly, click the “Create app” button on the top right. You can now reveal your HubSpot Access Token by clicking 'Show Token'.">How do I create a Hubspot App?</li>
                                    <li class="lf-search-item" data-link="https://app.hubspot.com/login" data-text="Your HubSpot Auth Token is found in the 'Private Apps' section of your HubSpot account. If you have not created your own private app yet, please see the above Q&A tab. To locate your HubSpot Access Token, start by logging into your HubSpot account. Click the 'gear icon' in the top right navigation bar. On the left hand sidebar click 'Integrations' then 'Private Apps'. Select your private app and then click the 'Auth' tab. You can now reveal your HubSpot Access Token by clicking 'Show Token'.">How do I find my HubSpot Auth Token?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes.">How long does it take for the ticket to be created in Hubspot after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=FKr7Z9fO5kI" data-text="Here's a step-by-step video to watch.">Watch Zendesk Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.zendesk.com/pricing/" data-text="You will need a paid Zendesk account as currently Zendesk offers only paid plans. See Zendesk pricing for more information.">Do I need a free or paid Zendesk account?</li>
                                    <li class="lf-search-item" data-link="https://www.zendesk.com/login/" data-text="Start by logging into your Zendesk account. Once logged in, click your profile icon then 'view profile'. Next click 'Manage in Admin Center'. On the left sidebar, click 'Apps & Integrations', then 'Zendesk API'. If you have not created an API Token you will first need to create one by clicking 'Add API Token'. You can now copy your API Token. Be sure to click save before closing the window.">Where do I find my Zendesk API Token?</li>
                                    <li class="lf-search-item" data-link="null" data-text="This is the personal or business email address you use when logging into your Zendesk account.">Where do I find my Zendesk Account Email Address?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Replace 'yourcompanyname' in the following URL with the company name you provided when creating your Zendesk account. https://yourcompanyname.zendesk.com/">Where do I find my Zendesk Account Domain?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes.">How long does it take for the ticket to be created in Zendesk after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=JejJSzhIvpQ" data-text="Here's a step-by-step video to watch.">Watch Teamwork.com Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.teamwork.com/pricing/" data-text="You will need a paid Teamwork.com account. See Teamwork.com pricing for more information.">Do I need a free or paid Teamwork.com account?</li>
                                    <li class="lf-search-item" data-link="https://www.teamwork.com/launchpad/login" data-text="Start by logging into your Teamwork.com account. Once logged in, click the Teamwork.com Desk option. Next, click your profile icon, then 'view profile'. Lastly, click 'API Keys'. You can now copy your Teamwork.com API Key.">Where do I find my Teamwork.com API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.teamwork.com/launchpad/login" data-text="Start by logging into your Teamwork.com account. Once logged in, click the Teamwork.com Desk option. Next, click your profile icon, then 'Settings'. Lastly, click 'Site Settings'. Your Teamwork.com domain is labeled as 'Site Address'.">Where do I find my Teamwork.com domain?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes.">How long does it take for the ticket to be created in teamwork.com after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=zNH2bNFGjFE" data-text="Here's a step-by-step video to watch.">Watch Intercom Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.intercom.com/pricing" data-text="You will need a paid Intercom account as currently Intercom offers only paid plans. See Intercom pricing for more information.">Do I need a free or paid Intercom account?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Yes, in order to obtain your Intercom Access Token you will need to create an Intercom App.">Do I need to create an Intercom App?</li>
                                    <li class="lf-search-item" data-link="https://app.intercom.com/admins/sign_in" data-text="Start by logging into your Intercom account. Once logged in, hover over your profile icon then click 'Settings'. Next, click 'APPS & INTEGRATIONS' then 'Developer Hub'. Lastly, click 'New app', give your app a name, then 'Create app'.">How do I create an Intercom App?</li>
                                    <li class="lf-search-item" data-link="https://app.intercom.com/admins/sign_in" data-text="Your Intercom Access Token is found in the 'Developer Hub' section of your Intercom account. If you have not created your own Intercom app yet, please see the above Q&A tab. To find your Intercom Access Token, start by logging into your Intercom account. Once logged in, hover over your profile icon then click 'Settings'. Next, click 'APPS & INTEGRATIONS' then 'Developer Hub'. Lastly, click your Intercom App. You can now reveal your Intercom Access Token by clicking the 'eye icon'.">Where do I find my Intercom Access Token?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes.">How long does it take for the ticket to be created in Intercom after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=M2q2P_LsCJU" data-text="Here's a step-by-step video to watch.">Watch Zoho/Zohodesk Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.zoho.com/desk/pricing.html" data-text="You will need a paid Zohodesk account as currently Zohodesk offers only paid plans. See Zohodesk pricing for more information.">Do I need a free or paid Zohodesk account?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Yes, in order to obtain your Zohodesk Clåient Id and Client Secret you will need to create a Zoho App.">Do I need to create a Zohodesk App?</li>
                                    <li class="lf-search-item" data-link="https://app.intercom.com/admins/sign_in" data-text="No, Zoho automatically creates you a developer account when you create your Zoho account. You can use the same Zoho login credentials you use to sign into yout Zoho account.">Do I need to create a Zoho Developer Account?</li>
                                    <li class="lf-search-item" data-link="https://accounts.zoho.com/signin?servicename=AaaServer&context=&serviceurl=https%3A%2F%2Fapi-console.zoho.com%2Flogin" data-text="Start by logging into your Zohodesk Developer account. Once logged in, click the 'Zoho Creator' option then 'Add Client'. Next, choose 'Server-based Applications'. For the 'Client Name' enter 'Ticket' and in the 'Homepage URL' enter your websites URL. Lastly, for the 'Authorized Redirect URIs' replace 'yourwebsite.com' in the following URL. https://yourwebsite.com/wp-admin/admin.php?page=likeable-forms. Note: Be sure to click 'CREATE' before closing the window. You can now copy your Zohodesk Client Id and Client Secret.">How do I create a Zohodesk App?</li>
                                    <li class="lf-search-item" data-link="https://accounts.zoho.com/signin?servicename=AaaServer&context=&serviceurl=https%3A%2F%2Fapi-console.zoho.com%2Flogin" data-text="Start by logging into your Zohodesk Developer Account. Once logged in, click the App you created in the previous step. Lastly, click the 'Client Secret' tab to reveal your ZohoDesk Client Id and Client Secret.">Where do I find my Zohodesk Client Id and Client Secret?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes. ">How long does it take for the ticket to be created in Zohodesk after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=cL33tudG11M" data-text="Here's a step-by-step video to watch.">Watch LiveAgent Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.liveagent.com/pricing/" data-text="You will need a paid Liveagent account as currently Liveagent offers only paid plans. See LiveAgent pricing for more information.">Do I need a free or paid LiveAgent account?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Yes, liveagent.com does not automatically create API keys. Please select the 'How do I create my LiveAgent API Key?' option to learn more.">Do I need to create LiveAgent API Key?</li>
                                    <li class="lf-search-item" data-link="https://app.intercom.com/admins/sign_in" data-text="Start by logging into your Liveagent account. Once logged in, click the 'gear icon' in the left sidebar. Next, click 'System' then 'API', then 'Add API Key'. Delete/clear the expiration date time. Lastly, scroll down to Privileges and select the 'checked checkbox icon' and click create. You can now copy your API Key.">How do I create my LiveAgent API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.liveagent.com/login/" data-text="Your LiveAgent API Key is found in the 'API' section of your LiveAgent account. If you have not created your own LiveAgent API Key yet, please see the above Q&A tab. To find your Liveagent API Key, start by logging into your Liveagent account. Once logged in, click the 'gear icon' in the left sidebar. Next, click 'System' then 'API'. You can now copy your API Key.">Where do I find my LiveAgent API Key?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Replace 'yourcompanyname' in the following URL with the company name you provided when creating your LiveAgent.com account. URL: https://yourcompanyname.ladesk.com">Where do I find my Liveagent.com domain?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes.">How long does it take for the ticket to be created in LiveAgent after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=TYfhDSZ_61g" data-text="Here's a step-by-step video to watch.">Watch Enchant Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.enchant.com/pricing" data-text="You will need a paid Enchant account as currently Enchant offers only paid plans. See Enchant pricing for more information.">Do I need a free or paid Enchant account?</li>
                                    <li class="lf-search-item" data-link="https://app.enchant.com/ext/login" data-text="Start by logging into your Enchant account. In the bottom left admin bar select the 'gear icon', then 'apps' in the sidebar menu. Next select 'Add New App', then choose the 'API Custom API Access' option. Lastly, select 'Install Now', add an app name, then 'save'.">Where can I find my Enchant Auth Token?</li>
                                    <li class="lf-search-item" data-link="hhttps://app.enchant.com/ext/login" data-text="Start by logging into your Enchant account. In the bottom left admin bar select the 'gear icon', then 'general' in the sidebar menu. Your HelpDesk Id will be displayed at the top. Lastly, modify the following URL by replacing the word 'helpdeskid' with your HelpDesk Id https://helpdeskid.enchant.com/">Where can I find my Enchant domain?</li>
                                    <li class="lf-search-item" data-link="https://app.enchant.com/ext/login" data-text="Start by logging into your Enchant account. In the bottom left admin bar select the 'gear icon', then 'general' in the sidebar menu. Your HelpDesk Id will be displayed at the top. Lastly, modify the following URL by replacing the word 'helpdeskid' with your HelpDesk Id https://helpdeskid.enchant.com/">How long does it take for the ticket to be created in Enchant after the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=g9kXsmXS-WE" data-text="Here's a step-by-step video to watch.">Watch Active Campaign Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://help.activecampaign.com/hc/en-us/articles/207341950-What-is-my-account-name#:~:text=Your%20account%20name%20is%20part,page%20in%20your%20ActiveCampaign%20account." data-text="Here's an article published directly by Active Campaign on how to create and obtain your Active Campaign API Key.">Where do I find my Active Campaign API Key?</li>
                                    <li class="lf-search-item" data-link="https://help.activecampaign.com/hc/en-us/articles/207341950-What-is-my-account-name#:~:text=Your%20account%20name%20is%20part,page%20in%20your%20ActiveCampaign%20account." data-text="Please see Active Campaigns article on finding your account name.">Where do I find my Active Campaign account name?</li>
                                    <li class="lf-search-item" data-link="https://www.activecampaign.com/pricing" data-text="You will need a paid Active Campaign account as currently Active Campaign offers only paid plans. See Active Campaign pricing for more information.">Do I need a free or paid Active Campaign account?</li>
                                    <li class="lf-search-item" data-link="https://help.activecampaign.com/hc/en-us/articles/360000030559-How-to-create-a-list-in-ActiveCampaign" data-text="Yes, in order to add contacts and add subscribers to your Active Campaign lists, you first need to add one. Here's an article published directly by Active Campaign on how to create a list in Active Campaign.">Do I need to create a list in Active Campaign first?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It's recommended but optional.">Should I add a 'subscriber opt-in' checkbox to my form when adding contacts/subscribers to Active Campaign?</li>
                                    <li class="lf-search-item" data-link="https://help.activecampaign.com/hc/en-us/articles/360016659919-Add-a-double-opt-in-automation-to-your-ActiveCampaign-account#import-the-double-opt-in-automation-into-your-account-0-4" data-text="Here's an articles publish by Active Campaign on importing the double opt-in automation into your account.">How do I enable double opt-in for a list in Active Campaign?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=srt-Y2bjCvw" data-text="Here's a step-by-step video to watch.">Watch Campaign Monitor Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://help.campaignmonitor.com/s/article/api-keys" data-text="Here's an article published directly by Campaign Monitor on how to create and obtain your Campaign Monitor API Key.">Where do I find my Campaign Monitor API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.campaignmonitor.com/home?nab=1&utm_referrer=https%3A%2F%2Flikeableforms.com%2F" data-text="Login to your Campaign Monitor account. Once logged in click 'lists and subscribers'. Find your list and then click the list name. Lastly, click the 'settings link' and scroll down until you see your List API ID.">Where do I find my Campaign Monitor List Id?</li>
                                    <li class="lf-search-item" data-link="https://www.campaignmonitor.com/pricing/" data-text="You will need a paid Campaign Monitor account as currently Campaign Monitor offers only paid plans. See Campaign Monitor pricing for more information.">Do I need a free or paid Campaign Monitor account?</li>
                                    <li class="lf-search-item" data-link="https://help.createsend.com/admin/create-a-subscriber-list" data-text="Yes, in order to add contacts/subscribers to your Campaign Monitor lists, you first need to add one. Here's an article published directly by Campaign Monitor on how to create a subscriber list.">Should I add a 'subscriber opt-in' checkbox to my form when adding contacts/subscribers to Campaign Monitor?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It's recommended but optional.">Should I add a 'subscriber opt-in' checkbox to my form when adding contacts/subscribers to Campaign Monitor?</li>
                                    <li class="lf-search-item" data-link="https://help.createsend.com/admin/change-between-single-confirmed-opt-in" data-text="Here's an articles publish by Campaign Monitor on how to switch between single opt-in and double opt-in.">How do I enable double opt-in for a list in Campaign Monitor?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=4UKb6Tbf2yk" data-text="Here's a step-by-step video to watch.">Watch Email Octopus Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://help.emailoctopus.com/article/165-how-to-create-and-delete-api-keys" data-text="Here's an article published directly by EmailOctopus on how to create and obtain your EmailOctopus API Key.">Where do I find my EmailOctopus API Key?</li>
                                    <li class="lf-search-item" data-link="https://emailoctopus.com/pricing" data-text="This extension works with both. See EmailOctopus pricing for more information.">Do I need a free or paid EmailOctopus account?</li>
                                    <li class="lf-search-item" data-link="https://help.emailoctopus.com/article/205-how-to-create-a-list#:~:text=To%20create%20your%20list%2C%20start,it%20directly%20on%20the%20Dashboard." data-text="Yes, in order to add subscribers to your EmailOctopus lists, you first need to add one. Here's an article published directly by EmailOctopus on how to create lists.">Do I need to create a list EmailOctopus first?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It's recommended but optional.">Should I add a 'subscriber opt-in' checkbox in my form?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=7wpRdlJMoio" data-text="Here's a step-by-step video to watch.">Watch GetResponse Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.getresponse.com/help/where-do-i-find-the-api-key.html" data-text="Here's an article published directly by GetResponse on how to create and obtain your GetResponse API Key.">Where do I find my GetResponse API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.getresponse.com/pricing" data-text="You will need a paid GetResponse account as currently GetResponse offers only paid plans. See GetResponse pricing for more information.">Do I need a free or paid GetResponse account?</li>
                                    <li class="lf-search-item" data-link="https://www.getresponse.com/help/how-do-i-create-a-new-contact-list.html" data-text="Yes, in order to add contacts/subscribers to your GetResponse lists, you first need to add one. Here's an article published directly by GetResponse on how to create lists.">Do I need to create a list first?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It's recommended but optional.">Should I add a 'subscriber opt-in' checkbox to my form when adding contacts/subscribers to GetResponse?</li>
                                    <li class="lf-search-item" data-link="null" data-text="You do not need to enable or edit any settings inside of GetResponse to enable double opt-in. Simply enable double opt-in in the extensions settings and we will update your lists opt-in settings automatically.">How do I enable double opt-in for a list in GetResponse?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=ZVyWzhxdjoc" data-text="Here's a step-by-step video to watch.">Watch Mailchimp Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://mailchimp.com/help/about-api-keys/#Generate_an_API_key" data-text="Here's an article published directly by Mailchimp on how to obtain your MailChimp API Key.">Where do I find my Mailchimp API Key?</li>
                                    <li class="lf-search-item" data-link="https://mailchimp.com/pricing/marketing/" data-text="This extension works with both free or paid Mailchimp plans.">Do I need a free or paid Mailchimp account?</li>
                                    <li class="lf-search-item" data-link="https://mailchimp.com/help/create-audience/" data-text="Yes, in order for you to add subscribers to your Mailchimp audiences, you first need to create one. See creating a mailchimp audience.">Do I need to create an audience in Mailchimp first?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It typically ranges between instant to several minutes.">How long does it take for the subscriber to be added to my Mailchimp audience once the form has been submitted?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It's recommended but optional.">Should I add a 'subscriber opt-in' checkbox to my form when adding contacts/subscribers to Mailchimp?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=DH6ulXJ-5C8" data-text="Here's a step-by-step video to watch.">Watch Mailjet Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://app.mailjet.com/signin" data-text="You can simply visit this link and login to your Mailjet account. Or for step-by-step instructions you can log into your Mailjet account, hover over the settings icon, click account settings, and lastly click the API Key Management (Primary and Sub-account) link.">Where do I find my Mailjet API Key & API Secret Key?</li>
                                    <li class="lf-search-item" data-link="https://www.mailjet.com/pricing/" data-text="This extension work with both free and paid Mailjet plans.">Do I need a free or paid Mailjet account?</li>
                                    <li class="lf-search-item" data-link="https://documentation.mailjet.com/hc/en-us/articles/360042503014-Managing-your-contact-lists#:~:text=your%20recipient%20lists.-,Create%20a%20Contact%20List,Enter%20a%20contact%20list%20name." data-text="Yes, in order to add contacts and add subscribers to your Mailjet lists, you first need to add one. Here's an article published directly by Mailjet on how to create a contact list in Mailjet.">Do I need to create a contact list in Mailjet first?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It's recommended but optional.">Should I add a 'subscriber opt-in' checkbox to my form when adding contacts/subscribers to Mailjet?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=BI7SvaM_6Sw" data-text="Here's a step-by-step video to watch.">Watch Mailmodo Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://support.mailmodo.com/articles/878092-how-to-get-the-mmapi-key-form-id-and-campaign-id" data-text="Here's an article published directly by Mailmodo on how to obtain your Mailmodo API Key.">Where do I find my Mailmodo API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.mailmodo.com/pricing/" data-text="You will need a paid Mailmodo account as currently Mailmodo offers only paid plans. See mailmodo pricing for more information.">Do I need a free or paid Mailmodo account?</li>
                                    <li class="lf-search-item" data-link="https://support.mailmodo.com/articles/487356-how-to-create-lists" data-text="Yes, in order to add subscribers to your Mailmodo lists, you first need to add one. Here's an article published directly by Mailmodo on how to create lists.">Do I need to create a list in Mailmodo first?</li>
                                    <li class="lf-search-item" data-link="null" data-text="No, all of the subscriber fields are optional apart from the email field. The subscriber email field is required.">Do I need to map all of the subscriber Mailjet extension fields data?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=yaSaLJPhZOQ" data-text="Here's a step-by-step video to watch.">Watch Omnisend Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://support.omnisend.com/en/articles/1061890-generating-api-key" data-text="Here's an article published directly by Omnisend on how to create and obtain your Omnisend API Key.">Where do I find my Omnisend API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.omnisend.com/pricing/" data-text="This extension works with both free or paid Omnisend plans.">Do I need a free or paid Omnisend account?</li>
                                    <li class="lf-search-item" data-link="https://support.omnisend.com/en/articles/1061818-welcome-email-automation#h_4156b5e9a5" data-text="Here's an article published directly by Omnisend on creating automated welcome emails.">How do I setup a welcome email in Omnisend?</li>
                                    <li class="lf-search-item" data-link="https://support.omnisend.com/en/articles/1061818-welcome-email-automation#h_4156b5e9a5" data-text="Sending a welcome SMS is the same as setting up welcome emails. Here's an article published directly by Omnisend on creating automated welcome emails and automated SMS.">How do I setup a welcome SMS in Omnisend?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=2_6Rlq9z6u0" data-text="Here's a step-by-step video to watch.">Watch SendGrid Email Marketing Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://docs.sendgrid.com/ui/account-and-settings/api-keys#:~:text=Navigate%20to%20Settings%20on%20the,and%20then%20select%20API%20Keys." data-text="Here's an article published directly by SendGrid on how to create and obtain your SendGrid API Key.">Where do I find my SendGrid API Key?</li>
                                    <li class="lf-search-item" data-link="https://sendgrid.com/en-us/pricing" data-text="This extension work with both free and paid SendGrid plans.">Do I need a free or paid SendGrid account?</li>
                                    <li class="lf-search-item" data-link="https://sendgrid.com/" data-text="Yes, in order to add contacts and add subscribers to your SendGrid lists, you first need to add one. Start by logging in to your SendGrid account. Once logged in, click 'marketing' then 'contacts'. Lastly, click the 'create' button and give your new list a name.">Do I need to create a list in SendGrid first?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It's recommended but optional.">Should I add a 'subscriber opt-in' checkbox to my form when adding contacts/subscribers to SendGrid?</li>
                                    <li class="lf-search-item" data-link="https://docs.sendgrid.com/ui/sending-email/getting-started-with-automation" data-text="You will need to create an automation. Here is an article publish by SendGrid on getting start with automation for more information.">How do I automatically send an email to a new contact with SendGrid?</li>
                                    <li class="lf-search-item" data-link="https://sendgrid.com/en-us/pricing" data-text="At least a free plan. See SendGrid's Marketing Campaigns Plans for more information.">Which plan do I need to use SendGrid's automation features?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=UXQOs7m9rBs" data-text="Here's a step-by-step video to watch.">Watch Sendinblue Email Marketing Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://developers.brevo.com/docs/getting-started" data-text="Here's an article published directly by Sendinblue on how to create and obtain your Sendinblue API Key.">Where do I find my Sendinblue API Key?</li>
                                    <li class="lf-search-item" data-link="https://www.brevo.com/pricing/" data-text="This extension work with both free and paid Sendinblue plans.">Do I need a free or paid Sendinblue account?</li>
                                    <li class="lf-search-item" data-link="https://help.brevo.com/hc/en-us/articles/4413566705298-Create-an-email-campaign#:~:text=%F0%9F%93%9D%20Create%20your%20campaign,an%20email%20campaign%20page%20opens." data-text="Yes, in order to send automated emails and SMS to contacts, you need to first add one. Here is an article publish by Sendinblue on how to create a campaign. Or for step-by-step instructions you can start by logging in to your Sendinblue now (Brevo) account. Once logged in, click 'lists' then 'email' then 'create a campaign'. Select your 'campaign type' then 'use this automation'. Lastly, select your contact list and click 'use automation'.">Do I need to create a campaign in Sendinblue first?</li>
                                    <li class="lf-search-item" data-link="https://www.brevo.com/pricing/" data-text="At least a free plan. See Sendinblue's Marketing Platform Plans for more information.">Which plan do I need to use Sendinblue's automation features?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=Nxv1DcXPNoI" data-text="Here's a step-by-step video to watch.">Watch AWS SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html" data-text="Here's an article published directly by AWS on how to obtain your AWS SMTP Credentials.">Where do I find my AWS SMTP credentials?</li>
                                    <li class="lf-search-item" data-link="https://aws.amazon.com/ses/" data-text="It varies from account to account. To locate your AWS SMTP endpoint, start by logging into your AWS SES account. Lastly, click 'SMTP' from the left-hand side admin bar.">What is the AWS SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="AWS currently recommends port 587.">Which port should I use for AWS SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="AWS currently recommends 'TLS'.">Which protocol should I use for AWS SMTP?</li>
                                    <li class="lf-search-item" data-link="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see creating and verifying identities in Amazon SES.">Do I need to verify my domain with AWS? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://aws.amazon.com/ses/pricing/" data-text="AWS offers a pay-as-you-go plan. See AWS SES pricing for more information.">Do I need a free or paid AWS SES account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=MkPjZeTrwdk" data-text="Here's a step-by-step video to watch.">Watch Elastic Email SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://help.elasticemail.com/en/articles/4803409-smtp-settings" data-text="Here's an article published directly by Elastic Email on how to obtain your Elastic Email SMTP Credentials.">Where do I find my Elastic Email SMTP credentials?</li>
                                    <li class="lf-search-item" data-link="null" data-text="You can either use smtp.elasticemail.com or smtp25.elasticemail.com">What is the Elastic Email SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Elastic Email currently recommends port 587.">Which port should I use for Elastic Email SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Elastic Email currently recommends 'TLS'.">Which protocol should I use for Elastic Email SMTP?</li>
                                    <li class="lf-search-item" data-link="https://help.elasticemail.com/en/articles/4934400-how-to-verify-your-domain" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see how to verify your domain.">Do I need to verify my domain with Elastic Email? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://elasticemail.com/email-api-pricing" data-text="This extension works with both free and paid plans. See Elastic Email SMTP pricing for more information.">Do I need a free or paid Elastic Email account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=G5RuYePrFPE" data-text="Here's a step-by-step video to watch.">Watch MailerSend SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://www.mailersend.com/help/smtp-relay" data-text="Here's an article published directly by Mailersend on how to obtain your Mailersend SMTP Credentials.">Where do I find my Mailersend SMTP credentials?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It is smtp.mailersend.net">What is the Mailersend SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Mailersend currently recommends port 587">Which port should I use for MailerSend SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Mailersend currently recommends 'TLS'.">Which protocol should I use for Mailersend SMTP?</li>
                                    <li class="lf-search-item" data-link="https://www.mailersend.com/help/how-to-verify-and-authenticate-a-sending-domain" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see How to add and verify your sending domain.">Do I need to verify my domain with MailerSend? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://www.mailersend.com/pricing" data-text="This extension works with both free and paid plans. See Mailersend SMTP pricing for more information.">Do I need a free or paid Mailersend account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=DzbGuBqnQjE" data-text="Here's a step-by-step video to watch.">Watch Mailgun SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://help.mailgun.com/hc/en-us/articles/203409084-How-Do-I-Create-Additional-SMTP-Credentials" data-text="Here's an article published directly by Mailgun on how to create your Mailgun SMTP Credentials.">Where do I find my Mailersend SMTP credentials?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It is smtp.mailgun.org">What is the Mailgun SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Mailgun currently recommends port 587.">Which port should I use for Mailgun SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Mailgun currently recommends 'TLS'.">Which protocol should I use for Mailgun SMTP?</li>
                                    <li class="lf-search-item" data-link="https://help.mailgun.com/hc/en-us/articles/360026833053-Domain-Verification-Walkthrough" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see Domain Verification Walkthrough.">Do I need to verify my domain with Mailgun? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://www.mailgun.com/pricing/" data-text="You will need a paid Mailgun account as currently Mailgun only offers paid plans. See Mailgun SMTP pricing for more information.">Do I need a free or paid Mailgun account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=bp6JQw5pOAg" data-text="Here's a step-by-step video to watch.">Watch Mailjet SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://documentation.mailjet.com/hc/en-us/articles/360043229473-How-can-I-configure-my-SMTP-parameters" data-text="Here's an article published directly by Mailjet on how to find your Mailjet SMTP Credentials.">Where do I find my Mailjet SMTP credentials?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It is in-V3.mailjet.com">What is the Mailjet SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Mailjet currently recommends port 587.">Which port should I use for Mailjet SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Mailjet currently recommends 'TLS'.">Which protocol should I use for Mailjet SMTP?</li>
                                    <li class="lf-search-item" data-link="https://documentation.mailjet.com/hc/en-us/articles/360042561594-How-to-validate-an-entire-sending-domain" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see Domain Verification Walkthrough.">Do I need to verify my domain with Mailjet? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://www.mailjet.com/pricing/" data-text="This extension works with both free and paid plan. See Mailjet SMTP pricing for more information.">Do I need a free or paid Mailgun account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=8HD0V-ESEf4" data-text="Here's a step-by-step video to watch.">Watch Mailtrap SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://help.mailtrap.io/article/5-smtp-integration" data-text="Here's an article published directly by Mailtrap on how to create your Mailtrap SMTP Credentials.">Where do I find my Mailtrap SMTP credentials?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It is smtp.mailtrap.io">What is the Mailtrap SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Mailtrap currently recommends port 587.">Which port should I use for Mailtrap SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Mailtrap currently recommends 'TLS'.">Which protocol should I use for Mailtrap SMTP?</li>
                                    <li class="lf-search-item" data-link="https://help.mailtrap.io/article/69-sending-domain-setup" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see Domain Verification Walkthrough.">Do I need to verify my domain with Mailtrap? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://mailtrap.io/pricing/" data-text="This extension works for both free and paid Mailtrap plans.">Do I need a free or paid Mailtrap account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=WHDkcC3jVOo" data-text="Here's a step-by-step video to watch.">Watch Postmark SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://postmarkapp.com/developer/user-guide/send-email-with-smtp" data-text="Here's an article published directly by Postmark on how to obtain your Postmark SMTP Credentials.">Where do I find my Postmark credentials?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It is smtp.postmarkapp.com">What is the Postmark SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Postmark currently recommends port 587.">Which port should I use for Postmark SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Postmark currently recommends 'TLS'.">Which protocol should I use for Postmark SMTP?</li>
                                    <li class="lf-search-item" data-link="https://postmarkapp.com/support/article/1046-how-do-i-verify-a-domain" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see Domain Verification Walkthrough.">Do I need to verify my domain with Postmark? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://postmarkapp.com/pricing" data-text="This extension works for both free and paid Postmark plans.">Do I need a free or paid Postmark account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=qxmgE8O6_UE" data-text="Here's a step-by-step video to watch.">Watch SendGrid SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://docs.sendgrid.com/ui/account-and-settings/api-keys#creating-an-api-key" data-text="Here's an article published directly by SendGrid on how to create your SendGrid API Key.">Where do I find my SendGrid API Key credentials?</li>
                                    <li class="lf-search-item" data-link="null" data-text="All SMTP usernames for sending email with SendGrid SMTP are identical. The SMTP username is the word apikey' minus the quotation marks.">What is the SendGrid SMTP username?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It is smtp.sendgrid.net">What is the SendGrid SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="SendGrid currently recommends port 587.">Which port should I use for SendGrid SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="SendGrid currently recommends 'TLS'.">Which protocol should I use for SendGrid SMTP?</li>
                                    <li class="lf-search-item" data-link="https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see Domain Verification Walkthrough.">Do I need to verify my domain with SendGrid?? If so, how do I verify my domain</li>
                                    <li class="lf-search-item" data-link="https://sendgrid.com/en-us/pricing" data-text="This extension works for both free and paid SendGrid email API plans.">Do I need a free or paid SendGrid account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=Pt6L8nqE6Z0" data-text="Here's a step-by-step video to watch.">Watch Sendinblue SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://login.brevo.com/" data-text="You can obtain your Sendinblue now (Brevo) SMTP credentials by logging into your Sendinblue account. Once logged in, select your 'account username' from the main navigation menu, then 'SMTP & API' from the dropdown.">Where do I find my Sendinblue SMTP credentials?</li>
                                    <li class="lf-search-item" data-link="https://login.brevo.com/" data-text="Currently Sendinblue does not generate an API Key for SMTP accounts and instead uses your account email as the username. You can locate your account email address in the SMTP & API section of your account. Start by logging into your Sendinblue account. Once logged in, select your 'account username' from the main navigation menu, then 'SMTP & API' from the dropdown. This will reveal your account username.">What is the Sendinblue SMTP username?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It is smtp-relay.sendinblue.com">What is the Sendinblue SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Sendinblue currently recommends port 587.">Which port should I use for Sendinblue SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="Sendinblue currently recommends 'TLS'.">Which protocol should I use for Sendinblue SMTP?</li>
                                    <li class="lf-search-item" data-link="https://help.brevo.com/hc/en-us/articles/115000185270-White-Label-Verify-your-domain-to-approve-new-senders-automatically-Brevo-code" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see Domain Verification Walkthrough.">Do I need to verify my domain with Sendinblue? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://www.brevo.com/pricing/" data-text="Sendinblue currently offers a pay-as-you-go plan. See Sendinblue now (Brevo) pricing for more information.">Do I need a free or paid Sendinblue account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=deAl3Pux8LE" data-text="Here's a step-by-step video to watch.">Watch Zoho/ZeptoMail SMTP Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://accounts.zoho.com/signin?servicename=transmail&serviceurl=https://zeptomail.zoho.com#dashboard/setupDetail" data-text="To locate your SMTP Password, start by visiting your Setup Info section, then by selecting 'SMTP'. Your SMTP Password is labeled as Send Mail token 1. SMTP usernames are the same for everyone. Simply copy & paste the word 'emailapikey' into the SMTP username field.">Where do I find my ZeptoMail SMTP credentials?</li>
                                    <li class="lf-search-item" data-link="null" data-text="It is smtp.zeptomail.com">What is the ZeptoMail SMTP endpoint?</li>
                                    <li class="lf-search-item" data-link="null" data-text="ZeptoMail currently recommends port 587.">Which port should I use for Zoho/Zeptomail SMTP?</li>
                                    <li class="lf-search-item" data-link="null" data-text="ZeptoMail currently recommends protocol 'TLS'.">Which protocol should I use for Zoho/Zeptomail SMTP?</li>
                                    <li class="lf-search-item" data-link="https://www.zoho.com/zeptomail/help/domains.html" data-text="This is a required step in ensuring email deliverability. To see how to verify your domain, please see Domain Addition & Verification">Do I need to verify my domain with Zoho/Zeptomail? If so, how do I verify my domain?</li>
                                    <li class="lf-search-item" data-link="https://www.zoho.com/zeptomail/pricing.html" data-text="ZeptoMail currently offers plans in the form of credits. See ZeptoMail pricing for more information.">Do I need a free or paid ZeptoMail account?</li>
                                    <li class="lf-search-item" data-link="https://www.youtube.com/watch?v=eEIHt5tam3s" data-text="Here's a step-by-step video to watch.">Watch Twilio Video Tutorial</li>
                                    <li class="lf-search-item" data-link="https://help.twilio.com/articles/14726256820123-What-is-a-Twilio-Account-SID-and-where-can-I-find-it" data-text="Start by logging into your Twilio account. Once logged in, scroll down to the 'Account Info' section. Alternatively, here's an article published directly by Twilio on how to obtain your Twilio Account SID & Auth Token.">Where do I find my Twilio Account SID and Auth Token?</li>
                                    <li class="lf-search-item" data-link="https://www.twilio.com/login" data-text="Your Twilio phone number is located in the same section as your Account SID and Auth Token. To find your Twilio phone number, start by logging into your Twilio account. Once logged in, scroll down to the 'Account Info' section.">Where do I find my Twilio phone number?</li>
                                    <li class="lf-search-item" data-link="https://www.twilio.com/en-us/sms/pricing-2/us?adobe_mc_ref=https%3A%2F%2Fwww.twilio.com%2Fen-us%2Fpricing%2Fmessaging" data-text="Twilio offers pay-as-you-go pricing. See Twilio SMS & MMS pricing for more information.">Do I need a free of paid Twilio account?</li>
                                    <li class="lf-search-item" data-link="https://www.twilio.com/en-us/blog/introducing-the-messaging-feedback-api-html" data-text="Enabling the Twilio messaging feedback API shares transactional data with the Twilio global network. Here is a full article published by Twilio regarding the messaging feedback API.">What is the Twilio messaging feedback API?</li>
                                    <li class="lf-search-item" data-link="null" data-text="This option is not required and will not prevent your SMS & MMS messages from being delivered.">Is enabling the Twilio messaging feedback API option required?</li>
                                </ul>
                        </div>
                    </div>
