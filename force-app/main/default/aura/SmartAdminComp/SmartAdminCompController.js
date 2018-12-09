({
    doInit : function(component, event, helper) {   
        helper.triggerSpinnerEvent(true);
        var availableObjectPromise = helper.getAvailableObjects(component);
        availableObjectPromise.then(
            $A.getCallback(function(result){
                // We have the account - set the attribute
                component.set('v.availableObjects', result);
                helper.triggerSpinnerEvent(false);
            })
        )
    },
    
    changeInSelectedObject: function(component, event, helper){
        helper.triggerSpinnerEvent(true);
        var getFieldsPromise = helper.describeObjectFields(component);
        getFieldsPromise.then(
            $A.getCallback(function(result){
                // We have the account - set the attribute
                component.set('v.fields', result);
                helper.triggerSpinnerEvent(false);
            })
        )
    },
    
    handleSpinner : function(component, event){
        var isEnabled = event.getParam("isEnabled");
        component.set('v.isSpinner', isEnabled);
        console.log('Triggered!' + isEnabled);
    }
})