import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  CircularProgress,
} from '@mui/material';

function Dados() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:4000/usuarios/${id}`)
      .then(res => {
        setUsuario(res.data);
        setCarregando(false);
      })
      .catch(err => {
        console.error(err);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) return <Container style={{ marginTop: '2rem' }}><CircularProgress /></Container>;
  if (!usuario) return <Typography>Usuário não encontrado.</Typography>;

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {usuario.name}
          </Typography>
          <Typography variant="body1">Email: {usuario.email}</Typography>
          <Typography variant="body2" color="textSecondary">ID: {usuario.id}</Typography>
          <Typography variant="body2" color="textSecondary">Idade: {usuario.age}</Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
            style={{ marginTop: '1rem' }}
          >
            Voltar
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Dados;
