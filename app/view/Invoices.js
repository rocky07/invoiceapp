Ext.define('InvoiceApp.view.Invoices',{
    extend:'Ext.List',
    xtype:'invoices',
    requires:['InvoiceApp.store.InvoiceStore'],
    config:{
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'Invoice',
                items:[
                    {
                        text:'New',
                        action:'newinvoice'
                    }
                ]
            }
        ],
        iconCls:'home',
        title:'Projects',	  
        store: 'InvoiceStore',       
        itemTpl: '<div>{id}:{first_name}</div>'
        }
});