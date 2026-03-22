// Achievements / badges for Carrie's progress
// Each badge has: id, name, icon, description, condition description

const achievements = [
  {
    id: 'first_workout',
    name: 'First Workout',
    icon: '🌟',
    description: 'Completed your very first workout!',
    check: (stats) => stats.totalWorkouts >= 1,
  },
  {
    id: 'streak_3',
    name: '3-Day Streak',
    icon: '🔥',
    description: 'Active for 3 days in a row!',
    check: (stats) => stats.currentStreak >= 3,
  },
  {
    id: 'streak_7',
    name: 'Week Warrior',
    icon: '⚡',
    description: '7-day activity streak — incredible!',
    check: (stats) => stats.currentStreak >= 7,
  },
  {
    id: 'streak_14',
    name: 'Two-Week Champion',
    icon: '💎',
    description: '14 days strong — you are unstoppable!',
    check: (stats) => stats.currentStreak >= 14,
  },
  {
    id: 'streak_30',
    name: 'Monthly Marvel',
    icon: '👑',
    description: '30-day streak! You are royalty.',
    check: (stats) => stats.currentStreak >= 30,
  },
  {
    id: 'lost_5',
    name: 'First 5 Down',
    icon: '🎯',
    description: 'Lost your first 5 pounds!',
    check: (stats) => stats.weightLost >= 5,
  },
  {
    id: 'lost_10',
    name: 'Double Digits',
    icon: '🏅',
    description: '10 pounds down — amazing progress!',
    check: (stats) => stats.weightLost >= 10,
  },
  {
    id: 'lost_20',
    name: '20 Pound Club',
    icon: '🏆',
    description: '20 pounds gone — you are transforming!',
    check: (stats) => stats.weightLost >= 20,
  },
  {
    id: 'halfway',
    name: 'Halfway There',
    icon: '🎉',
    description: 'Halfway to your goal weight!',
    check: (stats) => stats.weightLost >= (stats.startWeight - stats.goalWeight) / 2,
  },
  {
    id: 'logged_weight_5',
    name: 'Consistent Logger',
    icon: '📝',
    description: 'Logged your weight 5 times — data is power!',
    check: (stats) => stats.weightEntries >= 5,
  },
  {
    id: 'logged_weight_15',
    name: 'Tracking Pro',
    icon: '📊',
    description: '15 weight entries — you love data!',
    check: (stats) => stats.weightEntries >= 15,
  },
  {
    id: 'workouts_10',
    name: 'Perfect 10',
    icon: '💪',
    description: 'Completed 10 workouts total!',
    check: (stats) => stats.totalWorkouts >= 10,
  },
];

export default achievements;
