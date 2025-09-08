import React from 'react';

function Rightsec({prodtitle,description,learnmore,connect,imgurl})
{
return  <div className='container mt-5'>
    <div className='row align-items-center'>
        <div className='col-6  p-5'>
            <h2 className='f-4'>{prodtitle}</h2>
            <p>{description}</p>
              {learnmore && (
                            <a href={learnmore} className='text-primary' style={{ textDecoration: "none" }}>
                                Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        )}
            {connect && (
                            <a href={learnmore} className='text-primary' style={{ textDecoration: "none" }}>
                                Kite Connect <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        )}
        </div>
        <div className='col-6 p-5 mb-20 '>
                <img src={imgurl} />

            </div>
    </div>

</div>
}
export default Rightsec;