import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarksData = [
    {
      id: 1,
      student: "Alice",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 90,
    },
    {
      id: 2,
      student: "Bob",
      mathMarks: 78,
      physicsMarks: 82,
      chemistryMarks: 85,
    },
    {
      id: 3,
      student: "Charlie",
      mathMarks: 92,
      physicsMarks: 88,
      chemistryMarks: 95,
    },
    {
      id: 4,
      student: "David",
      mathMarks: 68,
      physicsMarks: 72,
      chemistryMarks: 70,
    },
    {
      id: 5,
      student: "Emily",
      mathMarks: 75,
      physicsMarks: 80,
      chemistryMarks: 78,
    },
    {
      id: 6,
      student: "Frank",
      mathMarks: 80,
      physicsMarks: 85,
      chemistryMarks: 82,
    },
    {
      id: 7,
      student: "Grace",
      mathMarks: 88,
      physicsMarks: 92,
      chemistryMarks: 90,
    },
  ];

  return (
    <div>
      <h2 className="text-5xl mt-8">Students&apos; Marks</h2>
      <LChart width={800} height={400} data={studentMarksData}>
        <XAxis dataKey="student" />
        <YAxis></YAxis>
        <Line stroke="purple" dataKey="mathMarks"></Line>
        <Line stroke="red" dataKey="physicsMarks"></Line>
        <Line stroke="blue" dataKey="chemistryMarks"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
