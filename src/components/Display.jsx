import React, { useEffect, useState } from 'react'
import { SERVER_URI } from '../config'


const Display = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const response = await fetch(`${SERVER_URI}/api/post/email/fetch`);
                const data = await response.json();

                if (response.ok) {
                    setEmails(data.emails);

                } else {
                    console.log("Not able to fetch emails");
                }
            } catch (error) {
                console.log(error.message)
            }
        })();
    }, [])


    return (
        <div className='overflow-auto'>
            <table className="table table-striped table-hoverble">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Company</th>
                        <th scope="col">Type</th>
                        <th scope="col">Email 1</th>
                        <th scope="col">Email 2</th>
                        <th scope="col">Email 3</th>
                        <th scope="col">Carrer page</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        emails.map((data, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{(data.companyName) ? (data.companyName) : ""}</td>
                                <td>{(data.companyType) ? (data.companyType) : ""}</td>
                                <td>{(data.firstEmail) ? (data.firstEmail) : ""}</td>
                                <td>{(data.secondEmail) ? (data.secondEmail) : ""}</td>
                                <td>{(data.thirdEmail) ? (data.thirdEmail) : ""}</td>
                                <td>{(data.carrerPage) ? (data.careerPage) : ""}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display