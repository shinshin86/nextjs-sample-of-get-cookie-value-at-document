# Next.js sample of get cookie value at document.tsx

## Usage

```bash
yarn dev
```

Press the `Add cookie value(TestCookieValue)` button and the value will be added to the cookie.
Then you will see that the cookie value is stored in the `_document.tsx` side as well.

## A case of not being able to get the value of a cookie

If you comment out `getServerSideProps`, you can't get the value of the cookie.

```diff
diff --git a/pages/index.tsx b/pages/index.tsx
index 99ea97d..23a6337 100644
--- a/pages/index.tsx
+++ b/pages/index.tsx
@@ -12,9 +12,11 @@ const IndexPage: React.FC = (): JSX.Element => (
   </div>
 );

+/*
 export async function getServerSideProps() {
   console.log('----------> Call getServerSideProps');
   return { props: {} };
 }
+*/

 export default IndexPage;
```

## Use Create Next App

This project is generated by using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).
