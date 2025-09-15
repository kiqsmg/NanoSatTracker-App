import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useGlobalContext } from '../../context/GlobalProvider';
import auth from '@react-native-firebase/auth';
import { router } from 'expo-router';

const Profile = () => {
  const { user, userInfo, logout } = useGlobalContext();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            setIsLoggingOut(true);
            try {
              await logout();
              router.replace('/');
            } catch (error) {
              console.error('Logout error:', error);
              Alert.alert('Error', 'Failed to sign out. Please try again.');
            } finally {
              setIsLoggingOut(false);
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <View style={styles.content}>
          {/* Profile Picture Section */}
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              {userInfo?.photoURL ? (
                <Image source={{ uri: userInfo.photoURL }} style={styles.avatar} />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <Ionicons name="person" size={40} color="#666" />
                </View>
              )}
            </View>
            <Text style={styles.displayName}>
              {userInfo?.displayName || 'User'}
            </Text>
            <Text style={styles.email}>{userInfo?.email}</Text>
          </View>

          {/* User Information */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Account Information</Text>
            
            <View style={styles.infoItem}>
              <View style={styles.infoLeft}>
                <Ionicons name="mail-outline" size={20} color="#FF9C01" />
                <Text style={styles.infoLabel}>Email</Text>
              </View>
              <Text style={styles.infoValue}>{userInfo?.email}</Text>
            </View>

            <View style={styles.infoItem}>
              <View style={styles.infoLeft}>
                <Ionicons name="person-outline" size={20} color="#FF9C01" />
                <Text style={styles.infoLabel}>Display Name</Text>
              </View>
              <Text style={styles.infoValue}>
                {userInfo?.displayName || 'Not set'}
              </Text>
            </View>

            <View style={styles.infoItem}>
              <View style={styles.infoLeft}>
                <Ionicons name="id-card-outline" size={20} color="#FF9C01" />
                <Text style={styles.infoLabel}>User ID</Text>
              </View>
              <Text style={styles.infoValueSmall}>{userInfo?.uid}</Text>
            </View>
          </View>

          {/* App Information */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>About</Text>
            
            <View style={styles.aboutItem}>
              <Text style={styles.aboutText}>
                Welcome to NanoSatTracker! Track satellite data and explore space missions from SpaceLab UFSC.
              </Text>
            </View>

            <View style={styles.aboutItem}>
              <Text style={styles.aboutLabel}>Version</Text>
              <Text style={styles.aboutValue}>1.0.0</Text>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.actionsSection}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
              disabled={isLoggingOut}
            >
              <Ionicons name="log-out-outline" size={20} color="#fff" />
              <Text style={styles.logoutText}>
                {isLoggingOut ? 'Signing Out...' : 'Sign Out'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#232533',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#232533',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#CDCDE0',
  },
  infoSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#232533',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    color: '#CDCDE0',
    marginLeft: 12,
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'right',
    flex: 1,
  },
  infoValueSmall: {
    fontSize: 12,
    color: '#CDCDE0',
    textAlign: 'right',
    flex: 1,
  },
  aboutItem: {
    paddingVertical: 8,
  },
  aboutText: {
    fontSize: 14,
    color: '#CDCDE0',
    lineHeight: 20,
  },
  aboutLabel: {
    fontSize: 16,
    color: '#CDCDE0',
    marginBottom: 4,
  },
  aboutValue: {
    fontSize: 16,
    color: '#FF9C01',
    fontWeight: '600',
  },
  actionsSection: {
    marginTop: 20,
    paddingBottom: 40,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B6B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default Profile;