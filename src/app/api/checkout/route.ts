import { NextRequest, NextResponse } from "next/server";
import { db } from "../../firebase/firebaseConfig"; // Use absolute path for consistency
import { collection, addDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { formData } = await req.json();

    // Save the form data to Firestore
    await addDoc(collection(db, "checkoutData"), {
      ...formData,
      timestamp: new Date(),
    });

    return NextResponse.json({ message: "Form data successfully saved." }, { status: 200 });
  } catch (error) {
    console.error("Error saving form data:", error);
    return NextResponse.json({ error: "Error saving form data" }, { status: 500 });
  }
}
