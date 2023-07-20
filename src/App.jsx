// React imports
import { useCallback, useEffect, useRef, useState } from 'react'
// Components imports
import Button from "./components/Button.jsx";
import Input from './components/Input.jsx';
import QrCode from './components/QrCode.jsx';
// Styling imports
import './styles/App.css'
import Logo from './components/Logo.jsx';
import ShareModal from './components/ShareModal.jsx';
import Notify from './components/Notify.jsx';

function App() {
  const [qrCodeImage, setQrCodeImage] = useState();
  const [currentUrl, setCurrentUrl] = useState("http://google.com/");
  const [notifications, setNotifications] = useState([]);
  const urlRef = useRef();

  const handleGenerateClick = () => {
    urlRef.current.value && setCurrentUrl(urlRef.current.value);
    setNotifications([...notifications, {
      content: "New QR code generated.",
    }])
  }

  useEffect(() => {
    async function fetchData() {
      try{
        await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${currentUrl}`)
        .then(async (res) => {
          if (res.ok){
            const response = await res.blob(); //Get image blob from the API
            setQrCodeImage(URL.createObjectURL(response)); //Create image output based on image blob returned by the API.
          }else{
            console.error("Error ocurred while trying to fetch API data (API fetch Error!)")
          }
        });
      }
      catch(error){
        console.error("An error ocurred! Output: "+ error);
      }
    }
    fetchData()
  }, [currentUrl])

  const handleNotificationsChange = useCallback((_notification) => {
    setNotifications(_notification);
  }, [setNotifications]);

  return (
    <div className="App">
      <div className="w-full h-full bg-[#03A9F4] flex justify-center items-center">
        <Logo></Logo>
        <Notify notifications={notifications} setNotifications={handleNotificationsChange}></Notify>
        <div className="p-4 bg-white rounded-lg w-[90vw] max-w-[400px] min-w-[200px] h-[70vh] md:h-[60vh] max-h-[600px] min-h-[200px] drop-shadow-lg flex flex-col items-center justify-between gap-4">
          <Input urlRef={urlRef}></Input>
          <QrCode imageUrl={qrCodeImage}></QrCode>

          <div className="subtitle">
            <h1>
              How to generate QR Code.
            </h1>
            <p className="text-gray-600">
              1. Specify the url on the input above <br></br>
              2. Click on generate
            </p>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between gap-2">
            <Button onClick={handleGenerateClick}>Generate</Button>
            <Button data-modal-target="shareModal" data-modal-toggle="shareModal" type="button">Share</Button>

          </div>

        </div>


        <ShareModal notifications={notifications} setNotifications={handleNotificationsChange} qrCodeImage={qrCodeImage} id="shareModal" currentUrl={currentUrl}></ShareModal>


      </div>
    </div>
  )
}

export default App
