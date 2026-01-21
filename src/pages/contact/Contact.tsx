import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import clsx from 'clsx';
import type { LatLngExpression } from 'leaflet';
import emailImg from '../../assets/icon/email.png';
import phoneImg from '../../assets/icon/phone.png';
import navigationImg from '../../assets/icon/navigation.png';
import twitterImg from '../../assets/icon/twitter.png';
import instagramImg from '../../assets/icon/instagram.png';
import discordImg from '../../assets/icon/discord.png';

function Contact() {
  const center: LatLngExpression = [-6.3415723, 106.7878128];

  return (
    <div className="flex justify-center items-center overflow-hidden w-screen h-screen bg-midnight md:px-10">
      <div
        className={clsx(
          'flex md:w-280 w-full md:h-auto h-full bg-midnight md:shadow-2xl md:shadow-gray-500/10 md:rounded-2xl overflow-hidden',
          'font-poppins text-white',
          'md:flex-row flex-col'
        )}
      >
        <div className=" md:w-[65%] w-full md:h-100 h-full flex flex-col justify-center px-10 py-20 gap-10 relative">
          <div className="flex flex-col gap-1">
            <h1 className="text-[1.0rem]">Contact Informations</h1>
            <h2 className="md:text-[0.8rem] text-[0.7rem]">
              there are several contacts that can be contacted!
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:text-[0.8rem] text-[0.8rem]">
            <div className="flex flex-row gap-4">
              <div className="w-5 h-5 flex justify-center items-center">
                <img src={emailImg}></img>
              </div>
              <h1 className="sm:max-w-60 w-full">darykusuma741@gmail.com</h1>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-5 h-5 flex justify-center items-center">
                <img src={phoneImg}></img>
              </div>
              <h1 className="sm:max-w-60 w-full">+62 882 4608 1309</h1>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-5 h-5 flex justify-center items-center">
                <img src={navigationImg} alt="" />
              </div>
              <h1 className="sm:max-w-60 w-full">
                Jl. Damai No.104, RT.24/RW.5, Gandul, Kec. Cinere, Kota Depok, Jawa Barat 16514
              </h1>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="bg-white/15 h-9 w-9 rounded-full flex justify-center items-center">
              <img src={twitterImg} className="h-3" />
            </div>
            <div className="bg-white h-9 w-9 rounded-full flex justify-center items-center">
              <img src={instagramImg} className="h-4" />
            </div>
            <div className="bg-white/15 h-9 w-9 rounded-full flex justify-center items-center">
              <img src={discordImg} className="h-3" />
            </div>
          </div>
          <div className="bottom-16 right-16 absolute w-40 h-40 rounded-full bg-gray/20"></div>
          <div className="-bottom-13 -right-13 absolute w-60 h-60 rounded-full bg-gray/10"></div>
        </div>
        <div className="bg-gray md:w-[35%] w-full h-100 overflow-hidden">
          <MapContainer
            center={center} // Makassar
            zoom={14}
            scrollWheelZoom={false}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
