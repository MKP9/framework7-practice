// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App root data
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
            // Demo products for Catalog section
            products: [
                {
                    id: '1',
                    title: 'This is a dynamic map - use your IMAGINATION!!!',
                    description: 'map map MAP MAP MAP MAP'
                },
            ]
        };
    },
    // App root methods
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
    },
    // App routes
    routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
    url: '/'
});
var mapView = app.views.create('#view-map', {
    url: '/map/'
});
var listView = app.views.create('#view-list', {
    url: '/list/'
});





