import React from 'react'
import ReactLoading from 'react-loading';

const PageLoadingAnimation = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '70vh'}}>
          <div>
            <ReactLoading type='bars' color='#35c48b' height={67} width={75} />
          </div>
        </div>
      );
}

export default PageLoadingAnimation