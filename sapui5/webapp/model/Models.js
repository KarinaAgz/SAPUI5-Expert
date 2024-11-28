sap.ui.define([
    "sap/ui/model/json/JSONModel"
], 
function (JSONModel) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} JSONModel
         */
        createRecipient: function () {
            var oData ={
                recipient:{
                    name:"World"
                }
            };
            return new JSONModel(oData);
        }
    };

});