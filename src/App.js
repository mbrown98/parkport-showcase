
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Parkport"
        description="Access the beauty of America in the palm of your hand. Find new parks, mark those you have visited, and favorite the ones you wish to learn more about."
        // showBtn
        mockupImg={assets.home}
        reverse
        // banner="banner"
      />
      <SectionWrapper 
        title="Discover"
        description="Use the map to travel around the country. Explore coast to coast, uncover hidden gems, and plan your next road trip."
        mockupImg={assets.map}
        reverse
      />
      {/* <Features /> */}
      <SectionWrapper 
        title="Challenge"
        description="How well do you know your parks? From moments in history to massive mountains, challenge yourself to set high scores."
        mockupImg={assets.game}
        reverse
      />
      <SectionWrapper 
        title="Stay in the Know"
        description="Follow news releases, alerts, and events for all your favorite parks. The National Park Service is the source of all data."
        mockupImg={assets.know}
        // banner="banner02"
        reverse
      />
      {/* <Download /> */}
      <Features />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Matthew Brown: {'  '}
        <span className="bold">(240) 204-2927 ---- matthewbrown0798@gmail.com</span>
        </p>
      </div>
    </>
  );
}

export default App;
