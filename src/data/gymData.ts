/**
 * Lucky Gym - Verified Business Data & Configuration
 * Sourced directly from official business details.
 */

export const GYM_DETAILS = {
  name: "Lucky Gym",
  tagline: "BUILT BY EFFORT. POWERED BY YOU.",
  subheadline: "Take the next step in your fitness journey at Lucky Gym, Gajendragada.",
  rating: 4.9,
  maxRating: 5.0,
  reviewsCount: 129,
  phone: "07204326236",
  phoneFormatted: "07204 326236",
  whatsappNumber: "917204326236",
  whatsappLink: "https://wa.me/917204326236",
  defaultWhatsAppMessage: "Hello Lucky Gym! I visited your website and would like to know about membership, training programmes, and gym timings.",
  address: "PXH7+H5G, Gadag Road, Gajendragada, Karnataka 582114",
  plusCode: "PXH7+H5G",
  landmark: "Gadag Road, Gajendragada",
  state: "Karnataka",
  pincode: "582114",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lucky+Gym+Gadag+Road+Gajendragada+Karnataka+582114",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Lucky+Gym+Gadag+Road+Gajendragada+Karnataka+582114",
  hoursListed: "Listed as open 24 hours",
  hoursNote: "Listed as open 24 hours; confirm current daily schedule with the gym before your first visit.",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || GYM_DETAILS.defaultWhatsAppMessage;
  return `https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export interface TrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  equipmentFocus: string[];
  whatsappMessage: string;
}

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "strength-training",
    title: "Strength & Resistance Training",
    subtitle: "Heavy Iron & Hypertrophy",
    description: "Build raw strength, muscle mass, and bone density with dedicated free weights, Olympic barbell stations, and plate-loaded gear.",
    highlights: ["Barbell compound lifts", "Dumbbell progression", "Cable and plate-loaded stations"],
    equipmentFocus: ["Power Racks", "Olympic Plates", "Adjustable Benches"],
    whatsappMessage: "Hello Lucky Gym! I would like to enquire about Strength and Weight Training facilities and timings at your Gajendragada gym.",
  },
  {
    id: "conditioning",
    title: "Cardio & Stamina Conditioning",
    subtitle: "Endurance & Work Capacity",
    description: "Improve cardiovascular endurance, burn calories, and build high energy levels with high-intensity interval conditioning.",
    highlights: ["Cardio conditioning", "High-energy endurance circuits", "Functional stamina workouts"],
    equipmentFocus: ["Cardio Machines", "Bodyweight Circuits", "Interval Stations"],
    whatsappMessage: "Hello Lucky Gym! I am interested in Cardio & Stamina conditioning programmes. Could you share details?",
  },
  {
    id: "technique-coaching",
    title: "Form Guidance & Beginner Onboarding",
    subtitle: "Safe Lifting Fundamentals",
    description: "Start your fitness journey on the right foot with proper posture guidance, injury prevention tips, and structured beginner routines.",
    highlights: ["Beginner-friendly orientation", "Proper lifting posture & safety", "Routine planning"],
    equipmentFocus: ["Technique Barbells", "Guide Machines", "Mobility Drills"],
    whatsappMessage: "Hello Lucky Gym! I am a beginner looking for guidance on starting workouts and getting proper coaching. What are the options?",
  },
  {
    id: "weight-management",
    title: "Targeted Weight & Body Management",
    subtitle: "Fat Loss & Body Recomposition",
    description: "Work towards your weight management goals through consistent strength workouts and active guidance designed for long-term health.",
    highlights: ["Structured daily routines", "Consistency tracking", "Balanced full-body splits"],
    equipmentFocus: ["Free Weights", "Core & Resistance Gear", "Cardio Stations"],
    whatsappMessage: "Hello Lucky Gym! I would like to know how Lucky Gym can help me with weight loss / fitness goals and membership fees.",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "weights" | "cardio" | "space";
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Heavy Dumbbell & Free Weight Rack",
    category: "weights",
    categoryLabel: "Free Weights",
    imageUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
    description: "Dumbbells and free weight stations for upper and lower body progression.",
  },
  {
    id: "g2",
    title: "Olympic Barbell & Plate Station",
    category: "weights",
    categoryLabel: "Strength",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    description: "Heavy plate-loaded barbell setup for deadlifts, squats, and pressing movements.",
  },
  {
    id: "g3",
    title: "Cardio & Conditioning Zone",
    category: "cardio",
    categoryLabel: "Cardio",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80",
    description: "High-intensity cardio machines designed for conditioning and cardiovascular health.",
  },
  {
    id: "g4",
    title: "Cable Crossover & Resistance Racks",
    category: "weights",
    categoryLabel: "Resistance",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    description: "Multi-functional cable and pulley stations for isolating muscle groups.",
  },
  {
    id: "g5",
    title: "Functional Workout Floor",
    category: "space",
    categoryLabel: "Gym Space",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    description: "Spacious training floor with rubberized shock-absorbing flooring.",
  },
  {
    id: "g6",
    title: "Focus & Dedication Atmosphere",
    category: "space",
    categoryLabel: "Gym Space",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
    description: "Industrial lighting and high-energy environment built for progress.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Where is Lucky Gym located in Gajendragada?",
    answer: "Lucky Gym is located on Gadag Road in Gajendragada, Karnataka 582114 (Google Plus Code: PXH7+H5G). You can get direct turn-by-turn directions by clicking our Google Maps button on this page.",
  },
  {
    question: "What are the gym timings and schedule?",
    answer: "Lucky Gym is listed as open 24 hours on public business directories. Because training staff hours, cleaning slots, or session timings may vary, we recommend confirming the exact daily schedule directly with the owner on WhatsApp (917204326236) before your visit.",
  },
  {
    question: "How do I enquire about membership fees and registration?",
    answer: "To ensure you receive the most up-to-date and tailored membership pricing (monthly, quarterly, or annual plans), simply tap the 'Join Us on WhatsApp' or 'Call Gym' button. The gym team will assist you immediately.",
  },
  {
    question: "Can beginners join Lucky Gym?",
    answer: "Yes, Lucky Gym welcomes both beginners and experienced lifters. The environment is supportive, and you can request basic guidance on machine setup and workout routines to train safely.",
  },
  {
    question: "How can I contact Lucky Gym directly?",
    answer: "You can call 07204326236 directly or click any of the WhatsApp buttons to chat with the gym at +91 72043 26236. Our phone and WhatsApp lines are active for visitor enquiries.",
  },
];
