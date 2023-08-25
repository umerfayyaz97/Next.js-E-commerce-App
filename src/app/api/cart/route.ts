// import { NextRequest, NextResponse } from "next/server";
// import { cartTable, db } from "@/lib/drizzle";
// import { v4 as uuid } from "uuid";
// import { cookies } from "next/headers";
// import { auth } from "@clerk/nextjs";

// export const GET = async (request: NextRequest) => {
//   try {
//     const res = await db.select().from(cartTable);
//     return NextResponse.json({ res });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };

// export const POST = async (request: Request) => {
//   const req = await request.json();
//   const { userId } = auth();
//   const uid = uuid();
//   const setCookies = cookies();
//   // setCookies.set();
//   try {
//     // if (req && userId) {
//     const res = await db
//       .insert(cartTable)
//       .values({
//         product_id: req.product_id,
//         quantity: 1,
//         user_id: userId as string,
//       })
//       .returning();

//     return NextResponse.json({ res });
//     // } else {
//     //   throw new Error("Failed to add data to DB");
//     // }
//   } catch (error) {
//     return NextResponse.json({ message: "An Error Occured" });
//   }
// };
