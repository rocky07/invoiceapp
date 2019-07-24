Ext.define('InvoiceApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'InvoiceApp.view.Invoices',
        'Ext.data.proxy.JsonP'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {                
               // title: 'All Projects',
               // iconCls: 'action',
                xtype:'invoices'
            },
            {
                xtype:'invoiceform'
            }
        ]
    }
});
