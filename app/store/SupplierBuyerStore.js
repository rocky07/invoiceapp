Ext.define('InvoiceApp.store.SupplierBuyerStore',{
	extend:'Ext.data.Store',
	config:{
		autoLoad:true,	
		model:'InvoiceApp.model.SupplierBuyer'		
		}
	});