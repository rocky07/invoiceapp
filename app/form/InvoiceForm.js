Ext.define('InvoiceApp.form.InvoiceForm', {
extend:'Ext.form.Panel',
xtype:'invoiceform',
config:{
    iconCls:'add',
    title:'Create',
    items: [
        {
            xtype: 'textfield',
            name : 'supplier',
            label: 'Supplier Details'
        },
        {
            xtype: 'textfield',
            name : 'buyer',
            label: 'Buyer Details'
        },
        {
            xtype: 'datepickerfield',
            name : 'buyer',
            label: 'Buyer Details'
        },
        {
            xtype: 'textfield',
            name : 'buyer',
            label: 'Buyer Details'
        },
        {
            xtype: 'textfield',
            name : 'buyer',
            label: 'Buyer Details'
        },
    ]	 
}
});