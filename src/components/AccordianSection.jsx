import React from "react";

const AccordianSection = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-[#0c556d] mb-6">
        Frequently Asked Questions
      </h2>

      {/* Accordion Items */}
      {[
        { title: "What is Diabetes? Explained", content: "Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). It can lead to serious health issues if not managed properly." },
        { title: "B.M.R Explained", content: "BMR (Basal Metabolic Rate) is the number of calories your body needs to maintain basic functions like breathing and circulation while at rest." },
        { title: "Full Form of E.C.G", content: "ECG (Electrocardiogram) is a test that measures the electrical activity of the heart and helps detect heart-related conditions." },
        { title: "Blood Pressure Levels", content: "Normal blood pressure is typically around 120/80 mmHg. High or low levels may indicate potential health risks." },
        { title: "Health & Nutrition", content: "Good nutrition is key to maintaining health. A balanced diet rich in vitamins and minerals supports overall well-being." },
      ].map((item, index) => (
        <div key={index} className="collapse bg-white shadow-md rounded-lg mb-4">
          <input type="checkbox" className="peer hidden" id={`accordion-${index}`} />
          <label
            htmlFor={`accordion-${index}`}
            className="collapse-title cursor-pointer bg-[#0c556d] text-white text-lg font-semibold px-5 py-3 rounded-t-lg peer-checked:bg-[#084255] transition-all"
          >
            {item.title}
          </label>
          <div className="collapse-content bg-[#E3F3F9] text-gray-700 px-5 py-4 rounded-b-lg peer-checked:block hidden transition-all">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianSection;
