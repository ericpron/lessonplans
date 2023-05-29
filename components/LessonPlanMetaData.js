const LessonPlanMetaData = ({ gradeLevel, subject, material }) => {
  return (
    <div className="flex p-2 justify-left space-x-6 bg-slate-100">
      <div className="w-24">
        <h3 className="text-gray-400 mb-1">Grade level:</h3>
        <p className="text-gray-600 font-bold mb-1">{gradeLevel}</p>
      </div>
      <div className="w-24">
        <h3 className="text-gray-400 mb-1">Subject:</h3>
        <p className="text-gray-600 mb-1">{subject}</p>
      </div>
      <div className="w-100">
        <h3 className="text-gray-400 mb-1">Material:</h3>
        <p className="text-gray-600 mb-1">{material}</p>
      </div>
    </div>
  );
};

export default LessonPlanMetaData;
