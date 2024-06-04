import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

const navData = [
  { id: 1, nameItem: 'About', linkItem: 'about', icon: <PersonOutlineOutlinedIcon /> },
  {
    id: 2,
    nameItem: 'Technology',
    linkItem: 'tech',
    icon: <AutoFixHighIcon />,
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
