const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    desc: "Pain relief and fever reducer",
    price: 25,
    discount: "10% OFF",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
  },
  {
    id: 2,
    name: "Vitamin D3 Tablets",
    desc: "Bone health supplement",
    price: 180,
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
  },
  {
    id: 3,
    name: "Amoxicillin 250mg",
    desc: "Antibiotic capsules",
    price: 120,
    discount: "5% OFF",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
  },
  {
    id: 4,
    name: "Ibuprofen 400mg",
    desc: "Anti-inflammatory medicine",
    price: 45,
    discount: "12% OFF",
    image:
      "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df",
  },
  {
    id: 5,
    name: "Cetirizine Tablets",
    desc: "Allergy relief medication",
    price: 65,
    discount: "8% OFF",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
  },
  {
    id: 6,
    name: "Multivitamin Tablets",
    desc: "Daily nutrition supplement",
    price: 250,
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
  },
  {
    id: 7,
    name: "Omeprazole 20mg",
    desc: "Gastric acid reducer",
    price: 85,
    discount: "10% OFF",
    image:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
  },
  {
    id: 8,
    name: "Calcium Supplements",
    desc: "Bone strength formula",
    price: 195,
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df",
  },
];

const FeaturedMedicines = () => {
  return (
    <div className="px-10 py-12 bg-gray-50">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-center mb-10">
        Featured Medicines
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {medicines.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-2xl p-4 hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-xl"
              />

              <span className="absolute top-2 right-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                {item.discount}
              </span>
            </div>

            {/* Info */}
            <h3 className="font-semibold mt-4">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {item.desc}
            </p>

            {/* Price */}
            <p className="text-green-600 font-semibold mt-3">
              ₹{item.price.toFixed(2)}
            </p>

            {/* Button */}
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMedicines;
