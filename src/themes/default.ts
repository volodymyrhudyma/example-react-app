const colors = {
  white: '#fff',
  black: '#000',
  silver: 'rgba(197,197,197, 0.7)',
  lightSilver: 'rgba(152,152,152,0.50)',
  blue: '#4192EC',
  grayishBlue: 'rgba(50, 60, 71, 0.4)',
  transparent: 'transparent',
  azure: '#f4f8f9',
  orange: '#FF6D4A',
  lightRed: '#ff7878',
  red: '#ff4f4f',
  balticSeaLight: 'rgba(50,60,71,0.50)',
  balticSeaMedium: 'rgba(50,60,71,0.61)',
  solitude: 'rgba(233, 239, 244, 0.48)',
  nobel: '#989898',
};

const theme = {
  navbar: {
    logo: {
      height: '100px',
    },
    border: {
      color: colors.silver,
    },
    width: '100px',
  },
  navbarItem: {
    height: '45px',
    border: {
      color: colors.transparent,
      size: '5px',
    },
    active: {
      border: {
        color: colors.blue,
        size: '5px',
      },
    },
  },
  input: {
    fontSize: '1.6rem',
    width: '210px',
    placeholder: {
      color: colors.lightSilver,
    },
  },
  header: {
    border: {
      color: colors.silver,
    },
  },
  content: {
    backgroundColor: colors.azure,
  },
  container: {
    margin: '0 60px',
    minWidth: '1000px',
  },
  title: {
    h1: {
      fontSize: '3.9rem',
    },
    h4: {
      fontSize: '1.7rem',
    },
    h5: {
      fontSize: '1.6rem',
    },
    h6: {
      fontSize: '1.4rem',
    },
  },
  card: {
    boxShadow: '0 4px 9px 0 rgba(0, 0, 0, 0.02)',
    borderRadius: '6px',
    backgroundColor: colors.white,
  },
  stats: {
    count: {
      overall: {
        color: colors.blue,
      },
      read: {
        color: colors.orange,
      },
    },
    period: {
      color: colors.grayishBlue,
    },
  },
  line: {
    color: colors.blue,
    borderRadius: '2px',
  },
  button: {
    color: colors.white,
    backgroundColor: colors.blue,
    fontSize: '1.4rem',
    minWidth: '110px',
  },
  tag: {
    backgroundColor: colors.azure,
    borderRadius: '3px',
    fontSize: '1.1rem',
  },
  dot: {
    backgroundColor: `linear-gradient(-180deg, ${colors.lightRed} 0%, ${
      colors.red
    } 100%)`,
    borderRadius: '50%',
    width: '8px',
    height: '8px',
  },
  article: {
    author: {
      email: {
        color: colors.balticSeaLight,
      },
      position: {
        color: colors.balticSeaMedium,
      },
    },
  },
  tabs: {
    wrapper: {
      backgroundColor: colors.solitude,
      borderRadius: '4px',
    },
    label: {
      color: colors.nobel,
    },
    tab: {
      active: {
        backgroundColor: colors.white,
        boxShadow: '0 2px 9px 0 rgba(0, 0, 0, 0.03)',
        borderRadius: '3px',
      },
    },
  },
  loader: {
    color: colors.blue,
  },
  error: {
    backgroundColor: colors.lightRed,
    color: colors.white,
  },
  empty: {
    backgroundColor: colors.grayishBlue,
    color: colors.white,
  },
};

export default theme;
