import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Modal, Box,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Userform() {
    const navigate= useNavigate();
    const [users, setUsers] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    
    useEffect(() => {
      const loadedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(loadedUsers);
    }, []);
    const handleEditUser = (setUsers) => {
      navigate('/userview', { state: { user : setUsers } })
    }
    const deleteModal= (usertToDelete)=>{
      setUserToDelete(usertToDelete);
      setShowDeleteModal(true)
    }
    const handleDelete = () => {
      if (userToDelete) {
        const updatedUsers = users.filter((user) => user !== userToDelete);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setShowDeleteModal(false);
      }
    }
    const userRows = users.map((user) => (
      <TableRow
        key={user.username}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {user.username}
        </TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">{user.number}</TableCell>
        <TableCell align="right">
        <Stack direction="row" spacing={0} >
<IconButton aria-label="delete" onClick={()=>deleteModal(user)} >
  <DeleteIcon />
</IconButton>
<IconButton aria-label="edit" onClick={()=>handleEditUser(user)} >
  <EditIcon  />
</IconButton>
</Stack>
</TableCell>
</TableRow>
))
  return (
    <div style={{justifyContent: 'center',paddingRight: 400+'px'}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align='left'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userRows}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <h2 id="modal-modal-title">Confirm Delete</h2>
          <p id="modal-modal-description">Are you sure you want to delete this user?</p>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
          <Button onClick={() => setShowDeleteModal(false)} variant="contained">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  )
}