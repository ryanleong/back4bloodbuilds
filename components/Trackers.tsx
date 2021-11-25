import Script from "next/script";

const Trackers = (): JSX.Element => {
  if (process.env.NEXT_PUBLIC_GA_TRACKING_ID) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />
        <Script
          id="ga-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `,
          }}
        />
      </>
    );
  }

  return <></>;
};

export default Trackers;
