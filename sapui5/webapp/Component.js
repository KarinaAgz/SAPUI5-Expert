//@ts-notcheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
], function (UIComponent, Models,ResourceModel,HelloDialog,Device) {
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
            //var i18nModel=new ResourceModel({bundleName :"logaligroup.sapui5.i18n.i18n"});
            //this.setModel(i18nModel,"i18n");

            //set the device model
            this.setModel(Models.createDeviceModel(),"device");
;
            this._helloDialog=new HelloDialog(this.getRootControl());

            //create the viewa based on the url/hash
            this.getRouter().initialize();
        },
        exit: function(){
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        openHelloDialog:function(){
            this._helloDialog.open();
        },
        getContentDensityClass: function(){
            if (!Device.support.touch){
                this._sContentDensityClass="sapUiSizeCompact";
            
            }else{
                this._sContentDensityClass="sapUiSizeCozy"
            }
            return this._sContentDensityClass;
        }    });
});