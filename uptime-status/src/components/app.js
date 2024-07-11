import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>基于 <Link to='https://uptimerobot.com/' text='UptimeRobot' /> 接口制作，检测频率 5 分钟</p>
          <p>&copy; By <Link to='https://weexy.cn' text='Weexy' /></p>
        </div>
      </div>
    </>
  );
}

export default App;
