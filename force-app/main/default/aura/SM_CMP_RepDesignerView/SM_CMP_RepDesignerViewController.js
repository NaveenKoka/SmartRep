({
    handleIncrementCounter : function(component, event, helper) {
        let colCountDisplayVal = component.get("v.countDisplayVal");
        colCountDisplayVal++;
        component.set("v.countDisplayVal", colCountDisplayVal);
        
    },
    
    handleClick : function(){
        console.log("Clicked!");
    },
    
    afterDragulaLoaded: function(component, event, helper) {
        
        // Components
       var container = component.find('container');
        var from = component.find('from-draggable');
        var to = component.find('to-draggable');
        
        // Dragula needs the DOM elements
        var drake = dragula([from.getElement(), to.getElement()], {
            direction: 'vertical',
            mirrorContainer: container.getElement()
        });
        
        // Show/hide the "Drag and Drop Here" item
        // $A.getCallback makes safe to invoke from outside the Lightning Component lifecycle
        drake.on('drop', $A.getCallback(function(el, target, source, sibling) {
            if (source.children.length <= 1) {
                $A.util.removeClass(component.find(helper.placekeeperAuraIdFor(source)), 'slds-hide');
            }
            $A.util.addClass(component.find(helper.placekeeperAuraIdFor(target)), 'slds-hide');
        }));
    }
})