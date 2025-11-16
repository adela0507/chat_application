import './App.css';
import '@sendbird/uikit-react/dist/index.css';
import { App as SendbirdApp } from '@sendbird/uikit-react';
import ChatFeed from './components/ChatFeed';



function App() {
  return (
    <div style={{ width:'100vw', height:'100vh' }}>
      {}
      <SendbirdApp>
        appId={'C748068E-29BD-462A-A3D5-5E65FBBC12C3'}
        userId={'sendbird_desk_agent_id_50ef85a7-a1b7-4d38-8957-c1afd33b3442'}
        accessToken={'ae6011f8df9988771757859f80ba9d9bda45f3fb'} 
        <ChatFeed/>
      </SendbirdApp>
    </div>
  );
}

export default App;
