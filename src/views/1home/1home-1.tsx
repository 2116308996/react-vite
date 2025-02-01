import Index1 from './1home-1/1index';
import Indexcode1 from './1home-1/1index?raw';
import Viewcode from '../../cmpontents/viewcode';
function home1to1(){
  console.log(Index1)
    return (
    <>
      <Index1></Index1>
      <Viewcode el={Indexcode1}></Viewcode>
    </>
    );
}
export default home1to1