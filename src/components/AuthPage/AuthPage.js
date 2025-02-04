import React, { useState } from 'react';
import {
  StyledContainer,
  StyledAuthCard,
  StyledHeader,
  StyledTextField,
  StyledButton,
  StyledDivider,
  StyledLink
} from './AuthPageStyles';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement authentication logic later
    console.log('Form submitted:', formData);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <StyledContainer>
      <StyledAuthCard>
        <StyledHeader>
          {isLogin ? 'Login' : 'Register'}
        </StyledHeader>
        
        <form onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
          <StyledTextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          
          {!isLogin && (
            <StyledTextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          )}
          
          <StyledButton type="submit">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </StyledButton>
        </form>

        <StyledDivider>OR</StyledDivider>

        <div style={{ textAlign: 'center' }}>
          <StyledLink 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              toggleAuthMode();
            }}
          >
            {isLogin 
              ? "Don't have an account? Sign Up" 
              : "Already have an account? Sign In"}
          </StyledLink>
        </div>
      </StyledAuthCard>
    </StyledContainer>
  );
};

export default AuthPage;