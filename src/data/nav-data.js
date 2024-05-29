import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

const navData = [
  { id: 1, nameItem: 'Home', linkItem: '/', icon: <HomeOutlinedIcon /> },
  {
    id: 2,
    nameItem: 'About',
    linkItem: 'about',
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    id: 3,
    nameItem: 'Projects',
    linkItem: 'projects',
    icon: <FolderOutlinedIcon />,
  },
  {
    id: 4,
    nameItem: 'Contacts',
    linkItem: 'contacts',
    icon: <ContactsOutlinedIcon />,
  },
];

export default navData;
