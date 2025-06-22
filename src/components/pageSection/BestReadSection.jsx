import { CustomCard } from "@components/customCard/CustomCard";
import { SectionTitle } from "@components/sectionTitle/SectionTitle";
import React from "react";

export const BestReadSection = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Best Read" />
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-2 ">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};
