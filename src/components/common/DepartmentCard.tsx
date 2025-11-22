import React from "react";
import { Link } from "react-router-dom";
import { Department } from "../../data/departments";

interface Props {
    department: Department;
}

const DepartmentCard: React.FC<Props> = ({ department }) => (
    <Link to={department.path} className="department-card">
        <h3>{department.name}</h3>
        <p>{department.summary}</p>
    </Link>
);

export default DepartmentCard;