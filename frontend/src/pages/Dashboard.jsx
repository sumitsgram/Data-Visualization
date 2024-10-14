import React, { useContext, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import useFetchData, { useFetchTimeTrend } from "../hooks/useFetchData";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import DateRangePicker from "../components/DateRangePicker";
import Filter from "../components/Filter";
import SharedURL from "../components/SharedURL";

const Dashboard = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const { data, loading, error } = useFetchData(filters);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const { data: timeTrendData } = useFetchTimeTrend(selectedFeature, filters);


  const handleBarClick = (feature) => {
    setSelectedFeature(feature);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Product Analytics Dashboard</h1>
      <SharedURL setFilters={setFilters} />
      <DateRangePicker onDateChange={setFilters} />
      <Filter onFilterChange={setFilters} />
      <BarChart data={data} onBarClick={handleBarClick} />
      {selectedFeature && <LineChart data={timeTrendData} />}
    </div>
  );
};

export default Dashboard;
