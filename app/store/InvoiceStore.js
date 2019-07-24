Ext.define('InvoiceApp.store.InvoiceStore',{
	extend:'Ext.data.Store',
	config:{	
		autoLoad:true,	
		model:'InvoiceApp.model.Invoices'		
		}
	});