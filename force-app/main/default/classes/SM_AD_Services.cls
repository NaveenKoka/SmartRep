public class SM_AD_Services {
    @AuraEnabled
    public Static List<AvailableObject> getAvailableObjects(){
        map<String, Schema.SObjectType> GlobalMap = Schema.getGlobalDescribe(); 
        List<AvailableObject> availableObjects = new List<AvailableObject>();
        for (String apiName : GlobalMap.keySet()) {
            //Schema.DescribeSObjectResult ObjDesc = Obj.getDescribe();
            AvailableObject ao = new AvailableObject(apiName);
            availableObjects.add(ao);
        }
        return availableObjects;
    }
    
    public class AvailableObject {
        @AuraEnabled
        public String objectName { get;set; }
        
        public AvailableObject(String apiName){
            objectName = apiName;
        }
    }
}