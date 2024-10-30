(function (d) {
    "use strict";
    // Global Variables
    var dynamicDBJSON = lfCreatorData.lfJSON;
    var lfParsedData = JSON.parse(dynamicDBJSON);
    var currentFormId = lfCreatorData.formID;
    var lfDataFieldAttributesObject = [];
    var lfStringifiedDataFieldAttributes;
    var lfFormTitle = lfCreatorData.lfTitle;
    var lfFormDescription = lfCreatorData.lfDescription;
    var lfSiteIconUrl = lfCreatorData.lfIcon;
    var lfPluginDirectory = lfCreatorData.lfPluginUrl;
    var lfAssetsDirectory = lfPluginDirectory + "assets/";
    var lfFormGlobalContainer = d.getElementById("lf_Form_Global_Container_" + currentFormId);
    lfAddHeader();
    lfAddForm();
    lfCreateFields(lfParsedData);
    lfFieldLogic(lfParsedData);
    lfAddFooter();
    addSubmit();
    lfValidationResult();
    var lfNotificationsDBJSON = lfCreatorData.lfNotificationsJSON;
    var lfNotificationsParsedData = JSON.parse(lfNotificationsDBJSON);
    var fromValues = lfNotificationsParsedData.FromValues;
    var toValues = lfNotificationsParsedData.ToValues;
    var replyToValues = lfNotificationsParsedData.ReplyToValues;
    var bccValues = lfNotificationsParsedData.BccValues;
    var subjectValues = lfNotificationsParsedData.SubjectValues;
    var bodyValues = lfNotificationsParsedData.BodyValues;
    var fileValues = lfNotificationsParsedData.FileValues;
    var lfFormSubmitted = false;
    


    // Add Header
    function lfAddHeader() {
        var lfForm = d.getElementById("lf_Form_Container_" + currentFormId);
        var lfHeader = d.createElement("DIV");
        lfHeader.classList.add("lf-header");
        lfHeader.id = "lf_Header";


        var lfHeaderIcon = d.createElement("IMG");
        lfHeaderIcon.id = "lf_Header_Icon_" + currentFormId;
        lfHeaderIcon.classList.add("lf-header-icon");
        lfHeaderIcon.src = lfSiteIconUrl;


        var lfCurrentFormTitle = d.createElement("P");
        lfCurrentFormTitle.classList.add("lf-form-title");
        lfCurrentFormTitle.textContent = lfFormTitle;
        

        var lfCurrentFormDescription = d.createElement("P");
        lfCurrentFormDescription.classList.add("lf-form-description");
        lfCurrentFormDescription.textContent = lfFormDescription;


        lfHeader.append(lfHeaderIcon);
        lfHeader.append(lfCurrentFormTitle);
        lfHeader.append(lfCurrentFormDescription);
        lfFormGlobalContainer.append(lfHeader);


        var lfSuccessMessage = "processing...";
        var lfSuccessText = lfSuccessMessage;
        var lfHeader = d.getElementById('lf_Header');
        var lfAlertContainer = d.createElement("DIV");
        lfAlertContainer.id = "lf_Alert_Container";
        lfAlertContainer.style.cssText = "display: none";
        var lfAlertText = d.createElement("text");
        lfAlertText.id = "lf_Alert_Text";
        lfAlertText.textContent = lfSuccessText;
        lfAlertContainer.classList.add("lf-alert-container");
        lfAlertText.classList.add("lf-alert-text");
        lfAlertContainer.append(lfAlertText);
        lfHeader.append(lfAlertContainer);
    }


    // Add Form
    function lfAddForm(){
        var lfForm = d.createElement("FORM");
        lfForm.id = "lf_Form_Container_" + currentFormId;
        lfForm.setAttribute("data-id", currentFormId);
        lfForm.enctype = "multipart/form-data";
        lfFormGlobalContainer.append(lfForm);
    }


    function lfCreateFields(lfParsedData) {
        const lfAllSavedFieldsParsedData = lfParsedData;
        lfAllSavedFieldsParsedData.forEach(function (lfSavedFieldData) {
            var lfFieldTypes = lfSavedFieldData.fieldType;

            switch (lfFieldTypes) {
                case "lfAddEmail":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddEmail(lfCreatorData);
                    break;

                case "lfAddTextarea":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddTextarea(lfCreatorData);
                    break;

                case "lfAddPass":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddPass(lfCreatorData);
                    break;

                case "lfAddText":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddText(lfCreatorData);
                    break;

                case "lfAddFile":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddFile(lfCreatorData);
                    break;

                case "lfAddNumber":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddNumber(lfCreatorData);
                    break;

                case "lfAddDate":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddDate(lfCreatorData);
                    break;

                case "lfAddRadio":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddRadio(lfCreatorData);
                    break;

                case "lfAddCheckbox":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddCheckbox(lfCreatorData);
                    break;

                case "lfAddPhone":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddPhone(lfCreatorData);
                    break;

                case "lfAddUrl":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddUrl(lfCreatorData);
                    break;

                case "lfAddFiles":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddFiles(lfCreatorData);
                    break;

                case "lfAddDropdown":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddDrop(lfCreatorData);
                    break;

                case "lfAddSingleProduct":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddSingleProduct(lfCreatorData);
                    break;

                case "lfAddMultipleProducts":
                    var lfCreatorData = lfSavedFieldData;
                    lfAddMultipleProducts(lfCreatorData);
                    break;
            }
        })
    }


    // Creates Email Field
    function lfAddEmail(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("LEGEND");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddEmail");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "email");
        inputField.setAttribute("inputmode", "email");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-input");
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
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
           fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Textarea Field
    function lfAddTextarea(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("LEGEND");
        var inputField = d.createElement("TEXTAREA");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddTextarea");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "textarea");
        inputField.setAttribute("rows", "5");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
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
    function lfAddPass(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("LEGEND");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddPass");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "password");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-input");
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
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
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
    function lfAddText(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("LEGEND");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddText");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "text");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
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
    function lfAddFile(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddFile");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.style.cssText = "margin-bottom: 26px";


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "file");
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-input");
        inputField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-add-file-icon.png" + ");";
        inputField.setAttribute("name", lfCreatorData.currentIncrement);
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
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
    function lfAddNumber(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddNumber");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "number");
        inputField.setAttribute("inputmode", "numeric");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("min", lfCreatorData.min);
        inputField.setAttribute("max", lfCreatorData.max);
        inputField.classList.add("lf-input");
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
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
        helperText.textContent = lfCreatorData.helperContent;
        helperText.contentEditable = "false";


        fieldLabelContainer.append(editingText);
        fieldContainer.append(fieldLabelContainer);
        fieldContainer.append(inputField);
        fieldContainer.append(helperText);


        var lfHidden = lfCreatorData.hidden;
        lfAddField(fieldContainer, lfHidden);
    }


    // Creates Date Field
    function lfAddDate(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddDate");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "date");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
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
    function lfAddRadio(lfCreatorData) {
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfRequiredSet;


        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddRadio");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", "Radio");


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;


        var fieldLabelContainer = d.createElement("DIV");
        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        var editingText = d.createElement("P");
        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        if (lfCreatorData.required === "true") {
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        var radioFieldUl = d.createElement("ul");
        radioFieldUl.id = 'lf_Ul_Container_' + currentIncrement;
        radioFieldUl.classList.add("lf-input-radio-ul");
        radioFieldUl.setAttribute("data-increment", currentIncrement);

        var helperText = d.createElement("TEXT");
        helperText.id = "lf_Field_Description_" + currentIncrement;
        helperText.classList.add("lf-field-description");
        helperText.textContent = lfCreatorData.helperContent;


        // Re-Creates Radio Options
        var lfRadioLabels = lfCreatorData.radioLabels;
        lfRadioLabels.forEach(function (lfRadioLabel) {
            var lfRowId = lfRadioLabel.radioCount;
            var lfCurrentRadioLabel = lfRadioLabel.radioLabel;
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
            radioInput.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
            radioInput.setAttribute("data-lf-row-id", currentIncrement + "_" + lfRowId);
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
            radioLabel.id = "lf_Radio_Label_Option_" + currentIncrement + "_" + lfRowId;
            radioLabel.htmlFor = "lf_input_" + currentIncrement + "_" + lfRowId;
            radioLabel.classList.add("lf-radio-label");
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
    function lfAddCheckbox(lfCreatorData) {
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfRequiredSet;

        
        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddCheckbox");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", "Checkbox");


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;


        var fieldLabelContainer = d.createElement("DIV");
        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        var editingText = d.createElement("P");
        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        if (lfCreatorData.required === "true") {
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }

        var checkboxFieldUl = d.createElement("ul");
        checkboxFieldUl.id = 'lf_Ul_Container_' + currentIncrement;
        checkboxFieldUl.classList.add("lf-input-checkbox-ul");
        checkboxFieldUl.setAttribute("data-increment", currentIncrement);

        var helperText = d.createElement("TEXT");
        helperText.id = "lf_Field_Description_" + currentIncrement;
        helperText.classList.add("lf-field-description");
        helperText.textContent = lfCreatorData.helperContent;


        // Re-Creates Checkbox Options
        var lfCheckboxLabels = lfCreatorData.checkboxLabels;
        lfCheckboxLabels.forEach(function (lfCheckboxLabel) {
            var lfRowId = lfCheckboxLabel.checkboxCount;
            var lfCurrentCheckboxLabel = lfCheckboxLabel.checkboxLabel;
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
            checkboxInput.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
            checkboxInput.setAttribute("data-lf-row-id", currentIncrement + "_" + lfRowId);
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
            checkboxLabel.id = "lf_Checkbox_Label_Option_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.htmlFor = "lf_input_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.classList.add("lf-checkbox-label");
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
    function lfAddPhone(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddPhone");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "phone");
        inputField.setAttribute("inputmode", "tel");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-input");
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
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
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
    function lfAddUrl(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddUrl");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "url");
        inputField.setAttribute("inputmode", "url");
        inputField.setAttribute("autocomplete", "on");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.setAttribute("minLength", lfCreatorData.min);
        inputField.setAttribute("maxLength", lfCreatorData.max);
        inputField.classList.add("lf-input");
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
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
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
    function lfAddFiles(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddFiles");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.style.cssText = "margin-bottom: 26px";


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "file");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement); 
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-input");
        inputField.style.cssText = "background-image: url(" + lfAssetsDirectory + "lf-add-files-icon.png" + ");";
        inputField.multiple = "true";
        inputField.setAttribute("name", lfCreatorData.currentIncrement);
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
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
    function lfAddDrop(lfCreatorData) {
        var fieldContainer = d.createElement("DIV");
        var fieldLabelContainer = d.createElement("DIV");
        var fieldLabel = d.createElement("Label");
        var inputField = d.createElement("INPUT");
        var helperText = d.createElement("TEXT");
        var editingText = d.createElement("P");


        fieldContainer.id = "lf_Field_Container_" + lfCreatorData.currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", lfCreatorData.currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddDropdown");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);


        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        fieldLabel.textContent = lfCreatorData.labelContent;
        fieldLabel.htmlFor = "lf_Input_" + lfCreatorData.currentIncrement;
        fieldLabel.id = "lf_Field_Label_" + lfCreatorData.currentIncrement;
        fieldLabel.contentEditable = "false";
        fieldLabel.classList.add("lf-field-label");


        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        inputField.setAttribute("type", "text");
        inputField.setAttribute("autocomplete", "off");
        inputField.setAttribute("readonly", "true");
        inputField.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
        inputField.setAttribute("data-field-type", "lfDrop");
        inputField.style.cssText = "cursor: pointer; box-shadow: none !important";
        inputField.id = "lf_Input_" + lfCreatorData.currentIncrement;
        inputField.classList.add("lf-input");
        inputField.placeholder = lfCreatorData.placeholder;
        if (lfCreatorData.value !== "pending generation") {
            inputField.value = lfCreatorData.value;
        } 
        if (lfCreatorData.required === "true") {
            inputField.required = "true";
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        // Dropdown Option Ul
        var lfDropInputUl = d.createElement("UL");
        lfDropInputUl.id = "lf_Drop_Input_Ul_" + lfCreatorData.currentIncrement;
        lfDropInputUl.classList.add("lf-select-ul");



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
            lfDropInputLi.classList.add("lf-select-option");
            lfDropInputLi.textContent = lfdropLabel.dropLabel;
            lfDropInputLi.setAttribute("data-drop-id", lfCreatorData.currentIncrement);
            lfDropInputUl.append(lfDropInputLi); 
        })


        helperText.id = "lf_Field_Description_" + lfCreatorData.currentIncrement;
        helperText.classList.add("lf-field-description");
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
    function lfAddSingleProduct(lfCreatorData) {
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfRequiredSet;


        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddSingleProduct");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", "Radio");
        fieldContainer.style.cssText = "margin-bottom: 26px";


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;


        var fieldLabelContainer = d.createElement("DIV");
        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        var editingText = d.createElement("P");
        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        if (lfCreatorData.required === "true") {
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }


        var radioFieldUl = d.createElement("ul");
        radioFieldUl.id = "lf_Ul_Container_" + currentIncrement;
        radioFieldUl.classList.add("lf-input-single-product-ul");
        radioFieldUl.setAttribute("data-increment", currentIncrement);


        // Re-Creates Radio Options
        var lfRadioLabels = lfCreatorData.radioLabels;
        lfRadioLabels.forEach(function (lfRadioLabel) {
            var lfRowId = lfRadioLabel.radioCount;
            var lfCurrentRadioLabel = lfRadioLabel.radioLabel;
            var lfRadioChecked = lfRadioLabel.radioChecked;


            var radioFieldli = d.createElement("li");
            radioFieldli.id = "lf_Li_" + currentIncrement + "_" + lfRowId;
            radioFieldli.classList.add("lf-input-single-product-li");
            radioFieldli.setAttribute("data-increment", lfRowId);
            radioFieldli.style.cssText = "background-image: url(" + lfRadioLabel.radioImage + ");";


            var radioInput = d.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.id = "lf_input_" + currentIncrement + "_" + lfRowId;
            radioInput.classList.add("lf-input-single-product-radio");
            radioInput.setAttribute("name", "lf_radio_group_" + currentIncrement);
            radioInput.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
            radioInput.setAttribute("data-lf-row-id", currentIncrement + "_" + lfRowId);
            radioInput.setAttribute("data-lf-price-id", currentIncrement + "_" + lfRowId);
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
            radioLabel.id = "lf_Radio_Label_Option_" + currentIncrement + "_" + lfRowId;
            radioLabel.htmlFor = "lf_input_" + currentIncrement + "_" + lfRowId;
            radioLabel.classList.add("lf-single-product-label");


            var radioPrice = d.createElement("P");
            radioPrice.id = "lf_Price_" + currentIncrement + "_" + lfRowId;
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
    function lfAddMultipleProducts(lfCreatorData) {
        var currentIncrement = lfCreatorData.currentIncrement;
        var lfRequiredSet;

        var fieldContainer = d.createElement("DIV");
        fieldContainer.draggable = false;
        fieldContainer.id = "lf_Field_Container_" + currentIncrement;
        fieldContainer.classList.add("lf-field-container");
        fieldContainer.setAttribute("data-increment", currentIncrement);
        fieldContainer.setAttribute("data-field-type", "lfAddMultipleProducts");
        fieldContainer.setAttribute("data-required", lfCreatorData.required);
        fieldContainer.setAttribute("data-hidden", lfCreatorData.hidden);
        fieldContainer.setAttribute("data-placeholder", "Checkbox");
        fieldContainer.style.cssText = "margin-bottom: 26px";


        var fieldLabel = d.createElement("Label");
        fieldLabel.id = "lf_Field_Label_" + currentIncrement;
        fieldLabel.classList.add("lf-field-label");
        fieldLabel.textContent = lfCreatorData.labelContent;


        var fieldLabelContainer = d.createElement("DIV");
        fieldLabelContainer.classList.add("lf-flex-label-container");
        fieldLabelContainer.append(fieldLabel);


        var editingText = d.createElement("P");
        editingText.id = "lf_Editing_Text_" + lfCreatorData.currentIncrement;
        editingText.classList.add("lf-editing-text");
        editingText.textContent = "editing •";


        if (lfCreatorData.required === "true") {
            var lfRequiredText = d.createElement("P");
            lfRequiredText.classList.add("lf-required");
            lfRequiredText.textContent = "(required)";
            fieldLabelContainer.append(lfRequiredText);
        }

        var checkboxFieldUl = d.createElement("ul");
        checkboxFieldUl.id = "lf_Ul_Container_" + currentIncrement;
        checkboxFieldUl.classList.add("lf-input-multiple-products-ul");
        checkboxFieldUl.setAttribute("data-increment", currentIncrement);


        // Re-Creates Checkbox Options
        var lfCheckboxLabels = lfCreatorData.checkboxLabels;
        lfCheckboxLabels.forEach(function (lfCheckboxLabel) {
            var lfRowId = lfCheckboxLabel.checkboxCount;
            var lfCurrentCheckboxLabel = lfCheckboxLabel.checkboxLabel;
            var lfCheckboxChecked = lfCheckboxLabel.checkboxChecked;


            var checkboxFieldli = d.createElement("li");
            checkboxFieldli.id = "lf_Li_" + currentIncrement + "_" + lfRowId;
            checkboxFieldli.classList.add("lf-input-multiple-products-li");
            checkboxFieldli.setAttribute("data-increment", lfRowId);
            checkboxFieldli.style.cssText = "background-image: url(" + lfCheckboxLabel.checkboxImage + ");";


            var checkboxInput = d.createElement("INPUT");
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.id = "lf_input_" + currentIncrement + "_" + lfRowId;
            checkboxInput.classList.add("lf-input-multiple-products-checkbox");
            checkboxInput.setAttribute("name", "lf_checkbox_group_" + currentIncrement);
            checkboxInput.setAttribute("data-lf-field-id", lfCreatorData.currentIncrement);
            checkboxInput.setAttribute("data-lf-row-id", currentIncrement + "_" + lfRowId);
            checkboxInput.setAttribute("data-lf-price-id", currentIncrement + "_" + lfRowId);
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
            checkboxLabel.id = "lf_Checkbox_Label_Option_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.htmlFor = "lf_input_" + currentIncrement + "_" + lfRowId;
            checkboxLabel.classList.add("lf-multiple-products-label");


            var checkboxPrice = d.createElement("P");
            checkboxPrice.id = "lf_Price_" + currentIncrement + "_" + lfRowId;
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
        if (lfHidden === "false") {
            d.getElementById('lf_Form_Container_' + currentFormId).append(fieldContainer);
        } else {
            d.getElementById('lf_Form_Container_' + currentFormId).append(fieldContainer);
            fieldContainer.style.cssText = "display:none";
        }
    }


    function lfAddFooter() {
        var lfFooter = d.createElement("DIV");
        lfFooter.classList.add("lf-footer");
        lfFooter.id = "lf_Footer";
        lfFormGlobalContainer.append(lfFooter);
    }


    // Creates and Places Submit Button 
    function addSubmit() {
        var submitButton = d.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.classList.add("lf-submit-button");
        submitButton.id = "lf_Submit_Button_" + currentFormId;
        submitButton.setAttribute("form", "lf_Form_Container_" + currentFormId)
        let lfFooter = document.getElementById('lf_Footer');
        lfFooter.append(submitButton);
    }


    // Add Form Comment
    var lfPoweredBy = d.createComment("Powered by Likeable Forms");
    var lfFormParentElement = d.getElementById('lf_Form_Global_Container_' + currentFormId);
    lfFormParentElement.parentNode.insertBefore(lfPoweredBy, lfFormParentElement);



    // ------------------------------------------------------------------------------------------------------------------------- LF Submit
    var lfDataBody; // Global for Notifications Body
    bodyValues.forEach(function (bodyvalue) {
        lfDataBody = bodyvalue.body;
        lfDataBody;
    })


    var data = new FormData();
    var lfSubmitButton = d.getElementById('lf_Form_Container_' + currentFormId);
    lfSubmitButton.addEventListener('submit', function (e) {
        if(lfFormSubmitted === false) {


            // Temp Disable Submit
            lfDisableSubmit();
            e.preventDefault();


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
                } else if (fieldType === "lfAddFile") {
                    lfGrabFileFieldData(e);
                } else if (fieldType === "lfAddFiles") {
                    lfGrabFilesFieldData(e);
                } else if (fieldType === "lfAddSingleProduct") {
                    lfGrabRadioFieldData(e);
                } else if (fieldType === "lfAddMultipleProducts") {
                    lfGrabCheckboxFieldData(e);
                } else {


                    // Set Default Value if Input Value is Empty
                    var lfIsInputEmpty = d.getElementById('lf_Input_' + dataAttribute).value;
                    if (lfIsInputEmpty !== "") {
                        // Grab input value text
                        var inputValue = d.getElementById('lf_Input_' + dataAttribute).value;
                    } else {
                        var inputValue = "N/A";
                    }


                    // Grab required attribute
                    var requiredAttribute = e.getAttribute('data-required');
                    // Grab field label text content
                    var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
                    // Grab Current Month
                    var currentMonth = new Date().toLocaleDateString();
                    // Grab Current Time
                    var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: "2-digit" });


                    // Replace Dynamic Data Tag With Value
                    var lfDynamicDataTag = "{" + fieldLabelText + ":" + dataAttribute + "}";
                    lfDataBody = lfDataBody.replaceAll(lfDynamicDataTag, inputValue);
                    lfDataBody;



                    // Build field data object
                    const lfFieldDataAttributes = {
                        fieldType: fieldType,
                        currentIncrement: dataAttribute,
                        currentCounter: dataAttribute,
                        required: requiredAttribute,
                        labelContent: fieldLabelText,
                        value: inputValue,
                        month: currentMonth,
                        time: currentTime,
                    };


                    // Add object to lfFieldDataAttributes
                    lfDataFieldAttributesObject.push(lfFieldDataAttributes);
                }


                // Stringify object and update global
                lfStringifiedDataFieldAttributes = JSON.stringify(lfDataFieldAttributesObject);
                lfStringifiedDataFieldAttributes;
            });



            // Create FormData
            data.append('action', 'lffes_save_form_submission');
            data.append('_ajax_nonce', lfCreatorData.lfNonce);
            data.append('lfdatatosend', lfStringifiedDataFieldAttributes);
            data.append('lfformid', currentFormId);
            data.append('lfformtitle', lfFormTitle);


            // Add Array of File Names to Form Data 
            for (var i = 0; i < lfArrayofFileNames.length; i++) {
                data.append('lfarrs[]', lfArrayofFileNames[i]);
            }
        


            // Fetch Post Data
            fetch(lfCreatorData.ajax_url, {
                method: "POST",
                credentials: 'same-origin',
                body: data,
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                if(data.error_found === false) {
                    var lfValidationInput = d.getElementById("lf_Validation_Input");
                    lfValidationInput.setAttribute("data-form-data", lfStringifiedDataFieldAttributes);
                    var lfValidationResponse = "Passed Validation";
                    lfValidationComplete(lfValidationResponse);
                    var lfNotificationsAttachments = data.attachment_urls;
                    lfSaveNotifications(lfNotificationsAttachments);
                    lfFormSubmitted = true;
                    lfFormSubmitted;
                } else {
                    var lfValidationResponse = "Failed Validation";
                    lfValidationComplete(lfValidationResponse);
                    var lfErrorMessage = data.error_message;
                    lfFormSubmitted = false;
                    lfFormSubmitted;
                    lfReEnableSubmit();
                    if(lfErrorMessage === "Field Errors") {
                        var lfFieldErrors = data.field_errors;
                        lfDisplayFieldErrors(lfFieldErrors);
                        data = new FormData();
                    } else {
                        alert(lfErrorMessage);
                        data = new FormData();
                    }

                }
            })
        }
    });



    function lfGrabRadioFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        // Grab Current Month
        var currentMonth = new Date().toLocaleDateString();
        // Grab Current Time
        var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: "2-digit" });
        // Grab Radio Group Name
        var lfRadioGroupName = d.getElementsByName('lf_radio_group_' + dataAttribute);
        // Store Radio Input Value for Selected Radio Input Value
        var inputValue = "N/A";
        // Grab Selected Input Increment
        var selectedId = "N/A";
        lfRadioGroupName.forEach(function (lfRadioGroup) {
            var lfCurrentRadioId = lfRadioGroup.id;
            // Grab selected radio input value
            var lfCurrentRadioSelected = d.getElementById(lfCurrentRadioId);
            if (lfCurrentRadioSelected.checked) {
                inputValue = d.getElementById(lfCurrentRadioId).value;
                inputValue;
                selectedId = d.getElementById(lfCurrentRadioId).getAttribute("data-lf-row-id");
                selectedId;
            }
        })
        

        // Replace Dynamic Data Tag With Value
        var lfDynamicDataTag = "{" + fieldLabelText + ":" + dataAttribute + "}";
        lfDataBody = lfDataBody.replaceAll(lfDynamicDataTag, inputValue);
        lfDataBody;


        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            labelContent: fieldLabelText,
            value: inputValue,
            checkedValue: selectedId,
            month: currentMonth,
            time: currentTime,
        };
        // Add object to lfFieldDataAttributes
        lfDataFieldAttributesObject.push(lfFieldDataAttributes);
    }


    function lfGrabCheckboxFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        // Grab Current Month
        var currentMonth = new Date().toLocaleDateString();
        // Grab Current Time
        var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: "2-digit" });
        // Grab Checkbox Group Name
        var lfCheckboxGroupName = d.getElementsByName('lf_checkbox_group_' + dataAttribute);
        // Store Checkbox Input Value(s) for Selected Checkboxes
        var inputValuesArray = [];
        // Grab Selected Input Increment
        var checkboxRowIdsArray = [];
        lfCheckboxGroupName.forEach(function (lfCheckboxGroup) {
            var lfCurrentCheckboxId = lfCheckboxGroup.id;
            // Grab selected checkbox input value(s)
            var lfCurrentCheckboxSelected = d.getElementById(lfCurrentCheckboxId);
            if (lfCurrentCheckboxSelected.checked) {
                var lfCurrentInputValue = d.getElementById(lfCurrentCheckboxId).value;
                inputValuesArray.push(lfCurrentInputValue);
                var lfCurrentCheckboxRowId = d.getElementById(lfCurrentCheckboxId).getAttribute("data-lf-row-id");
                checkboxRowIdsArray.push(lfCurrentCheckboxRowId);
            }
        })
        let inputValue = inputValuesArray.join(", ");
        let selectedIds = checkboxRowIdsArray.join(", ");


        // Replace Dynamic Data Tag With Value
        var lfDynamicDataTag = "{" + fieldLabelText + ":" + dataAttribute + "}"; 
        lfDataBody = lfDataBody.replaceAll(lfDynamicDataTag, inputValue);
        lfDataBody;


        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            labelContent: fieldLabelText,
            value: inputValue,
            checkedValues: selectedIds,
            month: currentMonth,
            time: currentTime,
        };
        // Add object to lfFieldDataAttributes
        lfDataFieldAttributesObject.push(lfFieldDataAttributes);
    }


    var lfArrayofFileNames = []; // Global variable store file names/increments
    function lfGrabFileFieldData(e) {
        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        // Grab Current Month
        var currentMonth = new Date().toLocaleDateString();
        // Grab Current Time
        var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: "2-digit" });

        // Add File Field Name to Global Array (1)
        lfArrayofFileNames.push(dataAttribute);


        // Add File Contents to Form Data (2)
        var lfFileInput = d.getElementById('lf_Input_' + dataAttribute);
        var lfFile = lfFileInput.files[0];
        data.append("multifiles[]", lfFile);



        // File Data
        var lfFileData = [];
        if (lfFile !== undefined) {
            var lfFileName = d.getElementById('lf_Input_' + dataAttribute).files[0].name;
            var lfFileSize = d.getElementById('lf_Input_' + dataAttribute).files[0].size;
            var lfFileType = d.getElementById('lf_Input_' + dataAttribute).files[0].type;
            var lfFileDataArray = {
                fileName: lfFileName,
                fileSize: lfFileSize,
                fileType: lfFileType
            }
            lfFileData.push(lfFileDataArray);
        }



        // Set Default Value if Input Value is Empty
        if (lfFile !== undefined) {
            var inputValue = lfFile.name;
        } else {
            var inputValue = "N/A";
        }

        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            labelContent: fieldLabelText,
            value: inputValue,
            fileValue: lfFileData,
            month: currentMonth,
            time: currentTime,
        };
        // Add object to lfFieldDataAttributes
        lfDataFieldAttributesObject.push(lfFieldDataAttributes);
    }


    function lfGrabFilesFieldData(e) { // Grabs all files for multi-files upload

        var dataAttribute = e.getAttribute('data-increment');
        var lfFileInput = d.getElementById('lf_Input_' + dataAttribute);
        var lfFile = lfFileInput.files[0];
        var lfFileName;
        var inputValue;


        // Grab field Id
        var dataAttribute = e.getAttribute('data-increment');
        // Grab field type 
        var fieldType = e.getAttribute('data-field-type');
        // Grab required attribute
        var requiredAttribute = e.getAttribute('data-required');
        // Grab field label text content
        var fieldLabelText = d.getElementById('lf_Field_Label_' + dataAttribute).textContent;
        // Grab Current Month
        var currentMonth = new Date().toLocaleDateString();
        // Grab Current Time
        var currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: "2-digit" });



        // Grab All Files -- Append to Form Data
        // Add File Field Name to Global Array (1)
        var lfFileData = [];
        var ins = d.getElementById('lf_Input_' + dataAttribute).files.length;
        for (var x = 0; x < ins; x++) {
            data.append("multifiles[]", d.getElementById('lf_Input_' + dataAttribute).files[x]);
            data.append("filename[]", d.getElementById('lf_Input_' + dataAttribute).files[x].name);
            lfFileName = d.getElementById('lf_Input_' + dataAttribute).files[x].name;
            lfFileName;
            lfArrayofFileNames.push(dataAttribute);


            // File Data
            var lfCurrentFileName = d.getElementById('lf_Input_' + dataAttribute).files[x].name;
            var lfFileSize = d.getElementById('lf_Input_' + dataAttribute).files[x].size;
            var lfFileType = d.getElementById('lf_Input_' + dataAttribute).files[x].type;
            var lfFileDataArray = {
                fileName: lfCurrentFileName,
                fileSize: lfFileSize,
                fileType: lfFileType
            }
            lfFileData.push(lfFileDataArray);

        }


        // Set Default Value if Input Value is Empty
        if (lfFile !== undefined) {
            inputValue = lfFileName;
        } else {
            inputValue = "N/A";
        }


        // Build field data object
        const lfFieldDataAttributes = {
            fieldType: fieldType,
            currentIncrement: dataAttribute,
            currentCounter: dataAttribute,
            required: requiredAttribute,
            labelContent: fieldLabelText,
            value: inputValue,
            fileValue: lfFileData,
            month: currentMonth,
            time: currentTime,
        };
        // Add object to lfFieldDataAttributes
        lfDataFieldAttributesObject.push(lfFieldDataAttributes);
    }


    // Display Form Validation Errors
    function lfDisplayFieldErrors(lfFieldErrors){
        lfFieldErrors.forEach(function (lfFieldError) {
            var lfFieldId = lfFieldError.fieldId;
            var lfFieldType = lfFieldError.fieldType;
            var lfError = lfFieldError.fieldError;

            var lfErrorText = d.createElement("P");lfErrorText.textContent = lfError;lfErrorText.style.cssText = "font-size: 13px;color: red;width: fit-content;margin: 5px 0px 0px;padding-left: 0px;padding-right: 0px;";

            var lfFieldContainer = d.getElementById('lf_Field_Container_' + lfFieldId);
            var lfFieldDescription = d.getElementById('lf_Field_Description_' + lfFieldId);
            lfFieldContainer.insertBefore(lfErrorText, lfFieldDescription);

            if(lfFieldType === "lfAddRadio") {
                var lfOptions = lfFieldContainer.querySelectorAll('.lf-input-radio-li');             
                lfOptions.forEach(function (lfOption) {
                    lfOption.style.cssText = "background-color: #fff5f4 !important; border-color: red !important;";
                })
            } else if(lfFieldType === "lfAddCheckbox") {
                var lfOptions = lfFieldContainer.querySelectorAll('.lf-input-checkbox-li');             
                lfOptions.forEach(function (lfOption) {
                    lfOption.style.cssText = "background-color: #fff5f4 !important; border-color: red !important;";
                })
            } else if(lfFieldType === "lfAddMultipleProducts"){
                var lfOptions = lfFieldContainer.querySelectorAll('.lf-input-single-product-li');             
                lfOptions.forEach(function (lfOption) {
                    lfOption.style.cssText = "background-color: #fff5f4 !important; border-color: red !important;";
                })
            } else if(lfFieldType === "lfAddSingleProduct") {
                var lfOptions = lfFieldContainer.querySelectorAll('.lf-input-multiple-products-li');             
                lfOptions.forEach(function (lfOption) {
                    lfOption.style.cssText = "background-color: #fff5f4 !important; border-color: red !important;";
                })
            } else {
                var lfGetInput = d.getElementById("lf_Input_" + lfFieldId);
                lfGetInput.style.cssText = "background-color: #fff5f4 !important; border-color: red !important;";
            }

        })
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Notifications
    var lfAttachmentUrlsObject = []; // Global variable to store isolated file names
    function lfSaveNotifications(lfNotificationsAttachments) {


            // Loops through Notifications Data
            // Grabs Notifications From: Email Address
            var lfDataFrom;
            fromValues.forEach(function (fromvalue) {
                lfDataFrom = fromvalue.from;
                lfDataFrom;
            })
            var lfFrom = lfDataFrom;


            // Grabs Notifications To: Email Addresses
            var lfDataToValuesArray = [];
            toValues.forEach(function (tovalue) {
                var toEmailFieldId = tovalue.id;
                var toEmailFieldValue = d.getElementById('lf_Input_' + toEmailFieldId).value;
                lfDataToValuesArray.push(toEmailFieldValue);
            })
            let lfDataTo = JSON.stringify(lfDataToValuesArray);


            // Grabs Notifications Reply-To: Email Address
            var lfDataReplyTo;
            replyToValues.forEach(function (replytovalue) {
                lfDataReplyTo = replytovalue.replyto;
                lfDataReplyTo;
            })
            var lfReplyto = lfDataReplyTo;


            // Grabs Notifications Bcc: Email Addresses
            var lfDataBccValuesArray = [];
            bccValues.forEach(function (bccvalue) {
                var bccEmailFieldId = bccvalue.id;
                var bccEmailFieldValue = d.getElementById('lf_Input_' + bccEmailFieldId).value;
                lfDataBccValuesArray.push(bccEmailFieldValue);
            })
            let lfDataBcc = JSON.stringify(lfDataBccValuesArray);


            // Grabs Notifications Subject: Subject
            var lfDataSubject;
            subjectValues.forEach(function (subjectvalue) {
                lfDataSubject = subjectvalue.subject;
                lfDataSubject;
            })


            // Update Non-Field Associated Dynamic Data Tags ie. Timestamp, Date, User-Agent
            // Local Timestamp
            var lfCurrentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: "2-digit" });
            lfDataBody = lfDataBody.replaceAll('{Local Timestamp}', lfCurrentTime);
            lfDataBody;


            // Current Date
            var lfCurrentDate = new Date().toLocaleDateString();
            lfDataBody = lfDataBody.replaceAll('{Current Date}', lfCurrentDate);
            lfDataBody;


            // Current URL
            var lfCurrentUrl = d.URL;
            lfDataBody = lfDataBody.replaceAll('{Current URL}', lfCurrentUrl);
            lfDataBody;


            // Local Language
            var lfCurrentLanguage = navigator.language;
            lfDataBody = lfDataBody.replaceAll('{Local Language}', lfCurrentLanguage);
            lfDataBody;


            // User Agent
            var lfCurrentLanguage = navigator.userAgent;
            lfDataBody = lfDataBody.replaceAll('{User Agent}', lfCurrentLanguage);
            lfDataBody;


            // Referrer URL
            var lfCurrentReferrer = d.referrer;
            lfDataBody = lfDataBody.replaceAll('{Referrer URL}', lfCurrentReferrer);
            lfDataBody;


            // Grab File Url -- isolate file name -- pass into global object
            var lfParsedAttachmentUrls = JSON.parse(lfNotificationsAttachments);
            lfParsedAttachmentUrls.forEach(function (lfurl) {
                var lfParsedUrl = lfurl.attachmentUrl;
                var lfCurrentUrl = lfParsedUrl;
                let url = new URL(lfCurrentUrl);
                var urlorigin = url.origin;
                var lfCurrentFileName = lfCurrentUrl.replace('wp-content/plugins/', '');
                var lfCurrentFileNameMinusOrigin = lfCurrentFileName.replace(urlorigin, '');
                var lfString = lfCurrentFileNameMinusOrigin;
                const lfAttachmentUrlsData = {
                    lfattachmenturl: lfString,
                };
                lfAttachmentUrlsObject.push(lfAttachmentUrlsData);
            })



            // Grab boolean value to determine if file uploads should be sent as attachments
            var lfDataFile;
            fileValues.forEach(function (filevalue) {
                lfDataFile = filevalue.file;
                lfDataFile;
            })


            if (lfDataFile === "false") {
                lfAttachmentUrlsObject = [];
                lfAttachmentUrlsObject;
            } else {
                // return
            }
            var lfStringifiedAttachmentUrls = JSON.stringify(lfAttachmentUrlsObject);


            // Create Form Data for Notifications
            data = new FormData();
            data.append('action', 'lffes_send_outgoing_form_notifications');
            data.append('_ajax_nonce', lfCreatorData.lfNonce);
            data.append('lfdatafrom', lfFrom);
            data.append('lfdatato', lfDataTo);
            data.append('lfdatareplyto', lfReplyto);
            data.append('lfdatabcc', lfDataBcc);
            data.append('lfdatasubject', lfDataSubject);
            data.append('lfdatabody', lfDataBody);
            data.append('lfdataattachmenturls', lfStringifiedAttachmentUrls);
            

            fetch(lfCreatorData.ajax_url, {
                method: "POST",
                credentials: 'same-origin',
                body: data,
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                var lfDataResponse = data;
                var successMessage = lfDataResponse.lfStringResponse;
                lfAddFormSuccessToast(successMessage);
            })
    }


    // Temp Disable Submit Button
    function lfDisableSubmit() {
        var lfTempDisableSubmitButton = d.getElementById('lf_Submit_Button_' + currentFormId).disabled = 'disabled';
        var lfSubmitButtonOpacity = d.getElementById('lf_Submit_Button_' + currentFormId).classList.add("lf-submitted");
    }



    // Re-enable Submit Button
    function lfReEnableSubmit() {
        var lfRenableSubmitButton = d.getElementById('lf_Submit_Button_' + currentFormId).disabled = '';
        var lfSubmitButtonOpacity = d.getElementById('lf_Submit_Button_' + currentFormId).classList.remove("lf-submitted");
    }


    // Create Success message Toast Notification After Form Submit
    function lfAddFormSuccessToast(successMessage) {
        var lfSuccessText = successMessage;
        var lfAlertText = d.getElementById("lf_Alert_Text");
        lfAlertText.textContent = lfSuccessText;
        var lfAlertContainer = d.getElementById("lf_Alert_Container").classList.add("lf-alert-container-show");
        setTimeout(lfRemoveAlertContainer, 7000);
    }


    // Remove Alert Container
    function lfRemoveAlertContainer() {
        var lfAlertContainer = d.getElementById("lf_Alert_Container").classList.remove("lf-alert-container-show");
        var lfRemoveAlertContainer = d.getElementById("lf_Alert_Container").classList.add("lf-alert-container-hide");
    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Logic (onload)
    function lfFieldLogic(lfParsedData) { // (onload)
        var lfLogicComparable = []; // store truth or false
        var lfCurrentActiveField;

        // Loops through Each Input -- Grabs Logic Rules
        var lfFieldContainers = d.querySelectorAll(".lf-field-container");
        lfFieldContainers.forEach(function (lfFieldContainer) {
            var lfDataFieldId = lfFieldContainer.getAttribute("data-increment");


            // Isolate Logic Arrays (Part 1)
            const lfAllSavedFieldsParsedData = lfParsedData;
            lfAllSavedFieldsParsedData.forEach(function (lfSavedFieldData) {


                // Isolate Logic Arrays (Part 2)
                // Grab All Conditions for Current Field
                var lfFieldLogic = lfSavedFieldData.logic;
                lfFieldLogic.forEach(function (lfLogic) {
                    var lfActiveFieldId = lfLogic.activeField;
                    if (lfActiveFieldId === lfDataFieldId) {


                        // lfLogic Returns Logic Arrays for Fields with Conditions Matching to Current Field

                        // Calls lfOnloadFieldLogicChecker() before lfOnloadApplyLogic() -- Adds True or False into Object
                        lfOnloadFieldLogicChecker(lfLogic);


                        // ------------------------------------------------------------------------- Calls Apply Logic
                        // Global Function Variable -- Grab Field Condition for (Conditional Field)
                        var lfCondition = lfLogic.condition;
                        // Global Function Variable -- Grab Field Opposite Condition for (Conditional Field)
                        var lfConditionOpposite = lfLogic.conditionOpposite;
                        // Global Function Variable -- Grab Field Any/All Condition
                        var lfGlobalCondition = lfLogic.globalAnyAllCondition;


                        // Switch Default Logic Condition Values (ie.) Show/Hide = None/Grid
                        switch (lfCondition) {
                            case "Hide":
                                lfCondition = "none";
                                break;

                            case "Show":
                                lfCondition = "grid";
                                break;
                            default:
                        }

                        switch (lfConditionOpposite) {
                            case "Hide":
                                lfConditionOpposite = "none";
                                break;

                            case "Show":
                                lfConditionOpposite = "grid";
                                break;
                            default:
                        }


                        // Calls lfApplyLogic() after lfFieldLogicChecker() -- Passes Field Condition & Condition Opposite (ie.) Show/Hide
                        lfOnloadApplyLogic(lfGlobalCondition, lfCondition, lfConditionOpposite);


                    }
                })
            })
        })


        // Checks if All Fields Logic Rules are True or False -- Adds True or False into lfLogicComparable[] Object
        function lfOnloadFieldLogicChecker(lfLogic) {
            // Grab All Conditions for Current Field
            var lfConditionalField = lfLogic.conditionalField;
            var lfOperator = lfLogic.operator;
            var lfConditionalValue = lfLogic.conditionalValue;
            lfCurrentActiveField = d.getElementById('lf_Field_Container_' + lfLogic.activeField);


            // Grab Conditional Field Value
            var lfConditionalFieldValue = d.getElementById('lf_Input_' + lfConditionalField).value;


            // Run Conditions -- Updates Logic Comparison Array with True or False
            switch (lfOperator) {
                case "Is":
                    if (lfConditionalFieldValue === lfConditionalValue) {
                        var lfLogicBoolean = "true";
                        lfLogicComparable.push(lfLogicBoolean);
                    } else {
                        var lfLogicBoolean = "false";
                        lfLogicComparable.push(lfLogicBoolean);
                    }
                    break;

                case "Is Not":
                    if (lfConditionalFieldValue !== lfConditionalValue) {
                        var lfLogicBoolean = "true";
                        lfLogicComparable.push(lfLogicBoolean);
                    } else {
                        var lfLogicBoolean = "false";
                        lfLogicComparable.push(lfLogicBoolean);
                    }
                    break;

                case "Includes":
                    if (lfConditionalFieldValue.includes(lfConditionalValue)) {
                        var lfLogicBoolean = "true";
                        lfLogicComparable.push(lfLogicBoolean);
                    } else {
                        var lfLogicBoolean = "false";
                        lfLogicComparable.push(lfLogicBoolean);
                    }
                    break;
                case "Greater Than":
                    if (lfConditionalFieldValue > lfConditionalValue) {
                        var lfLogicBoolean = "true";
                        lfLogicComparable.push(lfLogicBoolean);
                    } else {
                        var lfLogicBoolean = "false";
                        lfLogicComparable.push(lfLogicBoolean);
                    }
                    break;
                case "Less Than":
                    if (lfConditionalFieldValue < lfConditionalValue) {
                        var lfLogicBoolean = "true";
                        lfLogicComparable.push(lfLogicBoolean);
                    } else {
                        var lfLogicBoolean = "false";
                        lfLogicComparable.push(lfLogicBoolean);
                    }
                    break;
                default:
            };
        }


        // Shows/Hides Fields if Any/All Conditions are True or False
        function lfOnloadApplyLogic(lfGlobalCondition, lfCondition, lfConditionOpposite) {
            switch (lfGlobalCondition) {
                case "Any":
                    if (lfLogicComparable.includes("true")) {
                        lfCurrentActiveField.setAttribute('style', "display:" + lfCondition);
                    } else {
                        lfCurrentActiveField.setAttribute('style', "display:" + lfConditionOpposite);
                    }
                    break;

                case "All":
                    if (!lfLogicComparable.includes("false")) {
                        lfCurrentActiveField.setAttribute('style', "display:" + lfCondition);
                    } else {
                        lfCurrentActiveField.setAttribute('style', "display:" + lfConditionOpposite);
                    }
                    break;
                default:
            }
        }


    }


    // ------------------------------------------------------------------------------------------------------------------------- LF Logic (oninput)
    // Grabs Logic Conditions + Checks Logic Rules + Applies Conditions
    d.addEventListener('input', function (e) {
        var lfFieldId = e.target.getAttribute("data-lf-field-id");
        var lfAllSavedFieldsParsedData = lfParsedData;
        var lfLogicComparable = []; // Logic Comparison Variable Array -- Stores Boolean Values for Multiple Conditions
        var lfCurrentConditionalField;


        // Isolate All Logic Arrays
        lfAllSavedFieldsParsedData.forEach(function (lfSavedFieldData) {
            var lfFieldLogic = lfSavedFieldData.logic;


            // Isolate Logic Arrays for Fields with Conditions
            lfFieldLogic.forEach(function (lfLogic) {
                var lfConditionalField = lfLogic.conditionalField;
                // Isolate Logic Arrays for Fields with Conditions Attached to Current Active Field
                if (lfConditionalField === lfFieldId) {


                    // lfLogic Returns Logic Arrays for Fields with Conditions Attached to Current Active Field


                    // Grab Active Field Id from lflogic Array
                    var lfActiveFieldId = lfLogic.activeField;
                    // Calls lfFieldLogicChecker() before lfApplyLogic() -- Adds True or False into Object
                    lfFieldLogicChecker(lfActiveFieldId);


                    // Global Function Variable -- Grab Field Condition for (Conditional Field)
                    var lfCondition = lfLogic.condition;
                    // Global Function Variable -- Grab Field Opposite Condition for (Conditional Field)
                    var lfConditionOpposite = lfLogic.conditionOpposite;
                    // Global Function Variable -- Grab Field Any/All Condition
                    var lfGlobalCondition = lfLogic.globalAnyAllCondition;


                    // Switch Default Logic Condition Values (ie.) Show/Hide = None/Grid
                    switch (lfCondition) {
                        case "Hide":
                            lfCondition = "none";
                            break;

                        case "Show":
                            lfCondition = "grid";
                            break;
                        default:
                    }

                    switch (lfConditionOpposite) {
                        case "Hide":
                            lfConditionOpposite = "none";
                            break;

                        case "Show":
                            lfConditionOpposite = "grid";
                            break;
                        default:
                    }


                    // Calls lfApplyLogic() after lfFieldLogicChecker() -- Passes Field Condition & Condition Opposite (ie.) Show/Hide
                    lfApplyLogic(lfGlobalCondition, lfCondition, lfConditionOpposite);


                }
            })
        })


        // Checks if All Fields Logic Rules are True or False -- Adds True or False into lfLogicComparable[] Object -- Conditional Fields (non-active fields)
        function lfFieldLogicChecker(lfActiveFieldId) {
            lfAllSavedFieldsParsedData.forEach(function (lfSavedFieldData) {


                // Isolate Logic Arrays for Fields with Conditions
                var lfFieldLogic = lfSavedFieldData.logic;
                lfFieldLogic.forEach(function (lfLogic) {
                    // Grab All Active Fields Values
                    var lfConditionalField = lfLogic.activeField;
                    // Isolate Arrays Where Active Field is Current Forms Active Array Conditional Field
                    if (lfConditionalField === lfActiveFieldId) {


                        // lfLogic Returns Array Where Active Field is Current Forms Active Array Conditional Field


                        // Grab Logic Values
                        var lfOperator = lfLogic.operator;
                        var lfConditionalValue = lfLogic.conditionalValue;
                        var lfConditionalFieldId = lfLogic.conditionalField;


                        // Update Global Function Variable -- Grab Current Logics Conditional Fields Container
                        lfCurrentConditionalField = d.getElementById('lf_Field_Container_' + lfConditionalField);
                        // Grab Current Logics Conditional Fields Input Value
                        var lfConditionFieldValue = d.getElementById('lf_Input_' + lfConditionalFieldId).value;


                        // Run Conditions -- Updates Logic Comparison Array with True or False
                        switch (lfOperator) {
                            case "Is":
                                if (lfConditionFieldValue === lfConditionalValue) {
                                    var lfLogicBoolean = "true";
                                    lfLogicComparable.push(lfLogicBoolean);
                                } else {
                                    var lfLogicBoolean = "false";
                                    lfLogicComparable.push(lfLogicBoolean);
                                }
                                break;

                            case "Is Not":
                                if (lfConditionFieldValue !== lfConditionalValue) {
                                    var lfLogicBoolean = "true";
                                    lfLogicComparable.push(lfLogicBoolean);
                                } else {
                                    var lfLogicBoolean = "false";
                                    lfLogicComparable.push(lfLogicBoolean);
                                }
                                break;

                            case "Includes":
                                if (lfConditionFieldValue.includes(lfConditionalValue)) {
                                    var lfLogicBoolean = "true";
                                    lfLogicComparable.push(lfLogicBoolean);
                                } else {
                                    var lfLogicBoolean = "false";
                                    lfLogicComparable.push(lfLogicBoolean);
                                }
                                break;
                            case "Greater Than":
                                if (lfConditionFieldValue > lfConditionalValue) {
                                    var lfLogicBoolean = "true";
                                    lfLogicComparable.push(lfLogicBoolean);
                                } else {
                                    var lfLogicBoolean = "false";
                                    lfLogicComparable.push(lfLogicBoolean);
                                }
                                break;
                            case "Less Than":
                                if (lfConditionFieldValue < lfConditionalValue) {
                                    var lfLogicBoolean = "true";
                                    lfLogicComparable.push(lfLogicBoolean);
                                } else {
                                    var lfLogicBoolean = "false";
                                    lfLogicComparable.push(lfLogicBoolean);
                                }
                                break;
                            default:
                        }
                    }
                })
            })
        }


        // Shows/Hides Fields if Any/All Conditions are True or False
        function lfApplyLogic(lfGlobalCondition, lfCondition, lfConditionOpposite) {
            switch (lfGlobalCondition) {
                case "Any":
                    if (lfLogicComparable.includes("true")) {
                        lfCurrentConditionalField.setAttribute('style', "display:" + lfCondition);
                    } else {
                        lfCurrentConditionalField.setAttribute('style', "display:" + lfConditionOpposite);
                    }
                    break;

                case "All":
                    if (!lfLogicComparable.includes("false")) {
                        lfCurrentConditionalField.setAttribute('style', "display:" + lfCondition);
                    } else {
                        lfCurrentConditionalField.setAttribute('style', "display:" + lfConditionOpposite);
                    }
                    break;
                default:
            }
        }


    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Dropdown (Show/Close)
    var lfDropOpen = "false"; // Global variables used to auto-close current dropdown
    // Hide All Current lfDropdown() Dropdowns Uls  // (Order of Operation Dependency -- Do Not Swap with Function Below)(Sequential order 1)
    d.addEventListener('click', function (e) {
        if (lfDropOpen === "true" && e.target.className != "lf-select-ul") {
            var lfAllFormDropdowns = d.querySelectorAll('.lf-select-ul');
            lfAllFormDropdowns.forEach(function (lfFormDropdown) {
                lfFormDropdown.setAttribute('style', "display:" + "none");
                lfDropOpen = "false";
            })
        }
    })


    // Displays Dropdown Options // (Sequential order 2)
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-input") {
            var lfDataFieldType = e.target.getAttribute("data-field-type");
            if (lfDataFieldType === "lfDrop") {
                var lfFieldId = e.target.getAttribute("data-lf-field-id");
                var lfDropUl = d.getElementById("lf_Drop_Input_Ul_" + lfFieldId);
                lfDropUl.style.cssText = "display: block";
                lfDropOpen = "true";
            }
        }
    })


    // Adds Clicked Dropdown option to Current Drop Input
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-select-option") {
            var lfDropOptionText = e.target.textContent;
            var lfDropId = e.target.getAttribute("data-drop-id");
            var lfDropInput = d.getElementById("lf_Input_" + lfDropId);
            lfDropInput.value = lfDropOptionText;
        }
    })


    // ------------------------------------------------------------------------------------------------------------------------- LF Field Description + Active Indicator (Show/Hide)
    var lfInputOpen = "false";
    // Displays Field Description/Helper Text
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-input") { 
            
        // Hides All Field Description/Helper Text
        var lfAllFieldDescriptions = d.querySelectorAll('.lf-field-description');
        lfAllFieldDescriptions.forEach(function (lfFieldDescription) {
            lfFieldDescription.classList.remove("lf-description-active");
        });

        // Hides All Editing Text
        var lfAllEditingText = d.querySelectorAll('.lf-editing-text');
        lfAllEditingText.forEach(function (lfEditingText) {
            lfEditingText.classList.remove("lf-editing-active");
        });

        // Display Current Field Description/Helper Text
        var lfFieldInput = e.target.id;
        var lfFieldIncrement = d.getElementById(lfFieldInput).getAttribute("data-lf-field-id");
        var lfFieldContainer = d.getElementById("lf_Field_Container_" + lfFieldIncrement)
        var lfFieldType = lfFieldContainer.getAttribute("data-field-type");
        if(lfFieldType !== "lfAddFile" && lfFieldType !== "lfAddFiles") {
            var lfFieldDescription = d.getElementById('lf_Field_Description_' + lfFieldIncrement);
            lfFieldDescription.classList.add("lf-description-active");
        }

         // Display Current Field Editing Text
         if(lfFieldType !== "lfAddFile" && lfFieldType !== "lfAddFiles") {
            var lfFieldInput = e.target.id;
            var lfFieldIncrement = d.getElementById(lfFieldInput).getAttribute("data-lf-field-id");
            var lfEditingText = d.getElementById('lf_Editing_Text_' + lfFieldIncrement);
            lfEditingText.classList.add("lf-editing-active");
        }


         lfInputOpen = "true";
        }
    })


    // Hides Field Description/Helper Text
    d.addEventListener('click', function (e) {

        var lfTarget = e.target;
        if (lfTarget.closest(".lf-field-container") != null) {
            var lfFieldContainer = lfTarget.closest(".lf-field-container");
            var lfFieldType = lfFieldContainer.getAttribute("data-field-type");


            if (e.target.className != "lf-input" && lfInputOpen == "true" && lfFieldType != "lfAddRadio" && lfFieldType != "lfAddCheckbox" && lfFieldType != "lfAddDropdown") {


                // Hides All Field Description/Helper Text
                var lfAllFieldDescriptions = d.querySelectorAll('.lf-field-description');
                lfAllFieldDescriptions.forEach(function (lfFieldDescription) {
                    lfFieldDescription.classList.remove("lf-description-active");
                })

                // Hides All Editing Text
                var lfAllEditingText = d.querySelectorAll('.lf-editing-text');
                lfAllEditingText.forEach(function (lfEditingText) {
                    lfEditingText.classList.remove("lf-editing-active");
                })

                
            } else if (lfFieldType == "lfAddRadio" || lfFieldType == "lfAddCheckbox"  || lfFieldType == "lfAddDropdown") {


                // Hides All Field Description/Helper Text
                var lfAllFieldDescriptions = d.querySelectorAll('.lf-field-description');
                lfAllFieldDescriptions.forEach(function (lfFieldDescription) {
                    lfFieldDescription.classList.remove("lf-description-active");
                })

                // Hides All Editing Text
                var lfAllEditingText = d.querySelectorAll('.lf-editing-text');
                lfAllEditingText.forEach(function (lfEditingText) {
                    lfEditingText.classList.remove("lf-editing-active");
                })

                // Display Current Field Description/Helper Text
                var lfFieldContainerIncrement = lfFieldContainer.getAttribute("data-increment");
                var lfCurrentDescription = d.getElementById('lf_Field_Description_' + lfFieldContainerIncrement);
                lfCurrentDescription.classList.add("lf-description-active");

                // Display Current Field Editing Text
                var lfFieldContainerIncrement = lfFieldContainer.getAttribute("data-increment");
                var lfEditingText = d.getElementById('lf_Editing_Text_' + lfFieldContainerIncrement);
                lfEditingText.classList.add("lf-editing-active");


            } else {
                // return
            }
        }
    })


    var lfRadioCheckboxActive = "false";
    // Displays Field Description/Helper Text Radio/Checkbox/File/Files/Drop (Hover)
    d.addEventListener('mouseover', function (e) {
        var lfTarget = e.target;
        if (lfTarget.closest(".lf-field-container") != null) {
            var lfFieldContainer = lfTarget.closest(".lf-field-container");
            var lfFieldType = lfFieldContainer.getAttribute("data-field-type");
            var lfFieldIncrement = lfFieldContainer.getAttribute("data-increment");


            if (lfFieldType == "lfAddRadio" || lfFieldType == "lfAddCheckbox" || lfFieldType == "lfAddDropdown") {
                var lfFieldDescription = d.getElementById('lf_Field_Description_' + lfFieldIncrement);
                var lfFieldDescriptionId = "lf_Field_Description_" + lfFieldIncrement;
                lfFieldDescription.classList.add("lf-description-active");
                lfRadioCheckboxActive = lfFieldDescriptionId;
            }
        }
    })


    // Hides Field Description/Helper Text Radio/Checkbox/File/Files/Drop (Leave)
    d.addEventListener('mouseout', function (e) {
        var lfTarget = e.target;
        if (lfTarget.closest(".lf-field-container") != null) {
            var lfFieldContainer = lfTarget.closest(".lf-field-container");
            var lfFieldType = lfFieldContainer.getAttribute("data-field-type");
            var lfFieldIncrement = lfFieldContainer.getAttribute("data-increment");


            if (lfFieldType == "lfAddRadio" || lfFieldType == "lfAddCheckbox" || lfFieldType == "lfAddDropdown") {
                var lfFieldDescription = d.getElementById('lf_Field_Description_' + lfFieldIncrement);
                var lfFieldDescriptionId = "lf_Field_Description_" + lfFieldIncrement;
                lfFieldDescription.classList.remove("lf-description-active");
                lfRadioCheckboxActive = lfFieldDescriptionId;
            }
        }
    })


   // Hides Field Description/Helper Active Indicator off Input Click
    d.addEventListener('click', function (e) {

        var lfTarget = e.target;
        if (lfTarget.closest(".lf-field-container") == null) {

            // Hides All Field Description/Helper Text
            var lfAllFieldDescriptions = d.querySelectorAll('.lf-field-description');
            lfAllFieldDescriptions.forEach(function (lfFieldDescription) {
                lfFieldDescription.classList.remove("lf-description-active");
            })

            // Hides All Editing Text
            var lfAllEditingText = d.querySelectorAll('.lf-editing-text');
            lfAllEditingText.forEach(function (lfEditingText) {
                lfEditingText.classList.remove("lf-editing-active");
            })

            lfInputOpen = "false";
        }

    })


    // ------------------------------------------------------------------------------------------------------------------------- LF File Upload (Display File Name)
    // File Upload Field Display File Name 
    d.addEventListener('change', function (e) {
        // Variables
        var lfCurrentTarget = e.target;
        var lfFieldId = lfCurrentTarget.getAttribute("data-lf-field-id");
        var lfFieldContainer = d.getElementById("lf_Field_Container_" + lfFieldId);
        var lfFieldType = lfFieldContainer.getAttribute("data-field-type");
        var lfFileUploadFileNames = [];
        var lfFileUploadField = false;

        // Determine if File Upload + Extract File Names
        if(lfFieldType === "lfAddFile" || lfFieldType === "lfAddFiles") {
            var lfFileLength = lfCurrentTarget.files.length;
            for (var x = 0; x < lfFileLength; x++) {
                var lfCurrentFileName = lfCurrentTarget.files[x].name;
                lfFileUploadFileNames.push(lfCurrentFileName);
                lfFileUploadField = true;
            }
        }

        // Display File Names or Count
        if(lfFileUploadField === true) {
            if(lfFileLength === 1) {
                var lfFileContainer = d.createElement("DIV");
                lfFileContainer.id = "lf_File_Container_" + lfFieldId;
                lfFileContainer.classList.add("lf-file-upload-container");
                var lfFileNameTextElement = d.createElement("P");
                var lfFileName = lfCurrentTarget.files[0].name;
                lfFileNameTextElement.innerText = lfFileName;
                lfFileNameTextElement.classList.add("lf-file-uploaded-text");
                var lfFileDeleteButton = d.createElement("P");
                lfFileDeleteButton.id = "lf_File_Delete_" + lfFieldId;
                lfFileDeleteButton.innerText = "Delete";
                lfFileDeleteButton.classList.add("lf-file-upload-delete");
                lfFileDeleteButton.setAttribute("data-field-id", lfFieldId);
                lfFileContainer.append(lfFileNameTextElement);
                lfFileContainer.append(lfFileDeleteButton);
                var lfExistingFileContainer = d.getElementById("lf_File_Container_" + lfFieldId);
                if(lfExistingFileContainer !== null) {
                    lfExistingFileContainer.remove();
                }
                lfFieldContainer.append(lfFileContainer);
            } else {
                var lfFileContainer = d.createElement("DIV");
                lfFileContainer.id = "lf_File_Container_" + lfFieldId;
                lfFileContainer.classList.add("lf-file-upload-container");
                var lfFileNameTextElement = d.createElement("P");
                lfFileNameTextElement.innerText = lfFileLength + " Files Uploaded";
                lfFileNameTextElement.classList.add("lf-file-uploaded-text");
                var lfFileDeleteButton = d.createElement("P");
                lfFileDeleteButton.id = "lf_File_Delete_" + lfFieldId;
                lfFileDeleteButton.innerText = "Delete";
                lfFileDeleteButton.classList.add("lf-file-upload-delete");
                lfFileDeleteButton.setAttribute("data-field-id", lfFieldId);
                lfFileContainer.append(lfFileNameTextElement);
                lfFileContainer.append(lfFileDeleteButton);
                var lfExistingFileContainer = d.getElementById("lf_File_Container_" + lfFieldId);
                if(lfExistingFileContainer !== null) {
                    lfExistingFileContainer.remove();
                }
                lfFieldContainer.append(lfFileContainer);
            }
        }
    })


    // Clear File Upload(s) Field(s)
    d.addEventListener('click', function (e) {
        if (e.target.className == "lf-file-upload-delete") { 
            var lfCurrentTarget = e.target;
            var lfFieldId = lfCurrentTarget.getAttribute("data-field-id");

            // Remove File Container
            var lfFileContainer = d.getElementById("lf_File_Container_" + lfFieldId);
            lfFileContainer.remove();

            // Reset File Input
            var lfFileInput = d.getElementById("lf_Input_" + lfFieldId);
            lfFileInput.value = "";
        }
    })


    // Adds Validation Result to DOM
    function lfValidationResult() {
        var lfValidationInput = d.createElement("Button");
        lfValidationInput.setAttribute("data-validation-result", "pending");
        lfValidationInput.id = "lf_Validation_Input";
        lfValidationInput.style.cssText = "display: none";
        var lfFooter = d.getElementById("lf_Footer");
        lfFooter.append(lfValidationInput);
    }


    // Adds Validation Complete Input
    function lfValidationComplete(lfValidationResponse) {
        var lfValidationInput = d.getElementById("lf_Validation_Input");
        lfValidationInput.setAttribute("data-validation-result", lfValidationResponse);
        lfValidationInput.click();
    }

})(document);
