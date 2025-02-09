import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container,
  Box,
  Typography,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { fetchPlayerCards } from '../../services/PlayerCards';
import {
  StyledContainer,
  StyledHeader,
  StyledMuralGrid,
  StyledNicknameCard,
  StyledNickname,
  StyledPlayerCardImage,
  StyledForm,
  StyledTextField,
  StyledButton,
  DeleteButton,
  StyledDialog,
  DialogButton,
  StyledInfoBox
} from './MuralPageStyles';

const getToken = () => localStorage.getItem('token');


const MuralPage = () => {
  const navigate = useNavigate();
  const [nicknames, setNicknames] = useState([]);  
  const [newNickname, setNewNickname] = useState('');
  const [playerCards, setPlayerCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [error, setError] = useState('');
  const [userHasNickname, setUserHasNickname] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [playerCardsData, nicknamesData] = await Promise.all([
          fetchPlayerCards(),
          fetchNicknames()
        ]);
        
        setPlayerCards(playerCardsData);
        setNicknames(Array.isArray(nicknamesData) ? nicknamesData : []);
        
        const token = getToken();
        if (token) {
          const userData = JSON.parse(atob(token.split('.')[1]));
          setCurrentUserId(userData.id);
          setUserHasNickname(nicknamesData.some(n => n.userId === userData.id));
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);  

  const fetchNicknames = async () => {
    const response = await fetch('/api/nicknames');
    if (!response.ok) throw new Error('Failed to fetch nicknames');
    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    if (newNickname.trim()) {
      try {
        const randomCard = playerCards[Math.floor(Math.random() * playerCards.length)];
        
        const response = await fetch('/api/nicknames', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            nickname: newNickname.trim(),
            playerCard: randomCard?.wideArt || ""
          })
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }

        const newEntry = await response.json();
        setNicknames([newEntry.nickname, ...nicknames]);
        setNewNickname('');
        setUserHasNickname(true);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const handleDeleteClick = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('/api/nicknames', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to delete nickname');

      const updatedNicknames = await fetchNicknames();
      setNicknames(updatedNicknames);
      setUserHasNickname(false);
      setDeleteConfirmOpen(false);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  const safeNicknames = Array.isArray(nicknames) ? nicknames : [];

  return (
    <StyledContainer>
      <Container maxWidth="lg">
        <StyledHeader>Valorant Nickname Mural</StyledHeader>

        <StyledInfoBox>
          <Typography variant="h6" gutterBottom>
            Welcome to the Valorant Nickname Mural!
          </Typography>
          <Typography variant="body1">
            Here, you can add your unique Valorant nickname to our community mural. You can only add one nickname!
            {!getToken() && " Please log in to add your nickname."}
            {getToken() && userHasNickname && " You can only have one nickname at a time."}
          </Typography>
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </StyledInfoBox>

        {getToken() && !userHasNickname && (
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField
              label="Your Nickname"
              variant="outlined"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              fullWidth
            />
            <StyledButton type="submit">
              Add to Mural
            </StyledButton>
          </StyledForm>
        )}

        <StyledMuralGrid>
          {safeNicknames.map((entry) => (
            <StyledNicknameCard key={entry._id} elevation={3}>
              {getToken() && currentUserId && entry.userId === currentUserId && (
                <DeleteButton onClick={() => setDeleteConfirmOpen(true)}>
                  X
                </DeleteButton>
              )}
              <StyledPlayerCardImage src={entry.playerCard} alt="Player Card" />
              <StyledNickname>{entry.nickname}</StyledNickname>
            </StyledNicknameCard>
          ))}
        </StyledMuralGrid>
      </Container>

      <StyledDialog
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
      >
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'black', mt: 2 }}>
            Are you sure you want to delete your nickname?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogButton onClick={() => setDeleteConfirmOpen(false)}>
            Cancel
          </DialogButton>
          <DialogButton onClick={handleDeleteClick} autoFocus>
            Confirm
          </DialogButton>
        </DialogActions>
      </StyledDialog>
    </StyledContainer>
  );
};

export default MuralPage;
