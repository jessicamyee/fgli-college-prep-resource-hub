//! So can we list 4 of those CategoryBox tags under h2 and call it under the category name so that when we select "see resources" it'll route to the ResouceCategory component route?

import CategoryBox from "./CategoryBox"


function Home() {
  return (
    <div>
      <h2>HP: Insert Important Dates Here</h2>
      <CategoryBox />
    </div>
  );
}

export default Home;