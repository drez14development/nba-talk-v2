import Head from "next/head";

export default function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/nba-icon.png" />
      {props.children}
    </Head>
  );
}
