import db from "./firebase";
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

const firestoreService = {
  getLessonPlans: async () => {
    console.log("from firestore server: ", db);
    try {
      const db = getFirestore();
      const lessonPlansCollection = collection(db, "lessonPlans");
      const snapshot = await getDocs(lessonPlansCollection);
      return snapshot.docs.map((doc) => doc.data());
    } catch (error) {
      console.error("Error fetching plans: ", error);
    }
  },

  addLessonPlan: async (lessonPlan) => {
    console.log("from firestore server: ", db);
    try {
      await setDoc(doc(db, "lessonPlans", lessonPlan.id), lessonPlan);
      console.log("Document written with ID: ", lessonPlan.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },
};

export default firestoreService;
