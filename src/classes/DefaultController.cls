global with sharing class DefaultController {
    
    // Retrieve all accounts
    @RemoteAction
    global static list<Account> getAccounts(){
        return [SELECT Id, Name FROM Account];
    }
    
    // Retrieve all contacts
    @RemoteAction
    global static list<Contact> getContacts(){
    	return [SELECT Id, Name FROM Contact];
    }
}