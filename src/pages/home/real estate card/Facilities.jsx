import PropTypes from "prop-types";

const Facilities = ({ data }) => {
  return <div className="flex gap-4 text-lg font-semibold">{data}</div>;
};

Facilities.propTypes = {
  data: PropTypes.array,
};

export default Facilities;
