import CardWithHeading from "../CardWithHeading";
import CoursesList from "./CoursesList";

const CurrentCourses = () => {
  return (
    <>
      <CardWithHeading heading={"Courses In Progress"} content={ <CoursesList /> } />
    </>
  );
};

export default CurrentCourses;
