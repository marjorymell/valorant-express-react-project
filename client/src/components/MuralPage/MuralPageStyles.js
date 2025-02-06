import { styled } from '@mui/material/styles';
import { Box, Typography, Paper, TextField, Button, Dialog } from '@mui/material';

export const StyledContainer = styled(Box)({
  color: "black",
  minHeight: "100vh",
  padding: "2rem",
});

export const StyledHeader = styled(Typography)(({ theme }) => ({
  marginTop: "80px",
  fontSize: { xs: "2.5rem", md: "3.5rem" },
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textAlign: "center",
  marginBottom: "2rem",
  color: "black",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    backgroundColor: "#FF4655",
  },
}));

export const StyledInfoBox = styled(Box)({
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  borderRadius: "12px",
  padding: "1.5rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
});

export const StyledMuralGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
  gap: "20px",
  justifyContent: "center",
  padding: "1rem",
  marginTop: "2rem",
  '@media (max-width: 1200px)': { gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }, 
  '@media (max-width: 900px)': { gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" },
});

export const StyledNicknameCard = styled(Paper)({
  borderRadius: "12px",
  width: "100%", 
  maxWidth: "380px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.05)", 
  border: "none",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", 
  overflow: "hidden",
  position: "relative",
});

export const StyledPlayerCardImage = styled("img")({
  width: "100%",  
  height: "auto", 
  objectFit: "contain", 
  borderRadius: "12px 12px 0 0",
});

export const StyledNickname = styled(Typography)({
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: "1.4rem",
  color: "black",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "90%",
  padding: "10px 0",
});

export const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "2rem",
});

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'black' },
    '&:hover fieldset': { borderColor: 'black' },
    '&.Mui-focused fieldset': { borderColor: 'black' },
  },
  '& .MuiInputLabel-root': { color: 'black' },
  '& .MuiInputBase-input': { color: 'black' },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
});

export const StyledButton = styled(Button)({
  background: "linear-gradient(45deg, #FF4655 30%, #FF7F50 90%)",
  borderRadius: "15px",
  color: "white",
  height: 48,
  padding: "0 30px",
  marginTop: "1rem",
  fontWeight: "bold",
  textTransform: "uppercase",
});

export const DeleteButton = styled(Button)({
  position: 'absolute',
  top: '10px',
  right: '10px',
  minWidth: 'unset',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  padding: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  color: 'white',
  '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.6)' },
});

export const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    backgroundColor: 'white', 
    color: 'black', 
    borderRadius: '12px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
  },
});

export const DialogButton = styled(Button)({
  color: 'black',
  '&.MuiButton-textPrimary': { color: '#FF4655' },
  '&:hover': { backgroundColor: 'rgba(255, 70, 85, 0.1)' },
});
