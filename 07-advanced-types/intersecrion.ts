// intersection types
// type:
type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  open: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

// interface:
interface FileData1 {
  path: string;
  content: string;
}

interface DatabaseData1 {
  connectionUrl: string;
  credentials: string;
}

interface Status1 {
  open: boolean;
  errorMessage?: string;
}

interface AccessedFileData1 extends FileData, Status {}
interface AccessedDatabaseData1 extends DatabaseData, Status {}
