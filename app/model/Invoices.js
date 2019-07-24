Ext.define('InvoiceApp.model.Invoices',{
	extend:'Ext.data.Model',
	
	config: {
		
        fields: ['id', 'name'],
        proxy: {
            type: 'jsonp',
            url : 'http://cyclehouse.in.162-222-225-80.plesk-web6.webhostbox.net/data.txt',
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        }
    }
	});