import React from 'react';

const detectRobot = (userAgent: string): boolean => {
  const robots = new RegExp(
    (
      [
        /bot/,
        /spider/,
        /crawl/, // GENERAL TERMS
        /APIs-Google/,
        /AdsBot/,
        /Googlebot/, // GOOGLE ROBOTS
        /mediapartners/,
        /Google Favicon/,
        /FeedFetcher/,
        /Google-Read-Aloud/,
        /DuplexWeb-Google/,
        /googleweblight/,
        /bing/,
        /yandex/,
        /baidu/,
        /duckduck/,
        /yahoo/, // OTHER ENGINES
        /ecosia/,
        /ia_archiver/,
        /facebook/,
        /instagram/,
        /pinterest/,
        /reddit/, // SOCIAL MEDIA
        /slack/,
        /twitter/,
        /whatsapp/,
        /youtube/,
        /semrush/, // OTHER
      ] as RegExp[]
    )
      .map((r) => r.source)
      .join('|'),
    'i'
  ); // BUILD REGEXP + "i" FLAG

  return robots.test(userAgent);
};

function useReduceMotion() {
  const [matches, setMatch] = React.useState(false);
  React.useEffect(() => {
    const userAgent = navigator.userAgent;
    const isRobot = detectRobot(userAgent);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      setMatch(mq.matches || isRobot);
    };
    handleChange();
    mq.addEventListener('change', handleChange);
    return () => {
      mq.removeEventListener('change', handleChange);
    };
  }, []);
  return matches;
}

export default useReduceMotion;
