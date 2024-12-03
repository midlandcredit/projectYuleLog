'use client';
import { useEffect, useState } from 'react';

const HtmlContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/pegatable.html')
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlContent;