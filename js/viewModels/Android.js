/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * Android module
 */
define(['ojs/ojcore', 'knockout','ojs/ojrouter','ojs/ojnavigationlist'
], function (oj, ko) {
    // Create a child router named 'androidTopics' for the 'android' routerState
    var childRouter = oj.Router.rootInstance.createChildRouter('androidTopics', 'android');
    
    childRouter.configure({
        'quickStart': {label: 'Quick Start', value: "AndroidQuickStart", isDefault: true},
        'guide': {label: 'Developers Guide', value: "AndroidDevGuide"},
        'api': {label: 'API Documentation', value: 'AndroidApi'},
        'examples': {label: 'Examples', value: "AndroidExamples"}
    });
    childRouter.go();
    
    /**
     * The view model for the Android SDK content view template
     */
    function AndroidContentViewModel() {
        var self = this;
        /**
         * The child router is bound to the view's ojNavigationList menu.
         */
        self.router = childRouter;
        
        /**
         * Sets the selected item in the ojNavigationList menu.
         */
        self.navListSelection = ko.observable(childRouter.defaultStateId);
        
        /**
         * Synchronizes the router's default state to the selected item, 
         * allowing this page to restore its contents if it's recreated.
         */
        self.onNavListOptionChange = function (event, data) {
            if (data['option'] === 'selection') {
                // make the new selection the default
//                self.router.defaultStateId = data['value'];
                self.router.defaultStateId = self.navListSelection();
            }
        };        
    }
    return AndroidContentViewModel;
});