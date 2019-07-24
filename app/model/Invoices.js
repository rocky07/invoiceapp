Ext.define('InvoiceApp.model.Invoices',{
	extend:'Ext.data.Model',
	
	config: {
		
        fields: ['id', 'name'],
        proxy: {
            type: 'ajax',
            url : '/data.txt',
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        }
    }
	});