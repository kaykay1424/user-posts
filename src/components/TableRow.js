import React from 'react';

function TableRow({selectUser, selectedUser, user}) {
    return (
        <tr 
            className={selectedUser && selectedUser.id === user.id ? 'selected': ''}
            onClick={() => selectUser(user)}
            title="Click the row to view posts by this user"
        >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    );
}

export default TableRow;