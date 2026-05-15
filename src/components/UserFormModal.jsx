import React, { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@mui/material';

const roles = ['Admin', 'User', 'Manager'];

const UserFormModal = ({ open, onClose, onSubmit, editingUser, formData, setFormData }) => {
  
  // Naplnění formuláře při editaci
  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role
      });
    } else {
      setFormData({ name: '', email: '', role: '' });
    }
  }, [editingUser, open, setFormData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{editingUser ? '✏️ Edit User' : '➕ Add User'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
          <TextField
            autoFocus label="👤 Name" name="name"
            value={formData.name} onChange={handleChange} required fullWidth
          />
          <TextField
            label="📧 Email" name="email" type="email"
            value={formData.email} onChange={handleChange} required fullWidth
          />
          <TextField
            select label="🏢 Role" name="role"
            value={formData.role} onChange={handleChange} required fullWidth
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>{role}</MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose} color="inherit">❌ Cancel</Button>
          <Button type="submit" variant="contained">
            {editingUser ? '💾 Update' : '➕ Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UserFormModal;