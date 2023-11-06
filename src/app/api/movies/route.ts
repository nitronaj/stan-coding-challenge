import sample from '@/feed/sample.json';

export function GET(request: Request) {
  console.log(request);

  return Response.json({ data: sample });
}
