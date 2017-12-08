// @flow
import React from 'react';

type Props = {
  developper: string,
  language: string,
  copyrightYear: string,
  githubRepo: string,
};

const Footer = ({ developper, language, copyrightYear, githubRepo }: Props) => {
  return (
    <div className="footer">
      Demo app developped by <a href={githubRepo} target="_blank">{developper}</a> with {language}.<br />
      Copyright {copyrightYear}
    </div>
  );
};

export default Footer;
