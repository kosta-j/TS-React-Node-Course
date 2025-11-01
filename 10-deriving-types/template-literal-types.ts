// const userName = 'Max';
// const greeting = `Hi there, ${userName}.`;

type LiteralPermitions = 'no-read' | 'read';
type WritePermitions = 'no-write' | 'write';

// goal:
// type FilePermitions =
//   | 'no-read-write'
//   | 'read-no-write'
//   | 'no-read-no-write'
//   | 'read-write';

// combine with template string
type FilePermitions = `${LiteralPermitions}-${WritePermitions}`;

type DataFile = {
  data: string;
  permissions: FilePermitions;
};
type DataFileEventNames = `${keyof DataFile}Changed`;
type DataFileEvents = {
  [Key in DataFileEventNames]: () => void;
};
