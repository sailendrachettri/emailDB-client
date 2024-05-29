import React from 'react'

const AddEmail = () => {
    return (
        <div className='container my-5'>
            <div class="card card-body">
                <div class="mb-3">
                    <label for="companyname" class="form-label">Company</label>
                    <input type="email" class="form-control my-2" id="companyname" placeholder="Amazon" />
                </div>
                <div class="mb-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select Company Type</option>
                        <option value="Large Company">Large Company</option>
                        <option value="Medium Company">Medium Company</option>
                        <option value="Growgin Startup">Growing Startup</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="email1" class="form-label">Email 1</label>
                    <input type="email" class="form-control my-2" id="email1" placeholder="one@mail.com" />
                </div>
                <div class="mb-3">
                    <label for="email2" class="form-label">Email 2</label>
                    <input type="email" class="form-control my-2" id="email2" placeholder="two@mail.com" />
                </div>
                <div class="mb-3">
                    <label for="email3" class="form-label">Email 3</label>
                    <input type="email" class="form-control my-2" id="email3" placeholder="three@mail.com" />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Carrer page</label>
                    <input type="email" class="form-control my-2" id="" placeholder="carrer.example.com" />
                </div>
            </div>
        </div>
    )
}

export default AddEmail