export const bottomNavigationStyle = {
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'max-content',
  borderRadius: '50px',
  backgroundColor: 'rgba(224, 221, 221, 0.5)',
  zIndex: '1',
  backdropFilter: 'blur(50px)',
  '@media screen and (min-width: 767px)': {
    display: 'none',
    margin: '0',
  },
};

export const BottomNavigationActionStyle = {
  color: '#212121',

  '&:hover, &:focus-visible': { fontWeight: '500', color: '#2196f3' }, 
};
