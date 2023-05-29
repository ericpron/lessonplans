import Header from "./Header";

const LessonPlanMetaData = ({ gradeLevel, subject, material }) => {
  return (
    <div className="flex px-4 pt-2 pb-4 justify-left space-x-6 bg-slate-100 rounded">
      <div className="w-24 mr-2">
        <Header>GRADE</Header>
        <h3 className="text-gray-600 my-1">{gradeLevel}</h3>
      </div>
      <div className="w-24 mr-2">
        <Header>SUBJECT</Header>
        <h3 className="text-gray-600 my-1">{subject}</h3>
      </div>
      <div className="w-100 mr-2">
        <Header>MATERIAL</Header>
        <h3 className="text-gray-600 my-1">{material}</h3>
      </div>
    </div>
  );
};

export default LessonPlanMetaData;
