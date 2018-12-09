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
    
    @AuraEnabled
    public static List<Field> getFields(String objectName){
        if(objectName == null || objectName.length() == 0) return null;
        List<Field> returnFields = new List<Field>();
        // sObject types to describe
        String[] types = new String[]{objectName};
        // Make the describe call
        Schema.DescribeSobjectResult[] results = Schema.describeSObjects(types);
        if(results != null && results.size() > 0){
            Schema.DescribeSobjectResult objectDescribe = results.get(0);
            Map<String, Schema.SObjectField> fields = objectDescribe.fields.getMap();
            for(Schema.SObjectField fld : fields.values()){
                Schema.DescribeFieldResult fldDescribe = fld.getDescribe();
                Field field = new Field(fldDescribe.getName(), fldDescribe.getLabel());
                returnFields.add(field);
            }
        }
        return returnFields;
    }
    
    public class Field {
        @AuraEnabled
        public String name { get;set; }
        @AuraEnabled
        public String label { get;set; }
        
        public Field(String apiName, String fieldLabel){
            name = apiName;
            label = fieldLabel;
        }
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