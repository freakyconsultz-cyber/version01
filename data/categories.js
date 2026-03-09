
import { Mountain, Palmtree, Church, Landmark, Compass } from 'lucide-react';

export const categories = [
  {
    id: 'nature',
    name: "Nature's Call", // Merged Beach and Wildlife
    icon: Palmtree,
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    textColor: 'text-green-600',
    borderColor: 'border-green-100',
    lightBg: 'bg-green-50',
    description: 'Beaches, Wildlife, and Natural Wonders'
  },
  {
    id: 'historical',
    name: 'Historical',
    icon: Landmark,
    color: 'bg-orange-600',
    hoverColor: 'hover:bg-orange-700',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-100',
    lightBg: 'bg-orange-50',
    description: 'Explore monuments and heritage sites'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    icon: Mountain,
    color: 'bg-amber-600',
    hoverColor: 'hover:bg-amber-700',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-100',
    lightBg: 'bg-amber-50',
    description: 'Thrilling outdoor activities and sports'
  },
  {
    id: 'pilgrimage',
    name: 'Pilgrimage',
    icon: Church,
    color: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-100',
    lightBg: 'bg-purple-50',
    description: 'Spiritual journeys and religious sites'
  },
  {
    id: 'others',
    name: 'Others',
    icon: Compass,
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-100',
    lightBg: 'bg-blue-50',
    description: 'Unique and mixed experiences'
  }
];
