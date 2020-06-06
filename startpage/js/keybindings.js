let keysPressed = {};

document.addEventListener(
    'keydown', 
    (event) => {
    	
    	keysPressed[event.key] = true;

        // Open dashboard
        if (keysPressed['Alt'] && event.key === 's') {
        	event.preventDefault();
            toggleDashboard();
            return;
        } else if (keysPressed['Alt'] && event.key === 'e') {
        	event.preventDefault();
            toggleWebMenu();
            return;
        } else if (keysPressed['Alt'] && event.key === 'x') {
        	event.preventDefault();
            toggleWeatherScreen();
            return;
        }

        if (event.key === 'Escape') {

            event.preventDefault();
            
            // If any of this are open, close it
            if (searchBoxVisility) {
                
                // Hide searchbox
                toggleSearchBox();
                searchBox.value = '';
                return;

            } else if (weatherScreenVisibility) {
                
                toggleWeatherScreen();
                return;

            } else if (rightDashboardVisibility) {
                
                toggleDashboard();
                return;
                
            }

            // Show web menu
            toggleWebMenu();
            return;
        }

        if (searchBoxVisility === false) {

            // Don't show searchbox when web menu, dashboard
            // and weather screen is open
            if (webMenuVisibility || weatherScreenVisibility ||
            	rightDashboardVisibility) return;

            // Only accept single charactered key and backspace to open search box
            if ((event.key.length > 1) && (event.key !== 'Backspace')) return;

            // Open searchbox
            toggleSearchBox();

        }  else {
            
            // Backspacing while there's no search query will hide searhbox
            // Will also hide if you hit enter
            if ((event.key === 'Backspace' || event.key === 'Enter') && 
                searchBox.value < 1) { toggleSearchBox(); return; };
        }
    }
);

document.addEventListener(
    'keyup',
    (event) => {
        delete keysPressed[event.key];
    }
);