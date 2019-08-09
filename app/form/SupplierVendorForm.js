Ext.define('InvoiceApp.form.SupplierVendorForm', {
extend:'Ext.form.Panel',
xtype:'suppliervendorform',
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