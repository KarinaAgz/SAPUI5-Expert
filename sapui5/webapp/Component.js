//@ts-notcheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, Models,ResourceModel) {
    "use strict";

    return UIComponent.extend("logaligroup.sapui5.Component", {

        metadata: {
            manifest: "json"
            //interfaces: [
             //   "sap.ui.core.IAsyncContentCreation"
            //]
        },

        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(Models.createRecipient());

            //set i18n model on the view
            var i18nModel=new ResourceModel({bundleName :"logaligroup.sapui5.i18n.i18n"});
            this.setModel(i18nModel,"i18n");
        }
    });
});