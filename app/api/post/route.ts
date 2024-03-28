import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // 本来であれば、ページネーションごとに取得するべき（例：　１ページ目は10件 ２ページ目は10件...といったように）
  // ページネーションで１０件ごと取得する場合は、prisma.post.findMany({ take: 10, skip: 0 })とする
  const allBBSPosts = await prisma.post.findMany();
  return NextResponse.json(allBBSPosts);
}
