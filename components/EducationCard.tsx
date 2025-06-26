export default function EducationCard() {
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      period: "2022 - 2025",
      score: "8.5+ CGPA",
    },
    {
      title: "Higher Secondary School Certification",
      period: "2021 - 2022",
      score: "60%",
    },
    {
      title: "Secondary School Certification",
      period: "2019 - 2020",
      score: "77.60%",
    },
  ];

  return (
    <div className="p-6 shadow transition-all duration-500 ease-in-out hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 rounded-xl min-h-[200px]">
      <h2 className="text-3xl font-semibold mb-4 text-[#00CAFF]">Education</h2>
      <div className="space-y-5">
        {education.map((item, index) => (
          <div
            key={index}
            className="w-full p-5 bg-gray-100 rounded-xl space-y-2 shadow"
          >
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            <div className="text-sm flex items-center justify-between">
              <p className="text-gray-500">{item.period}</p>
              <p className="text-[#00CAFF] font-medium">{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
