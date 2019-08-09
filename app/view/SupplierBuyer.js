Ext.define('InvoiceApp.view.SupplierBuyer',{
    extend:'Ext.List',
    xtype:'supplier_buyer',
    requires:['InvoiceApp.store.SupplierBuyerStore'],
    
    config:{
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'Supplier/Buyer',
                items:[
                    {
                        text:'New',
                        id:'newsupplier'
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