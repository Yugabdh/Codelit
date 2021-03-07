import React, { Component } from 'react';

class HeroHeader extends Component {
    render() {
        return(
            <>
            <header className="text-center text-white herohead">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">
                                Learn to code at your pace at your place and be that chad developer you always wished to be!
                            </h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <p>
                                Subscribe to Newsletter to know more
                            </p>
                            <form>
                                <div className="form-row">
                                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                                        <input className="form-control form-control-lg custom-form" type="email" placeholder="Enter your email..." />
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <button className="btn btn-primary btn-block btn-lg btn-custom" type="submit">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            </>
        );
    }
}

export default HeroHeader;