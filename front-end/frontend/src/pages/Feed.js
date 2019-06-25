import React, { Component } from 'react'

import './Feed.css'

import more from '../assets/more.png'
import like from '../assets/like.png'
import comment from '../assets/comment.png'
import send from '../assets/send.png'


class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>User Name</span>
                            <span className="place">Location</span>
                        </div>

                        <img className="icon" src={more} alt="Mais"/>
                    </header>
                    <img src="http://localhost:3333/files/image.png" alt="" />

                    <footer>
                        <div className="actions">
                            <img className="icon" src={like} alt=""/>
                            <img className="icon" src={comment} alt=""/>
                            <img className="icon" src={send} alt=""/>

                            <strong>9000 curtidas</strong>

                            <p>
                                Um post muito massa!
                                <span>#react #top</span>
                            </p>

                        </div>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>User Name</span>
                            <span className="place">Location</span>
                        </div>

                        <img className="icon" src={more} alt="Mais"/>
                    </header>
                    <img src="http://localhost:3333/files/image.png" alt="" />

                    <footer>
                        <div className="actions">
                            <img className="icon" src={like} alt=""/>
                            <img className="icon" src={comment} alt=""/>
                            <img className="icon" src={send} alt=""/>

                            <strong>900 curtidas</strong>

                            <p>
                                Um post muito massa!
                                <span>#react #top</span>
                            </p>

                        </div>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed