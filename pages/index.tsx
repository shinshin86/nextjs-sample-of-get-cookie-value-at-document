const IndexPage: React.FC = (): JSX.Element => (
  <div>
    <h1>Next.js sample of get cookie value at document</h1>
    <button
      onClick={() => {
        window.document.cookie = `TestCookieCalue=${Date.now()}`;
        window.location.reload();
      }}
    >
      Add cookie value(TestCookieValue)
    </button>
  </div>
);

export async function getServerSideProps() {
  console.log('----------> Call getServerSideProps');
  return { props: {} };
}

export default IndexPage;
