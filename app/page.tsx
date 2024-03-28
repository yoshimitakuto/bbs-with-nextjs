// csrの場合は「"use client"」を最初に書く必要があるが、現在はssrのため不要

import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    // ssg: force-cache, ssr: no-store, isr: next: { revalidate: 3600 }
    cache: "no-store",
  });

  const BBSAllData: BBSData[] = await response.json();

  return BBSAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
