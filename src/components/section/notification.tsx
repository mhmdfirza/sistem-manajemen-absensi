// src/components/NotificationBanner.tsx
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function NotificationBanner() {
    const [notification, setNotification] = useState<Notifications.Notification | null>(null);
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        // Listen for incoming notifications
        const subscription = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);

            // Animate banner sliding down
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();

            // Auto-hide after 5 seconds
            setTimeout(() => {
                hideBanner();
            }, 5000);
        });

        return () => subscription.remove();
    }, []);

    const hideBanner = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setNotification(null));
    };

    if (!notification) return null;

    return (
        <Animated.View style={[styles.banner, { opacity: fadeAnim }]}>
            <TouchableOpacity onPress={hideBanner} style={styles.content}>
                <Text style={styles.title}>{notification.request.content.title}</Text>
                <Text style={styles.body}>{notification.request.content.body}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    banner: {
        position: 'absolute',
        top: 50, // Adjust based on your header height or safe area
        left: 10,
        right: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 15,
        zIndex: 999,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    content: {
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
    },
    body: {
        color: '#ddd',
        marginTop: 5,
    },
});
