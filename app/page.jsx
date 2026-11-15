export const dynamic = 'force-dynamic';
export default function Page() {
  return (
    <main>
      <h1>{process.env.NEXT_PUBLIC_SITE_NAME ?? 'Next.js sample'}</h1>
      <p>Rendered on the server at {new Date().toISOString()}.</p>
      <p>Secret vars present: API_KEY={process.env.API_KEY ? 'yes' : 'no'}, CRON_SECRET={process.env.CRON_SECRET ? 'yes' : 'no'}.</p>
      <p>Public API base: {process.env.NEXT_PUBLIC_API_BASE ?? '(unset)'}</p>
    </main>
  );
}
