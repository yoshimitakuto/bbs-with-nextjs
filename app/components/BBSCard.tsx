import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        quae id, fugiat optio explicabo voluptatibus fuga, reiciendis quis,
        sequi quas officiis dolor ad eligendi! Laborum culpa autem illum totam
        vero.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/bbs-posts/1" className="text-blue-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
