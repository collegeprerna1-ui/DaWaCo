import {
  Pill,
  FlaskConical,
  Stethoscope,
  HeartPulse,
  Baby,
  Dumbbell,
  Leaf,
} from "lucide-react";

const categories = [
  {
    title: "Medicines",
    desc: "Prescription & OTC",
    icon: <Pill className="text-pink-500 0" size={36} />,
    bg: "bg-blue-50",
  },
  {
    title: "Vitamins",
    desc: "Health Supplements",
    icon: <FlaskConical className="text-green-500" size={36} />,
    bg: "bg-green-50",
  },
  {
    title: "Diabetes Care",
    desc: "Blood Sugar Management",
    icon: <HeartPulse className="text-purple-500" size={36} />,
    bg: "bg-purple-50",
  },
  {
    title: "Healthcare Devices",
    desc: "Medical Equipment",
    icon: <Stethoscope className="text-blue-600" size={36} />,
    bg: "bg-orange-50",
  },
  {
    title: "Personal Care",
    desc: "Skin & Body Care",
    icon: <HeartPulse className="text-pink-400" size={36} />,
    bg: "bg-pink-50",
  },
  {
    title: "Baby Care",
    desc: "Mother & Baby Products",
    icon: <Baby className="text-yellow-500" size={36} />,
    bg: "bg-yellow-50",
  },
  {
    title: "Fitness",
    desc: "Protein & Nutrition",
    icon: <Dumbbell className="text-orange-500" size={36} />,
    bg: "bg-orange-50",
  },
  {
    title: "Ayurveda",
    desc: "Natural Remedies",
    icon: <Leaf className="text-green-600" size={36} />,
    bg: "bg-emerald-50",
  },
];

const CategorySection = () => {
  return (
    <div className="px-10 py-12 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <p className="text-gray-500 mt-1">
            Browse our wide range of healthcare products
          </p>
        </div>
        <button className="text-blue-600 font-medium hover:underline">
          View All →
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${cat.bg} rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition cursor-pointer`}
          >
            <div className="mb-4">{cat.icon}</div>
            <h3 className="font-semibold">{cat.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {cat.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
