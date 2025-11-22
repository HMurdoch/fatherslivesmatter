import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";
import { departments } from "../../data/departments";
import DepartmentCard from "../../components/common/DepartmentCard";

const DepartmentsIndex: React.FC = () => {
    return (
        <>
<PageHero
    title="Departments"
    subtitle="Specialised teams focusing on every part of the struggle fathers face."
    kicker="FLM Structure"
/>
<Section variant="light">
    <div className="grid grid--three">
        {departments.map((d) => (
            <DepartmentCard key={d.path} department={d} />
        ))}
    </div>
</Section>
</>
    );
};

export default DepartmentsIndex;