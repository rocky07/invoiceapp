Ext.define('InvoiceApp.model.SupplierBuyer',{
	extend:'Ext.data.Model',
	
	config: {
        autoLoad:true,    
        fields: ['id', 'phone','city'],
        proxy: {
            type: 'jsonp',
            url : 'http://sakinastraveldairy.com/supplierbuyers',
            reader: {
                type: 'json',
                rootProperty: 'data'
                
            }
        }
    }
	});