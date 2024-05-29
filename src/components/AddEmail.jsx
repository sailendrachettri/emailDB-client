import React from 'react'

const AddEmail = () => {
    return (
        <div  className='container-xxl container-sm w-50'>
            <p class="d-inline-flex gap-1">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <span>Company name</span>
                </button>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address 1</label>
                        <input type="email" class="form-control my-2" id="exampleFormControlInput1" placeholder="add emails"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmail