import React from 'react';
import { Snackbar, Alert, type AlertColor } from '@mui/material';

type ToastProps = {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: AlertColor; // 'success' | 'error' | 'info' | 'warning'
};

const Toast: React.FC<ToastProps> = ({ open, onClose, message, severity }) => {
  return (
    <Snackbar style={{backgroundColor: 'transparent'}} open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert style={{backgroundColor: severity === 'success' ? 'green': 'red'}} onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
