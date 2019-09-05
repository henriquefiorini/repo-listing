import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container } from '../../components';

import { Loading, Owner, NavButton, IssueList, Navigation } from './styles';

class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    filterBy: 'all',
    currentPage: 1,
    isLoading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filterBy } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filterBy,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      isLoading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const { filterBy, currentPage } = this.state;
    const repository = decodeURIComponent(match.params.repository);
    const response = await api.get(`/repos/${repository}/issues`, {
      params: {
        state: filterBy,
        per_page: 5,
        page: currentPage,
      },
    });
    this.setState({ issues: response.data });
  };

  handleFilter = async e => {
    await this.setState({
      filterBy: e.target.value,
      currentPage: 1,
    });
    this.loadIssues();
  };

  handlePagination = async e => {
    const { currentPage } = this.state;
    await this.setState({
      currentPage:
        e.target.value === 'previous' ? currentPage - 1 : currentPage + 1,
    });
    this.loadIssues();
  };

  render() {
    const { repository, issues, currentPage, isLoading } = this.state;

    if (isLoading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Back to Repositories</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueList>
          <Navigation>
            <div>
              <NavButton value="all" onClick={this.handleFilter}>
                All
              </NavButton>
              <NavButton value="open" onClick={this.handleFilter}>
                Open
              </NavButton>
              <NavButton value="closed" onClick={this.handleFilter}>
                Closed
              </NavButton>
            </div>
            <div>
              <NavButton
                value="previous"
                disabled={currentPage === 1}
                onClick={this.handlePagination}
              >
                Previous
              </NavButton>
              <NavButton value="next" onClick={this.handlePagination}>
                Next
              </NavButton>
            </div>
          </Navigation>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue.title}
                  </a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{`${issue.state} | ${issue.user.login}`}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}

export default Repository;
