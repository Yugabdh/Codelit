import React from 'react';

function IconText({info}) {
    let itemList = info.cards.map((item) => {
        return(
          <div className="col-sm-12 col-md-4 col-lg-4 p-3" key={item.id}>
            <div className={ "card h-100 " + info.cardbg}>
              <img src={item.img} alt={item.heading} height="100" className="mb-3" />
              <h5 className={"font-weight-bold "+info.headingColor}>{item.heading}</h5>
              <p className={"mb-md-1 mb-sm-0 pt-3 px-3 "+info.shortDetailColor}>
                  {item.info}
              </p>
            </div>
          </div>
        );
    })

    return (
      <section className={'spad-2 iconText '+info.backgroud}>
        <div className="container">
          <div className="row">
            <div className="col-12">
            <div className="section-title">
              <h2 className={info.headingColor}>{info.heading}</h2>
              <p className={info.shortDetailColor}>{info.shortDetail}</p>
            </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row text-center">
              <div className="col-12">
                <div className="row">
                  { itemList }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default IconText;