import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SharedURL = ({ setFilters }) => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const age = searchParams.get("age");
    const gender = searchParams.get("gender");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    setFilters({ age, gender, startDate, endDate });
  }, [searchParams, setFilters]);

  return null;
};

export default SharedURL;
