import { GlobalStyles } from '@mui/material';

export default function GlobalCssOverrides() {
  return (
    <GlobalStyles
      styles={{
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
      }}
    />
  );
}
