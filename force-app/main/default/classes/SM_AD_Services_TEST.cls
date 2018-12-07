@isTest
public class SM_AD_Services_TEST{

    static testMethod void validateGetAvailableObjects() {
        List<SM_AD_Services.AvailableObject> avaObjects = SM_AD_Services.getAvailableObjects();
        System.assertNotEquals(avaObjects.size(), 0);
    }    

}