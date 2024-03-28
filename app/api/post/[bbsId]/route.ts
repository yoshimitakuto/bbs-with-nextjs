import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { bbsId: string } }
) {
  const bbsId = params.bbsId;
  // 本来であれば、ページネーションごとに取得するべき（例：　１ページ目は10件 ２ページ目は10件...といったように）
  // ページネーションで１０件ごと取得する場合は、prisma.post.findMany({ take: 10, skip: 0 })とする
  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId), // urlで取得すると文字列なので、数値に変換する
    },
  });
  return NextResponse.json(bbsDetailData);
}
