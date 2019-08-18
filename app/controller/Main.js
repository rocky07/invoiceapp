Ext.define('InvoiceApp.controller.Main', {
    extend: 'Ext.app.Controller',
    config:{
        refs:{
            main:'mainlayout',
            addSupplierButton: 'button[action=addsupplierbuyer]',
            addInvoiceButton:  'button[action=newinvoice]'
        },
        control:{
            addInvoiceButton: {
                tap: 'addNewSupplierVendor'
            },            
            addSupplierButton: {
                tap: 'addNewSupplierVendor'
            }
        }
    },

        //all custom functions goes here
    addNewSupplierVendor:function(){
            this.getMain().push({
                xtype:'invoiceform',
                title:'New Invoice'
            });
         
	    }
        
    
});