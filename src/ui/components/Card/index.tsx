import React from 'react'
export const Card = () => {
  return (
    <div className="card">
      <div className="card-body px-4 py-4-5">
        <div className="row">
          <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
            <div className="stats-icon purple mb-2">
              <i className="iconly-boldShow"></i>
            </div>
          </div>
          <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
            <h6 className="text-muted font-semibold">Profile Views</h6>
            <h6 className="font-extrabold mb-0">112.000</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
