import React from 'react';
import { Button } from 'react-bootstrap';

function InfoSideImage({info}) {
  return (
    <section className={"spad-2 " + info.backgroud}>
      <div className="container">
        <div className="row info">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="p-3">
                <h2>{ info.heading }</h2>
                <p className="info-short-details">{info.shortDetail}</p>
                <p className="info-long-details">{info.longDetail}</p>
                <Button href="/about" className="btn btn-primary about-btn">Learn more</Button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="info-side p-3" >
                <div className="info-side-inner">
                  <img src={info.imgLink} alt={info.imgAlt}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSideImage;