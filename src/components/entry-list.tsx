import { prisma } from '@/lib/prisma'
import type { Entry } from '@prisma/client'
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui'

export const EntryList = async () => {
  const entries = await prisma.entry.findMany()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Published</TableHead>
          <TableHead>updatedAt</TableHead>
          <TableHead>createdAt</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map((entry) => (
          <EntryListItem key={entry.id} entry={entry} />
        ))}
      </TableBody>
    </Table>
  )
}

const EntryListItem = ({ entry }: { entry: Entry }) => {
  return (
    <TableRow>
      <TableHead>{entry.id}</TableHead>
      <TableHead>{entry.title}</TableHead>
      <TableHead>{entry.published}</TableHead>
      <TableHead>{entry.updatedAt.toISOString()}</TableHead>
      <TableHead>{entry.createdAt.toISOString()}</TableHead>
    </TableRow>
  )
}
