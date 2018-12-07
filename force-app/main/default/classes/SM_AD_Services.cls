public class SM_AD_Services {
    @AuraEnabled
    public Static List<AvailableObject> getAvailableObjects(){
        map<String, Schema.SObjectType> globalMap = Schema.getGlobalDescribe(); 
        List<AvailableObject> availableObjects = new List<AvailableObject>();
        for (String apiName : globalMap.keySet()) {
            Schema.DescribeSObjectResult objDesc = globalMap.get(apiName).getDescribe();
            if(objDesc != null && objDesc.isAccessible() && objDesc.isCreateable()){
            	AvailableObject ao = new AvailableObject(apiName, objDesc.getLabel());
            	availableObjects.add(ao);
            }
        }
        return availableObjects;
    }
    
    public class AvailableObject {
        @AuraEnabled
        public String objectName { get;set; }
        @AuraEnabled
        public String label { get;set; }
        
        public AvailableObject(String apiName, String objectLabel){
            objectName = apiName;
            label = objectLabel;
        }
    }
}