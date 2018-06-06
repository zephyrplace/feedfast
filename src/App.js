import React, { Component } from 'react';
import './App.css';
import Issue from './components/Issue';
import axios from 'axios';
import Tutorial from './components/Tutorial';
import Footer from './components/Footer';
import EmptyIssues from './components/EmptyIssues';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props)
    const pathName = window.location.pathname.split('/');
    console.log(pathName)
    this.state = {
      issues: [],
      currentPage: 1,
      owner: pathName[2],
      repo: pathName[3],
      label: pathName[4] || "feedfast",
    }
  }

  componentDidMount = () => {
    this.loadData();
  }

  componentWillUpdate = (nextProps, nextState) => {
    if (nextState.currentPage !== this.state.currentPage) {
      this.loadData(nextState.currentPage);
    }
  }

  loadData = (page = this.state.currentPage) => {
    this.state.owner && this.state.repo && this.state.label && page &&
      this.setState({ isLoading: true }, () => axios.get(`https://api.github.com/repos/${this.state.owner}/${this.state.repo}/issues?state=open&labels=${this.state.label}&per_page=5&page=${page}&sort=reactions-heart`)
        .then(response => {
          this.setState({ issues: response.data, isLoading: false })
        })
        .catch(error => {
          this.setState({ isLoading: false, isError: true })
        }));
  }


  render() {

    if (!this.state.owner || !this.state.repo) {
      return (<div>
        <section className="section">
          <div className="container">
            <Header />
            <Tutorial />
          </div>
        </section>
        <Footer />
      </div>)
    }
    return (
      <div>
        <section className="section">
          <div className="container">
            <Header />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <nav className="columns is-mobile is-vcentered">
              <div className="column">
                <div>
                  <span className="title">{this.state.owner + '/' + this.state.repo}</span><br />
                  <small>{this.state.label}</small>
                </div>
              </div>
              <div className="column is-narrow has-text-centered">
                <div>
                  <a className="button is-primary" href={`https://github.com/${this.state.owner}/${this.state.repo}/issues/new`}>
                    <span className="icon is-small">
                      <i className="fas fa-plus"></i>
                    </span>
                  </a>
                </div>
              </div>
            </nav>
            <hr />
            {!this.state.isLoading && !this.state.isError && !!!this.state.issues.length && <EmptyIssues label={this.state.label} />}
            {!this.state.isLoading && !this.state.isError && !!this.state.issues.length && this.state.issues.map(issue => {
              return (
                <div key={issue.id} className="animated fadeInUp">
                  <Issue issue={issue} isLiked={issue.id % 2 === 0} owner={this.state.owner} repo={this.state.repo} />
                  <br />
                </div>
              )
            })}
            <hr />
            <nav className="pagination is-medium" aria-label="pagination">
              <button className="pagination-previous button is-primary is-outlined" disabled={this.state.currentPage === 1} onClick={() => this.setState({ issues: [], currentPage: this.state.currentPage - 1 })}>Previous</button>
              <button className="pagination-next button is-primary is-outlined" onClick={() => this.setState({ issues: [], currentPage: this.state.currentPage + 1 })}>Next page</button>
            </nav>
          </div>

        </section>
        <Footer />
      </div >
    );
  }
}

export default App;
