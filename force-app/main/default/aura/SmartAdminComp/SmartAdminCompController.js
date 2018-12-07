({
    handleSpinner : function(component, event){
        var isEnabled = event.getParam("isEnabled");
        component.set('v.IsSpinner', isEnabled);
        console.log('Triggered!' + isEnabled);
    }
})