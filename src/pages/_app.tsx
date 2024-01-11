import {SWRConfig} from "swr";
import App, {type AppProps, type AppContext} from "next/app";
import NavBar from "@/components/navBar";

// import '../../styles/styles.global.css';

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnMount: true,
        provider: () => new Map(),
        keepPreviousData: true,
        onErrorRetry: (error, _key, _config, revalidate, {retryCount}) => {
          // Never retry on 404.
          if (error.status === 404) return;

          // Only retry up to 10 times.
          if (retryCount >= 10) return;

          // Retry after 5 seconds.
          setTimeout(() => revalidate({retryCount}), 5000);
        },
        fetcher: (resource, init) =>
          fetch(resource, init)
            .then((res) => {
              if (!res.ok) {
                console.error(res.statusText);
                return {data: null};
              }
              return res.json();
            })
            .then(({data}) => data),
      }}
    >
      <NavBar />
      <Component {...pageProps} />
    </SWRConfig>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  if (appContext.ctx.res?.statusCode === 404) {
    appContext.ctx.res.writeHead(302, {Location: "/not-found"});
    appContext.ctx.res.end();
  }

  return {...appProps};
};
