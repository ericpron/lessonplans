import db from "./firebase";
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
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

  getLessonPlanById: async (id) => {
    try {
      const db = getFirestore();
      const lessonPlanDocument = doc(db, "lessonPlans", id);
      const lessonPlanSnapshot = await getDoc(lessonPlanDocument);

      if (!lessonPlanSnapshot.exists()) {
        console.log("No such document!");
        return null;
      } else {
        console.log("Document data:", lessonPlanSnapshot.data());
        return lessonPlanSnapshot.data();
      }
    } catch (error) {
      console.error("Error fetching plan: ", error);
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
