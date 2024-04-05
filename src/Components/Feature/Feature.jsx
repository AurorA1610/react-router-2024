import { PropTypes } from "prop-types";
import { CgCheck } from "react-icons/cg";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <CgCheck className="text-green-700 text-3xl me-2" />
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
