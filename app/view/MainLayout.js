Ext.define('InvoiceApp.view.MainLayout',{
    //extend:'Ext.TabPanel',
    extend: 'Ext.navigation.View',
    requires:['InvoiceApp.view.Main'],
    xtype:'mainlayout',
    config:{
        fullscreen:true,
        items:[{
                xtype:'main'		
                }
            ]	
          }	
    });