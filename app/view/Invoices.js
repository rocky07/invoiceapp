Ext.define('InvoiceApp.view.Invoices',{
    extend:'Ext.List',
    xtype:'invoices',
    requires:['InvoiceApp.store.InvoiceStore'],
    config:{
        iconCls:'home',
        title:'Projects',	  
        store: 'InvoiceStore',       
        itemTpl: '<div>{name}</div>'
        }
});