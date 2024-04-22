"use client"
import Navbar from "@/components/sections/navbar";
import { FunctionComponent, useState } from "react";
import Todo from "./todo/page";
import ViewContainer from "@/components/layout/view-container";
import PageContent from "@/components/layout/page-content";

export default function Home() {

  const [pageName, setPageName] = useState<FunctionComponent>(Todo);

  return (
    <main>
      <Navbar />
      <PageContent>
        <ViewContainer>
          <Todo />
        </ViewContainer>
      </PageContent>
      
    </main>
  );
}
