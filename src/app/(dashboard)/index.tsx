import { Colors, Radii, Shadows, Spacing } from '@/constants/theme';
import { useAuth } from '@/hooks/useAuth';
import Constants from 'expo-constants';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardScreen() {
    const { user, logout } = useAuth();
    const userName = user?.name || "Pengguna";

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greetingText}>Selamat Datang,</Text>
                        <Text style={styles.nameText}>{userName}</Text>
                    </View>
                    <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>

                {/* Balance Card */}
                <View style={styles.balanceCard}>
                    <Text style={styles.balanceLabel}>Saldo Saat Ini</Text>
                    <Text style={styles.balanceValue}>Rp0</Text>
                </View>

                {/* Summary Row */}
                <View style={styles.summaryRow}>
                    <View style={[styles.summaryCard, { flex: 1, marginRight: Spacing.sm }]}>
                        <View style={[styles.iconPlaceholder, { backgroundColor: '#D1FAE5' }]} />
                        <Text style={styles.summaryTitle}>Income Bulan Ini</Text>
                        <Text style={[styles.summaryAmount, { color: Colors.accent }]}>Rp0</Text>
                    </View>
                    <View style={[styles.summaryCard, { flex: 1, marginLeft: Spacing.sm }]}>
                        <View style={[styles.iconPlaceholder, { backgroundColor: '#FEE2E2' }]} />
                        <Text style={styles.summaryTitle}>Expense Bulan Ini</Text>
                        <Text style={[styles.summaryAmount, { color: Colors.danger }]}>Rp0</Text>
                    </View>
                </View>

                {/* Quick Actions */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Quick Action</Text>
                </View>
                <View style={styles.actionCard}>
                    <Text style={styles.comingSoonText}>Coming Soon</Text>
                </View>

                {/* Recent Activity */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>
                </View>
                <View style={styles.activityCard}>
                    <Text style={styles.noActivityText}>Belum ada transaksi</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: Constants.statusBarHeight || Spacing.md,
    },
    scrollContent: {
        padding: Spacing.lg,
        maxWidth: 768,
        width: '100%',
        alignSelf: 'center',
        paddingBottom: Spacing.xxl,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    greetingText: {
        fontSize: 16,
        color: Colors.textSecondary,
        marginBottom: 4,
    },
    nameText: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    logoutBtn: {
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        backgroundColor: '#F3F4F6',
        borderRadius: Radii.full,
    },
    logoutText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.textPrimary,
    },
    balanceCard: {
        backgroundColor: Colors.primary,
        padding: Spacing.xl,
        borderRadius: Radii.xl,
        ...Shadows.medium,
        marginBottom: Spacing.lg,
    },
    balanceLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: Spacing.sm,
    },
    balanceValue: {
        color: Colors.surface,
        fontSize: 36,
        fontWeight: '800',
        letterSpacing: -0.5,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Spacing.lg,
    },
    summaryCard: {
        backgroundColor: Colors.surface,
        padding: Spacing.lg,
        borderRadius: Radii.xl,
        ...Shadows.soft,
    },
    iconPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: Radii.full,
        marginBottom: Spacing.md,
    },
    summaryTitle: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginBottom: Spacing.xs,
    },
    summaryAmount: {
        fontSize: 20,
        fontWeight: '700',
    },
    sectionHeader: {
        marginTop: Spacing.md,
        marginBottom: Spacing.md,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.textPrimary,
    },
    actionCard: {
        backgroundColor: Colors.surface,
        padding: Spacing.xl,
        borderRadius: Radii.xl,
        alignItems: 'center',
        justifyContent: 'center',
        ...Shadows.soft,
        marginBottom: Spacing.lg,
    },
    comingSoonText: {
        fontSize: 16,
        color: Colors.textSecondary,
        fontWeight: '500',
        fontStyle: 'italic',
    },
    activityCard: {
        backgroundColor: Colors.surface,
        padding: Spacing.xl,
        borderRadius: Radii.xl,
        alignItems: 'center',
        justifyContent: 'center',
        ...Shadows.soft,
    },
    noActivityText: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
});
