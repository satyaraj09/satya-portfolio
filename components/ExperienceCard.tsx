const ExperienceCard = () => {
  const experience = [
    {
      company: "Vega Enterprises",
      role: "Software Developer",
      period: "June 2025 - Current",
    },
  ];

  return (
    <div className="p-6 shadow transition-all duration-500 ease-in-out hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 rounded-xl min-h-[200px]">
      <h2 className="text-3xl font-semibold mb-4 text-[#00CAFF]">Experience</h2>
      {experience.map((item, index) => (
        <div
          key={index}
          className="w-full p-5 bg-gray-100 rounded-xl space-y-2 shadow"
        >
          <h3 className="text-lg font-bold text-gray-800">{item.company}</h3>
          <div className="text-sm flex items-center justify-between">
            <p className="text-[#00CAFF] font-medium">{item.role}</p>
            <p className="text-gray-500">{item.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
