import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description?: string;
  keywords?: string;
}

export function usePageMeta({ title, description, keywords }: PageMeta) {
  useEffect(() => {
    // ganti title
    document.title = title;

    // ganti meta description
    if (description) {
      let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!descTag) {
        descTag = document.createElement('meta');
        descTag.name = 'description';
        document.head.appendChild(descTag);
      }
      descTag.content = description;
    }

    // ganti meta keywords
    if (keywords) {
      let keywordsTag = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.name = 'keywords';
        document.head.appendChild(keywordsTag);
      }
      keywordsTag.content = keywords;
    }
  }, [title, description, keywords]);
}
