import Header from "./Header";

const LessonPlanMetaData = ({ gradeLevel, subject, material }) => {
  return (
    <div className="flex px-4 justify-left space-x-6 bg-purple-50 rounded">
      <div className="w-24 mr-2">
        <Header>GRADE</Header>
        <h3 className="text-gray-600 mb-4 text-sm">{gradeLevel}</h3>
      </div>
      <div className="w-24 mr-2">
        <Header>SUBJECT</Header>
        <h3 className="text-gray-600 mb-4 text-sm">{subject}</h3>
      </div>
      <div className="w-100 mr-2">
        <Header>MATERIAL</Header>
        <h3 className="text-gray-600 mb-4 text-sm">{material}</h3>
      </div>
    </div>
  );
};

export default LessonPlanMetaData;
