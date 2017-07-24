requirejs.config({
    baseUrl: 'js/app',
    paths: {
        underscore: '../lib/underscore',
        text: '../lib/text',
        firebase: 'https://www.gstatic.com/firebasejs/4.1.1/firebase'
    },
    shim: {
        firebase: {
            exports: 'firebase'
        }
    },
    config: {
        fb: {
            apiKey: "AIzaSyC9uUaoZHgIG3_qSI-PdjI_skACR31bQVo",
            authDomain: "test25-71688.firebaseapp.com",
            databaseURL: "https://test25-71688.firebaseio.com",
            projectId: "test25-71688",
            storageBucket: "test25-71688.appspot.com",
            messagingSenderId: "1088920414387"
        }
    }
});

requirejs(['app'], function (app) {
    app.init();
});
