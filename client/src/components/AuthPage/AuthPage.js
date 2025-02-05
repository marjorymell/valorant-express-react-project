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
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(isLogin ? {
          email: formData.email,
          password: formData.password
        } : formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      // Store token
      localStorage.setItem('token', data.token);
      
      // Redirect or update app state
      window.location.href = '/';
      
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
    setError('');
  };

  return (
    <StyledContainer>
      <StyledAuthCard>
        <StyledHeader>
          {isLogin ? 'Login' : 'Register'}
        </StyledHeader>
        
        {error && (
          <div style={{ 
            color: '#FF4655', 
            marginBottom: '1rem', 
            textAlign: 'center' 
          }}>
            {error}
          </div>
        )}

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
          
          <StyledButton 
            type="submit"
            disabled={!formData.email || !formData.password || (!isLogin && !formData.confirmPassword)}
          >
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