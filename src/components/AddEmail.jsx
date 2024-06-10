import React, {useState } from 'react'
import toast from 'react-hot-toast';
const SERVER_URL = require('../config');

const AddEmail = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyLocation, setCompanyLocation] = useState("");
    const [companyType, setCompanyType] = useState("");
    const [firstEmail, setFirstEmail] = useState("");
    const [secondEmail, setSecondEmail] = useState("");
    const [thirdEmail, setThirdEmail] = useState("");
    const [careerPage, setCareerPage] = useState("");
    const [lodingInfo, setLoadingInfo] = useState("Add Email");
    const [mobile1, setMobile1] = useState("");
    const [mobile2, setMobile2] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        try {
            const data = {
                companyName,
                companyType,
                companyLocation,
                firstEmail,
                secondEmail,
                thirdEmail,
                mobile1,
                mobile2,
                careerPage
            };

            console.log(data);

            const response = await fetch(`${SERVER_URL.SERVER_URI}/api/post/email/add`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const result = await response.json();
    
            if(result.success){
                toast.success("Record added successfully!");
                setLoadingInfo("Add Email");
                setCompanyName("");
                setCompanyType("");
                setCompanyLocation("");
                setFirstEmail("");
                setSecondEmail("");
                setThirdEmail("");
                setMobile1("");
                setMobile2("");
                setCareerPage("");                
            }else{
                toast.error(result.message);
                setLoadingInfo("Add Email");
            }
            
        } catch (error) {
            toast.error(error.message);
            setLoadingInfo("Add Email");
        }
    }

    return (
        <div className='container my-5'>
            <form className="card card-body" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="companyname" className="form-label">Company</label>
                    <input type="text" value={companyName} onChange={ev => {setCompanyName(ev.target.value)}} className="form-control my-2" id="companyname" placeholder="Amazon" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="companylocation" className="form-label">Location</label>
                    <input type="text" value={companyLocation} onChange={ev => {setCompanyLocation(ev.target.value)}} className="form-control my-2" id="companylocation" placeholder="Sikkim" />
                </div>
                <div className="mb-3">
                    <select className="form-select" value={companyType} onChange={ev => {setCompanyType(ev.target.value)}} aria-label="Select company type" required>
                        <option value="">Select Company Type</option>
                        <option value="Large">Large Company</option>
                        <option value="Medium">Medium Company</option>
                        <option value="Startup">Growing Startup</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="email1" className="form-label">Email 1</label>
                    <input type="email" value={firstEmail} onChange={ev => {setFirstEmail(ev.target.value)}} className="form-control my-2" id="email1" placeholder="one@mail.com" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Email 2</label>
                    <input type="email" value={secondEmail} onChange={ev => {setSecondEmail(ev.target.value)}} className="form-control my-2" id="email2" placeholder="two@mail.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email3" className="form-label">Email 3</label>
                    <input type="email" value={thirdEmail} onChange={ev => {setThirdEmail(ev.target.value)}} className="form-control my-2" id="email3" placeholder="three@mail.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile1" className="form-label">Mobile 1</label>
                    <input type="number" className="form-control my-2" id='mobile1' value={mobile1} onChange={ev => {setMobile1(ev.target.value)}} placeholder="+91 783 7842 901" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile2" className="form-label">Mobile 2</label>
                    <input type="number" className="form-control my-2" id='mobile2' value={mobile2} onChange={ev => {setMobile2(ev.target.value)}} placeholder="+91 800 7242 121" />
                </div>
                <div className="mb-3">
                    <label htmlFor="carrerpage" className="form-label">Carrer</label>
                    <input type="text" className="form-control my-2" id='carrerpage' value={careerPage} onChange={ev => {setCareerPage(ev.target.value)}} placeholder="carrer.example.com" />
                </div>
                <button className='btn btn-primary' type='submit' onClick={()=> {setLoadingInfo("Please Wait...")}}>{lodingInfo}</button>
            </form>
        </div>
    )
}

export default AddEmail