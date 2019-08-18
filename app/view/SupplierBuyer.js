Ext.define('InvoiceApp.view.SupplierBuyer',{
    extend:'Ext.List',
    xtype:'supplier_buyer',
    requires:[
        'InvoiceApp.store.SupplierBuyerStore',
        'InvoiceApp.controller.Main'
    ],
    
    config:{
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'Supplier/Buyer',
                items:[
                    {
                        text:'New',
                        action:'addsupplierbuyer'
                    }
                ]
            }
        ],
        iconCls:'home',
        title:'Supplier',	  
        store: 'SupplierBuyerStore',       
        itemTpl: '<div>{phone}:{city}</div>'
        }
});