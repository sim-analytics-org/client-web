
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom'

export default function SitemarkIcon() {
  const navigate = useNavigate();
  return (
    <img src={logo} alt="Site logo" height={50} onClick={() => {navigate('/')}} />
  );
}
