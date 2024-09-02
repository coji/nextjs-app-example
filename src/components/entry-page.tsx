import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { prisma } from '@/lib/prisma'

export default function EntryPage({ entryId }: { entryId: number }) {
  return (
    <>
      <EntryContainer entryId={entryId} />
    </>
  )
}

async function EntryContainer({ entryId }: { entryId: number }) {
  const post = await prisma.entry.findUniqueOrThrow({ where: { id: entryId } })
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
    </Card>
  )
}
