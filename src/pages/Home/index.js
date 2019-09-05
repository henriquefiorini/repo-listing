import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container } from '../../components';

import { Title, Form, SubmitButton, List } from './styles';

class Home extends Component {
  state = {
    newRepo: '',
    repositories: [],
    isLoading: false,
    hasError: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({
        repositories: JSON.parse(repositories),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (repositories !== prevState.repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({
      newRepo: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
      hasError: false,
    });

    try {
      const { newRepo, repositories } = this.state;
      if (repositories.find(r => r.name === newRepo)) {
        throw new Error('Alreaddy exists.');
      }

      const response = await api.get(`/repos/${newRepo}`);
      const data = {
        name: response.data.full_name,
      };
      this.setState({
        newRepo: '',
        repositories: [...repositories, data],
        isLoading: false,
        hasError: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  };

  render() {
    const { newRepo, repositories, isLoading, hasError } = this.state;
    return (
      <Container>
        <Title>
          <FaGithubAlt />
          Repositories
        </Title>
        <Form onSubmit={this.handleSubmit} hasError={hasError}>
          <input
            type="text"
            placeholder="Enter the repository name (e.g., facebook/react)"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton isLoading={isLoading}>
            {isLoading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        {repositories && repositories.length > 0 && (
          <List>
            {repositories.map(repo => (
              <li key={repo.name}>
                <span>{repo.name}</span>
                <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                  Details
                </Link>
              </li>
            ))}
          </List>
        )}
      </Container>
    );
  }
}

export default Home;
