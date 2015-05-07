global with sharing class DefaultController {
    
    // Retrieve all accounts
    @RemoteAction
    global static list<Account> getAccounts(){
        return [SELECT Id, Name FROM Account];
    }
    
}