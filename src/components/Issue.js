import React, { Component } from 'react'
import Lottie from 'react-lottie';
import * as animationData from './animations/h2.json'
import axios from 'axios';

class Issue extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isStopped: true,
            isPaused: false,
            speed: 2.2,
            direction: 1,
            isLike: false,
            votes: 0,
        }
    }

    loadData = (page = this.state.currentPage) => {
        axios.get(`https://api.github.com/repos/${this.props.owner}/${this.props.repo}/issues/${this.props.issue.number}/reactions?content=heart`,
            {
                headers: { Accept: 'application/vnd.github.squirrel-girl-preview+json' }
            })
            .then(response => {
                console.log(response)
                this.setState({ votes: response.data.length })
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount = () => {
        this.loadData()
    }

    render() {

        const { isStopped, isPaused, direction, speed, isLike } = this.state;

        const clickHandler = () => {
            if (!isStopped) {
                this.setState({ direction: direction * -1 });
            }
            this.setState({ isStopped: false, isLike: !isLike });
        };

        const defaultOptions = {
            loop: false,
            autoplay: this.props.isLiked,
            animationData: animationData,
        };

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left has-text-centered">
                        <figure className="image is-64x64">
                            <img src={this.props.issue.user.avatar_url} alt="Avatar" style={{ borderRadius: '50%' }} />
                        </figure>
                    </div>
                    <div className="media-content" style={{ minWidth: 0 }}>
                        <div className="content">
                            <div className="columns is-vcentered">
                                <div className="column is-two-thirds">
                                    <div style={{
                                        maxHeight: '16vh',
                                        overflow: 'hidden'
                                    }}>
                                        <h5 className="subtitle is-5">{this.props.issue.title}</h5>
                                        <hr />
                                        <span style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{this.props.issue.body}</span>
                                        <br />
                                    </div>
                                    <a aria-label="read more" href={this.props.issue.html_url}>
                                        <span>read more</span>
                                    </a>
                                </div>

                                <div className="column is-offset-1 has-text-centered">
                                    <div className="level is-mobile is-vcentered">
                                        <div className="level-left has-text-centered">
                                            <div>
                                                <p className="heading">upvotes</p>
                                                <p className="title is-4">{isLike ? this.state.votes + 1 : this.state.votes}</p>
                                            </div>
                                        </div>
                                        <div className="level-right has-text-centered">
                                            <a className="noSelect" onClick={clickHandler}>
                                                <Lottie options={defaultOptions}
                                                    height={70}
                                                    width={80}
                                                    isStopped={isStopped}
                                                    isPaused={isPaused}
                                                    speed={speed}
                                                    direction={direction} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Issue