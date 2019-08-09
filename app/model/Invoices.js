Ext.define('InvoiceApp.model.Invoices',{
	extend:'Ext.data.Model',
	
	config: {
        autoLoad:true,    
        fields: ['id', 'first_name'],
        proxy: {
            type: 'jsonp',
            url : 'http://sakinastraveldairy.com/invoices',
            reader: {
                type: 'json',
                rootProperty: 'data'
                
            }
        }
    }
	});