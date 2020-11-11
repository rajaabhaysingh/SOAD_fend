import React from 'react';
import "../../styles/publicpages.css"
import {Table} from "react-bootstrap"

const Jobs = () => {
  return(
    <div>
      <h2 className="text-dark pl-4 mb-4">Jobs</h2>
        <Table striped bordered hover>
            <thead className="customtable">
                <tr>
                <th>Serial No.</th>
                <th>Title</th>
                <th>Position</th>
                <th>Department</th>
                <th>Duration</th>
                <th>Type</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Software Engineer</td>
                <td>Junior SDE</td>
                <td>Techinical</td>
                <td>02/05/2014-17 (3-years)</td>
                <td>Full-Time</td>
                <td><span class="badge badge-success">Current</span></td>
                </tr>
                <tr>
                <td>2</td>
                <td>AI Research Engineer</td>
                <td>Researcher</td>
                <td>Techinical</td>
                <td>02/05/2015-17 (2-years)</td>
                <td>Full-Time</td>
                <td><span class="badge badge-danger">Done</span></td>
                </tr>
                <tr>
                <td>3</td>
                <td>Cyber Secrity Analyst</td>
                <td>Senior Analyst</td>
                <td>Techinical</td>
                <td>02/05/2017-20 (3-years)</td>
                <td>Part-Time</td>
                <td><span class="badge badge-danger">Done</span></td>
                </tr>
                <tr>
                <td>4</td>
                <td>Software Engineer</td>
                <td>Junior SDE</td>
                <td>Techinical</td>
                <td>02/05/2014-17 (3-years)</td>
                <td>Full-Time</td>
                <td><span class="badge badge-danger">Done</span></td>
                </tr>
                <tr>
                <td>5</td>
                <td>AI Research Engineer</td>
                <td>Researcher</td>
                <td>Techinical</td>
                <td>02/05/2015-17 (2-years)</td>
                <td>Full-Time</td>
                <td><span class="badge badge-danger">Done</span></td>
                </tr>
                <tr>
                <td>6</td>
                <td>Cyber Secrity Analyst</td>
                <td>Senior Analyst</td>
                <td>Techinical</td>
                <td>02/05/2017-20 (3-years)</td>
                <td>Part-Time</td>
                <td><span class="badge badge-danger">Done</span></td>
                </tr>
                <tr>
                <td>7</td>
                <td>Software Engineer</td>
                <td>Junior SDE</td>
                <td>Techinical</td>
                <td>02/05/2014-17 (3-years)</td>
                <td>Full-Time</td>
                <td><span class="badge badge-danger">Done</span></td>
                </tr>
                <tr>
                <td>8</td>
                <td>AI Research Engineer</td>
                <td>Researcher</td>
                <td>Techinical</td>
                <td>02/05/2015-17 (2-years)</td>
                <td>Full-Time</td>
                <td><span class="badge badge-danger">Done</span></td>
                </tr>
                <tr>
                <td>9</td>
                <td>Cyber Secrity Analyst</td>
                <td>Senior Analyst</td>
                <td>Techinical</td>
                <td>02/05/2017-20 (3-years)</td>
                <td>Part-Time</td>
                <td><span class="badge badge-danger">Done</span></td>
                </tr>
                
            </tbody>
            </Table>
    </div>
  )
}

export default Jobs; 