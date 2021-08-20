import React, { Component } from 'react';
import axios from "axios";

import "./App.css";

import Header from './Components/Header';
import Form from './Components/Form';
import Imprepo from './Components/Imprepo';

class App extends Component {
  state = {
    user: '',
    users: '',
    repos: [],
    error: '',
    loading: false
  };

  changeUser = user => {
    this.setState({ user });
  };

  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true });

    try {
      const { data: users } = await axios.get(
        `https://api.github.com/users/${user}` 
      );
      console.log(users)
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      this.setState({ users, repos, error: '', loading: false });
    } catch (error) {
      this.setState({
        users: ' ',
        error:  <div>
                    <img className='imgerr' src='DaniGoogle.png'  alt=''/>
                    <h1> Usuário <b className="searchButton">{user}</b>  não encontrado tente outro</h1>
                </div>,
        repos: [],
        loading: false
      });
    }
  };

  render() {
    const { user, users, repos, error, loading } = this.state;

    return (
      <div className='App'>
        <Header user={users} />
        <Form
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
        />
        <Imprepo repos={repos} />
      </div>
    );
  }
}

export default App;
