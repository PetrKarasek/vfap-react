import React, { useState, useEffect, useMemo } from 'react';
import { Box, Button, TextField, Chip } from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { userService } from '../services/userService';
import UserFormModal from './UserFormModal';
import NotificationSnackbar from './NotificationSnackbar';
import dayjs from 'dayjs';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Stav pro Modál a Formulář
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  // Stav pro Snackbar
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const showNotification = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      // 1. Zkusíme načíst data z localStorage
      const savedUsers = localStorage.getItem('localUsers');
      
      if (savedUsers) {
        // Pokud data existují v paměti, použijeme je
        setUsers(JSON.parse(savedUsers));
      } else {
        // 2. Pokud je paměť prázdná, stáhneme data z Apiary
        const response = await userService.getUsers(); 
        const initialData = response.data || [];
        setUsers(initialData);
        // A rovnou si je uložíme do paměti pro příště
        localStorage.setItem('localUsers', JSON.stringify(initialData));
      }
    } catch (error) {
      showNotification('Failed to fetch users', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await userService.deleteUser(id); // Stále voláme API pro splnění zadání
        
        // Zaktualizujeme lokální stav i localStorage
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem('localUsers', JSON.stringify(updatedUsers));
        
        showNotification('User deleted successfully');
      } catch (error) {
        showNotification('Failed to delete user', 'error');
      }
    }
  };

  const handleFormSubmit = async () => {
    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        role: formData.role
      };

      if (editingUser) {
        await userService.updateUser(editingUser.id, dataToSend); // API call
        
        // Aktualizace existujícího uživatele v lokálním stavu
        const updatedUsers = users.map(user => 
          user.id === editingUser.id ? { ...user, ...dataToSend } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('localUsers', JSON.stringify(updatedUsers));
        
        showNotification('User updated successfully');
      } else {
        await userService.createUser(dataToSend); // API call
        
        // Přidání nového uživatele (vytvoříme mu falešné ID pomocí aktuálního času)
        const newUser = { ...dataToSend, id: Date.now() };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem('localUsers', JSON.stringify(updatedUsers));
        
        showNotification('User created successfully');
      }
      setModalOpen(false);
    } catch (error) {
      showNotification(editingUser ? 'Failed to update user' : 'Failed to create user', 'error');
    }
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const openCreateModal = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  // Klientské vyhledávání
  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Definice sloupců pro DataGrid
  const columns = [
    { field: 'name', headerName: '👤 Name', flex: 1, minWidth: 150 },
    { field: 'email', headerName: '📧 Email', flex: 1, minWidth: 200 },
    { 
      field: 'role', 
      headerName: '🏢 Role', 
      width: 130,
      renderCell: (params) => {
        const colors = { Admin: 'error', Manager: 'warning', User: 'info' };
        return <Chip label={params.value} color={colors[params.value] || 'default'} size="small" />;
      }
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '⚡ Actions',
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={() => openEditModal(params.row)} />,
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={() => handleDelete(params.row.id)} />
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          size="small"
          placeholder="🔍 Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300 }}
        />
        <Button variant="contained" onClick={openCreateModal}>
          ➕ Add User
        </Button>
      </Box>

      {/* MUI DataGrid automaticky řeší flexibilitu, řazení a stránkování */}
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredUsers}
          columns={columns}
          loading={loading}
          pageSizeOptions={[5, 10, 25]}
          initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
          disableRowSelectionOnClick
        />
      </Box>

      <UserFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleFormSubmit}
        editingUser={editingUser}
        formData={formData}
        setFormData={setFormData}
      />

      <NotificationSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Box>
  );
};

export default UserTable;