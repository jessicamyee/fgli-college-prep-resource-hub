import CategoryBox from "./CategoryBox";
import CategoryNav from "../nav-files/CategoryNav";
import "./HomePage.css";
import Table from "react-bootstrap/Table";

function Home() {
  return (
    <div>
      <header className="home-header-section">
        <h1 id="homepage-header">College Prep Resource Hub</h1>
        <h5 id="homepage-subheading">
          Supporting first-generation, low-income high school students
        </h5>
      </header>
      <CategoryNav />
      <div className="home-body">
        {/* Tables for homepage   */}
        <div className="important-dates-sect">
          <h2 className="table-header">Financial Aid Deadlines</h2>
          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>Financial Aid</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
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
          </Table>

          <h2 className="table-header">Virtual College Fairs</h2>
          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>Virtual College Fairs</th>
                <th>Event Date</th>
                <th>Registration Info</th>
              </tr>
            </thead>
            <tbody>
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
          </Table>
        </div>

        {/* Utilizing the CategoryBox component to list out the categories on the homepage   */}
        <div className="categorybox-set">
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
      </div>
    </div>
  );
}

export default Home;
