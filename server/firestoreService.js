import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const firestoreService = {
  getLessonPlans: async () => {
    const snapshot = await db.collection("lessonPlans").get();
    return snapshot.docs.map((doc) => doc.data());
  },

  addLessonPlan: async (lessonPlan) => {
    console.log(db);
    try {
      await setDoc(doc(db, "lessonPlans", lessonPlan.id), lessonPlan);
      console.log("Document written with ID: ", lessonPlan.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },

  createLessonPlan: async (title, objectives, gradeLevel) => {
    const lessonPlanRef = doc(collection(db, "lessonPlans")); // creates a reference for a new document in the "lessonPlans" collection

    const lessonPlan = {
      id: id,
      title: title,
      objectives: objectives,
      gradeLevel: gradeLevel,
      subject: subject,
      activities: [],
    };

    await setDoc(lessonPlanRef, lessonPlan); // sets the new document with the lessonPlan data

    return lessonPlanRef.id; // returns the id of the created lesson plan
  },
  // Add more methods here as needed
};

export default firestoreService;
