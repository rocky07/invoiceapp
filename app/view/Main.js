Ext.define('InvoiceApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'InvoiceApp.view.Invoices',
        'InvoiceApp.controller.Main',
        'Ext.data.proxy.JsonP'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {                
                 xtype:'supplier_buyer'
            },
            {                
                xtype:'invoices'
            },
            {
                xtype:'invoiceform'
            }
        ]
    }
});
