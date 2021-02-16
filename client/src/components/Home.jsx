
import CategoryBox from "./CategoryBox";

function Home() {
  return (
    <div>
      <h1>College Prep Resource Hub</h1>
      <h3>(For first-generation, low-income high school students)</h3>
      <h2>HP: Insert Important Dates Here</h2>
      <CategoryBox title={"SAT/ACT"} linkto={"/sat-act-resources"} />
      <CategoryBox title={"Summer Programs/Extracurriculars"} linkto={"/summer-programs-extracurriculars"} />
      <CategoryBox title={"Scholarships/Financial Aid"} linkto={"/scholarships-fin-aid"} />
      <CategoryBox title={"Choosing the Right College"} linkto={"/choosing-college"} />
    </div>
  );
}

export default Home;
