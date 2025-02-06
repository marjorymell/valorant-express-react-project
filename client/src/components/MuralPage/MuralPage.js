import React, { useState, useEffect } from 'react';
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

const MuralPage = () => {
  const [nicknames, setNicknames] = useState([]);
  const [newNickname, setNewNickname] = useState('');
  const [playerCards, setPlayerCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [nicknameToDelete, setNicknameToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerCardsData = await fetchPlayerCards();
        setPlayerCards(playerCardsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching player cards:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNickname.trim()) {
      const randomCard = playerCards[Math.floor(Math.random() * playerCards.length)];

      const newEntry = {
        id: Date.now(),
        nickname: newNickname.trim(),
        playerCard: randomCard?.wideArt || ""
      };

      setNicknames([newEntry, ...nicknames]);
      setNewNickname('');
    }
  };

  const handleDeleteClick = (nickname) => {
    setNicknameToDelete(nickname);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = () => {
    setNicknames(nicknames.filter(n => n.id !== nicknameToDelete.id));
    setDeleteConfirmOpen(false);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <StyledContainer>
      <Container maxWidth="lg">
        <StyledHeader>Valorant Nickname Mural</StyledHeader>

        <StyledInfoBox>
          <Typography variant="h6" gutterBottom>
            Welcome to the Valorant Nickname Mural!
          </Typography>
          <Typography variant="body1">
            Here, you can add your unique Valorant nickname to our community mural. Feel free to be creative and show off your agent-inspired alias! Remember, you can only add and delete your own nickname. Let's build an awesome collection of Valorant player identities together!
          </Typography>
        </StyledInfoBox>

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

        <StyledMuralGrid>
          {nicknames.map((entry) => (
            <StyledNicknameCard key={entry.id} elevation={3}>
              <DeleteButton onClick={() => handleDeleteClick(entry)}>
                X
              </DeleteButton>
              <StyledPlayerCardImage src={entry.playerCard} alt="Player Card" />
              <StyledNickname>{entry.nickname}</StyledNickname>
            </StyledNicknameCard>
          ))}
        </StyledMuralGrid>
      </Container>

      <StyledDialog
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ color: 'black', mt: 2 }}>
            Are you sure you want to delete this nickname?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogButton onClick={() => setDeleteConfirmOpen(false)}>
            Cancel
          </DialogButton>
          <DialogButton onClick={handleDeleteConfirm} autoFocus>
            Confirm
          </DialogButton>
        </DialogActions>
      </StyledDialog>
    </StyledContainer>
  );
};

export default MuralPage;
