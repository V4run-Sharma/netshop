import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { User } from "../../db/models/user-model";
import { connectDB } from "../../db/config";

export async function POST(req: Request) {
  connectDB();
  const { username, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });
    if (existingEmail) {
      throw new NextResponse("Email already exists");
    }
    if (existingUsername) {
      throw new NextResponse("Username already exists");
    }
    const user = { user_name: username, email, password: hashedPassword };
    const newUser = await User.create(user);
    return NextResponse.json(`User Created`, { status: 200 });
  } catch (error) {
    return NextResponse.json(`Internal Error: ${error}`, { status: 500 });
  }
}
