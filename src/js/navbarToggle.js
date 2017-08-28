


/*
    How to use
    1. Create an HTML element with the id 'js-nav-bar'. This should contain the navigation elements.
    2. Create an HTML element with the id 'js-nav-toggle'. This is the button that should toggle the nav on and off.
    
    3. Create a css class called 'js-navbar-hidden'. This class should contain styling that will hide the navbar.
    To prevent hiding the navbar on desktops and large screens, change this classes behavior within a CSS query selector.
    
    4. Include this file in your HTML.
    
    - This code initializes itself. You don't need to initialize it or make any calls to it.
    - The fallowing methods are exposed in case you want to call them
        - 'NavbarToggle.Initialize()'
        - 'NavbarToggle.ToggleNavbar()'
        - 'NavbarToggle.DisableNavbar()'


*/

var NavbarToggle = (function(){ 

    var navbar;
    var navToggle;
    
    var navbarId = 'js-nav-bar';
    var navToggleId = 'js-nav-toggle';
    
    var navbarHiddenClass = 'js-navbar-hidden';

    
    /**
    * Initialize the navbar functionality.
    * If the DOM is not yet loaded, then it will be automatically initialized when it is loaded.
    * @function
    */
    function Initialize()
    {
        navbar = document.getElementById(navbarId);
        navToggle = document.getElementById(navToggleId);
        
        if(navbar == undefined || navToggle == undefined)
        {
            var documentReady = !(document.readyState != 'complete' && document.readyState != 'interactive');
            
            if(documentReady == false)
            {
                document.addEventListener('DOMContentLoaded', Initialize);
                return;
            }
            else
            {
                var errorMessage = 'Element with id: ' + navbarId + ' or with id: ' + navToggleId + ' is missing from the document.\n';
                errorMessage += 'Unable to initialize Navbar Toggle functionality without these elements';
                
                console.error(errorMessage);
                return;
            }
        }
        
        document.addEventListener('click', GlobalClickEvent)
        navToggle.addEventListener('click', ToggleNavBar);
    }
    

    /**
    * Toggle the navigation bar on and off
    * @function
    */
    function ToggleNavBar()
    {
        if(navbar.classList.contains(navbarHiddenClass) )
        {
            navbar.classList.remove(navbarHiddenClass);
        }
        else
        {
            navbar.classList.add(navbarHiddenClass);
        }
    }
    
    
    /**
    * Disable the navigation bar
    * @function
    */
    function DisableNavbar()
    {
        navbar.classList.add(navbarHiddenClass);
    }
    
    
    /**
    * Disable the nav if there was a click outside of the nav bar and outside of the nav toggle.
    *
    * Should be attacked as a click event on the document object.
    * @function
    */
    function GlobalClickEvent(event)
    {
        // Disable the navbar only if the click target is not a child of the navbar or the navtoggle
        if(!IsAncestor(event.target, navbar) && !IsAncestor(event.target, navToggle) )
        {
            DisableNavbar();
        }
    }
    
    
    /**
    * Check if an element is the ancestor of a root element
    * @function
    */
    function IsAncestor(root, element)
    {
        if(root == element || root.parentElement == element)
        {
            return true;
        }
        else if(root.parentElement == undefined)
        {
            return false;
        }
        else
        {
            return IsAncestor(root.parentElement, element);
        }
    }
    
    

    var module = {Initialize: Initialize, ToggleNavbar:ToggleNavBar, DisableNavbar:DisableNavbar};
    return module;

})();

NavbarToggle.Initialize();



