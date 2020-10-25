# React 

```bash
yarn add react-netlifycms
```

```typescript
import dynamic from 'next/dynamic';

const CMS = dynamic(() => import('react-netlifycms'), {
  ssr: false
})

export default function AdminPage() {
  return (
    <NetlifyCMS
      cms={{
        config: {
          // netlify cms config
        },
        onLoad: (cms) => { // optional
          // register previews, styles and widgets here
        },
      }}
      identity={{
        config: {
          apiURL: process.env.NEXT_PUBLIC_URL + './netlify/identity'
          // identity config
        },
        onLoad: (identity) => { // optional
          //
        },
      }}
    />
  );
}
```

collections.ts

```typescript
import { CmsCollection } from 'netlify-cms-core';

export const collections: CmsCollection[] = [
  {
    name: 'blog',
    label: 'Post',
    folder: 'blog',
    create: true,
    fields: [
      { label: 'Title', name: 'title', widget: 'string' },
      { label: 'Publish Date', name: 'date', widget: 'datetime' },
      { label: 'Meta Title', name: 'metaTitle', widget: 'string' },
      { label: 'Meta Description', name: 'metaDescription', widget: 'string' },
      { label: 'Meta Image', name: 'metaImage', widget: 'image' },
      { label: 'Body', name: 'body', widget: 'markdown' },
      { label: 'Tags', name: 'tags', widget: 'list' },
      { label: 'Authors', name: 'authors', widget: 'list' },
      { label: 'Published', name: 'published', widget: 'boolean' },
    ],
  },
]
```