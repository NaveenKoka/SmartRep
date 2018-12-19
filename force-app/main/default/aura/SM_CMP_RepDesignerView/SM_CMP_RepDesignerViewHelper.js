({
    placekeeperAuraIdFor: function(element) {
        // Hard to get from DOM back to aura:id so using classes as markers
        if (element.classList.contains('from-draggable')) return 'from-placekeeper';
        else if (element.classList.contains('to-draggable')) return 'to-placekeeper';
            else return null;
    }
})