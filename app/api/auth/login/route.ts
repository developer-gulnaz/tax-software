import bcrypt from "bcryptjs";
import clientPromise from "helper/db";
import { SessionOptions, getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";

const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "user_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("gram-panchayat");
    const user = await db.collection("admin").findOne({ username });
    console.log("user--- "+ username);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    // Create session
    const res = NextResponse.json({ message: "Login successful", userId: user._id });
    const session = await getIronSession(req, res, sessionOptions);
    session.user = { id: user._id, username: user.username };
    await session.save();

    // Redirect to dashboard
    res.headers.set("Location", "/dashboard");
    res.status = 302;
    return res;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
