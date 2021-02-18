import CategoryBox from "./CategoryBox";
import CategoryNav from "./CategoryNav";

function Home() {
  return (
    <div>
      <h1>College Prep Resource Hub</h1>
      <h3>(For first-generation, low-income high school students)</h3>
      <CategoryNav />
      <div className="important-dates-sect">
        <h2>Financial Aid Deadlines</h2>
        <table>
          <tbody>
            <tr>
              <th>Financial Aid</th>
              <th>Deadline</th>
            </tr>
            <tr>
              <td>2021-22 FAFSA Federal Deadline</td>
              <td>June 30, 2022 at 11:59pm CT.</td>
            </tr>
            <tr>
              <td>2021-22 FAFSA State Deadline</td>
              <td>
                <a
                  target="_blank"
                  href="https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines"
                >
                  Varies by state - info here
                </a>
              </td>
            </tr>
            <tr>
              <td>2021 CSS Profile</td>
              <td>Varies by college/university</td>
            </tr>
          </tbody>
        </table>

        <h2>Virtual College Fairs</h2>
        <table>
          <tbody>
            <tr>
              <th>Virtual College Fairs</th>
              <th>Event Date</th>
              <th>Registration Link</th>
            </tr>
            <tr>
              <td>General College Fair</td>
              <td>Feb. 28 @ 1:00pm - 7:00pm EDT</td>
              <td>
                <button>
                  <a
                    target="_blank"
                    href="https://virtualcollegefairs.org/events/42/exhibitors"
                  >
                    Register Here
                  </a>
                </button>
              </td>
            </tr>

            <tr>
              <td>STEM College Fair</td>
              <td>March 7 @ 1:00pm - 5:00pm EDT</td>
              <td>
                <button>
                  <a
                    target="_blank"
                    href="https://virtualcollegefairs.org/events/80/exhibitors"
                  >
                    Register Here
                  </a>
                </button>
              </td>
            </tr>

            <tr>
              <td>Performing & Visual Arts College Fair</td>
              <td>March 16 @ 4:00pm - 8:00pm EDT</td>
              <td>
                <button>
                  <a
                    target="_blank"
                    href="https://virtualcollegefairs.org/events/83/exhibitors"
                  >
                    Register Here
                  </a>
                </button>
              </td>
            </tr>

            <tr>
              <td>Western U.S. College Fair</td>
              <td>April 10 @ 3:00pm - 7:00pm EDT</td>
              <td>
                <button>
                  <a
                    target="_blank"
                    href="https://virtualcollegefairs.org/events/84/exhibitors"
                  >
                    Register Here
                  </a>
                </button>
              </td>
            </tr>

            <tr>
              <td>Southeastern U.S. College Fair</td>
              <td>April 20 @ 3:00pm - 7:00pm EDT</td>
              <td>
                <button>
                  <a
                    target="_blank"
                    href="https://virtualcollegefairs.org/events/85/exhibitors"
                  >
                    Register Here
                  </a>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CategoryBox title={"SAT/ACT"} linkto={"/sat-act-resources"} />
      <CategoryBox
        title={"Summer Programs/Extracurriculars"}
        linkto={"/summer-programs-extracurriculars"}
      />
      <CategoryBox
        title={"Scholarships/Financial Aid"}
        linkto={"/scholarships-fin-aid"}
      />
      <CategoryBox
        title={"Choosing the Right College"}
        linkto={"/choosing-college"}
      />
    </div>
  );
}

export default Home;
