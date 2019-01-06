// @flow
import rsk from './images/rsk.png';
import zeppelinOs from './images/zeppelin.svg';
import nordicChoice from './images/nordic.jpg';
import airNewZealand from './images/anz.png';
import erevmax from './images/erevmax.png';
import siesta from './images/siesta.png';

type CollaboratorType = {
  title: string,
  text: string,
  imgSrc: string
};

const collaborators: CollaboratorType[] = [
  {
    title: 'airNewZealand',
    text: 'Making the sales process less complex, Air New Zealand customers can benefit from reduced transactional costs, while the airline can take advantage of the swift and secure sharing of information',
    imgSrc: airNewZealand,
  },
  {
    title: 'nordicChoiceHotels',
    text: 'To completely bypass the booking middlemen such as Expedia and Booking.com, Nordic Choice Hotels is currently experimenting with the blockchain. Some of the rooms on Hobo have been made available on the blockchain platform Windingtree, whose data can be used by third-party apps and sites that turn to the customers.',
    imgSrc: nordicChoice,
  },
  {
    title: 'eRevMax',
    text: 'A software company - supplier of PMS. They are implementing an export of hotel inventory to Winding Tree platform.',
    imgSrc: erevmax,
  },
  {
    title: 'Siesta Cloud',
    text: 'Tech company creating PMS. They are our partner and are willing to integrate export to WT as soon as possible. We are also discussing technical details of our data structures and architecture with them.',
    imgSrc: siesta,
  },
  {
    title: 'RSK',
    text: 'Winding Tree will provide a testnet network using the smart contract solutions provided by the RSK network, using a two way payment channels we will be able to have a Lif token and smart contract platform for hotel distribution over bitcoin',
    imgSrc: rsk,
  },
  {
    title: 'Zeppelin OS',
    text: 'Winding Tree will provide its own operative system for upgradeable smart contracts in Ethereum reusing all the solutions provided by ZeppelinOS, having a direct collaboration with them on upgradeable smart contracts, on chain libraries, on chain kernels, decentralized governance, etc.',
    imgSrc: zeppelinOs,
  },


];

export default collaborators;
