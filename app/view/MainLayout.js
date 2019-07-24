Ext.define('InvoiceApp.view.MainLayout',{
    //extend:'Ext.TabPanel',
    extend: 'Ext.navigation.View',
    requires:['InvoiceApp.view.Main'],
    xtype:'mainlayout',
    config:{
        //html:'welcome to mather app',
        fullscreen:true,
        //tabBarPosition:'bottom',
        items:[{
            xtype:'main'		
            }/*,
            {
            xtype:'enquirycard'		
            }*/
            ]	
        }	
        });