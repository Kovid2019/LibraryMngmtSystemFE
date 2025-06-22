import { CustomCard } from "@components/customCard/CustomCard";
import { SectionTitle } from "@components/sectionTitle/SectionTitle";
import React from "react";

export const RecommendationSection = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Recommendations For You" />
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-2 ">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};
