import React from "react";

const healthConditions = [
  { icon: "https://cdn.lordicon.com/lhrqmkda.json", title: "Cold & Immunity" },
  { icon: "https://cdn.lordicon.com/aydxrkfl.json", title: "Cardiac Care" },
  { icon: "https://cdn.lordicon.com/yujfsuvq.json", title: "Pregnancy Care" },
  { icon: "https://cdn.lordicon.com/lqcyrjta.json", title: "Fracture Care" },
  { icon: "https://cdn.lordicon.com/arwxzizt.json", title: "Respiratory" },
  { icon: "https://cdn.lordicon.com/dicvhxpz.json", title: "Eye Care" },
  { icon: "https://cdn.lordicon.com/fyutcuil.json", title: "Pain Relief" },
  { icon: "https://cdn.lordicon.com/ujjdsbrc.json", title: "Sexual Health" },
];

const BrowseByHealth = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Browse By Health Condition
        </h2>

        {/* Health Condition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {healthConditions.map((condition, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-4 border border-teal-400 rounded-xl shadow-sm hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                <lord-icon
                  src={condition.icon}
                  trigger="loop"
                  colors="primary:#ff9800,secondary:#424242"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </div>
              <h3 className="text-lg font-medium text-gray-800">{condition.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByHealth;
