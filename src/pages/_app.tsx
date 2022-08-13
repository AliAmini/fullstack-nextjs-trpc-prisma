import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import '@styles/globals.css';
import type { AppProps } from 'next/app'
import { withTRPC } from '@trpc/next';
import { AppRouter } from 'src/server/route/app.router';
import superjson from 'superjson';
import Layout from '@components/Layout/Layout';
import { TrpcUrl } from '@config/config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withTRPC<AppRouter>({
  config({ctx}) {
    const url = TrpcUrl;
    // console.log('========== withTRPC >> url', url, process.env.TRPC_URL, process.env.HELLO);

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          }
        }
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          };
        }
        return {};
      },
      url,
      transformer: superjson
    };
  }
})(MyApp)
