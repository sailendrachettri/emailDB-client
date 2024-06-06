import React from 'react'
import Skeleton from 'react-loading-skeleton';

const LoadingDisplay = () => {
    const emails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
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
                            emails.map((index) => (
                                <tr key={index}>
                                    <th scope="row"><Skeleton height={20} /> </th>
                                    <td><Skeleton height={20} /></td>
                                    <td><Skeleton height={20} /></td>
                                    <td><Skeleton height={20} /></td>
                                    <td><Skeleton height={20} /></td>
                                    <td><Skeleton height={20} /></td>
                                    <td><Skeleton height={20} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default LoadingDisplay