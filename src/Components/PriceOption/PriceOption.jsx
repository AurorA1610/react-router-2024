import { PropTypes } from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
      <h2>
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl my-8">{name}</h4>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-400 w-full py-2 font-bold rounded-lg hover:bg-green-900">
        Buy now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
