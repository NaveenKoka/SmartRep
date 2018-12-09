({
    getAvailableObjects : function(component) {
        return new Promise(function(resolve, reject) {
            var action = component.get("c.getAvailableObjects");
            action.setCallback(this, function(response) {
                var actionState = response.getState();
                if(actionState === "SUCCESS"){
                    resolve(response.getReturnValue());
                }else{
                    reject(response.getError());
                }
            });
            
            $A.enqueueAction(action);
        });
        
    },
    
    describeObjectFields : function(component){
        return new Promise(function(resolve, reject) {
            var action = component.get("c.getFields");
            action.setParams({ objectName : component.get("v.selectedObjectName") });
            action.setCallback(this, function(response) {
                var actionState = response.getState();
                if(actionState === "SUCCESS"){
                    resolve(response.getReturnValue());
                }else{
                    reject(response.getError());
                }
            });
            
            $A.enqueueAction(action);
        });
    },
    
    triggerSpinnerEvent : function(isEnabled){
        var spinnerEvent = $A.get("e.c:SpinnerEvent");
        spinnerEvent.setParams({"isEnabled" : isEnabled });
        spinnerEvent.fire();
    }
})