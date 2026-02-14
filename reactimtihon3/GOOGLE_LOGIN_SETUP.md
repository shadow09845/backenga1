# Google Login Setup Guide

## Steps to Enable Google Login:

### 1. Create a Google OAuth Application
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project (or select an existing one)
- Search for "OAuth consent screen" and configure it
  - Choose "External" as User Type
  - Fill in required information (App name, user support email, etc.)
- Go to "Credentials" in the left menu
- Click "Create Credentials" → "OAuth 2.0 Client ID"
- Select "Web application"
- Add authorized redirect URIs:
  - `http://localhost:5173` (for development with Vite)
  - `http://localhost:3000` (if using different port)
  - Your production domain
- Click "Create" and copy your **Client ID**

### 2. Update the Client ID in Login.jsx
In the [Login.jsx](src/Components/Login.jsx) file, replace:
```javascript
client_id: 'YOUR_GOOGLE_CLIENT_ID_HERE',
```
with your actual Google Client ID.

### 3. How the Google Login Works:
- When user clicks the Google Sign-In button, Google's authentication popup appears
- After successful authentication, the JWT token is decoded
- User data (name, email, profile picture) is stored in localStorage
- The `onLogin()` callback is triggered to log the user in

### 4. Accessing User Data After Login:
```javascript
const user = JSON.parse(localStorage.getItem('user'));
console.log(user.name);      // User's full name
console.log(user.email);     // User's email
console.log(user.picture);   // User's profile picture URL
console.log(user.loginMethod); // Will be 'google'
```

### 5. Important Notes:
- The Google Sign-In SDK loads automatically when the component mounts
- The authentication state is stored in localStorage
- The JWT token contains decoded user information
- Make sure to add your authorized domains to Google OAuth app when deploying

### 6. Logout Functionality
To add logout functionality, you can do:
```javascript
localStorage.removeItem('user');
// User is now logged out
```

## Troubleshooting:
- **"Google is not defined"**: Make sure the script loaded correctly - check browser console
- **"Invalid Client ID"**: Double-check the Client ID from Google Cloud Console
- **Login popup not appearing**: Verify allowed origins in Google OAuth settings
