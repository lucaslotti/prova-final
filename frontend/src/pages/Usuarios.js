import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  Avatar,
  CircularProgress,
  TextField,
} from '@mui/material';

// Ajuste no get do usuarios, para ficar com /usuarios no final 
function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/usuarios')
      .then((res) => {
        setUsuarios(res.data);
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar usuários:", err);
        setCarregando(false);
      });
  }, []);

  const usuariosFiltrados = usuarios.filter(user =>
    user.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Lista de Usuários
      </Typography>

      <TextField
        label="Buscar por nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {carregando ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {usuariosFiltrados.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card
                component={Link}
                to={`/dados/${user.id}`}
                style={{
                  textDecoration: 'none',
                  padding: '1rem',
                  transition: '0.3s',
                  height: '100%',
                  backgroundColor: '#1e1e1e',
                }}
                variant="outlined"
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar sx={{ bgcolor: '#1976d2' }}>{user.name[0]}</Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="textPrimary">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {user.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Usuarios;
