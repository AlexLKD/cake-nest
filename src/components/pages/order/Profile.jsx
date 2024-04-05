import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "../../../theme"
import Navbar from "../../navbar/NavBar";
import MainContent from "../order/MainContent"

export default function Profile() {

  const { username } = useParams(); 

  return (
    <ProfilePage>
      <Navbar username={username} />
      <MainContent />
    </ProfilePage>
  )
}

const ProfilePage = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.colors.primary};
`