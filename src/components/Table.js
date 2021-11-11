import React from 'react';
import TableRow from './TableRow';

function Table({selectUser, selectedUser, users}) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <TableRow key={user.id} selectUser={selectUser} selectedUser={selectedUser} user={user} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;