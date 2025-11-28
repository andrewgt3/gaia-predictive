import * as Lucide from 'lucide-react';

const requiredIcons = [
    'Mail', 'MapPin', 'Phone',
    'Activity', 'Zap', 'TrendingDown', 'Wrench',
    'Sparkles', 'CalendarClock', 'Banknote', 'Target',
    'TrendingUp', 'Settings', 'RefreshCw', 'Rocket'
];

const missing = requiredIcons.filter(icon => !Lucide[icon]);

if (missing.length > 0) {
    console.log('Missing icons:', missing);
} else {
    console.log('All icons found!');
}
