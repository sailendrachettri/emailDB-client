import React, { useEffect, useState } from 'react'
import { SERVER_URI } from '../config'
import {Link} from 'react-router-dom'


const Display = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const response = await fetch(`${SERVER_URI}/api/post/email/fetch`);
                const data = await response.json();

                if (response.ok) {
                    setEmails(data.emails);
                    console.log(data.emails);

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
                        <th scope="col">Career</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        emails.map((data, index) => (
                            
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{(data.companyName) ? (data.companyName) : "none"}</td>
                                <td>{(data.companyType) ? (data.companyType) : "none"}</td>
                                <td>{(data.firstEmail) ? <Link to={`mailto:${data.firstEmail}`} target='_blank'>Email 1</Link> : "none"}</td>
                                <td>{(data.secondEmail) ? <Link to={`mailto:${data.secondEmail}`} target='_blank'>Email 2</Link> : "none"}</td>
                                <td>{(data.thirdEmail) ? <Link to={`mailto:${data.thirdEmail}`} target='_blank'>Email 3</Link> : "none"}</td>
                                <td>{(data.careerPage) ? <Link to={data.careerPage} target='_blank'>Visit</Link> : "none"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display