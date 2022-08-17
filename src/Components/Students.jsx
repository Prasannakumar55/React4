import React from 'react'
import './Navbar.css';

const Students = () => {
  return (
    <div >
    
    <div className='Addstudent'>
    <h1>Students</h1>
    <button>Add New Student</button>
    </div>
    <table border={1}>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
        <tr>
            <td>Naveen</td>
            <td>20</td>
            <td>ECE</td>
            <td>March</td>
            <td>Edit</td>
        </tr>
        <tr>
            <td>Nithin</td>
            <td>21</td>
            <td>Mech</td>
            <td>April</td>
            <td>Edit</td>
        </tr>
        <tr>
            <td>Abhishek</td>
            <td>22</td>
            <td>ECE</td>
            <td>may</td>
            <td>Edit</td>
        </tr>
        <tr>
            <td>Pitamber</td>
            <td>23</td>
            <td>Mech</td>
            <td>June</td>
            <td>Edit</td>
        </tr>
        <tr>
            <td>Pushpender</td>
            <td>24</td>
            <td>CSE</td>
            <td>July</td>
            <td>Edit</td>
        </tr>
    </table>
     
    </div>
  )
}

export default Students
