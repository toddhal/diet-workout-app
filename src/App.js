import React, { useState } from 'react';
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

import { colors, spacing } from './constants/theme';

function App() {
  const [isPartnerView, setIsPartnerView] = useState(false);
  const [carrieTab, setCarrieTab] = useState('home');
  const [partnerTab, setPartnerTab] = useState('planner');

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

  const renderScreen = () => {
    if (isPartnerView) {
      switch (partnerTab) {
        case 'planner': return <MealPlannerScreen />;
        case 'shopping': return <ShoppingListScreen />;
        case 'recipes': return <RecipesScreen />;
        case 'push': return <PushToCarrieScreen />;
        default: return <MealPlannerScreen />;
      }
    } else {
      switch (carrieTab) {
        case 'home': return <HomeScreen onNavigate={handleTabChange} />;
        case 'workout': return <WorkoutScreen />;
        case 'meals': return <MealsScreen />;
        case 'progress': return <ProgressScreen />;
        default: return <HomeScreen />;
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
    paddingBottom: '80px',
  },
};

export default App;
