import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

type Props = {}

declare global {
  interface Window {
    app?: any;
  }
}

const Bridge: NextPage<Props> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [clientSideCookie, setClientSideCookie] = useState<string>();
  const [bridgeData, setBridgeData] = useState({});

  const requestToBackend = async () => {
    setIsLoading(true);
    const res = await fetch('api/hello');
    setResponse(await res.json());
    setIsLoading(false);
  }

  useEffect(() => {
    setBridgeData(window.app ? window.app : {})
    setClientSideCookie(document.cookie ? document.cookie : 'no cookies')
  }, [])

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>WebView</h1>
      <div style={{ border: 'solid 1px #ddd', padding: '5px', borderRadius: '3px' }}>
        <small>Client Side Cookies:</small>
        <hr />
        <pre style={{ textAlign: 'left' }}>{clientSideCookie}</pre>
      </div>
      <br />
      <div style={{ border: 'solid 1px #ddd', padding: '5px', borderRadius: '3px' }}>
        <small>{`Bridge Data (window.app):`}</small>
        <hr />
        <pre style={{ textAlign: 'left' }}>{JSON.stringify(bridgeData, undefined, 2)}</pre>
      </div>
      <br />
      <div style={{ border: 'solid 1px #ddd', padding: '5px', borderRadius: '3px' }}>
        <button onClick={requestToBackend}>Client Side Request to Backend</button>
        <hr />
        <pre style={{ textAlign: 'left' }}>
          <small>Response: </small><br />
          {isLoading ? 'loading' : JSON.stringify(response, undefined, 2)}
        </pre>
      </div>
    </div>
  )
}

export default Bridge;