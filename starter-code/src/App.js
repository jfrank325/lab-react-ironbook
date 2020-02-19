import React from 'react';
import users from './users';

class App extends React.Component {
  state = {
    users: users,
    search: '',
    isTeacher: '',
    isStudent: '',
    campusSearch: '',
  };

  handleCheckboxChange = event => {
    let isTeacher = event.target.checked;
    let filteredRoles = users.filter(elem => {
      if (elem.role === 'teacher') {
        return isTeacher;
      }
    });
    this.setState(
      {
        users: filteredRoles,
        isTeacher: isTeacher,
      },
      () => console.log(this.state)
    );
  };

  handleCheckboxChangeStudent = event => {
    let isStudent = event.target.checked;
    let filteredRoles = users.filter(elem => {
      if (elem.role === 'student') {
        return isStudent;
      }
    });
    this.setState(
      {
        users: filteredRoles,
        isStudent: isStudent,
      },
      () => console.log(this.state)
    );
  };

  handleChange = event => {
    console.log(event.target.value);
    let search = event.target.value.toLowerCase();
    let filteredUsers = users.filter(elem => {
      console.log(elem.lastName.includes(search));
      if (elem.firstName.toLowerCase().includes(search) || elem.lastName.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      users: filteredUsers,
      search: search,
    });
  };

  handleChangeCampus = event => {
    let search = event.target.value;
    let filteredUsers = users.filter(elem => {
      if (elem.campus === search) {
        return true;
      }
    });
    this.setState(
      {
        users: filteredUsers,
        campusSearch: search,
      },
      () => console.log(this.state)
    );
  };

  render() {
    console.log(this.state.users);
    return (
      <div>
        <form onSubmit={this.searchByName}>
          <label htmlFor="search">Search</label>
          <input name="search" value={this.state.search} onChange={this.handleChange} />
          <label htmlFor="teacher">Teachers</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.isteacher}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="student">Students</label>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.isStudent}
            onChange={this.handleCheckboxChangeStudent}
          />
          <label htmlFor="campus">Campus</label>
          <select id="campus" name="campus" value={this.state.campusSearch} onChange={this.handleChangeCampus}>
            <option></option>
            <option value="Berlin">Berlin</option>
            <option value="Paris">Paris</option>
            <option value="Lisbon">Lisbon</option>
          </select>
        </form>

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.campus}</td>
                  <td>{user.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
