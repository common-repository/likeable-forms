(function (d) {
    "use strict";
    // Global Variables
    var currentDropZone = "";
    var droppableAreaTarget = "blank";
    var increment = 1;
    var counter = 1;
    var lfDataFieldAttributesObject = [];
    var lfStringifiedDataFieldAttributes;
    var lfFormTitlesArray = [];
    var formTitle;
    var duplicatorDrop;
    var duplicated = "false";
    var arrOfCurrentIncrements = [];
    var existingForm;
    var lfCurrentFormId;
    var lfSiteIconUrl = lfEditorData.lfIcon;
    var lfPluginDirectory = lfEditorData.lfPluginUrl;
    var lfAssetsDirectory = lfPluginDirectory + "assets/";
    var lfSearchJson = lfEditorData.lfSearch;


    // Determines if clicked or dragged
    var drag = false;
    d.addEventListener(
        'mousedown', () => drag = false);


    d.addEventListener(
        'mousemove', () => drag = true);


    // ------------------------------------------------------------------------------------------------------------------------- LF New Field Switch
    // Determines which field to create
    d.addEventListener("click", function (event) {
        if (event.target.className == "lf-field" && drag !== "true") {
            var theID = event.target.id;

            switch (theID) {
                case "lf_Add_Email":
                    lfAddEmail();
                    break;

                case "lf_Add_Textarea":
                    lfAddTextarea();
                    break;

                case "lf_Add_Pass":
                    lfAddPass();
                    break;

                case "lf_Add_Text":
                    lfAddText();
                    break;

                case "lf_Add_File":
                    lfAddFile();
                    break;

                case "lf_Add_Number":
                    lfAddNumber();
                    break;

                case "lf_Add_Date":
                    lfAddDate();
                    break;

                case "lf_Add_Radio":
                    lfAddRadio();
                    break;

                case "lf_Add_Checkbox":
                    lfAddCheckbox();
                    break;

                case "lf_Add_Phone":
                    lfAddPhone();
                    break;

                case "lf_Add_Url":
                    lfAddUrl();
                    break;

                case "lf_Add_Files":
                    lfAddFiles();
                    break;

                case "lf_Add_Dropdown":
                    lfAddDropdown();
                    break;

                case "lf_Add_Single_Product":
                    lfAddSingleProduct();
                    break;

                case "lf_Add_Multiple_Products":
                    lfAddMultipleProducts();
                    break;
                default:
            }
        }
    });


    // ------------------------------------------------------------------------------------------------------------------------- LF New Field Creator Functions
    // Creates Email Field
    function lfAddEmail() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");
        var lfHelperText = d.createElement("TEXT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Email";
        lfInputField.setAttribute("type", "email");
        lfInputField.setAttribute("autocomplete", "off");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfInputField.placeholder = "emailaddress@url.com";
        lfInputField.classList.add("lf-input");
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "Email Address";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfHelperText.textContent = "Description";
        lfFieldLabel.classList.add("lf-field-label");
        lfHelperText.classList.add("lf-field-description");
        lfFieldLabel.contentEditable = "true";
        lfHelperText.contentEditable = "true";
        lfFieldLetter.textContent = "E";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddEmail");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "3");
        lfFieldContainer.setAttribute("data-max-length", "254");
        lfFieldContainer.setAttribute("data-placeholder", "emailaddress@url.com");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates TextArea Field
    function lfAddTextarea() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("TEXTAREA");
        var lfHelperText = d.createElement("TEXT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Textarea";
        lfInputField.setAttribute("type", "text");
        lfInputField.setAttribute("autocomplete", "off");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfInputField.placeholder = "type here...";
        lfInputField.classList.add("lf-input");
        lfInputField.setAttribute("rows", "5");
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "Textarea";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfHelperText.textContent = "Description";
        lfFieldLabel.classList.add("lf-field-label");
        lfHelperText.classList.add("lf-field-description");
        lfFieldLabel.contentEditable = "true";
        lfHelperText.contentEditable = "true";
        lfFieldLetter.textContent = "T";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddTextarea");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "0");
        lfFieldContainer.setAttribute("data-max-length", "2000");
        lfFieldContainer.setAttribute("data-placeholder", "type here...");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Password Field
    function lfAddPass() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");
        var lfHelperText = d.createElement("TEXT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Pass";
        lfInputField.setAttribute("type", "password");
        lfInputField.setAttribute("autocomplete", "off");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfInputField.placeholder = "••••••••••";
        lfInputField.classList.add("lf-input");
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "Password";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfHelperText.textContent = "Description";
        lfFieldLabel.classList.add("lf-field-label");
        lfHelperText.classList.add("lf-field-description");
        lfFieldLabel.contentEditable = "true";
        lfHelperText.contentEditable = "true";
        lfFieldLetter.textContent = "P";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddPass");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "8");
        lfFieldContainer.setAttribute("data-max-length", "64");
        lfFieldContainer.setAttribute("data-placeholder", "••••••••••");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Text Field
    function lfAddText() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");
        var lfHelperText = d.createElement("TEXT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Text";
        lfInputField.setAttribute("type", "text");
        lfInputField.setAttribute("autocomplete", "off");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfInputField.placeholder = "Enter Text";
        lfInputField.classList.add("lf-input");
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "Text";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfHelperText.textContent = "Description";
        lfFieldLabel.classList.add("lf-field-label");
        lfHelperText.classList.add("lf-field-description");
        lfFieldLabel.contentEditable = "true";
        lfHelperText.contentEditable = "true";
        lfFieldLetter.textContent = "T";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddText");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "0");
        lfFieldContainer.setAttribute("data-max-length", "128");
        lfFieldContainer.setAttribute("data-placeholder", "Enter Text");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates File Upload Field
    function lfAddFile() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");

        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "File";
        lfInputField.setAttribute("type", "file");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfInputField.classList.add("lf-input");
        lfInputField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-add-file-icon.png" + ");";
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "File Upload";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfFieldLabel.classList.add("lf-field-label");
        lfFieldLabel.contentEditable = "true";
        lfFieldLetter.textContent = "F";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddFile");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "0");
        lfFieldContainer.setAttribute("data-max-length", "2000");
        lfFieldContainer.setAttribute("data-placeholder", "File");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        lfInputField.disabled = true;
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Number Field
    function lfAddNumber() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");
        var lfHelperText = d.createElement("TEXT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Number";
        lfInputField.setAttribute("type", "number");
        lfInputField.setAttribute("autocomplete", "off");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfInputField.placeholder = "0";
        lfInputField.classList.add("lf-input");
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "Number";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfHelperText.textContent = "Description";
        lfFieldLabel.classList.add("lf-field-label");
        lfHelperText.classList.add("lf-field-description");
        lfFieldLabel.contentEditable = "true";
        lfHelperText.contentEditable = "true";
        lfFieldLetter.textContent = "N";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddNumber");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "0");
        lfFieldContainer.setAttribute("data-max-length", "1000000000");
        lfFieldContainer.setAttribute("data-placeholder", "0");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Date Field
    function lfAddDate() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");
        var lfHelperText = d.createElement("TEXT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Date";
        lfInputField.setAttribute("type", "date");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfInputField.placeholder = "mm/dd/yyyy";
        lfInputField.classList.add("lf-input");
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "Date";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfHelperText.textContent = "Description";
        lfFieldLabel.classList.add("lf-field-label");
        lfHelperText.classList.add("lf-field-description");
        lfFieldLabel.contentEditable = "true";
        lfHelperText.contentEditable = "true";
        lfFieldLetter.textContent = "D";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddDate");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "0");
        lfFieldContainer.setAttribute("data-max-length", "2000");
        lfFieldContainer.setAttribute("data-placeholder", "mm/dd/yyyy");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Radio Field
    function lfAddRadio() {
        var lfFieldType = "Radio";

        var localCounter = 0;

        var lfFieldContainer = d.createElement("DIV");
        lfFieldContainer.draggable = false;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddRadio");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-max-radio-count", "2");
        lfFieldContainer.setAttribute("data-static-type", "Radio");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");

        var lfFieldLabel = d.createElement("Label");
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfFieldLabel.classList.add("lf-field-label");
        lfFieldLabel.textContent = "Radio Buttons";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfFieldLabel.contentEditable = "true";

        var lfRadioFieldUl = d.createElement("ul");
        lfRadioFieldUl.id = 'lf_Ul_Container_' + increment;
        lfRadioFieldUl.classList.add("lf-input-radio-ul");
        lfRadioFieldUl.setAttribute("data-increment", increment);

        var lfHelperText = d.createElement("TEXT");
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfHelperText.classList.add("lf-field-description");
        lfHelperText.textContent = "Description";
        lfHelperText.contentEditable = "true";

        var lfCreateDropZone = d.createElement("DIV");
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfCreateDropZone.classList.add("lf-drop-items");

        var lfFieldLetter = d.createElement("SPAN");
        lfFieldLetter.textContent = "R";
        lfFieldLetter.classList.add("lf-field-letter");


        // Creates (3) Radio Options
        for (var i = 0; i < 3; i++) {
            var lfRadioFieldli = d.createElement("li");
            lfRadioFieldli.id = "lf_Li_" + increment + "_" + localCounter;
            lfRadioFieldli.classList.add("lf-input-radio-li");
            lfRadioFieldli.setAttribute("data-increment", localCounter);


            var lfRadioInput = d.createElement("INPUT");
            lfRadioInput.setAttribute("type", "radio");
            lfRadioInput.id = "lf_input_" + increment + "_" + localCounter;
            lfRadioInput.classList.add("lf-input-radio");
            lfRadioInput.setAttribute("name", "lf_radio_group_" + increment);
            lfRadioInput.setAttribute("data-row-id", increment + "_" + localCounter);
            lfRadioInput.setAttribute("data-name", "lf_radio_group_" + increment);
            lfRadioInput.setAttribute("data-is-checked", "false");


            var lfRadioLabel = d.createElement("Label");
            lfRadioLabel.id = "lf_Radio_Label_Option_" + increment + "_" + localCounter;
            lfRadioLabel.htmlFor = "lf_input_" + increment;
            lfRadioLabel.classList.add("lf-radio-label");
            lfRadioLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            lfRadioLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            lfRadioLabel.contentEditable = "true";
            lfRadioLabel.textContent = "Option";


            var lfAddNewRadio = d.createElement("button");
            lfAddNewRadio.setAttribute("type", "button");
            lfAddNewRadio.id = "lf_Add_Radio_" + increment + "_" + localCounter;
            lfAddNewRadio.classList.add("lf-add-radio");
            lfAddNewRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            lfAddNewRadio.setAttribute("data-radio-count", localCounter);
            lfAddNewRadio.setAttribute("data-field-increment", increment);


            var lfRemoveRadio = d.createElement("button");
            lfRemoveRadio.setAttribute("type", "button");
            lfRemoveRadio.id = "lf_Minus_Radio_" + increment + "_" + localCounter;
            lfRemoveRadio.classList.add("lf-minus-radio");
            lfRemoveRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            lfRemoveRadio.setAttribute("data-radio-count", localCounter);
            lfRemoveRadio.setAttribute("data-field-increment", increment);


            lfRadioFieldli.append(lfRadioInput);
            lfRadioFieldli.append(lfRadioLabel);
            lfRadioFieldli.append(lfAddNewRadio);
            lfRadioFieldli.append(lfRemoveRadio);
            lfRadioFieldUl.append(lfRadioFieldli);


            localCounter++;
        }


        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfRadioFieldUl);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);

        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Checkbox Field
    function lfAddCheckbox() {
        var lfFieldType = "Checkbox";

        var localCounter = 0;

        var lfFieldContainer = d.createElement("DIV");
        lfFieldContainer.draggable = false;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddCheckbox");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-max-checkbox-count", "2");
        lfFieldContainer.setAttribute("data-static-type", "Checkbox");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");

        var lfFieldLabel = d.createElement("Label");
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfFieldLabel.classList.add("lf-field-label");
        lfFieldLabel.textContent = "Checkboxes";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfFieldLabel.contentEditable = "true";

        var lfCheckboxFieldUl = d.createElement("ul");
        lfCheckboxFieldUl.id = 'lf_Ul_Container_' + increment;
        lfCheckboxFieldUl.classList.add("lf-input-checkbox-ul");
        lfCheckboxFieldUl.setAttribute("data-increment", increment);

        var lfHelperText = d.createElement("TEXT");
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfHelperText.classList.add("lf-field-description");
        lfHelperText.textContent = "Description";
        lfHelperText.contentEditable = "true";

        var lfCreateDropZone = d.createElement("DIV");
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfCreateDropZone.classList.add("lf-drop-items");

        var lfFieldLetter = d.createElement("SPAN");
        lfFieldLetter.textContent = "C";
        lfFieldLetter.classList.add("lf-field-letter");


        // Creates (3) Checkbox Options
        for (var i = 0; i < 3; i++) {
            var lfCheckboxFieldli = d.createElement("li");
            lfCheckboxFieldli.id = "lf_Li_" + increment + "_" + localCounter;
            lfCheckboxFieldli.classList.add("lf-input-checkbox-li");
            lfCheckboxFieldli.setAttribute("data-increment", localCounter);


            var lfCheckboxInput = d.createElement("INPUT");
            lfCheckboxInput.setAttribute("type", "checkbox");
            lfCheckboxInput.id = "lf_input_" + increment + "_" + localCounter;
            lfCheckboxInput.classList.add("lf-input-checkbox");
            lfCheckboxInput.setAttribute("name", "lf_checkbox_group_" + increment);
            lfCheckboxInput.setAttribute("data-row-id", increment + "_" + localCounter);
            lfCheckboxInput.setAttribute("data-name", "lf_checkbox_group_" + increment);
            lfCheckboxInput.setAttribute("data-is-checked", "false");


            var lfCheckboxLabel = d.createElement("Label");
            lfCheckboxLabel.id = "lf_Checkbox_Label_Option_" + increment + "_" + localCounter;
            lfCheckboxLabel.htmlFor = "lf_input_" + increment;
            lfCheckboxLabel.classList.add("lf-checkbox-label");
            lfCheckboxLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            lfCheckboxLabel.contentEditable = "true";
            lfCheckboxLabel.textContent = "Option";
            lfCheckboxLabel.value = "Option";


            var lfAddNewCheckbox = d.createElement("button");
            lfAddNewCheckbox.setAttribute("type", "button");
            lfAddNewCheckbox.id = "lf_Add_Checkbox_" + increment + "_" + localCounter;
            lfAddNewCheckbox.classList.add("lf-add-checkbox");
            lfAddNewCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            lfAddNewCheckbox.setAttribute("data-checkbox-count", localCounter);
            lfAddNewCheckbox.setAttribute("data-field-increment", increment);


            var lfRemoveCheckbox = d.createElement("button");
            lfRemoveCheckbox.setAttribute("type", "button");
            lfRemoveCheckbox.id = "lf_Minus_Checkbox_" + increment + "_" + localCounter;
            lfRemoveCheckbox.classList.add("lf-minus-checkbox");
            lfRemoveCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            lfRemoveCheckbox.setAttribute("data-checkbox-count", localCounter);
            lfRemoveCheckbox.setAttribute("data-field-increment", increment);


            lfCheckboxFieldli.append(lfCheckboxInput);
            lfCheckboxFieldli.append(lfCheckboxLabel);
            lfCheckboxFieldli.append(lfAddNewCheckbox);
            lfCheckboxFieldli.append(lfRemoveCheckbox);
            lfCheckboxFieldUl.append(lfCheckboxFieldli);


            localCounter++;
        }


        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfCheckboxFieldUl);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);

        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Phone Field
    function lfAddPhone() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");
        var lfHelperText = d.createElement("TEXT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Phone";
        lfInputField.setAttribute("type", "tel");
        lfInputField.setAttribute("autocomplete", "off");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfInputField.placeholder = "999-999-9999";
        lfInputField.classList.add("lf-input");
        lfInputField.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "Phone";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfHelperText.textContent = "Description";
        lfFieldLabel.classList.add("lf-field-label");
        lfHelperText.classList.add("lf-field-description");
        lfFieldLabel.contentEditable = "true";
        lfHelperText.contentEditable = "true";
        lfFieldLetter.textContent = "P";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddPhone");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "7");
        lfFieldContainer.setAttribute("data-max-length", "15");
        lfFieldContainer.setAttribute("data-placeholder", "999-999-9999");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates URL field
    function lfAddUrl() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");
        var lfHelperText = d.createElement("TEXT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Url";
        lfInputField.setAttribute("type", "url");
        lfInputField.setAttribute("autocomplete", "off");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input_" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfInputField.placeholder = "https://www.url.com";
        lfInputField.classList.add("lf-input");
        lfCreateDropZone.classList.add("lf-drop-items");
        lfFieldLabel.textContent = "Website URL";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfHelperText.textContent = "Description";
        lfFieldLabel.classList.add("lf-field-label");
        lfHelperText.classList.add("lf-field-description");
        lfFieldLabel.contentEditable = "true";
        lfHelperText.contentEditable = "true";
        lfFieldLetter.textContent = "W";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddUrl");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "4");
        lfFieldContainer.setAttribute("data-max-length", "2000");
        lfFieldContainer.setAttribute("data-placeholder", "https://www.url.com");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        lfInputField.disabled = true;
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Multi-File Upload Field
    function lfAddFiles() {
        var lfFieldContainer = d.createElement("DIV");
        var lfCreateDropZone = d.createElement("DIV");
        var lfFieldLabel = d.createElement("Label");
        var lfInputField = d.createElement("INPUT");
        var lfFieldLetter = d.createElement("SPAN");
        var lfFieldType = "Files";
        lfInputField.setAttribute("type", "file");
        lfInputField.setAttribute("readonly", "true");
        lfFieldContainer.draggable = false;
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfInputField.id = "lf_Input" + increment;
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfInputField.classList.add("lf-input");
        lfInputField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-add-files-icon.png" + ");";
        lfCreateDropZone.classList.add("lf-drop-items");
        lfInputField.multiple = "true";
        lfFieldLabel.textContent = "Multi-File Upload";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfFieldLabel.classList.add("lf-field-label");
        lfFieldLabel.contentEditable = "true";
        lfFieldLetter.textContent = "M";
        lfFieldLetter.classList.add("lf-field-letter");
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfInputField);
        lfFieldContainer.append(lfFieldLetter);
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddFiles");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-placeholder", "Files");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-min-length", "0");
        lfFieldContainer.setAttribute("data-max-length", "2000");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
        lfInputField.setAttribute("data-hidden", "false");
        lfInputField.disabled = true;
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Dropdown Field
    function lfAddDropdown() {
        var lfFieldType = "Dropdown";
    
        var localCounter = 0;
    
        var lfFieldContainer = d.createElement("DIV");
        lfFieldContainer.draggable = false;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddDropdown");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-placeholder", "Choose a Selection");
        lfFieldContainer.setAttribute("data-max-drop-count", "2");
        lfFieldContainer.setAttribute("data-static-type", "drop");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");
    
        var lfFieldLabel = d.createElement("Label");
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfFieldLabel.classList.add("lf-field-label");
        lfFieldLabel.textContent = "Dropdown";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfFieldLabel.contentEditable = "true";


        // Dropdown Input
        var lfDropInput = d.createElement("INPUT");
        lfDropInput.placeholder = "Choose a Selection";
        lfDropInput.id = "lf_Input_" + increment;
        lfDropInput.classList.add("lf-input");
        lfDropInput.setAttribute("type", "text");
        lfDropInput.setAttribute("readonly", "true");
        lfDropInput.setAttribute("data-field-type", "lfDrop");
        lfDropInput.setAttribute("data-field-id", increment);


        // Dropdown Option Ul
        var lfDropInputUl = d.createElement("UL");
        lfDropInputUl.id = "lf_Drop_Input_Ul_" + increment;
        lfDropInputUl.classList.add("lf-select-ul");

        
        var lfDropFieldUl = d.createElement("ul");
        lfDropFieldUl.id = 'lf_Ul_Container_' + increment;
        lfDropFieldUl.classList.add("lf-input-drop-ul");
        lfDropFieldUl.setAttribute("data-increment", increment);
    

        var lfHelperText = d.createElement("TEXT");
        lfHelperText.id = "lf_Field_Description_" + increment;
        lfHelperText.classList.add("lf-field-description");
        lfHelperText.textContent = "Description";
        lfHelperText.contentEditable = "true";
    

        var lfCreateDropZone = d.createElement("DIV");
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfCreateDropZone.classList.add("lf-drop-items");


        var lfFieldLetter = d.createElement("SPAN");
        lfFieldLetter.textContent = "D";
        lfFieldLetter.classList.add("lf-field-letter");
    
    
        // Creates (3) Drop Options + Drop Radio Selections
        for (var i = 0; i < 3; i++) {
            var lfDropInputLi = d.createElement("Li");
            lfDropInputLi.classList.add("lf-select-option");
            lfDropInputLi.textContent = "Option";
            lfDropInputLi.setAttribute("data-drop-id", increment);
            lfDropInputLi.setAttribute("data-drop-input-id", increment + "_" + localCounter);
            lfDropInputUl.append(lfDropInputLi); 


            var lfDropFieldli = d.createElement("li");
            lfDropFieldli.id = "lf_Li_" + increment + "_" + localCounter;
            lfDropFieldli.classList.add("lf-input-drop-li");
            lfDropFieldli.setAttribute("data-increment", localCounter);
    
    
            var lfInnerDropInput = d.createElement("INPUT");
            lfInnerDropInput.setAttribute("type", "radio");
            lfInnerDropInput.id = "lf_input_" + increment + "_" + localCounter;
            lfInnerDropInput.classList.add("lf-input-drop");
            lfInnerDropInput.setAttribute("name", "lf_drop_group_" + increment);
            lfInnerDropInput.setAttribute("data-row-id", increment + "_" + localCounter);
            lfInnerDropInput.setAttribute("data-name", "lf_drop_group_" + increment);
            lfInnerDropInput.setAttribute("data-is-checked", "false");
    
    
            var lfDropLabel = d.createElement("Label");
            lfDropLabel.id = "lf_Drop_Label_Option_" + increment + "_" + localCounter;
            lfDropLabel.htmlFor = "lf_input_" + increment;
            lfDropLabel.classList.add("lf-drop-label");
            lfDropLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            lfDropLabel.contentEditable = "true";
            lfDropLabel.textContent = "Option";
            lfDropLabel.setAttribute("data-field-increment", increment);
            lfDropLabel.setAttribute("data-row-id", increment + "_" + localCounter);
    
    
            var lfAddNewDrop = d.createElement("button");
            lfAddNewDrop.setAttribute("type", "button");
            lfAddNewDrop.id = "lf_Add_Drop_" + increment + "_" + localCounter;
            lfAddNewDrop.classList.add("lf-add-drop");
            lfAddNewDrop.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            lfAddNewDrop.setAttribute("data-drop-count", localCounter);
            lfAddNewDrop.setAttribute("data-field-increment", increment);
    
    
            var lfRemoveDrop = d.createElement("button");
            lfRemoveDrop.setAttribute("type", "button");
            lfRemoveDrop.id = "lf_Minus_Drop_" + increment + "_" + localCounter;
            lfRemoveDrop.classList.add("lf-minus-drop");
            lfRemoveDrop.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            lfRemoveDrop.setAttribute("data-drop-count", localCounter);
            lfRemoveDrop.setAttribute("data-field-increment", increment);
    
    
            lfDropFieldli.append(lfInnerDropInput);
            lfDropFieldli.append(lfDropLabel);
            lfDropFieldli.append(lfAddNewDrop);
            lfDropFieldli.append(lfRemoveDrop);
            lfDropFieldUl.append(lfDropFieldli);
    
    
            localCounter++;
        }
    
    
        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfDropInput);
        lfFieldContainer.append(lfDropInputUl);
        lfFieldContainer.append(lfDropFieldUl);
        lfFieldContainer.append(lfHelperText);
        lfFieldContainer.append(lfFieldLetter);
    
        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Single Product Field
    function lfAddSingleProduct() {
        var lfFieldType = "Radio";

        var localCounter = 0;

        var lfFieldContainer = d.createElement("DIV");
        lfFieldContainer.draggable = false;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddSingleProduct");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-max-radio-count", "2");
        lfFieldContainer.setAttribute("data-static-type", "Radio");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");


        var lfFieldLabel = d.createElement("Label");
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfFieldLabel.classList.add("lf-field-label");
        lfFieldLabel.textContent = "Product";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfFieldLabel.contentEditable = "true";

        var lfRadioFieldUl = d.createElement("ul");
        lfRadioFieldUl.id = 'lf_Ul_Container_' + increment;
        lfRadioFieldUl.classList.add("lf-input-single-choice-product-ul");
        lfRadioFieldUl.setAttribute("data-increment", increment);

        var lfCreateDropZone = d.createElement("DIV");
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfCreateDropZone.classList.add("lf-drop-items");

        var lfFieldLetter = d.createElement("SPAN");
        lfFieldLetter.textContent = "S";
        lfFieldLetter.classList.add("lf-field-letter");


        // Creates (3) Product Options
        for (var i = 0; i < 3; i++) {
            var lfRadioFieldli = d.createElement("li");
            lfRadioFieldli.id = "lf_Li_" + increment + "_" + localCounter;
            lfRadioFieldli.classList.add("lf-input-single-choice-product-li");
            lfRadioFieldli.setAttribute("data-increment", localCounter);


            var lfInputDiv = d.createElement("DIV"); 
            lfInputDiv.id = "lf_Product_Div_" + increment + "_" + localCounter;
            lfInputDiv.classList.add("lf-input-single-choice-product-div");
            lfInputDiv.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-transparent.png" + ");";
            lfInputDiv.setAttribute("data-media-url", "pending generation");


            var lfRadioInput = d.createElement("INPUT"); 
            lfRadioInput.setAttribute("type", "radio");
            lfRadioInput.id = "lf_input_" + increment + "_" + localCounter;
            lfRadioInput.classList.add("lf-input-single-choice-product-radio");
            lfRadioInput.setAttribute("name", "lf_radio_group_" + increment);
            lfRadioInput.setAttribute("data-row-id", increment + "_" + localCounter);
            lfRadioInput.setAttribute("data-name", "lf_radio_group_" + increment);
            lfRadioInput.setAttribute("data-is-checked", "false");


            var lfAddImage = d.createElement("SPAN"); 
            lfAddImage.id = "lf_Add_Image_" + increment + "_" + localCounter;
            lfAddImage.classList.add("lf-add-single-choice-product-image-radio");
            lfAddImage.setAttribute("data-product-id", "lf_Product_Div_" + increment + "_" + localCounter);
            lfAddImage.setAttribute("data-product-container", "lf_Field_Container_" + increment); 
            lfAddImage.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";


            var lfInputPrice = d.createElement("INPUT"); 
            lfInputPrice.setAttribute("type", "number");
            lfInputPrice.id = "lf_Input_Price_" + increment + "_" + localCounter;
            lfInputPrice.classList.add("lf-single-choice-product-price-input");
            lfInputPrice.value = "10.00";
            lfInputPrice.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";


            var lfRadioLabel = d.createElement("Label"); 
            lfRadioLabel.id = "lf_Radio_Label_Option_" + increment + "_" + localCounter;
            lfRadioLabel.htmlFor = "lf_input_" + increment;
            lfRadioLabel.classList.add("lf-single-choice-product-name-label");
            lfRadioLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            lfRadioLabel.contentEditable = "true";
            lfRadioLabel.textContent = "Product Name";


            var lfAddRemoveDiv = d.createElement("DIV"); 
            lfAddRemoveDiv.classList.add("lf-add-remove-single-product-div");


            var lfAddNewRadio = d.createElement("button");
            lfAddNewRadio.setAttribute("type", "button");
            lfAddNewRadio.id = "lf_Add_Radio_" + increment + "_" + localCounter;
            lfAddNewRadio.classList.add("lf-add-single-product-radio");
            lfAddNewRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            lfAddNewRadio.setAttribute("data-radio-count", localCounter);
            lfAddNewRadio.setAttribute("data-field-increment", increment);


            var lfRemoveRadio = d.createElement("button");
            lfRemoveRadio.setAttribute("type", "button");
            lfRemoveRadio.id = "lf_Minus_Radio_" + increment + "_" + localCounter;
            lfRemoveRadio.classList.add("lf-minus-single-product-radio");
            lfRemoveRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            lfRemoveRadio.setAttribute("data-radio-count", localCounter);
            lfRemoveRadio.setAttribute("data-field-increment", increment);


            lfInputDiv.append(lfRadioInput);
            lfInputDiv.append(lfAddImage);
            lfInputDiv.append(lfInputPrice);
            lfInputDiv.append(lfRadioLabel);
            lfAddRemoveDiv.append(lfAddNewRadio);
            lfAddRemoveDiv.append(lfRemoveRadio);
            lfInputDiv.append(lfAddRemoveDiv);
            lfRadioFieldli.append(lfInputDiv);
            lfRadioFieldUl.append(lfRadioFieldli);


            localCounter++;
        }


        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfRadioFieldUl);
        lfFieldContainer.append(lfFieldLetter);

        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Multiple Products Field
    function lfAddMultipleProducts() {
        var lfFieldType = "Checkbox";

        var localCounter = 0;

        var lfFieldContainer = d.createElement("DIV");
        lfFieldContainer.draggable = false;
        lfFieldContainer.id = "lf_Field_Container_" + increment;
        lfFieldContainer.classList.add("lf-field-container");
        lfFieldContainer.setAttribute("data-increment", increment);
        lfFieldContainer.setAttribute("data-field-type", "lfAddMultipleProducts");
        lfFieldContainer.setAttribute("data-required", "false");
        lfFieldContainer.setAttribute("data-hidden", "false");
        lfFieldContainer.setAttribute("data-max-checkbox-count", "2");
        lfFieldContainer.setAttribute("data-static-type", "checkbox");
        lfFieldContainer.setAttribute("data-value", "pending generation");
        lfFieldContainer.setAttribute("data-regex", "pending generation");
        lfFieldContainer.setAttribute("data-logic-status", "pending generation");
        lfFieldContainer.setAttribute("data-lf-logic", "[]");


        var lfFieldLabel = d.createElement("Label");
        lfFieldLabel.id = "lf_Field_Label_" + increment;
        lfFieldLabel.classList.add("lf-field-label");
        lfFieldLabel.textContent = "Products";
        lfFieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        lfFieldLabel.contentEditable = "true";

        var lfCheckboxFieldUl = d.createElement("ul");
        lfCheckboxFieldUl.id = 'lf_Ul_Container_' + increment;
        lfCheckboxFieldUl.classList.add("lf-input-multiple-choice-product-ul");
        lfCheckboxFieldUl.setAttribute("data-increment", increment);

        var lfCreateDropZone = d.createElement("DIV");
        lfCreateDropZone.id = "lf_Droppable_Area_" + counter;
        lfCreateDropZone.classList.add("lf-drop-items");

        var lfFieldLetter = d.createElement("SPAN");
        lfFieldLetter.textContent = "M";
        lfFieldLetter.classList.add("lf-field-letter");


        // Creates (3) Product Options
        for (var i = 0; i < 3; i++) {
            var lfCheckboxFieldli = d.createElement("li");
            lfCheckboxFieldli.id = "lf_Li_" + increment + "_" + localCounter;
            lfCheckboxFieldli.classList.add("lf-input-multiple-choice-product-li");
            lfCheckboxFieldli.setAttribute("data-increment", localCounter);


            var lfInputDiv = d.createElement("DIV"); 
            lfInputDiv.id = "lf_Product_Div_" + increment + "_" + localCounter;
            lfInputDiv.classList.add("lf-input-multiple-choice-product-div");
            lfInputDiv.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-transparent.png" + ");";
            lfInputDiv.setAttribute("data-media-url", "pending generation");


            var lfCheckboxInput = d.createElement("INPUT"); 
            lfCheckboxInput.setAttribute("type", "checkbox");
            lfCheckboxInput.id = "lf_input_" + increment + "_" + localCounter;
            lfCheckboxInput.classList.add("lf-input-multiple-choice-product-checkbox");
            lfCheckboxInput.setAttribute("name", "lf_checkbox_group_" + increment);
            lfCheckboxInput.setAttribute("data-row-id", increment + "_" + localCounter);
            lfCheckboxInput.setAttribute("data-name", "lf_checkbox_group_" + increment);
            lfCheckboxInput.setAttribute("data-is-checked", "false");


            var lfAddImage = d.createElement("SPAN"); 
            lfAddImage.id = "lf_Add_Image_" + increment + "_" + localCounter;
            lfAddImage.classList.add("lf-add-multiple-choice-product-image-checkbox");
            lfAddImage.setAttribute("data-product-id", "lf_Product_Div_" + increment + "_" + localCounter);
            lfAddImage.setAttribute("data-product-container", "lf_Field_Container_" + increment); 
            lfAddImage.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";


            var lfInputPrice = d.createElement("INPUT"); 
            lfInputPrice.setAttribute("type", "number");
            lfInputPrice.id = "lf_Input_Price_" + increment + "_" + localCounter;
            lfInputPrice.classList.add("lf-multiple-choice-product-price-input");
            lfInputPrice.value = "10.00";
            lfInputPrice.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";


            var lfCheckboxLabel = d.createElement("Label"); 
            lfCheckboxLabel.id = "lf_Checkbox_Label_Option_" + increment + "_" + localCounter;
            lfCheckboxLabel.htmlFor = "lf_input_" + increment;
            lfCheckboxLabel.classList.add("lf-multiple-choice-product-name-label");
            lfCheckboxLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            lfCheckboxLabel.contentEditable = "true";
            lfCheckboxLabel.textContent = "Product Name";


            var lfAddRemoveDiv = d.createElement("DIV"); 
            lfAddRemoveDiv.classList.add("lf-add-remove-multiple-product-div");


            var lfAddNewcheckbox = d.createElement("button");
            lfAddNewcheckbox.setAttribute("type", "button");
            lfAddNewcheckbox.id = "lf_Add_Checkbox_" + increment + "_" + localCounter;
            lfAddNewcheckbox.classList.add("lf-add-multiple-product-checkbox");
            lfAddNewcheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            lfAddNewcheckbox.setAttribute("data-checkbox-count", localCounter);
            lfAddNewcheckbox.setAttribute("data-field-increment", increment);


            var lfRemovecheckbox = d.createElement("button");
            lfRemovecheckbox.setAttribute("type", "button");
            lfRemovecheckbox.id = "lf_Minus_Checkbox_" + increment + "_" + localCounter;
            lfRemovecheckbox.classList.add("lf-minus-multiple-product-checkbox");
            lfRemovecheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            lfRemovecheckbox.setAttribute("data-checkbox-count", localCounter);
            lfRemovecheckbox.setAttribute("data-field-increment", increment);


            lfInputDiv.append(lfCheckboxInput);
            lfInputDiv.append(lfAddImage);
            lfInputDiv.append(lfInputPrice);
            lfInputDiv.append(lfCheckboxLabel);
            lfAddRemoveDiv.append(lfAddNewcheckbox);
            lfAddRemoveDiv.append(lfRemovecheckbox);
            lfInputDiv.append(lfAddRemoveDiv);
            lfCheckboxFieldli.append(lfInputDiv);
            lfCheckboxFieldUl.append(lfCheckboxFieldli);


            localCounter++;
        }


        lfFieldContainer.append(lfFieldLabel);
        lfFieldContainer.append(lfCheckboxFieldUl);
        lfFieldContainer.append(lfFieldLetter);

        addLfField(lfFieldContainer, lfCreateDropZone, lfFieldType);
        lfFieldContainer.style.height = "0px";
        var fieldContainerId = lfFieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Toolbar -- Appends to Field
    function addToolbar(fieldType, existingForm) {


        // ToolBar Container
        var toolBarContainer = d.createElement("DIV");
        toolBarContainer.id = "lf_ToolBar_" + increment;
        toolBarContainer.classList.add("lf-toolbar");


        // Required Field Label
        var lfRequiredButtonLabel = d.createElement("Label");
        lfRequiredButtonLabel.textContent = "Required";
        lfRequiredButtonLabel.htmlFor = "lf_Require_Field_" + increment;
        lfRequiredButtonLabel.classList.add("lf-required");
        lfRequiredButtonLabel.id = "lf_Required_Field_" + increment;
        lfRequiredButtonLabel.id = "lf_Required_Label_" + increment;
        lfRequiredButtonLabel.setAttribute("data-increment", increment);
        lfRequiredButtonLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-required-icon.png" + ");";


        // Required Field Button
        var lfRequiredButton = d.createElement("INPUT");
        lfRequiredButton.setAttribute("type", "checkbox");
        lfRequiredButton.id = "lf_Require_Field_" + increment;
        lfRequiredButton.classList.add("lf-required-checkbox");
        lfRequiredButton.setAttribute("name", "lf_Require_Field_" + increment);
        lfRequiredButton.setAttribute("data-increment", increment);


        // Show Field Label
        var showRadioButtonLabel = d.createElement("LABEL");
        showRadioButtonLabel.classList.add("lf-show-field");
        showRadioButtonLabel.textContent = "Show";
        showRadioButtonLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-show-icon.png" + ");";


        // Show Field Button
        var showRadioButton = d.createElement("INPUT");
        showRadioButton.setAttribute("type", "radio");
        showRadioButton.id = "lf_Show_Field_" + increment;
        showRadioButton.classList.add("lf-show");
        showRadioButton.checked = "true";
        showRadioButton.setAttribute("name", "lf_Show_Hide_Field_Group_" + increment);
        showRadioButton.setAttribute("data-increment", increment);


        // Hide Field Label
        var hideRadioButtonLabel = d.createElement("LABEL");
        hideRadioButtonLabel.classList.add("lf-hide-field");
        hideRadioButtonLabel.textContent = "Hide";
        hideRadioButtonLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-hide-icon.png" + ");";


        // Hide Field Button
        var hideRadioButton = d.createElement("INPUT");
        hideRadioButton.setAttribute("name", "lf_Show_Hide_Field_Group_" + increment);
        hideRadioButton.setAttribute("type", "radio");
        hideRadioButton.id = "lf_Hide_Field_" + increment;
        hideRadioButton.classList.add("lf-hidden");
        hideRadioButton.setAttribute("data-increment", increment);


        // Advanced toolbar menu
        var lfAdvancedToolBarMenu = d.createElement("BUTTON");
        lfAdvancedToolBarMenu.id = "lf_Advanced_Tool_Bar_Menu_" + increment;
        lfAdvancedToolBarMenu.textContent = "•••";
        lfAdvancedToolBarMenu.classList.add("lf-advanced-toolbar-menu")
        lfAdvancedToolBarMenu.setAttribute("type", "button");
        lfAdvancedToolBarMenu.setAttribute("data-field-id", increment);


        // Append Element to ToolBarContainer
        toolBarContainer.append(lfRequiredButton);
        toolBarContainer.append(lfRequiredButtonLabel);
        toolBarContainer.append(showRadioButton);
        toolBarContainer.append(showRadioButtonLabel);
        toolBarContainer.append(hideRadioButton);
        toolBarContainer.append(hideRadioButtonLabel);
        toolBarContainer.append(lfAdvancedToolBarMenu);


        // Field Actions Toolbar
        var fieldActions = d.createElement("UL");
        fieldActions.classList.add("field-actions");
        fieldActions.id = "lf_Field_Actions_" + increment;


        // Drag Drop Handle
        var dragDropHandleImg = d.createElement("img");
        dragDropHandleImg.src = lfAssetsDirectory + "lf-transparent.png";
        dragDropHandleImg.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-icon.png" + ");";
        dragDropHandleImg.classList.add("drag-drop-handle");
        dragDropHandleImg.id = "lf_Drag_" + fieldType + "_Field_" + increment;


        // Drag Drop Tooltip
        var lfDragTooltip = d.createElement("li");
        lfDragTooltip.classList.add("lf-toolbar-drag");
        lfDragTooltip.id = "lf_Drag_Tooltip_" + increment;


        // Drag Tooltip Text
        var lfDragToolTipText = d.createElement("p");
        lfDragToolTipText.classList.add("lf-toolbar-drag-tooltip");
        lfDragToolTipText.textContent = "Drag";


        // Duplicate Field
        var duplicateField = d.createElement("img");
        duplicateField.id = "lf_Duplicate_" + increment;
        duplicateField.classList.add("lf-duplicate");
        duplicateField.src = lfAssetsDirectory + "lf-transparent.png";
        duplicateField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-duplicate-icon.png" + ");";
        duplicateField.draggable = false;
        duplicateField.setAttribute("data-increment", increment);


        // Duplicate Field Tooltip
        var lfDuplicateTooltip = d.createElement("li");
        lfDuplicateTooltip.classList.add("lf-toolbar-duplicate");
        lfDuplicateTooltip.id = "lf_Duplicate_Tooltip_" + increment;


        // Duplicate Tooltip Text
        var lfDuplicateToolTipText = d.createElement("p");
        lfDuplicateToolTipText.classList.add("lf-toolbar-duplicate-tooltip");
        lfDuplicateToolTipText.textContent = "Duplicate";


        // Delete Field
        var deleteField = d.createElement("img");
        deleteField.id = "lf_Delete_" + increment;
        deleteField.classList.add("lf-delete");
        deleteField.src = lfAssetsDirectory + "lf-transparent.png";
        deleteField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-delete-icon.png" + ");";
        deleteField.draggable = false;
        deleteField.setAttribute("data-increment", increment);


        // Delete Field Tooltip
        var lfDeleteTooltip = d.createElement("li");
        lfDeleteTooltip.classList.add("lf-toolbar-delete");
        lfDeleteTooltip.id = "lf_Delete_Tooltip_" + increment;


        // Delete Tooltip Text
        var lfDeleteToolTipText = d.createElement("p");
        lfDeleteToolTipText.classList.add("lf-toolbar-delete-tooltip");
        lfDeleteToolTipText.textContent = "Delete";


        // Append Elements to Field Container
        lfDragTooltip.append(dragDropHandleImg);
        lfDuplicateTooltip.append(duplicateField);
        lfDragTooltip.append(lfDragToolTipText);
        lfDuplicateTooltip.append(lfDuplicateToolTipText);
        lfDragTooltip.append(dragDropHandleImg);
        lfDragTooltip.append(lfDragToolTipText);
        lfDeleteTooltip.append(deleteField);
        lfDeleteTooltip.append(lfDeleteToolTipText);
        fieldActions.append(lfDragTooltip);
        fieldActions.append(lfDuplicateTooltip);
        fieldActions.append(lfDeleteTooltip);
        toolBarContainer.append(fieldActions);


        // Update Increment and Counter field variables
        d.getElementById('lf_Field_Label_' + increment).before(toolBarContainer);

        increment++;
        arrOfCurrentIncrements.push(increment);
        counter++;
        var existingFormBool = existingForm;
        if (existingFormBool === "true") {
            maxIncrement();
        } else {
            // return
        }
        lfUpdateFieldCountAlert(); // update field count
    }


    // Determines new fields increment when saved form fields are recreated and new fields are added
    function maxIncrement() {
        const max = Math.max(...arrOfCurrentIncrements);
        increment = max;
        counter = max;
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Append Fields
    // Determines where to add or move new and existing fields
    function addLfField(fieldContainer, createDropZone, fieldType) {
        // if field editor does not have fields added and LFfield is dragged or clicked -- or new form with blank editor
        if (d.getElementById('lf_Form_Container').innerHTML === "") {
            d.getElementById('lf_Form_Container').appendChild(fieldContainer);
            existingForm = "false";
            prepareCanvas();
            addToolbar(fieldType);
            lfFormSaveToUpdate();
            drag = false;
            // If fields exists in field editor and new field is dragged into a drop zone -- Adds new field to bottom of dropzone
        } else if (d.getElementById('lf_Form_Container').innerHTML !== "" && drag === true) {
            d.getElementById(droppableAreaTarget).after(fieldContainer);
            existingForm = "false";
            addToolbar(fieldType);
            lfFormSaveToUpdate();
            drag = false;
            // If fields exist in field editor and draggable field is clicked and not dragged
        } else if (d.getElementById('lf_Form_Container').innerHTML !== "" && drag === false && duplicated === "false") {
            d.getElementById('lf_Form_Container').appendChild(fieldContainer);
            existingForm = "true";
            addToolbar(fieldType, existingForm);
            lfFormSaveToUpdate();
            drag = false;
            // If LF field is duplicated
        } else if (d.getElementById('lf_Form_Container').innerHTML !== "" && drag === false && duplicated === "true") {
            d.getElementById('lf_Droppable_Area_' + duplicatorDrop).after(fieldContainer);
            existingForm = "false";
            addToolbar(fieldType);
            drag = false;
            duplicated = "false";
            lfFormSaveToUpdate();
        } else {
            // return
        }
        fieldContainer.after(createDropZone);
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Blank Canvas
    // Removes field editor initial state bg image after initial field has been added
    function prepareCanvas() {
        d.getElementById('lf_Editor_Bg').style.backgroundImage = "url()";
        d.getElementById('lf_Editor_Get_Started_Text').style.color = "transparent";
        droppableAreaTarget = "trueIfDropped";
        lfAddDeleteFormButton();
        lfAddNewFormButton();
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Drag & Drop
    // Dragstart function -- Sets drag image for each draggable field button
    d.addEventListener("dragstart", function (event) {
        event.dataTransfer.effectAllowed = "move";
        var draggedElement = event.target.id;

        // Highlight All DropZones
        var lfDropZones = document.getElementsByClassName("lf-drop-items");
        for (var i = 0; i < lfDropZones.length; i++) {
            lfDropZones[i].setAttribute('style', 'background: #2143ea42');
        }

        switch (true) {
            case (draggedElement.includes("Email")):
                var lfDragImage = d.getElementById('lf_Drag_Email');
                break;

            case (draggedElement.includes("Textarea")):
                var lfDragImage = d.getElementById('lf_Drag_Textarea');
                break;

            case (draggedElement.includes("Pass")):
                var lfDragImage = d.getElementById('lf_Drag_Pass');
                break;

            case (draggedElement.includes("Text")):
                var lfDragImage = d.getElementById('lf_Drag_Text');
                break;

            case (draggedElement.includes("Files")):
                var lfDragImage = d.getElementById('lf_Drag_Files');
                break;

            case (draggedElement.includes("File")):
                var lfDragImage = d.getElementById('lf_Drag_File');
                break;

            case (draggedElement.includes("Number")):
                var lfDragImage = d.getElementById('lf_Drag_Number');
                break;

            case (draggedElement.includes("Date")):
                var lfDragImage = d.getElementById('lf_Drag_Date');
                break;

            case (draggedElement.includes("Radio")):
                var lfDragImage = d.getElementById('lf_Drag_Radio');
                break;

            case (draggedElement.includes("Checkbox")):
                var lfDragImage = d.getElementById('lf_Drag_Checkbox');
                break;

            case (draggedElement.includes("Phone")):
                var lfDragImage = d.getElementById('lf_Drag_Phone');
                break;

            case (draggedElement.includes("Url")):
                var lfDragImage = d.getElementById('lf_Drag_Url');
                break;

            case (draggedElement.includes("Dropdown")):
                var lfDragImage = d.getElementById('lf_Drag_Dropdown');
                break;

            case (draggedElement.includes("Single")):
                var lfDragImage = d.getElementById('lf_Drag_Single_Product');
                break;

            case (draggedElement.includes("Multiple")):
                var lfDragImage = d.getElementById('lf_Drag_Multiple_Products');
                break;
            default:
        }

        //event.dataTransfer.setDragImage(lfDragImage, 218, 72);
        event.dataTransfer.setDragImage(lfDragImage, 110, 35);
    }, false);


    // Drag Function -- // Hides draggable field buttons + adds pointer cursor
    d.addEventListener("drag", function (event) {
        if (event.target.className == "lf-field") {
            event.target.setAttribute('style', 'transform: rotate(0.01turn);');
        }
        event.target.style.cursor = "pointer";
        var currentField = event.target.id;
        var dragHandle = d.getElementById(currentField).parentElement.id;
        var fieldActionsContainer = d.getElementById(dragHandle).parentElement.id;
        var fieldToolbarContainer = d.getElementById(fieldActionsContainer).parentElement;
        var parentFieldContainer = fieldToolbarContainer.parentElement;
        if (parentFieldContainer.id.includes("lf_Field_Container")) {
            parentFieldContainer.style.cssText = "opacity: 0.4;";
        }
    }, false);


    // Dragover Function -- Prevents default
    d.addEventListener("dragover", function (event) {
        event.preventDefault();
    }, false);



    // Dragenter Function -- Add hover color to dropzone when the draggable element enters it
    d.addEventListener("dragenter", function (event) {
        if (event.target.className == "lf-drop-items") {
            event.target.setAttribute('style', 'background: #38ff00'); 
        }
    }, false);



    //Dragleave function -- // Removes dropzone hover color when draggable element leaves dropzone & is not dropped
    d.addEventListener("dragleave", function (event) {
        if (event.target.className == "lf-drop-items") {
            event.target.setAttribute('style', 'background: #2143ea42');
        }
    }, false);


    // Drop Function -- Updates currentDropZone global var & removes hover color is draggable element is dropped
    d.addEventListener("drop", function (event) {
        // captures droppable area to send to dragend event
        droppableAreaTarget = event.target.id;
        currentDropZone = event.target.id;
        currentDropZone;
        event.preventDefault();

        // Removes drop target hover color
        if (event.target.className == "lf-drop-items") {
            event.target.setAttribute('style', 'background: transparent; transition: .0s;');
        }

        // Unhighlight DropZones
        var lfDropZones = document.getElementsByClassName("lf-drop-items");
        for (var i = 0; i < lfDropZones.length; i++) {
            lfDropZones[i].setAttribute('style', 'background: transparent');
        }

    }, false);


    // DragEnd function 
    d.addEventListener("dragend", function (event) {
        event.preventDefault();
        var droppedElement = event.target.id;
        var lfFieldEditorDropZone = d.getElementById('lf_Form_Container');

        // When dropped element is drag handle 
        var dragHandle = d.getElementById(droppedElement).parentElement.id;
        var fieldActionsContainer = d.getElementById(dragHandle).parentElement.id;
        var fieldToolbarContainer = d.getElementById(fieldActionsContainer).parentElement;
        var parentFieldContainer = fieldToolbarContainer.parentElement;

        // Adds text color back to draggable field after drop and removes opacity
        if (event.target.className == "lf-field") {
            event.target.setAttribute('style', 'transform: inherit;transform: rotate(0turn);');
        }
        // Restores opacity after existing field is dropped
        if (parentFieldContainer.id.includes("lf_Field_Container")) {
            parentFieldContainer.style.cssText = "opacity: 1.0;";
        }
        // If lf field is the current element being dragged -- prevents undefine/null dropzone after parent variable
        if (event.target.className != "lf-field") {
            var dropZoneAfterParent = d.getElementById(parentFieldContainer.id).nextElementSibling;
        }

        // Sends dropzone ID to add field function and new field alert
        var theID = event.target.id;
        // Determines which field to add 
        if (currentDropZone.includes("lf_Droppable_Area_") || currentDropZone.includes("dropzone") || currentDropZone === "lf_Dropzone" && lfFieldEditorDropZone.innerHTML === "") {

            switch (theID) {
                case "lf_Add_Email":
                    lfAddEmail();
                    break;

                case "lf_Add_Textarea":
                    lfAddTextarea();
                    break;

                case "lf_Add_Pass":
                    lfAddPass();
                    break;

                case "lf_Add_Text":
                    lfAddText();
                    break;

                case "lf_Add_File":
                    lfAddFile();
                    break;

                case "lf_Add_Number":
                    lfAddNumber();
                    break;

                case "lf_Add_Date":
                    lfAddDate();
                    break;

                case "lf_Add_Radio":
                    lfAddRadio();
                    break;

                case "lf_Add_Checkbox":
                    lfAddCheckbox();
                    break;

                case "lf_Add_Phone":
                    lfAddPhone();
                    break;

                case "lf_Add_Url":
                    lfAddUrl();
                    break;

                case "lf_Add_Files":
                    lfAddFiles();
                    break;

                case "lf_Add_Dropdown":
                    lfAddDropdown();
                    break;

                case "lf_Add_Single_Product":
                    lfAddSingleProduct();
                    break;

                case "lf_Add_Multiple_Products":
                    lfAddMultipleProducts();
                    break;
                default: d.getElementById(currentDropZone).after(parentFieldContainer); d.getElementById(parentFieldContainer.id).after(dropZoneAfterParent);
            }
        }
    }, false);


    // ------------------------------------------------------------------------------------------------------------------------- LF Field Count Alert
    // New field added alert -- Update Field Count
    function lfUpdateFieldCountAlert(lfAction) {
        var lfTotalCount = 0;
        Array.prototype.forEach.call(d.getElementsByClassName("lf-field-container"), function (e) {
            lfTotalCount++;
        })
        if (lfAction !== null && lfAction !== "delete") {
            var lfFieldCount = d.getElementById('lf_Current_Field_Count');
            var lfCurrentFieldCount = lfTotalCount;
            lfFieldCount.textContent = "+" + lfCurrentFieldCount;
        } else {
            var lfFieldCount = d.getElementById('lf_Current_Field_Count');
            var lfCurrentFieldCount = lfTotalCount - 1;
            lfFieldCount.textContent = "+" + lfCurrentFieldCount;
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Radio/Checkbox
    // Adds New Radio Input Option To Current Field
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-radio") {
            // Grabs Data Increments and Ids
            var lfAddRadioPlusButton = e.target.id;
            var lfAddRadioDataCount = d.getElementById(lfAddRadioPlusButton).getAttribute("data-radio-count");
            var lfFieldContainerIncrement = d.getElementById(lfAddRadioPlusButton).getAttribute("data-field-increment");
            var lfCurrentRadioLabelId = d.getElementById('lf_Li_' + lfFieldContainerIncrement + '_' + lfAddRadioDataCount);
            var lfMaxRadioCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).getAttribute("data-max-radio-count");
            var lfMaxRadioCountIncremented = ++lfMaxRadioCount;


            // Create New Radio Option
            var radioFieldli = d.createElement("li");
            radioFieldli.id = "lf_Li_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            radioFieldli.classList.add("lf-input-radio-li");
            radioFieldli.setAttribute("data-increment", lfMaxRadioCountIncremented);


            var radioInput = d.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.id = "lf_input_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            radioInput.classList.add("lf-input-radio");
            radioInput.setAttribute("name", "lf_radio_group_" + lfFieldContainerIncrement);
            radioInput.setAttribute("data-row-id", lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented);
            radioInput.setAttribute("data-name", "lf_radio_group_" + lfFieldContainerIncrement);
            radioInput.setAttribute("data-is-checked", "false");


            var radioLabel = d.createElement("Label");
            radioLabel.id = "lf_Radio_Label_Option_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            radioLabel.htmlFor = "lf_input_" + lfFieldContainerIncrement;
            radioLabel.classList.add("lf-radio-label");
            radioLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            radioLabel.textContent = "Option";
            radioLabel.contentEditable = "true";


            var addNewRadio = d.createElement("button");
            addNewRadio.setAttribute("type", "button");
            addNewRadio.id = "lf_Add_Radio_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            addNewRadio.classList.add("lf-add-radio");
            addNewRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewRadio.setAttribute("data-radio-count", lfMaxRadioCountIncremented);
            addNewRadio.setAttribute("data-field-increment", lfFieldContainerIncrement);


            var removeRadio = d.createElement("button");
            removeRadio.setAttribute("type", "button");
            removeRadio.id = "lf_Minus_Radio_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            removeRadio.classList.add("lf-minus-radio");
            removeRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeRadio.setAttribute("data-radio-count", lfMaxRadioCountIncremented);
            removeRadio.setAttribute("data-field-increment", lfFieldContainerIncrement);


            radioFieldli.append(radioInput);
            radioFieldli.append(radioLabel);
            radioFieldli.append(addNewRadio);
            radioFieldli.append(removeRadio);
            lfCurrentRadioLabelId.after(radioFieldli);


            var lfUpdateMaxRadioCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).setAttribute("data-max-radio-count", lfMaxRadioCountIncremented);
        }
    })


    // Adds New Checkbox Input Option To Current Field
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-checkbox") {
            // Grabs Data Increments and Ids
            var lfAddCheckboxPlusButton = e.target.id;
            var lfAddCheckboxDataCount = d.getElementById(lfAddCheckboxPlusButton).getAttribute("data-checkbox-count");
            var lfFieldContainerIncrement = d.getElementById(lfAddCheckboxPlusButton).getAttribute("data-field-increment");
            var lfCurrentCheckboxLabelId = d.getElementById('lf_Li_' + lfFieldContainerIncrement + '_' + lfAddCheckboxDataCount);
            var lfMaxCheckboxCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).getAttribute("data-max-checkbox-count");
            var lfMaxCheckboxCountIncremented = ++lfMaxCheckboxCount;


            // Create New Radio Option
            var checkboxFieldli = d.createElement("li");
            checkboxFieldli.id = "lf_Li_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            checkboxFieldli.classList.add("lf-input-checkbox-li");
            checkboxFieldli.setAttribute("data-increment", lfMaxCheckboxCountIncremented);


            var checkboxInput = d.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.id = "lf_input_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            checkboxInput.classList.add("lf-input-checkbox");
            checkboxInput.setAttribute("name", "lf_checkbox_group_" + lfFieldContainerIncrement);
            checkboxInput.setAttribute("data-row-id", lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented);
            checkboxInput.setAttribute("data-name", "lf_checkbox_group_" + lfFieldContainerIncrement);
            checkboxInput.setAttribute("data-is-checked", "false");


            var checkboxLabel = d.createElement("Label");
            checkboxLabel.id = "lf_Checkbox_Label_Option_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            checkboxLabel.htmlFor = "lf_input_" + lfFieldContainerIncrement;
            checkboxLabel.classList.add("lf-checkbox-label");
            checkboxLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            checkboxLabel.textContent = "Option";
            checkboxLabel.contentEditable = "true";


            var addNewCheckbox = d.createElement("button");
            addNewCheckbox.setAttribute("type", "button");
            addNewCheckbox.id = "lf_Add_Checkbox_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            addNewCheckbox.classList.add("lf-add-checkbox");
            addNewCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewCheckbox.setAttribute("data-checkbox-count", lfMaxCheckboxCountIncremented);
            addNewCheckbox.setAttribute("data-field-increment", lfFieldContainerIncrement);


            var removeCheckbox = d.createElement("button");
            removeCheckbox.setAttribute("type", "button");
            removeCheckbox.id = "lf_Minus_Checkbox_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            removeCheckbox.classList.add("lf-minus-checkbox");
            removeCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeCheckbox.setAttribute("data-checkbox-count", lfMaxCheckboxCountIncremented);
            removeCheckbox.setAttribute("data-field-increment", lfFieldContainerIncrement);


            checkboxFieldli.append(checkboxInput);
            checkboxFieldli.append(checkboxLabel);
            checkboxFieldli.append(addNewCheckbox);
            checkboxFieldli.append(removeCheckbox);
            lfCurrentCheckboxLabelId.after(checkboxFieldli);


            var lfUpdateMaxCheckboxCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).setAttribute("data-max-checkbox-count", lfMaxCheckboxCountIncremented);
        }
    })


    // Adds New Single Product Input Option To Current Field
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-single-product-radio") {
            // Grabs Data Increments and Ids
            var lfAddRadioPlusButton = e.target.id;
            var lfAddRadioDataCount = d.getElementById(lfAddRadioPlusButton).getAttribute("data-radio-count");
            var lfFieldContainerIncrement = d.getElementById(lfAddRadioPlusButton).getAttribute("data-field-increment");
            var lfCurrentRadioLabelId = d.getElementById('lf_Li_' + lfFieldContainerIncrement + '_' + lfAddRadioDataCount);
            var lfMaxRadioCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).getAttribute("data-max-radio-count");
            var lfMaxRadioCountIncremented = ++lfMaxRadioCount;


            // Create New Radio Option
            var radioFieldli = d.createElement("li");
            radioFieldli.id = "lf_Li_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            radioFieldli.classList.add("lf-input-single-choice-product-li");
            radioFieldli.setAttribute("data-increment", lfMaxRadioCountIncremented);


            var inputDiv = d.createElement("DIV"); 
            inputDiv.id = "lf_Product_Div_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            inputDiv.classList.add("lf-input-single-choice-product-div");
            inputDiv.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-transparent.png" + ");";


            var radioInput = d.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.id = "lf_input_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            radioInput.classList.add("lf-input-single-choice-product-radio");
            radioInput.setAttribute("name", "lf_radio_group_" + lfFieldContainerIncrement);
            radioInput.setAttribute("data-row-id", lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented);
            radioInput.setAttribute("data-name", "lf_radio_group_" + lfFieldContainerIncrement);
            radioInput.setAttribute("data-is-checked", "false");


            var addImage = d.createElement("SPAN"); 
            addImage.id = "lf_Add_Image_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            addImage.classList.add("lf-add-single-choice-product-image-radio");
            addImage.setAttribute("data-product-id", "lf_Product_Div_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented);
            addImage.setAttribute("data-product-container", "lf_Field_Container_" + lfFieldContainerIncrement); 
            addImage.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";


            var inputPrice = d.createElement("INPUT"); 
            inputPrice.setAttribute("type", "number");
            inputPrice.id = "lf_Input_Price_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            inputPrice.classList.add("lf-single-choice-product-price-input");
            inputPrice.value = "10.00";
            inputPrice.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";


            var radioLabel = d.createElement("Label");
            radioLabel.id = "lf_Radio_Label_Option_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            radioLabel.htmlFor = "lf_input_" + lfFieldContainerIncrement;
            radioLabel.classList.add("lf-single-choice-product-name-label");
            radioLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            radioLabel.textContent = "Product Name";
            radioLabel.contentEditable = "true";


            var addRemoveDiv = d.createElement("DIV"); 
            addRemoveDiv.classList.add("lf-add-remove-single-product-div");


            var addNewRadio = d.createElement("button");
            addNewRadio.setAttribute("type", "button");
            addNewRadio.id = "lf_Add_Radio_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            addNewRadio.classList.add("lf-add-single-product-radio");
            addNewRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewRadio.setAttribute("data-radio-count", lfMaxRadioCountIncremented);
            addNewRadio.setAttribute("data-field-increment", lfFieldContainerIncrement);


            var removeRadio = d.createElement("button");
            removeRadio.setAttribute("type", "button");
            removeRadio.id = "lf_Minus_Radio_" + lfFieldContainerIncrement + "_" + lfMaxRadioCountIncremented;
            removeRadio.classList.add("lf-minus-single-product-radio");
            removeRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeRadio.setAttribute("data-radio-count", lfMaxRadioCountIncremented);
            removeRadio.setAttribute("data-field-increment", lfFieldContainerIncrement);


            inputDiv.append(radioInput);
            inputDiv.append(addImage);
            inputDiv.append(inputPrice);
            inputDiv.append(radioLabel);
            addRemoveDiv.append(addNewRadio);
            addRemoveDiv.append(removeRadio);
            inputDiv.append(addRemoveDiv);
            radioFieldli.append(inputDiv);
            lfCurrentRadioLabelId.after(radioFieldli);


            var lfUpdateMaxRadioCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).setAttribute("data-max-radio-count", lfMaxRadioCountIncremented);
       

        }
    })


    // Adds New Multi Choice Product Input Option To Current Field
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-multiple-product-checkbox") {
            // Grabs Data Increments and Ids
            var lfAddCheckboxPlusButton = e.target.id;
            var lfAddCheckboxDataCount = d.getElementById(lfAddCheckboxPlusButton).getAttribute("data-checkbox-count");
            var lfFieldContainerIncrement = d.getElementById(lfAddCheckboxPlusButton).getAttribute("data-field-increment");
            var lfCurrentCheckboxLabelId = d.getElementById('lf_Li_' + lfFieldContainerIncrement + '_' + lfAddCheckboxDataCount);
            var lfMaxCheckboxCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).getAttribute("data-max-checkbox-count");
            var lfMaxCheckboxCountIncremented = ++lfMaxCheckboxCount;


            // Create New Checkbox Option
            var checkboxFieldli = d.createElement("li");
            checkboxFieldli.id = "lf_Li_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            checkboxFieldli.classList.add("lf-input-multiple-choice-product-li");
            checkboxFieldli.setAttribute("data-increment", lfMaxCheckboxCountIncremented);


            var inputDiv = d.createElement("DIV"); 
            inputDiv.id = "lf_Product_Div_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            inputDiv.classList.add("lf-input-multiple-choice-product-div");
            inputDiv.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-transparent.png" + ");";


            var checkboxInput = d.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.id = "lf_input_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            checkboxInput.classList.add("lf-input-multiple-choice-product-checkbox");
            checkboxInput.setAttribute("name", "lf_checkbox_group_" + lfFieldContainerIncrement);
            checkboxInput.setAttribute("data-row-id", lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented);
            checkboxInput.setAttribute("data-name", "lf_checkbox_group_" + lfFieldContainerIncrement);
            checkboxInput.setAttribute("data-is-checked", "false");


            var addImage = d.createElement("SPAN"); 
            addImage.id = "lf_Add_Image_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            addImage.classList.add("lf-add-multiple-choice-product-image-checkbox");
            addImage.setAttribute("data-product-id", "lf_Product_Div_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented);
            addImage.setAttribute("data-product-container", "lf_Field_Container_" + lfFieldContainerIncrement); 
            addImage.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";


            var inputPrice = d.createElement("INPUT"); 
            inputPrice.setAttribute("type", "number");
            inputPrice.id = "lf_Input_Price_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            inputPrice.classList.add("lf-multiple-choice-product-price-input");
            inputPrice.value = "10.00";
            inputPrice.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";


            var checkboxLabel = d.createElement("Label");
            checkboxLabel.id = "lf_Checkbox_Label_Option_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            checkboxLabel.htmlFor = "lf_input_" + lfFieldContainerIncrement;
            checkboxLabel.classList.add("lf-multiple-choice-product-name-label");
            checkboxLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            checkboxLabel.textContent = "Product Name";
            checkboxLabel.contentEditable = "true";


            var addRemoveDiv = d.createElement("DIV"); 
            addRemoveDiv.classList.add("lf-add-remove-multiple-product-div");


            var addNewCheckbox = d.createElement("button");
            addNewCheckbox.setAttribute("type", "button");
            addNewCheckbox.id = "lf_Add_Checkbox_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            addNewCheckbox.classList.add("lf-add-multiple-product-checkbox");
            addNewCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewCheckbox.setAttribute("data-checkbox-count", lfMaxCheckboxCountIncremented);
            addNewCheckbox.setAttribute("data-field-increment", lfFieldContainerIncrement);


            var removeCheckbox = d.createElement("button");
            removeCheckbox.setAttribute("type", "button");
            removeCheckbox.id = "lf_Minus_Checkbox_" + lfFieldContainerIncrement + "_" + lfMaxCheckboxCountIncremented;
            removeCheckbox.classList.add("lf-minus-multiple-product-checkbox");
            removeCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeCheckbox.setAttribute("data-checkbox-count", lfMaxCheckboxCountIncremented);
            removeCheckbox.setAttribute("data-field-increment", lfFieldContainerIncrement);


            inputDiv.append(checkboxInput);
            inputDiv.append(addImage);
            inputDiv.append(inputPrice);
            inputDiv.append(checkboxLabel);
            addRemoveDiv.append(addNewCheckbox);
            addRemoveDiv.append(removeCheckbox);
            inputDiv.append(addRemoveDiv);
            checkboxFieldli.append(inputDiv);
            lfCurrentCheckboxLabelId.after(checkboxFieldli);


            var lfUpdateMaxCheckboxCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).setAttribute("data-max-checkbox-count", lfMaxCheckboxCountIncremented);
       

        }
    })


    // Unselects Checked Radio Option
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-input-radio") {


            var lfCurrentRadioId = e.target.id;
            var lfRadioDataChecked = d.getElementById(lfCurrentRadioId).getAttribute("data-is-checked")
            var lfRadioGroupName = d.getElementById(lfCurrentRadioId).getAttribute("data-name");
            var lfCurrentRadioGroup = d.getElementsByName(lfRadioGroupName);


            if (lfRadioDataChecked == "false") {
                lfCurrentRadioGroup.forEach(function (lfRadioGroup) {
                    var lfCurrentRadioInput = lfRadioGroup.id;
                    d.getElementById(lfCurrentRadioInput).setAttribute("data-is-checked", "false");
                    d.getElementById(lfCurrentRadioId).setAttribute("data-is-checked", "true");
                    d.getElementById(lfCurrentRadioId).checked;
                })
            } else {
                d.getElementById(lfCurrentRadioId).checked = false;
                d.getElementById(lfCurrentRadioId).setAttribute("data-is-checked", "false");
            }
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Dropdown
    var lfDropOpen = "false"; // Global variables used to auto-close current dropdown
    var lfDropOptionsUl; // Global variable used to capture current open dropdown ul options Id
    // Hide All Current lfDropdown() Dropdowns Uls  // (Order of Operation Dependency -- Do Not Swap with Function Below)(Sequential order 1)
    d.addEventListener('click', function (e) {
        if (lfDropOpen === "true" && e.target.className != "lf-select-ul") {
            var lfAllFormDropdowns = d.querySelectorAll('.lf-select-ul');
            lfAllFormDropdowns.forEach(function (lfFormDropdown) {
                lfFormDropdown.setAttribute('style', "display:" + "none");
                lfDropOpen = "false";
            })

            // If Peview Modal is Not Open
            if (lfPreviewModalOpen === "false") {
            lfDropOptionsUl.style.cssText = "opacity: 1";
            }
        }
    })


    // Displays Dropdown Options // (Sequential order 2)
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-input") {
            var lfDataFieldType = e.target.getAttribute("data-field-type");
            if (lfDataFieldType === "lfDrop") {
                var lfFieldId = e.target.getAttribute("data-field-id");
                var lfDropUl = d.getElementById("lf_Drop_Input_Ul_" + lfFieldId);
                lfDropUl.style.cssText = "display: block";
                lfDropOpen = "true";

                // If Peview Modal is Not Open
                if (lfPreviewModalOpen === "false") {
                lfDropOptionsUl = d.getElementById('lf_Ul_Container_' + lfFieldId);
                lfDropOptionsUl.style.cssText = "opacity: 0.25"; 
                }
            }
        }
    })


    // Adds Clicked Dropdown option to Current Drop Input + Updates data-value
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-select-option") {
            var lfDropOptionText = e.target.textContent;
            var lfDropId = e.target.getAttribute("data-drop-id");
            var lfDropInput = d.getElementById("lf_Input_" + lfDropId);
            lfDropInput.value = lfDropOptionText;

            // If Peview Modal is Not Open
            if (lfPreviewModalOpen === "false") {
            // Check Drop Option Radio Input
            var lfDropRadioInputId = e.target.getAttribute("data-drop-input-id");
            var lfDropRadioInput = d.getElementById('lf_input_' + lfDropRadioInputId);
            lfDropRadioInput.checked = "true";
            lfDropRadioInput.setAttribute("data-is-checked", "true");

            // Update Field Container Value
            var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfDropId);
            lfFieldContainer.setAttribute("data-value", lfDropOptionText);
            }
        }
    })


    // Adds New Dropdown Input Option To Current Field
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-drop") {
            // Grabs Data Increments and Ids
            var lfAddDropPlusButton = e.target.id;
            var lfAddDropDataCount = d.getElementById(lfAddDropPlusButton).getAttribute("data-drop-count");
            var lfFieldContainerIncrement = d.getElementById(lfAddDropPlusButton).getAttribute("data-field-increment");
            var lfCurrentDropLabelId = d.getElementById('lf_Li_' + lfFieldContainerIncrement + '_' + lfAddDropDataCount);
            var lfMaxDropCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).getAttribute("data-max-drop-count");
            var lfMaxDropCountIncremented = ++lfMaxDropCount;


            // Create New Dropdown Option
            var dropFieldli = d.createElement("li");
            dropFieldli.id = "lf_Li_" + lfFieldContainerIncrement + "_" + lfMaxDropCountIncremented;
            dropFieldli.classList.add("lf-input-drop-li");
            dropFieldli.setAttribute("data-increment", lfMaxDropCountIncremented);


            var dropInput = d.createElement("INPUT");
            dropInput.setAttribute("type", "radio");
            dropInput.id = "lf_input_" + lfFieldContainerIncrement + "_" + lfMaxDropCountIncremented;
            dropInput.classList.add("lf-input-drop");
            dropInput.setAttribute("name", "lf_drop_group_" + lfFieldContainerIncrement);
            dropInput.setAttribute("data-row-id", lfFieldContainerIncrement + "_" + lfMaxDropCountIncremented);
            dropInput.setAttribute("data-name", "lf_drop_group_" + lfFieldContainerIncrement);
            dropInput.setAttribute("data-is-checked", "false");


            var dropLabel = d.createElement("Label");
            dropLabel.id = "lf_Drop_Label_Option_" + lfFieldContainerIncrement + "_" + lfMaxDropCountIncremented;
            dropLabel.htmlFor = "lf_input_" + lfFieldContainerIncrement;
            dropLabel.classList.add("lf-drop-label");
            dropLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            dropLabel.textContent = "Option";
            dropLabel.contentEditable = "true";
            dropLabel.setAttribute("data-field-increment", lfFieldContainerIncrement);
            dropLabel.setAttribute("data-row-id", lfFieldContainerIncrement + "_" + lfMaxDropCountIncremented);


            var addNewDrop = d.createElement("button");
            addNewDrop.setAttribute("type", "button");
            addNewDrop.id = "lf_Add_Drop_" + lfFieldContainerIncrement + "_" + lfMaxDropCountIncremented;
            addNewDrop.classList.add("lf-add-drop");
            addNewDrop.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewDrop.setAttribute("data-drop-count", lfMaxDropCountIncremented); 
            addNewDrop.setAttribute("data-field-increment", lfFieldContainerIncrement);


            var removeDrop = d.createElement("button");
            removeDrop.setAttribute("type", "button");
            removeDrop.id = "lf_Minus_Drop_" + lfFieldContainerIncrement + "_" + lfMaxDropCountIncremented;
            removeDrop.classList.add("lf-minus-drop");
            removeDrop.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeDrop.setAttribute("data-drop-count", lfMaxDropCountIncremented); 
            removeDrop.setAttribute("data-field-increment", lfFieldContainerIncrement);


            dropFieldli.append(dropInput);
            dropFieldli.append(dropLabel);
            dropFieldli.append(addNewDrop);
            dropFieldli.append(removeDrop);
            lfCurrentDropLabelId.after(dropFieldli);


            var lfUpdateMaxDropCount = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement).setAttribute("data-max-drop-count", lfMaxDropCountIncremented);


            // Adds New Dropdown Option To Dropdown Ul
            var lfDropInputLi = d.createElement("Li");
            lfDropInputLi.classList.add("lf-select-option");
            lfDropInputLi.textContent = "Option";
            lfDropInputLi.setAttribute("data-drop-id", lfFieldContainerIncrement);
            lfDropInputLi.setAttribute("data-drop-input-id", lfFieldContainerIncrement + "_" + lfMaxDropCountIncremented);
            var lfDropInputUl = d.getElementById('lf_Drop_Input_Ul_' + lfFieldContainerIncrement);
            lfDropInputUl.append(lfDropInputLi); 
        }
    })


    // Add Selected Input Value as Dropdown Selected Value
    d.addEventListener('input', function (e) {
        if (e.target.className == "lf-input-drop") {
            var lfRowId = e.target.getAttribute("data-row-id");
            var lfInputOption = d.getElementById('lf_Drop_Label_Option_' + lfRowId);
            var lfInputOptionValue = lfInputOption.textContent;


            var lfFieldContainerIncrement = d.getElementById('lf_Add_Drop_' + lfRowId).getAttribute("data-field-increment");
            var lfDropInput = d.getElementById('lf_Input_' + lfFieldContainerIncrement);
            lfDropInput.value = lfInputOptionValue;

            var lfFieldContainer = d.getElementById("lf_Field_Container_" + lfFieldContainerIncrement);
            lfFieldContainer.setAttribute("data-value", lfInputOptionValue);
        }
    })


    // Update Dropdown Options Text
    d.addEventListener('input', function (e) {
        if (e.target.className == "lf-drop-label") {
            lfUpdateDropOption(e);
        }
    })


    // Updates Dropdown Ul Options  + Update Dropdown Options Text
    function lfUpdateDropOption(e) {
        var lfFieldContainerIncrement = e.target.getAttribute("data-field-increment");
        var lfDropdownUl = d.getElementById('lf_Drop_Input_Ul_' + lfFieldContainerIncrement);
        lfDropdownUl.innerHTML = "";

        var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement);
        var lfMaxDropIncrement = lfFieldContainer.getAttribute("data-max-drop-count");


        var lfDropOptions = lfFieldContainer.querySelectorAll('.lf-drop-label');
        lfDropOptions.forEach(function (lfDropOption) {
            var lfCurrentIncrement = lfDropOption.getAttribute("data-row-id");


            // Update Current Input Value
            var lfFieldIncrement = lfDropOption.getAttribute("data-field-increment");
            if(d.getElementById('lf_input_' + lfCurrentIncrement).checked) {
                var lfCurrentInput = d.getElementById('lf_Input_' + lfFieldIncrement);
                var lfDropLabelOption = d.getElementById('lf_Drop_Label_Option_' + lfCurrentIncrement).textContent;
                lfCurrentInput.value = lfDropLabelOption;
                // Update Field Container Data Value Attribute
                var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfFieldIncrement);
                lfFieldContainer.setAttribute("data-value", lfDropLabelOption);
            }


            var lfDropOptionValue = lfDropOption.textContent;
            var lfDropInputLi = d.createElement("Li");
            lfDropInputLi.classList.add("lf-select-option");
            lfDropInputLi.textContent = lfDropOptionValue;
            lfDropInputLi.setAttribute("data-drop-id", lfFieldContainerIncrement);
            lfDropInputLi.setAttribute("data-drop-input-id", lfCurrentIncrement);
            lfDropdownUl.append(lfDropInputLi);


        })
    }


    // Removes Radio/Checkbox/Drop/Single/Multi-Product Option
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-minus-radio" || e.target.className == "lf-minus-checkbox" || e.target.className == "lf-minus-drop" || e.target.className == "lf-minus-single-product-radio" || e.target.className == "lf-minus-multiple-product-checkbox") {
            var lfCurrentMinusId = e.target.id;
            var lfInputLi;
            var lfFieldIncrement;


            if (e.target.className == "lf-minus-radio" || e.target.className == "lf-minus-checkbox" || e.target.className == "lf-minus-drop") {
                var lfInputLiId = d.getElementById(lfCurrentMinusId).parentElement.id;
                lfInputLi = d.getElementById(lfInputLiId);
                lfFieldIncrement = d.getElementById(lfCurrentMinusId).getAttribute("data-field-increment");
            }


            if(e.target.className == "lf-minus-single-product-radio"){
                var lfMultiProductRadioCount = d.getElementById(lfCurrentMinusId).getAttribute("data-radio-count");
                lfFieldIncrement = d.getElementById(lfCurrentMinusId).getAttribute("data-field-increment");
                lfInputLi = d.getElementById("lf_Li_" + lfFieldIncrement + "_" + lfMultiProductRadioCount);
            }


            if(e.target.className == "lf-minus-multiple-product-checkbox"){
                var lfMultiProductCheckboxCount = d.getElementById(lfCurrentMinusId).getAttribute("data-checkbox-count");
                lfFieldIncrement = d.getElementById(lfCurrentMinusId).getAttribute("data-field-increment");
                lfInputLi = d.getElementById("lf_Li_" + lfFieldIncrement + "_" + lfMultiProductCheckboxCount);
            }

            
            // If only (1) input remains prevent default -- else remove selected input
            var lfFieldType = d.getElementById('lf_Field_Container_' + lfFieldIncrement).getAttribute("data-static-type");
            var lfInputCount = d.getElementById(lfCurrentMinusId).getAttribute("data-" + lfFieldType + "-count");
            var lfInputGroupName = d.getElementById('lf_input_' + lfFieldIncrement + '_' + lfInputCount).getAttribute("data-name");
            var lfGroup = d.getElementsByName(lfInputGroupName).length;
            if (lfGroup !== 1) {
                lfInputLi.remove();
            } else {
                alert(lfFieldType + " fields must have at least one option.");
            }
        }
    });


    // Updates Dropdown Ul Options 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-minus-drop") {
            lfUpdateDropOption(e);
        }
    })


    // Unselects Checked Drop Option
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-input-drop") {

            
            var lfCurrentDropId = e.target.id;
            var lfDropDataChecked = d.getElementById(lfCurrentDropId).getAttribute("data-is-checked")
            var lfDropGroupName = d.getElementById(lfCurrentDropId).getAttribute("data-name");
            var lfCurrentDropGroup = d.getElementsByName(lfDropGroupName);


            if (lfDropDataChecked == "false") {
                lfCurrentDropGroup.forEach(function (lfDropGroup) {
                    var lfCurrentDropInput = lfDropGroup.id;
                    d.getElementById(lfCurrentDropInput).setAttribute("data-is-checked", "false");
                    d.getElementById(lfCurrentDropId).setAttribute("data-is-checked", "true");
                    d.getElementById(lfCurrentDropId).checked;
                })
            } else {
                d.getElementById(lfCurrentDropId).checked = false;
                d.getElementById(lfCurrentDropId).setAttribute("data-is-checked", "false");
            }
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Required
    // Make inputs required
    d.addEventListener('input', function (e) {
        if (e.target.className == "lf-required-checkbox") {
            var requiredOption = e.target.id;
            var attribute = d.getElementById(requiredOption).getAttribute('data-increment');
            // Add required attribute to field container
            if (d.getElementById(requiredOption).checked) {
                var fieldContainer = d.getElementById('lf_Field_Container_' + attribute);
                fieldContainer.setAttribute("data-required", "true");
            } else {
                var fieldContainer = d.getElementById('lf_Field_Container_' + attribute);
                fieldContainer.setAttribute("data-required", "false");
            }
        }
    })


    // Automaticaly Toggles Field Container Required Toggle 
    function addLfRequired(currentIncrement) {
        var isRequired = d.getElementById('lf_Field_Container_' + currentIncrement).getAttribute('data-required');
        var lfRequiredCheckbox = d.getElementById('lf_Require_Field_' + currentIncrement);
        if (isRequired === "true") {
            lfRequiredCheckbox.checked = "true";
        } else {
            // return
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Hidden
    // Adds Hidden Attribute to Field Container
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-hidden") {
            var lfCurrentElementId = e.target.id;
            var attribute = d.getElementById(lfCurrentElementId).getAttribute('data-increment');
            var lfCurrentFieldContainer = d.getElementById('lf_Field_Container_' + attribute);
            lfCurrentFieldContainer.style.opacity = "0.5";
            lfCurrentFieldContainer.setAttribute("data-hidden", "true");
            lfCurrentFieldContainer.setAttribute("data-required", "false");
            // Uncheck Required Field Checkbox
            var requiredCheckbox = d.getElementById('lf_Require_Field_' + attribute);
            if (requiredCheckbox.checked == true) {
                requiredCheckbox.checked = false;

            }
        }
    });


    // Removes Hidden Attribute from Field Container
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-show") {
            var lfCurrentElementId = e.target.id;
            var attribute = d.getElementById(lfCurrentElementId).getAttribute('data-increment');
            var lfCurrentFieldContainer = d.getElementById('lf_Field_Container_' + attribute);
            lfCurrentFieldContainer.setAttribute("data-hidden", "false");
            lfCurrentFieldContainer.style.opacity = "1";
        }
    });


    // UnCheck Required Option if Hide Field Option is Selected and Required Option is Checked
    d.addEventListener('input', function (e) {
        if (e.target.className == "lf-required-checkbox") {
            var requiredOption = e.target.id;
            var attribute = d.getElementById(requiredOption).getAttribute('data-increment');
            var hiddenOption = d.getElementById('lf_Hide_Field_' + attribute);
            var lfRequiredOption = d.getElementById('lf_Require_Field_' + attribute);
            if (hiddenOption.checked == true) {
                d.getElementById('lf_Show_Field_' + attribute).click();
                var lfRequireFieldCheckbox = d.getElementById('lf_Require_Field_' + attribute).checked;
                var lfFieldContainerHiddenAttribute = d.getElementById('lf_Field_Container_' + attribute).setAttribute("data-hidden", "false");
                var lfFieldContainerRequiredAttribute = d.getElementById('lf_Field_Container_' + attribute).setAttribute("data-required", "true");
            }
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Delete Field
    // Deletes field Container (Part1)
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-delete") {
            // Adds delete animation to LF Field Container
            var lfDeleteContainer = e.target.id;
            var lfContainerId = d.getElementById(lfDeleteContainer).getAttribute('data-increment');
            var lfCurrentFieldContainer = "lf_Field_Container_" + lfContainerId;
            var lfGrabFieldContainer = d.getElementById(lfCurrentFieldContainer);
            lfGrabFieldContainer.classList.add("lf-delete-animation");
            // Add delete animation class to droppable area after LF Field Container
            var lfDropZone = "lf_Droppable_Area_" + lfContainerId;
            var lfGrabCurrentDropZone = d.getElementById(lfDropZone);
            lfGrabCurrentDropZone.classList.add("lf-delete-animation");
            // Calls removelfContainer function to delete LF fields container plus droppable area
            setTimeout(removelfContainer, 200, lfDeleteContainer);

            var lfAction = "delete";
            lfUpdateFieldCountAlert(lfAction);
        }
    });


    // Deletes field Container (Part2)
    function removelfContainer(lfDeleteContainer) {
        // Removes LF Field Container
        var lfDeleteContainer = lfDeleteContainer;
        var lfContainerId = d.getElementById(lfDeleteContainer).getAttribute('data-increment');
        var lfCurrentFieldContainer = "lf_Field_Container_" + lfContainerId;
        var lfGrabFieldContainer = d.getElementById(lfCurrentFieldContainer);
        lfGrabFieldContainer.remove(lfCurrentFieldContainer);
        // Removes dropzone after LF Field Container
        var lfDropZone = "lf_Droppable_Area_" + lfContainerId;
        var lfGrabCurrentDropZone = d.getElementById(lfDropZone);
        lfGrabCurrentDropZone.remove(lfDropZone);
    }


    // Adds initial height to LF Container for height Animation
    function lfContainerHeightTransition(fieldContainerId) {
        var fieldContainer = d.getElementById(fieldContainerId);
        fieldContainer.style.height = "100px";
        setTimeout(removeLfContainerHeightTransition, 300, fieldContainerId);
    }


    // Removes initial height for LF Container after height animation
    function removeLfContainerHeightTransition(fieldContainerId) {
        var fieldContainer = d.getElementById(fieldContainerId);
        fieldContainer.style.height = "auto";
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Form Title Drop
    // Makes ajax request on load to grab form titles 
    d.addEventListener("DOMContentLoaded", function () {
        var data = new FormData();
        data.append('action', 'lffes_form_title_editor_dropdown');
        data.append('_ajax_nonce', lfEditorData.lfNonce);
        fetch('/wp-admin/admin-ajax.php', {
            method: "POST",
            credentials: 'same-origin',
            body: data,
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            var lfFormTitlesJSON = data;
            appendFormTitles(lfFormTitlesJSON);
        })
    });


    // Makes ajax request to grab Current Form Id 
    function lfFormId() {
        var data = new FormData();
        data.append('action', 'lffes_update_editor_shortcode_id');
        data.append('_ajax_nonce', lfEditorData.lfNonce);
        data.append('lfformtitle', formTitle);
        fetch('/wp-admin/admin-ajax.php', {
            method: "POST",
            credentials: 'same-origin',
            body: data,
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            var lfFormShortCode = data;
            var lfShortCodeText = d.getElementById('lf_Shortcode');
            lfShortCodeText.textContent = "[likeableforms" + " Id=" + '"' + lfFormShortCode + '"' + "]";
            lfShortCodeText.setAttribute("data-id", lfFormShortCode);
            var lfProgressBar = d.getElementById('lf_Overlay');
            lfProgressBar.style.cssText = "display:none !important;"
            lfCurrentFormId = lfFormShortCode;
            lfCurrentFormId;
            lfNotificationsData(lfCurrentFormId);
            // Grab Submissions
            lfGrabSubmissions();
        })
    }



    
    // Populates form title drop down
    var lfFormTitleArrayGenerated = "false"; // Global variable Prevents Duplicate Form Title Array
    function appendFormTitles(lfFormTitlesJSON) {
        const lfFormTitles = lfFormTitlesJSON;
        // Clear all current form titles
        var lfCurrentFormTitleContainer = d.getElementById('lf_Form_Title_Container').innerHTML = "";
        lfFormTitles.forEach(function (lfTitle) {
            if (lfTitle.title !== "NULL") {
                if(lfFormTitleArrayGenerated === "false") {
                    lfFormTitlesArray.push(lfTitle.title);
                }
                var currentFormTitle = lfTitle.title;
                var lfFormTitle = d.createElement("li");
                lfFormTitle.textContent = currentFormTitle;
                lfFormTitle.id = "lf_" + currentFormTitle;
                lfFormTitle.classList.add("lf-form-title-menu-item");
                lfFormTitle.setAttribute("data-title", currentFormTitle);
                d.getElementById('lf_Form_Title_Container').appendChild(lfFormTitle);
                clearFormTitleMsg();
            } else {
                // return
            }
        });
        lfFormTitleArrayGenerated = "true";
        lfFormTitleArrayGenerated;
    }


    // Makes ajax request on Form Title click grabs form data JSON from PHP to recreate fields
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-form-title-menu-item") {
            d.getElementById('lf_Overlay').style.cssText = "display:block !important;";
            var hiddenOption = e.target.id;
            formTitle = d.getElementById(hiddenOption).getAttribute('data-title');
            var data = new FormData();
            data.append('action', 'lffes_create_editor_form_fields');
            data.append('_ajax_nonce', lfEditorData.lfNonce);
            data.append('lfformtitle', formTitle);
            fetch('/wp-admin/admin-ajax.php', {
                method: "POST",
                credentials: 'same-origin',
                body: data,
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                lfTitleSelectedClearForm();
                lfFormId();
                d.getElementById('lf_Form_Container').innerHTML = "";
                const lfSelectedFormTitleData = data.replace(/\\/g, "");
                const lfParsedData = JSON.parse(lfSelectedFormTitleData);
                setTimeout(lfRecreateFields, 1200, lfParsedData);
                setTimeout(addTitle, 1225);
                setTimeout(lfSeparateAdminEmails, 1225, lfAdminEmailObject); // Separates admin email(s) and re-appends to notifications from and replyto dropdowns
            })
        }
    });


    // Resets all form data when Form Title is Selected
    function lfTitleSelectedClearForm() {
        // Resets form data variables
        lfDataFieldAttributesObject = [];
        lfStringifiedDataFieldAttributes = "";
        // Reset Notifications data
        lfNotificationsMetaObjectStringified = "";
        // Reset Notifications data
        lfNotificationsMetaObject = {
            FromValues: [],
            ToValues: [],
            ReplyToValues: [],
            BccValues: [],
            SubjectValues: [],
            BodyValues: [],
            FileValues: []
        };
        // Reset Submissions Modal Data, Submission Row Count Increment, and re-adds Submissions modal empty image 
        var lfSubmissionRowContainer = d.getElementById('lf_Submissions_Row_Container').innerHTML = "";
        var lfSubmissionsEmptyImage = d.getElementById('lf_Submissions_Empty').style.cssText = "display: block";
        var lfSubmissionsEmptyText = d.getElementById('lf_Submission_Empty_Text').style.cssText = "color: white";
        lfRowCount = 1;
        lfRowCount;
        // Reset Notifications Modal Inputs/Data
        lfTitleSelectedClearNotifications();
    }


    // Clears All Input Values in Notifications Modal -- When Form Title is Selected from Form title drop down
    function lfTitleSelectedClearNotifications() {
        var lfNotificationsFromInput = d.getElementById('lf_Drop_Input_1').value = "";  // From
        var lfNotificationsFromInputDrop = d.getElementById('lf_Drop_1').innerHTML = "";
        var lfMsDropDownTo = d.getElementById('lf_Ms_Drop_1').innerHTML = ""; // To
        var lfMsSelectedContainerTo = d.getElementById('lf_Ms_Selected_Container_1');
        lfMsSelectedContainerTo.innerHTML = "";
        lfMsSelectedContainerTo.classList.add("lf-ms-hide-selected");
        var lfNotificationsReplyToInput = d.getElementById('lf_Drop_Input_2').value = ""; // ReplyTo
        var lfNotificationsReplyToInputDrop = d.getElementById('lf_Drop_2').innerHTML = "";
        var lfMsDropDownBcc = d.getElementById('lf_Ms_Drop_2').innerHTML = ""; // BCC
        var lfMsSelectedContainerBcc = d.getElementById('lf_Ms_Selected_Container_2');
        lfMsSelectedContainerBcc.innerHTML = "";
        lfMsSelectedContainerBcc.classList.add("lf-ms-hide-selected");
        var lfNotificationsSubjectInput = d.getElementById('lf_Subject').value = ""; // Subject
        var lfNotificationsBody = d.getElementById('lf_Notifications_Text_Content').innerHTML = ""; // Body
    }


    // Adds selected form title to editable form title input
    function addTitle() {
        var addTitle = d.getElementById('lf_Form_Title');
        addTitle.value = formTitle;
        addTitle.setAttribute("data-title", formTitle);
    }



    // Adds selected form description to editable form description input
    function lfAddFormDescription(lfFormDescription) {
        var lfFormDescriptionInput = d.getElementById('lf_Form_Description');
        lfFormDescriptionInput.value = lfFormDescription;
    }


    // Removes Null Form Title Msg in Forms Titles Drop down when no forms exist
    function clearFormTitleMsg() {
        var lfNoTitlesMsg = d.getElementById('lf_No_Titles_Container');
        if (lfNoTitlesMsg != undefined) {
            lfNoTitlesMsg.remove();
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Dynamic Save/Update Form Button
    // Form Title Click Event Changes Save Form Button to Update
    d.addEventListener("click", function (e) {
        if (e.target.classList == "lf-form-title-menu-item") {
            var lfSaveFormButton = d.getElementById('lf_Save_Form');
            lfSaveFormButton.textContent = "Update";
            lfSaveFormButton.setAttribute("data-condition", "update"); // new
            var lfPreventSaveOverlay = d.getElementById("lf_Prevent_Save_Overlay");
            lfPreventSaveOverlay.classList.remove("lf-prevent-save-overlay");
        }
    })


    // Add New Form, Duplicate Form or Delete Form Click Events Changes Update Form Button to Save
    d.addEventListener("click", function (e) {
        if (e.target.classList == "lf-add-new-confirm" || e.target.classList == "lf-clone-form" || e.target.classList == "lf-delete-confirm") {
            var lfSaveFormButton = d.getElementById('lf_Save_Form');
            lfSaveFormButton.textContent = "Save";
            lfSaveFormButton.setAttribute("data-condition", "save"); // new
            var lfPreventSaveOverlay = d.getElementById("lf_Prevent_Save_Overlay");
            lfPreventSaveOverlay.classList.remove("lf-prevent-save-overlay");
        }
    })


    // When new fields are clicked or dragged to form
    function lfFormSaveToUpdate() {
        var lfFormShortCode = d.getElementById('lf_Shortcode');
        var lfCurrentFormId = lfFormShortCode.getAttribute('data-id');
        if (lfCurrentFormId !== "1") {
            var lfSaveFormButton = d.getElementById('lf_Save_Form');
            lfSaveFormButton.textContent = "Update";
            lfSaveFormButton.setAttribute("data-condition", "update"); // new
        } else {
            // return
        }
    }



    // Update Data Condition Attribute to Update + Hide Settings Panel -- Form Title Selected
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-form-title-menu-item") {
            // Update save button data condition
            var lfFormTitle = d.getElementById('lf_Save_Form');
            lfFormTitle.setAttribute("data-condition", "update");
            // If settings panel open dismiss settings panel
            var lfAdvancedFieldSettingsPanel = d.getElementById('lf_Advanced_Settings_Panel').style.cssText = "visibility: hidden";
        }
    })


    // Update Data Condition Attribute + Hide Settings Panel -- Add New Form Selected
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-new-confirm") {
            // Update save button data condition
            var lfFormTitle = d.getElementById('lf_Save_Form');
            lfFormTitle.setAttribute("data-condition", "save");
            // If settings panel open dismiss settings panel
            var lfAdvancedFieldSettingsPanel = d.getElementById('lf_Advanced_Settings_Panel').style.cssText = "visibility: hidden";
        }
    })


    // Update Data Condition Attribute to Save + Hide Settings Panel -- Duplicate/Clone Form Selected
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-clone-form") {
            // Update save button data condition
            var lfFormTitle = d.getElementById('lf_Save_Form');
            lfFormTitle.setAttribute("data-condition", "save");
            // If settings panel open dismiss settings panel
            var lfAdvancedFieldSettingsPanel = d.getElementById('lf_Advanced_Settings_Panel').style.cssText = "visibility: hidden";
        }
    })


    // Update Data Condition Attribute to Save + Hide Settings Panel -- Delete Form Selected
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-delete-confirm") {
            // Update save button data condition
            var lfFormTitle = d.getElementById('lf_Save_Form');
            lfFormTitle.setAttribute("data-condition", "save");
            // If settings panel open dismiss settings panel
            var lfAdvancedFieldSettingsPanel = d.getElementById('lf_Advanced_Settings_Panel').style.cssText = "visibility: hidden";
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Save/Update Form
    // Prevents form save if field editor is empty
    d.addEventListener('click', function (e) {
        // Grab Form Editor Content -- If empty shows alert and prevents save
        var lfFieldEditorContent = d.getElementById('lf_Form_Container').innerHTML;
        if (e.target.className == "lf-save" && lfFieldEditorContent == "") {
            alert("Please add at least one field to your form before saving.")
        }
    })


    function lfGrabCheckboxFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = e.getAttribute('data-hidden');
        // Grab Logic Status 
        var lfLogicEnabled = e.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = e.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic);
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        if (fieldType === "lfAddCheckbox") {
        // Grab description text content
        var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        } else {
            var fieldDescriptionText;  
        }
        // Grab Checkbox Group Name
        var lfCheckboxGroupName = d.getElementsByName('lf_checkbox_group_' + dataAttribute);
        // Checkbox Label Object
        var lfCheckboxLabelMetaObject = [];
        lfCheckboxGroupName.forEach(function (lfCheckboxGroup) {
            var lfCurrentCheckboxId = lfCheckboxGroup.id;

            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentCheckboxSelected = d.getElementById(lfCurrentCheckboxId);
            if (lfCurrentCheckboxSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }

            if (fieldType === "lfAddCheckbox") {
                var lfCurrentRowId = d.getElementById(lfCurrentCheckboxId).getAttribute("data-row-id");
                var lfCheckboxLabelOptionText = d.getElementById('lf_Checkbox_Label_Option_' + lfCurrentRowId).textContent;
                var lfCheckboxCount = d.getElementById('lf_Add_Checkbox_' + lfCurrentRowId).getAttribute("data-checkbox-count");
                var currentCheckboxLabel = {
                    "checkboxLabel": lfCheckboxLabelOptionText,
                    "checkboxCount": lfCheckboxCount,
                    "checkboxChecked": lfInputChecked
                };
            } else {
                var lfCurrentRowId = d.getElementById(lfCurrentCheckboxId).getAttribute("data-row-id");
                var lfCheckboxLabelOptionText = d.getElementById('lf_Checkbox_Label_Option_' + lfCurrentRowId).textContent;
                var lfCheckboxCount = d.getElementById('lf_Add_Checkbox_' + lfCurrentRowId).getAttribute("data-checkbox-count");
                var lfCheckboxPrice = d.getElementById('lf_Input_Price_' + lfCurrentRowId).value;
                var lfCheckboxImage = d.getElementById('lf_Product_Div_' + lfCurrentRowId).getAttribute("data-media-url");
                var currentCheckboxLabel = {
                    "checkboxLabel": lfCheckboxLabelOptionText,
                    "checkboxCount": lfCheckboxCount,
                    "checkboxIncrement": lfCurrentRowId,
                    "checkboxChecked": lfInputChecked,
                    "checkboxPrice": lfCheckboxPrice,
                    "checkboxImage": lfCheckboxImage,
                };
            }
            lfCheckboxLabelMetaObject.push(currentCheckboxLabel);
        })
        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            hidden: hiddenAttribute,
            logicEnabled: lfLogicEnabled,
            logic: lfParseLogic,
            labelContent: fieldLabelText,
            helperContent: fieldDescriptionText,
            checkboxLabels: lfCheckboxLabelMetaObject,
        };
        // Add object to lfFieldDataAttributes
        lfDataFieldAttributesObject.push(lfFieldDataAttributes);
    }


    function lfGrabRadioFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = e.getAttribute('data-hidden');
        // Grab Logic Status 
        var lfLogicEnabled = e.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = e.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic);
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        if (fieldType === "lfAddRadio") {
            // Grab description text content
            var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        } else {
            var fieldDescriptionText;  
        }
        // Grab Radio Group Name
        var lfRadioGroupName = d.getElementsByName('lf_radio_group_' + dataAttribute);
        // Radio Label Object
        var lfRadioLabelMetaObject = [];
        lfRadioGroupName.forEach(function (lfRadioGroup) {
            var lfCurrentRadioId = lfRadioGroup.id;

            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentRadioSelected = d.getElementById(lfCurrentRadioId);
            if (lfCurrentRadioSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }


            if (fieldType === "lfAddRadio") {
                var lfCurrentRowId = d.getElementById(lfCurrentRadioId).getAttribute("data-row-id");
                var lfRadioLabelOptionText = d.getElementById('lf_Radio_Label_Option_' + lfCurrentRowId).textContent;
                var lfRadioCount = d.getElementById('lf_Add_Radio_' + lfCurrentRowId).getAttribute("data-radio-count");
                var currentRadioLabel = {
                    "radioLabel": lfRadioLabelOptionText,
                    "radioCount": lfRadioCount,
                    "radioChecked": lfInputChecked
                };
            } else {
                var lfCurrentRowId = d.getElementById(lfCurrentRadioId).getAttribute("data-row-id");
                var lfRadioLabelOptionText = d.getElementById('lf_Radio_Label_Option_' + lfCurrentRowId).textContent;
                var lfRadioCount = d.getElementById('lf_Add_Radio_' + lfCurrentRowId).getAttribute("data-radio-count");
                var lfRadioPrice = d.getElementById('lf_Input_Price_' + lfCurrentRowId).value;
                var lfRadioImage = d.getElementById('lf_Product_Div_' + lfCurrentRowId).getAttribute("data-media-url");
                var currentRadioLabel = {
                    "radioLabel": lfRadioLabelOptionText,
                    "radioCount": lfRadioCount,
                    "radioIncrement": lfCurrentRowId,
                    "radioChecked": lfInputChecked,
                    "radioPrice": lfRadioPrice,
                    "radioImage": lfRadioImage
                };
            }
            lfRadioLabelMetaObject.push(currentRadioLabel);
        })
        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            hidden: hiddenAttribute,
            logicEnabled: lfLogicEnabled,
            logic: lfParseLogic,
            labelContent: fieldLabelText,
            helperContent: fieldDescriptionText,
            radioLabels: lfRadioLabelMetaObject,
        };
        // Add object to lfFieldDataAttributes
        lfDataFieldAttributesObject.push(lfFieldDataAttributes);
    }


    function lfGrabDropdownFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = e.getAttribute('data-hidden');
        // Grab placeholder 
        var inputPlaceholder = e.getAttribute('data-placeholder');
        // Grab Value
        var lfValue = e.getAttribute('data-value');
        // Grab Logic Status 
        var lfLogicEnabled = e.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = e.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic);
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        // Grab description text content
        var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        // Grab Drop Group Name
        var lfDropGroupName = d.getElementsByName('lf_drop_group_' + dataAttribute);
        // Dropdown Label Object
        var lfDropLabelMetaObject = [];
        lfDropGroupName.forEach(function (lfDropGroup) {
            var lfCurrentDropId = lfDropGroup.id;

            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentDropSelected = d.getElementById(lfCurrentDropId);
            if (lfCurrentDropSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }

            var lfCurrentRowId = d.getElementById(lfCurrentDropId).getAttribute("data-row-id");
            var lfDropLabelOptionText = d.getElementById('lf_Drop_Label_Option_' + lfCurrentRowId).textContent;
            var lfDropCount = d.getElementById('lf_Add_Drop_' + lfCurrentRowId).getAttribute("data-drop-count");
            var currentDropLabel = {
                "dropLabel": lfDropLabelOptionText,
                "dropCount": lfDropCount,
                "dropChecked": lfInputChecked
            };
            lfDropLabelMetaObject.push(currentDropLabel);
        })
        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            hidden: hiddenAttribute,
            placeholder: inputPlaceholder,
            value: lfValue,
            logicEnabled: lfLogicEnabled,
            logic: lfParseLogic,
            labelContent: fieldLabelText,
            helperContent: fieldDescriptionText,
            dropLabels: lfDropLabelMetaObject,
        };
        // Add object to lfFieldDataAttributes
        lfDataFieldAttributesObject.push(lfFieldDataAttributes);
    }


    function lfGrabFileFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = e.getAttribute('data-hidden');
        // Grab placeholder 
        var inputPlaceholder = e.getAttribute('data-placeholder');
        // Grab Value
        var lfValue = e.getAttribute('data-value');
        // Grab Logic Status 
        var lfLogicEnabled = e.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = e.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic);
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;


        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            hidden: hiddenAttribute,
            placeholder: inputPlaceholder,
            value: lfValue,
            logicEnabled: lfLogicEnabled,
            logic: lfParseLogic,
            labelContent: fieldLabelText,
        };
        // Add object to lfFieldDataAttributes
        lfDataFieldAttributesObject.push(lfFieldDataAttributes);
    }


    // Makes ajax request on save -- sends data to PHP saves to database 
    d.addEventListener('click', function (e) {
        // Grab Form Editor Content -- Prevents form save if empty
        var lfFieldEditorContent = d.getElementById('lf_Form_Container').innerHTML;
        if (e.target.className == "lf-save" && lfFieldEditorContent != "") {
            lfResetFormDataVariablesBeforeRegenerating();


            // Loops through LF Fields -- Grab field data
            Array.prototype.forEach.call(d.getElementsByClassName("lf-field-container"), function (e) {
                // Grab field Id
                var dataAttribute = e.getAttribute('data-increment');
                // Grab field type 
                var fieldType = e.getAttribute('data-field-type');



                // Grab Data
                if (fieldType === "lfAddRadio") {
                    lfGrabRadioFieldData(e);
                } else if (fieldType === "lfAddCheckbox") {
                    lfGrabCheckboxFieldData(e);
                } else if (fieldType === "lfAddDropdown") {
                    lfGrabDropdownFieldData(e);
                } else if (fieldType === "lfAddSingleProduct") {
                    lfGrabRadioFieldData(e);
                } else if (fieldType === "lfAddMultipleProducts") {
                    lfGrabCheckboxFieldData(e);
                } else if (fieldType === "lfAddFile" || fieldType === "lfAddFiles") {
                    lfGrabFileFieldData(e);
                } else {
                    // Grab required attribute
                    var requiredAttribute = e.getAttribute('data-required');
                    // Grab hidden attribute
                    var hiddenAttribute = e.getAttribute('data-hidden');
                    // Grab placeholder
                    var inputPlaceholder = e.getAttribute('data-placeholder');
                    // Grab MinLength 
                    var minLength = e.getAttribute('data-min-length');
                    // Grab MaxLength 
                    var maxLength = e.getAttribute('data-max-length');
                    // Grab Regex
                    var lfRegex = e.getAttribute('data-regex');
                    // Grab Value
                    var lfValue = e.getAttribute('data-value');
                    // Grab Logic Status 
                    var lfLogicEnabled = e.getAttribute('data-logic-status');
                    // Grab Logic 
                    var lfLogic = e.getAttribute('data-lf-logic');
                    // Parse Logic Object
                    var lfParseLogic = JSON.parse(lfLogic);
                    // Grab field label text content
                    var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                    // Grab description text content
                    var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
                    // Build field data object
                    const lfFieldDataAttributes = {
                        fieldType: fieldType,
                        currentIncrement: dataAttribute,
                        currentCounter: dataAttribute,
                        required: requiredAttribute,
                        hidden: hiddenAttribute,
                        placeholder: inputPlaceholder,
                        min: minLength,
                        max: maxLength,
                        regex: lfRegex,
                        value: lfValue,
                        logicEnabled: lfLogicEnabled,
                        logic: lfParseLogic,
                        labelContent: fieldLabelText,
                        helperContent: fieldDescriptionText,
                    };
                    // Add object to lfFieldDataAttributes
                    lfDataFieldAttributesObject.push(lfFieldDataAttributes);
                }


                // Stringify object and update global
                lfStringifiedDataFieldAttributes = JSON.stringify(lfDataFieldAttributesObject);
                lfStringifiedDataFieldAttributes;
            });


            // Displays AJAX save overlay -- Begin AJAX request
            d.getElementById('lf_Overlay').style.cssText = "display:block !important;";
            // Get existing form title via data attribute
            var dataTitle = d.getElementById('lf_Form_Title');
            var existingFormTitle = dataTitle.getAttribute('data-title');


            // Get form description
            var lfFormDescription = d.getElementById('lf_Form_Description').value;


            // Grab form id
            var existingFormId = d.getElementById('lf_Shortcode').getAttribute('data-id');
            // Get updated form title via inner HTML
            var editableFormTitle = d.getElementById('lf_Form_Title');
            var updatedFormTitle = editableFormTitle.value;
            // Grab Form Save or Update Condition Attribute
            var lfFormSaveUpdateCondtion = d.getElementById('lf_Save_Form').getAttribute("data-condition");


            // Determines if db form row is existing or new form row needs to be created
            var data = new FormData();
            if (lfFormSaveUpdateCondtion == "save") {
                data.append('action', 'lffes_save_editor_form_data');
                data.append('_ajax_nonce', lfEditorData.lfNonce);
                data.append('lfdatatosend', lfStringifiedDataFieldAttributes);
                data.append('lfexistingformtitle', existingFormTitle);
                data.append('lfupdatedformtitle', updatedFormTitle);
                data.append('lfformdescription', lfFormDescription);
            } else {
                data.append('action', 'lffes_update_editor_form_data');
                data.append('_ajax_nonce', lfEditorData.lfNonce);
                data.append('lfdatatosend', lfStringifiedDataFieldAttributes);
                data.append('lfexistingformtitle', existingFormTitle);
                data.append('lfupdatedformtitle', updatedFormTitle);
                data.append('lfexistingformid', existingFormId);
                data.append('lfformdescription', lfFormDescription);
            }


            fetch('/wp-admin/admin-ajax.php', {
                method: "POST",
                credentials: 'same-origin',
                body: data,
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                document.getElementById('lf_Overlay').style.cssText = "display:none !important;";
                var formTitlePlusId = data;
                var parsedFormTitlePlusId = formTitlePlusId;
                var lfCurrentFormTitle = parsedFormTitlePlusId[0];
                var lfCurrentFormId = parsedFormTitlePlusId[1];
                var lfSaveForm = d.getElementById('lf_Save_Form').textContent = "Update";
                var lfSaveDataCondition = d.getElementById('lf_Save_Form').setAttribute("data-condition", "update"); 
                if (lfFormSaveUpdateCondtion == "save") {
                    lfAddShortCode(lfCurrentFormId);
                    lfSaveNotifications(lfFormSaveUpdateCondtion);
                    lfAddFormTitleDropOptionOnSave(lfCurrentFormTitle);
                    var lfCase = "save";
                    var lfExistingFormTitle = "null";
                    var lfFormTitle = lfCurrentFormTitle;
                    var lfUpdatedFormTitle = "null";
                    lfResetFormTitlesArray(lfCase, lfExistingFormTitle, lfUpdatedFormTitle, lfFormTitle);
                } else {
                    lfSaveNotifications(lfFormSaveUpdateCondtion);
                    lfReplaceFormTitleDropOptionOnUpdate();
                    var lfCase = "update";
                    var lfExistingFormTitle = existingFormTitle;
                    var lfUpdatedFormTitle = updatedFormTitle;
                    var lfFormTitle = lfCurrentFormTitle;
                    lfResetFormTitlesArray(lfCase, lfExistingFormTitle, lfUpdatedFormTitle, lfFormTitle);
                }
            })

        }
    });


    // ------------------------------------------------------------------------------------------------------------------------- LF Handle Form Titles Array
    // Resets form title global array
    function lfResetFormTitlesArray(lfCase, lfExistingFormTitle, lfUpdatedFormTitle, lfFormTitle) {

        switch (lfCase) {
            case "save":
                var lfFormTitleData = d.getElementById('lf_Form_Title').setAttribute("data-title", lfFormTitle);
                lfFormTitlesArray.push(lfFormTitle);
                break;

            case "update":
                if(lfExistingFormTitle === lfUpdatedFormTitle){
                    // return
                } else {
                    if(lfUpdatedFormTitle !== lfExistingFormTitle){
                        var index = lfFormTitlesArray.indexOf(lfExistingFormTitle); 
                        if (index > -1) { 
                            lfFormTitlesArray.splice(index, 1);
                        }
                        lfFormTitlesArray.push(lfUpdatedFormTitle);
                    } else {
                        lfFormTitlesArray.push(lfUpdatedFormTitle);
                    }
                }
                break;

            case "delete":
                var index = lfFormTitlesArray.indexOf(lfFormTitle);
                if (index > -1) {
                    lfFormTitlesArray.splice(index, 1);
                }
                break;
                default:
        }
    }



    // Resets form data variables including notifications metadata and submission elements-- Does not remove current field elements or notifications input values 
    function lfResetFormDataVariablesBeforeRegenerating() {
        // Resets form data
        lfDataFieldAttributesObject = [];
        lfStringifiedDataFieldAttributes = "";
        // Resets Notifications data
        lfNotificationsMetaObjectStringified = "";
        lfNotificationsMetaObject = {
            FromValues: [],
            ToValues: [],
            ReplyToValues: [],
            BccValues: [],
            SubjectValues: [],
            BodyValues: [],
            FileValues: []
        };


        // Reset Submissions Modal Data if Form Type is Save not Update
        var lfSaveFormButton = d.getElementById('lf_Save_Form');
        var lfSaveFormButtonType = lfSaveFormButton.textContent;
        if (lfSaveFormButtonType === "Save") {
            // Resets Submissions Modal Data, Submission Row Count Increment, and re-adds Submissions modal empty image 
            var lfSubmissionRowContainer = d.getElementById('lf_Submissions_Row_Container').innerHTML = "";
            var lfSubmissionsEmptyImage = d.getElementById('lf_Submissions_Empty').style.cssText = "display: block";
            var lfSubmissionsEmptyText = d.getElementById('lf_Submission_Empty_Text').style.cssText = "color: white";
            lfRowCount = 1;
            lfRowCount;
        }
    }


    // Adds form id to form editor shortcode
    function lfAddShortCode(lfCurrentFormId) {
        var addShortCode = d.getElementById('lf_Shortcode');
        addShortCode.setAttribute('data-id', lfCurrentFormId);
        addShortCode.innerText = '[likeableforms id="' + lfCurrentFormId + '"]';
    }


    // Add current form title to form titles drop down
    function lfAddFormTitleDropOptionOnSave(lfCurrentFormTitle) {
        var addTitle = d.getElementById('lf_Form_Title')
        addTitle.setAttribute("data-title", lfCurrentFormTitle);
        var editableFormTitle = d.getElementById('lf_Form_Title');
        var currentFormTitle = editableFormTitle.value;
        var lfFormTitle = d.createElement("li");
        lfFormTitle.textContent = currentFormTitle;
        lfFormTitle.id = "lf_" + currentFormTitle;
        lfFormTitle.classList.add("lf-form-title-menu-item");
        lfFormTitle.setAttribute("data-title", currentFormTitle);
        d.getElementById('lf_Form_Title_Container').appendChild(lfFormTitle);
        var lfNoFormTitleMsg = d.getElementById("lf_No_Titles_Container");
        if(lfNoFormTitleMsg != undefined) {
            lfNoFormTitleMsg.remove();
        }
    }


    // Updates in real time existing form title in form title dropdown when form is updated
    function lfReplaceFormTitleDropOptionOnUpdate() {
        var lfGetTitleText = d.getElementById('lf_Form_Title').value;
        var lfPreviousTitle = d.getElementById('lf_Form_Title').getAttribute("data-title"); // this has already been replace by this point but why?
        var lfFormTitleMenuItemOption = d.getElementById('lf_' + lfPreviousTitle).innerText = lfGetTitleText;
        var lfFormTitleData = d.getElementById('lf_Form_Title').setAttribute("data-title", lfGetTitleText);
    }


    // lfSaveNotifications function is located in (LF Save Notifications) Section


    // ------------------------------------------------------------------------------------------------------------------------- LF Duplicate Form
    // Makes ajax request on duplicate -- sends data to PHP clones/saves to database
    d.addEventListener('click', function (e) {
        // Grab Form Editor Content -- Prevents form save if empty
        var lfFieldEditorContent = d.getElementById('lf_Form_Container').innerHTML;
        if (e.target.className == "lf-clone-form" && lfFieldEditorContent != "") {
            // Clears Form Data Variables Before Regenerating
            lfResetFormDataVariablesBeforeDuplicating();
            // Loops through LF Fields -- Grab field data
            Array.prototype.forEach.call(d.getElementsByClassName("lf-field-container"), function (e) {
                // Grab field Id
                var dataAttribute = e.getAttribute('data-increment');
                // Grab field type 
                var fieldType = e.getAttribute('data-field-type');
                // Grab Data
                if (fieldType === "lfAddRadio") {
                    lfGrabRadioFieldData(e);
                } else if (fieldType === "lfAddCheckbox") {
                    lfGrabCheckboxFieldData(e);
                } else if (fieldType === "lfAddDropdown") {
                    lfGrabDropdownFieldData(e);
                } else if (fieldType === "lfAddSingleProduct") {
                    lfGrabRadioFieldData(e);
                } else if (fieldType === "lfAddMultipleProducts") {
                    lfGrabCheckboxFieldData(e)
                } else {
                    // Grab required attribute
                    var requiredAttribute = e.getAttribute('data-required');
                    // Grab hidden attribute
                    var hiddenAttribute = e.getAttribute('data-hidden');
                    // Grab input placeholder text
                    var inputPlaceholder = e.getAttribute('data-placeholder');
                    // Grab MinLength 
                    var minLength = e.getAttribute('data-min-length');
                    // Grab MaxLength 
                    var maxLength = e.getAttribute('data-max-length');
                    // Grab Regex
                    var lfRegex = e.getAttribute('data-regex');
                    // Grab Value
                    var lfValue = e.getAttribute('data-value');
                    // Grab Logic Status 
                    var lfLogicEnabled = e.getAttribute('data-logic-status');
                    // Grab Logic 
                    var lfLogic = e.getAttribute('data-lf-logic');
                    // Parse Logic Object
                    var lfParseLogic = JSON.parse(lfLogic);
                    // Grab field label text content
                    var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                    // Grab description text content
                    var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
                    // Build field data object
                    const lfFieldDataAttributes = {
                        fieldType: fieldType,
                        currentIncrement: dataAttribute,
                        currentCounter: dataAttribute,
                        required: requiredAttribute,
                        hidden: hiddenAttribute,
                        placeholder: inputPlaceholder,
                        min: minLength,
                        max: maxLength,
                        regex: lfRegex,
                        value: lfValue,
                        logicEnabled: lfLogicEnabled,
                        logic: lfParseLogic,
                        labelContent: fieldLabelText,
                        helperContent: fieldDescriptionText
                    };
                    // Add object to lfFieldDataAttributes
                    lfDataFieldAttributesObject.push(lfFieldDataAttributes);
                    // Stringify object and update global
                    lfStringifiedDataFieldAttributes = JSON.stringify(lfDataFieldAttributesObject);
                    lfStringifiedDataFieldAttributes;
                }
            });


            // Displays AJAX save overlay -- Begin AJAX request
            d.getElementById('lf_Overlay').style.cssText = "display:block !important;";
            // Get existing form title via data attribute
            var dataTitle = d.getElementById('lf_Form_Title');
            var existingFormTitle = dataTitle.getAttribute('data-title');
            // Get updated form title via inner HTML
            var editableFormTitle = d.getElementById('lf_Form_Title');
            var updatedFormTitle = editableFormTitle.value;
            // Concatenate Form Title to include (Duplicated)
            var concatUpdatedFormTitle = updatedFormTitle + " (Duplicated)";
            var lfFormDescription = d.getElementById("lf_Form_Description").value;


            // Duplicate Existing Form Data
            var data = new FormData();
            data.append('action', 'lffes_duplicate_editor_form_data');
            data.append('_ajax_nonce', lfEditorData.lfNonce);
            data.append('lfdatatosend', lfStringifiedDataFieldAttributes);
            data.append('lfexistingformtitle', existingFormTitle);
            data.append('lfupdatedformtitle', concatUpdatedFormTitle);
            data.append('lfformdescription', lfFormDescription);
            fetch('/wp-admin/admin-ajax.php', {
                method: "POST",
                credentials: 'same-origin',
                body: data,
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                document.getElementById('lf_Overlay').style.cssText = "display:none !important;";
                var formTitlePlusId = data;
                var parsedFormTitlePlusId = formTitlePlusId;
                var lfCurrentFormTitle = parsedFormTitlePlusId[0]; // concatenated form title
                var lfCurrentFormId = parsedFormTitlePlusId[1];
                lfAfterFormDuplicatedFunctions(lfCurrentFormTitle, lfCurrentFormId);
            })



        }
    });


    // Resets form data variables including notifications metadata and submission elements-- Does not remove current field elements or notifications input values 
    function lfResetFormDataVariablesBeforeDuplicating() {
        // Resets form data
        lfDataFieldAttributesObject = [];
        lfStringifiedDataFieldAttributes = "";
        // Resets Notifications data
        lfNotificationsMetaObjectStringified = "";
        lfNotificationsMetaObject = {
            FromValues: [],
            ToValues: [],
            ReplyToValues: [],
            BccValues: [],
            SubjectValues: [],
            BodyValues: [],
            FileValues: []
        };
        // Resets Submissions Modal Data, Submission Row Count Increment, and re-adds Submissions modal empty image 
        var lfSubmissionRowContainer = d.getElementById('lf_Submissions_Row_Container').innerHTML = "";
        var lfSubmissionsEmptyImage = d.getElementById('lf_Submissions_Empty').style.cssText = "display: block";
        var lfSubmissionsEmptyText = d.getElementById('lf_Submission_Empty_Text').style.cssText = "color: white";
        lfRowCount = 1;
        lfRowCount;
    }


    // After Form Save Functions
    function lfAfterFormDuplicatedFunctions(lfCurrentFormTitle, lfCurrentFormId) {
        lfFormDuplicatedAddShortCode(lfCurrentFormId);
        lfSaveDuplicatedFormNotifications();
        lfFormDuplicatedReplaceAddTitle(lfCurrentFormTitle);
        lfAddDuplicatedFormTitleDropDown(lfCurrentFormTitle);
        lfFormSaveToUpdate();
    }


    // Adds form id to form editor shortcode
    function lfFormDuplicatedAddShortCode(lfCurrentFormId) {
        var addShortCode = d.getElementById('lf_Shortcode');
        addShortCode.setAttribute('data-id', lfCurrentFormId);
        addShortCode.innerText = '[likeableforms id="' + lfCurrentFormId + '"]';
    }


    // Saves Duplicated Form Notifications
    function lfSaveDuplicatedFormNotifications() {
        // Only update notificatiosn meta data variables if saving new or existing form -- prevent updating notifications meta data when duplicating current form
        var lfFromValue = d.getElementById('lf_Drop_Input_1').value;
        var lfFromArray = { "from": lfFromValue };
        lfNotificationsMetaObject.FromValues.push(lfFromArray);


        var lfToValues = d.getElementById('lf_Ms_Selected_Container_1');
        Array.prototype.forEach.call(lfToValues.getElementsByClassName("lf-ms-selected-option"), function (e) {
            var lfToEmails = e.innerText.slice(0, -1);
            var lfToId = e.getAttribute('data-field-id');
            var lfToArray = { "to": lfToEmails, "id": lfToId };
            lfNotificationsMetaObject.ToValues.push(lfToArray);
        })


        var lfReplyToValue = d.getElementById('lf_Drop_Input_2').value;
        var lfReplyToArray = { "replyto": lfReplyToValue };
        lfNotificationsMetaObject.ReplyToValues.push(lfReplyToArray);


        var lfBccValues = d.getElementById('lf_Ms_Selected_Container_2');
        Array.prototype.forEach.call(lfBccValues.getElementsByClassName("lf-ms-selected-option"), function (e) {
            var lfBccEmails = e.innerText.slice(0, -1);
            var lfBccId = e.getAttribute('data-field-id');
            var lfBccArray = { "bcc": lfBccEmails, "id": lfBccId };
            lfNotificationsMetaObject.BccValues.push(lfBccArray);
        })


        var lfSubjectValue = d.getElementById('lf_Subject').value;
        var lfSubjectArray = { "subject": lfSubjectValue };
        lfNotificationsMetaObject.SubjectValues.push(lfSubjectArray);


        var lfBodyValue = d.getElementById('lf_Notifications_Text_Content').innerHTML;
        var lfBodyArray = { "body": lfBodyValue };
        lfNotificationsMetaObject.BodyValues.push(lfBodyArray);


        // Stringify Global Notifications Object -- Store in Separate Global Variable
        lfNotificationsMetaObjectStringified = JSON.stringify(lfNotificationsMetaObject);
        lfNotificationsMetaObjectStringified;


        // Grab Form Title & Form Id to Determine New or Existing Form
        var dataTitle = d.getElementById('lf_Form_Title');
        var existingFormTitle = dataTitle.getAttribute('data-title');
        var editableFormTitle = d.getElementById('lf_Form_Title');
        var updatedFormTitle = editableFormTitle.value;
        var existingFormId = d.getElementById('lf_Shortcode').getAttribute('data-id');


        // Displays AJAX save overlay -- Begin AJAX request
        d.getElementById('lf_Overlay').style.cssText = "display:block !important;";
        var data = new FormData();
        data.append('action', 'lffes_save_update_editor_form_notifications');
        data.append('_ajax_nonce', lfEditorData.lfNonce);
        data.append('lfdatatosend', lfNotificationsMetaObjectStringified);
        data.append('lfexistingformid', existingFormId);
        data.append('lfcondition', 'save');
        fetch('/wp-admin/admin-ajax.php', {
            method: "POST",
            credentials: 'same-origin',
            body: data,
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            document.getElementById('lf_Overlay').style.cssText = "display:none !important;";
        })

    }


    // Adds concatenated form title to current form -- ie. Form title (Duplicated)
    function lfFormDuplicatedReplaceAddTitle(lfCurrentFormTitle) {
        var addTitle = d.getElementById('lf_Form_Title');
        addTitle.value = lfCurrentFormTitle;
    }


    // Adds concatenated duplicated form title to form titles drop down as an option
    function lfAddDuplicatedFormTitleDropDown(lfCurrentFormTitle) {
        var addTitle = d.getElementById('lf_Form_Title')
        addTitle.setAttribute("data-title", lfCurrentFormTitle);
        var editableFormTitle = d.getElementById('lf_Form_Title');
        var currentFormTitle = editableFormTitle.value;
        var lfFormTitle = d.createElement("li");
        lfFormTitle.textContent = currentFormTitle;
        lfFormTitle.id = "lf_" + currentFormTitle;
        lfFormTitle.classList.add("lf-form-title-menu-item");
        lfFormTitle.setAttribute("data-title", currentFormTitle);
        d.getElementById('lf_Form_Title_Container').appendChild(lfFormTitle);
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Delete Form
    // Adds classlist to delete button when field editor is not empty 
    function lfAddDeleteFormButton() {
        var deleteButton = d.getElementById('lf_Delete_Form');
        deleteButton.classList.add("lf-active-delete");
    }


    // Adds delete form confirmation message to form editor
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-delete-form lf-active-delete") {
            var lfDeleteOverlay = d.getElementById('lf_Delete_Overlay');
            lfDeleteOverlay.style.cssText = "display:block !important;";
        }
    });


    // Delete Form Choice in Database Selected
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-delete-confirm") {
            var lfDeleteOverlay = d.getElementById('lf_Delete_Overlay');
            lfDeleteOverlay.style.cssText = "display:none !important;";
            var lfProgressBar = d.getElementById('lf_Overlay');
            lfProgressBar.style.cssText = "display:none !important;";
            var lfShortCodeText = d.getElementById('lf_Shortcode');
            lfCurrentFormId = lfShortCodeText.getAttribute("data-id");
            deleteForminDb();
        }
    });


    // Delete Form Choice in Database Selected
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-do-not-delete") {
            var lfDeleteOverlay = d.getElementById('lf_Delete_Overlay');
            lfDeleteOverlay.style.cssText = "display:none !important;";
        }
    });


    function deleteForminDb() {
        var addYourTitle = d.getElementById('lf_Form_Title').getAttribute('data-title');
        var lfProgressBar = d.getElementById('lf_Overlay');
        lfProgressBar.style.cssText = "display:block !important;";
        // If form is not saved
        if (addYourTitle == null) {
            lfAddNewForm();
        } else {
            // Delete Form in DB
            var data = new FormData();
            data.append('action', 'lffes_delete_editor_form_data');
            data.append('_ajax_nonce', lfEditorData.lfNonce);
            data.append('lfformtitle', addYourTitle);
            data.append('lfformid', lfCurrentFormId);
            fetch('/wp-admin/admin-ajax.php', {
                method: "POST",
                credentials: 'same-origin',
                body: data,
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                var lfFormDeleteSuccess = data;
                var deleteButton = d.getElementById('lf_Delete_Form');
                deleteButton.classList.remove("lf-active-delete");
                var lfCase = "delete";
                var lfExistingFormTitle = "null";
                var lfUpdatedFormTitle = "null";
                var lfFormTitle = addYourTitle;
                lfResetFormTitlesArray(lfCase, lfExistingFormTitle, lfUpdatedFormTitle, lfFormTitle);
                lfAddNewForm(); // Clears current form data
                lfReGrabFormTitles(); // Updates form title dropdown
            })

        }
    }


    


    // Makes ajax request after form deleted to grab updated form titles
    function lfReGrabFormTitles() {
        // Makes ajax request after form deleted to grab updated form titles
        var data = new FormData();
        data.append('action', 'lffes_form_title_editor_dropdown');
        data.append('_ajax_nonce', lfEditorData.lfNonce);
        fetch('/wp-admin/admin-ajax.php', {
            method: "POST",
            credentials: 'same-origin',
            body: data,
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            var lfUpdatedFormTitlesResponse = data;
            var lfFormTitlesJSON = lfUpdatedFormTitlesResponse;
            appendFormTitles(lfFormTitlesJSON);
        })
    };


    // ------------------------------------------------------------------------------------------------------------------------- LF Search
    // Adds documentation search to form editor 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-search") {
            var lfSearchOverlay = d.getElementById('lf_Search_Overlay');
            lfSearchOverlay.style.cssText = "display:block !important;";
        }
    });


    // Add Response to Search Result Modal
    var lfSearchText;
    var lfSearchResponseText;
    var lfSearchLink;
    var lfLinkText;
    var lfTypingInt = 0;
    var lfTypingSpeed = 5;
    var lfFollowLinkRan = false;
    // Display Searcg Result Response Modal
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-search-item") {
            lfTypingInt = 0;
            lfTypingInt;
            var lfSearchItem = e.target;
            lfSearchText = lfSearchItem.getAttribute("data-text");
            lfSearchText;
            lfSearchResponseText = d.getElementById("lf_Search_Response_Text");
            lfSearchResponseText;
            lfSearchResponseText.textContent = "";
            lfSearchLink = lfSearchItem.getAttribute("data-link");
            lfSearchLink;
            lfLinkText = d.getElementById("lf_Search_Response_Link_Text");
            lfLinkText.style.cssText = "opacity: 0";
            lfLinkText.textContent = lfSearchLink;
            lfLinkText.href = lfSearchLink;
            lfLinkText;
            var lfFollowLink = d.getElementById("lf_Follow_Link");
            lfFollowLink.style.cssText = "opacity: 0";
            var lfFollowLink = d.getElementById("lf_Follow_Link");
            lfFollowLink.href = lfSearchLink;
            lfFollowLinkRan = false;
            var lfSearchResultContainer = d.getElementById("lf_Search_Result_Container");
            lfSearchResultContainer.style.cssText = "display: block";
            lfTypeWriter();
        }
    });


    // Types/Prints Search Response
    function lfTypeWriter() {
        if (lfTypingInt < lfSearchText.length) {
            lfSearchResponseText.textContent += lfSearchText.charAt(lfTypingInt);
            lfTypingInt++;
            setTimeout(lfTypeWriter, lfTypingSpeed);
        } 

        if (lfTypingInt === lfSearchText.length && lfFollowLinkRan !== true) {
            lfFollowLinkRan = true;
            lfFollowLinkRan;

            if(lfSearchLink !== "null") {
                var lfFollowLink = d.getElementById("lf_Follow_Link");
                lfFollowLink.style.cssText = "opacity: 1";
                var lfFollowLink = d.getElementById("lf_Search_Response_Link_Text");
                lfFollowLink.style.cssText = "opacity: 1";
            }
        }
    }


    // Filter Search Result Items

    d.addEventListener('input', function (e) {
        if(e.target.id === "lf_Search_Results_Input") {
            // Declare variables
            var lfSearchInput, lfFilter, lfSearchUl, lfSearchli, a, i, txtValue;
            lfSearchInput = d.getElementById('lf_Search_Results_Input');
            lfFilter = lfSearchInput.value.toUpperCase();
            lfSearchUl = d.getElementById("lf_Search_Drop_Ul");
            lfSearchli = lfSearchUl.getElementsByTagName('li');
        
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < lfSearchli.length; i++) {
                a = lfSearchli[i];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(lfFilter) > -1) {
                    lfSearchli[i].style.display = "";
                } else {
                    lfSearchli[i].style.display = "none";
                }
            }
        }
    });

      

    // Hides search modal/previewer 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-search-overlay" || e.target.className == "lf-search-container") {
            var lfSearchOverlay = d.getElementById('lf_Search_Overlay');
            lfSearchOverlay.style.cssText = "display:none !important;";
            var lfSearchResultsContainer = d.getElementById("lf_Search_Result_Container");
            lfSearchResultsContainer.style.cssText = "display:none;";
        }
    });


    // ------------------------------------------------------------------------------------------------------------------------- LF Add New Form
    // Adds classlist to add new button when field editor is not empty 
    function lfAddNewFormButton() {
        var addNewButton = d.getElementById('lf_Add_New');
        addNewButton.classList.add("lf-active-add-new");
    }


    // Triggers add new confirmation message
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-new lf-active-add-new") {
            var lfAddNewOverlay = d.getElementById('lf_Add_New_Overlay');
            lfAddNewOverlay.style.cssText = "display:block !important;";
        }
    });


    // Cancels Add New Form and dismisses confirmation message
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-do-not-add-new") {
            var lfAddNewOverlay = d.getElementById('lf_Add_New_Overlay');
            lfAddNewOverlay.style.cssText = "display:none !important;";
        }
    });


    // Confirms Add New Form, dismisses confirmation message plus calls lfAddNewForm()
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-new-confirm") {
            var lfAddNewOverlay = d.getElementById('lf_Add_New_Overlay');
            lfAddNewOverlay.style.cssText = "display:none !important;";
            var lfProgressBar = d.getElementById('lf_Overlay');
            lfProgressBar.style.cssText = "display:block !important;";
            setTimeout(lfAddNewForm, 3000);
        }
    });


    // Resets all form data when Add New Form is Selected
    function lfAddNewForm() {
        //  ------------------------------------------------------------------------------ Title


        // Reset form editor, title and form title data attribute
        var formContainer = d.getElementById('lf_Form_Container').innerHTML = "";
        var lfFormTitleDataAttribute = d.getElementById('lf_Form_Title').setAttribute('data-title', "");
        var lfFormTitle = d.getElementById('lf_Form_Title').value = "Add Title";


        //  ------------------------------------------------------------------------------ Add New


        // Removes add new function from being called -- removes active class
        var addNewButton = d.getElementById('lf_Add_New');
        addNewButton.classList.remove("lf-active-add-new");


        //  ------------------------------------------------------------------------------ Notifications


        // Resets Notifications data
        lfNotificationsMetaObjectStringified = "";
        // Reset Notifications data
        lfNotificationsMetaObject = {
            FromValues: [],
            ToValues: [],
            ReplyToValues: [],
            BccValues: [],
            SubjectValues: [],
            BodyValues: [],
            FileValues: []
        };
        // Reset Notifications File Attachment Checkbox
        d.getElementById('lf_Add_File_Notifications_Attachment_Input').checked = false;


        //  ------------------------------------------------------------------------------ Submissions


        // Reset Submissions Modal Data, Submission Row Count Increment, and re-adds Submissions modal empty image
        var lfSubmissionRowContainer = d.getElementById('lf_Submissions_Row_Container').innerHTML = "";
        var lfSubmissionsEmptyImage = d.getElementById('lf_Submissions_Empty').style.cssText = "display: block";
        var lfSubmissionsEmptyText = d.getElementById('lf_Submission_Empty_Text').style.cssText = "color: white";
        lfRowCount = 1;
        lfRowCount;
        // Update Submission Tab Count
        var lfSubmissionTabCount = d.getElementById('lf_Submissions_Tab_Count');
        lfSubmissionTabCount.textContent = "0";


        //  ------------------------------------------------------------------------------ Shortcode


        // Reset Shortcode Text Plus shortcode form id attribute
        var lfShortcode = d.getElementById('lf_Shortcode').textContent = '[likeableform id="1"]';
        var lfShortcodeFormIdAttribute = d.getElementById('lf_Shortcode').setAttribute("data-id", "1");


        //  ------------------------------------------------------------------------------ Canvas


        // Reset field Editor/Canvas background
        // Get Assets Directory
        var lfEditorBg = d.getElementById("lf_Editor_Bg");
        lfEditorBg.src = lfAssetsDirectory + 'lf-transparent.png';
        lfEditorBg.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-editor-bg.png" + ");";
        d.getElementById('lf_Editor_Get_Started_Text').style.color = "white";
        // Resets Notifications Modal Inputs/Data
        lfAddNewClearNotifications();
        // Dismiss Overlay


        //  ------------------------------------------------------------------------------ Counters
        // Resets increment and counter global variables
        increment = 1;
        increment;
        counter = 1;
        counter;


        //  ------------------------------------------------------------------------------ Hide Progress Loader


        var lfProgressBar = d.getElementById('lf_Overlay');
        lfProgressBar.style.cssText = "display:none !important;"


        lfSeparateAdminEmails(lfAdminEmailObject); // Separate admin email and re-append to notifications from and replyto dropdowns
    }


    // Clears All Input Values in Notifications Modal -- When Form Title is Selected from Form title drop down
    function lfAddNewClearNotifications() {
        var lfNotificationsFromInput = d.getElementById('lf_Drop_Input_1').value = "";  // From
        var lfNotificationsFromInputDrop = d.getElementById('lf_Drop_1').innerHTML = "";
        var lfMsDropDownTo = d.getElementById('lf_Ms_Drop_1').innerHTML = ""; // To
        var lfMsSelectedContainerTo = d.getElementById('lf_Ms_Selected_Container_1');
        lfMsSelectedContainerTo.innerHTML = "";
        lfMsSelectedContainerTo.classList.add("lf-ms-hide-selected");
        var lfNotificationsReplyToInput = d.getElementById('lf_Drop_Input_2').value = ""; // ReplyTo
        var lfNotificationsReplyToInputDrop = d.getElementById('lf_Drop_2').innerHTML = "";
        var lfMsDropDownBcc = d.getElementById('lf_Ms_Drop_2').innerHTML = ""; // BCC
        var lfMsSelectedContainerBcc = d.getElementById('lf_Ms_Selected_Container_2');
        lfMsSelectedContainerBcc.innerHTML = "";
        lfMsSelectedContainerBcc.classList.add("lf-ms-hide-selected");
        var lfNotificationsSubjectInput = d.getElementById('lf_Subject').value = ""; // Subject
        var lfNotificationsBody = d.getElementById('lf_Notifications_Text_Content').innerHTML = ""; // Body
        var lfNotificationDiv = d.createElement("DIV"); // Re-add Notifications Text Content Placeholder
        var lfNotificationP = d.createElement("P");
        lfNotificationP.textContent = "type here";
        lfNotificationDiv.appendChild(lfNotificationP);
        var lfNotificationsTextContentArea = d.getElementById('lf_Notifications_Text_Content');
        lfNotificationsTextContentArea.appendChild(lfNotificationDiv);
        var lfFileAttachmentCheckbox = d.getElementById('lf_Add_File_Notifications_Attachment_Input').checked = false; // File Attachment Checkbox
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Previewer
    var lfPreviewModalOpen = "false"; // Global variable used to determine current state of preview modal
    // Display Preview Modal
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview" || e.target.className == "lf-preview-tab-plus") {
            var lfPreviewOverlay = d.getElementById('lf_Preview_Overlay');
            lfPreviewOverlay.style.cssText = "display:block !important;";
            lfPreviewGrabFieldData();
            lfPreviewModalOpen = "true";
        }
    })


    // Hides preview modal/previewer 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview-close" || e.target.className == "lf-preview-overlay") {
            var lfPreviewOverlay = d.getElementById('lf_Preview_Overlay');
            lfPreviewOverlay.style.cssText = "display:none !important;";
            var lfPreviewContainer = d.getElementById('lf_Preview_Container');
            lfPreviewContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfPreviewFrame = d.getElementById('lf_Preview_HTML');
            lfPreviewFrame.style.cssText = "height: 74vh;";
            lfPreviewModalOpen = "false";
        }
    });


    // Minimizes preview modal to mobile break point
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview-mobile-media-query") {
            var lfPreviewContainer = d.getElementById('lf_Preview_Container');
            lfPreviewContainer.style.cssText = "left: 50%; width: 525px !important;";
            var lfPreviewFrame = d.getElementById('lf_Preview_HTML');
            lfPreviewFrame.style.cssText = "height: 74vh;";
        }
    });


    // Minimizes preview modal to desktop break point
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview-laptop-media-query") {
            var lfPreviewContainer = d.getElementById('lf_Preview_Container');
            lfPreviewContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfPreviewFrame = d.getElementById('lf_Preview_HTML');
            lfPreviewFrame.style.cssText = "height: 74vh;";
        }
    });


    // Makes preview modal full screen 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview-desktop-media-query") {
            var lfPreviewContainer = d.getElementById('lf_Preview_Container');
            lfPreviewContainer.style.cssText = "position: fixed; top: 0px; left: 0%; height: 100%; width: 100% !important; transform: translate(0%, 0%);";
            var lfPreviewFrame = d.getElementById('lf_Preview_HTML');
            lfPreviewFrame.style.cssText = "height: calc(100vh - 50px);";
        }
    });


    var lfPreviewFormDataAttributes = [];
    var lfStringifiedPreviewDataFieldAttributes;
    // Makes ajax request on save -- sends data to PHP saves to database 
    function lfPreviewGrabFieldData() {
        // Reset previous preview array data
        lfPreviewFormDataAttributes = [];
        lfStringifiedPreviewDataFieldAttributes = "";
        // Grab Form Editor Content -- Prevents form save if empty
        var lfFieldEditorContent = d.getElementById('lf_Form_Container').innerHTML;
        if (lfFieldEditorContent != "") {
            // Loops through LF Fields -- Grab field data
            Array.prototype.forEach.call(d.getElementsByClassName("lf-field-container"), function (e) {
                // Grab field Id
                var dataAttribute = e.getAttribute('data-increment');
                // Grab field type 
                var fieldType = e.getAttribute('data-field-type');

                // Grab Data
                if (fieldType === "lfAddRadio") {
                    lfPreviewGrabRadioFieldData(e);
                } else if (fieldType === "lfAddCheckbox") {
                    lfPreviewGrabCheckboxFieldData(e);
                } else if (fieldType === "lfAddDropdown") {
                    lfPreviewGrabDropFieldData(e);
                } else if (fieldType === "lfAddSingleProduct") {
                    lfPreviewGrabRadioFieldData(e);
                } else if (fieldType === "lfAddMultipleProducts") {
                    lfPreviewGrabCheckboxFieldData(e);
                }else {
                    // Grab required attribute
                    var requiredAttribute = e.getAttribute('data-required');
                    // Grab hidden attribute
                    var hiddenAttribute = e.getAttribute('data-hidden');
                    // Grab placeholder
                    var inputPlaceholder = e.getAttribute('data-placeholder');
                    // Grab MinLength 
                    var minLength = e.getAttribute('data-min-length');
                    // Grab MaxLength 
                    var maxLength = e.getAttribute('data-max-length');
                    // Grab Regex
                    var lfRegex = e.getAttribute('data-regex');
                    // Grab Value
                    var lfValue = e.getAttribute('data-value');
                    // Grab Logic Status 
                    var lfLogicEnabled = e.getAttribute('data-logic-status');
                    // Grab Logic 
                    var lfLogic = e.getAttribute('data-lf-logic');
                    // Parse Logic Object
                    var lfParseLogic = JSON.parse(lfLogic);
                    // Grab field label text content
                    var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                    // Grab description text content
                    var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
                    // Build field data object
                    const lfFieldDataAttributes = {
                        fieldType: fieldType,
                        currentIncrement: dataAttribute,
                        currentCounter: dataAttribute,
                        required: requiredAttribute,
                        hidden: hiddenAttribute,
                        placeholder: inputPlaceholder,
                        min: minLength,
                        max: maxLength,
                        regex: lfRegex,
                        value: lfValue,
                        logicEnabled: lfLogicEnabled,
                        logic: lfParseLogic,
                        labelContent: fieldLabelText,
                        helperContent: fieldDescriptionText,
                    };
                    // Add object to lfPreviewFormDataAttributes
                    lfPreviewFormDataAttributes.push(lfFieldDataAttributes);
                }

                // Stringify object and update global
                lfStringifiedPreviewDataFieldAttributes = JSON.stringify(lfPreviewFormDataAttributes);
                lfStringifiedPreviewDataFieldAttributes;
                // Calls creator function switch
                lfCreateFields(lfStringifiedPreviewDataFieldAttributes);
            });
        }
    }


    // Grab current form data
    function lfPreviewGrabCheckboxFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = e.getAttribute('data-hidden');
        // Grab Logic Status 
        var lfLogicEnabled = e.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = e.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic);
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        if (fieldType === "lfAddCheckox") {
            // Grab description text content
            var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        } else {
            var fieldDescriptionText;
        }
        // Grab Checkbox Group Name
        var lfCheckboxGroupName = d.getElementsByName('lf_checkbox_group_' + dataAttribute);
        // Checkbox Label Object
        var lfCheckboxLabelMetaObject = [];
        lfCheckboxGroupName.forEach(function (lfCheckboxGroup) {
            var lfCurrentCheckboxId = lfCheckboxGroup.id;
    
            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentCheckboxSelected = d.getElementById(lfCurrentCheckboxId);
            if (lfCurrentCheckboxSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }
    
            if (fieldType === "lfAddCheckbox") {
                var lfCurrentRowId = d.getElementById(lfCurrentCheckboxId).getAttribute("data-row-id");
                var lfCheckboxLabelOptionText = d.getElementById('lf_Checkbox_Label_Option_' + lfCurrentRowId).textContent;
                var lfCheckboxCount = d.getElementById('lf_Add_Checkbox_' + lfCurrentRowId).getAttribute("data-checkbox-count");
                var currentCheckboxLabel = {
                    "checkboxLabel": lfCheckboxLabelOptionText,
                    "checkboxCount": lfCheckboxCount,
                    "checkboxChecked": lfInputChecked
                };
            } else {
                var lfCurrentRowId = d.getElementById(lfCurrentCheckboxId).getAttribute("data-row-id");
                var lfCheckboxLabelOptionText = d.getElementById('lf_Checkbox_Label_Option_' + lfCurrentRowId).textContent;
                var lfCheckboxCount = d.getElementById('lf_Add_Checkbox_' + lfCurrentRowId).getAttribute("data-checkbox-count");
                var lfCheckboxPrice = d.getElementById('lf_Input_Price_' + lfCurrentRowId).value;
                var lfCheckboxImage = d.getElementById('lf_Product_Div_' + lfCurrentRowId).getAttribute("data-media-url");
                var currentCheckboxLabel = {
                    "checkboxLabel": lfCheckboxLabelOptionText,
                    "checkboxCount": lfCheckboxCount,
                    "checkboxChecked": lfInputChecked,
                    "checkboxPrice": lfCheckboxPrice,
                    "checkboxImage": lfCheckboxImage,
                };
            }
        lfCheckboxLabelMetaObject.push(currentCheckboxLabel);
        })

        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            hidden: hiddenAttribute,
            logicEnabled: lfLogicEnabled,
            logic: lfParseLogic,
            labelContent: fieldLabelText,
            helperContent: fieldDescriptionText,
            checkboxLabels: lfCheckboxLabelMetaObject,
        };
        // Add object to lfFieldDataAttributes
        lfPreviewFormDataAttributes.push(lfFieldDataAttributes);
    }


    function lfPreviewGrabRadioFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = e.getAttribute('data-hidden');
        // Grab Logic Status 
        var lfLogicEnabled = e.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = e.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic);
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        if (fieldType === "lfAddRadio") {
            // Grab description text content
            var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        } else {
            var fieldDescriptionText;
        }
        // Grab Radio Group Name
        var lfRadioGroupName = d.getElementsByName('lf_radio_group_' + dataAttribute);
        // Radio Label Object
        var lfRadioLabelMetaObject = [];
        lfRadioGroupName.forEach(function (lfRadioGroup) {
            var lfCurrentRadioId = lfRadioGroup.id;
        
            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentRadioSelected = d.getElementById(lfCurrentRadioId);
            if (lfCurrentRadioSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }
        
            if (fieldType === "lfAddRadio") {
                var lfCurrentRowId = d.getElementById(lfCurrentRadioId).getAttribute("data-row-id");
                var lfRadioLabelOptionText = d.getElementById('lf_Radio_Label_Option_' + lfCurrentRowId).textContent;
                var lfRadioCount = d.getElementById('lf_Add_Radio_' + lfCurrentRowId).getAttribute("data-radio-count");
                var currentRadioLabel = {
                    "radioLabel": lfRadioLabelOptionText,
                    "radioCount": lfRadioCount,
                    "radioChecked": lfInputChecked
                };
            } else {
                var lfCurrentRowId = d.getElementById(lfCurrentRadioId).getAttribute("data-row-id");
                var lfRadioLabelOptionText = d.getElementById('lf_Radio_Label_Option_' + lfCurrentRowId).textContent;
                var lfRadioCount = d.getElementById('lf_Add_Radio_' + lfCurrentRowId).getAttribute("data-radio-count");
                var lfRadioPrice = d.getElementById('lf_Input_Price_' + lfCurrentRowId).value;
                var lfRadioImage = d.getElementById('lf_Product_Div_' + lfCurrentRowId).getAttribute("data-media-url");
                var currentRadioLabel = {
                    "radioLabel": lfRadioLabelOptionText,
                    "radioCount": lfRadioCount,
                    "radioChecked": lfInputChecked,
                    "radioPrice": lfRadioPrice,
                    "radioImage": lfRadioImage
                };
            }
            lfRadioLabelMetaObject.push(currentRadioLabel);
            })

            // Build field data object
            const lfFieldDataAttributes = {
                fieldType: fieldType,
                currentIncrement: dataAttribute,
                currentCounter: dataAttribute,
                required: requiredAttribute,
                hidden: hiddenAttribute,
                logicEnabled: lfLogicEnabled,
                logic: lfParseLogic,
                labelContent: fieldLabelText,
                helperContent: fieldDescriptionText,
                radioLabels: lfRadioLabelMetaObject,
            };
        // Add object to lfFieldDataAttributes
        lfPreviewFormDataAttributes.push(lfFieldDataAttributes);
    }


    // Recreates Drop Field
    function lfPreviewGrabDropFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = e.getAttribute('data-hidden');
        // Grab placeholder 
        var inputPlaceholder = e.getAttribute('data-placeholder');
        // Grab Value
        var lfValue = e.getAttribute('data-value');
        // Grab Logic Status 
        var lfLogicEnabled = e.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = e.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic);
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        // Grab description text content
        var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        // Grab Drop Group Name
        var lfDropGroupName = d.getElementsByName('lf_drop_group_' + dataAttribute);
        // Dropdown Label Object
        var lfDropLabelMetaObject = [];
        lfDropGroupName.forEach(function (lfDropGroup) {
            var lfCurrentDropId = lfDropGroup.id;
        
            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentDropSelected = d.getElementById(lfCurrentDropId);
            if (lfCurrentDropSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }
        
            var lfCurrentRowId = d.getElementById(lfCurrentDropId).getAttribute("data-row-id");
            var lfDropLabelOptionText = d.getElementById('lf_Drop_Label_Option_' + lfCurrentRowId).textContent;
            var lfDropCount = d.getElementById('lf_Add_Drop_' + lfCurrentRowId).getAttribute("data-drop-count");
            var currentDropLabel = {
                "dropLabel": lfDropLabelOptionText,
                "dropCount": lfDropCount,
                "dropChecked": lfInputChecked
            };
            lfDropLabelMetaObject.push(currentDropLabel);
            })

            // Build field data object
            const lfFieldDataAttributes = {
                fieldType: fieldType,
                currentIncrement: dataAttribute,
                currentCounter: dataAttribute,
                required: requiredAttribute,
                hidden: hiddenAttribute,
                placeholder: inputPlaceholder,
                value: lfValue,
                logicEnabled: lfLogicEnabled,
                logic: lfParseLogic,
                labelContent: fieldLabelText,
                helperContent: fieldDescriptionText,
                dropLabels: lfDropLabelMetaObject,
            };
        // Add object to lfFieldDataAttributes
        lfPreviewFormDataAttributes.push(lfFieldDataAttributes);
    }
    

    // Adds Fields to Preview Modal
    function lfCreateFields(lfStringifiedPreviewDataFieldAttributes) {
        const lfAllSavedFieldsParsedData = JSON.parse(lfStringifiedPreviewDataFieldAttributes);
        // Clear current preview container HTML/fields
        var lfPreviewContainerHTML = d.getElementById('lf_Preview_Form');
        lfPreviewContainerHTML.innerHTML = "";
        
        lfAddPreviewHeader();

        lfAllSavedFieldsParsedData.forEach(function (lfSavedFieldData) {
            var lfFieldTypes = lfSavedFieldData.fieldType;

            switch (lfFieldTypes) {
                case "lfAddEmail":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddEmail(lfCreatorData);
                    break;

                case "lfAddTextarea":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddTextarea(lfCreatorData);
                    break;

                case "lfAddPass":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddPass(lfCreatorData);
                    break;

                case "lfAddText":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddText(lfCreatorData);
                    break;

                case "lfAddFile":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddFile(lfCreatorData);
                    break;

                case "lfAddNumber":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddNumber(lfCreatorData);
                    break;

                case "lfAddDate":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddDate(lfCreatorData);
                    break;

                case "lfAddRadio":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddRadio(lfCreatorData);
                    break;

                case "lfAddCheckbox":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddCheckbox(lfCreatorData);
                    break;

                case "lfAddPhone":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddPhone(lfCreatorData);
                    break;

                case "lfAddUrl":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddUrl(lfCreatorData);
                    break;

                case "lfAddFiles":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddFiles(lfCreatorData);
                    break;

                case "lfAddDropdown":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddDrop(lfCreatorData);
                    break;

                case "lfAddSingleProduct":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddSingleProduct(lfCreatorData);
                    break;
                
                case "lfAddMultipleProducts":
                    var lfCreatorData = lfSavedFieldData;
                    lfPreviewAddMultipleProducts(lfCreatorData);
                    break;
            }
        })
        lfAddPreviewFooter();
    }


    // Creates Email Field
    function lfPreviewAddEmail(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("LEGEND");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddEmail");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "email");
        inputField.setAttribute("inputmode", "email");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-preview-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.regex !== "pending generation") {
            inputField.pattern = lfCreatorData.regex;
        } 
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Email Field
    function lfPreviewAddTextarea(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("LEGEND");
        var inputField = d.createElement("TEXTAREA");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddTextarea");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "email");
        inputField.setAttribute("inputmode", "text");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-preview-input");
        inputField.setAttribute("rows", "5");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.regex !== "pending generation") {
            inputField.pattern = lfCreatorData.regex;
        } 
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Password Field
    function lfPreviewAddPass(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("LEGEND");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddPass");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "password");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-preview-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.regex !== "pending generation") {
            inputField.pattern = lfCreatorData.regex;
        } 
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Text Field
    function lfPreviewAddText(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("LEGEND");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddText");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = "Text";
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "text");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-preview-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.regex !== "pending generation") {
            inputField.pattern = lfCreatorData.regex;
        } 
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = "Description";
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates File Upload Field
    function lfPreviewAddFile(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddFile");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "file");
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-preview-input");
        inputField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-add-file-icon.png" + ");";
        inputField.setAttribute("name", lfCreatorData.currentIncrement);
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Number Field
    function lfPreviewAddNumber(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddNumber");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "number");
        inputField.setAttribute("inputmode", "numeric");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("min", lfCreatorData.min);
        inputField.setAttribute("max", lfCreatorData.max);
        inputField.classList.add("lf-preview-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.regex !== "pending generation") {
            inputField.pattern = lfCreatorData.regex;
        } 
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Data Field
    function lfPreviewAddDate(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddDate");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-previe-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "date");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-preview-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.regex !== "pending generation") {
            inputField.pattern = lfCreatorData.regex;
        } 
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Recreates Radio Field
    function lfPreviewAddRadio(lfCreatorData) {
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfRequiredSet;


        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Preview_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddRadio");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", "Radio");


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Preview_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-preview-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;


        var fieldLabelContainer = d.createElement("DIV");
        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        var editingText = d.createElement("P");
        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        if (lfCreatorData.required === "true") {
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        var radioFieldUl = d.createElement("ul");
        radioFieldUl.id = "lf_Preview_Ul_Container_" + currentIncrement;
        radioFieldUl.classList.add("lf-preview-input-radio-ul");
        radioFieldUl.setAttribute("data-increment", currentIncrement);

        var helperText = d.createElement("TEXT");
        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;


        // Re-Creates Radio Options
        var lfRadioLabels = lfCreatorData.radioLabels;
        lfRadioLabels.forEach(function (lfRadioLabel) {
            var lfRowId = lfRadioLabel.radioCount;
            var lfCurrentRadioLabel = lfRadioLabel.radioLabel;
            var lfRadioChecked = lfRadioLabel.radioChecked;


            var radioFieldli = d.createElement("li");
            radioFieldli.id = "lf_Preview_Li_" + currentIncrement + "_" + lfRowId;
            radioFieldli.classList.add("lf-preview-input-radio-li");
            radioFieldli.setAttribute("data-increment", lfRowId);


            var radioInput = d.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.id = "lf_preview_input_" + currentIncrement + "_" + lfRowId;
            radioInput.classList.add("lf-preview-input-radio");
            radioInput.setAttribute("name", "lf_preview_radio_group_" + currentIncrement);
            radioInput.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
            radioInput.value = lfCurrentRadioLabel;


            if (lfCreatorData.required === "true" && lfRequiredSet !== "true") {
                radioInput.required = "true";
                lfRequiredSet = "true";
                lfRequiredSet;
            }

            if (lfRadioChecked === "true") {
                radioInput.checked = "true";
            }


            var radioLabel = d.createElement("Label");
            radioLabel.id = "lf_Preview_Radio_Label_Option_" + currentIncrement + "_" + lfRowId;
            radioLabel.htmlFor = "lf_preview_input_" + currentIncrement + "_" + lfRowId;
            radioLabel.classList.add("lf-preview-radio-label");
            radioLabel.textContent = lfCurrentRadioLabel;


            radioFieldli.append(radioInput);
            radioFieldli.append(radioLabel);
            radioFieldUl.append(radioFieldli);
        })


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(radioFieldUl);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Recreates Checkbox Field
    function lfPreviewAddCheckbox(lfCreatorData) {
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfRequiredSet;

        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Preview_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddCheckbox");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", "Checkbox");


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Preview_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-preview-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;


        var fieldLabelContainer = d.createElement("DIV");
        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        var editingText = d.createElement("P");
        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        if (lfCreatorData.required === "true") {
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }

        var checkboxFieldUl = d.createElement("ul");
        checkboxFieldUl.id = "lf_Preview_Ul_Container_" + currentIncrement;
        checkboxFieldUl.classList.add("lf-preview-input-checkbox-ul");
        checkboxFieldUl.setAttribute("data-increment", currentIncrement);


        var helperText = d.createElement("TEXT");
        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;


        // Re-Creates Checkbox Options
        var lfCheckboxLabels = lfCreatorData.checkboxLabels;
        lfCheckboxLabels.forEach(function (lfCheckboxLabel) {
            var lfRowId = lfCheckboxLabel.checkboxCount;
            var lfCurrentCheckboxLabel = lfCheckboxLabel.checkboxLabel;
            var lfCheckboxChecked = lfCheckboxLabel.checkboxChecked;


            var checkboxFieldli = d.createElement("li");
            checkboxFieldli.id = "lf_Preview_Li_" + currentIncrement + "_" + lfRowId;
            checkboxFieldli.classList.add("lf-preview-input-checkbox-li");
            checkboxFieldli.setAttribute("data-increment", lfRowId);


            var checkboxInput = d.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.id = "lf_preview_input_" + currentIncrement + "_" + lfRowId;
            checkboxInput.classList.add("lf-preview-input-checkbox");
            checkboxInput.setAttribute("name", "lf_preview_checkbox_group_" + currentIncrement);
            checkboxInput.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
            checkboxInput.value = lfCurrentCheckboxLabel;


            if (lfCreatorData.required === "true" && lfRequiredSet !== "true") {
                checkboxInput.required = "true";
                lfRequiredSet = "true";
                lfRequiredSet;
            }

            if (lfCheckboxChecked === "true") {
                checkboxInput.checked = "true";
            }


            var checkboxLabel = d.createElement("Label");
            checkboxLabel.id = "lf_Preview_Checkbox_Label_Option_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.htmlFor = "lf_preview_input_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.classList.add("lf-preview-checkbox-label");
            checkboxLabel.textContent = lfCurrentCheckboxLabel;


            checkboxFieldli.append(checkboxInput);
            checkboxFieldli.append(checkboxLabel);
            checkboxFieldUl.append(checkboxFieldli);
        })


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(checkboxFieldUl);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Phone Field
    function lfPreviewAddPhone(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddPhone");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "phone");
        inputField.setAttribute("inputmode", "tel");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-preview-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.regex !== "pending generation") {
            inputField.pattern = lfCreatorData.regex;
        } 
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates URL field
    function lfPreviewAddUrl(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddUrl");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "url");
        inputField.setAttribute("inputmode", "url");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-preview-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.regex !== "pending generation") {
            inputField.pattern = lfCreatorData.regex;
        } 
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);

        }


        helperText.id = "lf_Preview_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Multi-File Upload Field
    function lfPreviewAddFiles(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddFiles");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "file");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement); 
        inputField.id = "lf_Preview_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-preview-input");
        inputField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-add-files-icon.png" + ");";
        inputField.multiple = "true";
        inputField.setAttribute("name", lfCreatorData.currentIncrement);
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Recreates Drop Field
    function lfPreviewAddDrop(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Preview_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", "00" + lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddDropdown");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Preview_Input_" + "00" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Preview_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-preview-field-label");


        editingText.id = "lf_Preview_Editing_Text_" + "00" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "text");
        inputField.setAttribute("autocomplete", "off");
        inputField.setAttribute("readonly", "true");
        inputField.setAttribute("data-lf-field-id", "00" + lfCreatorData.currentIncrement);
        inputField.setAttribute("data-field-type", "lfDrop");
        inputField.style.cssText = "cursor: pointer; box-shadow: none !important; background-color: transparent !important;";
        inputField.id = "lf_Preview_Input_" + "00" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-preview-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        // Dropdown Option Ul
        var lfDropInputUl = d.createElement("UL");
        lfDropInputUl.id = "lf_Preview_Drop_Input_Ul_" + "00" + lfCreatorData.currentIncrement;
        lfDropInputUl.classList.add("lf-preview-select-ul");



        // Creates Dropdown Options
        var lfDropLabels = lfCreatorData.dropLabels;
        lfDropLabels.forEach(function (lfdropLabel) {

            // Sets Default Value
            var lfDropChecked = lfdropLabel.dropChecked;
            if (lfDropChecked === "true") {
                inputField.value  = lfdropLabel;
            }

            // Adds Drop Options
            var lfDropInputLi = d.createElement("Li");
            lfDropInputLi.classList.add("lf-preview-select-option");
            lfDropInputLi.textContent = lfdropLabel.dropLabel;
            lfDropInputLi.setAttribute("data-drop-id", "00" + lfCreatorData.currentIncrement);
            lfDropInputUl.append(lfDropInputLi); 
        })


        helperText.id = "lf_Preview_Field_Description_" + "00" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-preview-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(lfDropInputUl); 
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Recreates Single Product Field
    function lfPreviewAddSingleProduct(lfCreatorData) {
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfRequiredSet;


        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Preview_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddSingleProduct");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", "Radio");


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Preview_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-preview-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;


        var fieldLabelContainer = d.createElement("DIV");
        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        var editingText = d.createElement("P");
        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        if (lfCreatorData.required === "true") {
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        var radioFieldUl = d.createElement("ul");
        radioFieldUl.id = "lf_Preview_Ul_Container_" + currentIncrement;
        radioFieldUl.classList.add("lf-preview-input-single-product-ul");
        radioFieldUl.setAttribute("data-increment", currentIncrement);


        // Re-Creates Radio Options
        var lfRadioLabels = lfCreatorData.radioLabels;
        lfRadioLabels.forEach(function (lfRadioLabel) {
            var lfRowId = lfRadioLabel.radioCount;
            var lfCurrentRadioLabel = lfRadioLabel.radioLabel;
            var lfRadioChecked = lfRadioLabel.radioChecked;


            var radioFieldli = d.createElement("li");
            radioFieldli.id = "lf_Preview_Li_" + currentIncrement + "_" + lfRowId;
            radioFieldli.classList.add("lf-preview-input-single-product-li");
            radioFieldli.setAttribute("data-increment", lfRowId);
            radioFieldli.style.cssText = "background-image: url(" + lfRadioLabel.radioImage + ");";


            var radioInput = d.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.id = "lf_preview_input_" + currentIncrement + "_" + lfRowId;
            radioInput.classList.add("lf-preview-input-single-product-radio");
            radioInput.setAttribute("name", "lf_preview_radio_group_" + currentIncrement);
            radioInput.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
            radioInput.value = lfCurrentRadioLabel;


            if (lfCreatorData.required === "true" && lfRequiredSet !== "true") {
                radioInput.required = "true";
                lfRequiredSet = "true";
                lfRequiredSet;
            }

            if (lfRadioChecked === "true") {
                radioInput.checked = "true";
            }


            var radioLabel = d.createElement("Label");
            radioLabel.id = "lf_Preview_Radio_Label_Option_" + currentIncrement + "_" + lfRowId;
            radioLabel.htmlFor = "lf_preview_input_" + currentIncrement + "_" + lfRowId;
            radioLabel.classList.add("lf-preview-single-product-label");


            var radioPrice = d.createElement("P");
            radioPrice.classList.add("lf-single-product-price");
            radioPrice.textContent = lfRadioLabel.radioPrice;


            var radioProductName = d.createElement("P");
            radioProductName.classList.add("lf-single-product-product-name");
            radioProductName.textContent = lfCurrentRadioLabel;


            radioFieldli.append(radioInput);
            radioFieldli.append(radioLabel);
            radioFieldli.append(radioProductName);
            radioFieldli.append(radioPrice);
            radioFieldUl.append(radioFieldli);
        })


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(radioFieldUl);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Recreates Multiple Products Field
    function lfPreviewAddMultipleProducts(lfCreatorData) {
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfRequiredSet;

        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Preview_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-preview-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddMultipleProducts");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", "Checkbox");


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Preview_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-preview-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;


        var fieldLabelContainer = d.createElement("DIV");
        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        var editingText = d.createElement("P");
        editingText.id = "lf_Preview_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-preview-editing-text");
        editingText.textContent = "editing •";


        if (lfCreatorData.required === "true") {
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-preview-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }

        var checkboxFieldUl = d.createElement("ul");
        checkboxFieldUl.id = "lf_Preview_Ul_Container_" + currentIncrement;
        checkboxFieldUl.classList.add("lf-preview-input-multiple-products-ul");
        checkboxFieldUl.setAttribute("data-increment", currentIncrement);


        // Re-Creates Checkbox Options
        var lfCheckboxLabels = lfCreatorData.checkboxLabels;
        lfCheckboxLabels.forEach(function (lfCheckboxLabel) {
            var lfRowId = lfCheckboxLabel.checkboxCount;
            var lfCurrentCheckboxLabel = lfCheckboxLabel.checkboxLabel;
            var lfCheckboxChecked = lfCheckboxLabel.checkboxChecked;


            var checkboxFieldli = d.createElement("li");
            checkboxFieldli.id = "lf_Preview_Li_" + currentIncrement + "_" + lfRowId;
            checkboxFieldli.classList.add("lf-preview-input-multiple-products-li");
            checkboxFieldli.setAttribute("data-increment", lfRowId);
            checkboxFieldli.style.cssText = "background-image: url(" + lfCheckboxLabel.checkboxImage + ");";


            var checkboxInput = d.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.id = "lf_preview_input_" + currentIncrement + "_" + lfRowId;
            checkboxInput.classList.add("lf-preview-input-multiple-products-checkbox");
            checkboxInput.setAttribute("name", "lf_preview_checkbox_group_" + currentIncrement);
            checkboxInput.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
            checkboxInput.value = lfCurrentCheckboxLabel;


            if (lfCreatorData.required === "true" && lfRequiredSet !== "true") {
                checkboxInput.required = "true";
                lfRequiredSet = "true";
                lfRequiredSet;
            }

            if (lfCheckboxChecked === "true") {
                checkboxInput.checked = "true";
            }


            var checkboxLabel = d.createElement("Label");
            checkboxLabel.id = "lf_Preview_Checkbox_Label_Option_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.htmlFor = "lf_preview_input_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.classList.add("lf-preview-multiple-products-label");


            var checkboxPrice = d.createElement("P");
            checkboxPrice.classList.add("lf-multiple-products-price");
            checkboxPrice.textContent = lfCheckboxLabel.checkboxPrice;


            var checkboxProductName = d.createElement("P");
            checkboxProductName.classList.add("lf-multiple-products-product-name");
            checkboxProductName.textContent = lfCurrentCheckboxLabel;


            checkboxFieldli.append(checkboxInput);
            checkboxFieldli.append(checkboxLabel);
            checkboxFieldli.append(checkboxProductName);
            checkboxFieldli.append(checkboxPrice);
            checkboxFieldUl.append(checkboxFieldli);
        })


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(checkboxFieldUl);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Add LF Field to Form
    function lfAddField(fieldContainer, lfHidden) {
        if (lfHidden == "false") {
            d.getElementById('lf_Preview_Form').append(fieldContainer);
        } else {
            d.getElementById('lf_Preview_Form').append(fieldContainer);
            fieldContainer.style.cssText = "display:none";
        }
    }


    function lfAddPreviewHeader() {
        var lfForm = d.getElementById('lf_Preview_Form');
        var lfHeader = d.createElement("DIV");
        lfHeader.classList.add("lf-preview-header");
        lfHeader.id = "lf_Preview_Header";


        var lfFormTitle = d.createElement("P");
        lfFormTitle.classList.add("lf-preview-form-title");
        lfFormTitle.style.cssText = "background-image: url(" + lfSiteIconUrl + ")";
        lfFormTitle.textContent = "Contact Us";

        var lfFormDescription = d.createElement("P");
        lfFormDescription.classList.add("lf-preview-form-description");
        lfFormDescription.textContent = "This is an example form description. Explain the purpose of your form and what information you would like.";


        lfHeader.append(lfFormTitle);
        lfHeader.append(lfFormDescription);
        lfForm.append(lfHeader);
    }


    function lfAddPreviewFooter() {
        var lfForm = d.getElementById('lf_Preview_Form');
        var lfFooter = d.createElement("DIV");
        lfFooter.classList.add("lf-preview-footer");
        lfFooter.id = "lf_Preview_Footer";
        lfForm.append(lfFooter);
        lfAddPreviewSubmit();
    }


    // Creates and Places Submit Button 
    function lfAddPreviewSubmit() {
        var submitButton = d.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.classList.add("lf-preview-submit-button");
        submitButton.id = "lf_Submit_Button";
        let lfFooter = document.getElementById('lf_Preview_Footer');
        lfFooter.append(submitButton);
    }

    // Prevents Preview Form Submit
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview-submit-button") {
            e.preventDefault();
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Preview Dropdown (Show/Close)
    var lfPreviewDropOpen = "false"; // Global variables used to auto-close current dropdown
    // Hide All Current lfDropdown() Dropdowns Uls  // (Order of Operation Dependency -- Do Not Swap with Function Below)(Sequential order 1)
    d.addEventListener('click', function (e) {
        if (lfPreviewDropOpen === "true" && e.target.className != "lf-preview-select-ul") {
            var lfAllFormDropdowns = d.querySelectorAll('.lf-preview-select-ul');
            lfAllFormDropdowns.forEach(function (lfFormDropdown) {
                lfFormDropdown.setAttribute('style', "display:" + "none");
                lfPreviewDropOpen = "false";
            })
        }
    })


    // Displays Dropdown Options // (Sequential order 2)
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview-input") {
            var lfDataFieldType = e.target.getAttribute("data-field-type");
            if (lfDataFieldType === "lfDrop") {
                var lfFieldId = e.target.getAttribute("data-lf-field-id");
                var lfDropUl = d.getElementById("lf_Preview_Drop_Input_Ul_" + lfFieldId);
                lfDropUl.style.cssText = "display: block";
                lfPreviewDropOpen = "true";
            }
        }
    })


    // Adds Clicked Dropdown option to Current Drop Input
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview-select-option") {
            var lfDropOptionText = e.target.textContent;
            var lfDropId = e.target.getAttribute("data-drop-id");
            var lfDropInput = d.getElementById("lf_Preview_Input_" + lfDropId);
            lfDropInput.value = lfDropOptionText;
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Preview Field Description + Preview Active Indicator (Show/Hide)
    var lfInputOpen = "false";
    // Displays Field Description/Helper Text
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-preview-input") { 
            
        // Hides All Field Description/Helper Text
        var lfAllFieldDescriptions = d.querySelectorAll('.lf-preview-field-description');
        lfAllFieldDescriptions.forEach(function (lfFieldDescription) {
            lfFieldDescription.classList.remove("lf-preview-description-active");
        })

        // Hides All Editing Text
        var lfAllEditingText = d.querySelectorAll('.lf-preview-editing-text');
        lfAllEditingText.forEach(function (lfEditingText) {
            lfEditingText.classList.remove("lf-preview-editing-active");
        })

        // Display Current Field Description/Helper Text
        var lfFieldInput = e.target.id;
        var lfFieldIncrement = d.getElementById(lfFieldInput).getAttribute("data-lf-field-id");
        var lfFieldDescription = d.getElementById('lf_Preview_Field_Description_' + lfFieldIncrement);
        lfFieldDescription.classList.add("lf-preview-description-active");

        // Display Current Field Editing Text
        var lfFieldInput = e.target.id;
        var lfFieldIncrement = d.getElementById(lfFieldInput).getAttribute("data-lf-field-id");
        var lfEditingText = d.getElementById('lf_Preview_Editing_Text_' + lfFieldIncrement);
        lfEditingText.classList.add("lf-preview-editing-active");


        lfInputOpen = "true";
        }
    })


    // Hides Field Description/Helper Text
    d.addEventListener('click', function (e) {

        var lfTarget = e.target;
        if (lfTarget.closest(".lf-preview-field-container") != null) {
            var lfFieldContainer = lfTarget.closest(".lf-preview-field-container");
            var lfFieldType = lfFieldContainer.getAttribute("data-field-type");


            if (e.target.className != "lf-preview-input" && lfInputOpen == "true" && lfFieldType != "lfAddRadio" && lfFieldType != "lfAddCheckbox" && lfFieldType != "lfAddFile" && lfFieldType != "lfAddFiles" && lfFieldType != "lfAddDropdown") {


                // Hides All Field Description/Helper Text
                var lfAllFieldDescriptions = d.querySelectorAll('.lf-preview-field-description');
                lfAllFieldDescriptions.forEach(function (lfFieldDescription) {
                    lfFieldDescription.classList.remove("lf-preview-description-active");
                })

                // Hides All Editing Text
                var lfAllEditingText = d.querySelectorAll('.lf-preview-editing-text');
                lfAllEditingText.forEach(function (lfEditingText) {
                    lfEditingText.classList.remove("lf-preview-editing-active");
                })

                
            } else if (lfFieldType == "lfAddRadio" || lfFieldType == "lfAddCheckbox" || lfFieldType == "lfAddFile" || lfFieldType == "lfAddFiles" || lfFieldType == "lfAddDropdown") {


                // Hides All Field Description/Helper Text
                var lfAllFieldDescriptions = d.querySelectorAll('.lf-preview-field-description');
                lfAllFieldDescriptions.forEach(function (lfFieldDescription) {
                    lfFieldDescription.classList.remove("lf-preview-description-active");
                })

                // Hides All Editing Text
                var lfAllEditingText = d.querySelectorAll('.lf-preview-editing-text');
                lfAllEditingText.forEach(function (lfEditingText) {
                    lfEditingText.classList.remove("lf-preview-editing-active");
                })

                // Display Current Field Description/Helper Text
                var lfFieldContainerIncrement = lfFieldContainer.getAttribute("data-increment");
                var lfCurrentDescription = d.getElementById('lf_Preview_Field_Description_' + lfFieldContainerIncrement);
                lfCurrentDescription.classList.add("lf-preview-description-active");

                // Display Current Field Editing Text
                var lfFieldContainerIncrement = lfFieldContainer.getAttribute("data-increment");
                var lfEditingText = d.getElementById('lf_Preview_Editing_Text_' + lfFieldContainerIncrement);
                lfEditingText.classList.add("lf-preview-editing-active");


            } else {
                // return
            }
        }
    })


    var lfRadioCheckboxActive = "false";
    // Displays Field Description/Helper Text Radio/Checkbox/File/Files/Drop (Hover)
    d.addEventListener('mouseover', function (e) {
        var lfTarget = e.target;
        if (lfTarget.closest(".lf-preview-field-container") != null) {
            var lfFieldContainer = lfTarget.closest(".lf-preview-field-container");
            var lfFieldType = lfFieldContainer.getAttribute("data-field-type");
            var lfFieldIncrement = lfFieldContainer.getAttribute("data-increment");


            if (lfFieldType == "lfAddRadio" || lfFieldType == "lfAddCheckbox" || lfFieldType == "lfAddFile" || lfFieldType == "lfAddFiles" || lfFieldType == "lfAddDropdown") {
                var lfFieldDescription = d.getElementById('lf_Preview_Field_Description_' + lfFieldIncrement);
                var lfFieldDescriptionId = "lf_Preview_Field_Description_" + lfFieldIncrement;
                lfFieldDescription.classList.add("lf-preview-description-active");
                lfRadioCheckboxActive = lfFieldDescriptionId;
            }
        }
    })


    // Hides Field Description/Helper Text Radio/Checkbox/File/Files/Drop (Leave)
    d.addEventListener('mouseout', function (e) {
        var lfTarget = e.target;
        if (lfTarget.closest(".lf-preview-field-container") != null) {
            var lfFieldContainer = lfTarget.closest(".lf-preview-field-container");
            var lfFieldType = lfFieldContainer.getAttribute("data-field-type");
            var lfFieldIncrement = lfFieldContainer.getAttribute("data-increment");


            if (lfFieldType == "lfAddRadio" || lfFieldType == "lfAddCheckbox" || lfFieldType == "lfAddFile" || lfFieldType == "lfAddFiles" || lfFieldType == "lfAddDropdown") {
                var lfFieldDescription = d.getElementById('lf_Preview_Field_Description_' + lfFieldIncrement);
                var lfFieldDescriptionId = "lf_Preview_Field_Description_" + lfFieldIncrement;
                lfFieldDescription.classList.remove("lf-preview-description-active");
                lfRadioCheckboxActive = lfFieldDescriptionId;
            }
        }
    })


    // Hides Field Description/Helper Active Indicator off Input Click
    d.addEventListener('click', function (e) {

        var lfTarget = e.target;
        if (lfTarget.closest(".lf-preview-field-container") == null) {

            // Hides All Field Description/Helper Text
            var lfAllFieldDescriptions = d.querySelectorAll('.lf-preview-field-description');
            lfAllFieldDescriptions.forEach(function (lfFieldDescription) {
                lfFieldDescription.classList.remove("lf-preview-description-active");
            })

            // Hides All Editing Text
            var lfAllEditingText = d.querySelectorAll('.lf-preview-editing-text');
            lfAllEditingText.forEach(function (lfEditingText) {
                lfEditingText.classList.remove("lf-preview-editing-active");
            })

            lfInputOpen = "false";
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Notifications
    var lfNotificationsBool; // Global Variable Used to Determine If Notifications Meta is Created/Updated in Database
    // Grabs Notifications Meta Data for Notifications Inputs  ---------------------- after form title AJAX
    function lfNotificationsData(lfCurrentFormId) {
        // Grabs Notifications Meta Data for Notifications Inputs  ---------------------- after form title AJAX
        var data = new FormData();
        data.append('action', 'lffes_get_editor_form_notifications');
        data.append('_ajax_nonce', lfEditorData.lfNonce);
        data.append('lfformid', lfCurrentFormId);
        fetch('/wp-admin/admin-ajax.php', {
            method: "POST",
            credentials: 'same-origin',
            body: data,
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            // Set global variable used to determine if not null for notifications save or update logic
            lfNotificationsBool = data;
            lfNotificationsBool;
            // Call Notifications Input Creator Function if Notifications Meta is not empty
            if (lfNotificationsBool != "") {
                lfNotificationsInputReCreatorFunction();
            } else {
                //return
            }
        })
    }
       


    var lfAdminEmailObject; // Global variables used to store all Admin Email Addresses for LF Notifications From and To Dropdowns
    // Makes ajax request on load to grab admin email addresses 
    d.addEventListener("DOMContentLoaded", function () {
        var lfAdminEmail = "";
        var data = new FormData();
        data.append('action', 'lffes_get_editor_admin_emails');
        data.append('_ajax_nonce', lfEditorData.lfNonce);
        data.append('lfdata', lfAdminEmail);
        fetch('/wp-admin/admin-ajax.php', {
            method: "POST",
            credentials: 'same-origin',
            body: data,
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            var lfAjaxResponseAdminEmails = data;
            lfAdminEmailObject = lfAjaxResponseAdminEmails;
            lfAdminEmailObject;
            lfSeparateAdminEmails(lfAdminEmailObject);
        })
    });


    // Runs For each loop on admin email(s) object -- sends to populate notifications from and replyto dropdowns 
    function lfSeparateAdminEmails(lfAdminEmailObject) {
        const lfAdminEmails = lfAdminEmailObject;
        lfAdminEmails.forEach(function (lfAdminEmail) {
            var lfCurrentAdminEmail = lfAdminEmail.adminEmail;
            if(lfCurrentAdminEmail !== "") {
                lfAppendAdminEmail(lfCurrentAdminEmail);
            }
        });
    }


    var notificationsOptionIncrement = 1; // Global Variable Used to auto increment Multi-Select selected choices On Selecting Previously Saved Form
    // Adds notifications modal/previewer to form editor 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-notifications" || e.target.className == "lf-notifications-tab-plus") {
            var lfNotificationsOverlay = d.getElementById('lf_Notifications_Overlay');
            lfNotificationsOverlay.style.cssText = "display:block !important;";
            updateNotificationsToAndBccLabels();
            lfUpdateNotificationsDynamicDataOptions();
            lfDynamicDataMeta();
        }
    })


    // Hides notifications modal/previewer 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-notifications-close" || e.target.className == "lf-notifications-overlay") {
            var lfNotificationsOverlay = d.getElementById('lf_Notifications_Overlay');
            lfNotificationsOverlay.style.cssText = "display:none !important;";
            var lfNotificationsContainer = d.getElementById('lf_Notifications_Container');
            lfNotificationsContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfNotificationsFrame = d.getElementById('lf_Notifications_Frame');
            lfNotificationsFrame.style.cssText = "height: 74vh;";
        }
    });


    // Minimizes notifications modal to desktop break point
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-notifications-minimize-media-query") {
            var lfNotificationsContainer = d.getElementById('lf_Notifications_Container');
            lfNotificationsContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfNotificationsFrame = d.getElementById('lf_Notifications_Frame');
            lfNotificationsFrame.style.cssText = "height: 74vh;";
        }
    });


    // Makes notifications modal full screen 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-notifications-full-screen-media-query") {
            var lfNotificationsContainer = d.getElementById('lf_Notifications_Container');
            lfNotificationsContainer.style.cssText = "position: fixed; top: 0px; left: 0%; height: 100%; width: 100% !important; transform: translate(0%, 0%);";
            var lfNotificationsFrame = d.getElementById('lf_Notifications_Frame');
            lfNotificationsFrame.style.cssText = "height: calc(100vh - 50px);";
        }
    });


    // ------------------------------------------------------------------------------------------------------------------------- LF Notifications ReCreator Function
    // Notifications Modal -- Creator Function for Inputs If Previously Saved Notifications Meta Exist -- Loop through saved email fields -- Populate dropdowns
    function lfNotificationsInputReCreatorFunction() {
        // Notifications Meta Data is contained in variable lfNotificationsBool -- Parse Meta + Remove //
        var lfNotificationsMetaParsed = lfNotificationsBool.replace(/\\/g, "");
        var lfNotifcationsDbMeta = JSON.parse(lfNotificationsMetaParsed);


        // Grab From Values + Append to Input
        var lfNotificationsFromValues = lfNotifcationsDbMeta.FromValues;
        lfNotificationsFromValues.forEach(function (lfNotificationFromValue) {
            var lfFromValue = lfNotificationFromValue.from;
            var lfNotificationFromInput = d.getElementById('lf_Drop_Input_1');
            lfNotificationFromInput.value = lfFromValue;
        })


        var ToArrayIds = [];
        // Grab To Values + Append to Input
        var lfNotificationsToValues = lfNotifcationsDbMeta.ToValues;
        lfNotificationsToValues.forEach(function (lfNotificationToValue) {
            var lfToValue = lfNotificationToValue.to;
            var lfToFieldId = lfNotificationToValue.id;
            var lfNotificationToInput = d.getElementById('lf_Ms_Selected_Container_1');
            var lfCurrentSelectedChoice = d.createElement("li");
            lfCurrentSelectedChoice.classList.add("lf-ms-selected-option");
            lfCurrentSelectedChoice.textContent = lfToValue;
            lfCurrentSelectedChoice.setAttribute("data-field-id", lfToFieldId);
            var lfCurrentSelectedChoiceCloseButton = d.createElement("button");
            lfCurrentSelectedChoiceCloseButton.textContent = "x";
            lfCurrentSelectedChoiceCloseButton.classList.add("lf-multi-select-remove");
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-option-increment", notificationsOptionIncrement);
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-increment", "1");
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-option-id", "lf_Ms_Drop_Option_To_" + lfToFieldId);
            lfCurrentSelectedChoice.appendChild(lfCurrentSelectedChoiceCloseButton);
            lfNotificationToInput.append(lfCurrentSelectedChoice);
            lfNotificationToInput.classList.remove("lf-ms-hide-selected");
            notificationsOptionIncrement++;
            ToArrayIds.push(lfToFieldId);
        })


        // Grab ReplyTo Values + Append to Input
        var lfNotificationsReplyToValues = lfNotifcationsDbMeta.ReplyToValues;
        lfNotificationsReplyToValues.forEach(function (lfNotificationReplyToValue) {
            var lfReplyToValue = lfNotificationReplyToValue.replyto;
            var lfNotificationReplyToInput = d.getElementById('lf_Drop_Input_2');
            lfNotificationReplyToInput.value = lfReplyToValue;
        })


        var BccArrayIds = [];
        // Grab Bcc Values + Append to Input 
        var lfNotificationsBccValues = lfNotifcationsDbMeta.BccValues;
        lfNotificationsBccValues.forEach(function (lfNotificationBccValue) {
            var lfBccValue = lfNotificationBccValue.bcc;
            var lfToFieldId = lfNotificationBccValue.id;
            var lfNotificationBccInput = d.getElementById('lf_Ms_Selected_Container_2');
            var lfCurrentSelectedChoice = d.createElement("li");
            lfCurrentSelectedChoice.classList.add("lf-ms-selected-option");
            lfCurrentSelectedChoice.textContent = lfBccValue;
            lfCurrentSelectedChoice.setAttribute("data-field-id", lfToFieldId);
            var lfCurrentSelectedChoiceCloseButton = d.createElement("button");
            lfCurrentSelectedChoiceCloseButton.textContent = "x";
            lfCurrentSelectedChoiceCloseButton.classList.add("lf-multi-select-remove");
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-option-increment", notificationsOptionIncrement);
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-increment", "2");
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-option-id", "lf_Ms_Drop_Option_Bcc_" + lfToFieldId);
            lfCurrentSelectedChoice.appendChild(lfCurrentSelectedChoiceCloseButton);
            lfNotificationBccInput.append(lfCurrentSelectedChoice);
            lfNotificationBccInput.classList.remove("lf-ms-hide-selected");
            notificationsOptionIncrement++;
            BccArrayIds.push(lfToFieldId);
        })


        // Grab SubjectValues + Append to Input
        var lfNotificationsSubjectValues = lfNotifcationsDbMeta.SubjectValues;
        lfNotificationsSubjectValues.forEach(function (lfNotificationSubjectValue) {
            var lfSubjectValue = lfNotificationSubjectValue.subject;
            var lfNotificationSubjectInput = d.getElementById('lf_Subject');
            lfNotificationSubjectInput.value = lfSubjectValue;
        })


        // Grab BodyValues + Append to Body
        var lfNotificationsBodyValues = lfNotifcationsDbMeta.BodyValues;
        lfNotificationsBodyValues.forEach(function (lfNotificationBodyValue) {
            var lfBodyValue = lfNotificationBodyValue.body;
            var lfNotificationBodyInput = d.getElementById('lf_Notifications_Text_Content');
            lfNotificationBodyInput.innerHTML = lfBodyValue;
        })


        // Grab Attach File Uploads as Attachments Boolean - Re-select Checkbox
        var lfNotificationsFileValues = lfNotifcationsDbMeta.FileValues;
        lfNotificationsFileValues.forEach(function (lfNotificationFileValue) {
            var lfFileValue = lfNotificationFileValue.file;
            var lfNotificationFileInput = d.getElementById('lf_Add_File_Notifications_Attachment_Input');
            if (lfFileValue === "true") {
                lfNotificationFileInput.checked = true;
            }
        })


        // Loops through all current email field in form editor + appends items to notification to multi-select dropdown
        Array.prototype.forEach.call(d.getElementsByClassName("lf-field-container"), function (e) {
            var dataAttribute = e.getAttribute('data-increment');
            var fieldType = e.getAttribute('data-field-type');
            if (fieldType === "lfAddEmail") {
                var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                var toNotificationsDropdown = d.getElementById('lf_Ms_Drop_1');
                var toNotificationsLi = d.createElement("LI");
                toNotificationsLi.id = "lf_Ms_Drop_Option_To_" + dataAttribute;
                toNotificationsLi.textContent = fieldLabelText;
                toNotificationsLi.classList.add("lf-ms-drop-option");
                toNotificationsLi.setAttribute("data-increment", "1");
                toNotificationsLi.setAttribute("data-field-id", dataAttribute);
                toNotificationsLi.setAttribute("data-option-increment", notificationsOptionIncrement);
                toNotificationsDropdown.append(toNotificationsLi);
                notificationsOptionIncrement++;
            }
        })
        // Grabs each dropdown option and adds selected class
        ToArrayIds.forEach(function (a) {
            var lfGrabDropdownOption = d.getElementById('lf_Ms_Drop_Option_To_' + a);
            lfGrabDropdownOption.classList.add("lf-ms-drop-option-selected");
        })


        // Update variable names to reflect BCC instead of to
        Array.prototype.forEach.call(d.getElementsByClassName("lf-field-container"), function (e) {
            var dataAttribute = e.getAttribute('data-increment');
            var fieldType = e.getAttribute('data-field-type');
            if (fieldType === "lfAddEmail") {
                var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                var bccNotificationsDropdown = d.getElementById('lf_Ms_Drop_2');
                var bccNotificationsLi = d.createElement("LI");
                bccNotificationsLi.id = "lf_Ms_Drop_Option_Bcc_" + dataAttribute;
                bccNotificationsLi.textContent = fieldLabelText;
                bccNotificationsLi.classList.add("lf-ms-drop-option");
                bccNotificationsLi.setAttribute("data-increment", "2");
                bccNotificationsLi.setAttribute("data-field-id", dataAttribute);
                bccNotificationsLi.setAttribute("data-option-increment", notificationsOptionIncrement);
                bccNotificationsDropdown.append(bccNotificationsLi);
                notificationsOptionIncrement++;
            }
        })
        // Grabs each dropdown option and adds selected class
        BccArrayIds.forEach(function (a) {
            var lfGrabDropdownOption = d.getElementById('lf_Ms_Drop_Option_Bcc_' + a);
            lfGrabDropdownOption.classList.add("lf-ms-drop-option-selected");
        })


        // Clear current Dynamic Data Options before Re-Populating
        var lfCurrentDynamicDataNotificationsContainer = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications').innerHTML = "";
        // Add Dynamic Tag Options -- Notifications Text Content
        Array.prototype.forEach.call(d.getElementsByClassName("lf-field-container"), function (e) {

            var dataAttribute = e.getAttribute('data-increment');
            var fieldType = e.getAttribute('data-field-type');

            if (fieldType !== "lfAddFiles" && fieldType !== "lfAddFile") {

                var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                var lfDynamicDataDropdown = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications');
                var lfDynamicDataOptionLi = d.createElement("LI");

                lfDynamicDataOptionLi.id = "lf_Dynamic_Data_Option_" + dataAttribute;
                lfDynamicDataOptionLi.textContent = fieldLabelText;
                lfDynamicDataOptionLi.classList.add("lf-dynamic-data-option");
                lfDynamicDataOptionLi.setAttribute("data-field-id", dataAttribute);

                lfDynamicDataDropdown.append(lfDynamicDataOptionLi);
                notificationsOptionIncrement++;
            }
        })
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Notifications Dropdown
    // global variable to confirm if dropdown is open to be used to hide drop down
    var lfDdIsOpen;
    // global variable to store current dropdown input to be used to hide drop down
    var lfDdOpenedDropDownId;


    // Shows dropdown on dropdown input click (Dropdown)
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-drop-input") {
            // Grab data increment/increment from dropdown input
            var lfDataIncrement = d.getElementById(e.target.id).getAttribute("data-increment");
            // Multi-select drop down
            var lfDropDownUl = d.getElementById('lf_Drop_' + lfDataIncrement);
            // Update global variable with currently open drop down
            lfDdOpenedDropDownId = lfDropDownUl.id;
            // Displays drop down
            lfDropDownUl.style.cssText = "display:block";
            // Update global variable to confirm drop down is visible
            lfDdIsOpen = "true";
        }
    })


    // Hides Dropdown if Dropdown is open and clicked outside of dropdown input or drop down options (Dropdown)
    d.addEventListener('click', function (e) {
        // Check if dropdown is open and click is outside of currently opened dropdown field
        if (lfDdIsOpen == "true" && e.target.id != d.getElementById(lfDdOpenedDropDownId) && e.target.className != "lf-drop-input") {
            // Get current dropdown
            var lfCurrentDropDownOptions = d.getElementById(lfDdOpenedDropDownId);
            // Hides currenttly opened dropdown
            lfCurrentDropDownOptions.style.cssText = "display: none";
            // Grab data increment for multi-select input
            var lfDataIncrement = lfCurrentDropDownOptions.getAttribute("data-increment");
            // Sets dropdown global variable to closed
            lfDdIsOpen = "false";
        }
    })


    // Search/filter drop down items -- When characters are typed results change in dropdown
    d.addEventListener('keyup', function (e) {
        if (e.target.className.includes("lf-drop-input")) {
            // Grab Multi-Select Input Id
            var lfDdInput = d.getElementById(e.target.id);
            // Convert Multi Select Input Value to Upper Case
            var lfInputToUpperCase = lfDdInput.value.toUpperCase();
            // Grab field increment to target Selected Choices Ul/container
            var lfDataIncrement = lfDdInput.getAttribute("data-increment");
            // Grab Selected Choices Ul/Container
            var lfDdOptionsUl = d.getElementById('lf_Drop_' + lfDataIncrement);
            // Grab all drop down options
            var lfDdOptions = lfDdOptionsUl.getElementsByTagName('li');
            // Declare increment variable for; for loop
            var i;
            // Declare dropdown options text content variable for; for loop
            var lfDdOptionTextContent;
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < lfDdOptions.length; i++) {
                // Grab each multi select li option
                var lfDdOptionLi = lfDdOptions[i];
                // Grab each multi select option text content
                lfDdOptionTextContent = lfDdOptionLi.textContent || lfDdOptionLi.innerText;
                if (lfDdOptionTextContent.toUpperCase().indexOf(lfInputToUpperCase) > -1) {
                    lfDdOptions[i].style.display = "";
                } else {
                    lfDdOptions[i].style.display = "none";
                }
            }
        }
    })


    // When drop down option is clicked -- Appends option to dropdown input -- makes selected option appear selected with added CSS class
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-drop-option") {
            // Grab drop down option when clicked
            var lfDdOption = e.target;
            // Get drop down option text
            var lfDdOptionText = lfDdOption.textContent;
            // Grab field increment to target drop down input
            var lfDataIncrement = lfDdOption.getAttribute("data-increment");
            // Grab dropdown input
            var lfDdInput = d.getElementById('lf_Drop_Input_' + lfDataIncrement);
            // Add selected drop down option as dropdown input value
            lfDdInput.value = lfDdOptionText;
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- Lf Notifications Multi-Select
    // global variable to confirm if multi select is open to be used to hide drop down
    var lfMsIsOpen;
    // global variable to store current multi select input to be used to hide drop down
    var lfMsOpenedDropDownId;


    // Shows multi-select drop down on multi-select input click (multi-select)
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-ms-input") {
            // Grab data increment/increment from multi-select input
            var lfDataIncrement = d.getElementById(e.target.id).getAttribute("data-increment");
            // Multi-select drop down
            var lfDropDownUl = d.getElementById('lf_Ms_Drop_' + lfDataIncrement);
            // Update global variable with currently open multi select drop down
            lfMsOpenedDropDownId = lfDropDownUl.id;
            // Displays Multi-select drop down
            lfDropDownUl.style.cssText = "display:block";
            // Update global variable to confirm multi-select drop down is visible
            lfMsIsOpen = "true";
        }
    })


    // Hides Multi-Select Drop Down if Multi-Select is open and clicked outside of multi-select input or drop down options (multi-select)
    d.addEventListener('click', function (e) {
        // Check if multi-select is open and click is outside of currently opened multi-select field
        if (lfMsIsOpen == "true" && e.target.id != d.getElementById(lfMsOpenedDropDownId) && e.target.className != "lf-ms-input" && e.target.className != "lf-ms-drop-option" && e.target.className != "lf-ms-drop-option lf-ms-drop-option-selected" && e.target.className != "lf-multi-select-selected" && e.target.className != "lf-multi-select-remove") {
            // Get current multi-select
            var lfCurrentMsDropDownOptions = d.getElementById(lfMsOpenedDropDownId);
            // Hides currenttly opened multi-select
            lfCurrentMsDropDownOptions.style.cssText = "display: none";
            // Grab data increment for multi-select input
            var lfDataIncrement = lfCurrentMsDropDownOptions.getAttribute("data-increment");
            // Target multi select input value
            var lfMsInput = d.getElementById('lf_Ms_Input_' + lfDataIncrement);
            // Reset multi-select input value to empty
            lfMsInput.value = "";
            // Sets multi-select global variable to closed
            lfMsIsOpen = "false";
            // Resets all multi-select drop down options display value from none to ""
            var lfAllMsDropDownOption = d.querySelectorAll('.lf-ms-drop-option ');
            lfAllMsDropDownOption.forEach(function (msDropOption) {
                msDropOption.style.display = "";
            })
        }
    })


    // Search/filter multi select drop down items -- When characters are typed results change in dropdown
    d.addEventListener('keyup', function (e) {
        if (e.target.className.includes("lf-ms-input")) {
            // Grab Multi-Select Input Id
            var lfMultiSelectInput = d.getElementById(e.target.id);
            // Convert Multi Select Input Value to Upper Case
            var lfInputToUpperCase = lfMultiSelectInput.value.toUpperCase();
            // Grab field increment to target Selected Choices Ul/container
            var lfDataIncrement = lfMultiSelectInput.getAttribute("data-increment");
            // Grab Selected Choices Ul/Container
            var lfMultiSelectedChoicesUl = d.getElementById('lf_Ms_Drop_' + lfDataIncrement);
            // Grab all drop down options
            var lfMultiSelectOptions = lfMultiSelectedChoicesUl.getElementsByTagName('li');
            // Declare increment variable for; for loop
            var i;
            // Declare dropdown options text content variable for; for loop
            var lfMultiSelectOptionTextContent;
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < lfMultiSelectOptions.length; i++) {
                // Grab each multi select li option
                var lfMultiSelectOptionLi = lfMultiSelectOptions[i];
                // Grab each multi select option text content
                lfMultiSelectOptionTextContent = lfMultiSelectOptionLi.textContent || lfMultiSelectOptionLi.innerText;
                if (lfMultiSelectOptionTextContent.toUpperCase().indexOf(lfInputToUpperCase) > -1) {
                    lfMultiSelectOptions[i].style.display = "";
                } else {
                    lfMultiSelectOptions[i].style.display = "none"; // if you click off of it you need to reset the inline style to display = ""
                }
            }
        }
    })


    // When drop down option in multi select is clicked -- Appends li to selected choices ul -- makes selected option appear selected with added CSS class
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-ms-drop-option") {
            // Grab drop down option when clicked
            var lfMultiSelectOption = e.target;
            // Grab selected options ID
            var lfMultiSelectedOptionId = e.target.id;
            // Get drop down option text
            var lfMultiSelectOptionText = lfMultiSelectOption.textContent;
            // Grab field Id of selected option to append it to newly created li element
            var lfFieldId = lfMultiSelectOption.getAttribute("data-field-id");
            // Grab field increment to target Selected Choices Ul/container
            var lfDataIncrement = lfMultiSelectOption.getAttribute("data-increment");
            // Grab Selected Choices Ul/Container
            var lfMultiSelectedChoicesUl = d.getElementById('lf_Ms_Selected_Container_' + lfDataIncrement);
            // Re-create Selected Choice to append to Ul/Container
            var lfCurrentSelectedChoice = d.createElement("li");
            // Adds selected dropdown choice text to newly created li
            lfCurrentSelectedChoice.textContent = lfMultiSelectOptionText;
            // Add class to appended/created li 
            lfCurrentSelectedChoice.classList.add("lf-ms-selected-option");
            // Create selected choice remove button
            var lfCurrentSelectedChoiceCloseButton = d.createElement("button");
            // Add close x to remove button
            lfCurrentSelectedChoiceCloseButton.textContent = "x";
            // Add class to remove button 
            lfCurrentSelectedChoiceCloseButton.classList.add("lf-multi-select-remove");
            // Grab drop down option increment 
            var lfDataOptionIncrement = lfMultiSelectOption.getAttribute("data-option-increment");
            // Add data field id attribute to selected option
            lfCurrentSelectedChoice.setAttribute("data-field-id", lfFieldId);
            // Add ms selection option id to newly created li
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-option-id", lfMultiSelectedOptionId);
            // Add data option increment to newly created li
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-option-increment", lfDataOptionIncrement);
            // Add data increment to newly created li
            lfCurrentSelectedChoiceCloseButton.setAttribute("data-increment", lfDataIncrement);
            // Append close button to newly created li
            lfCurrentSelectedChoice.appendChild(lfCurrentSelectedChoiceCloseButton);
            // Makes drop down option appear selected
            lfMultiSelectOption.classList.add("lf-ms-drop-option-selected");
            // Append created li to Selected Choices Ul/Container
            lfMultiSelectedChoicesUl.append(lfCurrentSelectedChoice);
            // Shows multi select selected options ul
            lfMultiSelectedChoicesUl.classList.remove("lf-ms-hide-selected");

        }
    })


    // If multi select selected option has been selected and remove button has been clicked -- remove element
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-multi-select-remove") {
            // Grab multi selected option
            var lfCurrentSelectedChoice = e.target.parentElement;
            // Grab data option id from remove button
            var lfDataOptionId = e.target.getAttribute("data-option-id");
            // Grab data option increment from remove button
            var lfDataOptionIncrement = e.target.getAttribute("data-option-increment");
            // Target previously selected option in multi select drop down
            var lfPreviouslySelectedOption = d.getElementById(lfDataOptionId);
            // Remove class from previously selected option in multi select drop down
            lfPreviouslySelectedOption.classList.remove("lf-ms-drop-option-selected")
            // Remove multi selected option
            lfCurrentSelectedChoice.remove();
            // Grab data increment from remove button for multi select ul
            var lfDataIncrement = e.target.getAttribute("data-increment");
            // Target multi select selected options ul
            var lfCurrentSelectedChoicesUl = d.getElementById('lf_Ms_Selected_Container_' + lfDataIncrement);
            // Grab current text content of multi select selected options ul
            var lfCurrentHtml = lfCurrentSelectedChoicesUl.textContent;
            // Determine if multi select selected options ul is empty
            if (lfCurrentHtml == 0) {
                // Hides multi select selected options ul
                lfCurrentSelectedChoicesUl.classList.add("lf-ms-hide-selected");
            } else {

            }
        }
    })


    // FallBack Function -- Hides Previously Opened Multi-Select Drop Down
    d.addEventListener('click', function (e) {
        if (e.target.id.includes("lf_Ms_Input_")) {
            // Loop through all multi-select drop downs
            Array.prototype.forEach.call(d.getElementsByClassName("lf-ms-drop"), function (e) {
                var lfCurrentDataIncrement = e.getAttribute('data-increment');
                var lfCurrentDropDown = d.getElementById('lf_Ms_Drop_' + lfCurrentDataIncrement);
                var lfOpenedDropDown = d.getElementById(lfMsOpenedDropDownId);
                // Hides previously opened multi-select drop down
                if (lfOpenedDropDown != lfCurrentDropDown) {
                    lfCurrentDropDown.style.cssText = "display:none";
                }
            })
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Notifications Drop Down Options
    // Append LF Admin Email Addresses to Notifications From and ReplyTo Dropdowns
    function lfAppendAdminEmail(lfCurrentAdminEmail) {
        // Notifications From
        var fromNotificationsDropdown = d.getElementById('lf_Drop_1');
        var fromNotificationsLi = d.createElement("LI");
        fromNotificationsLi.id = "lf_Drop_Option_From_" + increment;
        fromNotificationsLi.textContent = lfCurrentAdminEmail;
        fromNotificationsLi.classList.add("lf-drop-option");
        fromNotificationsLi.setAttribute("data-increment", "1");
        fromNotificationsLi.setAttribute("data-field-id", increment);
        fromNotificationsLi.setAttribute("data-option-increment", "1");
        fromNotificationsDropdown.append(fromNotificationsLi);
        // Notifications ReplyTo
        var replyToNotificationsDropdown = d.getElementById('lf_Drop_2');
        var replyToNotificationsLi = d.createElement("LI");
        replyToNotificationsLi.id = "lf_Ms_Drop_Option_replyTo_" + increment;
        replyToNotificationsLi.textContent = lfCurrentAdminEmail;
        replyToNotificationsLi.classList.add("lf-drop-option");
        replyToNotificationsLi.setAttribute("data-increment", "2");
        replyToNotificationsLi.setAttribute("data-field-id", increment);
        replyToNotificationsLi.setAttribute("data-option-increment", "2");
        replyToNotificationsDropdown.append(replyToNotificationsLi);
    }


    // Updates Notifications Multi-Select To and BCC Dropdown Options with Current Field Label when Notifications clicked
    function updateNotificationsToAndBccLabels() {
        var allFieldContainers = d.querySelectorAll('.lf-field-container');
        allFieldContainers.forEach(function (fieldContainer) {
            // Only Append Labels if Field Type is Email
            var lfCurrentFieldType = fieldContainer.getAttribute('data-field-type');


            // Grab Field Id Plus Label
            if (lfCurrentFieldType === "lfAddEmail") {
                var dataAttribute = fieldContainer.getAttribute('data-increment');
                var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;


                // Notifications To Updated Drop Downs with Current Labels
                var toNotificationsDropDownOption = d.getElementById('lf_Ms_Drop_Option_To_' + dataAttribute);
                if (toNotificationsDropDownOption !== null) {
                    toNotificationsDropDownOption.textContent = fieldLabelText;
                } else {
                    var toNotificationsDropdown = d.getElementById('lf_Ms_Drop_1');
                    var toNotificationsLi = d.createElement("LI");
                    toNotificationsLi.id = "lf_Ms_Drop_Option_To_" + dataAttribute;
                    toNotificationsLi.textContent = fieldLabelText;
                    toNotificationsLi.classList.add("lf-ms-drop-option");
                    toNotificationsLi.setAttribute("data-increment", "1");
                    toNotificationsLi.setAttribute("data-field-id", dataAttribute);
                    toNotificationsLi.setAttribute("data-option-increment", "1");
                    toNotificationsDropdown.append(toNotificationsLi);
                }


                // Notifications Bcc Updated Drop Downs with Current Labels
                var bccNotificationsDropDownOption = d.getElementById('lf_Ms_Drop_Option_Bcc_' + dataAttribute);
                if (toNotificationsDropDownOption !== null) {
                    bccNotificationsDropDownOption.textContent = fieldLabelText;
                } else {
                    var bccNotificationsDropdown = d.getElementById('lf_Ms_Drop_2');
                    var bccNotificationsLi = d.createElement("LI");
                    bccNotificationsLi.id = "lf_Ms_Drop_Option_Bcc_" + dataAttribute;
                    bccNotificationsLi.textContent = fieldLabelText;
                    bccNotificationsLi.classList.add("lf-ms-drop-option");
                    bccNotificationsLi.setAttribute("data-increment", "2");
                    bccNotificationsLi.setAttribute("data-field-id", dataAttribute);
                    bccNotificationsLi.setAttribute("data-option-increment", "2");
                    bccNotificationsDropdown.append(bccNotificationsLi);
                }

            }
        })
    }


    // Updates Notifications Dynamic Data Options when Notifications clicked
    function lfUpdateNotificationsDynamicDataOptions() {

        // Clear current Dynamic Data Options before Re-populating
        var lfCurrentDynamicDataNotificationsContainer = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications').innerHTML = "";


        // Add Dynamic Tag Options -- Notifications Text Content
        Array.prototype.forEach.call(d.getElementsByClassName("lf-field-container"), function (e) {
            var dataAttribute = e.getAttribute('data-increment');
            var fieldType = e.getAttribute('data-field-type');

            if (fieldType !== "lfAddFiles" && fieldType !== "lfAddFile") {

                var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                var lfDynamicDataDropdown = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications');

                var lfDynamicDataOptionLi = d.createElement("LI");
                lfDynamicDataOptionLi.id = "lf_Dynamic_Data_Option_" + dataAttribute;
                lfDynamicDataOptionLi.textContent = fieldLabelText;
                lfDynamicDataOptionLi.classList.add("lf-dynamic-data-option");
                lfDynamicDataOptionLi.setAttribute("data-field-id", dataAttribute);

                lfDynamicDataDropdown.append(lfDynamicDataOptionLi);
                notificationsOptionIncrement++;
            }
        })
    }


    function lfDynamicDataMeta() {
        // TimeStamp
        var lfDynamicDataDropdown = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications');
        var lfDynamicDataOptionTimeLi = d.createElement("LI");
        lfDynamicDataOptionTimeLi.id = "lf_Dynamic_Data_Option_" + "0:00 AM/PM";
        lfDynamicDataOptionTimeLi.textContent = "Local Timestamp";
        lfDynamicDataOptionTimeLi.classList.add("lf-dynamic-data-option");
        lfDynamicDataDropdown.append(lfDynamicDataOptionTimeLi);



        // Current Date
        var lfDynamicDataDropdown = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications');
        var lfDynamicDataOptionTimeLi = d.createElement("LI");
        lfDynamicDataOptionTimeLi.id = "lf_Dynamic_Data_Option_" + "M/D/Y";
        lfDynamicDataOptionTimeLi.textContent = "Current Date";
        lfDynamicDataOptionTimeLi.classList.add("lf-dynamic-data-option");
        lfDynamicDataDropdown.append(lfDynamicDataOptionTimeLi);



        // Current Url
        var lfDynamicDataDropdown = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications');
        var lfDynamicDataOptionTimeLi = d.createElement("LI");
        lfDynamicDataOptionTimeLi.id = "lf_Dynamic_Data_Option_" + "DOMAIN";
        lfDynamicDataOptionTimeLi.textContent = "Current URL";
        lfDynamicDataOptionTimeLi.classList.add("lf-dynamic-data-option");
        lfDynamicDataDropdown.append(lfDynamicDataOptionTimeLi);



        // Current Language
        var lfDynamicDataDropdown = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications');
        var lfDynamicDataOptionTimeLi = d.createElement("LI");
        lfDynamicDataOptionTimeLi.id = "lf_Dynamic_Data_Option_" + "LAN";
        lfDynamicDataOptionTimeLi.textContent = "Local Language";
        lfDynamicDataOptionTimeLi.classList.add("lf-dynamic-data-option");
        lfDynamicDataDropdown.append(lfDynamicDataOptionTimeLi);



        // User-Agent
        var lfDynamicDataDropdown = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications');
        var lfDynamicDataOptionTimeLi = d.createElement("LI");
        lfDynamicDataOptionTimeLi.id = "lf_Dynamic_Data_Option_" + "META";
        lfDynamicDataOptionTimeLi.textContent = "User Agent";
        lfDynamicDataOptionTimeLi.classList.add("lf-dynamic-data-option");
        lfDynamicDataDropdown.append(lfDynamicDataOptionTimeLi);


        // Referrer URL
        var lfDynamicDataDropdown = d.getElementById('lf_Dynamic_Data_Options_Ul_Notifications');
        var lfDynamicDataOptionTimeLi = d.createElement("LI");
        lfDynamicDataOptionTimeLi.id = "lf_Dynamic_Data_Option_" + "Referrer DOMAIN";
        lfDynamicDataOptionTimeLi.textContent = "Referrer URL";
        lfDynamicDataOptionTimeLi.classList.add("lf-dynamic-data-option");
        lfDynamicDataDropdown.append(lfDynamicDataOptionTimeLi);
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Notifications Text Editor
    // Text Editor Switch Statement
    d.addEventListener('click', function (e) {
        var lfToolbarId = e.target.id;

        switch (lfToolbarId) {
            case "lf_Bold":
                d.execCommand("bold");
                break;

            case "lf_Italic":
                d.execCommand("italic");
                break;

            case "lf_Underline":
                d.execCommand("underline");
                break;

            case "lf_Hyperlink":
                var linkURL = prompt('Enter a URL:', 'http://');
                d.execCommand("createLink", false, linkURL);
                break;

            case "lf_Undo_Hyperlink":
                d.execCommand("unlink");
                break;
        }
    })


    var lfTextColorPicker;
    // Makes Selection Text Color
    d.addEventListener("input", function (e) {
        if (e.target.id == 'lf_Text_Color') {
            lfTextColorPicker = d.getElementById('lf_Text_Color').value;
            lfTbFontColor();
        }
    })


    function lfTbFontColor() {
        d.execCommand("foreColor", false, lfTextColorPicker);
    }


    d.addEventListener("mousedown", function (e) {
        if (e.target.classList == "lf-dynamic-data-option") {
            var lfSelectedOption = e.target;
            var lfCurrentOption = lfSelectedOption.textContent;
            var lfSelectedOptionId = lfSelectedOption.getAttribute('data-field-id');
            lfAddDynamicData(lfCurrentOption, lfSelectedOptionId);
        }
    })


    // Add dynamic data tag to notifications text content container
    function lfAddDynamicData(lfCurrentOption, lfSelectedOptionId) {
        var sel, range;
        if (window.getSelection && (sel = window.getSelection()).rangeCount) {
            range = sel.getRangeAt(0);
            range.collapse(true);
            var lfDynamicDataTag = d.createElement("span");
            if (lfSelectedOptionId !== null) {
                lfDynamicDataTag.appendChild(d.createTextNode("{" + lfCurrentOption + ":" + lfSelectedOptionId + "}"));
            } else {
                lfDynamicDataTag.appendChild(d.createTextNode("{" + lfCurrentOption + "}"));
            }


            // Append Dynamic Data to Notifications Text Content Container Only                                                       
            if (range.startContainer.id !== null && range.startContainer.id === "lf_Notifications_Text_Content" || range.startContainer.id !== undefined && range.startContainer.id === "lf_Notifications_Text_Content") {
                range.insertNode(lfDynamicDataTag);
            }


            if (range.startContainer.parentElement.offsetParent.id !== null && range.startContainer.parentElement.offsetParent.id === "lf_Notifications_Text_Content" || range.startContainer.parentElement.offsetParent.id !== undefined && range.startContainer.parentElement.offsetParent.id === "lf_Notifications_Text_Content") {
                range.insertNode(lfDynamicDataTag);
            }


            // Clear range
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }


    // Deletes notifications text content
    d.addEventListener("click", function (e) {
        if (e.target.className == "lf-notifications-clear-message") {
            var lfNotificationsTextContentArea = d.getElementById('lf_Notifications_Text_Content');
            lfNotificationsTextContentArea.innerHTML = "";
        }
    })


    // Toggles Visual Button for notifications text content
    d.addEventListener("click", function (e) {
        if (e.target.id == "lf_Notifications_Insert_HTML") {
            var lfInsertHTMLButton = e.target;

            var lfVisualHTML = d.createElement("BUTTON");
            lfVisualHTML.textContent = "Visual";
            lfVisualHTML.id = "lf_Notifications_Visual_HTML";
            lfVisualHTML.classList = "lf-visual-html";

            lfInsertHTMLButton.replaceWith(lfVisualHTML);
            lfAddDynamicHTMLArea();
        }
    })



    // Toggles HTML Button for notifications text content
    d.addEventListener("click", function (e) {
        if (e.target.id == "lf_Notifications_Visual_HTML") {
            var lfVisualHTMLButton = e.target;

            var lfInsertHTML = d.createElement("BUTTON");
            lfInsertHTML.textContent = "HTML";
            lfInsertHTML.id = "lf_Notifications_Insert_HTML";
            lfInsertHTML.classList = "lf-notifications-insert-html";

            lfVisualHTMLButton.replaceWith(lfInsertHTML);
            lfAddDynamicTextArea();
        }
    })


    // Displays Notifications Text Content as HTML
    function lfAddDynamicHTMLArea() {
        var lfTextAreaHtml = d.getElementById('lf_Notifications_Text_Content').innerHTML;
        d.getElementById('lf_Notifications_Text_Content').textContent = lfTextAreaHtml;
    }


    // Displays Notifications Text Area HTML as Content
    function lfAddDynamicTextArea() {
        var lfTextAreaContent = d.getElementById('lf_Notifications_Text_Content').textContent;
        d.getElementById('lf_Notifications_Text_Content').innerHTML = lfTextAreaContent;
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Save Notifications
    var lfNotificationsMetaObjectStringified;
    // Global Notifications Object
    var lfNotificationsMetaObject = {
        FromValues: [],
        ToValues: [],
        ReplyToValues: [],
        BccValues: [],
        SubjectValues: [],
        BodyValues: [],
        FileValues: []
    };


    // Grabs Notifications From, To, ReplyTo, BCC, & Subject Values 
    function lfSaveNotifications(lfFormSaveUpdateCondtion) {
        // Only update notificatios meta data variables if saving new or existing form -- prevent updating notifications meta data when duplicating current form
        var lfFromValue = d.getElementById('lf_Drop_Input_1').value;
        var lfFromArray = { "from": lfFromValue };
        lfNotificationsMetaObject.FromValues.push(lfFromArray);


        var lfToValues = d.getElementById('lf_Ms_Selected_Container_1');
        Array.prototype.forEach.call(lfToValues.getElementsByClassName("lf-ms-selected-option"), function (e) {
            var lfToEmails = e.innerText.slice(0, -1);
            var lfToId = e.getAttribute('data-field-id');
            var lfToArray = { "to": lfToEmails, "id": lfToId };
            lfNotificationsMetaObject.ToValues.push(lfToArray);
        })


        var lfReplyToValue = d.getElementById('lf_Drop_Input_2').value;
        var lfReplyToArray = { "replyto": lfReplyToValue };
        lfNotificationsMetaObject.ReplyToValues.push(lfReplyToArray);


        var lfBccValues = d.getElementById('lf_Ms_Selected_Container_2');
        Array.prototype.forEach.call(lfBccValues.getElementsByClassName("lf-ms-selected-option"), function (e) {
            var lfBccEmails = e.innerText.slice(0, -1);
            var lfBccId = e.getAttribute('data-field-id');
            var lfBccArray = { "bcc": lfBccEmails, "id": lfBccId };
            lfNotificationsMetaObject.BccValues.push(lfBccArray);
        })


        var lfSubjectValue = d.getElementById('lf_Subject').value;
        var lfSubjectArray = { "subject": lfSubjectValue };
        lfNotificationsMetaObject.SubjectValues.push(lfSubjectArray);


        var lfBodyValue = d.getElementById('lf_Notifications_Text_Content').innerHTML;
        var lfBodyArray = { "body": lfBodyValue };
        lfNotificationsMetaObject.BodyValues.push(lfBodyArray);


        var lfAttachFileValue = d.getElementById('lf_Add_File_Notifications_Attachment_Input');
        if (lfAttachFileValue.checked == true) {
            var lfFileValue = "true";
            var lfFileArray = { "file": lfFileValue };
            lfNotificationsMetaObject.FileValues.push(lfFileArray);
        } else {
            var lfFileValue = "false";
            var lfFileArray = { "file": lfFileValue };
            lfNotificationsMetaObject.FileValues.push(lfFileArray);
        }


        // Stringify Global Notifications Object -- Store in Separate Global Variable
        lfNotificationsMetaObjectStringified = JSON.stringify(lfNotificationsMetaObject);
        lfNotificationsMetaObjectStringified = lfNotificationsMetaObjectStringified.replaceAll('\\n', '');
        lfNotificationsMetaObjectStringified;


        // Grab Form Title & Form Id to Determine New or Existing Form
        var dataTitle = d.getElementById('lf_Form_Title');
        var existingFormTitle = dataTitle.getAttribute('data-title');
        var editableFormTitle = d.getElementById('lf_Form_Title');
        var updatedFormTitle = editableFormTitle.value;
        var existingFormId = d.getElementById('lf_Shortcode').getAttribute('data-id');


        // Displays AJAX save overlay -- Begin AJAX request
        d.getElementById('lf_Overlay').style.cssText = "display:block !important;";


        // Saves new form or duplicates existing form
        var data = new FormData();
        if (lfFormSaveUpdateCondtion == "save") {
            data.append('action', 'lffes_save_update_editor_form_notifications');
            data.append('_ajax_nonce', lfEditorData.lfNonce);
            data.append('lfdatatosend', lfNotificationsMetaObjectStringified);
            data.append('lfexistingformid', existingFormId);
            data.append('lfcondition', 'save');
        } else {
            // Updates existing form notifications
            data.append('action', 'lffes_save_update_editor_form_notifications');
            data.append('_ajax_nonce', lfEditorData.lfNonce);
            data.append('lfdatatosend', lfNotificationsMetaObjectStringified);
            data.append('lfexistingformid', existingFormId);
            data.append('lfcondition', 'update');
        }
        fetch('/wp-admin/admin-ajax.php', {
            method: "POST",
            credentials: 'same-origin',
            body: data,
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            document.getElementById('lf_Overlay').style.cssText = "display:none !important;";
        })

    }







    // ------------------------------------------------------------------------------------------------------------------------- LF Submissions
    // Adds submissions modal/previewer to form editor 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-submissions" || e.target.className == "lf-submissions-tab-plus") {
            var lfSubmissionsOverlay = d.getElementById('lf_Submissions_Overlay');
            lfSubmissionsOverlay.style.cssText = "display:block !important;";
        }
    })


    // Hides submissions modal/previewer 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-submissions-close" || e.target.className == "lf-submissions-overlay") {
            var lfSubmissionsOverlay = d.getElementById('lf_Submissions_Overlay');
            lfSubmissionsOverlay.style.cssText = "display:none !important;";
            var lfSubmissionsContainer = d.getElementById('lf_Submissions_Container');
            lfSubmissionsContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfSubmissionsFrame = d.getElementById('lf_Submissions_Frame');
            lfSubmissionsFrame.style.cssText = "height: 74vh;";
        }
    });


    // Minimizes submissions modal to desktop break point
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-submissions-minimize-media-query") {
            var lfSubmissionsContainer = d.getElementById('lf_Submissions_Container');
            lfSubmissionsContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfSubmissionsFrame = d.getElementById('lf_Submissions_Frame');
            lfSubmissionsFrame.style.cssText = "height: 74vh;";
        }
    });


    // Makes submissions modal full screen 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-submissions-full-screen-media-query") {
            var lfSubmissionsContainer = d.getElementById('lf_Submissions_Container');
            lfSubmissionsContainer.style.cssText = "position: fixed; top: 0px; left: 0%; height: 100%; width: 100% !important; transform: translate(0%, 0%);";
            var lfSubmissionsFrame = d.getElementById('lf_Submissions_Frame');
            lfSubmissionsFrame.style.cssText = "height: calc(100vh - 50px);";
        }
    });


    // Makes ajax request after submissions modal opened if innertext is not empty
    function lfGrabSubmissions() {
        var lfSubmissionsFrame = d.getElementById('lf_Submissions_Row_Container');
        lfSubmissionsFrame.innerHTML = "";
        var data = new FormData();
        data.append('action', 'lffes_editor_form_submissions_modal');
        data.append('_ajax_nonce', lfEditorData.lfNonce);
        data.append('lfformid', lfCurrentFormId);
        fetch('/wp-admin/admin-ajax.php', {
            method: "POST",
            credentials: 'same-origin',
            body: data,
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            var lfFormSubmissionsResponse = data;
            var lfFormSubmissionsJSON = lfFormSubmissionsResponse;
            if (lfFormSubmissionsJSON[1] != null) {
                
                var lfSubmissionsFilesJSON = lfFormSubmissionsJSON[2]; //submission files data json
                var lfSubmissionsJSON = lfFormSubmissionsJSON[1]; //submission data json
                var lfSubmissionIds = lfFormSubmissionsJSON[0]; // submission entry id json
                var lfSubmissionsEmptyLogo = d.getElementById('lf_Submissions_Empty');
                lfSubmissionsEmptyLogo.style.cssText = "display: none";
                var lfSubmissionsEmptyText = d.getElementById('lf_Submission_Empty_Text').style.cssText = "color: transparent";
                lfAddTableHeader();
                appendFormSubmissions(lfSubmissionsJSON, lfSubmissionIds, lfSubmissionsFilesJSON);
            }
        })
    };

    

    // Sends data to submission table header creator function -- sends data to submissions table row creator function
    function appendFormSubmissions(lfSubmissionsJSON, lfSubmissionIds, lfSubmissionsFilesJSON) {
        const lfAllSubmissionsData = lfSubmissionsJSON;
        var lfSubmissionId = lfSubmissionIds;
        lfAllSubmissionsData.forEach(function (lfSubmissionData, index) {
            const lfCurrentSubmissionIdIndex = lfSubmissionId[index];
            var lfCurrentSubmissionId = lfCurrentSubmissionIdIndex.id;
            var lfSubmissionDataDestructuring = lfSubmissionData.submission;
            lfNestedSubmissionRowDataParsing(lfSubmissionDataDestructuring, lfCurrentSubmissionId, lfSubmissionsFilesJSON);
        });
    }


    // Parses Individual Submission Row Data Object -- Calls Table Row Creator Function
    function lfNestedSubmissionRowDataParsing(lfSubmissionDataDestructuring, lfCurrentSubmissionId, lfSubmissionsFilesJSON) {
        const lfCurrentSubmissionRowData = lfSubmissionDataDestructuring;
        var lfParseSubmissionRowData = JSON.parse(lfCurrentSubmissionRowData);
        var lfSubmissions = lfParseSubmissionRowData;
        lfAddTableRows(lfSubmissions, lfCurrentSubmissionId, lfSubmissionsFilesJSON);
    }


    // Creates Submissions Modal Table header
    function lfAddTableHeader() {
        var lfSubmissionsFrame = d.getElementById('lf_Submissions_Row_Container');
        // Create elements
        var lfSubmissionsTableHeader = d.createElement("DIV");
        var lfDeleteAllSubmissions = d.createElement("INPUT");
        var lfAllSubmissionsType = d.createElement("P");
        var lfAllSubmissionsTypeSpan = d.createElement("SPAN");
        var lfAllSubmissionsTitle = d.createElement("P");
        var lfAllSubmissionsTitleSpan = d.createElement("SPAN");
        var lfAllSubmissionsResponse = d.createElement("P");
        var lfAllSubmissionsResponseSpan = d.createElement("SPAN");
        var lfAllSubmissionsTime = d.createElement("P");
        var lfAllSubmissionsTimeSpan = d.createElement("SPAN");
        var lfAllSubmissionsDate = d.createElement("P");
        var lfAllSubmissionsDateSpan = d.createElement("SPAN");
        // Input type
        lfDeleteAllSubmissions.setAttribute("type", "checkbox");
        // Classlist
        lfSubmissionsTableHeader.classList.add("lf-submissions-table-header");
        lfDeleteAllSubmissions.classList.add("lf-delete-all-submissions");
        lfAllSubmissionsType.classList.add("lf-all-submissions-type");
        lfAllSubmissionsTypeSpan.classList.add("lf-submissions-down-arrow");
        lfAllSubmissionsTitle.classList.add("lf-all-submissions-title");
        lfAllSubmissionsTitleSpan.classList.add("lf-submissions-down-arrow");
        lfAllSubmissionsResponse.classList.add("lf-all-submissions-response");
        lfAllSubmissionsResponseSpan.classList.add("lf-submissions-down-arrow");
        lfAllSubmissionsTime.classList.add("lf-all-submissions-time");
        lfAllSubmissionsTimeSpan.classList.add("lf-submissions-down-arrow");
        lfAllSubmissionsDate.classList.add("lf-all-submissions-date");
        lfAllSubmissionsDateSpan.classList.add("lf-submissions-down-arrow");
        // Content
        lfAllSubmissionsType.textContent = "Title";
        lfAllSubmissionsTypeSpan.textContent = "▼";
        lfAllSubmissionsTitle.textContent = "Type";
        lfAllSubmissionsTitleSpan.textContent = "▼";
        lfAllSubmissionsResponse.textContent = "Response";
        lfAllSubmissionsResponseSpan.textContent = "▼";
        lfAllSubmissionsTime.textContent = "Time";
        lfAllSubmissionsTimeSpan.textContent = "▼";
        lfAllSubmissionsDate.textContent = "Date";
        lfAllSubmissionsDateSpan.textContent = "▼";
        // Select all Input Id
        lfDeleteAllSubmissions.id = "select-all";
        // append elements
        lfAllSubmissionsType.append(lfAllSubmissionsTypeSpan);
        lfAllSubmissionsTitle.append(lfAllSubmissionsTitleSpan);
        lfAllSubmissionsResponse.append(lfAllSubmissionsResponseSpan);
        lfAllSubmissionsTime.append(lfAllSubmissionsTimeSpan);
        lfAllSubmissionsDate.append(lfAllSubmissionsDateSpan);
        lfSubmissionsTableHeader.append(lfDeleteAllSubmissions);
        lfSubmissionsTableHeader.append(lfAllSubmissionsType);
        lfSubmissionsTableHeader.append(lfAllSubmissionsTitle);
        lfSubmissionsTableHeader.append(lfAllSubmissionsResponse);
        lfSubmissionsTableHeader.append(lfAllSubmissionsTime);
        lfSubmissionsTableHeader.append(lfAllSubmissionsDate);
        // Append table to submissions modal frame
        lfSubmissionsFrame.append(lfSubmissionsTableHeader);
    }


    var lfRowCount = 1; // Global Variable
    function lfAddTableRows(lfSubmissions, lfCurrentSubmissionId, lfSubmissionsFilesJSON) {
        var lfSubmissionsOne = lfSubmissions[0]; // First array for table row snippet data
        // create element
        var lfSubmissionTableRow = d.createElement("DIV");
        var lfDeleteSubmissionRow = d.createElement("INPUT");
        var lfSubmissionType = d.createElement("P");
        var lfSubmissionTitle = d.createElement("P");
        var lfSubmissionResponse = d.createElement("P");
        var lfSubmissionTime = d.createElement("P");
        var lfSubmissionDate = d.createElement("P");
        var lfSubmissionsMenuContainer = d.createElement("DIV");
        var lfSubmissionToolbar = d.createElement("P");
        var lfSubmissionsToolbarDropMenu = d.createElement("UL");
        var lfSubmissionToolbarOptionView = d.createElement("LI");
        var lfSubmissionToolbarOptionDelete = d.createElement("LI");
        var lfAllSubmissionResultsData = d.createElement("DIV");
        // Grab Submissions Modal Frame
        var lfSubmissionsFrame = d.getElementById('lf_Submissions_Row_Container');
        // Input type
        lfDeleteSubmissionRow.setAttribute("type", "checkbox");
        // classlist
        // Adds different classlist to every other submission row
        if (lfRowCount % 2 == 0) {
            lfSubmissionTableRow.classList.add("lf-submissions-table-row-bg-color"); //even
        }
        else {
            lfSubmissionTableRow.classList.add("lf-submissions-table-row-transparent"); //odd
        }
        lfDeleteSubmissionRow.classList.add("lf-delete-submission-row");
        lfSubmissionTitle.classList.add("lf-submissions-title");
        lfSubmissionType.classList.add("lf-submissions-type");
        lfSubmissionResponse.classList.add("lf-submissions-response");
        lfSubmissionTime.classList.add("lf-submissions-time");
        lfSubmissionDate.classList.add("lf-submissions-date");
        lfSubmissionsMenuContainer.classList.add("lf-submissions-menu-container");
        lfSubmissionToolbar.classList.add("lf-submissions-toolbar");
        lfSubmissionsToolbarDropMenu.classList.add("lf-submissions-toolbar-drop-menu");
        lfSubmissionToolbarOptionView.classList.add("lf-submission-toolbar-option-view");
        lfSubmissionToolbarOptionDelete.classList.add("lf-submission-toolbar-option-delete");
        lfAllSubmissionResultsData.classList.add("lf-all-submission-results");
        lfAllSubmissionResultsData.style.cssText = "display: none";
        // Ids
        lfSubmissionTableRow.id = "lf_Submissions_Table_Row_" + lfRowCount;
        lfDeleteSubmissionRow.id = "lf_Delete_Submission_Row_" + lfRowCount;
        lfSubmissionType.id = "lf_Submissions_Type_" + lfRowCount;
        lfSubmissionTitle.id = "lf_Submissions_Title_" + lfRowCount;
        lfSubmissionResponse.id = "lf_Submissions_Response_" + lfRowCount;
        lfSubmissionTime.id = "lf_Submissions_Time_" + lfRowCount;
        lfSubmissionDate.id = "lf_Submissions_Date_" + lfRowCount;
        lfSubmissionsMenuContainer.id = "lf_Submissions_Menu_Container_" + lfRowCount;
        lfSubmissionToolbar.id = "lf_Submissions_Toolbar_" + lfRowCount;
        lfSubmissionsToolbarDropMenu.id = "lfSubmissions_Toolbar_Drop_Menu_" + lfRowCount;
        lfSubmissionToolbarOptionView.id = "lf_Submission_Toolbar_Option_View_" + lfRowCount;
        lfSubmissionToolbarOptionDelete.id = "lf_Submission_Toolbar_Option_Delete_" + lfRowCount;
        lfAllSubmissionResultsData.id = "lf_Submission_All_Results_" + lfRowCount;
        // Data lf-row-count
        lfSubmissionTableRow.setAttribute("data-row-count", lfRowCount);
        lfSubmissionTableRow.setAttribute("data-row-opened-closed", "closed");
        lfDeleteSubmissionRow.setAttribute("data-row-count", lfRowCount);
        lfDeleteSubmissionRow.setAttribute("data-row-id", lfCurrentSubmissionId);
        lfSubmissionType.setAttribute("data-row-count", lfRowCount);
        lfSubmissionType.setAttribute("data-row-opened-closed", "closed");
        lfSubmissionTitle.setAttribute("data-row-count", lfRowCount);
        lfSubmissionTitle.setAttribute("data-row-opened-closed", "closed");
        lfSubmissionResponse.setAttribute("data-row-count", lfRowCount);
        lfSubmissionResponse.setAttribute("data-row-opened-closed", "closed");
        lfSubmissionTime.setAttribute("data-row-count", lfRowCount);
        lfSubmissionTime.setAttribute("data-row-opened-closed", "closed");
        lfSubmissionDate.setAttribute("data-row-count", lfRowCount);
        lfSubmissionDate.setAttribute("data-row-opened-closed", "closed");
        lfSubmissionsMenuContainer.setAttribute("data-row-count", lfRowCount);
        lfSubmissionToolbar.setAttribute("data-row-count", lfRowCount);
        lfSubmissionsToolbarDropMenu.setAttribute("data-row-count", lfRowCount);
        lfSubmissionToolbarOptionView.setAttribute("data-row-count", lfRowCount);
        lfSubmissionToolbarOptionDelete.setAttribute("data-row-count", lfRowCount);
        lfSubmissionToolbarOptionDelete.setAttribute("data-row-id", lfCurrentSubmissionId);
        lfAllSubmissionResultsData.setAttribute("data-row-count", lfRowCount);
        // Content
        var lfCurrentFormTitle = document.getElementById("lf_Form_Title").getAttribute("data-title");
        lfSubmissionTitle.textContent = lfCurrentFormTitle;
        lfSubmissionType.textContent = lfSubmissionsOne.fieldType;
        lfSubmissionResponse.textContent = lfSubmissionsOne.value;
        lfSubmissionTime.textContent = lfSubmissionsOne.time;
        lfSubmissionDate.textContent = lfSubmissionsOne.month;
        lfSubmissionToolbar.textContent = "•••";
        lfSubmissionToolbarOptionView.textContent = "View";
        lfSubmissionToolbarOptionDelete.textContent = "Delete";
        // Append elements
        lfSubmissionTableRow.append(lfDeleteSubmissionRow);
        lfSubmissionTableRow.append(lfSubmissionTitle);
        lfSubmissionTableRow.append(lfSubmissionType);
        lfSubmissionTableRow.append(lfSubmissionResponse);
        lfSubmissionTableRow.append(lfSubmissionTime);
        lfSubmissionTableRow.append(lfSubmissionDate);
        lfSubmissionsMenuContainer.append(lfSubmissionToolbar);
        lfSubmissionsMenuContainer.append(lfSubmissionsToolbarDropMenu);
        lfSubmissionsToolbarDropMenu.append(lfSubmissionToolbarOptionView);
        lfSubmissionsToolbarDropMenu.append(lfSubmissionToolbarOptionDelete);
        lfSubmissionTableRow.append(lfSubmissionsMenuContainer);
        // Append table to submissions modal frame
        lfSubmissionsFrame.append(lfSubmissionTableRow);
        //Append hidden all submission results
        lfSubmissionsFrame.append(lfAllSubmissionResultsData);
        // Loop through nested JSON object -- grab all label values -- call all submissions label value creator function
        const lfAllSubmissionLabelsPlusValues = lfSubmissions;
        lfAllSubmissionLabelsPlusValues.forEach(function (lfsubmissionLabelValue) {
            var lfSubmissions = lfsubmissionLabelValue;
            lfAddAllLabelValues(lfSubmissions, lfSubmissionsFilesJSON);
        })
        lfRowCount++;
    }


    // Add all Label Plus Values to Submissions Drop Down
    function lfAddAllLabelValues(lfSubmissions, lfSubmissionsFilesJSON) {
        var lfCurrentSubmissionRowDiv = d.getElementById('lf_Submission_All_Results_' + lfRowCount);
        var lfCurrentCount = lfRowCount - 1;
        // Update Submission Tab Count
        var lfSubmissionTabCount = d.getElementById('lf_Submissions_Tab_Count');
        lfSubmissionTabCount.textContent = lfRowCount;


        // Check fieldtype and if attachment metadata JSON exist
        if (lfSubmissions.fieldType === "lfAddFiles" && lfSubmissionsFilesJSON[lfCurrentCount] !== null) {


            // Grab Current File Array
            var lfCurrentArray = lfSubmissionsFilesJSON[lfCurrentCount];
            var lfCurrentArrayParsed = lfCurrentArray;


            // Grabs Each Field Id and Attachment URL
            lfCurrentArrayParsed.forEach(function (lfUrlPlusId) {
                var lfCurrentAttachmentUrls = lfUrlPlusId;
                var lfFieldId = lfCurrentAttachmentUrls.fieldId;
                var lfAttachmentUrl = lfCurrentAttachmentUrls.attachmentUrl;
                var lfAttachmentName = lfCurrentAttachmentUrls.attachmentName;


                // Adds Image URL If field ID matches Field Id Value From Array
                if (lfFieldId === lfSubmissions.currentIncrement) {
                    // Create tag for label value pairs
                    var lfCurrentLabel = d.createElement("B");
                    var lfCurrentValue = d.createElement("P");
                    var lfAttachmentLink = d.createElement("A");


                    // Attachment link URL
                    lfAttachmentLink.href = lfAttachmentUrl;
                    lfAttachmentLink.setAttribute('target', '_blank');


                    // Add classList
                    lfCurrentLabel.classList.add("lf-submission-label");
                    lfCurrentValue.classList.add("lf-submission-value");
                    lfAttachmentLink.classList.add("lf-attachment-link");


                    // Add label value for file field
                    if (lfSubmissions.labelContent !== null) {
                        lfCurrentLabel.textContent = lfSubmissions.labelContent;
                    } else {
                        lfCurrentLabel.textContent = "N/A";
                    }


                    // Add file name value from JSON to tag
                    if (lfAttachmentUrl !== null) {
                        lfAttachmentLink.textContent = lfAttachmentName;
                    } else {
                        lfAttachmentLink.textContent = "N/A";
                    }


                    // Append label value to all submission results hidden div
                    lfCurrentSubmissionRowDiv.append(lfCurrentLabel);
                    lfCurrentValue.append(lfAttachmentLink);
                    lfCurrentSubmissionRowDiv.append(lfCurrentValue);
                }
            })


            // Check fieldtype and if attachment metadata JSON exist
        } else if (lfSubmissions.fieldType === "lfAddFile" && lfSubmissionsFilesJSON[lfCurrentCount] !== null) {


            // Grab Current File Array
            var lfCurrentCount = lfRowCount - 1;
            var lfCurrentArray = lfSubmissionsFilesJSON[lfCurrentCount];
            var lfCurrentArrayParsed = lfCurrentArray;

            // Grabs Each Field Id and Attachment URL
            lfCurrentArrayParsed.forEach(function (lfUrlPlusId) {
                var lfCurrentAttachmentUrls = lfUrlPlusId;
                var lfFieldId = lfCurrentAttachmentUrls.fieldId;
                var lfAttachmentUrl = lfCurrentAttachmentUrls.attachmentUrl;


                // Adds Image URL If field ID matches Field Id Value From Array
                if (lfFieldId === lfSubmissions.currentIncrement) {
                    // Create tag for label value pairs
                    var lfCurrentLabel = d.createElement("B");
                    var lfCurrentValue = d.createElement("P");
                    var lfAttachmentLink = d.createElement("A");


                    // Attachment link URL
                    lfAttachmentLink.href = lfAttachmentUrl;
                    lfAttachmentLink.setAttribute('target', '_blank');


                    // Add classList
                    lfCurrentLabel.classList.add("lf-submission-label");
                    lfCurrentValue.classList.add("lf-submission-value");
                    lfAttachmentLink.classList.add("lf-attachment-link");


                    // Add label value from JSON to tag
                    lfCurrentLabel.textContent = lfSubmissions.labelContent;
                    lfAttachmentLink.textContent = lfSubmissions.value;


                    // Append label value to all submission results hidden div
                    lfCurrentSubmissionRowDiv.append(lfCurrentLabel);
                    lfCurrentValue.append(lfAttachmentLink);
                    lfCurrentSubmissionRowDiv.append(lfCurrentValue);


                }
            })


            // For standard field types fields
        } else {
            // Create tag for label value pairs
            var lfCurrentLabel = d.createElement("B");
            var lfCurrentValue = d.createElement("P");


            // Add classList
            lfCurrentLabel.classList.add("lf-submission-label");
            lfCurrentValue.classList.add("lf-submission-value");


            // Add label value from JSON to tag
            lfCurrentLabel.textContent = lfSubmissions.labelContent;
            lfCurrentValue.textContent = lfSubmissions.value;


            // Append label value to all submission results hidden div
            lfCurrentSubmissionRowDiv.append(lfCurrentLabel);
            lfCurrentSubmissionRowDiv.append(lfCurrentValue);


        }
    }


    // Calls Show/Hide Functions for all submission results hidden div on submission results row + child click
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-submissions-table-row-bg-color" || e.target.className == "lf-submissions-table-row-transparent" || e.target.className == "lf-submissions-type" || e.target.className == "lf-submissions-title" || e.target.className == "lf-submissions-response" || e.target.className == "lf-submissions-time" || e.target.className == "lf-submissions-date") {
            var lfRow = e.target.id;
            var currentRow = d.getElementById(lfRow).getAttribute('data-row-count');
            var checkIfOpen = d.getElementById(lfRow).getAttribute('data-row-opened-closed');
            if (checkIfOpen == "closed") {
                lfShowAllSubmissionResults(currentRow);
            } else {
                lfHideAllSubmissionResults(currentRow);
            }
        } else {
            // return
        }
    })


    // Show All Submission Row Data
    function lfShowAllSubmissionResults(currentRow) {
        var lfSubmissionAllResults = d.getElementById('lf_Submission_All_Results_' + currentRow);
        lfSubmissionAllResults.style.cssText = "display: block";
        var lfSubmissionTableRow = d.getElementById('lf_Submissions_Table_Row_' + currentRow);
        lfSubmissionTableRow.setAttribute("data-row-opened-closed", "opened");
        var lfSubmissionType = d.getElementById('lf_Submissions_Type_' + currentRow);
        lfSubmissionType.setAttribute("data-row-opened-closed", "opened");
        var lfSubmissionTitle = d.getElementById('lf_Submissions_Title_' + currentRow);
        lfSubmissionTitle.setAttribute("data-row-opened-closed", "opened");
        var lfSubmissionResponse = d.getElementById('lf_Submissions_Response_' + currentRow);
        lfSubmissionResponse.setAttribute("data-row-opened-closed", "opened");
        var lfSubmissionTime = d.getElementById('lf_Submissions_Time_' + currentRow);
        lfSubmissionTime.setAttribute("data-row-opened-closed", "opened");
        var lfSubmissionDate = d.getElementById('lf_Submissions_Date_' + currentRow);
        lfSubmissionDate.setAttribute("data-row-opened-closed", "opened");
    }


    // Hide All Submission Row Data
    function lfHideAllSubmissionResults(currentRow) {
        var lfSubmissionAllResults = d.getElementById('lf_Submission_All_Results_' + currentRow);
        lfSubmissionAllResults.style.cssText = "display: none";
        var lfSubmissionTableRow = d.getElementById('lf_Submissions_Table_Row_' + currentRow);
        lfSubmissionTableRow.setAttribute("data-row-opened-closed", "closed");
        var lfSubmissionType = d.getElementById('lf_Submissions_Type_' + currentRow);
        lfSubmissionType.setAttribute("data-row-opened-closed", "closed");
        var lfSubmissionTitle = d.getElementById('lf_Submissions_Title_' + currentRow);
        lfSubmissionTitle.setAttribute("data-row-opened-closed", "closed");
        var lfSubmissionResponse = d.getElementById('lf_Submissions_Response_' + currentRow);
        lfSubmissionResponse.setAttribute("data-row-opened-closed", "closed");
        var lfSubmissionTime = d.getElementById('lf_Submissions_Time_' + currentRow);
        lfSubmissionTime.setAttribute("data-row-opened-closed", "closed");
        var lfSubmissionDate = d.getElementById('lf_Submissions_Date_' + currentRow);
        lfSubmissionDate.setAttribute("data-row-opened-closed", "closed");
    }


    // Displays all submission results for clicked row
    d.addEventListener('click', function (e) {
        if (e.target.className == ("lf-submission-toolbar-option-view")) {
            var lfRowCount = e.target.getAttribute("data-row-count");
            var lfAllSubmissionResultsData = d.getElementById('lf_Submission_All_Results_' + lfRowCount);
            lfAllSubmissionResultsData.style.cssText = "display:block";
            var currentRow = lfRowCount;
            lfShowAllSubmissionResults(currentRow);
        }
    });


    // Logic for Submissions Select All Checkbox
    d.addEventListener('input', function (e) {
        if (e.target.className == "lf-delete-all-submissions") {
            lfSelectAllSubmissions();
        } else if (e.target.className == "lf-delete-all-submissions all-checked") {
            lfUnSelectAllSubmissions();
        } else {
            // return
        }
    })


    // Select All Submissions Checkboxes
    function lfSelectAllSubmissions() {
        var selectAllCheckbox = d.getElementById('select-all');
        selectAllCheckbox.classList.add("all-checked");
        var lfSubmissionFrameCheckboxes = d.getElementById('lf_Submissions_Frame');
        var checkboxes = lfSubmissionFrameCheckboxes.querySelectorAll('input[type="checkbox"]');
        for (var checkbox of checkboxes) {
            checkbox.checked = true;
        }
        var lfSubmissionsDeleteButton = d.getElementById('lf_Submissions_Delete');
        lfSubmissionsDeleteButton.classList.add("lf-active-delete");
    }


    // UnSelect All Submissions Checkboxes
    function lfUnSelectAllSubmissions() {
        var selectAllCheckbox = d.getElementById('select-all');
        selectAllCheckbox.classList.remove("all-checked");
        var lfSubmissionFrameCheckboxes = d.getElementById('lf_Submissions_Frame');
        var checkboxes = lfSubmissionFrameCheckboxes.querySelectorAll('input[type="checkbox"]');
        for (var checkbox of checkboxes) {
            checkbox.checked = false;
        }
        var lfSubmissionsDeleteButton = d.getElementById('lf_Submissions_Delete');
        lfSubmissionsDeleteButton.classList.remove("lf-active-delete");
    }


    // Individual Submissions Delete Input Checked/Unchecked -- Determine Delete Button ClassList
    d.addEventListener('input', function (e) {
        if (e.target.className == "lf-delete-submission-row") {
            // Current checkbox
            var lfRowCheckbox = e.target;
            // Grab delete button 
            var lfSubmissionsDeleteButton = d.getElementById('lf_Submissions_Delete');
            // Grab delete button class
            var lfSubmissionsDeleteButtonClass = lfSubmissionsDeleteButton.className;
            // Grab only checkboxes from Submissions Frame
            var lfSubmissionsFrame = d.getElementById('lf_Submissions_Frame');

            // Loop through all checkboxes to determine if any delete checkboxes are checked and store in array 
            var lfRowCheckboxCheckedArray = [];
            var checkboxes = lfSubmissionsFrame.querySelectorAll('input[type="checkbox"]');
            for (var checkbox of checkboxes) {
                var isChecked = checkbox.checked;
                lfRowCheckboxCheckedArray.push(isChecked);
            }

            // Determines if Submissions Delete Button Class is active
            if (lfRowCheckbox.checked == true && lfSubmissionsDeleteButtonClass != "lf-submissions-delete all-checked") {
                // if checkbox is checked and submissions delete button is not active
                lfSubmissionsDeleteButton.classList.add("lf-active-delete");
            } else if (lfRowCheckbox.checked == false && lfRowCheckboxCheckedArray.includes(true) == false) {
                // Else if checkbox unchecked and no other checkboxes are checked remove classlist from delete button
                lfSubmissionsDeleteButton.classList.remove("lf-active-delete");
            } else {
                //return
            }
        }
    })



    // Delete individual submissions row -- submission row tool bar
    d.addEventListener('click', function (e) {
        if (e.target.className == ("lf-submission-toolbar-option-delete")) {
            // Loader
            var lfOverlay = d.getElementById('lf_Overlay');
            lfOverlay.style.cssText = "display:block !important;";
            var currentRowId = e.target.getAttribute("data-row-count");
            var lfCurrentSubmissionRowId = e.target.getAttribute("data-row-id");
            // Delete Table Row
            var lfSubmissionTableRow = d.getElementById('lf_Submissions_Table_Row_' + currentRowId);
            lfSubmissionTableRow.remove();
            // Delete Table Results
            var lfSubmissionAllResults = d.getElementById('lf_Submission_All_Results_' + currentRowId);
            lfSubmissionAllResults.remove();
            // Delete lf Submission Row
            var data = new FormData();
            data.append('action', 'lffes_delete_editor_individual_submission');
            data.append('_ajax_nonce', lfEditorData.lfNonce);
            data.append('lfrowid', lfCurrentSubmissionRowId);
            fetch('/wp-admin/admin-ajax.php', {
                method: "POST",
                credentials: 'same-origin',
                body: data,
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                var lfDeletedSubmissionRowResponse = data;
                // Remove loader
                var lfOverlay = d.getElementById('lf_Overlay');
                lfOverlay.style.cssText = "display:none !important;";
            })
        }
    });


    var lfSubmissionsCheckedRowIds = [];
    // Delete Selected Submission Rows
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-submissions-delete lf-active-delete") {
            // Loader
            var lfOverlay = d.getElementById('lf_Overlay');
            lfOverlay.style.cssText = "display:block !important;";
            // Create Selected Submission Row Array
            lfSubmissionsCheckedRowIds = [];
            var checkboxes = d.querySelectorAll('input[type="checkbox"]');
            for (var checkbox of checkboxes) {
                var currentRowId = checkbox.getAttribute("data-row-count");
                if (checkbox.checked == true && currentRowId != null) {
                    // Delete Table Row
                    var lfSubmissionTableRow = d.getElementById('lf_Submissions_Table_Row_' + currentRowId);
                    lfSubmissionTableRow.remove();
                    // Delete Table Results
                    var lfSubmissionAllResults = d.getElementById('lf_Submission_All_Results_' + currentRowId);
                    lfSubmissionAllResults.remove();
                    // Push Row Id into Array
                    var lfCurrentSubmissionRowId = checkbox.getAttribute("data-row-id");
                    lfSubmissionsCheckedRowIds.push(lfCurrentSubmissionRowId)
                }
            };
            // Delete Multiple Submission Rows
            var data = new FormData();
            data.append('action', 'lffes_delete_editor_all_submissions');
            data.append('_ajax_nonce', lfEditorData.lfNonce);
            data.append('lfsubmissionrowid', lfSubmissionsCheckedRowIds);
            fetch('/wp-admin/admin-ajax.php', {
                method: "POST",
                credentials: 'same-origin',
                body: data,
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                var lfDeleteAllSelectedSubmissionRows = data;
                // Remove Delete Class
                var lfSubmissionsDeleteButton = d.getElementById('lf_Submissions_Delete');
                lfSubmissionsDeleteButton.classList.remove("lf-active-delete");
                // Remove loader
                var lfOverlay = d.getElementById('lf_Overlay');
                lfOverlay.style.cssText = "display:none !important;";
            })
        };
    });


    // ------------------------------------------------------------------------------------------------------------------------- LF Recreate Fields Switch
    // Switch statement for determining which creator functions to call
    function lfRecreateFields(lfParsedData) {


        const lfAllSavedFieldsParsedData = lfParsedData;
        lfAllSavedFieldsParsedData.forEach(function (lfSavedFieldData) {
            var lfFieldTypes = lfSavedFieldData.fieldType;


            switch (lfFieldTypes) {
                case "lfAddEmail":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddEmail(lfCreatorData);
                    break;

                case "lfAddTextarea":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddTextarea(lfCreatorData);
                    break;

                case "lfAddPass":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddPass(lfCreatorData);
                    break;

                case "lfAddText":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddText(lfCreatorData);
                    break;

                case "lfAddFile":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddFile(lfCreatorData);
                    break;

                case "lfAddNumber":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddNumber(lfCreatorData);
                    break;

                case "lfAddDate":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddDate(lfCreatorData);
                    break;

                case "lfAddRadio":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddRadio(lfCreatorData);
                    break;

                case "lfAddCheckbox":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddCheckbox(lfCreatorData);
                    break;

                case "lfAddPhone":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddPhone(lfCreatorData);
                    break;

                case "lfAddUrl":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddUrl(lfCreatorData);
                    break;

                case "lfAddFiles":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddFiles(lfCreatorData);
                    break;

                case "lfAddDropdown":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddDropdown(lfCreatorData);
                    break;

                case "lfAddSingleProduct":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddSingleProduct(lfCreatorData);
                    break;

                case "lfAddMultipleProducts":
                    prepareCanvas();
                    var lfCreatorData = lfSavedFieldData;
                    lfReAddMultipleProducts(lfCreatorData);
                    break;
            }
        })
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Fields Recreator Functions
    // Re-Creates saved forms 
    // Re-Creates Email Field
    function lfReAddEmail(lfCreatorData) { // Need to update creator functions to include regex, min, max, placeholder, value..
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Email";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "email");
        inputField.setAttribute("autocomplete", "lf-editor-disabled");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        inputField.classList.add("lf-input");
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        helperText.textContent = lfCreatorData.helperContent;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        helperText.contentEditable = "true";
        fieldLetter.textContent = "E";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddEmail");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        inputField.setAttribute("data-hidden", lfCreatorData.hidden);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates Textarea Field
    function lfReAddTextarea(lfCreatorData) { // Need to update creator functions to include regex, min, max, placeholder, value..
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("TEXTAREA");
        var helperText = d.createElement("TEXT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Textarea";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "text");
        inputField.setAttribute("autocomplete", "lf-editor-disabled");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        inputField.setAttribute("rows", "5");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        inputField.classList.add("lf-input");
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        helperText.textContent = lfCreatorData.helperContent;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        helperText.contentEditable = "true";
        fieldLetter.textContent = "T";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddTextarea");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        inputField.setAttribute("data-hidden", lfCreatorData.hidden);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates Password Field
    function lfReAddPass(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Pass";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "password");
        inputField.setAttribute("autocomplete", "lf-editor-disabled");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        inputField.classList.add("lf-input");
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        helperText.textContent = lfCreatorData.helperContent;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        helperText.contentEditable = "true";
        fieldLetter.textContent = "P";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddPass");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        inputField.setAttribute("data-hidden", lfCreatorData.hidden);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates Text Field
    function lfReAddText(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Text";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "text");
        inputField.setAttribute("autocomplete", "lf-editor-disabled");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        inputField.classList.add("lf-input");
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        helperText.textContent = lfCreatorData.helperContent;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        helperText.contentEditable = "true";
        fieldLetter.textContent = "T";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddText");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        inputField.setAttribute("data-hidden", lfCreatorData.hidden);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates File Upload Field
    function lfReAddFile(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "File";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "file");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-input");
        inputField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-add-file-icon.png" + ");";
        inputField.disabled = true;
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        fieldLetter.textContent = "F";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddFile");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates Number Field
    function lfReAddNumber(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Number";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "number");
        inputField.setAttribute("autocomplete", "lf-editor-disabled");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        inputField.classList.add("lf-input");
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        helperText.textContent = lfCreatorData.helperContent;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        helperText.contentEditable = "true";
        fieldLetter.textContent = "N";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddNumber");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        inputField.setAttribute("data-hidden", lfCreatorData.hidden);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates Date Field
    function lfReAddDate(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Date";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "date");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        inputField.classList.add("lf-input");
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        helperText.textContent = lfCreatorData.helperContent;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        helperText.contentEditable = "true";
        fieldLetter.textContent = "D";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddDate");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        inputField.setAttribute("data-hidden", lfCreatorData.hidden);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Recreates Radio Field
    function lfReAddRadio(lfCreatorData) {
        var fieldType = "Radio";

        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        var arrOfRadioIncrements = [];

        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddRadio");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-static-type", "Radio");
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);

        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";

        var radioFieldUl = d.createElement("ul");
        radioFieldUl.id = 'lf_Ul_Container_' + currentIncrement;
        radioFieldUl.classList.add("lf-input-radio-ul");
        radioFieldUl.setAttribute("data-increment", currentIncrement);

        var helperText = d.createElement("TEXT");
        helperText.id = "lf_Field_Description_" + currentIncrement;
        helperText.classList.add("lf-field-description");
        helperText.textContent = lfCreatorData.helperContent;

        var createDropZone = d.createElement("DIV");
        createDropZone.id = "lf_Droppable_Area_" + counter;
        createDropZone.classList.add("lf-drop-items");


        var fieldLetter = d.createElement("SPAN");
        fieldLetter.textContent = "R";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";


        // Re-Creates Radio Options
        var lfRadioLabels = lfCreatorData.radioLabels;
        lfRadioLabels.forEach(function (lfRadioLabel) {
            var lfRowId = lfRadioLabel.radioCount;
            var lfRadioChecked = lfRadioLabel.radioChecked;


            var radioFieldli = d.createElement("li");
            radioFieldli.id = "lf_Li_" + currentIncrement + "_" + lfRowId;
            radioFieldli.classList.add("lf-input-radio-li");
            radioFieldli.setAttribute("data-increment", lfRowId);


            var radioInput = d.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.id = "lf_input_" + currentIncrement + "_" + lfRowId;
            radioInput.classList.add("lf-input-radio");
            radioInput.setAttribute("name", "lf_radio_group_" + currentIncrement);
            radioInput.setAttribute("data-row-id", currentIncrement + "_" + lfRowId);
            radioInput.setAttribute("data-name", "lf_radio_group_" + currentIncrement);
            radioInput.setAttribute("data-is-checked", "false");
            if (lfRadioChecked === "true") {
                radioInput.checked = "true";
                radioInput.setAttribute("data-is-checked", "true");
            }


            var lfCurrentRadioLabel = lfRadioLabel.radioLabel;
            var radioLabel = d.createElement("Label");
            radioLabel.id = "lf_Radio_Label_Option_" + currentIncrement + "_" + lfRowId;
            radioLabel.htmlFor = "lf_input_" + currentIncrement;
            radioLabel.classList.add("lf-radio-label");
            radioLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            radioLabel.textContent = lfCurrentRadioLabel;


            var addNewRadio = d.createElement("button");
            addNewRadio.setAttribute("type", "button");
            addNewRadio.id = "lf_Add_Radio_" + currentIncrement + "_" + lfRowId;
            addNewRadio.classList.add("lf-add-radio");
            addNewRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewRadio.setAttribute("data-radio-count", lfRowId);
            addNewRadio.setAttribute("data-field-increment", increment);


            var removeRadio = d.createElement("button");
            removeRadio.setAttribute("type", "button");
            removeRadio.id = "lf_Minus_Radio_" + currentIncrement + "_" + lfRowId;
            removeRadio.classList.add("lf-minus-radio");
            removeRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeRadio.setAttribute("data-radio-count", lfRowId);
            removeRadio.setAttribute("data-field-increment", increment);


            radioFieldli.append(radioInput);
            radioFieldli.append(radioLabel);
            radioFieldli.append(addNewRadio);
            radioFieldli.append(removeRadio);
            radioFieldUl.append(radioFieldli);

            arrOfRadioIncrements.push(lfRowId);
        })


        const max = Math.max(...arrOfRadioIncrements);
        fieldContainer.setAttribute("data-max-radio-count", max);

        fieldContainer.append(fieldLabel);
        fieldContainer.append(radioFieldUl);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);

        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }

        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Recreates Checkbox Field
    function lfReAddCheckbox(lfCreatorData) {
        var fieldType = "Checkbox";

        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        var arrOfCheckboxIncrements = [];

        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddCheckbox");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-static-type", "Checkbox");
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);

        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";

        var checkboxFieldUl = d.createElement("ul");
        checkboxFieldUl.id = 'lf_Ul_Container_' + currentIncrement;
        checkboxFieldUl.classList.add("lf-input-checkbox-ul");
        checkboxFieldUl.setAttribute("data-increment", currentIncrement);

        var helperText = d.createElement("TEXT");
        helperText.id = "lf_Field_Description_" + currentIncrement;
        helperText.classList.add("lf-field-description");
        helperText.textContent = lfCreatorData.helperContent;

        var createDropZone = d.createElement("DIV");
        createDropZone.id = "lf_Droppable_Area_" + counter;
        createDropZone.classList.add("lf-drop-items");


        var fieldLetter = d.createElement("SPAN");
        fieldLetter.textContent = "C";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";


        // Re-Creates Checkbox Options
        var lfCheckboxLabels = lfCreatorData.checkboxLabels;
        lfCheckboxLabels.forEach(function (lfCheckboxLabel) {
            var lfRowId = lfCheckboxLabel.checkboxCount;
            var lfCheckboxChecked = lfCheckboxLabel.checkboxChecked;


            var checkboxFieldli = d.createElement("li");
            checkboxFieldli.id = "lf_Li_" + currentIncrement + "_" + lfRowId;
            checkboxFieldli.classList.add("lf-input-checkbox-li");
            checkboxFieldli.setAttribute("data-increment", lfRowId);


            var checkboxInput = d.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.id = "lf_input_" + currentIncrement + "_" + lfRowId;
            checkboxInput.classList.add("lf-input-checkbox");
            checkboxInput.setAttribute("name", "lf_checkbox_group_" + currentIncrement);
            checkboxInput.setAttribute("data-row-id", currentIncrement + "_" + lfRowId);
            checkboxInput.setAttribute("data-name", "lf_checkbox_group_" + currentIncrement);
            checkboxInput.setAttribute("data-is-checked", "false");
            if (lfCheckboxChecked === "true") {
                checkboxInput.checked = "true";
                checkboxInput.setAttribute("data-is-checked", "true");
            }


            var lfCurrentCheckboxLabel = lfCheckboxLabel.checkboxLabel;
            var checkboxLabel = d.createElement("Label");
            checkboxLabel.id = "lf_Checkbox_Label_Option_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.htmlFor = "lf_input_" + currentIncrement;
            checkboxLabel.classList.add("lf-checkbox-label");
            checkboxLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            checkboxLabel.textContent = lfCurrentCheckboxLabel;


            var addNewCheckbox = d.createElement("button");
            addNewCheckbox.setAttribute("type", "button");
            addNewCheckbox.id = "lf_Add_Checkbox_" + currentIncrement + "_" + lfRowId;
            addNewCheckbox.classList.add("lf-add-checkbox");
            addNewCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewCheckbox.setAttribute("data-checkbox-count", lfRowId);
            addNewCheckbox.setAttribute("data-field-increment", increment);


            var removeCheckbox = d.createElement("button");
            removeCheckbox.setAttribute("type", "button");
            removeCheckbox.id = "lf_Minus_Checkbox_" + currentIncrement + "_" + lfRowId;
            removeCheckbox.classList.add("lf-minus-checkbox");
            removeCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeCheckbox.setAttribute("data-checkbox-count", lfRowId);
            removeCheckbox.setAttribute("data-field-increment", increment);


            checkboxFieldli.append(checkboxInput);
            checkboxFieldli.append(checkboxLabel);
            checkboxFieldli.append(addNewCheckbox);
            checkboxFieldli.append(removeCheckbox);
            checkboxFieldUl.append(checkboxFieldli);

            arrOfCheckboxIncrements.push(lfRowId);
        })


        const max = Math.max(...arrOfCheckboxIncrements);
        fieldContainer.setAttribute("data-max-checkbox-count", max);

        fieldContainer.append(fieldLabel);
        fieldContainer.append(checkboxFieldUl);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);

        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }

        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates Phone Field
    function lfReAddPhone(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Phone";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "tel");
        inputField.setAttribute("autocomplete", "lf-editor-disabled");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        inputField.classList.add("lf-input");
        inputField.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        helperText.textContent = lfCreatorData.helperContent;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        helperText.contentEditable = "true";
        fieldLetter.textContent = "P";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddPhone");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        inputField.setAttribute("data-hidden", lfCreatorData.hidden);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates URL field
    function lfReAddUrl(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Url";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "url");
        inputField.setAttribute("autocomplete", "lf-editor-disabled");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        inputField.classList.add("lf-input");
        createDropZone.classList.add("lf-drop-items");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        helperText.textContent = lfCreatorData.helperContent;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        helperText.contentEditable = "true";
        fieldLetter.textContent = "W";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddUrl");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        inputField.setAttribute("data-hidden", lfCreatorData.hidden);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Re-Creates Multi-File Upload Field
    function lfReAddFiles(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var createDropZone = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var fieldLetter = d.createElement("SPAN");
        var fieldType = "Files";
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        inputField.setAttribute("type", "file");
        inputField.setAttribute("readonly", "true");
        fieldContainer.draggable = false;
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        inputField.id = "lf_Input" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-input");
        inputField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-add-files-icon.png" + ");";
        inputField.disabled = true;
        createDropZone.classList.add("lf-drop-items");
        inputField.multiple = "true";
        fieldLabel.textContent = lfCreatorData.labelContent;;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.contentEditable = "true";
        fieldLetter.textContent = "M";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
        fieldContainer.append(fieldLabel);
        fieldContainer.append(inputField);
        fieldContainer.append(fieldLetter);
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddFiles");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder);
        fieldContainer.setAttribute("data-min-length", lfCreatorData.min);
        fieldContainer.setAttribute("data-max-length", lfCreatorData.max);
        fieldContainer.setAttribute("data-regex", lfCreatorData.regex);
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }
        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Creates Dropdown Field
    function lfReAddDropdown(lfCreatorData) {
        var fieldType = "Dropdown";
    

        var lfLogic = JSON.stringify(lfCreatorData.logic);
        var arrOfDropdownIncrements = [];
    

        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + increment;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddDropdown");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", lfCreatorData.placeholder); //if placeholder not pending generation use value or vice versa
        fieldContainer.setAttribute("data-value", lfCreatorData.value);
        fieldContainer.setAttribute("data-static-type", "drop");
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        fieldLabel.contentEditable = "true";


        // Dropdown Input
        var lfDropInput = d.createElement("INPUT");


        // Input Value
        if (lfCreatorData.value !== "pending generation") {
            lfDropInput.value = lfCreatorData.value;
        } 

        lfDropInput.placeholder = lfCreatorData.placeholder;
        lfDropInput.id = "lf_Input_" + lfCreatorData.currentIncrement;
        lfDropInput.classList.add("lf-input");
        lfDropInput.setAttribute("type", "text");
        lfDropInput.setAttribute("readonly", "true");
        lfDropInput.setAttribute("data-field-type", "lfDrop");
        lfDropInput.setAttribute("data-field-id", lfCreatorData.currentIncrement);


        // Dropdown Option Ul
        var lfDropInputUl = d.createElement("UL");
        lfDropInputUl.id = "lf_Drop_Input_Ul_" + lfCreatorData.currentIncrement;
        lfDropInputUl.classList.add("lf-select-ul");


        var dropFieldUl = d.createElement("ul");
        dropFieldUl.id = 'lf_Ul_Container_' + lfCreatorData.currentIncrement;
        dropFieldUl.classList.add("lf-input-drop-ul");
        dropFieldUl.setAttribute("data-increment", lfCreatorData.currentIncrement);
    

        var helperText = d.createElement("TEXT");
        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "true";
    

        var createDropZone = d.createElement("DIV");
        createDropZone.id = "lf_Droppable_Area_" + lfCreatorData.currentCounter;
        createDropZone.classList.add("lf-drop-items");


        var fieldLetter = d.createElement("SPAN");
        fieldLetter.textContent = "D";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";
    

        // Creates Radio/Drop Input Options
        var lfDropLabels = lfCreatorData.dropLabels;
        lfDropLabels.forEach(function (lfdropLabel) {
            var lfRowId = lfdropLabel.dropCount;


            // Adds Drop Options
            var lfDropInputLi = d.createElement("Li");
            lfDropInputLi.classList.add("lf-select-option");
            lfDropInputLi.textContent = lfdropLabel.dropLabel;
            lfDropInputLi.setAttribute("data-drop-id", lfCreatorData.currentIncrement);
            lfDropInputLi.setAttribute("data-drop-input-id", lfCreatorData.currentIncrement + "_" + lfRowId);
            lfDropInputUl.append(lfDropInputLi); 


            var dropFieldli = d.createElement("li");
            dropFieldli.id = "lf_Li_" + lfCreatorData.currentIncrement + "_" + lfRowId;
            dropFieldli.classList.add("lf-input-drop-li");
            dropFieldli.setAttribute("data-increment", lfRowId);
    
    
            var dropInput = d.createElement("INPUT");
            dropInput.setAttribute("type", "radio");
            dropInput.id = "lf_input_" + lfCreatorData.currentIncrement + "_" + lfRowId; 
            dropInput.classList.add("lf-input-drop");
            dropInput.setAttribute("name", "lf_drop_group_" + lfCreatorData.currentIncrement);
            dropInput.setAttribute("data-row-id", lfCreatorData.currentIncrement + "_" + lfRowId);
            dropInput.setAttribute("data-name", "lf_drop_group_" + lfCreatorData.currentIncrement);
            dropInput.setAttribute("data-is-checked", "false");
            if (lfdropLabel.dropChecked === "true") {
                dropInput.checked = "true";
                dropInput.setAttribute("data-is-checked", "true");
            }
    
    
            var dropLabel = d.createElement("Label");
            dropLabel.id = "lf_Drop_Label_Option_" + lfCreatorData.currentIncrement + "_" + lfRowId;
            dropLabel.htmlFor = "lf_input_" + lfCreatorData.currentIncrement;
            dropLabel.classList.add("lf-drop-label");
            dropLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            dropLabel.contentEditable = "true";
            dropLabel.textContent = lfdropLabel.dropLabel;
            dropLabel.setAttribute("data-field-increment", lfCreatorData.currentIncrement);
            dropLabel.setAttribute("data-row-id", lfCreatorData.currentIncrement + "_" + lfRowId);
    
    
            var addNewDrop = d.createElement("button");
            addNewDrop.setAttribute("type", "button");
            addNewDrop.id = "lf_Add_Drop_" + lfCreatorData.currentIncrement + "_" + lfRowId;
            addNewDrop.classList.add("lf-add-drop");
            addNewDrop.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewDrop.setAttribute("data-drop-count", lfRowId);
            addNewDrop.setAttribute("data-field-increment", lfCreatorData.currentIncrement);
    
    
            var removeDrop = d.createElement("button");
            removeDrop.setAttribute("type", "button");
            removeDrop.id = "lf_Minus_Drop_" + lfCreatorData.currentIncrement + "_" + lfRowId;
            removeDrop.classList.add("lf-minus-drop");
            removeDrop.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeDrop.setAttribute("data-drop-count", lfRowId);
            removeDrop.setAttribute("data-field-increment", lfCreatorData.currentIncrement);
    
    
            dropFieldli.append(dropInput);
            dropFieldli.append(dropLabel);
            dropFieldli.append(addNewDrop);
            dropFieldli.append(removeDrop);
            dropFieldUl.append(dropFieldli);
    

            arrOfDropdownIncrements.push(lfRowId);
        })
    

        const max = Math.max(...arrOfDropdownIncrements);
        fieldContainer.setAttribute("data-max-drop-count", max);


        fieldContainer.append(fieldLabel);
        fieldContainer.append(lfDropInput);
        fieldContainer.append(lfDropInputUl);
        fieldContainer.append(dropFieldUl);
        fieldContainer.append(helperText);
        fieldContainer.append(fieldLetter);
    

        addLfField(fieldContainer, createDropZone, fieldType);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Recreates Single Product Field
    function lfReAddSingleProduct(lfCreatorData) {
        var fieldType = "Radio";

        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        var arrOfRadioIncrements = [];

        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddSingleProduct");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-static-type", "Radio");
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        fieldLabel.contentEditable = "true";

        var radioFieldUl = d.createElement("ul");
        radioFieldUl.id = 'lf_Ul_Container_' + currentIncrement;
        radioFieldUl.classList.add("lf-input-single-choice-product-ul");
        radioFieldUl.setAttribute("data-increment", currentIncrement);

        var createDropZone = d.createElement("DIV");
        createDropZone.id = "lf_Droppable_Area_" + counter;
        createDropZone.classList.add("lf-drop-items");

        var fieldLetter = d.createElement("SPAN");
        fieldLetter.textContent = "S";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";


        // Re-Creates Radio Options
        var lfRadioLabels = lfCreatorData.radioLabels;
        lfRadioLabels.forEach(function (lfRadioLabel) {
            var lfRowId = lfRadioLabel.radioCount;
            var lfRadioChecked = lfRadioLabel.radioChecked;


            var radioFieldli = d.createElement("li");
            radioFieldli.id = "lf_Li_" + currentIncrement + "_" + lfRowId;
            radioFieldli.classList.add("lf-input-single-choice-product-li");
            radioFieldli.setAttribute("data-increment", lfRowId);


            var inputDiv = d.createElement("DIV"); 
            inputDiv.id = "lf_Product_Div_" + currentIncrement + "_" + lfRowId;
            inputDiv.classList.add("lf-input-single-choice-product-div");
            inputDiv.style.cssText = "background-image: url(" + lfRadioLabel.radioImage + ");";
            inputDiv.setAttribute("data-media-url", lfRadioLabel.radioImage);


            var radioInput = d.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.id = "lf_input_" + currentIncrement + "_" + lfRowId;
            radioInput.classList.add("lf-input-single-choice-product-radio");
            radioInput.setAttribute("name", "lf_radio_group_" + currentIncrement);
            radioInput.setAttribute("data-row-id", currentIncrement + "_" + lfRowId);
            radioInput.setAttribute("data-name", "lf_radio_group_" + currentIncrement);
            radioInput.setAttribute("data-is-checked", "false");
            if (lfRadioChecked === "true") {
                radioInput.checked = "true";
                radioInput.setAttribute("data-is-checked", "true");
            }


            var addImage = d.createElement("SPAN"); 
            addImage.id = "lf_Add_Image_" + currentIncrement + "_" + lfRowId;
            addImage.classList.add("lf-add-single-choice-product-image-radio");
            addImage.setAttribute("data-product-id", "lf_Product_Div_" + currentIncrement + "_" + lfRowId);
            addImage.setAttribute("data-product-container", "lf_Field_Container_" + currentIncrement); 
            addImage.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";


            var inputPrice = d.createElement("INPUT"); 
            inputPrice.setAttribute("type", "number");
            inputPrice.id = "lf_Input_Price_" + currentIncrement + "_" + lfRowId;
            inputPrice.classList.add("lf-single-choice-product-price-input");
            inputPrice.value = lfRadioLabel.radioPrice;
            inputPrice.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";


            var lfCurrentRadioLabel = lfRadioLabel.radioLabel;
            var radioLabel = d.createElement("Label");
            radioLabel.id = "lf_Radio_Label_Option_" + currentIncrement + "_" + lfRowId;
            radioLabel.htmlFor = "lf_input_" + currentIncrement;
            radioLabel.classList.add("lf-single-choice-product-name-label");
            radioLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            radioLabel.textContent = lfCurrentRadioLabel;


            var addRemoveDiv = d.createElement("DIV"); 
            addRemoveDiv.classList.add("lf-add-remove-single-product-div");


            var addNewRadio = d.createElement("button");
            addNewRadio.setAttribute("type", "button");
            addNewRadio.id = "lf_Add_Radio_" + currentIncrement + "_" + lfRowId;
            addNewRadio.classList.add("lf-add-single-product-radio");
            addNewRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewRadio.setAttribute("data-radio-count", lfRowId);
            addNewRadio.setAttribute("data-field-increment", increment);


            var removeRadio = d.createElement("button");
            removeRadio.setAttribute("type", "button");
            removeRadio.id = "lf_Minus_Radio_" + currentIncrement + "_" + lfRowId;
            removeRadio.classList.add("lf-minus-single-product-radio");
            removeRadio.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeRadio.setAttribute("data-radio-count", lfRowId);
            removeRadio.setAttribute("data-field-increment", increment);


            inputDiv.append(radioInput);
            inputDiv.append(addImage);
            inputDiv.append(inputPrice);
            inputDiv.append(radioLabel);
            addRemoveDiv.append(addNewRadio);
            addRemoveDiv.append(removeRadio);
            inputDiv.append(addRemoveDiv);
            radioFieldli.append(inputDiv);
            radioFieldUl.append(radioFieldli);


            arrOfRadioIncrements.push(lfRowId);
        })


        const max = Math.max(...arrOfRadioIncrements);
        fieldContainer.setAttribute("data-max-radio-count", max);

        fieldContainer.append(fieldLabel);
        fieldContainer.append(radioFieldUl);
        fieldContainer.append(fieldLetter);

        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }

        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // Recreates Multiple Products Field
    function lfReAddMultipleProducts(lfCreatorData) {
        var fieldType = "Checkbox";

        var currentIncrement = lfCreatorData.currentIncrement;
        var lfLogic = JSON.stringify(lfCreatorData.logic);
        increment = lfCreatorData.currentIncrement;
        counter = lfCreatorData.currentCounter;
        var arrOfCheckboxIncrements = [];

        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddMultipleProducts");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-static-type", "Checkbox");
        fieldContainer.setAttribute("data-logic-status", lfCreatorData.logicEnabled);
        fieldContainer.setAttribute("data-lf-logic", lfLogic);

        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
        fieldLabel.contentEditable = "true";

        var checkboxFieldUl = d.createElement("ul");
        checkboxFieldUl.id = 'lf_Ul_Container_' + currentIncrement;
        checkboxFieldUl.classList.add("lf-input-multiple-choice-product-ul");
        checkboxFieldUl.setAttribute("data-increment", currentIncrement);

        var createDropZone = d.createElement("DIV");
        createDropZone.id = "lf_Droppable_Area_" + counter;
        createDropZone.classList.add("lf-drop-items");


        var fieldLetter = d.createElement("SPAN");
        fieldLetter.textContent = "M";
        fieldLetter.classList.add("lf-field-letter");
        fieldLetter.style.cssText = "background-color: #282828";


        // Re-Creates Checkbox Options
        var lfCheckboxLabels = lfCreatorData.checkboxLabels;
        lfCheckboxLabels.forEach(function (lfCheckboxLabel) {
            var lfRowId = lfCheckboxLabel.checkboxCount;
            var lfCheckboxChecked = lfCheckboxLabel.checkboxChecked;


            var checkboxFieldli = d.createElement("li");
            checkboxFieldli.id = "lf_Li_" + currentIncrement + "_" + lfRowId;
            checkboxFieldli.classList.add("lf-input-multiple-choice-product-li");
            checkboxFieldli.setAttribute("data-increment", lfRowId);


            var inputDiv = d.createElement("DIV"); 
            inputDiv.id = "lf_Product_Div_" + currentIncrement + "_" + lfRowId;
            inputDiv.classList.add("lf-input-multiple-choice-product-div");
            inputDiv.style.cssText = "background-image: url(" + lfCheckboxLabel.checkboxImage + ");";
            inputDiv.setAttribute("data-media-url", lfCheckboxLabel.checkboxImage);


            var checkboxInput = d.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.id = "lf_input_" + currentIncrement + "_" + lfRowId;
            checkboxInput.classList.add("lf-input-multiple-choice-product-checkbox");
            checkboxInput.setAttribute("name", "lf_checkbox_group_" + currentIncrement);
            checkboxInput.setAttribute("data-row-id", currentIncrement + "_" + lfRowId);
            checkboxInput.setAttribute("data-name", "lf_checkbox_group_" + currentIncrement);
            checkboxInput.setAttribute("data-is-checked", "false");
            if (lfCheckboxChecked === "true") {
                checkboxInput.checked = "true";
                checkboxInput.setAttribute("data-is-checked", "true");
            }


            var addImage = d.createElement("SPAN"); 
            addImage.id = "lf_Add_Image_" + currentIncrement + "_" + lfRowId;
            addImage.classList.add("lf-add-multiple-choice-product-image-checkbox");
            addImage.setAttribute("data-product-id", "lf_Product_Div_" + currentIncrement + "_" + lfRowId);
            addImage.setAttribute("data-product-container", "lf_Field_Container_" + currentIncrement); 
            addImage.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";


            var inputPrice = d.createElement("INPUT"); 
            inputPrice.setAttribute("type", "number");
            inputPrice.id = "lf_Input_Price_" + currentIncrement + "_" + lfRowId;
            inputPrice.classList.add("lf-multiple-choice-product-price-input");
            inputPrice.value = lfCheckboxLabel.checkboxPrice;
            inputPrice.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";


            var lfCurrentCheckboxLabel = lfCheckboxLabel.checkboxLabel;
            var checkboxLabel = d.createElement("Label");
            checkboxLabel.id = "lf_Checkbox_Label_Option_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.htmlFor = "lf_input_" + currentIncrement;
            checkboxLabel.classList.add("lf-multiple-choice-product-name-label");
            checkboxLabel.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-edit-icon.png" + ");";
            checkboxLabel.textContent = lfCurrentCheckboxLabel;


            var addRemoveDiv = d.createElement("DIV"); 
            addRemoveDiv.classList.add("lf-add-remove-multiple-product-div");


            var addNewCheckbox = d.createElement("button");
            addNewCheckbox.setAttribute("type", "button");
            addNewCheckbox.id = "lf_Add_Checkbox_" + currentIncrement + "_" + lfRowId;
            addNewCheckbox.classList.add("lf-add-multiple-product-checkbox");
            addNewCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            addNewCheckbox.setAttribute("data-checkbox-count", lfRowId);
            addNewCheckbox.setAttribute("data-field-increment", increment);


            var removeCheckbox = d.createElement("button");
            removeCheckbox.setAttribute("type", "button");
            removeCheckbox.id = "lf_Minus_Checkbox_" + currentIncrement + "_" + lfRowId;
            removeCheckbox.classList.add("lf-minus-multiple-product-checkbox");
            removeCheckbox.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            removeCheckbox.setAttribute("data-checkbox-count", lfRowId);
            removeCheckbox.setAttribute("data-field-increment", increment);


            inputDiv.append(checkboxInput);
            inputDiv.append(addImage);
            inputDiv.append(inputPrice);
            inputDiv.append(checkboxLabel);
            addRemoveDiv.append(addNewCheckbox);
            addRemoveDiv.append(removeCheckbox);
            inputDiv.append(addRemoveDiv);
            checkboxFieldli.append(inputDiv);
            checkboxFieldUl.append(checkboxFieldli);

            arrOfCheckboxIncrements.push(lfRowId);
        })


        const max = Math.max(...arrOfCheckboxIncrements);
        fieldContainer.setAttribute("data-max-checkbox-count", max);

        fieldContainer.append(fieldLabel);
        fieldContainer.append(checkboxFieldUl);
        fieldContainer.append(fieldLetter);

        if (lfCreatorData.hidden === "true") {
            fieldContainer.style.cssText = "opacity: 0.5";
        }

        addLfField(fieldContainer, createDropZone, fieldType);
        addLfRequired(currentIncrement);
        fieldContainer.style.height = "0px";
        var fieldContainerId = fieldContainer.id;
        setTimeout(lfContainerHeightTransition, 12, fieldContainerId);
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Duplicate Field
    // Grabs duplicate fields data and sends to lfRecreateFields
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-duplicate") {


            // Grab field Id
            var e = d.getElementById(e.target.id);
            var dataAttribute = e.getAttribute('data-increment');
            // Passes current droppable area to global
            duplicatorDrop = dataAttribute;
            // Sets global duplicated to true
            duplicated = "true";
            var fieldContainer = d.getElementById('lf_Field_Container_' + dataAttribute);
            // Grab field type 
            var fieldType = fieldContainer.getAttribute('data-field-type');


            // Grab Data
            if (fieldType === "lfAddRadio") {
                lfDuplicateRadioFieldData(e);
            } else if (fieldType === "lfAddCheckbox") {
                lfDuplicateCheckboxFieldData(e);
            } else if (fieldType === "lfAddDropdown") {
                lfDuplicateDropdownFieldData(e);
            } else if (fieldType === "lfAddSingleProduct") {
                lfDuplicateRadioFieldData(e);
            } else if (fieldType === "lfAddMultipleProducts") {
                lfDuplicateCheckboxFieldData(e);
            } else {


                // Grab required attribute
                var requiredAttribute = fieldContainer.getAttribute('data-required');
                // Grab hidden attribute
                var hiddenAttribute = fieldContainer.getAttribute('data-hidden');
                // Grab input placeholder text
                var inputPlaceholder = e.getAttribute('data-placeholder');
                // Grab MinLength 
                var minLength = fieldContainer.getAttribute('data-min-length'); 
                // Grab MaxLength 
                var maxLength = fieldContainer.getAttribute('data-max-length'); 
                // Grab Regex
                var lfRegex = fieldContainer.getAttribute('data-regex'); 
                // Grab Value
                var lfValue = fieldContainer.getAttribute('data-value'); 
                // Grab Logic Status 
                var lfLogicEnabled = fieldContainer.getAttribute('data-logic-status'); 
                // Grab Logic 
                var lfLogic = fieldContainer.getAttribute('data-lf-logic'); 
                // Parse Logic Object
                var lfParseLogic = JSON.parse(lfLogic); 
                // Grab field label text content
                var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                // Grab description text content
                var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;


                // Increment dataAttribute by 1
                var currentIncrement = dataAttribute;
                currentIncrement++;
                var currentCounter = dataAttribute;
                currentCounter++;


                // Build field data object
                const lfFieldDataAttributes = [{
                    fieldType: fieldType,
                    currentIncrement: increment,
                    currentCounter: counter,
                    required: requiredAttribute,
                    hidden: hiddenAttribute,
                    placeholder: inputPlaceholder,
                    min: minLength, 
                    max: maxLength, 
                    regex: lfRegex, 
                    value: lfValue, 
                    logicEnabled: lfLogicEnabled, 
                    logic: lfParseLogic, 
                    labelContent: fieldLabelText,
                    helperContent: fieldDescriptionText
                }];


                // Add field data object to lfParsedData
                var lfParsedData = lfFieldDataAttributes;
                lfRecreateFields(lfParsedData);
            }
        }
    });


    function lfDuplicateCheckboxFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Passes current droppable area to global
        duplicatorDrop = dataAttribute;
        // Sets global duplicated to true
        duplicated = "true";
        // Field Container
        var fieldContainer = d.getElementById('lf_Field_Container_' + dataAttribute);
        // Grab field type 
        var fieldType = fieldContainer.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = fieldContainer.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = fieldContainer.getAttribute('data-hidden');
        // Grab Logic Status 
        var lfLogicEnabled = fieldContainer.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = fieldContainer.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic); 
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        if (fieldType === "lfAddCheckox") {
            // Grab description text content
            var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        } else {
            var fieldDescriptionText;
        }
        // Grab Checkbox Group Name
        var lfCheckboxGroupName = d.getElementsByName('lf_checkbox_group_' + dataAttribute);
        // Checkbox Label Object
        var lfCheckboxLabelMetaObject = [];
        lfCheckboxGroupName.forEach(function (lfCheckboxGroup) {
            var lfCurrentCheckboxId = lfCheckboxGroup.id;

            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentCheckboxSelected = d.getElementById(lfCurrentCheckboxId);
            if (lfCurrentCheckboxSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }

            if (fieldType === "lfAddCheckbox") {
                var lfCurrentRowId = d.getElementById(lfCurrentCheckboxId).getAttribute("data-row-id");
                var lfCheckboxLabelOptionText = d.getElementById('lf_Checkbox_Label_Option_' + lfCurrentRowId).textContent;
                var lfCheckboxCount = d.getElementById('lf_Add_Checkbox_' + lfCurrentRowId).getAttribute("data-checkbox-count");
                var currentCheckboxLabel = {
                    "checkboxLabel": lfCheckboxLabelOptionText,
                    "checkboxCount": lfCheckboxCount,
                    "checkboxChecked": lfInputChecked
                };
            }   else {
                var lfCurrentRowId = d.getElementById(lfCurrentCheckboxId).getAttribute("data-row-id");
                var lfCheckboxLabelOptionText = d.getElementById('lf_Checkbox_Label_Option_' + lfCurrentRowId).textContent;
                var lfCheckboxCount = d.getElementById('lf_Add_Checkbox_' + lfCurrentRowId).getAttribute("data-checkbox-count");
                var lfCheckboxPrice = d.getElementById('lf_Input_Price_' + lfCurrentRowId).value;
                var lfCheckboxImage = d.getElementById('lf_Product_Div_' + lfCurrentRowId).getAttribute("data-media-url");
                var currentCheckboxLabel = {
                    "checkboxLabel": lfCheckboxLabelOptionText,
                    "checkboxCount": lfCheckboxCount,
                    "checkboxChecked": lfInputChecked,
                    "checkboxPrice": lfCheckboxPrice,
                    "checkboxImage": lfCheckboxImage,
                };
            }
            lfCheckboxLabelMetaObject.push(currentCheckboxLabel);
        })
        // Increment dataAttribute by 1
        var currentIncrement = dataAttribute;
        currentIncrement++;
        var currentCounter = dataAttribute;
        currentCounter++;
        // Build field data object
        const lfFieldDataAttributes = [{
            fieldType: fieldType,
            currentIncrement: increment,
            currentCounter: counter,
            required: requiredAttribute,
            hidden: hiddenAttribute,
            logicEnabled: lfLogicEnabled,
            logic: lfParseLogic,
            labelContent: fieldLabelText,
            helperContent: fieldDescriptionText,
            checkboxLabels: lfCheckboxLabelMetaObject
        }];
        // Add field data object to lfParsedData
        var lfParsedData = lfFieldDataAttributes;
        lfRecreateFields(lfParsedData);
    }


    function lfDuplicateRadioFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Passes current droppable area to global
        duplicatorDrop = dataAttribute;
        // Sets global duplicated to true
        duplicated = "true";
        // Field Container
        var fieldContainer = d.getElementById('lf_Field_Container_' + dataAttribute);
        // Grab field type 
        var fieldType = fieldContainer.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = fieldContainer.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = fieldContainer.getAttribute('data-hidden');
        // Grab Logic Status 
        var lfLogicEnabled = fieldContainer.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = fieldContainer.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic); 
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        if (fieldType === "lfAddRadio") {
            // Grab description text content
            var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        } else {
            var fieldDescriptionText;
        }
        // Grab Radio Group Name
        var lfRadioGroupName = d.getElementsByName('lf_radio_group_' + dataAttribute);
        // Radio Label Object
        var lfRadioLabelMetaObject = [];
        lfRadioGroupName.forEach(function (lfRadioGroup) {
            var lfCurrentRadioId = lfRadioGroup.id;

            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentRadioSelected = d.getElementById(lfCurrentRadioId);
            if (lfCurrentRadioSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }

            if (fieldType === "lfAddRadio") {
                var lfCurrentRowId = d.getElementById(lfCurrentRadioId).getAttribute("data-row-id");
                var lfRadioLabelOptionText = d.getElementById('lf_Radio_Label_Option_' + lfCurrentRowId).textContent;
                var lfRadioCount = d.getElementById('lf_Add_Radio_' + lfCurrentRowId).getAttribute("data-radio-count");
                var currentRadioLabel = {
                    "radioLabel": lfRadioLabelOptionText,
                    "radioCount": lfRadioCount,
                    "radioChecked": lfInputChecked
                };
            } else {
                var lfCurrentRowId = d.getElementById(lfCurrentRadioId).getAttribute("data-row-id");
                var lfRadioLabelOptionText = d.getElementById('lf_Radio_Label_Option_' + lfCurrentRowId).textContent;
                var lfRadioCount = d.getElementById('lf_Add_Radio_' + lfCurrentRowId).getAttribute("data-radio-count");
                var lfRadioPrice = d.getElementById('lf_Input_Price_' + lfCurrentRowId).value;
                var lfRadioImage = d.getElementById('lf_Product_Div_' + lfCurrentRowId).getAttribute("data-media-url");
                var currentRadioLabel = {
                    "radioLabel": lfRadioLabelOptionText,
                    "radioCount": lfRadioCount,
                    "radioChecked": lfInputChecked,
                    "radioPrice": lfRadioPrice,
                    "radioImage": lfRadioImage
                };
            }
            lfRadioLabelMetaObject.push(currentRadioLabel);
        })
        // Increment dataAttribute by 1
        var currentIncrement = dataAttribute;
        currentIncrement++;
        var currentCounter = dataAttribute;
        currentCounter++;
        // Build field data object
        const lfFieldDataAttributes = [{
            fieldType: fieldType,
            currentIncrement: increment,
            currentCounter: counter,
            required: requiredAttribute,
            hidden: hiddenAttribute,
            logicEnabled: lfLogicEnabled,
            logic: lfParseLogic,
            labelContent: fieldLabelText,
            helperContent: fieldDescriptionText,
            radioLabels: lfRadioLabelMetaObject
        }];
        // Add field data object to lfParsedData
        var lfParsedData = lfFieldDataAttributes;
        lfRecreateFields(lfParsedData);
    }


    function lfDuplicateDropdownFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Passes current droppable area to global
        duplicatorDrop = dataAttribute;
        // Sets global duplicated to true
        duplicated = "true";
        // Field Container
        var fieldContainer = d.getElementById('lf_Field_Container_' + dataAttribute);
        // Grab field type 
        var fieldType = fieldContainer.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = fieldContainer.getAttribute('data-required');
        // Grab hidden attribute
        var hiddenAttribute = fieldContainer.getAttribute('data-hidden');
        // Grab placeholder 
        var inputPlaceholder = fieldContainer.getAttribute('data-placeholder');
        // Grab Value
        var lfValue = fieldContainer.getAttribute('data-value');
        // Grab Logic Status 
        var lfLogicEnabled = fieldContainer.getAttribute('data-logic-status');
        // Grab Logic 
        var lfLogic = fieldContainer.getAttribute('data-lf-logic');
        // Parse Logic Object
        var lfParseLogic = JSON.parse(lfLogic);
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        // Grab description text content
        var fieldDescriptionText = d.getElementById('lf_Field_Description_' + dataAttribute).textContent;
        // Grab Drop Group Name
        var lfDropGroupName = d.getElementsByName('lf_drop_group_' + dataAttribute);
        // Dropdown Label Object
        var lfDropLabelMetaObject = [];
        lfDropGroupName.forEach(function (lfDropGroup) {
            var lfCurrentDropId = lfDropGroup.id;

            // Determine if Inputs are Selected
            var lfInputChecked = "false";
            var lfCurrentDropSelected = d.getElementById(lfCurrentDropId);
            if (lfCurrentDropSelected.checked) {
                lfInputChecked = "true";
                lfInputChecked;
            }

            var lfCurrentRowId = d.getElementById(lfCurrentDropId).getAttribute("data-row-id");
            var lfDropLabelOptionText = d.getElementById('lf_Drop_Label_Option_' + lfCurrentRowId).textContent;
            var lfDropCount = d.getElementById('lf_Add_Drop_' + lfCurrentRowId).getAttribute("data-drop-count");
            var currentDropLabel = {
                "dropLabel": lfDropLabelOptionText,
                "dropCount": lfDropCount,
                "dropChecked": lfInputChecked
            };
            lfDropLabelMetaObject.push(currentDropLabel);
        })
        // Increment dataAttribute by 1
        var dataAttribute = increment;
        // Build field data object
        const lfFieldDataAttributes = [{
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            hidden: hiddenAttribute,
            placeholder: inputPlaceholder,
            value: lfValue,
            logicEnabled: lfLogicEnabled,
            logic: lfParseLogic,
            labelContent: fieldLabelText,
            helperContent: fieldDescriptionText,
            dropLabels: lfDropLabelMetaObject,
        }];
        // Add field data object to lfParsedData
        var lfParsedData = lfFieldDataAttributes;
        lfRecreateFields(lfParsedData);
    }


    // Adds grab cursor to LF Fields on mousedown
    d.addEventListener("mousedown", function (event) {
        if (event.target.className == "lf-field") {
            event.target.style.cursor = "grab";
        }
    })


    // Adds back pointer cursor to LF Fields on mouseup
    d.addEventListener("mouseup", function (event) {
        if (event.target.className == "lf-field") {
            event.target.style.cursor = "pointer";
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Collapse WP Sidebar
    // Calls remove pre-loader
    window.addEventListener('load', () => {
        // Calls Collapse WP Sidebar
        collapseWpSidebar();
        // Calls Remove Pro-loader
        setTimeout(removePreLoader, 3000);
        lfAddOnIcons();
    });


    // Collapses WP Sidebar
    function collapseWpSidebar() {
        var wpCollapseButton = d.getElementById('collapse-button');
        var wpCollapseButtonExpanded = wpCollapseButton.getAttribute("aria-expanded");
        if (wpCollapseButtonExpanded == "true") {
            wpCollapseButton.click();
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Remove Loader
    // Removes pre-loader
    function removePreLoader() {
        d.getElementById('lf_Pre_Loader').style.cssText = "display: none !important;";
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Field Editor Collapsible Fields Container
    // Collapsible Fields Container
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-collapsible" || e.target.className == "lf-collapsible active") {
            var lfCollapsibleId = e.target.getAttribute("data-id");
            var lfCollapsibleState = e.target.getAttribute("data-collapsible-state");
            var lfCollapsibleButton = d.getElementById('lf_Collapsible_' + lfCollapsibleId);
            var lfCollapsibleDrop = d.getElementById('lf_Fields_Container_' + lfCollapsibleId);
            if (lfCollapsibleState == "open") {
                lfCollapsibleDrop.style.cssText = "display: none";
                lfCollapsibleButton.setAttribute("data-collapsible-state", "closed");
                lfCollapsibleButton.classList.add("active");
            } else {
                lfCollapsibleDrop.style.cssText = "display: inline-flex";
                lfCollapsibleButton.setAttribute("data-collapsible-state", "open");
                lfCollapsibleButton.classList.remove("active");
            }
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Prevent Return on Form Title, Labels, and Descriptions Input
    // Prevents Return on Content Editable Divs
    d.addEventListener('keydown', (e) => {
        // add if class condition for this function and remove -- maybe need a new function
        if (e.key === "Enter" && e.target.id === "lf_Form_Title" || e.key === "Enter" && e.target.className === "lf-field-label" || e.key === "Enter" && e.target.className === "lf-field-description") {
            e.preventDefault();
        }
    });


    // ------------------------------------------------------------------------------------------------------------------------- LF Copy Shortcode
    // Copy Shortcode to Clipboard
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-copy-shortcode" || e.target.className == "lf-shortcode") {
            var lfShortCodeText = d.getElementById('lf_Shortcode').innerText;
            navigator.clipboard.writeText(lfShortCodeText);
            var lfShortCodeTooltip = d.getElementById('lf_Shortcode_Copied').innerText = "Copied!";
            setTimeout(lfResetShortCodeToolTipText, 3000);
        }
    })
    function lfResetShortCodeToolTipText() {
        var lfShortCodeTooltip = d.getElementById('lf_Shortcode_Copied').innerText = "Copy";
    }



    // ------------------------------------------------------------------------------------------------------------------------- LF Advanced Field Settings Panel
    // ------------------------------------------------------------------------------------------------------------------------- LF Logic 
    // Displays or Hides All Logic Containers -- Enable Logic
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-enable-logic-button") {
            var lfEnableLogicButton = d.getElementById('lf_Enable_Logic');
            var lfLogicType = lfEnableLogicButton.textContent;
            var lfActiveFieldId = d.getElementById('lf_Advanced_Logic_Row_0').getAttribute("data-logic-field-container-id");
            var lfActiveField = d.getElementById('lf_Field_Container_' + lfActiveFieldId);


            // Displays All Logic Containers
            if (lfLogicType === "Enable Logic") {
                lfEnableLogicButton.textContent = "Disable Logic";
                var allLfLogicContainers = d.getElementsByClassName("lf-logic");
                for (var i = 0; i < allLfLogicContainers.length; i++) {
                    allLfLogicContainers[i].setAttribute('style', 'display: inline-flex');
                }
                var lfGlobalConditionContainer = d.getElementById('lf_Advanced_Logic_Row_0').setAttribute('style', "display: inline-flex; padding: 0px !important; border: none; justify-content: space-evenly ;width: 100%;");
                // Hides All Logic Containers
            } else {
                lfEnableLogicButton.textContent = "Enable Logic";
                lfActiveField.setAttribute("data-logic-status", "Disabled");
                lfActiveField.setAttribute("data-lf-logic", "[]");
                var allLfLogicContainers = d.getElementsByClassName("lf-logic");
                for (var i = 0; i < allLfLogicContainers.length; i++) {
                    allLfLogicContainers[i].setAttribute('style', 'display: none');
                }
                var allLfLogicDropInputs = d.getElementsByClassName("lf-logic-dropdown");
                for (var i = 0; i < allLfLogicDropInputs.length; i++) {
                    allLfLogicDropInputs[i].value = "";
                }

                // Is there a way to target any lf avanced logic row starting with id 2 and greater??
                var allLfLogicContainers = d.getElementsByClassName("lf-advanced-settings-tab-content");
                for (var i = 0; i < allLfLogicContainers.length; i++) {
                    allLfLogicContainers[i].remove();
                }
            }

        }
    })


    // Build Advanced Field Settings Inputs -- New Form
    var lfLogicDropIncrement = 0;
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-advanced-toolbar-menu") {


            // Define Logic Row Increment
            var lfLogicRowIncrement = 1;

            // Remove Current Advanced Field Settings Input before Regenerating
            var lfAdvancedSettingsFields = d.getElementById('lf_Advanced_Settings_Container');
            lfAdvancedSettingsFields.innerHTML = "";

            // Grab Advanced Field Settings Panel
            var lfAdvancedSettingsPanel = d.getElementById('lf_Advanced_Settings_Container');

            // Grab Field Container Id
            var lfCurrentToolbarMenu = e.target.id;
            var lfActiveFieldId = d.getElementById(lfCurrentToolbarMenu).getAttribute('data-field-id');


            //  ------------------------------------------------------------------------------  Logic Container
            // Row Tab Container
            var lfAdvancedRowTab = d.createElement("DIV");
            lfAdvancedRowTab.id = "lf_Advanced_Container_" + lfLogicRowIncrement;
            lfAdvancedRowTab.classList.add("lf-advanced-settings-tab");

            // Enable Logic Container
            var lfEnableLogicContainer = d.createElement("DIV");
            lfEnableLogicContainer.classList.add("lf-enable-logic-container");


            // Enable Logic Text
            var lfEnableLogicText = d.createElement("P");
            lfEnableLogicText.textContent = "Logic";
            lfEnableLogicText.classList.add("lf-enable-logic-text");


            // Enable Logic Button
            var lfEnableLogicButton = d.createElement("BUTTON");
            lfEnableLogicButton.textContent = "Enable Logic";
            lfEnableLogicButton.id = "lf_Enable_Logic";
            lfEnableLogicButton.classList.add("lf-enable-logic-button");


            //  ------------------------------------------------------------------------------ Global Logic Row Div Condition Container (global)
            // Logic Row Div
            var lfAdvancedLogicRow = d.createElement("DIV");
            lfAdvancedLogicRow.id = "lf_Advanced_Logic_Row_" + "0";
            lfAdvancedLogicRow.classList.add("lf-logic");
            lfAdvancedLogicRow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfAdvancedLogicRow.setAttribute("data-logic-row-id", "0");


            //  ------------------------------------------------------------------------------ Global Field Logic Condition Container (global)
            // Logic Inputs Container
            var lfAdvancedLogicContainer = d.createElement("DIV");
            lfAdvancedLogicContainer.id = "lf_Advanced_Logic_Container_" + "0";
            lfAdvancedLogicContainer.classList.add("lf-logic-container");


            //  ------------------------------------------------------------------------------  Logic Condition Drop (ie.) Show/Hide (global)
            // Logic Condition Div
            var lfLogicConditionDiv = d.createElement("DIV");
            lfLogicConditionDiv.id = "lf_Logic_Condition_" + "0";
            lfLogicConditionDiv.classList.add("lf-logic-div");

            // Logic Condition Drop Input
            var lfLogicConditionDropInput = d.createElement("INPUT");
            lfLogicConditionDropInput.id = "lf_Logic_Input_Show_Hide_" + "0";
            lfLogicConditionDropInput.classList.add("lf-logic-dropdown");
            lfLogicConditionDropInput.placeholder = "show this field";
            lfLogicConditionDropInput.setAttribute("readonly", "true");
            lfLogicConditionDropInput.setAttribute("autocomplete", "off");
            lfLogicConditionDropInput.setAttribute("data-drop-id", "0");
            lfLogicConditionDropInput.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicConditionDropInput.setAttribute("data-logic-field-container-id", "0");
            lfLogicConditionDropInput.setAttribute("data-logic-row-id", "0");

            // Logic Condition Ul
            var lfLogicConditionUl = d.createElement("UL");
            lfLogicConditionUl.classList.add("lf-logic-select-ul");
            lfLogicConditionUl.id = "lf_Condition_Ul_" + "0";

            // Logic Condition Options
            var lfLogicConditionLiShow = d.createElement("LI");
            lfLogicConditionLiShow.textContent = "Show this field";
            lfLogicConditionLiShow.classList.add("lf-logic-select-option");
            lfLogicConditionLiShow.setAttribute("data-logic-input-id", "0");
            lfLogicConditionLiShow.setAttribute("data-logic-input-type", "Show_Hide");
            lfLogicConditionLiShow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicConditionLiShow.setAttribute("data-logic-row-id", "0");

            var lfLogicConditionLiHide = d.createElement("LI");
            lfLogicConditionLiHide.textContent = "Hide this field";
            lfLogicConditionLiHide.classList.add("lf-logic-select-option");
            lfLogicConditionLiHide.setAttribute("data-logic-input-id", "0");
            lfLogicConditionLiHide.setAttribute("data-logic-input-type", "Show_Hide");
            lfLogicConditionLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicConditionLiHide.setAttribute("data-logic-row-id", "0");

            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Any/All Drop (global)
            // Logic Operator Div
            var lfLogicOperatorDiv = d.createElement("DIV");
            lfLogicOperatorDiv.id = "lf_Logic_Operator_" + "0";
            lfLogicOperatorDiv.classList.add("lf-logic-div");

            // Logic Condition Drop Input
            var lfLogicOperatorDropInput = d.createElement("INPUT");
            lfLogicOperatorDropInput.id = "lf_Logic_Input_Operator_" + "0";
            lfLogicOperatorDropInput.classList.add("lf-logic-dropdown");
            lfLogicOperatorDropInput.placeholder = "if any conditions match";
            lfLogicOperatorDropInput.setAttribute("readonly", "true");
            lfLogicOperatorDropInput.setAttribute("autocomplete", "off");
            lfLogicOperatorDropInput.setAttribute("data-drop-id", lfLogicDropIncrement);
            lfLogicOperatorDropInput.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicOperatorDropInput.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorDropInput.setAttribute("data-logic-row-id", "0");

            // Logic Condition Ul
            var lfLogicOperatorUl = d.createElement("UL");
            lfLogicOperatorUl.classList.add("lf-logic-select-ul");
            lfLogicOperatorUl.id = "lf_Condition_Ul_" + lfLogicDropIncrement;

            // Logic Condition Options
            var lfLogicOperatorLiAny = d.createElement("LI");
            lfLogicOperatorLiAny.textContent = "if Any conditions match";
            lfLogicOperatorLiAny.classList.add("lf-logic-select-option");
            lfLogicOperatorLiAny.setAttribute("data-logic-input-id", "0");
            lfLogicOperatorLiAny.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiAny.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiAny.setAttribute("data-logic-row-id", "0");

            var lfLogicOperatorLiAll = d.createElement("LI");
            lfLogicOperatorLiAll.textContent = "if All conditions match";
            lfLogicOperatorLiAll.classList.add("lf-logic-select-option");
            lfLogicOperatorLiAll.setAttribute("data-logic-input-id", "0");
            lfLogicOperatorLiAll.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiAll.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiAll.setAttribute("data-logic-row-id", "0");


            // Append Drop Input Elements
            lfLogicOperatorDiv.append(lfLogicOperatorDropInput);
            lfLogicOperatorUl.append(lfLogicOperatorLiAny);
            lfLogicOperatorUl.append(lfLogicOperatorLiAll);
            lfLogicOperatorDiv.append(lfLogicOperatorUl);

            // Append Drop Input Elements
            lfLogicConditionDiv.append(lfLogicConditionDropInput);
            lfLogicConditionUl.append(lfLogicConditionLiShow);
            lfLogicConditionUl.append(lfLogicConditionLiHide);
            lfLogicConditionDiv.append(lfLogicConditionUl);

            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Append Container (global)
            // Append Lf Enable Logic Container
            lfEnableLogicContainer.append(lfEnableLogicText);
            lfEnableLogicContainer.append(lfEnableLogicButton);
            lfAdvancedLogicContainer.append(lfLogicConditionDiv);
            lfAdvancedLogicContainer.append(lfLogicOperatorDiv);
            lfAdvancedLogicRow.append(lfAdvancedLogicContainer);
            lfEnableLogicContainer.append(lfAdvancedLogicRow);
            lfAdvancedRowTab.append(lfEnableLogicContainer);


            //  ------------------------------------------------------------------------------ Non-Global Logic Row Div Condition Container (non-global)
            // Logic Row Div
            var lfAdvancedLogicRow = d.createElement("DIV");
            lfAdvancedLogicRow.id = "lf_Advanced_Logic_Row_" + lfLogicRowIncrement;
            lfAdvancedLogicRow.classList.add("lf-logic");
            lfAdvancedLogicRow.setAttribute("data-logic-field-container-id", lfLogicRowIncrement);
            lfAdvancedLogicRow.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Logic Inputs Container
            var lfAdvancedLogicContainer = d.createElement("DIV");
            lfAdvancedLogicContainer.id = "lf_Advanced_Logic_Container_" + lfLogicRowIncrement;
            lfAdvancedLogicContainer.classList.add("lf-logic-container");

            // Logic Label
            var lfLogicLabel = d.createElement("P");
            lfLogicLabel.classList.add("lf-logic-label");
            lfLogicLabel.textContent = "Logic";


            //  ------------------------------------------------------------------------------  Logic Conditional Field Drop
            // Logic Conditional Field Div
            var lfLogicConditionalDiv = d.createElement("DIV");
            lfLogicConditionalDiv.id = "lf_Logic_Conditional_" + lfLogicRowIncrement;
            lfLogicConditionalDiv.classList.add("lf-logic-div");

            // Logic Condition Drop Input
            var lfLogicConditionalDropInput = d.createElement("INPUT");
            lfLogicConditionalDropInput.id = "lf_Logic_Input_Conditional_" + lfLogicRowIncrement;
            lfLogicConditionalDropInput.classList.add("lf-logic-dropdown");
            lfLogicConditionalDropInput.placeholder = "which field";
            lfLogicConditionalDropInput.setAttribute("readonly", "true");
            lfLogicConditionalDropInput.setAttribute("autocomplete", "off");
            lfLogicConditionalDropInput.setAttribute("data-drop-id", lfLogicDropIncrement);
            lfLogicConditionalDropInput.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicConditionalDropInput.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicConditionalDropInput.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Logic Condition Ul
            var lfLogicConditionalUl = d.createElement("UL");
            lfLogicConditionalUl.classList.add("lf-logic-select-ul");
            lfLogicConditionalUl.id = "lf_Condition_Ul_" + lfLogicDropIncrement;

            // Append Drop Input to Div
            lfLogicConditionalDiv.append(lfLogicConditionalDropInput);

            // Logic Condition Options -- Grab All Field Labels
            var lfFieldCount = 0;
            var allFieldContainers = d.querySelectorAll('.lf-field-container');
            allFieldContainers.forEach(function (fieldContainer) {

                // Get all Field Labels
                var lfCurrentFieldId = fieldContainer.getAttribute('data-increment');
                var fieldLabelText = d.getElementById('lf_Field_Label_' + lfCurrentFieldId).textContent;

                if (lfCurrentFieldId !== lfActiveFieldId) {
                    // Create Options
                    var lfLogicConditionalLiShow = d.createElement("LI");
                    lfLogicConditionalLiShow.textContent = fieldLabelText + " " + lfCurrentFieldId;
                    lfLogicConditionalLiShow.classList.add("lf-logic-select-option");
                    lfLogicConditionalLiShow.setAttribute("data-logic-input-id", lfLogicRowIncrement);
                    lfLogicConditionalLiShow.setAttribute("data-logic-input-type", "Conditional");
                    lfLogicConditionalLiShow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
                    lfLogicConditionalLiShow.setAttribute("data-logic-row-id", lfLogicRowIncrement);
                    lfLogicConditionalLiShow.setAttribute("data-logic-active-field-id", lfCurrentFieldId);


                    // Append Options to Ul
                    lfLogicConditionalUl.append(lfLogicConditionalLiShow);

                    // Update Field Count 
                    lfFieldCount++;
                }
            })

            // If no option exist -- add Psuedo Text
            if (lfFieldCount === 0) {
                var lfAddFieldText = d.createElement("LI");
                lfAddFieldText.classList.add("lf-logic-zero-options");
                lfAddFieldText.textContent = "Conditional field logic requires more than one field to exist in your form. Please add additional fields to your form.";
                lfLogicConditionalUl.append(lfAddFieldText);
            }

            // Append Condition Options to Div
            lfLogicConditionalDiv.append(lfLogicConditionalUl);

            // Increment Drop/Input Id by 1
            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Operator Drop
            // Logic Operator Div
            var lfLogicOperatorDiv = d.createElement("DIV");
            lfLogicOperatorDiv.id = "lf_Logic_Operator_" + lfLogicRowIncrement;
            lfLogicOperatorDiv.classList.add("lf-logic-div");

            // Logic Condition Drop Input
            var lfLogicOperatorDropInput = d.createElement("INPUT");
            lfLogicOperatorDropInput.id = "lf_Logic_Input_Operator_" + lfLogicRowIncrement;
            lfLogicOperatorDropInput.classList.add("lf-logic-dropdown");
            lfLogicOperatorDropInput.placeholder = "is";
            lfLogicOperatorDropInput.setAttribute("readonly", "true");
            lfLogicOperatorDropInput.setAttribute("autocomplete", "off");
            lfLogicOperatorDropInput.setAttribute("data-drop-id", lfLogicDropIncrement);
            lfLogicOperatorDropInput.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicOperatorDropInput.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorDropInput.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Logic Condition Ul
            var lfLogicOperatorUl = d.createElement("UL");
            lfLogicOperatorUl.classList.add("lf-logic-select-ul");
            lfLogicOperatorUl.id = "lf_Condition_Ul_" + lfLogicDropIncrement;

            // Logic Condition Options
            var lfLogicOperatorLiShow = d.createElement("LI");
            lfLogicOperatorLiShow.textContent = "Is";
            lfLogicOperatorLiShow.classList.add("lf-logic-select-option");
            lfLogicOperatorLiShow.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiShow.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiShow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiShow.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicOperatorLiHide = d.createElement("LI");
            lfLogicOperatorLiHide.textContent = "Is Not";
            lfLogicOperatorLiHide.classList.add("lf-logic-select-option");
            lfLogicOperatorLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiHide.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicOperatorLiIncludes = d.createElement("LI");
            lfLogicOperatorLiIncludes.textContent = "Includes";
            lfLogicOperatorLiIncludes.classList.add("lf-logic-select-option");
            lfLogicOperatorLiIncludes.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiIncludes.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiIncludes.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiIncludes.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicOperatorLiGreaterThan = d.createElement("LI");
            lfLogicOperatorLiGreaterThan.textContent = "Greater Than";
            lfLogicOperatorLiGreaterThan.classList.add("lf-logic-select-option");
            lfLogicOperatorLiGreaterThan.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiGreaterThan.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiGreaterThan.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiGreaterThan.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicOperatorLiLessThan = d.createElement("LI");
            lfLogicOperatorLiLessThan.textContent = "Less Than";
            lfLogicOperatorLiLessThan.classList.add("lf-logic-select-option");
            lfLogicOperatorLiLessThan.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiLessThan.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiLessThan.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiLessThan.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Append Drop Input Elements
            lfLogicOperatorDiv.append(lfLogicOperatorDropInput);
            lfLogicOperatorUl.append(lfLogicOperatorLiShow);
            lfLogicOperatorUl.append(lfLogicOperatorLiHide);
            lfLogicOperatorUl.append(lfLogicOperatorLiHide);
            lfLogicOperatorUl.append(lfLogicOperatorLiIncludes);
            lfLogicOperatorUl.append(lfLogicOperatorLiGreaterThan);
            lfLogicOperatorUl.append(lfLogicOperatorLiLessThan);
            lfLogicOperatorDiv.append(lfLogicOperatorUl);

            // Increment Drop/Input Id by 1
            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Value Drop
            // Logic Value Div
            var lfLogicValueDiv = d.createElement("DIV");
            lfLogicValueDiv.id = "lf_Logic_Value_" + lfLogicRowIncrement;
            lfLogicValueDiv.classList.add("lf-logic-div");

            // Logic Condition Drop Input
            var lfLogicValueDropInput = d.createElement("INPUT");
            lfLogicValueDropInput.id = "lf_Logic_Input_Value_" + lfLogicRowIncrement;
            lfLogicValueDropInput.classList.add("lf-logic-dropdown");
            lfLogicValueDropInput.placeholder = "answer";
            lfLogicValueDropInput.setAttribute("autocomplete", "off");
            lfLogicValueDropInput.setAttribute("data-drop-id", lfLogicDropIncrement);
            lfLogicValueDropInput.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicValueDropInput.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicValueDropInput.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Logic Condition Ul
            var lfLogicValueUl = d.createElement("UL");
            lfLogicValueUl.classList.add("lf-logic-select-ul");
            lfLogicValueUl.id = "lf_Condition_Ul_" + lfLogicDropIncrement;

            // Logic Condition Options
            var allFieldContainers = d.querySelectorAll('.lf-field-container');
            allFieldContainers.forEach(function (fieldContainer) {

                // Loop through and Grab All Radio/Checkbox/Dropdown Options
                var lfCurrentFieldId = fieldContainer.getAttribute('data-increment'); // maybe remove
                var lfCurrentFieldType = fieldContainer.getAttribute("data-field-type");

                if (lfCurrentFieldType === "lfAddRadio") { // Radio
                    var allRadioOptions = d.querySelectorAll('.lf-radio-label');
                    allRadioOptions.forEach(function (radioOption) {
                        var lfOptionText = radioOption.textContent;
                        var lfLogicValueLiHide = d.createElement("LI");
                        lfLogicValueLiHide.textContent = lfOptionText
                        lfLogicValueLiHide.classList.add("lf-logic-select-option");
                        lfLogicValueLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
                        lfLogicValueLiHide.setAttribute("data-logic-input-type", "Value");
                        lfLogicValueLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
                        lfLogicValueLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);
                        lfLogicValueUl.append(lfLogicValueLiHide);
                    })
                } else if (lfCurrentFieldType === "lfAddCheckbox") { // Checkbox
                    var allCheckboxOptions = d.querySelectorAll('.lf-checkbox-label');
                    allCheckboxOptions.forEach(function (checkboxOption) {
                        var lfOptionText = checkboxOption.textContent;
                        var lfLogicValueLiHide = d.createElement("LI");
                        lfLogicValueLiHide.textContent = lfOptionText
                        lfLogicValueLiHide.classList.add("lf-logic-select-option");
                        lfLogicValueLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
                        lfLogicValueLiHide.setAttribute("data-logic-input-type", "Value");
                        lfLogicValueLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
                        lfLogicValueLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);
                        lfLogicValueUl.append(lfLogicValueLiHide);
                    })
                } else if (lfCurrentFieldType === "lfAddDropdown") { // Checkbox
                    var allDropOptions = d.querySelectorAll('.lf-drop-label');
                    allDropOptions.forEach(function (dropOption) {
                        var lfOptionText = dropOption.textContent;
                        var lfLogicValueLiHide = d.createElement("LI");
                        lfLogicValueLiHide.textContent = lfOptionText
                        lfLogicValueLiHide.classList.add("lf-logic-select-option");
                        lfLogicValueLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
                        lfLogicValueLiHide.setAttribute("data-logic-input-type", "Value");
                        lfLogicValueLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
                        lfLogicValueLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);
                        lfLogicValueUl.append(lfLogicValueLiHide);
                    })
                } else if (lfCurrentFieldType === "lfAddSingleProduct") { // Checkbox
                    var allDropOptions = d.querySelectorAll('.lf-single-choice-product-name-label');
                    allDropOptions.forEach(function (dropOption) {
                        var lfOptionText = dropOption.textContent;
                        var lfLogicValueLiHide = d.createElement("LI");
                        lfLogicValueLiHide.textContent = lfOptionText
                        lfLogicValueLiHide.classList.add("lf-logic-select-option");
                        lfLogicValueLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
                        lfLogicValueLiHide.setAttribute("data-logic-input-type", "Value");
                        lfLogicValueLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
                        lfLogicValueLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);
                        lfLogicValueUl.append(lfLogicValueLiHide);
                    })
                } else if (lfCurrentFieldType === "lfAddMultipleProducts") { // Checkbox
                    var allDropOptions = d.querySelectorAll('.lf-multiple-choice-product-name-label');
                    allDropOptions.forEach(function (dropOption) {
                        var lfOptionText = dropOption.textContent;
                        var lfLogicValueLiHide = d.createElement("LI");
                        lfLogicValueLiHide.textContent = lfOptionText
                        lfLogicValueLiHide.classList.add("lf-logic-select-option");
                        lfLogicValueLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
                        lfLogicValueLiHide.setAttribute("data-logic-input-type", "Value");
                        lfLogicValueLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
                        lfLogicValueLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);
                        lfLogicValueUl.append(lfLogicValueLiHide);
                    })
                } else {
                    // return
                }
            })

            var lfLogicValueLiShow = d.createElement("LI");
            lfLogicValueLiShow.textContent = "Empty";
            lfLogicValueLiShow.classList.add("lf-logic-select-option");
            lfLogicValueLiShow.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicValueLiShow.setAttribute("data-logic-input-type", "Value");
            lfLogicValueLiShow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicValueLiShow.setAttribute("data-logic-row-id", lfLogicRowIncrement);
            var lfLogicValueLiHide = d.createElement("LI");
            lfLogicValueLiHide.textContent = "Blank";
            lfLogicValueLiHide.classList.add("lf-logic-select-option");
            lfLogicValueLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicValueLiHide.setAttribute("data-logic-input-type", "Value");
            lfLogicValueLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicValueLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Append Drop Input Elements
            lfLogicValueDiv.append(lfLogicValueDropInput);
            lfLogicValueUl.append(lfLogicValueLiShow);
            lfLogicValueUl.append(lfLogicValueLiHide);
            lfLogicValueDiv.append(lfLogicValueUl);

            // Increment Drop/Input Id by 1
            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Add Row
            // Logic Add Row Div
            var lfLogicAddRow = d.createElement("DIV");
            lfLogicAddRow.id = "lf_Logic_Add_Container_" + lfLogicRowIncrement;
            lfLogicAddRow.classList.add("lf-logic-add-container");


            // Logic Add Row Button
            var lfLogicAddRowButton = d.createElement("DIV");
            lfLogicAddRowButton.id = "lf_Logic_Add_" + lfLogicRowIncrement;
            lfLogicAddRowButton.classList.add("lf-logic-add");
            lfLogicAddRowButton.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            lfLogicAddRowButton.setAttribute("data-row-id", lfLogicRowIncrement);
            lfLogicAddRowButton.setAttribute("data-field-id", lfActiveFieldId);

            var lfPsuedoElement = d.createElement("div");


            //  ------------------------------------------------------------------------------  Logic Append
            // Append Logic Label to Logic Row
            lfAdvancedLogicRow.append(lfLogicLabel);

            // Append Logic Container Plus Inputs to Logic Row
            lfAdvancedLogicContainer.append(lfLogicConditionalDiv);
            lfAdvancedLogicContainer.append(lfLogicOperatorDiv);
            lfAdvancedLogicContainer.append(lfLogicValueDiv);
            lfAdvancedLogicContainer.append(lfPsuedoElement); 
            lfAdvancedLogicRow.append(lfAdvancedLogicContainer);

            // Append Add Logic Row to Logic Row
            lfAdvancedLogicRow.append(lfLogicAddRow);
            lfLogicAddRow.append(lfLogicAddRowButton);
            lfAdvancedRowTab.append(lfAdvancedLogicRow);

            // Append Logic Row to Advanced Settings Panel
            lfAdvancedSettingsPanel.append(lfAdvancedRowTab);


            //  ------------------------------------------------------------------------------  MinLength Container
            // Row Tab Container
            var lfAdvancedRowTab = d.createElement("DIV");
            lfAdvancedRowTab.id = "lf_Advanced_Container_" + "2";
            lfAdvancedRowTab.classList.add("lf-advanced-settings-tab");

            // Min Row Div
            var lfMinRow = d.createElement("DIV");
            lfMinRow.id = "lf_Settings_Min" + lfActiveFieldId;
            lfMinRow.classList.add("lf-advanced-settings-row");

            // Min Label
            var lfMinLabel = d.createElement("LABEL");
            lfMinLabel.id = "lf_Min_Label"
            lfMinLabel.classList.add("lf-advanced-settings-label");
            lfMinLabel.textContent = "MinLength";

            // Min Range/Input
            var lfMinInput = d.createElement("INPUT");
            lfMinInput.id = "lf_Min_Input_" + lfActiveFieldId;
            lfMinInput.classList.add("lf-advanced-settings-input");
            lfMinInput.placeholder = "0";
            lfMinInput.setAttribute("data-lf-active-field", lfActiveFieldId);
            lfMinInput.setAttribute("data-lf-settings-type", "min");
            lfMinInput.setAttribute("auto-complete", "off");
            lfMinInput.setAttribute("value", "0");
            lfMinInput.setAttribute("type", "number");

            // Min Value
            var lfMinDiv = d.createElement("DIV");
            lfMinDiv.classList.add("lf-settings-tooltip-div");

            var lfMinValue = d.createElement("P");
            lfMinValue.id = "lf_Min_Value_" + lfActiveFieldId;
            lfMinValue.classList.add("lf-advanced-settings-input-value");
            lfMinValue.textContent = "what's this?";

            var lfMinTooltipDiv = d.createElement("DIV");
            lfMinTooltipDiv.classList.add("lf-setting-tooltip");
            var lfMinTooltip = d.createElement("p"); 
            lfMinTooltip.id = "lf_Min_Tooltip";
            lfMinTooltip.textContent = "The min length attribute defines the minimum amount of characters that is acceptable for the input (e.g. An individual letter and/or integer represents one character and the total character count can not be less than 10 characters).";

            lfMinDiv.append(lfMinValue);
            lfMinTooltipDiv.append(lfMinTooltip);
            lfMinDiv.append(lfMinTooltipDiv);

            // Append Min Row to Advanced Settings Panel
            lfMinRow.append(lfMinLabel);
            lfMinRow.append(lfMinInput);
            lfMinRow.append(lfMinDiv);
            lfAdvancedRowTab.append(lfMinRow);
            lfAdvancedSettingsPanel.append(lfAdvancedRowTab);


            //  ------------------------------------------------------------------------------  MaxLength Container
            // Row Tab Container
            var lfAdvancedRowTab = d.createElement("DIV");
            lfAdvancedRowTab.id = "lf_Advanced_Container_" + "3";
            lfAdvancedRowTab.classList.add("lf-advanced-settings-tab");

            // Max Row Div
            var lfMaxRow = d.createElement("DIV");
            lfMaxRow.id = "lf_Settings_Max_" + lfActiveFieldId;
            lfMaxRow.classList.add("lf-advanced-settings-row");

            // Max Label
            var lfMaxLabel = d.createElement("LABEL");
            lfMaxLabel.id = "lf_Max_Label";
            lfMaxLabel.classList.add("lf-advanced-settings-label");
            lfMaxLabel.textContent = "MaxLength";

            // Max Range/Input
            var lfMaxInput = d.createElement("INPUT");
            lfMaxInput.id = "lf_Max_Input_" + lfActiveFieldId;
            lfMaxInput.classList.add("lf-advanced-settings-input");
            lfMaxInput.placeholder = "0";
            lfMaxInput.setAttribute("data-lf-active-field", lfActiveFieldId);
            lfMaxInput.setAttribute("data-lf-settings-type", "max");
            lfMaxInput.setAttribute("auto-complete", "off");
            lfMaxInput.setAttribute("value", "2000");
            lfMaxInput.setAttribute("type", "number");

            // Max Value
            var lfMaxDiv = d.createElement("DIV");
            lfMaxDiv.classList.add("lf-settings-tooltip-div");

            var lfMaxValue = d.createElement("P");
            lfMaxValue.id = "lf_Max_Value_" + lfActiveFieldId;
            lfMaxValue.classList.add("lf-advanced-settings-input-value");
            lfMaxValue.textContent = "what's this?";

            var lfMaxTooltipDiv = d.createElement("DIV");
            lfMaxTooltipDiv.classList.add("lf-setting-tooltip");
            var lfMaxTooltip = d.createElement("p"); 
            lfMaxTooltip.id = "lf_Max_Tooltip";
            lfMaxTooltip.textContent = "The max length attribute defines the maximum amount of characters that is acceptable for the input (e.g. An individual letter and/or integer represents one character and the total character count can not exceed 100 characters).";

            lfMaxDiv.append(lfMaxValue);
            lfMaxTooltipDiv.append(lfMaxTooltip);
            lfMaxDiv.append(lfMaxTooltipDiv);

            // Append Max Row to Advanced Settings Panel
            lfMaxRow.append(lfMaxLabel);
            lfMaxRow.append(lfMaxInput);
            lfMaxRow.append(lfMaxDiv);
            lfAdvancedRowTab.append(lfMaxRow);
            lfAdvancedSettingsPanel.append(lfAdvancedRowTab);


            //  ------------------------------------------------------------------------------  Regex Container
            // Row Tab Container
            var lfAdvancedRowTab = d.createElement("DIV");
            lfAdvancedRowTab.id = "lf_Advanced_Container_" + "4";
            lfAdvancedRowTab.classList.add("lf-advanced-settings-tab");

            // Regex Row Div
            var lfAdvancedRegexRow = d.createElement("DIV");
            lfAdvancedRegexRow.id = "lf_Settings_Regex_" + lfActiveFieldId;
            lfAdvancedRegexRow.classList.add("lf-advanced-settings-row");

            // Regex Label
            var lfRegexLabel = d.createElement("LABEL");
            lfRegexLabel.classList.add("lf-advanced-settings-label");
            lfRegexLabel.textContent = "Regex";

            // Regex Range/Input
            var lfRegexInput = d.createElement("INPUT");
            lfRegexInput.id = "lf_Regex_Input_" + lfActiveFieldId;
            lfRegexInput.classList.add("lf-advanced-settings-input");
            lfRegexInput.placeholder = "Input mask";
            lfRegexInput.setAttribute("data-lf-active-field", lfActiveFieldId);
            lfRegexInput.setAttribute("data-lf-settings-type", "regex");
            lfRegexInput.setAttribute("auto-complete", "off");

            // Regex Value
            var lfRegexDiv = d.createElement("DIV");
            lfRegexDiv.classList.add("lf-settings-tooltip-div");

            var lfRegexValue = d.createElement("P");
            lfRegexValue.id = "lf_Regex_Value_" + lfActiveFieldId;
            lfRegexValue.classList.add("lf-advanced-settings-input-value");
            lfRegexValue.textContent = "what's this?"; 

            var lfRegexTooltipDiv = d.createElement("DIV");
            lfRegexTooltipDiv.classList.add("lf-setting-tooltip");
            var lfRegexTooltip = d.createElement("p"); 
            lfRegexTooltip.textContent = "The pattern attribute specifies a regular expression (regex) that the <input> element's value is checked against on form submission. Leave empty to use built-in form validation.";

            lfRegexDiv.append(lfRegexValue);
            lfRegexTooltipDiv.append(lfRegexTooltip);
            lfRegexDiv.append(lfRegexTooltipDiv);

            // Append Regex Row to Advanced Settings Panel
            lfAdvancedRegexRow.append(lfRegexLabel);
            lfAdvancedRegexRow.append(lfRegexInput);
            lfAdvancedRegexRow.append(lfRegexDiv);
            lfAdvancedRowTab.append(lfAdvancedRegexRow);
            lfAdvancedSettingsPanel.append(lfAdvancedRowTab);


            //  ------------------------------------------------------------------------------  Placeholder Container
            // Row Tab Container
            var lfAdvancedRowTab = d.createElement("DIV");
            lfAdvancedRowTab.id = "lf_Advanced_Container_" + "5";
            lfAdvancedRowTab.classList.add("lf-advanced-settings-tab");

            // Placeholder Row Div
            var lfAdvancedPlaceholderRow = d.createElement("DIV");
            lfAdvancedPlaceholderRow.id = "lf_Settings_Placeholder_" + lfActiveFieldId;
            lfAdvancedPlaceholderRow.classList.add("lf-advanced-settings-row");

            // Placeholder Label
            var lfPlaceholderLabel = d.createElement("LABEL");
            lfPlaceholderLabel.classList.add("lf-advanced-settings-label");
            lfPlaceholderLabel.textContent = "Placeholder";

            // Placeholder Range/Input
            var lfPlaceholderInput = d.createElement("INPUT");
            lfPlaceholderInput.id = "lf_Placeholder_Input_" + lfActiveFieldId;
            lfPlaceholderInput.classList.add("lf-advanced-settings-input");
            lfPlaceholderInput.placeholder = "placeholder";
            lfPlaceholderInput.setAttribute("data-lf-active-field", lfActiveFieldId);
            lfPlaceholderInput.setAttribute("data-lf-settings-type", "placeholder");
            lfPlaceholderInput.setAttribute("auto-complete", "off");

            // Placeholder Value
            var lfPlaceholderDiv = d.createElement("DIV");
            lfPlaceholderDiv.classList.add("lf-settings-tooltip-div");

            var lfPlaceholderValue = d.createElement("P");
            lfPlaceholderValue.id = "lf_Placeholder_Value_" + lfActiveFieldId;
            lfPlaceholderValue.classList.add("lf-advanced-settings-input-value");
            lfPlaceholderValue.textContent = "what's this?";

            var lfPlaceholderTooltipDiv = d.createElement("DIV");
            lfPlaceholderTooltipDiv.classList.add("lf-setting-tooltip");
            var lfPlaceholderTooltip = d.createElement("p"); 
            lfPlaceholderTooltip.textContent = "The placeholder attribute specifies a short hint that describes the expected value of an input field (e.g. a sample value or a short description of the expected format).";

            lfPlaceholderDiv.append(lfPlaceholderValue);
            lfPlaceholderTooltipDiv.append(lfPlaceholderTooltip);
            lfPlaceholderDiv.append(lfPlaceholderTooltipDiv);

            // Append Placeholder Row to Advanced Settings Panel
            lfAdvancedPlaceholderRow.append(lfPlaceholderLabel);
            lfAdvancedPlaceholderRow.append(lfPlaceholderInput);
            lfAdvancedPlaceholderRow.append(lfPlaceholderDiv);
            lfAdvancedRowTab.append(lfAdvancedPlaceholderRow);
            lfAdvancedSettingsPanel.append(lfAdvancedRowTab);


            //  ------------------------------------------------------------------------------  Value Container
            // Row Tab Container
            var lfAdvancedRowTab = d.createElement("DIV");
            lfAdvancedRowTab.id = "lf_Advanced_Container_" + "6";
            lfAdvancedRowTab.classList.add("lf-advanced-settings-tab");

            // Value Row Div
            var lfAdvancedValueRow = d.createElement("DIV");
            lfAdvancedValueRow.id = "lf_Settings_Value_" + lfActiveFieldId;
            lfAdvancedValueRow.classList.add("lf-advanced-settings-row");

            // Value Label
            var lfValueLabel = d.createElement("LABEL");
            lfValueLabel.classList.add("lf-advanced-settings-label");
            lfValueLabel.textContent = "Value";

            // Value Range/Input
            var lfValueInput = d.createElement("INPUT");
            lfValueInput.id = "lf_Value_Input_" + lfActiveFieldId;
            lfValueInput.classList.add("lf-advanced-settings-input");
            lfValueInput.placeholder = "value";
            lfValueInput.setAttribute("data-lf-active-field", lfActiveFieldId);
            lfValueInput.setAttribute("data-lf-settings-type", "value");
            lfValueInput.setAttribute("auto-complete", "off");

            // Value Value
            var lfValueDiv = d.createElement("DIV"); 
            lfValueDiv.classList.add("lf-settings-tooltip-div");

            var lfValueValue = d.createElement("P");
            lfValueValue.id = "lf_Value_Value_" + lfActiveFieldId;
            lfValueValue.classList.add("lf-advanced-settings-input-value");
            lfValueValue.textContent = "what's this?";

            var lfValueTooltipDiv = d.createElement("DIV");
            lfValueTooltipDiv.classList.add("lf-setting-tooltip");
            var lfValueTooltip = d.createElement("p"); 
            lfValueTooltip.textContent = "The value attribute specifies the value of an <input> element. Adding a value will remove and replace the placeholder attribute text.";

            lfValueDiv.append(lfValueValue);
            lfValueTooltipDiv.append(lfValueTooltip);
            lfValueDiv.append(lfValueTooltipDiv);

            // Append Value Row to Advanced Settings Panel
            lfAdvancedValueRow.append(lfValueLabel);
            lfAdvancedValueRow.append(lfValueInput);
            lfAdvancedValueRow.append(lfValueDiv); 
            lfAdvancedRowTab.append(lfAdvancedValueRow);
            lfAdvancedSettingsPanel.append(lfAdvancedRowTab);


            // If Current Field Has Logic Enabled -- Enable Logic (Re-create Logic)
            var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfActiveFieldId)
            var lfLogicStatus = lfFieldContainer.getAttribute("data-logic-status");
            if (lfLogicStatus === "Enabled") {
                lfEnableLogic();
                lfRecreateLogic();
            }


        }
    })


    var lfAdvancedSettingsFieldId; // Global Variable for Current Active Field
    var lfAdvancedSettingsPanelOpen = "false"; // Global variable used to determine if settings panel is open 
    // Displays Advanced Settings Panel
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-advanced-toolbar-menu") {

            // Grab Current Menu Id
            var lfCurrentId = e.target.id;


            // Show Settings Panel
            var lfAdvancedSettingsPanel = d.getElementById('lf_Advanced_Settings_Panel');
            var lfShowAdvancedSettingsPanel = lfAdvancedSettingsPanel.style.cssText = "visibility: visible";


            // Hide All Open Toolbars 
            var lfToolbar = d.getElementsByClassName("lf-toolbar");
            var lfFieldActions = d.getElementsByClassName("field-actions");
            var i;
            for (i = 0; i < lfToolbar.length; i++) {
                lfToolbar[i].classList.remove("lf-temp-show");
                lfFieldActions[i].classList.remove("lf-temp-show");
            }

            // Highlight Active Field
            var lfCurrentFieldId = d.getElementById(lfCurrentId).getAttribute("data-field-id");
            var lfHighLightCurrentToolBar = d.getElementById('lf_ToolBar_' + lfCurrentFieldId).classList.add("lf-temp-show");
            var lfHighLightCurrentFieldActionsToolBar = d.getElementById('lf_Field_Actions_' + lfCurrentFieldId).classList.add("lf-temp-show");


            // Update Advanced Settings Global with Current Field Id
            lfAdvancedSettingsFieldId = lfCurrentFieldId;
            lfAdvancedSettingsFieldId;


            lfAdvancedSettingsPanelOpen = "true"; 


            // Increase Form Container Height to Allow Scrolling All Fields
            var lfFormContainer = d.getElementById('lf_Form_Container');
            lfFormContainer.style.cssText = "margin-bottom: 382px";
        }
    })


    // Hides Advanced Settings Panel 
    d.addEventListener('click', function (e) {
        var lfSettingsPanel = d.getElementById('lf_Advanced_Settings_Panel');
        if (lfAdvancedSettingsPanelOpen === "true" && e.target.classList != "lf-advanced-toolbar-menu" && e.target !== lfSettingsPanel && !lfSettingsPanel.contains(e.target)) {
            lfSettingsPanel.style.cssText = "display: none";

            // Hide Active Field Toolbar
            var lfActiveFieldToolbar = d.getElementById('lf_ToolBar_' + lfAdvancedSettingsFieldId);
            var lfActiveFieldActions = d.getElementById('lf_Field_Actions_' + lfAdvancedSettingsFieldId);
            lfActiveFieldToolbar.classList.remove("lf-temp-show");
            lfActiveFieldActions.classList.remove("lf-temp-show");


            // Reset Form Container Height 
            var lfFormContainer = d.getElementById('lf_Form_Container');
            lfFormContainer.style.cssText = "margin-bottom: 80px";
        }
    })


    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-advanced-menu-dismiss") {
            var lfCurrentId = e.target.id;


            // Hide Settings Panel
            var lfAdvancedSettingsPanel = d.getElementById('lf_Advanced_Settings_Panel');
            var lfShowAdvancedSettingsPanel = lfAdvancedSettingsPanel.style.cssText = "visibility: hidden";


            // Hide Highlighted Active Field Toolbars
            var lfHighLightCurrentToolBar = d.getElementById('lf_ToolBar_' + lfAdvancedSettingsFieldId).classList.remove("lf-temp-show");
            var lfHighLightCurrentFieldActionsToolBar = d.getElementById('lf_Field_Actions_' + lfAdvancedSettingsFieldId).classList.remove("lf-temp-show");


            // Reset Form Container Height 
            var lfFormContainer = d.getElementById('lf_Form_Container');
            lfFormContainer.style.cssText = "margin-bottom: 80px";
        }
    })


    // Displays Current Advanced Settings Panel Tab Content
    d.addEventListener('click', function (e) {
        var lfCurrentId = e.target.id;
        if (e.target.className === "lf-advanced-menu-item") {


            // Hides All Advanced Settings Panels Tab Content
            var i;
            var lfTabContent = d.getElementsByClassName("lf-advanced-settings-tab");
            for (i = 0; i < lfTabContent.length; i++) {
                lfTabContent[i].style.display = "none";
            } // Currently trhis function is not working correctly becasue it is not looping throught all rows since they have different classes



            // Removes all "Active Class" From Advanced Settings Tab Links
            var lfTabLinks = d.getElementsByClassName("lf-advanced-menu-item");
            for (i = 0; i < lfTabLinks.length; i++) {
                lfTabLinks[i].className = lfTabLinks[i].className.replace(" is-active", "");
            }


            // Show Current Advanced Settings Panels Tab Content Plus Add Active Class to Tab Link
            var lfCurrentTabId = d.getElementById(lfCurrentId).getAttribute("data-tab-id");
            var lfCurrentTabContent = d.getElementById('lf_Advanced_Container_' + lfCurrentTabId).style.cssText = "display: flex";



            var lfAddActiveClass = d.getElementById(lfCurrentId).classList.add("is-active");
            var lfViewAllTab = d.getElementById('lf_Advanced_Tab_0');
            lfViewAllTab.classList.remove("is-active");
        } else {
            // return
        }
    })


    // Displays All Advanced Settings Panel Tabs -- View All
    d.addEventListener('click', function (e) {
        var lfCurrentId = e.target.id;
        if (e.target.className === "lf-advanced-menu-item-view-all") {


            // Show All Advanced Settings Panels Tab Content
            var i;
            var lfTabContent = d.getElementsByClassName("lf-advanced-settings-tab");
            for (i = 0; i < lfTabContent.length; i++) {
                lfTabContent[i].style.display = "flex";
            }


            // Removes all "Active Class" From Advanced Settings Tab Links
            var lfTabLinks = d.getElementsByClassName("lf-advanced-menu-item");
            for (i = 0; i < lfTabLinks.length; i++) {
                lfTabLinks[i].className = lfTabLinks[i].className.replace(" is-active", "");
            }


            // Add Active Class to View All Tab Link
            var lfCurrentTabContent = d.getElementById('lf_Advanced_Tab_0');
            var lfAddActiveClass = lfCurrentTabContent.classList.add("is-active");
        } else {
            // return
        }
    })


    // Updates Inputs -- placeholder, value, pattern.
    d.addEventListener("input", function (e) {
        var lfCurrentId = e.target.id;
        if (e.target.className === "lf-advanced-settings-input") {
            var lfCurrentActiveFieldId = e.target.getAttribute("data-lf-active-field");
            var lfFieldType = e.target.getAttribute("data-lf-settings-type");
            var lfCurrentField = d.getElementById('lf_Input_' + lfCurrentActiveFieldId);
            var lfCurrentFieldContainer = d.getElementById('lf_Field_Container_' + lfCurrentActiveFieldId);
            var lfInputValue = d.getElementById(lfCurrentId).value;
            if (lfFieldType === "placeholder") {
                lfCurrentField.placeholder = lfInputValue;
                lfCurrentFieldContainer.setAttribute("data-placeholder", lfInputValue);
            } else if (lfFieldType === "value") {
                lfCurrentField.value = lfInputValue;
                lfCurrentFieldContainer.setAttribute("data-value", lfInputValue);
            } else if(lfFieldType === "min") {
                lfCurrentFieldContainer.setAttribute("data-min-length", lfInputValue);
            } else if(lfFieldType === "max") {
                lfCurrentFieldContainer.setAttribute("data-max-length", lfInputValue);
            }else {
                lfCurrentField.setAttribute("pattern", lfInputValue);
                lfCurrentFieldContainer.setAttribute("data-regex", lfInputValue);
            }
        }
    })


    // Closes Open Logic Drops (Order of Operation Dependency -- Do Not Swap with Function Below)(Sequential order 1)
    d.addEventListener('click', function (e) {
        if (LogicDropOpen === "true" && e.target.classList !== "lf-logic-select-ul") {
            var i;
            var lfTabContent = d.getElementsByClassName("lf-logic-select-ul");
            for (i = 0; i < lfTabContent.length; i++) {
                lfTabContent[i].style.display = "none";
            }
            LogicDropOpen = "false";
        }
    })


    var LogicDropOpen; // Global Variable To Identify Active State of Logic Drops
    // Displays Logic Input DropDown Options -- (Sequential order 2)
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-logic-dropdown") {
            var lfCurrentId = e.target.id;
            var lfDropId = d.getElementById(lfCurrentId).getAttribute('data-drop-id');


            // Hide All Open Logic Dropdowns
            var i;
            var lfOpenLogicDrops = d.getElementsByClassName("lf-logic-select-ul");
            for (i = 0; i < lfOpenLogicDrops.length; i++) {
                lfOpenLogicDrops[i].style.display = "none";
            }


            d.getElementById('lf_Condition_Ul_' + lfDropId).style.cssText = "display: block";

            LogicDropOpen = "true";
        }
    })


    // Reset Logic Row Increment Global When Advanced Field Settings Panel Closed
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-advanced-toolbar-menu" || e.target.className === "lf-advanced-menu-dismiss") {
            lfLogicRowIncrement = 2;
        }
    })


    // Logic Row Duplicator -- Adds Rule -- Advanced Field Settings Panel
    var lfLogicRowIncrement = 2; // Global variable for Added Logic Row IDs
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-logic-add") {
            // Determines Current Logic Row Count Id/Increment
            var lfCount = 0;
            var lfLogicFieldContainers = d.querySelectorAll('.lf-logic');
            lfLogicFieldContainers.forEach(function (lfLogicFieldContainer) {
                lfCount++;
            })


            // Set Logic Row Count Id/Increment
            lfLogicRowIncrement = lfCount;


            // Grab Field Container Id
            var lfCurrentDeleteLogicRowButton = e.target.id;
            var lfActiveFieldId = d.getElementById(lfCurrentDeleteLogicRowButton).getAttribute('data-field-id');

            // Grab Current Logic Row
            var lfCurrentLogicRowId = d.getElementById(lfCurrentDeleteLogicRowButton).getAttribute('data-row-id');
            var lfCurrentLogicRow = d.getElementById('lf_Advanced_Logic_Row_' + lfCurrentLogicRowId);


            //  ------------------------------------------------------------------------------  Logic Container
            // Row Tab Container
            var lfAdvancedRowTab = d.createElement("DIV");
            lfAdvancedRowTab.id = "lf_Advanced_Logic_Container_" + lfLogicRowIncrement;
            lfAdvancedRowTab.classList.add("lf-advanced-settings-tab-content");

            // Logic Row Div
            var lfAdvancedLogicRow = d.createElement("DIV");
            lfAdvancedLogicRow.id = "lf_Advanced_Logic_Row_" + lfLogicRowIncrement;
            lfAdvancedLogicRow.classList.add("lf-logic");


            // If Logic Enabled Add Inline-Flex
            var lfEnableLogicButton = d.getElementById('lf_Enable_Logic');
            var lfLogicType = lfEnableLogicButton.textContent;
            if (lfLogicType === "Disable Logic") {
                lfEnableLogicButton.textContent = "Disable Logic";
                lfAdvancedLogicRow.setAttribute('style', 'display: inline-flex');
            }

            lfAdvancedLogicRow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfAdvancedLogicRow.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Logic Inputs Container
            var lfAdvancedLogicContainer = d.createElement("DIV");
            lfAdvancedLogicContainer.id = "lf_Advanced_Logic_Container_" + lfLogicRowIncrement;
            lfAdvancedLogicContainer.classList.add("lf-logic-container");

            // Logic Label
            var lfLogicLabel = d.createElement("P");
            lfLogicLabel.classList.add("lf-logic-label");
            lfLogicLabel.textContent = "Logic";


            //  ------------------------------------------------------------------------------  Logic Conditional Field Drop
            // Logic Conditional Field Div
            var lfLogicConditionalDiv = d.createElement("DIV");
            lfLogicConditionalDiv.id = "lf_Logic_Conditional_" + lfActiveFieldId;
            lfLogicConditionalDiv.classList.add("lf-logic-div");

            // Logic Condition Drop Input
            var lfLogicConditionalDropInput = d.createElement("INPUT");
            lfLogicConditionalDropInput.id = "lf_Logic_Input_Conditional_" + lfLogicRowIncrement;
            lfLogicConditionalDropInput.classList.add("lf-logic-dropdown");
            lfLogicConditionalDropInput.placeholder = "which field";
            lfLogicConditionalDropInput.setAttribute("readonly", "true");
            lfLogicConditionalDropInput.setAttribute("autocomplete", "off");
            lfLogicConditionalDropInput.setAttribute("data-drop-id", lfLogicDropIncrement);
            lfLogicConditionalDropInput.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicConditionalDropInput.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicConditionalDropInput.setAttribute("data-logic-row-id", lfLogicRowIncrement);


            // Logic Condition Ul
            var lfLogicConditionalUl = d.createElement("UL");
            lfLogicConditionalUl.classList.add("lf-logic-select-ul");
            lfLogicConditionalUl.id = "lf_Condition_Ul_" + lfLogicDropIncrement;

            // Append Drop Input to Div
            lfLogicConditionalDiv.append(lfLogicConditionalDropInput);

            // Logic Condition Options -- Grab All Field Labels
            var allFieldContainers = d.querySelectorAll('.lf-field-container');
            allFieldContainers.forEach(function (fieldContainer) {

                // Get all Field Labels
                var lfCurrentFieldId = fieldContainer.getAttribute('data-increment');
                var fieldLabelText = d.getElementById('lf_Field_Label_' + lfCurrentFieldId).textContent;

                if (lfCurrentFieldId !== lfActiveFieldId) {
                    // Create Options
                    var lfLogicConditionalLiShow = d.createElement("LI");
                    lfLogicConditionalLiShow.textContent = fieldLabelText + " " + lfCurrentFieldId;
                    lfLogicConditionalLiShow.classList.add("lf-logic-select-option");
                    lfLogicConditionalLiShow.setAttribute("data-logic-input-id", lfLogicRowIncrement);
                    lfLogicConditionalLiShow.setAttribute("data-logic-input-type", "Conditional");
                    lfLogicConditionalLiShow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
                    lfLogicConditionalLiShow.setAttribute("data-logic-row-id", lfLogicRowIncrement);
                    lfLogicConditionalLiShow.setAttribute("data-logic-active-field-id", lfCurrentFieldId);

                    // Append Options to Ul
                    lfLogicConditionalUl.append(lfLogicConditionalLiShow);
                }
            })

            // Append Condition Options to Div
            lfLogicConditionalDiv.append(lfLogicConditionalUl);

            // Increment Drop/Input Id by 1
            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Operator Drop
            // Logic Operator Div
            var lfLogicOperatorDiv = d.createElement("DIV");
            lfLogicOperatorDiv.id = "lf_Logic_Operator_" + lfActiveFieldId;
            lfLogicOperatorDiv.classList.add("lf-logic-div");

            // Logic Condition Drop Input
            var lfLogicOperatorDropInput = d.createElement("INPUT");
            lfLogicOperatorDropInput.id = "lf_Logic_Input_Operator_" + lfLogicRowIncrement;
            lfLogicOperatorDropInput.classList.add("lf-logic-dropdown");
            lfLogicOperatorDropInput.placeholder = "is";
            lfLogicOperatorDropInput.setAttribute("readonly", "true");
            lfLogicOperatorDropInput.setAttribute("autocomplete", "off");
            lfLogicOperatorDropInput.setAttribute("data-drop-id", lfLogicDropIncrement);
            lfLogicOperatorDropInput.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicOperatorDropInput.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorDropInput.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Logic Condition Ul
            var lfLogicOperatorUl = d.createElement("UL");
            lfLogicOperatorUl.classList.add("lf-logic-select-ul");
            lfLogicOperatorUl.id = "lf_Condition_Ul_" + lfLogicDropIncrement;

            // Logic Condition Options
            var lfLogicOperatorLiShow = d.createElement("LI");
            lfLogicOperatorLiShow.textContent = "Is";
            lfLogicOperatorLiShow.classList.add("lf-logic-select-option");
            lfLogicOperatorLiShow.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiShow.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiShow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiShow.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicOperatorLiHide = d.createElement("LI");
            lfLogicOperatorLiHide.textContent = "Is Not";
            lfLogicOperatorLiHide.classList.add("lf-logic-select-option");
            lfLogicOperatorLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiHide.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicOperatorLiIncludes = d.createElement("LI");
            lfLogicOperatorLiIncludes.textContent = "Includes";
            lfLogicOperatorLiIncludes.classList.add("lf-logic-select-option");
            lfLogicOperatorLiIncludes.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiIncludes.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiIncludes.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiIncludes.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicOperatorLiGreaterThan = d.createElement("LI");
            lfLogicOperatorLiGreaterThan.textContent = "Greater Than";
            lfLogicOperatorLiGreaterThan.classList.add("lf-logic-select-option");
            lfLogicOperatorLiGreaterThan.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiGreaterThan.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiGreaterThan.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiGreaterThan.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicOperatorLiLessThan = d.createElement("LI");
            lfLogicOperatorLiLessThan.textContent = "Less Than";
            lfLogicOperatorLiLessThan.classList.add("lf-logic-select-option");
            lfLogicOperatorLiLessThan.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicOperatorLiLessThan.setAttribute("data-logic-input-type", "Operator");
            lfLogicOperatorLiLessThan.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicOperatorLiLessThan.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Append Drop Input Elements
            lfLogicOperatorDiv.append(lfLogicOperatorDropInput);
            lfLogicOperatorUl.append(lfLogicOperatorLiShow);
            lfLogicOperatorUl.append(lfLogicOperatorLiHide);
            lfLogicOperatorUl.append(lfLogicOperatorLiHide);
            lfLogicOperatorUl.append(lfLogicOperatorLiIncludes);
            lfLogicOperatorUl.append(lfLogicOperatorLiGreaterThan);
            lfLogicOperatorUl.append(lfLogicOperatorLiLessThan);
            lfLogicOperatorDiv.append(lfLogicOperatorUl);

            // Increment Drop/Input Id by 1
            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Value Drop
            // Logic Value Div
            var lfLogicValueDiv = d.createElement("DIV");
            lfLogicValueDiv.id = "lf_Logic_Value_" + lfActiveFieldId;
            lfLogicValueDiv.classList.add("lf-logic-div");

            // Logic Condition Drop Input
            var lfLogicValueDropInput = d.createElement("INPUT");
            lfLogicValueDropInput.id = "lf_Logic_Input_Value_" + lfLogicRowIncrement;
            lfLogicValueDropInput.classList.add("lf-logic-dropdown");
            lfLogicValueDropInput.placeholder = "answer";
            lfLogicValueDropInput.setAttribute("autocomplete", "off");
            lfLogicValueDropInput.setAttribute("data-drop-id", lfLogicDropIncrement);
            lfLogicValueDropInput.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicValueDropInput.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicValueDropInput.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Logic Condition Ul
            var lfLogicValueUl = d.createElement("UL");
            lfLogicValueUl.classList.add("lf-logic-select-ul");
            lfLogicValueUl.id = "lf_Condition_Ul_" + lfLogicDropIncrement;

            // Logic Condition Options
            var lfLogicValueLiShow = d.createElement("LI");
            lfLogicValueLiShow.textContent = "Empty";
            lfLogicValueLiShow.classList.add("lf-logic-select-option");
            lfLogicValueLiShow.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicValueLiShow.setAttribute("data-logic-input-type", "Value");
            lfLogicValueLiShow.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicValueLiShow.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            var lfLogicValueLiHide = d.createElement("LI");
            lfLogicValueLiHide.textContent = "Blank";
            lfLogicValueLiHide.classList.add("lf-logic-select-option");
            lfLogicValueLiHide.setAttribute("data-logic-input-id", lfLogicRowIncrement);
            lfLogicValueLiHide.setAttribute("data-logic-input-type", "Value");
            lfLogicValueLiHide.setAttribute("data-logic-field-container-id", lfActiveFieldId);
            lfLogicValueLiHide.setAttribute("data-logic-row-id", lfLogicRowIncrement);

            // Append Drop Input Elements
            lfLogicValueDiv.append(lfLogicValueDropInput);
            lfLogicValueUl.append(lfLogicValueLiShow);
            lfLogicValueUl.append(lfLogicValueLiHide);
            lfLogicValueDiv.append(lfLogicValueUl);

            // Increment Drop/Input Id by 1
            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Add & Delete Row
            // Logic Add Row Div
            var lfLogicAddRow = d.createElement("DIV");
            lfLogicAddRow.id = "lf_Logic_Add_Container_" + lfActiveFieldId;
            lfLogicAddRow.classList.add("lf-logic-add-container");

            // Logic Add Row Button
            var lfLogicAddRowButton = d.createElement("DIV");
            lfLogicAddRowButton.id = "lf_Logic_Add_" + lfLogicDropIncrement;
            lfLogicAddRowButton.classList.add("lf-logic-add"); 
            lfLogicAddRowButton.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";
            lfLogicAddRowButton.setAttribute("data-row-id", lfLogicRowIncrement);
            lfLogicAddRowButton.setAttribute("data-field-id", lfActiveFieldId);

            // Logic Delete Row Button
            var lfLogicDeleteRowButton = d.createElement("DIV");
            lfLogicDeleteRowButton.id = "lf_Logic_Delete_" + lfLogicDropIncrement;
            lfLogicDeleteRowButton.classList.add("lf-logic-delete");
            lfLogicDeleteRowButton.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-minus-icon.png" + ");";
            lfLogicDeleteRowButton.setAttribute("data-row-id", lfLogicRowIncrement);
            lfLogicDeleteRowButton.setAttribute("data-field-id", lfActiveFieldId);
            lfLogicDeleteRowButton.setAttribute("data-logic-field-container-id", lfActiveFieldId);

            // Increment Drop/Input Id by 1
            lfLogicDropIncrement++;


            //  ------------------------------------------------------------------------------  Logic Append
            // Append Logic Label to Logic Row
            lfAdvancedLogicRow.append(lfLogicLabel);

            // Append Logic Container Plus Inputs to Logic Row
            lfAdvancedLogicContainer.append(lfLogicConditionalDiv);
            lfAdvancedLogicContainer.append(lfLogicOperatorDiv);
            lfAdvancedLogicContainer.append(lfLogicValueDiv);
            lfAdvancedLogicRow.append(lfAdvancedLogicContainer);

            // Append Add Logic Row to Logic Row
            lfAdvancedLogicRow.append(lfLogicAddRow);
            lfLogicAddRow.append(lfLogicAddRowButton);
            lfLogicAddRow.append(lfLogicDeleteRowButton);
            lfAdvancedRowTab.append(lfAdvancedLogicRow);

            // Append Logic Row to Advanced Settings Panel
            lfCurrentLogicRow.after(lfAdvancedRowTab);


            // Increment Logic Row ID by 1
            lfLogicRowIncrement++;
        }
    })


    // Logic Row Delete -- Deletes Rule -- Advanced Field Settings Panel
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-logic-delete") {

            // Grab Field Container Id
            var lfCurrentDeleteLogicRowButton = e.target.id;
            var lfActiveRowId = d.getElementById(lfCurrentDeleteLogicRowButton).getAttribute('data-row-id');

            // Grab Current Logic Row
            var lfCurrentLogicRow = d.getElementById('lf_Advanced_Logic_Row_' + lfActiveRowId);

            // Remove Current Logic Row
            lfCurrentLogicRow.remove();
        }
    })


    // Adds Selected Value to Logic Inputs
    d.addEventListener('click', function (e) {
        var lfCurrentId = e.target.id;
        if (e.target.className === "lf-logic-select-option") {
            var lfLogicInputId = e.target.getAttribute("data-logic-input-id");
            var lfLogicInputFieldType = e.target.getAttribute("data-logic-input-type");
            if (lfLogicInputFieldType === "Conditional") {
                var lfLogicInput = d.getElementById('lf_Logic_Input_' + lfLogicInputFieldType + "_" + lfLogicInputId);
                var lfLogicFieldId = e.target.getAttribute("data-logic-active-field-id");
                var lfAddFieldId = lfLogicInput.setAttribute("data-logic-active-field-id", lfLogicFieldId);
            }
            var lfSelectedLogicOption = e.target.textContent;
            var lfLogicInput = d.getElementById('lf_Logic_Input_' + lfLogicInputFieldType + "_" + lfLogicInputId).value = lfSelectedLogicOption;
        }
    })


    //  ------------------------------------------------------------------------------  Logic Recreator Functions
    // Logic Recreator Functions
    function lfEnableLogic() {
        var lfEnableLogicButton = d.getElementById('lf_Enable_Logic');
        var lfLogicType = lfEnableLogicButton.textContent;
        var lfActiveFieldId = d.getElementById('lf_Advanced_Logic_Row_1').getAttribute("data-logic-field-container-id");
        var lfActiveField = d.getElementById('lf_Field_Container_' + lfActiveFieldId);


        // Displays All Logic Containers
        if (lfLogicType === "Enable Logic") {
            lfEnableLogicButton.textContent = "Disable Logic";
            lfActiveField.setAttribute("data-logic-status", "Enabled");
            var allLfLogicContainers = document.getElementsByClassName("lf-logic");
            for (var i = 0; i < allLfLogicContainers.length; i++) {
                allLfLogicContainers[i].setAttribute('style', 'display: inline-flex');
            }
            var lfGlobalConditionContainer = d.getElementById('lf_Advanced_Logic_Row_0').setAttribute('style', "display: inline-flex; padding: 0px !important; border: none; justify-content: space-evenly ;width: 100%;");
            // Hides All Logic Containers
        } else {
            lfEnableLogicButton.textContent = "Enable Logic";
            lfActiveField.setAttribute("data-logic-status", "Disabled");
            var allLfLogicContainers = document.getElementsByClassName("lf-logic");
            for (var i = 0; i < allLfLogicContainers.length; i++) {
                allLfLogicContainers[i].setAttribute('style', 'display: none');
            }
        }
    }


    function lfRecreateLogic() {
        var lfActiveFieldId = d.getElementById('lf_Advanced_Logic_Row_0').getAttribute("data-logic-field-container-id");
        var lfActiveField = d.getElementById('lf_Field_Container_' + lfActiveFieldId);
        var lfLogic = lfActiveField.getAttribute("data-lf-logic");
        var lfFieldLogicParsed = JSON.parse(lfLogic);

        var lfCondition;
        var lfGlobalAnyAllCondition;
        var lfLogicRowCount = 0;

        lfFieldLogicParsed.forEach(function (lfFieldLogic) {
            // Grab Logic Per Condition Values
            lfCondition = lfFieldLogic.condition;
            lfGlobalAnyAllCondition = lfFieldLogic.globalAnyAllCondition;
            var lfConditionalField = lfFieldLogic.conditionalField;
            var lfOperatorField = lfFieldLogic.lfOperatorField;
            var lfConditionalValue = lfFieldLogic.lfConditionalValue;
            var lfConditionOpposite = lfFieldLogic.lfConditionOpposite;

            lfLogicRowCount++;
        })

        // Update Global Show/Hide Input Text
        switch (lfCondition) {
            case "Hide":
                lfCondition = "Hide this field";
                break;

            case "Show":
                lfCondition = "Show this field";
                break;
            default:
        }

        // Update Global AnyAll Input Text
        switch (lfGlobalAnyAllCondition) {
            case "Any":
                lfGlobalAnyAllCondition = "if Any conditions match";
                break;

            case "All":
                lfGlobalAnyAllCondition = "if All conditions match";
                break;
            default:
        }

        // Update Global Logic Inputs
        var lfGlobalShowHideInput = d.getElementById('lf_Logic_Input_Show_Hide_0').value = lfCondition;
        // Update Global Logic Inputs
        var lfGlobalAnyAllInput = d.getElementById('lf_Logic_Input_Operator_0').value = lfGlobalAnyAllCondition;


        // Adds Logic Row for Each Logic Array
        var lfLogicRowCountMinusOne = lfLogicRowCount - 1;
        for (var i = 0; i < lfLogicRowCountMinusOne; i++) {
            d.getElementById('lf_Logic_Add_1').click();
        }


        // Adds Logic Value to Inputs
        var lfCurrentInput = 1;
        lfFieldLogicParsed.forEach(function (lfFieldLogic) {

            // Grab Logic Per Condition Values
            var lfConditionalField = lfFieldLogic.conditionalField;
            var lfConditionalFieldLabel = lfFieldLogic.conditionalFieldLabel;
            var lfOperatorField = lfFieldLogic.operator;
            var lfConditionalValue = lfFieldLogic.conditionalValue;

            d.getElementById('lf_Logic_Input_Conditional_' + lfCurrentInput).value = lfConditionalFieldLabel;
            d.getElementById('lf_Logic_Input_Conditional_' + lfCurrentInput).setAttribute("data-logic-active-field-id", lfConditionalField);
            d.getElementById('lf_Logic_Input_Operator_' + lfCurrentInput).value = lfOperatorField;
            d.getElementById('lf_Logic_Input_Value_' + lfCurrentInput).value = lfConditionalValue;

            lfCurrentInput++;
        })

    }


    //  ------------------------------------------------------------------------------  Appends Logic Object To Field Container
    // Calls lfCreateLogicObject() Function
    d.addEventListener('input', function (e) {
        if (e.target.className === "lf-logic-dropdown") {
            lfCreateLogicObject(e);
        }
    })
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-logic-select-option" || e.target.className === "lf-logic-delete") {
            lfCreateLogicObject(e);
        }
    })


    // Loop through all Logic Input Values + Append Field Logic Object to Field Container (Change)
    function lfCreateLogicObject(e) {

        // Define Variables
        var lfLogicFieldObject = [];
        var lfActiveField = e.target.getAttribute("data-logic-field-container-id");
        var lfLogicStatus = [];

        // Grab Global Conditions (ie.) Show/Hide This Field -- If Any/All Conditions Match
        var lfShowHide = d.getElementById('lf_Logic_Input_Show_Hide_0').value
        var lfGlobalAnyAllCondition = d.getElementById('lf_Logic_Input_Operator_0').value
        if (lfShowHide !== '' && lfGlobalAnyAllCondition !== '') { // If global conditions are not empty


            // Switch Input Values
            var lfConditionOpposite;
            if (lfShowHide === "Show this field") {
                lfShowHide = "Show";
                lfConditionOpposite = "Hide";
            } else if (lfShowHide === "Hide this field") {
                lfShowHide = "Hide";
                lfConditionOpposite = "Show";
            } else {
                // return
            }

            if (lfGlobalAnyAllCondition === "if Any conditions match") {
                lfGlobalAnyAllCondition = "Any";
            } else if (lfGlobalAnyAllCondition === "if All conditions match") {
                lfGlobalAnyAllCondition = "All";
            } else {
                // return
            }


            // Grab All Logic Input Values + Build Logic Object
            var lfLogicFieldContainers = d.querySelectorAll('.lf-logic');
            lfLogicFieldContainers.forEach(function (lfLogicFieldContainer) {
                var lfLogicRowId = lfLogicFieldContainer.getAttribute("data-logic-row-id");
                if (lfLogicRowId !== "0") {


                    var lfLogicObjectValues = []; // Array Used to Hold Input Values


                    var lfConditionalField = d.getElementById('lf_Logic_Input_Conditional_' + lfLogicRowId).getAttribute("data-logic-active-field-id");
                    lfLogicObjectValues.push(lfConditionalField);

                    var lfConditionalFieldLabel = d.getElementById('lf_Logic_Input_Conditional_' + lfLogicRowId).value;

                    var lfOperatorField = d.getElementById('lf_Logic_Input_Operator_' + lfLogicRowId).value;
                    lfLogicObjectValues.push(lfOperatorField);

                    var lfConditionalValue = d.getElementById('lf_Logic_Input_Value_' + lfLogicRowId).value;
                    lfLogicObjectValues.push(lfConditionalValue);

                    var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfActiveField);



                    // Build Logic Object if Values Exist
                    if (lfLogicObjectValues.includes('') || lfLogicObjectValues.includes(null)) {
                        //lfFieldContainer.setAttribute("data-logic-status", "Disabled"); // if add a new row and add an option it is
                        // making logic status disabled ??
                        lfLogicStatus.push("false");
                    } else {
                        //lfFieldContainer.setAttribute("data-logic-status", "Enabled");
                        var lfLogicArray = {
                            activeField: lfActiveField,
                            conditionalField: lfConditionalField,
                            conditionalFieldLabel: lfConditionalFieldLabel,
                            operator: lfOperatorField,
                            conditionalValue: lfConditionalValue,
                            condition: lfShowHide,
                            conditionOpposite: lfConditionOpposite,
                            globalAnyAllCondition: lfGlobalAnyAllCondition
                        }
                        lfLogicFieldObject.push(lfLogicArray);
                        lfLogicStatus.push("true");
                    }
                }

            })


            // Determines data-logic-status
            var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfActiveField);
            if(lfLogicStatus.includes("true")) {
                lfFieldContainer.setAttribute("data-logic-status", "Enabled");
            } else {
                lfFieldContainer.setAttribute("data-logic-status", "Disabled");
            }


            // Add Logic Object to Active Field Container
            var lfDataLogic = JSON.stringify(lfLogicFieldObject);
            lfFieldContainer.setAttribute("data-lf-logic", lfDataLogic);
        }
    }


    // Recreate MinLength, MaxLength and Regex Advanced Settings Inputs
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-advanced-toolbar-menu") {
            // Grab Advanced Settings Input Values
            var lfFieldId = e.target.getAttribute("data-field-id");
            var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfFieldId);
            var lfFieldType = lfFieldContainer.getAttribute("data-field-type")
            var lfMinLengthValue = lfFieldContainer.getAttribute("data-min-length");
            var lfMaxLengthValue = lfFieldContainer.getAttribute("data-max-length");
            var lfRegexValue = lfFieldContainer.getAttribute("data-regex");
            var lfPlaceholderValue = lfFieldContainer.getAttribute("data-placeholder");
            var lfValue = lfFieldContainer.getAttribute("data-value");



            if (lfMinLengthValue !== "pending generation") {
                var lfMinInput = d.getElementById('lf_Min_Input_' + lfFieldId).value = lfMinLengthValue;
            }
            if (lfMaxLengthValue !== "pending generation") {
                var lfMinInput = d.getElementById('lf_Max_Input_' + lfFieldId).value = lfMaxLengthValue;
            }
            if (lfRegexValue !== "pending generation") {
                var lfRegexInput = d.getElementById('lf_Regex_Input_' + lfFieldId).value = lfRegexValue;
            }
            var lfPlaceholderInput = d.getElementById('lf_Placeholder_Input_' + lfFieldId).value = lfPlaceholderValue;
            if (lfValue !== "pending generation") {
                var lfValueInput = d.getElementById('lf_Value_Input_' + lfFieldId).value = lfValue;
            }


            if(lfFieldType === "lfAddNumber") {
                var lfMaxLabel = d.getElementById("lf_Min_Label").textContent = "Min Value";
                var lfMaxTooltip= d.getElementById("lf_Min_Tooltip").textContent = "The min value attribute defines the minimum integer/value that is acceptable for the input (e.g. value can not be less than 100).";
                var lfMaxLabel = d.getElementById("lf_Max_Label").textContent = "Max Value";
                var lfMaxTooltip= d.getElementById("lf_Max_Tooltip").textContent = "The max value attribute defines the maximum integer/value that is acceptable for the input (e.g. value can not exceed 10000).";
            }

        }
    })



    // Hides Non-Applicable Advanced Settings Options for Radio/Checkbox/Dropdown/Date/Products Fields
    d.addEventListener('click', function (e) {
        if (e.target.className === "lf-advanced-toolbar-menu") {
            var lfFieldContainerIncrement = e.target.getAttribute("data-field-id");
            var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfFieldContainerIncrement);
            var lfFieldType = lfFieldContainer.getAttribute("data-field-type");
            // Tabs
            var lfViewAllTab = d.getElementById('lf_Advanced_Tab_0');
            var lfMinLengthTab = d.getElementById("lf_Advanced_Tab_2");
            var lfMaxLengthTab = d.getElementById("lf_Advanced_Tab_3");
            var lfRegexTab = d.getElementById("lf_Advanced_Tab_4");
            var lfPlaceholderTab = d.getElementById("lf_Advanced_Tab_5");
            var lfValueTab = d.getElementById("lf_Advanced_Tab_6");
            // Fields
            var lfMinLengthInput = d.getElementById("lf_Advanced_Container_2");
            var lfMaxLengthInput = d.getElementById("lf_Advanced_Container_3");
            var lfRegexInput = d.getElementById("lf_Advanced_Container_4");
            var lfPlaceholderInput = d.getElementById("lf_Advanced_Container_5");
            var lfValueInput = d.getElementById("lf_Advanced_Container_6");
            if (lfFieldType === "lfAddRadio" || lfFieldType === "lfAddCheckbox" || lfFieldType === "lfAddFile" || lfFieldType === "lfAddFiles" || lfFieldType === "lfAddSingleProduct" || lfFieldType === "lfAddMultipleProducts" || lfFieldType === "lfAddDate") {
                // Hide Tabs
                lfViewAllTab.style.cssText = "display: none";
                lfMinLengthTab.style.cssText = "display:none";
                lfMaxLengthTab.style.cssText = "display:none";
                lfRegexTab.style.cssText = "display:none";
                lfPlaceholderTab.style.cssText = "display:none";
                lfValueTab.style.cssText = "display:none";
                // Hide Fields
                lfMinLengthInput.style.cssText = "display:none";
                lfMaxLengthInput.style.cssText = "display:none";
                lfRegexInput.style.cssText = "display:none";
                lfPlaceholderInput.style.cssText = "display:none";
                lfValueInput.style.cssText = "display:none";
            } else if (lfFieldType === "lfAddDropdown") {
                // Hide Tabs
                lfMinLengthTab.style.cssText = "display:none";
                lfMaxLengthTab.style.cssText = "display:none";
                lfRegexTab.style.cssText = "display:none";
                lfValueTab.style.cssText = "display:none";
                // Hide Fields
                lfMinLengthInput.style.cssText = "display:none";
                lfMaxLengthInput.style.cssText = "display:none";
                lfRegexInput.style.cssText = "display:none";
                lfValueInput.style.cssText = "display:none";
            } else if (lfFieldType === "lfAddText" || lfFieldType === "lfAddTextarea") {
                // Hide Tabs
                lfRegexTab.style.cssText = "display:none";
                // Hide Fields
                lfRegexInput.style.cssText = "display:none";
            }else {
                // Show Tabs
                lfViewAllTab.style.cssText = "display: block";
                lfMinLengthTab.style.cssText = "display:block";
                lfMaxLengthTab.style.cssText = "display:block";
                lfRegexTab.style.cssText = "display:block";
                lfPlaceholderTab.style.cssText = "display:block";
                lfValueTab.style.cssText = "display:block";
            }
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Add Webhook/API Key (Add-ons)
    d.addEventListener('click', function (e) {
        if (e.target.id === "lf-open-modal") {
            // Create Modal 
            var lfModal = d.createElement("DIV");
            lfModal.classList.add("lf-add-on-modal");

            var lfApiKeyInput = d.createElement("INPUT");
            lfApiKeyInput.classList.add("lf-add-on-input");

            lfModal.append(lfApiKeyInput);

            // Append to Editor


        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Add-Ons Sidebar
    // Determines if Plugins are LF Add-Ons -- Adds Add-On Icon to Field Editor
    var lfAddOnIconIncrement = 1;
    var lfViewAllUrl;
    function lfAddOnIcons() {
        var lfPluginNames = lfEditorData.plugins;
        lfPluginNames.forEach(function (lfPluginName) {
            var lfPluginPath = lfPluginName.path;
            var lfPluginActive = lfPluginName.active;
            var lfCurrentPluginName = lfPluginName.name;
            var lfCurrentVersion = lfPluginName.version;
            var lfCurrentDescription = lfPluginName.description;
            var lfCurrentDocumentationURL = lfPluginName.documentation;
            var lfPluginNameLowerCase = lfCurrentPluginName.toLowerCase();
            if (lfPluginNameLowerCase.includes("likeable forms") && lfAddOnIconIncrement < 8) {
                

                var lfPluginNameToLowercase = lfCurrentPluginName.toLowerCase();
                var lfPluginNameNoSpace = lfPluginNameToLowercase.replace(/ /g, "_"); 

   
                // Create Add On Icon
                var lfAddOnLi = d.createElement("LI");
                lfAddOnLi.id = "lf_Add_On_Icon_Li_" + lfAddOnIconIncrement;
                lfAddOnLi.classList.add("lf-add-on-icon-li");
                lfAddOnLi.setAttribute("data-add-on-id", lfAddOnIconIncrement);
                lfAddOnLi.setAttribute("data-extension-name", lfPluginNameNoSpace);


                var lfAddOnImage = d.createElement("IMG");
                // Grab Icon Image Path
                var lfPluginFilePath = lfPluginNameLowerCase.replace(/ +/g, "");
                var lfSiteUrl = d.location.origin;
                var lfWpPrefix = lfEditorData.wpPrefix;
                var lfContentUrl = lfEditorData.contentUrl.replace(lfSiteUrl, "");

                // Plugin Icons Sidebar + License Key
                if(lfPluginNameLowerCase === "likeable forms") {
                    var lfAddOnIconUrlPath = lfContentUrl  + "/plugins/" + "likeable-forms" + "/assets/extension-icon.png";
                } else{
                    var lfAddOnIconUrlPath = lfContentUrl  + "/plugins/" + lfPluginFilePath + "/assets/extension-icon.png";
                }


                lfViewAllUrl = lfContentUrl  + "/plugins/likeable-forms/assets/" + "view-all-extensions-dark.png";
                lfAddOnImage.src = lfAddOnIconUrlPath;
                lfAddOnImage.setAttribute("data-add-on-id", lfAddOnIconIncrement);
                lfAddOnImage.id = "lf_Add_On_Icon_Image_" + lfAddOnIconIncrement;


                lfAddOnImage.classList.add("lf-addons-icon-image");
                lfAddOnImage.setAttribute("data-extension-name", lfPluginNameNoSpace);


                var lfAddOnActiveIndicator = d.createElement("SPAN");
                lfAddOnActiveIndicator.id = ("lf_Active_Indicator_" + lfAddOnIconIncrement);
                lfAddOnActiveIndicator.classList.add("lf-addons-active-indicator");
                lfAddOnActiveIndicator.classList.add(lfPluginNameNoSpace); 
                lfAddOnActiveIndicator.textContent = "●";
                if (lfPluginActive === true) {
                    // return
                } else {
                    lfAddOnActiveIndicator.setAttribute('style', "color:" + "#737373");
                }


                // Append Icon to Field Editor
                lfAddOnLi.append(lfAddOnImage);
                lfAddOnLi.append(lfAddOnActiveIndicator);
                var lfAddOnSideBar = d.getElementById('lf_Addons_Ul');


                // Container
                var lfAddOnHoverContainer = d.createElement("DIV");
                lfAddOnHoverContainer.id = "lf_Add_On_Container_" + lfAddOnIconIncrement;
                lfAddOnHoverContainer.classList.add("lf-add-on-container");
                lfAddOnHoverContainer.setAttribute("data-extension-id", lfAddOnIconIncrement);
                lfAddOnHoverContainer.setAttribute("data-extension-path", lfPluginName.path);
                lfAddOnHoverContainer.setAttribute("data-extension-active", lfPluginName.active);
                lfAddOnHoverContainer.setAttribute("data-extension-name", lfPluginName.name);
                lfAddOnHoverContainer.setAttribute("data-extension-version", lfPluginName.version);
                lfAddOnHoverContainer.setAttribute("data-extension-description", lfPluginName.description);
                lfAddOnHoverContainer.setAttribute("data-extension-documentation", lfPluginName.documentation);
                lfAddOnHoverContainer.setAttribute("data-extension-name-lowercase", lfPluginNameLowerCase);
                

                // Top Bar
                var lfAddOnTopBar = d.createElement("DIV");
                lfAddOnTopBar.classList.add("lf-addons-top-bar");
                var lfAddOnName = d.createElement("P");
                lfAddOnName.textContent = lfCurrentPluginName;
                lfAddOnName.classList.add("lf-addons-name");
                var lfAddOnStatus = d.createElement("P");
                lfAddOnStatus.textContent = "installed";
                lfAddOnStatus.classList.add("lf-addons-status");
                var lfAddOnVersion = d.createElement("P");
                lfAddOnVersion.textContent = "Version";
                lfAddOnVersion.classList.add("lf-addons-version");
                var lfAddOnVersionNumber = d.createElement("SPAN");
                lfAddOnVersionNumber.textContent = lfCurrentVersion;
                lfAddOnVersionNumber.classList.add("lf-addons-version-number");
                lfAddOnTopBar.append(lfAddOnName);
                lfAddOnTopBar.append(lfAddOnStatus);
                lfAddOnVersion.append(lfAddOnVersionNumber);
                lfAddOnTopBar.append(lfAddOnVersion);
                lfAddOnHoverContainer.append(lfAddOnTopBar);


                // Description
                var lfAddOnDescription = d.createElement("P");
                lfAddOnDescription.classList.add("lf-addons-description");
                lfAddOnDescription.textContent = lfCurrentDescription;
                lfAddOnHoverContainer.append(lfAddOnDescription);


                
                // Bottom Bar
                var lfAddOnBottomBar = d.createElement("DIV");
                // Left Column
                lfAddOnBottomBar.classList.add("lf-addons-bottom-bar");
                var lfBottomLeftColumn = d.createElement("DIV");
                lfBottomLeftColumn.classList.add("lf-bottom-bar-column");
                var lfBottomLeftTextLinks = d.createElement("DIV");
                lfBottomLeftTextLinks.classList.add("lf-bottom-bar-links");
                var lfBottomLeftSettingsLink = d.createElement("A");
                lfBottomLeftSettingsLink.id = "lf_Settings_Link_" + lfAddOnIconIncrement;
                lfBottomLeftSettingsLink.setAttribute("data-extension-name", lfPluginNameNoSpace);
                lfBottomLeftSettingsLink.setAttribute("data-extension-id", lfAddOnIconIncrement);
                lfBottomLeftSettingsLink.classList.add("lf-bottom-bar-settings-link");
                lfBottomLeftSettingsLink.classList.add(lfPluginNameNoSpace);
                lfBottomLeftSettingsLink.textContent = "Settings";
                var lfBottomLeftDocsLink = d.createElement("A");
                lfBottomLeftDocsLink.classList.add("lf-bottom-bar-docs-link");
                lfBottomLeftDocsLink.textContent = "Documentation";
                lfBottomLeftDocsLink.href = lfCurrentDocumentationURL;
                lfBottomLeftDocsLink.setAttribute('target', '_blank');
                lfBottomLeftColumn.append(lfBottomLeftTextLinks);
                lfBottomLeftTextLinks.append(lfBottomLeftSettingsLink);
                lfBottomLeftTextLinks.append(lfBottomLeftDocsLink);
                lfAddOnBottomBar.append(lfBottomLeftColumn);


                // Right Column
                var lfBottomRightColumn = d.createElement("DIV");
                lfBottomRightColumn.classList.add("lf-bottom-bar-column");
                var lfBottomRightButtonLinks = d.createElement("DIV");
                lfBottomRightButtonLinks.classList.add("lf-bottom-bar-buttons");
                var lfBottomRightButtonDeactivate = d.createElement("BUTTON");
                lfBottomRightButtonDeactivate.id = "lf_Bottom_Bar_Deactivate_" + lfAddOnIconIncrement;
                lfBottomRightButtonDeactivate.setAttribute("data-id", lfAddOnIconIncrement);
                if (lfPluginActive === true) {
                    lfBottomRightButtonDeactivate.textContent = "Deactivate";
                    lfBottomRightButtonDeactivate.setAttribute("data-activated", "activated");
                    lfBottomRightButtonDeactivate.setAttribute("data-path", lfPluginPath);
                    lfBottomRightButtonDeactivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                } else {
                    lfBottomRightButtonDeactivate.textContent = "Deactivated";
                    lfBottomRightButtonDeactivate.setAttribute("data-activated", "deactivated");
                    lfBottomRightButtonDeactivate.setAttribute("data-path", lfPluginPath);
                    lfBottomRightButtonDeactivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                    lfBottomLeftSettingsLink.setAttribute('style', "display:" + "none");
                }
                lfBottomRightButtonDeactivate.classList.add("lf-bottom-bar-deactivate");
                lfBottomRightButtonDeactivate.classList.add(lfPluginNameNoSpace);
                var lfBottomRightButtonActivate = d.createElement("BUTTON");
                lfBottomRightButtonActivate.id = "lf_Bottom_Bar_Activate_" + lfAddOnIconIncrement;
                lfBottomRightButtonActivate.setAttribute("data-id", lfAddOnIconIncrement);
                lfBottomRightButtonActivate.classList.add("lf-bottom-bar-activate");
                lfBottomRightButtonActivate.classList.add(lfPluginNameNoSpace);
                if (lfPluginActive === true) {
                    lfBottomRightButtonActivate.textContent = "Activated";
                    lfBottomRightButtonActivate.setAttribute("data-activated", "activated");
                    lfBottomRightButtonActivate.setAttribute("data-path", lfPluginPath);
                    lfBottomRightButtonActivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                } else {
                    lfBottomRightButtonActivate.textContent = "Activate";
                    lfBottomRightButtonActivate.setAttribute("data-activated", "deactivated");
                    lfBottomRightButtonActivate.setAttribute("data-path", lfPluginPath);
                    lfBottomRightButtonActivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                }
                lfBottomRightColumn.append(lfBottomRightButtonLinks);
                lfBottomRightButtonLinks.append(lfBottomRightButtonDeactivate);
                lfBottomRightButtonLinks.append(lfBottomRightButtonActivate);
                lfAddOnBottomBar.append(lfBottomRightColumn);
                lfAddOnHoverContainer.append(lfAddOnBottomBar);
            


                // Verify License 
                var lfLicenseKeyDiv = d.createElement("DIV");
                lfLicenseKeyDiv.classList.add("lf-license-key-container");
                lfLicenseKeyDiv.id = "lf_Sidebar_License_Key_" + lfPluginNameNoSpace;
                var lfLicenseKey = d.createElement("BUTTON"); 
                lfLicenseKey.textContent = "License Key";
                lfLicenseKey.id = "lf_Add_On_License_Key_" + lfAddOnIconIncrement;
                lfLicenseKey.setAttribute("data-extension-id", lfAddOnIconIncrement);
                lfLicenseKey.setAttribute("data-extension-name", lfPluginNameNoSpace);
                lfLicenseKey.classList.add("lf-license-key");
                lfLicenseKeyDiv.append(lfLicenseKey);
                lfAddOnHoverContainer.append(lfLicenseKeyDiv);

            
                // Append to Icon
                lfAddOnLi.append(lfAddOnHoverContainer);
                lfAddOnSideBar.append(lfAddOnLi);
            

                // Call License Key Modal Creator Function
                var lfExtensionId = lfAddOnIconIncrement;
                lfCreateLicenseKeyModal(lfExtensionId);


                // Call Extension Modal Creator Function
                var lfPluginName = lfPluginName.name;
                lfCreateExtensionModal(lfAddOnIconIncrement, lfPluginName);

            
                lfAddOnIconIncrement++;

            }
        })
        
        lfViewAllInstalledExtensions();

    }


    // View All Extensions
    function lfViewAllInstalledExtensions() {
        var lfViewAllIconLi = d.createElement("LI");
        lfViewAllIconLi.classList.add("lf-view-all-add-ons-icon-li");
        var lfViewAllImage = d.createElement("IMG");
        lfViewAllImage.src = lfViewAllUrl;
        lfViewAllImage.classList.add("lf-view-all-add-ons-icon");


        var lfIconSideBar = d.getElementById('lf_Addons_Ul');
        lfViewAllIconLi.append(lfViewAllImage);
        lfIconSideBar.append(lfViewAllIconLi);

        lfAddAllExtensions();
    }


    // Activate Extension (AJAX)
    d.addEventListener("click", function (e) {
        var lfCurrentClassName = e.target.classList;
        if (lfCurrentClassName.contains("lf-bottom-bar-activate")) {
            var lfCurrentId = e.target.id;
            var lfCurrentDataId = e.target.getAttribute("data-id");
            var lfIsActivated = e.target.getAttribute("data-activated");
            var lfPluginPath = e.target.getAttribute("data-path");
            var lfSettingsLinkId = e.target.getAttribute("data-settings-id");
            var lfSettingsLink = d.getElementById(lfSettingsLinkId);
            var lfPluginName = e.target.getAttribute("data-settings-id");


            // Activate Lf Extension
            if (lfIsActivated === "deactivated") {
                var data = new FormData();
                data.append('action', 'lffes_activate_extension');
                data.append('_ajax_nonce', lfEditorData.lfNonce);
                data.append('lfplugintoactivate', lfPluginPath);
                fetch('/wp-admin/admin-ajax.php', {
                    method: "POST",
                    credentials: 'same-origin',
                    body: data,
                }).then(function (res) {
                    return res.json();
                }).then(function (data) {
                    // Change All Current Active Buttons Text for Current Extension
                    var lfAllActivateButtons = d.querySelectorAll('.lf-bottom-bar-activate');
                    lfAllActivateButtons.forEach(function (lfActivateButton) {
                        if (lfActivateButton.classList.contains(lfPluginName)) {
                            lfActivateButton.setAttribute("data-activated", "activated");
                            lfActivateButton.textContent = "Activated";
                        }
                    })


                    // Change All Current Indicator Colors for Current Extension
                    var lfAllActivateIndicator = d.querySelectorAll('.lf-addons-active-indicator');
                    lfAllActivateIndicator.forEach(function (lfIndicator) {
                        if (lfIndicator.classList.contains(lfPluginName)) {
                            lfIndicator.setAttribute('style', "color:" + "#38ff00");
                        }
                    })


                    // Change All Current Deactivate Buttons Text for Current Extension
                    var lfAllDeactivateButtons = d.querySelectorAll('.lf-bottom-bar-deactivate');
                    lfAllDeactivateButtons.forEach(function (lfDeactivateButton) {
                        if (lfDeactivateButton.classList.contains(lfPluginName)) {
                            lfDeactivateButton.textContent = "Deactivate";
                            lfDeactivateButton.setAttribute("data-activated", "activated");
                        }
                    })


                    // Displays All Current Settings Links for Current Extension
                    var lfAllSetingsLinks = d.querySelectorAll('.lf-bottom-bar-settings-link');
                    lfAllSetingsLinks.forEach(function (lfSettingsLink) {
                        if (lfSettingsLink.classList.contains(lfPluginName)) {
                            lfSettingsLink.setAttribute('style', "display:" + "block");
                        }
                    })
                })
            }


        }
    })


    // Deactivate Extension 
    d.addEventListener("click", function (e) {
        var lfCurrentClassName = e.target.classList;
        if (lfCurrentClassName.contains("lf-bottom-bar-deactivate")) {
            var lfCurrentId = e.target.id;
            var lfCurrentDataId = e.target.getAttribute("data-id");
            var lfIsActivated = e.target.getAttribute("data-activated");
            var lfPluginPath = e.target.getAttribute("data-path");
            var lfSettingsLinkId = e.target.getAttribute("data-settings-id");
            var lfSettingsLink = d.getElementById(lfSettingsLinkId);
            var lfPluginName = e.target.getAttribute("data-settings-id");


            // Deactivate Lf Extension
            if (lfIsActivated === "activated") {
                var data = new FormData();
                data.append('action', 'lffes_deactivate_extension');
                data.append('_ajax_nonce', lfEditorData.lfNonce);
                data.append('lfplugintodeactivate', lfPluginPath);
                fetch('/wp-admin/admin-ajax.php', {
                    method: "POST",
                    credentials: 'same-origin',
                    body: data,
                }).then(function (res) {
                    return res.json();
                }).then(function (data) {
                    // Change All Current Deactivate Buttons Text for Current Extension
                        var lfAllDeactivateButtons = d.querySelectorAll('.lf-bottom-bar-deactivate');
                        lfAllDeactivateButtons.forEach(function (lfDeactivateButton) {
                            if (lfDeactivateButton.classList.contains(lfPluginName)) {
                                lfDeactivateButton.setAttribute("data-activated", "deactivate");
                                lfDeactivateButton.textContent = "Deactivated";
                            }
                        })


                        // Change All Current Indicator Colors for Current Extension
                        var lfAllActivateIndicator = d.querySelectorAll('.lf-addons-active-indicator');
                        lfAllActivateIndicator.forEach(function (lfIndicator) {
                            if (lfIndicator.classList.contains(lfPluginName)) {
                                lfIndicator.setAttribute('style', "color:" + "#737373");
                            }
                        })
                        

                        // Change All Current Active Buttons Text for Current Extension
                        var lfAllActivateButtons = d.querySelectorAll('.lf-bottom-bar-activate');
                        lfAllActivateButtons.forEach(function (lfActivateButton) {
                            if (lfActivateButton.classList.contains(lfPluginName)) {
                                lfActivateButton.textContent = "Activate";
                                lfActivateButton.setAttribute("data-activated", "deactivated");
                            }
                        })


                        // Hide All Current Settings Links for Current Extension
                        var lfAllSetingsLinks = d.querySelectorAll('.lf-bottom-bar-settings-link');
                        lfAllSetingsLinks.forEach(function (lfSettingsLink) {
                            if (lfSettingsLink.classList.contains(lfPluginName)) {
                                lfSettingsLink.setAttribute('style', "display:" + "none");
                            }
                        })
                })
            }




        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Extensions Modal
    // Adds extensions modal/previewer to form editor 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-view-all-add-ons-icon") {
            var lfExtensionsOverlay = d.getElementById('lf_Extensions_Overlay');
            lfExtensionsOverlay.style.cssText = "display:block !important;";
        }
    })


    // Hides Extensions modal/previewer 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-extensions-close" || e.target.className == "lf-extensions-overlay") {
            var lfExtensionsOverlay = d.getElementById('lf_Extensions_Overlay');
            lfExtensionsOverlay.style.cssText = "display:none !important;";
            var lfExtensionsContainer = d.getElementById('lf_Extensions_Container');
            lfExtensionsContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfExtensionsFrame = d.getElementById('lf_Extensions_Frame');
            lfExtensionsFrame.style.cssText = "height: 74vh;";
        }
    });


    // Minimizes Extensions modal to desktop break point
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-extensions-minimize-media-query") {
            var lfExtensionsContainer = d.getElementById('lf_Extensions_Container');
            lfExtensionsContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfExtensionsFrame = d.getElementById('lf_Extensions_Frame');
            lfExtensionsFrame.style.cssText = "height: 74vh;";
        }
    });


    // Makes Extensions modal full screen 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-extensions-full-screen-media-query") {
            var lfExtensionsContainer = d.getElementById('lf_Extensions_Container');
            lfExtensionsContainer.style.cssText = "position: fixed; top: 0px; left: 0%; height: 100%; width: 100% !important; transform: translate(0%, 0%);";
            var lfExtensionsFrame = d.getElementById('lf_Extensions_Frame');
            lfExtensionsFrame.style.cssText = "height: calc(100vh - 50px);";
        }
    });


    // View all extensions
    var lfAllExtensionsAdded = false; // global variable used to prevent lfAddAllExtensions() function from bubbling
    var lfReStartAddOnIconIncrement = 1;
    function lfAddAllExtensions() {
            if (lfAllExtensionsAdded === false) {
                var lfPluginNames = lfEditorData.plugins;
                lfPluginNames.forEach(function (lfPluginName) {
                    var lfPluginPath = lfPluginName.path;
                    var lfPluginActive = lfPluginName.active;
                    var lfCurrentPluginName = lfPluginName.name;
                    var lfCurrentVersion = lfPluginName.version;
                    var lfCurrentDescription = lfPluginName.description;
                    var lfCurrentDocumentationURL = lfPluginName.documentation;
                    var lfPluginNameLowerCase = lfCurrentPluginName.toLowerCase();
                    if (lfPluginNameLowerCase.includes("likeable forms")) {


                        var lfPluginNameToLowercase = lfCurrentPluginName.toLowerCase();
                        var lfPluginNameNoSpace = lfPluginNameToLowercase.replace(/ /g, "_"); 
                        

                        // Create Add On Icon
                        var lfAddOnLi = d.createElement("LI");
                        lfAddOnLi.id = "lf_Add_On_Icon_Li_" + lfAddOnIconIncrement;
                        lfAddOnLi.classList.add("lf-add-on-icon-li");
                        //lfAddOnLi.setAttribute("data-add-on-id", lfAddOnIconIncrement); 
                        lfAddOnLi.setAttribute("data-add-on-id", lfReStartAddOnIconIncrement); 
                        lfAddOnLi.setAttribute("data-extension-name", lfPluginNameNoSpace);
        
        
                        var lfAddOnImage = d.createElement("IMG");
                        // Grab Icon Image Path
                        var lfPluginFilePath = lfPluginNameLowerCase.replace(/ +/g, "");
                        var lfSiteUrl = d.location.origin;
                        var lfWpPrefix = lfEditorData.wpPrefix;
                        var lfWpPrefixWithoutScore = lfWpPrefix.replace(/_/g, "");
                        var lfContentUrl = lfEditorData.contentUrl.replace(lfSiteUrl, "");


                        // Plugin Icons Sidebar + License Key
                        if(lfPluginNameLowerCase === "likeable forms") {
                            var lfAddOnIconUrlPath = lfContentUrl  + "/plugins/" + "likeable-forms" + "/assets/extension-icon.png";
                        } else{
                            var lfAddOnIconUrlPath = lfContentUrl  + "/plugins/" + lfPluginFilePath + "/assets/extension-icon.png";
                        }


                        lfViewAllUrl = lfContentUrl  + "/plugins/likeable-forms/assets/" + "view-all-extensions-dark.png";
                        lfAddOnImage.src = lfAddOnIconUrlPath;
                        lfAddOnImage.setAttribute("data-add-on-id", lfReStartAddOnIconIncrement);
                        lfAddOnImage.id = "lf_Add_On_Icon_Image_" + lfAddOnIconIncrement;
        
        
                        lfAddOnImage.classList.add("lf-addons-icon-image");
                        lfAddOnImage.setAttribute("data-extension-name", lfPluginNameNoSpace);

        
                        var lfAddOnActiveIndicator = d.createElement("SPAN");
                        lfAddOnActiveIndicator.id = ("lf_Active_Indicator_" + lfAddOnIconIncrement);
                        lfAddOnActiveIndicator.classList.add("lf-addons-active-indicator");
                        lfAddOnActiveIndicator.classList.add(lfPluginNameNoSpace); 
                        lfAddOnActiveIndicator.textContent = "●";
                        if (lfPluginActive === true) {
                            // return
                        } else {
                            lfAddOnActiveIndicator.setAttribute('style', "color:" + "#737373");
                        }
        
        
                        // Append Icon to Field Editor
                        lfAddOnLi.append(lfAddOnImage);
                        lfAddOnLi.append(lfAddOnActiveIndicator);
                        var lfAddOnSideBar = d.getElementById('lf_Extension_Flex_Grid');
        
        
                        // Container
                        var lfAddOnHoverContainer = d.createElement("DIV");
                        lfAddOnHoverContainer.id = "lf_Add_On_Container_" + lfAddOnIconIncrement;
                        lfAddOnHoverContainer.classList.add("lf-add-on-container");
                        lfAddOnHoverContainer.classList.add("lf-add-on-container");
                        lfAddOnHoverContainer.setAttribute("data-extension-id", lfReStartAddOnIconIncrement);
                        lfAddOnHoverContainer.setAttribute("data-extension-path", lfPluginName.path);
                        lfAddOnHoverContainer.setAttribute("data-extension-active", lfPluginName.active);
                        lfAddOnHoverContainer.setAttribute("data-extension-name", lfPluginName.name);
                        lfAddOnHoverContainer.setAttribute("data-extension-version", lfPluginName.version);
                        lfAddOnHoverContainer.setAttribute("data-extension-description", lfPluginName.description);
                        lfAddOnHoverContainer.setAttribute("data-extension-documentation", lfPluginName.documentation);
                        lfAddOnHoverContainer.setAttribute("data-extension-name-lowercase", lfPluginNameLowerCase);

        
                        // Top Bar
                        var lfAddOnTopBar = d.createElement("DIV");
                        lfAddOnTopBar.classList.add("lf-addons-top-bar");
                        var lfAddOnName = d.createElement("P");
                        lfAddOnName.textContent = lfCurrentPluginName;
                        lfAddOnName.classList.add("lf-addons-name");
                        var lfAddOnStatus = d.createElement("P");
                        lfAddOnStatus.textContent = "installed";
                        lfAddOnStatus.classList.add("lf-addons-status");
                        var lfAddOnVersion = d.createElement("P");
                        lfAddOnVersion.textContent = "Version";
                        lfAddOnVersion.classList.add("lf-addons-version");
                        var lfAddOnVersionNumber = d.createElement("SPAN");
                        lfAddOnVersionNumber.textContent = lfCurrentVersion;
                        lfAddOnVersionNumber.classList.add("lf-addons-version-number");
                        lfAddOnTopBar.append(lfAddOnName);
                        lfAddOnTopBar.append(lfAddOnStatus);
                        lfAddOnVersion.append(lfAddOnVersionNumber);
                        lfAddOnTopBar.append(lfAddOnVersion);
                        lfAddOnHoverContainer.append(lfAddOnTopBar);
        
        
                        // Description
                        var lfAddOnDescription = d.createElement("P");
                        lfAddOnDescription.classList.add("lf-addons-description");
                        lfAddOnDescription.textContent = lfCurrentDescription;
                        lfAddOnHoverContainer.append(lfAddOnDescription);
        
        
                        // Bottom Bar
                        var lfAddOnBottomBar = d.createElement("DIV");
                        // Left Column
                        lfAddOnBottomBar.classList.add("lf-addons-bottom-bar");
                        var lfBottomLeftColumn = d.createElement("DIV");
                        lfBottomLeftColumn.classList.add("lf-bottom-bar-column");
                        var lfBottomLeftTextLinks = d.createElement("DIV");
                        lfBottomLeftTextLinks.classList.add("lf-bottom-bar-links");
                        var lfBottomLeftSettingsLink = d.createElement("A");
                        lfBottomLeftSettingsLink.id = "lf_Settings_Link_" + lfAddOnIconIncrement;
                        lfBottomLeftSettingsLink.setAttribute("data-extension-name", lfPluginNameNoSpace);
                        lfBottomLeftSettingsLink.setAttribute("data-extension-id", lfReStartAddOnIconIncrement); 
                        lfBottomLeftSettingsLink.classList.add("lf-bottom-bar-settings-link");
                        lfBottomLeftSettingsLink.classList.add(lfPluginNameNoSpace);
                        lfBottomLeftSettingsLink.textContent = "Settings";
                        var lfBottomLeftDocsLink = d.createElement("A");
                        lfBottomLeftDocsLink.classList.add("lf-bottom-bar-docs-link");
                        lfBottomLeftDocsLink.textContent = "Documentation";
                        lfBottomLeftDocsLink.href = lfCurrentDocumentationURL;
                        lfBottomLeftDocsLink.setAttribute('target', '_blank');
                        lfBottomLeftColumn.append(lfBottomLeftTextLinks);
                        lfBottomLeftTextLinks.append(lfBottomLeftSettingsLink);
                        lfBottomLeftTextLinks.append(lfBottomLeftDocsLink);
                        lfAddOnBottomBar.append(lfBottomLeftColumn);
        
        
                        // Right Column
                        var lfBottomRightColumn = d.createElement("DIV");
                        lfBottomRightColumn.classList.add("lf-bottom-bar-column");
                        var lfBottomRightButtonLinks = d.createElement("DIV");
                        lfBottomRightButtonLinks.classList.add("lf-bottom-bar-buttons");
                        var lfBottomRightButtonDeactivate = d.createElement("BUTTON");
                        lfBottomRightButtonDeactivate.id = "lf_Bottom_Bar_Deactivate_" + lfAddOnIconIncrement;
                        lfBottomRightButtonDeactivate.setAttribute("data-id", lfAddOnIconIncrement);
                        if (lfPluginActive === true) {
                            lfBottomRightButtonDeactivate.textContent = "Deactivate";
                            lfBottomRightButtonDeactivate.setAttribute("data-activated", "activated");
                            lfBottomRightButtonDeactivate.setAttribute("data-path", lfPluginPath);
                            lfBottomRightButtonDeactivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                        } else {
                            lfBottomRightButtonDeactivate.textContent = "Deactivated";
                            lfBottomRightButtonDeactivate.setAttribute("data-activated", "deactivated");
                            lfBottomRightButtonDeactivate.setAttribute("data-path", lfPluginPath);
                            lfBottomRightButtonDeactivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                            lfBottomLeftSettingsLink.setAttribute('style', "display:" + "none");
                        }
                        lfBottomRightButtonDeactivate.classList.add("lf-bottom-bar-deactivate");
                        lfBottomRightButtonDeactivate.classList.add(lfPluginNameNoSpace);
                        var lfBottomRightButtonActivate = d.createElement("BUTTON");
                        lfBottomRightButtonActivate.id = "lf_Bottom_Bar_Activate_" + lfAddOnIconIncrement;
                        lfBottomRightButtonActivate.setAttribute("data-id", lfAddOnIconIncrement);
                        lfBottomRightButtonActivate.classList.add("lf-bottom-bar-activate");
                        lfBottomRightButtonActivate.classList.add(lfPluginNameNoSpace);
                        if (lfPluginActive === true) {
                            lfBottomRightButtonActivate.textContent = "Activated";
                            lfBottomRightButtonActivate.setAttribute("data-activated", "activated");
                            lfBottomRightButtonActivate.setAttribute("data-path", lfPluginPath);
                            lfBottomRightButtonActivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                        } else {
                            lfBottomRightButtonActivate.textContent = "Activate";
                            lfBottomRightButtonActivate.setAttribute("data-activated", "deactivated");
                            lfBottomRightButtonActivate.setAttribute("data-path", lfPluginPath);
                            lfBottomRightButtonActivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                        }
                        lfBottomRightColumn.append(lfBottomRightButtonLinks);
                        lfBottomRightButtonLinks.append(lfBottomRightButtonDeactivate);
                        lfBottomRightButtonLinks.append(lfBottomRightButtonActivate);
                        lfAddOnBottomBar.append(lfBottomRightColumn);
                        lfAddOnHoverContainer.append(lfAddOnBottomBar);


                        // Verify License 
                        var lfLicenseKeyDiv = d.createElement("DIV");
                        lfLicenseKeyDiv.classList.add("lf-license-key-container");
                        lfLicenseKeyDiv.id = "lf_View_All_License_Key_" + lfPluginNameNoSpace;
                        var lfLicenseKey = d.createElement("BUTTON"); 
                        lfLicenseKey.textContent = "License Key";
                        lfLicenseKey.id = "lf_Add_On_License_Key_" + lfAddOnIconIncrement;
                        lfLicenseKey.setAttribute("data-extension-id", lfReStartAddOnIconIncrement);
                        lfLicenseKey.setAttribute("data-extension-name", lfPluginNameNoSpace);
                        lfLicenseKey.classList.add("lf-license-key");
                        lfLicenseKeyDiv.append(lfLicenseKey);
                        lfAddOnHoverContainer.append(lfLicenseKeyDiv);


                        // Append to Icon
                        lfAddOnLi.append(lfAddOnHoverContainer);
                        lfAddOnSideBar.append(lfAddOnLi);
    
        
                        lfAddOnIconIncrement++; 
                        lfReStartAddOnIconIncrement++;
        
                    }
                })
            }
            lfAllExtensionsAdded = "true";
        }


    // ------------------------------------------------------------------------------------------------------------------------- LF Build Extension License Key Modal
    // Creates License Key Modal
        function lfCreateLicenseKeyModal(lfExtensionId) {
            if(lfExtensionId !== 1) { // Prevent License Modal if is Likeable Forms

                // Create Elements
                // Overlay
                var lfExtensionModalOverlay = d.createElement("DIV");
                lfExtensionModalOverlay.id = "lf_Extension_Modal_Overlay_" + lfExtensionId;
                lfExtensionModalOverlay.classList.add("lf-extension-modal-overlay");
                lfExtensionModalOverlay.setAttribute("data-extension-increment", lfExtensionId);
                
                
                // Container
                var lfExtensionModalContainer = d.createElement("DIV");
                lfExtensionModalContainer.id = "lf_Extension_Modal_Container_" + lfExtensionId;
                lfExtensionModalContainer.classList.add("lf-extension-modal-container");
                
                
                // Frame
                var lfExtensionModalFrame = d.createElement("DIV");
                lfExtensionModalFrame.id = "lf_Extension_Modal_Frame_" + lfExtensionId;
                lfExtensionModalFrame.classList.add("lf-extension-modal-frame");
                
                
                // Append Elements
                lfExtensionModalContainer.append(lfExtensionModalFrame);
                lfExtensionModalOverlay.append(lfExtensionModalContainer);
                d.body.appendChild(lfExtensionModalOverlay);

                
                // Construct Extension/Icon Image Path
                var lfCurrentPluginName = d.getElementById('lf_Add_On_License_Key_' + lfExtensionId).getAttribute("data-extension-name");
                var lfCurrentPluginNameWithSpaces = lfCurrentPluginName.replace(/_/g, " ");
                var lfPluginNameLowerCase = lfCurrentPluginName.toLowerCase();
                var lfPluginFilePath = lfPluginNameLowerCase.replace(/_/g, "");
                var lfExtensionPrefix = lfEditorData.wpPrefix.replace(/_/g, "");
                var lfSiteUrl = d.location.origin;


                var lfModalContainer = d.getElementById('lf_Extension_Modal_Container_' + lfExtensionId);
                lfModalContainer.style.cssText = "width: 400px !important;";
                var lfModalFrame = d.getElementById('lf_Extension_Modal_Frame_' + lfExtensionId);
                lfModalFrame.style.cssText = "height: 62vh;max-height: 100% !important;";


                var lfModalOverlay = d.getElementById('lf_Extension_Modal_Overlay_' + lfExtensionId);
                lfModalOverlay.style.cssText = "display:none !important;";


                // Create API/License Key Elements
                var lfActiveLicenseContainer = d.createElement("DIV");
                lfActiveLicenseContainer.id = "lf_Activate_License_Container_" + lfExtensionId;
                lfActiveLicenseContainer.classList.add("lf-activate-license-container");


                var lfLicenseKeyLogosUl = d.createElement("UL");
                lfLicenseKeyLogosUl.classList.add("lf-license-key-logos-ul");


                var lfLicenseLikeableLogo = d.createElement("IMG");
                lfLicenseLikeableLogo.classList.add("lf-license-likeable-logo");
                lfLicenseLikeableLogo.style.cssText = "background-image: url(/" + lfExtensionPrefix + "-content/plugins/likeable-forms/assets/extension-icon.png)";


                var lfLicenseExtensionLogo = d.createElement("IMG");
                lfLicenseExtensionLogo.classList.add("lf-license-extension-logo");
                lfLicenseExtensionLogo.style.cssText = "background-image: url(/" + lfExtensionPrefix + "-content/plugins/" + lfPluginFilePath + "/assets/extension-icon.png";


                var lfLicenseActivateText = d.createElement("P");
                lfLicenseActivateText.textContent = "License Verification";
                lfLicenseActivateText.classList.add("lf-license-activate-text");


                var lfLicenseDescription = d.createElement("P");
                lfLicenseDescription.textContent = "The " + lfCurrentPluginNameWithSpaces + " requires a valid license key. This allows " + lfSiteUrl + " to receive updates and grants access to the extensions features.";
                lfLicenseDescription.classList.add("lf-license-description");


                var lfLicenseKeyInputContainer = d.createElement("FORM");
                lfLicenseKeyInputContainer.id = "lf_License_Key_Input_Container_" + lfExtensionId;
                lfLicenseKeyInputContainer.classList.add("lf-license-key-input-container");


                var lfLicenseKeyInputLabel = d.createElement("LABEL");
                lfLicenseKeyInputLabel.textContent = "License Key";
                lfLicenseKeyInputLabel.htmlFor = "lf_License_Key_Input_" + lfExtensionId;
                lfLicenseKeyInputLabel.classList.add("lf-license-key-label-input");


                var lfLicenseKeyInput = d.createElement("input");
                lfLicenseKeyInput.setAttribute("type", "password");
                lfLicenseKeyInput.setAttribute("autocomplete", "off");
                lfLicenseKeyInput.id = "lf_License_Key_Input_" + lfExtensionId;
                lfLicenseKeyInput.classList.add("lf-license-key-input");


                var lfLicenseApiKeyInputLabel = d.createElement("LABEL");
                lfLicenseApiKeyInputLabel.textContent = "API Key";
                lfLicenseApiKeyInputLabel.htmlFor = "lf_Api_Key_Input_" + lfExtensionId;
                lfLicenseApiKeyInputLabel.classList.add("lf-license-key-label-input");


                var lfLicenseApiKeyInput = d.createElement("input");
                lfLicenseApiKeyInput.setAttribute("type", "password");
                lfLicenseApiKeyInput.setAttribute("autocomplete", "off");
                lfLicenseApiKeyInput.id = "lf_Api_Key_Input_" + lfExtensionId;
                lfLicenseApiKeyInput.classList.add("lf-license-key-input");


                var lfLicenseActiveCancelUl = d.createElement("UL");
                lfLicenseActiveCancelUl.classList.add("lf-activate-cancel-ul");


                var lfLicenseActivate = d.createElement("BUTTON");
                lfLicenseActivate.textContent = "Verify License Key";
                lfLicenseActivate.id = "lf_License_Validate_" + lfExtensionId; 
                lfLicenseActivate.setAttribute("data-extension-id", lfExtensionId);
                lfLicenseActivate.classList.add("lf-verify-plus-save-keys");


                // Append Elements
                lfLicenseKeyLogosUl.append(lfLicenseLikeableLogo);
                lfLicenseKeyLogosUl.append(lfLicenseExtensionLogo);
                lfActiveLicenseContainer.append(lfLicenseKeyLogosUl);
                lfActiveLicenseContainer.append(lfLicenseActivateText);
                lfActiveLicenseContainer.append(lfLicenseDescription);
                lfLicenseKeyInputContainer.append(lfLicenseKeyInputLabel);
                lfLicenseKeyInputContainer.append(lfLicenseKeyInput);
                lfLicenseKeyInputContainer.append(lfLicenseApiKeyInputLabel);
                lfLicenseKeyInputContainer.append(lfLicenseApiKeyInput);
                lfActiveLicenseContainer.append(lfLicenseKeyInputContainer);
                lfLicenseActiveCancelUl.append(lfLicenseActivate);
                lfActiveLicenseContainer.append(lfLicenseActiveCancelUl);
                lfModalFrame.append(lfActiveLicenseContainer);
            }
        } 




    // ------------------------------------------------------------------------------------------------------------------------- LF Add/Remove Extension License Key Modal
    // Displays License Key Modal
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-license-key") {
            var lfCurrentExtensionIncrement = e.target.getAttribute("data-extension-id");
            var lfExtensionModal = d.getElementById('lf_Extension_Modal_Overlay_' + lfCurrentExtensionIncrement);
            lfExtensionModal.style.cssText = "display: block";
        }
    })


    // Removes Extension License Key Modal on Overlay Click
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-extension-modal-overlay") {
            var lfCurrentExtensionIncrement = e.target.getAttribute("data-extension-increment");
            var lfExtensionModal = d.getElementById('lf_Extension_Modal_Overlay_' + lfCurrentExtensionIncrement);
            lfExtensionModal.style.cssText = "display: none";
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Build Extension Modals
    // Creates Extensions Modal
    function lfCreateExtensionModal(lfAddOnIconIncrement, lfPluginName) {
        if(lfPluginName !== "Likeable Forms"){ // Prevent Modal if is Likeable Forms


            // Current Extension Increment
            var lfExtensionIncrement = lfAddOnIconIncrement;
            var lfCurrentExtensionName = lfPluginName;
            var lfExtensionName = lfCurrentExtensionName.replace(/_/g, " ");


            // Determines if Extension  Modal Created  
            var lfCurrentModal = d.getElementById('lf_Modal_Overlay_' + lfExtensionIncrement); 
            var lfModalExist = d.body.contains(lfCurrentModal);
            if (lfModalExist === false) {
        
        
                // Create Elements
                // Overlay
                var lfModalOverlay = d.createElement("DIV");
                lfModalOverlay.id = "lf_Modal_Overlay_" + lfExtensionIncrement;
                lfModalOverlay.classList.add("lf-modal-overlay");
                lfModalOverlay.setAttribute("data-extension-id", lfExtensionIncrement);
                lfModalOverlay.style.cssText = "display: none";



                // Container
                var lfModalContainer = d.createElement("DIV");
                lfModalContainer.id = "lf_Modal_Container_" + lfExtensionIncrement;
                lfModalContainer.classList.add("lf-modal-container");


                // Top Bar
                var lfModalTopBar = d.createElement("DIV");
                lfModalTopBar.id = "lf_Modal_Top_Bar_" + lfExtensionIncrement;
                lfModalTopBar.classList.add("lf-modal-top-bar");


                // Media Query Ul
                var lfModalMediaQueryUl = d.createElement("UL");
                lfModalMediaQueryUl.id = "lf_Modal_Media_Query_Ul_" + lfExtensionIncrement;
                lfModalMediaQueryUl.classList.add("lf-modal-media-query-ul");


                // Maximize
                var lfModalMaximize = d.createElement("P");
                lfModalMaximize.id = "lf_Modal_Maximize_" + lfExtensionIncrement;
                lfModalMaximize.classList.add("lf-modal-maximize");
                lfModalMaximize.textContent = "Maximize";
                lfModalMaximize.setAttribute("data-extension-id", lfExtensionIncrement);


                // Minimize
                var lfModalMinimize = d.createElement("P");
                lfModalMinimize.id = "lf_Modal_Minimize_" + lfExtensionIncrement;
                lfModalMinimize.classList.add("lf-modal-minimize");
                lfModalMinimize.textContent = "Minimize";
                lfModalMinimize.setAttribute("data-extension-id", lfExtensionIncrement);


                // Close
                var lfModalClose = d.createElement("BUTTON");
                lfModalClose.id = "lf_Modal_Close_" + lfExtensionIncrement;
                lfModalClose.classList.add("lf-modal-close");
                lfModalClose.textContent = "X";
                lfModalClose.setAttribute("data-extension-id", lfExtensionIncrement);


                // Frame
                var lfModalFrame = d.createElement("DIV");
                lfModalFrame.id = "lf_Modal_Frame_" + lfExtensionIncrement;
                lfModalFrame.classList.add("lf-modal-frame");


                // Create Extension Modal Header
                var lfExtensionContainer = d.getElementById('lf_Add_On_Container_' + lfExtensionIncrement);
                var lfPluginPath = lfExtensionContainer.getAttribute("data-extension-path");
                var lfPluginActive = lfExtensionContainer.getAttribute("data-extension-active");
                var lfCurrentPluginName = lfExtensionContainer.getAttribute("data-extension-name");
                var lfCurrentVersion = lfExtensionContainer.getAttribute("data-extension-version");
                var lfCurrentDescription = lfExtensionContainer.getAttribute("data-extension-description");
                var lfCurrentDocumentationURL = lfExtensionContainer.getAttribute("data-extension-documentation");
                var lfPluginNameLowerCase = lfExtensionContainer.getAttribute("data-extension-name-lowercase");
                var lfPluginNameNoSpace = lfCurrentPluginName.replace(/ /g, "_"); 
                    
                    
                // Create Add On Icon
                var lfAddOnUl = d.createElement("UL");
                lfAddOnUl.style.cssText = "margin: 0px;";
                var lfAddOnLi = d.createElement("LI");
                lfAddOnLi.id = "lf_Add_On_Icon_Li_" + lfExtensionIncrement + "_1"; 
                lfAddOnLi.classList.add("lf-add-on-icon-li");
                lfAddOnLi.style.cssText = "border: none; height: 20px;";
                lfAddOnLi.setAttribute("data-add-on-id", lfExtensionIncrement);
                lfAddOnLi.setAttribute("data-extension-name", lfPluginNameNoSpace);
                    
                    
                // Grab Icon Image Path
                var lfAddOnImage = d.createElement("IMG");
                var lfPluginFilePath = lfPluginNameLowerCase.replace(/ +/g, "");
                var lfSiteUrl = d.location.origin;
                var lfWpPrefix = lfEditorData.wpPrefix;
                var lfContentUrl = lfEditorData.contentUrl.replace(lfSiteUrl, "");
                var lfAddOnIconUrlPath = lfContentUrl  + "/plugins/" + lfPluginFilePath + "/assets/extension-icon.png";
                lfViewAllUrl = lfContentUrl  + "/plugins/likeable-forms/assets/" + "view-all-extensions-dark.png";
                lfAddOnImage.src = lfAddOnIconUrlPath;
                lfAddOnImage.setAttribute("data-add-on-id", lfExtensionIncrement);
                lfAddOnImage.setAttribute("data-extension-name", lfPluginNameNoSpace);
                lfAddOnImage.id = "lf_Add_On_Icon_Image_" + lfExtensionIncrement + "_1";
                lfAddOnImage.classList.add("lf-addons-icon-image");
                lfAddOnImage.style.cssText = "padding: 0px; height: 20px; width: 20px;";
                    

                var lfAddOnActiveIndicator = d.createElement("SPAN");
                lfAddOnActiveIndicator.id = ("lf_Active_Indicator_" + lfExtensionIncrement + "_1");
                lfAddOnActiveIndicator.classList.add("lf-addons-active-indicator");
                lfAddOnActiveIndicator.classList.add(lfPluginNameNoSpace); 
                lfAddOnActiveIndicator.textContent = "●";
                if (lfPluginActive === "true") {
                    // return
                } else {
                    lfAddOnActiveIndicator.setAttribute('style', "color:" + "#737373");
                }
                    
                    
                // Append Icon to Field Editor
                lfAddOnLi.append(lfAddOnImage);
                lfAddOnLi.append(lfAddOnActiveIndicator);
                var lfAddOnSideBar = d.getElementById('lf_Extension_Flex_Grid');
                    
                    
                // Container
                var lfAddOnHoverContainer = d.createElement("DIV");
                lfAddOnHoverContainer.id = "lf_Add_On_Container_" + lfExtensionIncrement + "_1";
                lfAddOnHoverContainer.classList.add("lf-add-on-container");
                lfAddOnHoverContainer.style.cssText = "visibility: visible; margin-left: 0px; position: inherit; border-width: 0px; border-bottom-width: 1px; border-radius: 0px 0px 0px 0px;";
    
                    
                // Top Bar
                var lfAddOnTopBar = d.createElement("DIV");
                lfAddOnTopBar.id = "lf_Top_Bar_" + lfExtensionIncrement + "_1";
                lfAddOnTopBar.classList.add("lf-addons-top-bar");
                lfAddOnTopBar.style.cssText = "max-height: 32px; border-bottom-width: 0.5px; align-items: flex-end;";
                var lfAddOnName = d.createElement("P");
                lfAddOnName.textContent = lfCurrentPluginName;
                lfAddOnName.classList.add("lf-addons-name");
                lfAddOnName.style.cssText = "min-width: fit-content";
                var lfAddOnStatus = d.createElement("P");
                lfAddOnStatus.textContent = "installed";
                lfAddOnStatus.classList.add("lf-addons-status");
                var lfAddOnVersion = d.createElement("P");
                lfAddOnVersion.textContent = "Version";
                lfAddOnVersion.classList.add("lf-addons-version");
                var lfAddOnVersionNumber = d.createElement("SPAN");
                lfAddOnVersionNumber.textContent = lfCurrentVersion;
                lfAddOnVersionNumber.classList.add("lf-addons-version-number");
                    
                    
                // Description
                var lfAddOnDescription = d.createElement("P");
                lfAddOnDescription.classList.add("lf-addons-description");
                lfAddOnDescription.textContent = lfCurrentDescription;
                lfAddOnDescription.style.cssText = "margin-bottom: 0px;";
                    
                    
                // Bottom Bar
                var lfAddOnBottomBar = d.createElement("DIV");
                lfAddOnBottomBar.classList.add("lf-addons-bottom-bar");
                var lfBottomLeftColumn = d.createElement("DIV");
                lfBottomLeftColumn.classList.add("lf-bottom-bar-column");
                var lfBottomLeftTextLinks = d.createElement("DIV");
                lfBottomLeftTextLinks.classList.add("lf-bottom-bar-links");
                var lfBottomLeftDocsLink = d.createElement("A");
                lfBottomLeftDocsLink.classList.add("lf-bottom-bar-docs-link");
                lfBottomLeftDocsLink.textContent = "Documentation";
                lfBottomLeftDocsLink.href = lfCurrentDocumentationURL;
                lfBottomLeftDocsLink.setAttribute('target', '_blank');


                // Verify License 
                var lfLicenseKeyDiv = d.createElement("DIV");
                lfLicenseKeyDiv.classList.add("lf-license-key-container");
                lfLicenseKeyDiv.id = "lf_Settings_Modal_License_Key_" + lfPluginNameNoSpace; 
                lfLicenseKeyDiv.style.cssText = "padding: 0px; width: fit-content; border: none;";
                var lfLicenseKey = d.createElement("BUTTON"); 
                lfLicenseKey.textContent = "License Key";
                lfLicenseKey.id = "lf_Add_On_License_Key_" + lfExtensionIncrement + "_1";
                lfLicenseKey.setAttribute("data-extension-id", lfExtensionIncrement);
                lfLicenseKey.setAttribute("data-extension-name", lfPluginNameNoSpace);
                lfLicenseKey.classList.add("lf-license-key");
                lfLicenseKey.style.cssText = "color: #38ff00; text-decoration: underline; cursor: pointer; padding: 0px; font-weight: normal; border: 0px; background-color: #0000; font-size:13px; height:auto;"


                // Append
                lfLicenseKeyDiv.append(lfLicenseKey);
                lfAddOnUl.append(lfAddOnLi);
                lfAddOnTopBar.append(lfAddOnUl);
                lfAddOnTopBar.append(lfAddOnName);
                lfAddOnTopBar.append(lfAddOnStatus);
                lfAddOnVersion.append(lfAddOnVersionNumber);
                lfAddOnTopBar.append(lfAddOnVersion);
                lfAddOnHoverContainer.append(lfAddOnTopBar);
                lfAddOnHoverContainer.append(lfAddOnDescription);
                lfBottomLeftColumn.append(lfBottomLeftTextLinks);
                lfBottomLeftTextLinks.append(lfLicenseKeyDiv);
                lfBottomLeftTextLinks.append(lfBottomLeftDocsLink);
                lfAddOnBottomBar.append(lfBottomLeftColumn);
                    
                    
                // Right Column
                var lfBottomRightColumn = d.createElement("DIV");
                lfBottomRightColumn.classList.add("lf-bottom-bar-column");
                var lfBottomRightButtonLinks = d.createElement("DIV");
                lfBottomRightButtonLinks.classList.add("lf-bottom-bar-buttons");
                lfBottomRightButtonLinks.style.cssText = "padding-bottom: 0px;";
                var lfBottomRightButtonDeactivate = d.createElement("BUTTON");
                lfBottomRightButtonDeactivate.id = "lf_Bottom_Bar_Deactivate_" + lfExtensionIncrement + "_1";
                lfBottomRightButtonDeactivate.setAttribute("data-id", lfExtensionIncrement);
                if (lfPluginActive === "true") {
                    lfBottomRightButtonDeactivate.textContent = "Deactivate";
                    lfBottomRightButtonDeactivate.setAttribute("data-activated", "activated");
                    lfBottomRightButtonDeactivate.setAttribute("data-path", lfPluginPath);
                    lfBottomRightButtonDeactivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                } else {
                    lfBottomRightButtonDeactivate.textContent = "Deactivated";
                    lfBottomRightButtonDeactivate.setAttribute("data-activated", "deactivated");
                    lfBottomRightButtonDeactivate.setAttribute("data-path", lfPluginPath);
                    lfBottomRightButtonDeactivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                }
                    lfBottomRightButtonDeactivate.classList.add("lf-bottom-bar-deactivate");
                    lfBottomRightButtonDeactivate.classList.add(lfPluginNameNoSpace);
                    var lfBottomRightButtonActivate = d.createElement("BUTTON");
                    lfBottomRightButtonActivate.id = "lf_Bottom_Bar_Activate_" + lfExtensionIncrement + "_1";
                    lfBottomRightButtonActivate.setAttribute("data-id", lfExtensionIncrement);
                    lfBottomRightButtonActivate.classList.add("lf-bottom-bar-activate");
                    lfBottomRightButtonActivate.classList.add(lfPluginNameNoSpace);
                if (lfPluginActive === "true") {
                    lfBottomRightButtonActivate.textContent = "Activated";
                    lfBottomRightButtonActivate.setAttribute("data-activated", "activated");
                    lfBottomRightButtonActivate.setAttribute("data-path", lfPluginPath);
                    lfBottomRightButtonActivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                } else {
                    lfBottomRightButtonActivate.textContent = "Activate";
                    lfBottomRightButtonActivate.setAttribute("data-activated", "deactivated");
                    lfBottomRightButtonActivate.setAttribute("data-path", lfPluginPath);
                    lfBottomRightButtonActivate.setAttribute("data-settings-id", lfPluginNameNoSpace);
                }
                lfBottomRightColumn.append(lfBottomRightButtonLinks);
                lfBottomRightButtonLinks.append(lfBottomRightButtonDeactivate);
                lfBottomRightButtonLinks.append(lfBottomRightButtonActivate);
                lfAddOnBottomBar.append(lfBottomRightColumn);
                lfAddOnHoverContainer.append(lfAddOnBottomBar);
                    
                    
                // Extension Settings (Add License Key + Helper Text)
                var lfExtensionSettings = d.createElement("FORM");
                lfExtensionSettings.id = "lf_Extension_Settings_" + lfExtensionIncrement;
                lfExtensionSettings.classList.add("lf-extension-settings");
                lfExtensionSettings.setAttribute("autocomplete", "off");


                var lfAddLicenseKeyPrompt = d.createElement("DIV");
                lfAddLicenseKeyPrompt.id = "lf_Add_License_Key_Container_" + lfExtensionIncrement;
                lfAddLicenseKeyPrompt.classList.add("lf-add-license-key-prompt-container");


                var lfLicenseKeyPromptButton = d.createElement("BUTTON");
                lfLicenseKeyPromptButton.textContent = "Add License Key";
                lfLicenseKeyPromptButton.id = "lf_Add_Extension_License_Key_" + lfExtensionIncrement;
                lfLicenseKeyPromptButton.classList.add("lf-license-key");
                lfLicenseKeyPromptButton.style.cssText = "cursor: pointer;background-color: #1743f3;color: white;border: solid 1px #1743f3;font-size: 13px;font-weight: normal;border-radius: 6px;height: 23px;width: fit-content;";
                lfLicenseKeyPromptButton.setAttribute("data-extension-id", lfExtensionIncrement);
                lfLicenseKeyPromptButton.setAttribute("data-extension-name", lfPluginNameNoSpace);


                var lfLicenseKeyHelperText = d.createElement("P");
                lfLicenseKeyHelperText.id = "lf_Extension_Settings_Placeholder_" + lfExtensionIncrement;
                lfLicenseKeyHelperText.innerText = "Please add your license key to get started.";
                lfLicenseKeyHelperText.style.cssText = "color: white; font-size: 11px;";


                // Create Enable Settings Button + Text
                var lfEnableSettingsPromptButton = d.createElement("BUTTON");
                lfEnableSettingsPromptButton.textContent = "Enable Settings";
                lfEnableSettingsPromptButton.id = "lf_Enable_Current_Settings_" + lfExtensionIncrement;
                lfEnableSettingsPromptButton.classList.add("lf-enable-current-settings");
                lfEnableSettingsPromptButton.setAttribute("data-extension-id", lfExtensionIncrement);
                lfEnableSettingsPromptButton.style.cssText = "display:none;";


                // Create Settings Enable Top Bar
                var lfAddOnSettingsEnabled = d.createElement("BUTTON");
                lfAddOnSettingsEnabled.style.cssText = "top: -21px;width: fit-content;position: relative;margin: 0 auto;background-color: #eb5e28;color: rgb(255, 255, 255);border: 1px solid #eb5e28;border-radius: 0px 0px 6px 6px;padding-bottom: 5px;padding-left: 15px;padding-right: 15px;height: 23px;font-size: 11px;line-height: 17px;";
                lfAddOnSettingsEnabled.id = "lf_Enable_Settings_Containter_Text" + lfExtensionIncrement;
                lfAddOnSettingsEnabled.classList.add("lf-enable-settings-container");
                lfAddOnSettingsEnabled.textContent = "SETTINGS DISABLED";
                lfAddOnSettingsEnabled.style.cssText = "display:none;";


                // Create Disable Settings Button
                var lfDisableSettings = d.createElement("BUTTON");
                lfDisableSettings.textContent = "Disable";
                lfDisableSettings.id = "lf_Disable_Settings_" + lfExtensionIncrement;
                lfDisableSettings.classList.add("lf-modal-disable-settings");
                lfDisableSettings.setAttribute("data-condition", "disable");
                lfDisableSettings.setAttribute("data-settings-enabled", "pending generation");
                var lfDeactiveExtensionButton = d.getElementById("lf_Bottom_Bar_Activate_" + lfExtensionIncrement + "_1");
                lfBottomRightButtonActivate.after(lfDisableSettings);


                // Create Clear Settings Icon
                var lfClearSettings = d.createElement("BUTTON");
                lfClearSettings.id = "lf_Clear_Settings_" + lfExtensionIncrement;
                lfClearSettings.classList.add("lf-modal-clear-settings");
                lfClearSettings.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-clear-icon.png" + ");";
                lfDisableSettings.after(lfClearSettings);


                // Create Delete Settings Icon
                var lfDeleteSettings = d.createElement("BUTTON");
                lfDeleteSettings.id = "lf_Delete_Settings_" + lfExtensionIncrement;
                lfDeleteSettings.classList.add("lf-modal-delete-settings");
                lfDeleteSettings.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-delete-icon.png" + ");";
                lfClearSettings.after(lfDeleteSettings);


                // Append Elements
                lfModalMediaQueryUl.append(lfModalMaximize);
                lfModalMediaQueryUl.append(lfModalMinimize);
                lfModalTopBar.append(lfModalMediaQueryUl);
                lfModalTopBar.append(lfModalClose);
                lfModalContainer.append(lfModalTopBar);
                lfModalFrame.append(lfAddOnHoverContainer);
                lfAddOnHoverContainer.after(lfAddOnSettingsEnabled);

                lfAddLicenseKeyPrompt.append(lfLicenseKeyPromptButton);
                lfLicenseKeyPromptButton.after(lfEnableSettingsPromptButton);
                lfAddLicenseKeyPrompt.append(lfLicenseKeyHelperText);

                lfModalFrame.append(lfAddLicenseKeyPrompt);
                lfModalFrame.append(lfExtensionSettings);
                lfModalContainer.append(lfModalFrame);
                lfModalOverlay.append(lfModalContainer);
                d.body.appendChild(lfModalOverlay);
            } else {
                // Displays Previously Created Extension Modal
                lfCurrentModal.style.cssText = "display: block";
            }
        }


    }
    


    // ------------------------------------------------------------------------------------------------------------------------- LF Show/Hide/Minimize/Maximize Extension Modal
    // Displays Extension Modal
    d.addEventListener('click', function (e) { // settings
        if (e.target.className.includes("lf-bottom-bar-settings-link")) { 
            var lfExtensionId = e.target.getAttribute("data-extension-id");
            var lfExtensionModal = d.getElementById("lf_Modal_Overlay_" + lfExtensionId);
            lfExtensionModal.style.cssText = "display: block";
        }
    })
    d.addEventListener('click', function (e) { // icon image
        if (e.target.className == "lf-addons-icon-image" || e.target.className == "lf-add-on-icon-li") { 
            var lfExtensionName = e.target.getAttribute("data-extension-name");
            if(lfExtensionName !== "likeable_forms") {
                var lfExtensionId = e.target.getAttribute("data-add-on-id");
                var lfExtensionModal = d.getElementById("lf_Modal_Overlay_" + lfExtensionId);
                lfExtensionModal.style.cssText = "display: block";
            }
        }
    })


    // Hides Extensions Modal
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-modal-close" || e.target.className == "lf-modal-overlay") { 
            var lfCurrentExtensionId = e.target.getAttribute("data-extension-id");
            var lfModalOverlay = d.getElementById('lf_Modal_Overlay_' + lfCurrentExtensionId);
            lfModalOverlay.style.cssText = "display: none";
        }
    });


    // Minimizes Extensions modal
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-modal-minimize") {
            var lfCurrentExtensionId = e.target.getAttribute("data-extension-id");
            var lfModalContainer = d.getElementById('lf_Modal_Container_' + lfCurrentExtensionId);
            lfModalContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfModalFrame = d.getElementById('lf_Modal_Frame_' + lfCurrentExtensionId);
            lfModalFrame.style.cssText = "height: 74vh;";
        }
    });


    // Maximizes Extensions modal 
    d.addEventListener('click', function (e) {
        var lfCurrentExtensionId = e.target.getAttribute("data-extension-id");
        if (e.target.className == "lf-modal-maximize") {
            var lfModalContainer = d.getElementById('lf_Modal_Container_' + lfCurrentExtensionId);
            lfModalContainer.style.cssText = "position: fixed; top: 0px; left: 0%; height: 100%; width: 100% !important; transform: translate(0%, 0%);";
            var lfModalFrame = d.getElementById('lf_Modal_Frame_' + lfCurrentExtensionId);
            lfModalFrame.style.cssText = "height: calc(100vh - 50px);";
        }
    });


    // ------------------------------------------------------------------------------------------------------------------------- LF Community
    // Adds Community Forum to form editor 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-community") {
            var lfCommunityIframe = d.getElementById("lf_Community_Frame");
            lfCommunityIframe.src = "https://forum.likeableforms.com";
            var lfCommunityOverlay = d.getElementById('lf_Community_Overlay');
            lfCommunityOverlay.style.cssText = "display:block !important;";
        }
    });


    // Hides Community modal/previewer 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-community-close" || e.target.className == "lf-community-overlay") {
            var lfCommunityOverlay = d.getElementById('lf_Community_Overlay');
            lfCommunityOverlay.style.cssText = "display:none !important;";
            var lfCommunityContainer = d.getElementById('lf_Community_Container');
            lfCommunityContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfCommunityFrame = d.getElementById('lf_Community_Frame');
            lfCommunityFrame.style.cssText = "height: 74vh;";
        }
    });


    // Minimizes Community modal to desktop break point
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-community-minimize-media-query") {
            var lfCommunityContainer = d.getElementById('lf_Community_Container');
            lfCommunityContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfCommunityFrame = d.getElementById('lf_Community_Frame');
            lfCommunityFrame.style.cssText = "height: 74vh;";
        }
    });


    // Makes Community modal full screen 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-community-full-screen-media-query") {
            var lfCommunityContainer = d.getElementById('lf_Community_Container');
            lfCommunityContainer.style.cssText = "position: fixed; top: 0px; left: 0%; height: 100%; width: 100% !important; transform: translate(0%, 0%);";
            var lfCommunityFrame = d.getElementById('lf_Community_Frame');
            lfCommunityFrame.style.cssText = "height: calc(100vh - 50px);";
        }
    })
    

    // ------------------------------------------------------------------------------------------------------------------------- LF Changelog
    // Display Changelog Dropdown
    var lfChangelogOpen = "false";
    // Hides Changelog Dropdown When Clicked Outside
    d.addEventListener('click', function (e) {
        var lfChangelogParent = d.getElementById('lf_Changelog_Container');
        if (lfChangelogOpen === "true" && e.target.classList !== "notification-bell-li" && e.target !== lfChangelogParent && !lfChangelogParent.contains(e.target)) {
            var lfChangelogContainer = d.getElementById('lf_Changelog_Container');
            lfChangelogContainer.style.cssText = "display: none !important";
            lfChangelogOpen = "false";
        }
    })


  
    d.addEventListener('click', function (e) {
        var lfCurrentClass = e.target.classList;
        if (lfCurrentClass == "notification-bell-li") {
            var lfChangelogContainer = d.getElementById('lf_Changelog_Container');
            lfChangelogContainer.style.cssText = "display: block !important";
            lfChangelogOpen = "true";
        }
    })


    // Hides Changelog Dropdown
    d.addEventListener('click', function (e) {
        var lfCurrentClass = e.target.classList;
        if (lfCurrentClass == "lf-changelog-dismiss") {
            var lfChangelogContainer = d.getElementById('lf_Changelog_Container');
            lfChangelogContainer.style.cssText = "display: none !important";
            lfChangelogOpen = "false";
        }
    })
   

    // ------------------------------------------------------------------------------------------------------------------------- LF Prevent Save
    // Determines if Form Title Unique + Prevents Form Save
    d.addEventListener('keyup', function (e) {
        if(e.target.id === "lf_Form_Title") {


            var lfFormTitleInput = d.getElementById("lf_Form_Title");
            var lfCurrentFormTitleValue = lfFormTitleInput.value;
            var lfSaveButton = d.getElementById("lf_Save_Form");
            var lfSaveButtonCondition = lfSaveButton.getAttribute("data-condition");
            var lfCurrentUpdatedFormTitle = lfFormTitleInput.getAttribute("data-title");


            if(lfSaveButtonCondition !== "update" && !lfFormTitlesArray.includes(lfCurrentFormTitleValue)) { 
                var lfPreventSaveOverlay = d.getElementById("lf_Prevent_Save_Overlay");
                lfPreventSaveOverlay.classList.remove("lf-prevent-save-overlay");
            } else if (lfSaveButtonCondition === "update" && lfCurrentFormTitleValue === lfCurrentUpdatedFormTitle) {
                var lfPreventSaveOverlay = d.getElementById("lf_Prevent_Save_Overlay");
                lfPreventSaveOverlay.classList.remove("lf-prevent-save-overlay");
            } else if (lfSaveButtonCondition === "update" && lfCurrentFormTitleValue === lfCurrentUpdatedFormTitle) {
                var lfPreventSaveOverlay = d.getElementById("lf_Prevent_Save_Overlay");
                lfPreventSaveOverlay.classList.remove("lf-prevent-save-overlay");
            } else if (lfSaveButtonCondition === "update" && lfCurrentFormTitleValue !== lfCurrentUpdatedFormTitle && lfFormTitlesArray.includes(lfCurrentFormTitleValue)) {
                var lfPreventSaveOverlay = d.getElementById("lf_Prevent_Save_Overlay");
                lfPreventSaveOverlay.classList.add("lf-prevent-save-overlay");
            } else if (lfSaveButtonCondition === "save" && lfFormTitlesArray.includes(lfCurrentFormTitleValue)) {
                var lfPreventSaveOverlay = d.getElementById("lf_Prevent_Save_Overlay");
                lfPreventSaveOverlay.classList.add("lf-prevent-save-overlay");
            } else {
                var lfPreventSaveOverlay = d.getElementById("lf_Prevent_Save_Overlay");
                lfPreventSaveOverlay.classList.remove("lf-prevent-save-overlay");
            }


        }
    });


    // If Form Title Not Unique
    d.addEventListener('click', function (e) {
        if(e.target.id === "lf_Prevent_Save_Overlay") {
            alert("Form title must be unique before saving.");
        }
    })



    // ------------------------------------------------------------------------------------------------------------------------- LF Add Images
    window.addEventListener("load", (e) => {


        // Set Images
        var lfMainLogo = d.getElementById("lf_Logo");
        lfMainLogo.src = lfAssetsDirectory + 'lf-transparent.png'; // transparent image 
        lfMainLogo.style.cssText = "background-image: url(" + lfAssetsDirectory + "likeable.png" + ");";


        // -----------------------  Set Editor Bg Icon  ----------------------- //
        var lfEditorBg = d.getElementById("lf_Editor_Bg");
        lfEditorBg.src = lfAssetsDirectory + 'lf-transparent.png';
        lfEditorBg.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-editor-bg.png" + ");";
   

        // -----------------------  Set Field Drag Icons  ----------------------- //
        // Email Field Drag Handle
        var lfEmailFieldDragIcon = d.getElementById("lf_Email_Field_Drag_Icon");
        lfEmailFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfEmailFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Textarea Field Drag Handle
        var lfTextareaFieldDragIcon = d.getElementById("lf_Textarea_Field_Drag_Icon");
        lfTextareaFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfTextareaFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Pass Field Drag Handle
        var lfPassFieldDragIcon = d.getElementById("lf_Pass_Field_Drag_Icon");
        lfPassFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfPassFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Text Field Drag Handle
        var lfTextFieldDragIcon = d.getElementById("lf_Text_Field_Drag_Icon");
        lfTextFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfTextFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // File Field Drag Handle
        var lfFileFieldDragIcon = d.getElementById("lf_File_Field_Drag_Icon");
        lfFileFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfFileFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Files Field Drag Handle
        var lfFilesFieldDragIcon = d.getElementById("lf_Files_Field_Drag_Icon");
        lfFilesFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfFilesFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Number Field Drag Handle
        var lfNumberFieldDragIcon = d.getElementById("lf_Number_Field_Drag_Icon");
        lfNumberFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfNumberFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Date Field Drag Handle
        var lfDateFieldDragIcon = d.getElementById("lf_Date_Field_Drag_Icon");
        lfDateFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfDateFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Radio Field Drag Handle
        var lfRadioFieldDragIcon = d.getElementById("lf_Radio_Field_Drag_Icon");
        lfRadioFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfRadioFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Checkbox Field Drag Handle
        var lfCheckboxFieldDragIcon = d.getElementById("lf_Checkbox_Field_Drag_Icon");
        lfCheckboxFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfCheckboxFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Phone Field Drag Handle
        var lfPhoneFieldDragIcon = d.getElementById("lf_Phone_Field_Drag_Icon");
        lfPhoneFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfPhoneFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Url Field Drag Handle
        var lfUrlFieldDragIcon = d.getElementById("lf_Url_Field_Drag_Icon");
        lfUrlFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfUrlFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Dropdown Field Drag Handle
        var lfDropdownFieldDragIcon = d.getElementById("lf_Dropdown_Field_Drag_Icon");
        lfDropdownFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfDropdownFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Radio Product Field Drag Handle
        var lfSingleProductFieldDragIcon = d.getElementById("lf_Single_Product_Field_Drag_Icon");
        lfSingleProductFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfSingleProductFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";


        // Checkbox Product Field Drag Handle
        var lfMultipleProductsFieldDragIcon = d.getElementById("lf_Multiple_Products_Field_Drag_Icon");
        lfMultipleProductsFieldDragIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfMultipleProductsFieldDragIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-drag-dots.png" + ");";
   

        // -----------------------  Set Tab Icons  ----------------------- //
        // Preview Tab Icon
        var lfPreviewTab = d.getElementById("lf_Preview");
        lfPreviewTab.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-command-preview-icon.png" + ");";


        // Notifications Tab Icon
        var lfNotificationsTab = d.getElementById("lf_Notifications");
        lfNotificationsTab.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-command-notifications-icon.png" + ");";


        // Submissions Tab Icon
        var lfSubmissionsTab = d.getElementById("lf_Submissions");
        lfSubmissionsTab.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-command-submissions-icon.png" + ");";


        // -----------------------  Set Top Nav Icons  ----------------------- //
        // Search Icon
        var lfSearchIcon = d.getElementById("lf_Search");
        lfSearchIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-command-search-icon.png" + ");";


        // Clone Form Icon
        var lfCloneFormIcon = d.getElementById("lf_Clone_Form");
        lfCloneFormIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-duplicate-icon.png" + ");";


        // Delete Form Icon
        var lfDeleteFormIcon = d.getElementById("lf_Delete_Form");
        lfDeleteFormIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-delete-icon.png" + ");";


        // Changelog Icon
        var lfChangelogIcon = d.getElementById("lf_Changelog");
        lfChangelogIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-editor-changelog-icon.png" + ");";


        // -----------------------  Set Add New Form Icon  ----------------------- //
        // Add New Icon
        var lfAddNewIcon = d.getElementById("lf_Add_New");
        lfAddNewIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfAddNewIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-plus-icon.png" + ");";


        // -----------------------  Set Notifications Toolbar Icons  ----------------------- //
        // Bold Icon
        var lfNotificationsBoldIcon = d.getElementById("lf_Bold");
        lfNotificationsBoldIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfNotificationsBoldIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-notifications-bold.png" + ");";


        // Italic Icon
        var lfNotificationsItalicIcon = d.getElementById("lf_Italic");
        lfNotificationsItalicIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfNotificationsItalicIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-notifications-italic.png" + ");";


        // Underline Icon
        var lfNotificationsUnderlineIcon = d.getElementById("lf_Underline");
        lfNotificationsUnderlineIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfNotificationsUnderlineIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-notifications-underline.png" + ");";


        // Hyperlink Icon
        var lfNotificationsHyperlinkIcon = d.getElementById("lf_Hyperlink");
        lfNotificationsHyperlinkIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfNotificationsHyperlinkIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-notifications-link.png" + ");";


        // Undo Hyperlink Icon
        var lfNotificationsUndoHyperlinkIcon = d.getElementById("lf_Undo_Hyperlink");
        lfNotificationsUndoHyperlinkIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfNotificationsUndoHyperlinkIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-notifications-unlink.png" + ");";


        // From, To, Reply-To, BCC, Subject Search Icon
        var lfFrom = d.getElementById("lf_Drop_Input_1");
        lfFrom.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-search-icon.png" + ");";
        var lfTo = d.getElementById("lf_Ms_Input_1");
        lfTo.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-search-icon.png" + ");";
        var lfReplyTo = d.getElementById("lf_Drop_Input_2");
        lfReplyTo.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-search-icon.png" + ");";
        var lfBcc = d.getElementById("lf_Ms_Input_2");
        lfBcc.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-search-icon.png" + ");";
        var lfSubject = d.getElementById("lf_Subject");
        lfSubject.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-search-icon.png" + ");";


        // -----------------------  Set Footer Icons  ----------------------- //
        var lfCopyShortcode = d.getElementById("lf_Copy_Shortcode");
        lfCopyShortcode.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-duplicate-icon.png" + ");";


        // -----------------------  Set Submission Icons  ----------------------- //
        var lfSubmissionDeleteIcon = d.getElementById("lf_Submissions_Delete");
        lf_Submissions_Delete.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-delete-icon.png" + ");";


        var lfSubmissionsEmptyIcon = d.getElementById("lf_Submissions_Empty");
        lfSubmissionsEmptyIcon.src = lfAssetsDirectory + 'lf-transparent.png';
        lfSubmissionsEmptyIcon.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-submissions-bg.png" + ");";

    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Shortcuts
    // command + z (Search)
    d.addEventListener('keydown', function(event) {
        if (event.key == 'z' && event.metaKey) {
            var lfSearch = d.getElementById("lf_Search");
            lfSearch.click();
        }
    });
    // command + z (Preview)
    d.addEventListener('keydown', function(event) {
        if (event.key == 'x' && event.metaKey) {
            var lfPreview = d.getElementById("lf_Preview");
            lfPreview.click();
        }
    });
    // command + z (Notifications)
    d.addEventListener('keydown', function(event) {
        if (event.key == 'e' && event.metaKey) {
            var lfNotifications = d.getElementById("lf_Notifications");
            lfNotifications.click();
        }
    });
    // command + z (Submissions)
    d.addEventListener('keydown', function(event) {
        if (event.key == 'b' && event.metaKey) {
            var lfSubmissions = d.getElementById("lf_Submissions");
            lfSubmissions.click();
        }
    });

    
    // ------------------------------------------------------------------------------------------------------------------------- LF Media Library Modal
    var lfMediaLibraryRan = false; // Global Variable used to determine if media library is populated
    var lfProductDiv; // Global Variable used to store current product div
    var lfProductContainer; // Global Variable used to determine current product Field Container
    var lfMediaImagesCount; // Global used to determine how many images currently added
    var lfMaxMediaCount; // Global variable used to store total count of media library items
    // Adds media library modal to form editor 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-add-single-choice-product-image-radio" || e.target.className == "lf-add-multiple-choice-product-image-checkbox") {
            
            lfProductContainer = e.target.getAttribute("data-product-container")
            lfProductDiv = e.target.getAttribute("data-product-id");
            if(lfMediaLibraryRan == false) {
                var lfMediaLibrayUrls = lfEditorData.lfMediaUrls;
                var lfMediaUl = d.createElement("UL");
                lfMediaUl.classList.add("lf-media-ul");
                lfMediaUl.id = "lf_Media_Ul";
                
                
                // Add/Create Media Images
                for (var i = 0; i < 25; i++) {
                    var lfMediaUrl = lfMediaLibrayUrls[i].media_library_urls[0];
                    var lfMediaLi = d.createElement("LI");
                    lfMediaLi.classList.add("lf-media-li");
                    var lfMediaImg = d.createElement("IMG");
                    lfMediaImg.src = lfMediaUrl;
                    lfMediaImg.classList.add("lf-media-url");
                    lfMediaImg.setAttribute("data-media-url", lfMediaUrl);
                    lfMediaLi.append(lfMediaImg)
                    lfMediaUl.append(lfMediaLi);
                    lfMediaImagesCount = [i];
                    lfMediaImagesCount;
                }


                // Append Media Images to Frame
                lfMediaLibraryRan = true;
                var lfMediaLibraryFrame = d.getElementById('lf_Media_Library_Frame');
                lfMediaLibraryFrame.append(lfMediaUl);


                var lfMediaImageEndCount = Number(lfMediaImagesCount);


                // Create/Append Load More Button
                // Container
                var lfMediaLibraryLoadMoreContainer = d.createElement("DIV");
                lfMediaLibraryLoadMoreContainer.id = "lf_Media_Library_Load_More";
                lfMediaLibraryLoadMoreContainer.classList.add("lf-media-library-load-more-container");
                var lfMediaLibraryLoadMoreCount = d.createElement("P");
                lfMediaLibraryLoadMoreCount.textContent = "Showing 1 of 25 Images";
                lfMediaLibraryLoadMoreCount.classList.add("lf-media-library-count");

                // Load More
                var lfMediaLibraryLoadMoreButtonsDiv = d.createElement("DIV");
                lfMediaLibraryLoadMoreButtonsDiv.classList.add("lf-media-library-load-more-buttons-div");
                var lfMediaLibraryLoadMoreButton = d.createElement("BUTTON"); 
                lfMediaLibraryLoadMoreButton.textContent = "Load More";
                lfMediaLibraryLoadMoreButton.classList.add("lf-media-library-load-more-button");
                lfMediaLibraryLoadMoreButton.setAttribute("data-image-count", lfMediaImageEndCount);

                // Append Elements
                lfMediaLibraryLoadMoreContainer.append(lfMediaLibraryLoadMoreCount);
                lfMediaLibraryLoadMoreButtonsDiv.append(lfMediaLibraryLoadMoreButton);
                lfMediaLibraryLoadMoreContainer.append(lfMediaLibraryLoadMoreButtonsDiv);
                lfMediaLibraryFrame.append(lfMediaLibraryLoadMoreContainer);
            }


            // Displays Media Library Overlay
            var lfMediaLibraryOverlay = d.getElementById('lf_Media_Library_Overlay');
            lfMediaLibraryOverlay.style.cssText = "display:block !important;";


            // Determines Total Number of Media Items
            var i = 0;
            var e = 0;
            lfMediaLibrayUrls.forEach(function (lfMediaUrl) {
                if(lfMediaLibrayUrls[i].media_library_urls[0] == undefined){
                    e++;
                    i++;
                } else {
                    i++;
                }
            })
            var lfMaxMediaCountTotal = lfMediaLibrayUrls.length;
            var lfMediaTotalCalculation = lfMaxMediaCountTotal - e;
            lfMaxMediaCount = lfMediaTotalCalculation;
            lfMaxMediaCount;
        }
    });






    var lfCurrentMediaCount; // Global used to store current displayed media library items/images
    // Loads More Images
    var lfPreviousSelected = false;
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-media-library-load-more-button") {
            var lfCurrentMediaCount = e.target.getAttribute("data-image-count");
            var lfMediaCountNumber = Number(lfCurrentMediaCount);
            var lfMediaLibrayUrls = lfEditorData.lfMediaUrls;
            var lfMediaUl = d.getElementById('lf_Media_Ul');


            // Add Images
            var lfCurrentAccurateCount = Number(lfCurrentMediaCount) + 1;
            var lfCurrentCount = lfMediaCountNumber;
            for (var i = 0; i < 25; i++) {
                if(lfCurrentAccurateCount < lfMaxMediaCount) {
                    if(lfMediaLibrayUrls[lfCurrentCount].media_library_urls[0] === undefined){
                        i--;
                        lfCurrentCount++;
                    }
                    if(lfMediaLibrayUrls[lfCurrentCount].media_library_urls[0] !== undefined){
                        var lfMediaUrl = lfMediaLibrayUrls[lfCurrentCount].media_library_urls[0];
                        var lfMediaLi = d.createElement("LI");
                        lfMediaLi.classList.add("lf-media-li");
                        var lfMediaImg = d.createElement("IMG");
                        lfMediaImg.src = lfMediaUrl;
                        lfMediaImg.classList.add("lf-media-url");
                        lfMediaImg.setAttribute("data-media-url", lfMediaUrl);
                        lfMediaLi.append(lfMediaImg)
                        lfMediaUl.append(lfMediaLi);
                        lfCurrentCount++;
                        lfCurrentAccurateCount++;
                    } 
                }
            }


            // Create Accurate Pagination + Data Attribute Increments
            var lfMediaStartCount = lfMediaCountNumber + 1; 
            var lfMediaEndCount = lfCurrentCount + 1;
            var lfMoreMediaCount = lfMediaCountNumber + 25;


            // Add Load More Button
            var lfMediaLibraryLoadMoreContainer = d.createElement("DIV");
            lfMediaLibraryLoadMoreContainer.id = "lf_Media_Library_Load_More";
            lfMediaLibraryLoadMoreContainer.classList.add("lf-media-library-load-more-container");
            var lfMediaLibraryLoadMoreCount = d.createElement("P");
            lfMediaLibraryLoadMoreCount.classList.add("lf-media-library-count");
            var lfMediaLibraryLoadMoreButtonsDiv = d.createElement("DIV");
            lfMediaLibraryLoadMoreButtonsDiv.classList.add("lf-media-library-load-more-buttons-div");
        

            // Load More
            if(lfMoreMediaCount < lfMaxMediaCount) {
                var lfMediaLibraryLoadMoreButton = d.createElement("BUTTON"); 
                lfMediaLibraryLoadMoreButton.textContent = "Load More";
                lfMediaLibraryLoadMoreButton.id = "lf_Media_Library_Load_More";
                lfMediaLibraryLoadMoreButton.classList.add("lf-media-library-load-more-button");
                lfMediaLibraryLoadMoreButton.setAttribute("data-image-count", lfCurrentCount);
                lfMediaLibraryLoadMoreButtonsDiv.append(lfMediaLibraryLoadMoreButton);
                d.getElementById("lf_Media_Library_Load_More").remove();
                lfMediaLibraryLoadMoreCount.textContent = "Showing " + lfMediaStartCount + " of " + lfMediaEndCount + " Images";
            } else {
                d.getElementById("lf_Media_Library_Load_More").remove();
                lfMediaLibraryLoadMoreCount.textContent = "Showing All Images";
            }

            
            // Append
            lfMediaLibraryLoadMoreContainer.append(lfMediaLibraryLoadMoreCount);
            lfMediaLibraryLoadMoreContainer.append(lfMediaLibraryLoadMoreButtonsDiv);
            lfMediaUl.append(lfMediaLibraryLoadMoreContainer);
            lfCurrentMediaCount = lfMediaEndCount;
            lfCurrentMediaCount;


            // Add Scroll Offset
            var lfMediaLibraryFrame = d.getElementById("lf_Media_Library_Frame");
            lfMediaLibraryFrame.scrollBy(0, 500);

    }
})



    // Add Selected Image to Product Field
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-media-url") {

            // Add Selected Image to Product Div
            var lfMediaUrl = e.target.getAttribute("data-media-url");
            var lfGetProductDiv = d.getElementById(lfProductDiv);
            var lfSetProductImage = lfGetProductDiv.style.cssText = "background-image: url(" + lfMediaUrl + ");";


            // Set/Update Option Div with media URL
            var lfSetProductContainerUrl = lfGetProductDiv.setAttribute("data-media-url", lfMediaUrl);


            // Close media library modal
            var lfMediaLibraryOverlay = d.getElementById('lf_Media_Library_Overlay').style.cssText = "display:none;";
        }
    })


    // Hides media library modal
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-media-library-close" || e.target.className == "lf-media-library-overlay") {
            var lfMediaLibraryOverlay = d.getElementById('lf_Media_Library_Overlay');
            lfMediaLibraryOverlay.style.cssText = "display:none !important;";
            var lfMediaLibraryContainer = d.getElementById('lf_Media_Library_Container');
            lfMediaLibraryContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfMediaLibraryFrame = d.getElementById('lf_Media_Library_Frame');
            lfMediaLibraryFrame.style.cssText = "height: 74vh;";
        }
    });


    // Minimizes media library modal to desktop break point
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-media-library-minimize-media-query") {
            var lfMediaLibraryContainer = d.getElementById('lf_Media_Library_Container');
            lfMediaLibraryContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfMediaLibraryFrame = d.getElementById('lf_Media_Library_Frame');
            lfMediaLibraryFrame.style.cssText = "height: 74vh;";
        }
    });


    // Makes media librarymodal full screen 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-media-library-full-screen-media-query") {
            var lfMediaLibraryContainer = d.getElementById('lf_Media_Library_Container');
            lfMediaLibraryContainer.style.cssText = "position: fixed; top: 0px; left: 0%; height: 100%; width: 100% !important; transform: translate(0%, 0%);";
            var lfMediaLibraryFrame = d.getElementById('lf_Media_Library_Frame');
            lfMediaLibraryFrame.style.cssText = "height: calc(100vh - 50px);";
        }
    });


    //  ------------------------------------------------------------------------------------------------------------------------- LF Global Settings
    window.addEventListener('load', () => {
        // remove settings link
        const lfLikeableFormsSettingsLink = document.querySelectorAll(".lf-bottom-bar-settings-link.likeable_forms");
        for (let i = 0; i < lfLikeableFormsSettingsLink.length; i++) {
            lfLikeableFormsSettingsLink[i].style.cssText = "display:none";
        }


        // remove license key button
        var lfLikeableFormsLicenseKeyButton = d.getElementById("lf_Sidebar_License_Key_likeable_forms");
        lfLikeableFormsLicenseKeyButton.remove();
        var lfLikeableFormsLicenseKeyButton = d.getElementById("lf_View_All_License_Key_likeable_forms");
        lfLikeableFormsLicenseKeyButton.remove();
    });


    // ------------------------------------------------------------------------------------------------------------------------- LF Marketplace
    var lfMarketplaceCreated = false; // Global to prevent Re-Creating Marketplace Items
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-marketplace") {
            var lfMarketplaceIframe = d.getElementById("lf_Marketplace_Frame");
            lfMarketplaceIframe.src = "https://likeableforms.com/marketplace";


            
            if(lfMarketplaceCreated === false) {
                // Marketplace Item Ids Array
                var lfMarketplaceArrayItems = [
                    {
                        "category":"payments", 
                        "name": "Stripe", 
                        "url": "stripe", 
                        "image": "Stripe.png", 
                        "description": "Online Payment Platform."
                    },
                    {
                        "category":"payments", 
                        "name": "Paypal Braintree", 
                        "url": "braintree", 
                        "image": "Braintree.png", 
                        "description": "Global Payment Processor."
                    },
                    {
                        "category":"payments", 
                        "name":"Square", 
                        "url": "square",
                        "image": "Square.png", 
                        "description": "Online Payment Solutions."
                    },
                    {
                        "category":"esign", 
                        "name":"Dropboxsign", 
                        "url": "dropboxsign", 
                        "image": "Dropboxsign.png", 
                        "description": "Sign eSignature Agreements."
                    },
                    {
                        "category":"esign", 
                        "name":"Pandadoc", 
                        "url": "pandadoc", 
                        "image": "Pandadoc.png", 
                        "description": "eSign & Track Documents."
                    },
                    {
                        "category":"esign", 
                        "name":"Boldsign", 
                        "url": "boldsign", 
                        "image": "Boldsign.png", 
                        "description": "Electronic Signature Software."
                    },
                    {
                        "category":"crm", 
                        "name":"Help Scout", 
                        "url": "help-scout", 
                        "image": "Helpscout.png", 
                        "description": "Shared Inbox Software."
                    },
                    {
                        "category":"crm", 
                        "name":"Freshworks", 
                        "url": "freshworks", 
                        "image": "Freshworks.png", 
                        "description": "Helpdesk Ticketing Made Easy."
                    },
                    {
                        "category":"crm", 
                        "name":"Hubspot", 
                        "url": "hubspot", 
                        "image": "Hubspot.png", 
                        "description": "CRM Software for Teams."
                    },
                    {
                        "category":"crm", 
                        "name":"Zendesk", 
                        "url": "zendesk", 
                        "image": "Zendesk.png", 
                        "description": "Customer Service Solution."
                    },
                    {
                        "category":"crm", 
                        "name":"Teamwork", 
                        "url": "teamwork", 
                        "image": "Teamwork.png", 
                        "description": "Project Management Software."
                    },
                    {
                        "category":"crm", 
                        "name":"Intercom", 
                        "url": "intercom", 
                        "image": "Intercom.png", 
                        "description": "AI Customer Service."
                    },
                    {
                        "category":"crm", 
                        "name":"Zohodesk", 
                        "url": "zoho", 
                        "image": "Zohodesk.png", 
                        "description": "Customer Service Help Desk."
                    },
                    {
                        "category":"crm", 
                        "name":"Liveagent", 
                        "url": "liveagent", 
                        "image": "Liveagent.png", 
                        "description": "Customer Support Software."
                    },
                    {
                        "category":"crm", 
                        "name":"Enchant", 
                        "url": "enchant", 
                        "image": "Enchant.png", 
                        "description": "Customer Service Software."
                    },
                    {
                        "category":"email-marketing", 
                        "name":"Active Campaign", 
                        "url": "active-campaign", 
                        "image": "Active_Campaign.png", 
                        "description": "Email Marketing Automation."
                    }, 
                    {
                        "category":"email-marketing", 
                        "name":"Campaign Monitor", 
                        "url": "campaign-monitor", 
                        "image": "Campaignmonitor.png", 
                        "description": "Email Marketing Services."
                    },
                    {
                        "category":"email-marketing", 
                        "name":"Emailoctopus",
                        "url": "email-octopus", 
                        "image": "Emailoctopus.png", 
                        "description": "Email marketing Made Easy."
                        },
                    {
                        "category":"email-marketing", 
                        "name":"Getresponse", 
                        "url": "getresponse", 
                        "image": "Getresponse.png", 
                        "description": "Professional Email Marketing."
                    },
                    {
                        "category":"email-marketing", 
                        "name":"Mailchimp", 
                        "url": "mailchimp", 
                        "image": "Mailchimp.png", 
                        "description": "Email Marketing Platform."
                    },
                    {
                        "category":"email-marketing", 
                        "name":"Mailjet", 
                        "url": "mailjet", 
                        "image": "Mailjet.png", 
                        "description": "Email Delivery Service."
                    },
                    {
                        "category":"email-marketing", 
                        "name":"Mailmodo", 
                        "url": "mailmodo",
                        "image": "Mailmodo.png", 
                        "description": "Turn Emails into Experiences."
                    },
                    {
                        "category":"email-marketing", 
                        "name":"Omnisend", 
                        "url": "omnisend", 
                        "image": "Omnisend.png",
                        "description": "Email and SMS Marketing."
                        },
                    {
                        "category":"email-marketing", 
                        "name":"Sendgrid",
                        "url": "sendgrid", 
                        "image": "Sendgrid.png", 
                        "description": "Email Marketing Software."
                    },
                    {
                        "category":"email-marketing", 
                        "name":"Sendinblue", 
                        "url": "sendinblue", 
                        "image": "Sendinblue.png", 
                        "description": "Email Marketing Service."
                    },
                    {
                        "category":"smtp", 
                        "name":"Amazon", 
                        "url": "amazon", 
                        "image": "Aws.png", 
                        "description": "Amazon Simple Email Service."
                    },  
                    {
                        "category":"smtp",
                        "name": "Elastic Email", 
                        "url": "elastic-email", 
                        "image": "Elasticemail.png", 
                        "description": "Email Marketing Software."
                    },
                    {
                        "category":"smtp", 
                        "name":"Mailersend", 
                        "url": "mailersend", 
                        "image": "Mailersend.png", 
                        "description": "Email Sending Service."
                    },
                    {
                        "category":"smtp", 
                        "name":"Mailgun", 
                        "url": "mailgun", 
                        "image": "Mailgun.png", 
                        "description": "Transactional Email API Service."
                    },
                    {
                        "category":"smtp", 
                        "name":"Mailjet", 
                        "url": "mailjet", 
                        "image": "Mailjet.png", 
                        "description": "SMTP Delivery Service."
                    },
                    {
                        "category":"smtp", 
                        "name":"Mailtrap", 
                        "url": "mailtrap", 
                        "image": "Mailtrap.png", 
                        "description": "Email Delivery Platform."
                    },
                    {
                        "category":"smtp", 
                        "name":"Postmark", 
                        "url": "postmark", 
                        "image": "Postmark.png", 
                        "description": "Reliable Email Delivery Service."
                    },
                    {
                        "category":"smtp", 
                        "name":"Sendgrid ", 
                        "url": "sendgrid", 
                        "image": "Sendgrid.png", 
                        "description": "Email SMTP Service."
                    },
                    {
                        "category":"smtp", 
                        "name":"Sendinblue", 
                        "url": "sendinblue", 
                        "image": "Sendinblue.png",
                        "description": "Email SMTP Server."
                    },
                    {
                        "category":"smtp", 
                        "name":"Zeptomail", 
                        "url": "zoho", 
                        "image": "Zohomail.png", 
                        "description": "Transactional Email Service."
                    },
                    {
                        "category":"sms", 
                        "name":"Twilio", 
                        "url": "twilio", 
                        "image": "Twilio.png", 
                        "description": "Communication APIs for SMS."
                    },
                ];


                // Create + Append Marketplace Items
                var lfMarketplaceFlexContainer = d.getElementById("lf_Marketplace_Flex_Container");

                lfMarketplaceArrayItems.forEach(function (lfMarketplaceItem) {
                    var lfExtensionCategory = lfMarketplaceItem.category;
                    var lfExtensionName = lfMarketplaceItem.name;
                    var lfExtensionUrl = lfMarketplaceItem.url;
                    var lfExtensionImage = lfMarketplaceItem.image;
                    var lfExtensionDescription = lfMarketplaceItem.description;



                    var lfMarketplaceRow = d.createElement("A");
                    lfMarketplaceRow.classList.add("lf-marketplace-row");
                    lfMarketplaceRow.href = "https://likeableforms.com/extensions/" + lfExtensionCategory + "/" + lfExtensionUrl;
                    lfMarketplaceRow.target = "_blank";


                    var lfMarketplace_Ul = d.createElement("UL");
                    lfMarketplace_Ul.classList.add("lf-marketplace-ul");


                    var lfMarketplaceLi = d.createElement("LI");
                    lfMarketplaceLi.classList.add("lf-marketplace-li");


                    var lfMarketplaceIcon = d.createElement("IMG");
                    lfMarketplaceIcon.classList.add("lf-marketplace-icon");
                    lfMarketplaceIcon.src =  lfPluginDirectory + "/assets/app-icons/" + lfExtensionImage;


                    var lfMarketplaceNameCategory = d.createElement("DIV");
                    lfMarketplaceNameCategory.classList.add("lf-marketplace-name-category");


                    var lfMarketplaceTitle = d.createElement("P");
                    lfMarketplaceTitle.classList.add("lf-marketplace-title");
                    lfMarketplaceTitle.textContent = lfExtensionName;


                    var lfMarketplaceCategory = d.createElement("P");
                    lfMarketplaceCategory.classList.add("lf-marketplace-category");
                    lfMarketplaceCategory.innerText = lfExtensionCategory;


                    var lfMarketplaceDescription = d.createElement("P");
                    lfMarketplaceDescription.classList.add("lf-marketplace-description");
                    lfMarketplaceDescription.textContent = lfExtensionDescription;



                    // Append Marketplace Items
                    lfMarketplaceNameCategory.append(lfMarketplaceTitle);
                    lfMarketplaceNameCategory.append(lfMarketplaceCategory);
                    lfMarketplaceLi.append(lfMarketplaceIcon);
                    lfMarketplaceLi.append(lfMarketplaceNameCategory);
                    lfMarketplace_Ul.append(lfMarketplaceLi);
                    lfMarketplaceRow.append(lfMarketplace_Ul);
                    lfMarketplaceRow.append(lfMarketplaceDescription);
                    lfMarketplaceFlexContainer.append(lfMarketplaceRow);

                });
            lfMarketplaceCreated = true;
            lfMarketplaceCreated;
        }

           
        // Display Marketplace
        var lfMarketplaceOverlay = d.getElementById('lf_Marketplace_Overlay');
        lfMarketplaceOverlay.style.cssText = "display:block !important;";
        }
    });


    // Hides Marketplace modal/previewer 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-marketplace-close" || e.target.className == "lf-marketplace-overlay") {
            var lfMarketplaceOverlay = d.getElementById('lf_Marketplace_Overlay');
            lfMarketplaceOverlay.style.cssText = "display:none !important;";
            var lfMarketplaceContainer = d.getElementById('lf_Marketplace_Container');
            lfMarketplaceContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfMarketplaceFrame = d.getElementById('lf_Marketplace_Frame');
            lfMarketplaceFrame.style.cssText = "height: 74vh;";
        }
    });


    // Minimizes Marketplace modal to desktop break point
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-marketplace-minimize-media-query") {
            var lfMarketplaceContainer = d.getElementById('lf_Marketplace_Container');
            lfMarketplaceContainer.style.cssText = "left: 50%; width: 62.25% !important;";
            var lfMarketplaceFrame = d.getElementById('lf_Marketplace_Frame');
            lfMarketplaceFrame.style.cssText = "height: 74vh;";
        }
    });


    // Makes Marketplace modal full screen 
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-marketplace-full-screen-media-query") {
            var lfMarketplaceContainer = d.getElementById('lf_Marketplace_Container');
            lfMarketplaceContainer.style.cssText = "position: fixed; top: 0px; left: 0%; height: 100%; width: 100% !important; transform: translate(0%, 0%);";
            var lfMarketplaceFrame = d.getElementById('lf_Marketplace_Frame');
            lfMarketplaceFrame.style.cssText = "height: calc(100vh - 50px);";
        }
    });

   
})(document);
