import { Colors, Radii, Shadows, Spacing } from '@/constants/theme';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Email dan Password wajib diisi');
            return;
        }
        setError('');
        setLoading(true);
        await login(email);
        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.logoPlaceholder} />
                        <Text style={styles.title}>FinanceApp</Text>
                        <Text style={styles.subtitle}>Kelola keuangan Anda dengan mudah.</Text>
                    </View>

                    <View style={styles.formCard}>
                        {!!error && (
                            <View style={styles.errorBox}>
                                <Text style={styles.errorText}>{error}</Text>
                            </View>
                        )}

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Alamat Email"
                                placeholderTextColor={Colors.textSecondary}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Kata Sandi"
                                placeholderTextColor={Colors.textSecondary}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        <View style={styles.optionsRow}>
                            <TouchableOpacity>
                                <Text style={styles.linkText}>Remember me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.linkText}>Lupa Password?</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={[styles.loginBtn, loading && styles.loginBtnDisabled]}
                            onPress={handleLogin}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color={Colors.surface} />
                            ) : (
                                <Text style={styles.loginBtnText}>Masuk Ke Akun</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: Spacing.xl,
        justifyContent: 'center',
        maxWidth: 500,
        width: '100%',
        alignSelf: 'center', // for web centering
    },
    header: {
        alignItems: 'center',
        marginBottom: Spacing.xxl,
    },
    logoPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: Radii.xl,
        backgroundColor: Colors.primary,
        marginBottom: Spacing.md,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.textPrimary,
        marginBottom: Spacing.xs,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.textSecondary,
    },
    formCard: {
        backgroundColor: Colors.surface,
        padding: Spacing.lg,
        borderRadius: Radii.xl,
        ...Shadows.medium,
    },
    errorBox: {
        backgroundColor: '#FEE2E2',
        padding: Spacing.md,
        borderRadius: Radii.md,
        marginBottom: Spacing.md,
    },
    errorText: {
        color: Colors.danger,
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: Spacing.md,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.textPrimary,
        marginBottom: Spacing.sm,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.border,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.md,
        borderRadius: Radii.lg,
        fontSize: 16,
        color: Colors.textPrimary,
        backgroundColor: Colors.background,
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.lg,
        marginTop: Spacing.sm,
    },
    linkText: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: '500',
    },
    loginBtn: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.md,
        borderRadius: Radii.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBtnDisabled: {
        opacity: 0.7,
    },
    loginBtnText: {
        color: Colors.surface,
        fontSize: 16,
        fontWeight: '700',
    },
});
