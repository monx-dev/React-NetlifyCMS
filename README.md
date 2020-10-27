# React NetlifyCMS

```bash
yarn add @monx/react-netlifycms
yarn add -D @types/netlify-identity-widget 
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

```typescript
import dynamic from 'next/dynamic';
import { collections } from '~/admin/collections'

const CMS = dynamic(() => import('@monx/react-netlifycms'), {
  ssr: false,
})

export default function AdminPage() {
  return (
    <NetlifyCMS
      cms={{
        config: {
          backend: {
            name: 'git-gateway',
            branch: 'master',
          },
          media_folder: 'public/uploads',
          public_folder: 'uploads',
          collections,
          local_backend: process.env.NODE_ENV !== 'production',
          load_config_file: false,
        },
        onLoad: (cms) => {  // optional
          // register previews, styles and widgets here
        },
      }}
      identity={{
        config: {
          apiURL: 
            process.env.NODE_ENV === 'production'
              ? `${process.env.NEXT_PUBLIC_URL}/.netlify/identity`
              : undefined
        },
        onLoad: (identity) => { // optional
          //
        },
      }}
    />
  );
}
```

to access admin in dev mode

```bash
yarn add -D concurrently netlify-cms-proxy-server
```

add script in package.json

```json
"dev:admin": "concurrently \"next dev\" \"netlify-cms-proxy-server\""
```

run

```bash
yarn dev:admin
```

http://localhost:3000/admin