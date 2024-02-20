self.addEventListener('push', function(event) {
    var options = {
        body: event.data.text(),
        icon: 'icon.png',
        badge: 'badge.png'
    };

    // 显示推送通知
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
