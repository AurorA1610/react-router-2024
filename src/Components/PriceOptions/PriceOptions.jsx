import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const membershipOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$30/month",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker usage",
        "Limited group fitness classes",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: "$50/month",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker usage",
        "Unlimited group fitness classes",
        "Access to sauna and steam room",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: "$80/month",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker usage",
        "Unlimited group fitness classes",
        "Access to sauna and steam room",
        "Personal trainer sessions (2 sessions/month)",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-400">
        Explore our membership options
      </h1>
      {membershipOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
