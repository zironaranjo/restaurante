import { PropTypes } from "prop-types";

const Card = (props) => {
  const { img, description, price, inventory } = props;

  return (
    <div className="bg-[#1F1D2B] p-6 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        className="w-50 h-40  -mt-20  rounded-full"
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
      <p className="text-gray-600">{inventory} DELICATES</p>
    </div>
  );
};
Card.propTypes = {
    img: PropTypes.bool.isRequired,
    description: PropTypes.func.isRequired,
    price: PropTypes.func.isRequired,
    inventory: PropTypes.func.isRequired
    
  };




export default Card;