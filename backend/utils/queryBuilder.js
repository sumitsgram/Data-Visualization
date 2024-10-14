// utils/queryBuilder.js
const buildQuery = (query) => {
  const filter = {};
  if (query.age) filter.age = query.age;
  if (query.gender) filter.gender = query.gender;
  // Add other filters as needed

  return filter;
};

module.exports = { buildQuery };
