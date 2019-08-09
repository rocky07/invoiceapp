Ext.define('InvoiceApp.controller.Main', {
    extend: 'Ext.app.Controller',
    config:{
        refs:{
            addSupplierButton:'#newsupplier',
            main:'main',
        },
        control:{
            addSupplierButton:function(list,record){
                tap:'addNewSupplierVendor'
            }
        },

        //all custom functions goes here
        addNewSupplierVendor:function(){
            console.log('hello');			
		
			}
        
    }
});