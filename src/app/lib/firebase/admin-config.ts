import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
    credential: cert({
        projectId: "trimmer-ec0f3",
        clientEmail:
            "firebase-adminsdk-fk850@trimmer-ec0f3.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
    }),
    storageBucket: "trimmer-ec0f3.appspot.com",
    databaseURL: "https://trimmer-ec0f3-default-rtdb.firebaseio.com",
};

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}
