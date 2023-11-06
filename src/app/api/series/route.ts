import sample from '@/feed/sample.json';

export async function GET() {
  const data = await Promise.resolve(sample);
  return Response.json({ data });
}
