({
    doInit : function(component, event, helper) {   
        helper.triggerSpinnerEvent(true);
        var availableObjectPromise = helper.getAvailableObjects(component);
        availableObjectPromise.then(
            $A.getCallback(function(result){
                // We have the account - set the attribute
                component.set('v.AvailableObjects', result);
                helper.triggerSpinnerEvent(false);
            })
        )
    },
})