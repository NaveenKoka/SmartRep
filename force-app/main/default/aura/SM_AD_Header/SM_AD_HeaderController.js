({
    doInit : function(component, event, helper) {
        var availableObjectPromise = helper.getAvailableObjects(component);
        availableObjectPromise.then(
            $A.getCallback(function(result){
                // We have the account - set the attribute
                component.set('v.AvailableObjects', result);
            })
        )
    }
})