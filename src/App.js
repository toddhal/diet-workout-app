import React, { useState, useCallback, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import ViewToggle from './components/ViewToggle';

// Carrie screens
import HomeScreen from './screens/carrie/HomeScreen';
import WorkoutScreen from './screens/carrie/WorkoutScreen';
import MealsScreen from './screens/carrie/MealsScreen';
import ProgressScreen from './screens/carrie/ProgressScreen';

// Partner screens
import MealPlannerScreen from './screens/partner/MealPlannerScreen';
import ShoppingListScreen from './screens/partner/ShoppingListScreen';
import RecipesScreen from './screens/partner/RecipesScreen';
import PushToCarrieScreen from './screens/partner/PushToCarrieScreen';

import { colors } from './constants/theme';
import {
  loadSettings as loadNotificationSettings,
  saveSettings as saveNotificationSettings,
  applySettings as applyNotificationSettings,
  cancelReminder,
} from './utils/notifications';

const AVATAR_STORAGE_KEY = 'sb_avatar_photo';

function loadAvatar() {
  try {
    return localStorage.getItem(AVATAR_STORAGE_KEY) || null;
  } catch {
    return null;
  }
}

function persistAvatar(value) {
  try {
    if (value) localStorage.setItem(AVATAR_STORAGE_KEY, value);
    else localStorage.removeItem(AVATAR_STORAGE_KEY);
  } catch {
    // ignore quota errors
  }
}

function App() {
  const [isPartnerView, setIsPartnerView] = useState(false);
  const [carrieTab, setCarrieTab] = useState('home');
  const [partnerTab, setPartnerTab] = useState('planner');

  // Shared state
  const [mealPreferences, setMealPreferences] = useState([]);
  const [mealPlan, setMealPlan] = useState({});
  const [weightLog, setWeightLog] = useState([]);
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    currentStreak: 0,
    lastActivityDate: null,
  });

  // Notification settings (persisted)
  const [notificationSettings, setNotificationSettingsState] = useState(() =>
    loadNotificationSettings()
  );

  const updateNotificationSettings = useCallback((next) => {
    setNotificationSettingsState(next);
    saveNotificationSettings(next);
    applyNotificationSettings(next);
  }, []);

  // Apply on mount + cleanup on unmount
  useEffect(() => {
    applyNotificationSettings(notificationSettings);
    return () => cancelReminder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Avatar photo (persisted)
  const [avatarPhoto, setAvatarPhotoState] = useState(() => loadAvatar());

  const updateAvatarPhoto = useCallback((value) => {
    setAvatarPhotoState(value);
    persistAvatar(value);
  }, []);

  const activeTab = isPartnerView ? partnerTab : carrieTab;

  const handleTabChange = (tabId) => {
    if (isPartnerView) {
      setPartnerTab(tabId);
    } else {
      setCarrieTab(tabId);
    }
  };

  const handleViewToggle = (partner) => {
    setIsPartnerView(partner);
  };

  const handleLogWeight = useCallback((weight) => {
    const today = new Date().toISOString().split('T')[0];
    setWeightLog((prev) => {
      // Replace if already logged today, otherwise append
      const filtered = prev.filter((e) => e.date !== today);
      return [...filtered, { date: today, weight }];
    });
  }, []);

  const handleWorkoutComplete = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    setStats((prev) => {
      const lastDate = prev.lastActivityDate;
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

      let newStreak = prev.currentStreak;
      if (lastDate === today) {
        // Already logged today
        return { ...prev, totalWorkouts: prev.totalWorkouts + 1 };
      } else if (lastDate === yesterday) {
        newStreak = prev.currentStreak + 1;
      } else {
        newStreak = 1;
      }

      return {
        totalWorkouts: prev.totalWorkouts + 1,
        currentStreak: newStreak,
        lastActivityDate: today,
      };
    });
  }, []);

  const renderScreen = () => {
    if (isPartnerView) {
      switch (partnerTab) {
        case 'planner': return (
          <MealPlannerScreen
            mealPlan={mealPlan}
            onMealPlanChange={setMealPlan}
            mealPreferences={mealPreferences}
          />
        );
        case 'shopping': return <ShoppingListScreen mealPlan={mealPlan} />;
        case 'recipes': return <RecipesScreen />;
        case 'push': return (
          <PushToCarrieScreen
            mealPlan={mealPlan}
            notificationSettings={notificationSettings}
            onNotificationSettingsChange={updateNotificationSettings}
          />
        );
        default: return (
          <MealPlannerScreen
            mealPlan={mealPlan}
            onMealPlanChange={setMealPlan}
            mealPreferences={mealPreferences}
          />
        );
      }
    } else {
      switch (carrieTab) {
        case 'home': return (
          <HomeScreen
            onNavigate={handleTabChange}
            avatarPhoto={avatarPhoto}
            onAvatarChange={updateAvatarPhoto}
          />
        );
        case 'workout': return <WorkoutScreen onWorkoutComplete={handleWorkoutComplete} />;
        case 'meals': return (
          <MealsScreen
            preferences={mealPreferences}
            onPreferencesChange={setMealPreferences}
          />
        );
        case 'progress': return (
          <ProgressScreen
            weightLog={weightLog}
            onLogWeight={handleLogWeight}
            stats={stats}
          />
        );
        default: return (
          <HomeScreen
            onNavigate={handleTabChange}
            avatarPhoto={avatarPhoto}
            onAvatarChange={updateAvatarPhoto}
          />
        );
      }
    }
  };

  return (
    <div style={styles.app}>
      <ViewToggle isPartnerView={isPartnerView} onToggle={handleViewToggle} />
      <div style={styles.screenContainer}>
        {renderScreen()}
      </div>
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
        isPartnerView={isPartnerView}
      />
    </div>
  );
}

const styles = {
  app: {
    maxWidth: '430px',
    margin: '0 auto',
    minHeight: '100vh',
    backgroundColor: colors.background,
    position: 'relative',
  },
  screenContainer: {
    paddingBottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
  },
};

export default App;
