import axios from 'axios';
import React, { Component } from 'react';
import UserItem from './UserItem';
import './UsersListing.scss';

export class UsersListing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      page: 1,
      pages: 1
    }
  }

  // On Mount
  componentDidMount() {
    axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
    .then(res => {
      if (res && res.status === 200) {
        this.setState({
          users: res.data.data,
          pages: res.data.total_pages
        })
      }
    })
    .catch(error => console.log(error))
  }

  // On Update 
  componentDidUpdate() {
    axios.get(`https://reqres.in/api/users?page=${this.state.page}`)
    .then(res => {
      if (res && res.status === 200) {
        this.setState({
          users: res.data.data,
        })
      }
    })
    .catch(error => console.log(error))
  }

  // Unmount - Clear states
  componentWillUnmount() {
    this.setState = () => {
      return;
    }
  }

  UsersPagination = (e, newpage) => {
    e.preventDefault();
    this.setState(() => ({
      page: newpage
    }));
  }
  
  render() {

    const { users, pages, page } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }


    return (
      <>
      <h4>User Listing</h4>
      <div className="users-listing">
        {
          users && users.map((user, i) => {
            return <UserItem key={ user.id } data={ user } />
          })
        }
        <div className="uactions">
            <span>Current Page: { page } </span><br /><br />
            { 
              pageNumbers.map((page, i) => {
                return <button className="pagenum" key={ page } onClick={(e) => this.UsersPagination(e, page)}>{ page }</button>
              })
            }
        </div>
      </div>
    </>
    )
  }
}