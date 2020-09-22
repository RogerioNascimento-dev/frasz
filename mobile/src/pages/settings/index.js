import React,{useContext,useState} from 'react';
import PreferenceContext from '../../context/preferences';
import AuthContext from '../../context/auth';

import { 
  Container,Title,
  ContainerOptions,
  MaterialIcon,
  TextOption,
  CheckBox,
  ContainerTextOption,
  PersonMaterialIcons
 } from './styles';

const Settings = () => {
  const { changeDarkMode,darkMode } = useContext(PreferenceContext); 
  const {signOut} = useContext(AuthContext);
  const [notifications,setNotifications] = useState(false);
  return (
  <Container>
      <Title>Configurações</Title>
      <ContainerOptions onPress={changeDarkMode}>      
        <ContainerTextOption>
        <MaterialIcon name="theme-light-dark" size={30} />
        <TextOption>Tema Escuro</TextOption>
        </ContainerTextOption>
        <CheckBox 
        name={darkMode ? 'check-box':'check-box-outline-blank'}
         size={25}
         />       
      </ContainerOptions>

      <ContainerOptions onPress={() => setNotifications(!notifications)}>      
        <ContainerTextOption>
        <PersonMaterialIcons 
        name={notifications?'notifications-active':'notifications-none'}
        size={30} />
        <TextOption>Notificações</TextOption>
        </ContainerTextOption>
        <CheckBox 
          name={notifications ? 'check-box':'check-box-outline-blank'}
          size={25}
         />         
      </ContainerOptions>

      <ContainerOptions onPress={()=>{}}>      
        <ContainerTextOption>
        <MaterialIcon name="file-document-box" size={30} />
        <TextOption>Termos de uso</TextOption>
        </ContainerTextOption>              
      </ContainerOptions>


      <ContainerOptions onPress={signOut}>      
        <ContainerTextOption>
        <MaterialIcon name="logout" size={30} />
        <TextOption>Sair</TextOption>
        </ContainerTextOption>              
      </ContainerOptions>

  </Container>
  );
}

export default Settings;