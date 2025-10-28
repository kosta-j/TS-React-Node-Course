type FileSource = { path: string };
const fileSource: FileSource = {
  path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + read file OR reach out to database server
  if ('path ' in source) {
    //source.path => use to open file
    return;
  }
  // additional check is't necessary
  // source.connectionUrl => use to reach out database
}

// discriminated union type pattern:

type FileSource1 = { type: 'file'; path: string };
const fileSource1: FileSource1 = {
  path: 'some/path/to/file.csv',
  type: 'file',
};

type DBSource1 = { type: 'db'; connectionUrl: string };
const dbSource1: DBSource1 = {
  connectionUrl: 'some-connection-url',
  type: 'db',
};

type Source1 = FileSource1 | DBSource1;

function isFile(source: Source1) {
  return source.type === 'file';
}

function loadData1(source: Source1) {
  if (isFile(source)) {
    //source.path => use to open file
    return;
  }
  // additional check is't necessary
  // source.connectionUrl => use to reach out database
}

// guards for classes (instanceof):

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  // .join() OR .scan() ...
  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan();
}
