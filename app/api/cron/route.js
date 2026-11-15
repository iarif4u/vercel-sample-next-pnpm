export const dynamic = 'force-dynamic';
export async function GET(request) {
  const auth = request.headers.get('authorization');
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  return Response.json({ ok: true, ran_at: new Date().toISOString() });
}
