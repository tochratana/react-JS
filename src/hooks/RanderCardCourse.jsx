import React from "react";
import { useEffect, useState } from "react";
const RanderCardCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("../store/course.json");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, ["../store/course.json"]);
  return { courses, loading, error };
};

export default RanderCardCourse;
