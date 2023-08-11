import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";

export const GET = async (request: Request) => {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const POST = async (request: Request) => {
  const req = await request.json();
  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: req.user_id,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ message: "An Error Occured" });
  }
};
