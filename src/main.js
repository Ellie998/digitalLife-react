import FindIdTop from './guides/find-id-top'
import FindId from './guides/find-id'
import FindIdDecription from './guides/find-id-description';


function Main() {
    return (
        <main>
            <FindIdTop/>
            <div className='sample_guide_wrap'>
                <FindId/>
                <FindIdDecription/>
            </div>
        </main>
    );
  }
  

export default Main;