import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    render() {
        
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyen thong noi ve chung toi
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                        src = "https://www.youtube.com/embed/hEaxqmVwRoU"
                        title = "Youtube video"
                        frameborder="0"
                        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                            
                        </iframe>
                    </div>
                    <div className='content-right' width = "50%">
                        <p>
                            "jaljfdlkjaldsjflka;dsjfjaldjslfjakdsjlfj;ladsk<br />
                            fjladjlfjaldjsflkjaldjf;lajdlfjlkajdslkfjalkdj<br />
                            flkajdlfjladjslfjaldjflajldjflkadjkfjkaldjflkd<br />
                            acjanflkwefjdsjfalkjadlfjljadfjlajdslfjlasjdfj<br />
                            alkdfjkaljdfkajldfjlakjdsflkadjflaldfdafdfsdfadsfadsfadf"<br />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
