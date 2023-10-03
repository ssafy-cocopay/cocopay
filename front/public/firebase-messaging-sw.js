importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js");

const firebaseConfig = {
	apiKey: "AIzaSyCVMfJu-9DESjwRqI9ZnIXCqXi3LArS2v4",
	authDomain: "ssuk-ssuk-push-server.firebaseapp.com",
	projectId: "ssuk-ssuk-push-server",
	storageBucket: "ssuk-ssuk-push-server.appspot.com",
	messagingSenderId: "783105738433",
	appId: "1:783105738433:web:bf9038b74de37df79db640",
	measurementId: "G-G26E58EJJG",
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// const app = initializeApp(firebaseConfig);

console.log("안녕 난 서비스워커!");

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // optional
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
