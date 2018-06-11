import Head from 'next/head';
import AppContainer from '../components/appcontainer';
import CssBaseline from '@material-ui/core/CssBaseline';

export default () => (
  <div>
    <Head>
      <title>Split Chat</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <CssBaseline>
      <AppContainer />
    </CssBaseline>
  </div>
);
